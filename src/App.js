import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

//how to map:
//{OriginalArrayName.map(newArrayName => locationOfNewArray_AKA_NewComponent name={newArrayName.selectThePropertyFromTheOrigianlArray} )}
//How to index the aforementioned new array with index numbers. The map also indexs the number along with property of the array
//{OriginalArrayName.map(newArrayName, i => locationOfNewArray_AKA_NewComponent name={newArrayName.selectThePropertyFromTheOrigianlArray} num={i} )}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div accordion>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToogle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
