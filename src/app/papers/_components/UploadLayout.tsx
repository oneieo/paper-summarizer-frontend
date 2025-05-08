import React from "react";

const UploadLayout = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mt-8">논문 업로드</h1>
        <div className="w-[80rem] h-px bg-[#000000] my-8" />
      </div>
      <div className="flex justify-center items-center ">
        <h1>요약하고 싶은 논문을 끌어다 놓으세요.</h1>
        <h3>지원 파일 형식: PDF, LaTex</h3>
        <button>파일 선택하기</button>
      </div>
    </div>
  );
};

export default UploadLayout;
