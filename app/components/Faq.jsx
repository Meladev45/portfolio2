import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What do you need to start working?",
    answer:
      "I need a doc including complete project details to start the project.",
  },
  {
    question: "Is hosting and domain registration inclusive in your pricing?",
    answer:
      "No, Hosting and domain is taken care separately you can pay for it or take care of it if you know how to.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, Tailwind CSS, JavaScript, and modern web development tools.",
  },
  {
    question: "What do I need to provide for the Figma to Next Js conversion?",
    answer:
      "Simply share your Figma design files and any specific requirements. I`ll take care of the rest.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "This depends on the complexity of the project, your availability and your payment. once we have all these sorted out, i will give you a completion date.",
  },
  {
    question: "Can you help with website maintenance?",
    answer:
      "Yes, I offer ongoing support and maintenance packages for all my clients.",
  },
];

const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFaq = (idx) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section
			id="faqs"
			className="w-full px-[8%] py-16 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#1a0033] dark:via-darkTheme dark:to-[#2a004a]"
		>
			<h2 className="text-center text-4xl font-main2 mb-10 font-bold text-purple-900 dark:text-purple-200 drop-shadow-lg">
				Frequently Asked Questions
			</h2>
			<div className="max-w-2xl mx-auto grid grid-cols-1 gap-8">
				{faqData.map((faq, idx) => (
					<div
						key={idx}
						className="rounded-xl shadow-lg border border-purple-200 dark:border-purple-900 bg-white dark:bg-[#1a0033] transition-all duration-300 flex flex-col"
					>
						<button
							onClick={() => toggleFaq(idx)}
							className="w-full flex items-center justify-between px-6 py-5 focus:outline-none group"
						>
							<span className="text-lg font-semibold text-purple-800 dark:text-purple-200 group-hover:text-purple-600 transition-colors duration-300">
								{faq.question}
							</span>
							<span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 shadow group-hover:bg-purple-300 transition-all duration-300">
								{openIndex === idx ? <FaMinus /> : <FaPlus />}
							</span>
						</button>
						<div
							className={`px-6 pb-5 text-gray-700 dark:text-gray-200 transition-all duration-300`}
							style={{
								maxHeight: openIndex === idx ? "200px" : "0px",
								opacity: openIndex === idx ? 1 : 0,
								overflow: "hidden",
							}}
						>
							{faq.answer}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
