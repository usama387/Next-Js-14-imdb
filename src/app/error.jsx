"use client";
import React, { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Please try again🙄</h1>
      <button className="hover:text-amber-600" onClick={()=>reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
