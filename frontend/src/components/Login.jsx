import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { errorClass, labelClass, formCard, formTitle, formGroup, inputClass, submitBtn } from "../styles/common";
import {toast} from 'react-hot-toast'

function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const login = useAuth(state=>state.login);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);
  const error = useAuth((state) => state.error);
  
  const navigate = useNavigate();

  async function onSubmit(obj) {
    await login(obj);
  }

  useEffect(() => {
    if(isAuthenticated) {
      if(currentUser?.role === "USER") {
        toast.success("Loggidin Successfully");
        navigate("/user-profile");
      }
      if(currentUser?.role === "AUTHOR") {
        toast.success("Loggidin Successfully");
        navigate("/author-profile");
      }
      if(currentUser?.role === "ADMIN") {
        toast.success("Loggidin Successfully");
        navigate("/admin-profile");
      }
    }
  }, [isAuthenticated]);

  return (
    <div className="py-20 bg-slate-50 min-h-[calc(100vh-80px)]">
      <div className={formCard}>
        <h2 className={formTitle}>Login</h2>
        {
          error ? <p className={errorClass}>{error}</p> : null
        }
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className={formGroup}>
            <label className={labelClass}>Email:</label>
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              {...register("email", { required: "Email required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <label className={labelClass}>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className={inputClass}
              {...register("password", { required: "Password required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className={submitBtn}
          >
            Login
          </button>

        </form>
      </div>

    </div>
  );
}

export default Login;