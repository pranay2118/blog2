// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       Home
//     </div>
//   )
// } 

// export default Home

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import { pageBackground, pageWrapper, articleGrid, articleCardClass, articleTitle, articleExcerpt, tagClass } from "../styles/common";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();

  useEffect(() => {
    async function getLatestArticles() {
      try {
        setLoading(true);
        // console.log("cur", currentUser);
        const end = currentUser.role === "AUTHOR" ? "author-api" : "user-api";
        console.log("end", end);

        const resObj = await axios.get(
          `http://localhost:5001/${end}/articles`,
          { withCredentials: true }
        );

        // latest 3 blogs
        setArticles(resObj.data.payload.slice(0, 3));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getLatestArticles();
  }, []);

  return (
    <div className={pageBackground}>
      <div className={pageWrapper}>

      {/* Welcome Section */}
      <div className="text-center mb-16">
        {isAuthenticated && (
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome Back,{" "}
            <span className="text-indigo-600">
              {currentUser.firstName}
            </span>
          </h1>
        )}

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
        
        </p>
      </div>

      {/* Latest Blogs Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Latest Blogs
        </h2>

        <button
          onClick={() => navigate("/user-profile")}
          className="text-indigo-500 font-semibold hover:underline"
        >
          View All →
        </button>
      </div>

      {/* Latest Blogs */}
      {loading ? (
        <div className="text-center text-gray-500 text-lg">
          Loading...
        </div>
      ) : (
        <div className={articleGrid}>
          {articles.map((art, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/article/${art._id}`)}
              className={articleCardClass}
            >
              {/* Image
              <img
                src={art.imageUrl}
                alt=""
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
              /> */}

              {/* Content */}
              <div>
                {/* Category */}
                <span className={tagClass}>
                  {art.category}
                </span>

                {/* Title */}
                <h3 className={`${articleTitle} mt-3 group-hover:text-indigo-600 transition`}>
                  {art.title}
                </h3>

                {/* Content Preview */}
                <p className={`${articleExcerpt} mt-3 line-clamp-3`}>
                  {art.content}
                </p>

                <div className="mt-5 flex justify-between items-center text-sm text-slate-500">
                  <span>
                    {new Date(art.createdAt).toLocaleDateString()}
                  </span>

                  <span className="text-indigo-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;