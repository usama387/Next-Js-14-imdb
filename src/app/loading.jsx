import React from 'react';
import Image from "next/link";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
        <Image src="/spinner.svg" alt="spinner-svg" className="h-52"  />
    </div>
  )
}

export default Loading;