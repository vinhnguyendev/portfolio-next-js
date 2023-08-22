import React from "react";
import { IoChevronBack } from "react-icons/io5";

export default function ProjectDetailNavbar(props) {
  return (
    <div className="flex flex-col h-20 bg-gradient-to-r from-from-current to-transparent">
      <button className="my-auto px-4" onClick={props.handleGoBack}>
        <div className="flex gap-1 lg:gap-4">
          <IoChevronBack className="my-auto" size={20} />
          <span className="my-auto text-xl ">Back</span>
        </div>
      </button>
    </div>
  );
}
