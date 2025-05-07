import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* 첫 번째 선 */}
        <div className="w-[80rem] h-px bg-[#D9D9D9] my-[6.25rem]" />
        <h1 className="font-[HakgyoansimMulgyeol] text-[2.5rem]">논문한입</h1>
        {/* 두 번째 선 */}
        <div className="w-[80rem] h-px bg-[#D9D9D9] my-[6.25rem]" />
      </div>
    </div>
  );
};

export default page;
