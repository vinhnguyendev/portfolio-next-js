import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function QuestionListItem(props) {
  const { question, answer } = props.question;
  const [open, setOpen] = useState(false);

  return (
    <li onClick={() => (open ? setOpen(false) : setOpen(true))} key={question} className="py-5 relative">
      <div className="flex justify-between gap-x-6 ">
        <p>{question}</p>
        <button >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={!open? "absolute max-h-0 opacity-0 mt-[-50] transition-all duration-200" : "overflow-hidden transition-all duration-500 max-h-full opacity-100 mt-4"}>
      <div className="bg-[#4b5563] border  border-slate-600 bg-opacity-20 my-5 p-5 rounded-xl drop-shadow-lg">
      <p>"{answer}"</p>
      </div>
      </div>
    </li>
  );
}
