import React, { useState } from "react";
const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  // Example data for accordion items
  const accordionData = [
    { title: "Accordion 1", content: "Content for Accordion 1" },
    { title: "Accordion 2", content: "Content for Accordion 2" },
    { title: "Accordion 3", content: "Content for Accordion 3" },
  ];
  return (
    <div className="mx-auto max-w-[1120px]">
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </div>
            <div
              className={`accordion-content ${
                openAccordion === index ? "open" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;

// const Accordion = ({ title, discription }) => {
//   const [accrodionOpen, setAccordionOpen] = useState();
//   return (
//     <>
//       <div className=" max-w-[740px] mx-auto px-3 w-full mb-3 relative">
//         <h2>
//           <button
//             onClick={() => {
//               setAccordionOpen(!accrodionOpen);
//             }}
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 transition-all"
//           >
//             <span>{title}</span>
//             {/* arrow icon here */}
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 stroke-linejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//                 className="transition-all"
//                 style={{
//                   transform: accrodionOpen ? "rotate(180deg)" : "rotate(0)",
//                   transformOrigin: "center",
//                 }}
//               />
//             </svg>
//           </button>
//         </h2>
//         <div
//           className={
//             accrodionOpen
//               ? "transition-all opacity-1 h-max visible"
//               : "transition-all opacity-0 h-0 invisible"
//           }
//         >
//           <div className="p-5 border border-gray-200 dark:border-gray-700">
//             <p className=" text-gray-500 dark:text-gray-400">{discription}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accordion;
