interface AccordionProps {
  props: {
    message: string;
    title: string;
  };
}

interface AccordionComponent {
  message: string;
  title: string;
}

interface CarouselButtonProps {
  carouselButtonName: string;
  children?: React.ReactNode;
}

interface MotListe {
  word: string;
  falseWord: string[];
}

interface MotDetailed {
  id: number;
  liste: MotListe[];
}

type ListeDeMots = MotDetailed[];
