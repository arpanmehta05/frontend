import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import Squares from "./Background";

export default function Template({ type, text1, text2, heading }) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Google Sign-In Failed"),
  });
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10 w-full max-w-md p-8 bg-[#fff] rounded-lg shadow-xl border border-gray-700/50">
        <div className="flex items-center justify-center align-middle gap-2 w-full px-4 mb-6">
          <div className="text-2xl font-semibold text-[#000814]">{heading}</div>
          <div className="w-32">
            <img src="LOGO_BLACK.png" className="" alt="" />
          </div>
        </div>
        <div>
          {type === "login" && <LoginForm />}
          {type === "signup" && <SignupForm />}
        </div>
        <div className="mt-6 text-[#424854] text-xl items-center justify-center w-full text-center">
          or
        </div>
        <div className="mt-6 space-y-4">
          <div className="w-full flex flex-col">
            <button
              onClick={() => login()}
              className="text-sm flex items-center gap-2 justify-center bg-[#f5f3f3] text-[#585D69] font-medium px-6 py-3 rounded-lg hover:text-[#f5f3f3] hover:bg-[#000814]"
            >
              <FcGoogle fontSize={23} />
              <span>Login With Google</span>
            </button>
          </div>

          <a
            href="https://github.com/login/oauth/authorize?client_id=Ov23liPbOMSVCNExxy2L&scope=user"
            className="w-full flex flex-col"
          >
            <button className="text-sm flex items-center justify-center gap-2 bg-[#f5f3f3] text-[#585D69] font-medium px-6 py-3 rounded-lg hover:text-[#f5f3f3] hover:bg-[#000814]">
              <FaGithub fontSize={23} />
              <span>Login With GitHub</span>
            </button>
          </a>
        </div>
        <div className="w-full items-center justify-center flex mt-6">
          {type === "login" ? (
            <div>
              <p className="mt-4 text-[#424854] text-sm ">
                {text1 + " "}
                <a href="/signup" className="text-[#000814] font-semibold">
                  {text2}
                </a>
              </p>
            </div>
          ) : (
            <div>
              <p className="mt-4 text-[#424854] text-sm">
                {text1 + " "}
                <a href="/login" className="text-[#000814] font-semibold">
                  {text2}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
