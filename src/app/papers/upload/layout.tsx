import React from "react";
import UploadLayout from "../_components/UploadLayout";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <UploadLayout />
      {children}
    </>
  );
};

export default layout;
