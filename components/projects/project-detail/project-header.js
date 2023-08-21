import React from "react";
import Image from "next/image";

export default function ProjectHeader(props) {
  const { title, image } = props;

  return (
    <header className="w-full flex-col">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 opacity-50 z-10"></div>
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="m-5">
        <h1 className="">{title}</h1>
      </div>
    </header>
  );
}
