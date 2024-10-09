import React, {} from "react";
import CardVerticalorHorizontal from "./component/daisyui/CardVerticalorHorizontal";
import ReadTap from "./Training/ReadTap";
import ReadWrite from "./Training/ReadWrite";
import { Flipper } from "./component/daisyui/Flipper";


interface EntrainementsProps {
  carouselButtonName: string;
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Entrainement(_props: EntrainementsProps) {
  return (
    <div
      id="Entrainement"
      className="relative flex flex-col w-full h-full p-3 mx-20 rounded-md bg-primary"
    >
      <Flipper>
        <div className="">
          <CardVerticalorHorizontal
            index={0}
            imgSRC={
              "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }
            title={"Trouve le bon mot !"}
            description={
              "Lis chaque mots puis appuie sur celui ayant la bonne orthographe."
            }
          />

          <ReadTap />
        </div>

        <div>
          <CardVerticalorHorizontal
            index={1}
            imgSRC={
              "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }
            title={"Ecris le mot affiché."}
            description={"Regarde attentivement le mot affiché et écrit le."}
          />
          <ReadWrite />
        </div>
      </Flipper>
    </div>
  );
}
