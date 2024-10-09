import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export class ThemeSelectorTest extends React.Component {
  children;
  constructor(props: Props) {
    super(props);
    this.children = props.children;
  }
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

  savePreference(event: React.MouseEvent<HTMLInputElement>): void {
    const dropdownElement: HTMLInputElement =
      event.currentTarget as HTMLInputElement;
    const chosenTheme: string = dropdownElement.value;
    localStorage.setItem("theme", chosenTheme);
  }

  render() {
    return (
      <div className="relative w-32 dropdown">
        {this.children}
        <ul
          tabIndex={0}
          className="dropdown-content flex flex-col h-screen overflow-scroll bg-accent rounded-box z-[1] w-full p-2 shadow-2xl"
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
                  onClick={this.savePreference}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
