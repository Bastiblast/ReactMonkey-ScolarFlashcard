import React, {useEffect} from "react";
import "./App.css";
import Navbar from "./component/daisyui/Navbar.tsx";
import Accueil from "./Accueil.tsx";
import Entrainement from "./Entrainement.tsx";
import CarouselFullWidth from "./component/daisyui/CarouselFullWidth.tsx";
import Statistiques from "./Statistiques.tsx";
import Examens from "./Examens.tsx";

function App() {
  const setThemePreference = () => {
    const themePreference = localStorage.getItem("theme");
    console.log("getThemePreference theme : ", themePreference);
    const navigationTheme =
      document.querySelector<HTMLHtmlElement>("html")!.dataset;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    themePreference
      ? navigationTheme.theme = themePreference
      : navigationTheme.theme = "corporate";
  };

  setThemePreference();
  
  return (
    <>
      <Navbar />
      <CarouselFullWidth>
        <Accueil carouselButtonName="Accueil" />
        <Statistiques carouselButtonName="Statistiques">
          Récap des sessions précédentes
        </Statistiques>
        <Entrainement carouselButtonName="Entrainement" />
        <Examens carouselButtonName="Résultat" />
      </CarouselFullWidth>
      <footer />
    </>
  );
}

export default App;
