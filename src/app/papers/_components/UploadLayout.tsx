"use client";
import React from "react";
import { usePathname } from "next/navigation";

const UploadLayout = () => {
  const pathname = usePathname();
  const isAnalyze = pathname.includes("analyze");
  const isEdit = pathname.includes("edit");

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mt-8">
          {isAnalyze
            ? "논문 분석"
            : isEdit
            ? "논문 요약본 편집"
            : "논문 업로드"}
        </h1>
        <div className="w-[80rem] h-px bg-[#000000] my-8" />
      </div>
    </div>
  );
};

export default UploadLayout;
