"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
//import { apiUrl } from "../_components/Login";

export default function GithubCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      // code 없으면 홈으로
      router.replace("/");
      console.log("code가 없습니다.");
      return;
    }

    fetch(`/api/auth/github/callback?code=${code}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then(async (res) => {
        if (res.ok) {
          router.replace("/");
        } else {
          alert("로그인 실패");
          router.replace("/login");
        }
      })
      .catch(() => {
        alert("로그인 실패");
        router.replace("/login");
      });
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      로그인 중입니다...
    </div>
  );
}
