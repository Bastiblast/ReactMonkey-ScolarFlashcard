import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

interface BtnSelector {
  carouselButtonName: string
}
export default function CarouselFullWidth(props: PropsWithChildren) {
  const { children } = props;
  console.log("CarouselFullWidth children ",children)

  function carouselScroll(toImage: number) {
    const carousel: HTMLElement = document.querySelector(".carousel")!;
    console.log("carouselScroll number ", toImage);
    // Scroll to takes 2 arguments. One is the pixel in the x axis, the second is the pixel in the y axis
    // We take the clientWidth of the carousel element and add 1 pixel to scroll to the given image
    carousel.scrollTo(carousel.clientWidth * (toImage - 1) + 1, 0);
  }

  const BtnSelector = () => {
    return (
      <>
          {Children.map(children, (child: ReactNode, index) => {
            console.log("child",child)
            const childProps: PropsWithChildren = child && child.props
            const carouselButtonName:string = childProps.carouselButtonName
          return (
            <button
              id={"item" + (index + 1)}
              className="btn btn-xs"
              onClick={carouselScroll.bind(CarouselElement, index + 1)}
              >
              {child && carouselButtonName}
            </button>
          )
        })}
    </>
    )
  }

  const CarouselBtnSelector = () => {
    return (
      <div className="z-20 flex justify-center w-full gap-2 py-2">
        <BtnSelector />
    </div>
    )
  }

  const CarouselElement = () => {
    return (
    <div  className="w-full carousel">
    {Children.map(children, (child, index) => {
    return (
      <div
        id={"item" + (index + 1)}
        className="flex justify-center w-full carousel-item"
        >
        {child}
      </div>
    )
  })}
    </div>)
  }

  return (
    <div className="relative flex flex-col top-20">
      <CarouselBtnSelector />
      <CarouselElement />
    </div>
  );
}

/*
<div className="w-64 carousel rounded-box">
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
</div>
*/
