
import QuestionListItem from "./questionListItem";

const questions = [
    {
      id: 1,
      question:
        "What programming languages or technologies do I enjoy working with the most?",
      answer: "My programming compass points to JavaScript, while React and Next.js refine my North Star",
    },
    {
      id: 2,
      question:
        "How do you approach problem-solving and learning new concepts in your field?",
      answer: "Problems: puzzles I solve strategically. New concepts: adventures I embrace eagerly. Tech's my playground",
    },
    {
      id: 3,
      question: "What are your favorite hobbies or activities outside of work?",
      answer: "After tech, soccer’s my arena, ball games ignite. Trails, untamed; travel, uncharted - chapters beyond the keyboard",
    },
  ];
  
export default function QuestionsList() {
  

    return (
      <ul role="list" className="divide-y divide-gray-100 w-[100%] lg:w-[50%]">
         <h3 className="my-5  text-slate-50 font-normal dark:text-slate-200">
            FAQ
          </h3>
        {questions.map((question) => (
          <QuestionListItem key={question.question} question={question}/>
        ))}
      </ul>
    );
  }