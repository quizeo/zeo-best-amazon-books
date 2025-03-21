import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllBooks from "./data_books.js";
import Book from "./book.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function BookList() {
  return (
    <div className="container">
      <h1 className="title">Amazon Best Sellers</h1>
      <section className="booklist">
        {AllBooks.map((book, index) => {
          return <Book key={book.id} number={index} {...book}></Book>;
        })}
      </section>
    </div>
  );
}

root.render(<BookList />);

// const EventExample = () => {
//   const [alertValue, setAlertValue] = useState("");

//   const InputkHandler = (event) => {
//     const { value } = event.target;
//     setAlertValue(value);
//   };
//   const handleButton = (event) => {
//     alertValue === ""
//       ? alert("Please enter a value")
//       : alert("the value is " + alertValue);
//     event.preventDefault();
//   };

//   const formhandler = (e) => {
//     console.log("form submitted");
//     e.preventDefault();
//   };
//   return (
//     <section className="form_section">
//       <form action="">
//         <h2>Typical Form</h2>
//         <input
//           onChange={InputkHandler}
//           type="text"
//           name="example"
//           value={alertValue}
//           style={{ margin: "1rem 0" }}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             return handleButton();
//           }}
//         >
//           Click me
//         </button>
//       </form>
//     </section>
//   );
// };
