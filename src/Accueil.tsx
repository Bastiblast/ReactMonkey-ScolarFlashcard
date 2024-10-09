import React, { PropsWithChildren } from "react";
import AccordionWithChilds, {
  AccordionComponent,
} from "./component/daisyui/Accordion";

export default function Accueil(props: CarouselButtonProps) {
  return (
    <div className="flex flex-col items-center p-5 text-4xl">
      Que ce passe t&apos;il en ce moment ?
      <div className="flex flex-row justify-center p-5 my-4">
        <AccordionWithChilds>
          <AccordionComponent
            title={"Mise à jour du site !"}
            message={"Amélioration visuelle etc !"}
          />
          <AccordionComponent
            title={"L'été est finit."}
            message={"Retour du froid, manger du canard."}
          />
          <AccordionComponent
            title={"A ne pas oublier pour la rentré."}
            message={"La trousse et des cahiers."}
          />
        </AccordionWithChilds>
        <div className="w-full">Dernière visite</div>
      </div>
    </div>
  );
}
