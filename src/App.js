// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return <div className="h-screen bg-lime-400"></div>;
// }

// export default App;

import "./App.css";

import { useState, useEffect } from "react";
import Header from "./Pages/Shared/Header/Header";

function App() {
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  return (
    <div className="h-screen dark:bg-black dark:text-white ">
      <Header></Header>
      <h1>This is a home page</h1>
    </div>
  );
}

export default App;
