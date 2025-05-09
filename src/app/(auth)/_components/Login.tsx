"use client";
import React from "react";

export const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Login = () => {
  const handleGithubLoginBtn = async () => {
    // try {
    //   const response = await fetch(`${apiUrl}/api/auth/github`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       credentials: "include",
    //     },
    //   });

    //   if (response.ok) {
    //     window.location.href = `${apiUrl}/api/auth/github`;
    //   } else {
    //     console.error("GitHub 로그인 요청 실패");
    //   }
    // } catch (error) {
    //   console.error("GitHub 로그인 에러:", error);
    // }
    window.location.href = `${apiUrl}/api/auth/github`;
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[80rem] h-px bg-[#000000] mt-[6.25rem] mb-12" />
        <h1 className="font-[HakgyoansimMulgyeol] text-[3.75rem] text-[#2A437B] mb-10">
          논문한입
        </h1>
        <h2 className="text-[#5F5F5F] font-bold text-3xl">
          논문의 본질을 이해하는 가장 빠른 방법
        </h2>
        <div>
          {/*TODO: 스타일 수정*/}
          <button onClick={handleGithubLoginBtn}>깃허브 로그인</button>
        </div>
        <div className="w-[80rem] h-px bg-[#000000] mt-12 mb-[6.25rem]" />
      </div>
    </div>
  );
};

export default Login;
