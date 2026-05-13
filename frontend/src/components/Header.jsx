import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../store/authStore'
import { navbarClass, navContainerClass, navBrandClass, navLinksClass, navLinkClass, navLinkActiveClass, primaryBtn, secondaryBtn } from '../styles/common';
import toast from 'react-hot-toast';

function Header() {
  const isAuthenticated = useAuth(state=>state.isAuthenticated);
  const user = useAuth(state=>state.currentUser);
  const logout = useAuth(state=>state.logout);
  const navigate = useNavigate();
  
  const onLogout = async () => {
    await logout();
    toast.success("Logging Out successfully...");
    navigate('/login');
  }

  return (
    <nav className={navbarClass}>
      <div className={navContainerClass}>
        {/* Logo */}
        <h1 className={`${navBrandClass} cursor-pointer`} onClick={() => navigate("/")}>
          Suntek Blog
        </h1>
        {/* Menu */}
        <ul className={navLinksClass}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}>
              Register
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li className="flex items-center gap-4 ml-2"> 
              {/* Profile */}
              <img 
                src={user?.profileImageUrl} 
                alt="Profile"
                className="w-8 h-8 rounded-full border border-slate-200 shadow-sm object-cover"
              />
              {/* Logout Button */}
              <button onClick={onLogout} className={secondaryBtn}>
                Logout
              </button>
            </li>
          ) : (
            <li className="ml-2">
              <NavLink to="/login" className={primaryBtn}>
                Login
              </NavLink>
            </li>
          )}

        </ul>
      </div>
    </nav>
  )
}

export default Header
