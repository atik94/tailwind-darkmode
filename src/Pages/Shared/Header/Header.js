import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <div className="navbar bg-base-100 dark: text-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              {/* <button className="bg-green-200 rounded-3xl" onClick={handleThemeSwitch}>
                Dark Mode
              </button> */}

              <div className="switch bg-base-100">
                {/* <label> {theme === "Dark" ? "Dark Mode" : "Light Mode"}</label> */}

                <ReactSwitch
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  onChange={handleThemeSwitch}
                  checked={theme === "dark"}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
