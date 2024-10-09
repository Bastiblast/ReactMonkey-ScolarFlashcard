import React, { Component } from "react";
import { ThemeSelectorTest } from "./ThemeSelector copy";

export default class Navbar extends Component {
  render() {
    return (
      <div className="fixed z-50 h-20 navbar bg-primary text-primary-content">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="text-xl btn btn-ghost">
            Identification... Bienvenue /you
          </a>
        </div>
        <div className="flex-none">
          <ThemeSelectorTest>
            <button
              tabIndex={0}
              className="flex flex-row w-full btn btn-square btn-ghost"
            >
              <span>Themes</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </ThemeSelectorTest>
        </div>
      </div>
    );
  }
}
