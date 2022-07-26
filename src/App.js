import React from "react";
import Header from "./components/header/header.component.jsx";
import Main from "./components/main/main.component.jsx";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;

// const [formData, setformData] = React.useState({
//   email: "",
//   password: "",
//   conPassword: "",
//   join: false,
// });

// function handleSubmit(event) {
//   event.preventDefault();
//   if (formData.password === formData.conPassword) {
//     console.log("Successfully signed up");
//   } else {
//     console.log("Password Mismatch");
//     return;
//   }

//   if (formData.join) {
//     console.log("Thanks for signing up for the newsletter");
//   }
// }

// function handleChange(event) {
//   const { name, value, type, checked } = event.target;

//   setformData((prevFormData) => {
//     return {
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     };
//   });
// }
// console.log(formData);

// return (
//   <div>
//     <form onSubmit={handleSubmit} className="form">
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         value={formData.email}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         value={formData.password}
//       />
//       <input
//         type="password"
//         name="conPassword"
//         placeholder="confirm password"
//         onChange={handleChange}
//         value={formData.conPassword}
//       />
//       <input
//         type="checkbox"
//         id="joinNews"
//         name="join"
//         onChange={handleChange}
//         checked={formData.join}
//       />
//       <label htmlFor="joinNews">Do you want to join news letter</label>
//       <button>Sign Up</button>
//     </form>
