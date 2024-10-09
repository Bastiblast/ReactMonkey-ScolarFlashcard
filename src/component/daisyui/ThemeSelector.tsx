import React from "react";

export class ThemeSelector extends React.Component {
  themeListe = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  render() {
    return (
      <div className="relative z-50 dropdown">
        <div tabIndex={0} role="button" className="m-1 btn">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block w-2 h-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
        >
          {this.themeListe.map((theme) => {
            return (
              <li key={theme}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="justify-start theme-controller btn btn-sm btn-block btn-ghost"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
