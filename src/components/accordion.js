import React, { useState } from "react";
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" onClick={toggleAccordion}>
        {title}
      </h2>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
export default Accordion;