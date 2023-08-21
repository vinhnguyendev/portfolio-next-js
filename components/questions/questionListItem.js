import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function QuestionListItem(props) {
  const { id, question, answer } = props.question;
  const [open, setOpen] = useState(false);

  return (
    <li onClick={() => (open ? setOpen(false) : setOpen(true))} key={question} className="py-5">
      <div className="flex justify-between gap-x-6 ">
        <p>{question}</p>
        <button >
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className={!open? "hidden" : "bg-[#4b5563] border  border-slate-600 bg-opacity-20 my-5 p-5 rounded-xl drop-shadow-lg mt-4"}>
      <p>"{answer}"</p>
      </div>
    </li>
  );
}
