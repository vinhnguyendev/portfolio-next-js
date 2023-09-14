import React from "react";
import QuestionsList from "./questionList";

export default function Questions() {
  return (
    <div className="flex page-layout lg:justify-end">
      <div className="w-[100%] lg:w-[50%]">
      <h3 className="my-5  text-slate-50 font-normal dark:text-slate-200">
        FAQ
      </h3>
      <QuestionsList />
      </div>
    </div>
  );
}
