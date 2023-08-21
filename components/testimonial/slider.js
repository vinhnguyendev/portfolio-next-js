import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SliderHeader from "./header";

const testimonials = [
  {
    id: 1,
    image: "testimonial_01.png",
    name: "Arthur Baranov",
    role: "DevSecOps Engineer",
    company: "Insight Global",
    text: "I had the pleasure of mentoring Vinh after he completed the DevMountain coding bootcamp. Vinh's work ethic and determination always inspired me to push myself more. Vinh's passion for software development is motivational and I'm impressed by his ability to pick up complex tasks quickly...",
  },
  {
    id: 2,
    image: "testimonial_02.png",
    name: "Max Dinh Tran",
    role: "Co-Founder",
    company: "Clingstone",
    text: "Vinh is an extremely talented individual and an asset to any development team. He excels in his ability to think creatively and come up with unique, efficient solutions for any problem. His attention to detail is unmatched, and his work ethic is second-to-none",
  }
];

export default function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const imagePath = `/assets/images/testimonials/${testimonials[currentTestimonial].image}`;

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-slider flex flex-col justify-end lg:w-[50%]">
      <SliderHeader />
      <div className="testimonial text-start mb-8 py-5 px-4  bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg">
        <div className="flex gap-2">
          <Image
            className="rounded-full"
            src={imagePath}
            height={70}
            width={70}
            alt={testimonials[currentTestimonial].name}
          />
          <div className="p-2">
            <h5 className="testimonial-name italic">
              {testimonials[currentTestimonial].name}
            </h5>
            <span className="text-xs">
              {testimonials[currentTestimonial].role}
            </span>
            <span className="px-1 text-xs">at</span>
            <span className="text-xs highlight-text">
              {testimonials[currentTestimonial].company}
            </span>
          </div>
        </div>
        <p className="testimonial-text text-md py-4">
          "{testimonials[currentTestimonial].text}"
        </p>
        <Link
          className="flex text-sm text-neutral-500 underline hover:text-[#3E6E8E]"
          href="https://www.linkedin.com/in/vinh-nguyen-software-developer/details/recommendations/"
        >
          <span>View Full Review</span>
          <span className="flex ps-1">
            <BsArrowRight className="flex" size={20} />
          </span>
        </Link>
      </div>
      <div className="controls flex justify-center lg:justify-start">
        <button
          className={
            testimonials[currentTestimonial].id < testimonials.length
              ? "text-2xl font-bold mr-2 focus:outline-none opacity-50"
              : "text-2xl font-bold mr-2 focus:outline-none opacity-100"
          }
          onClick={prevTestimonial}
        >
          &#8249;
        </button>
        <span className="px-2 text-xs flex flex-col justify-center">
          <div className="flex">
            <p className="text-white">{testimonials[currentTestimonial].id}</p>
            <p className="px-1">/</p>
            <p className={testimonials[currentTestimonial].id == testimonials.length? "text-white" : ""} >
              {testimonials.length}
            </p>
          </div>
        </span>
        <button
          className={
            testimonials[currentTestimonial].id < testimonials.length
              ? "text-2xl font-bold mr-2 focus:outline-none opacity-100"
              : "text-2xl font-bold mr-2 focus:outline-none opacity-50"
          }
          onClick={nextTestimonial}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
