"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] p-6 text-white">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl shadow-2xl">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Welcome Back
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            
               "Enter your details to access your account"
              {/* : "Join our community today"} */}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-indigo-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-indigo-500"
          />

          {/* Button */}
          <button className="w-full rounded-xl bg-indigo-600 p-3 font-bold hover:bg-indigo-500 transition">
          Login
          </button>
        </form>

       
        

           <p className="text-center text-sm text-gray-400">
          
           "New here?"
           <a href="/signup">Create account</a>

        </p>
        
      </div>
    </div>
  );
}