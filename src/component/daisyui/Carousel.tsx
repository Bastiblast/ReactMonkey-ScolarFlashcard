import React, {
  Component,
  Children,
  PropsWithChildren,
  FC,
  ReactNode,
} from "react";

/**
 * Adaptative carroussel for main display use
 * Display all child present in the composent
 */
export default class Carousel extends React.Component {
  children;
  childs;
  constructor(props: { children: Array<ReactNode> }) {
    super(props);
    this.children = props.children.length ? props.children : [props.children];
    this.childs = React.Children.toArray(this.children);
    console.log("this.children", this.children);
  }

  renderCarouselItems() {
    console.log("this.childs", this.childs);
    const renderedChildList = this.childs.map((item, index: number) => {
      //modify props to a single items array
      console.log("(item,index)", item, index);

      return (
        <div
          id={"slide" + (index + 1)}
          className="relative flex w-full h-screen mx-20 grow carousel-item"
        >
          <div className="flex items-start justify-center w-full h-auto">
            {item}
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={"#slide".concat(
                index === 0 ? this.childs.length.toString() : index.toString(),
              )}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={"#slide".concat(
                index + 1 === this.childs.length ? "1" : (index + 2).toString(),
              )}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      );
    });
    console.log("renderedChildList : ", renderedChildList);
    return renderedChildList;
  }
  render() {
    return (
      <>
        <div className="relative w-full carousel">
          {this.renderCarouselItems()}
        </div>
      </>
    );
  }
}

/* 
     <div className="relative w-full h-screen carousel">

        <div id="slide11" className="relative w-full carousel-item">
          <div className ="justify-center w-full h-full text-center">
          { (this.children)[0] ??
            <div>{React.Children.toArray(this.children)[0]}</div>
          }
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide44" className="btn btn-circle">❮</a>
            <a href="#slide22" className="btn btn-circle">❯</a>
          </div>
        </div>

      <div id="slide22" className="relative w-full carousel-item">
        <div className ="justify-center w-full text-center">
        {(this.children)[1] ??
      <div>{React.Children.toArray(this.children)[1]}</div>
    }
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide11" className="btn btn-circle">❮</a>
          <a href="#slide33" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide33" className="relative w-full carousel-item">
        <div className ="justify-center w-full text-center">
        {this.children[2] ??
      <div>{React.Children.toArray(this.children)[2]}</div>
    }
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide22" className="btn btn-circle">❮</a>
          <a href="#slide44" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide44" className="relative w-full carousel-item">
        <div className ="justify-center w-full text-center">
        {this.children[3] ??
      <div>{React.Children.toArray(this.children)[3]}</div>
    }
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide33" className="btn btn-circle">❮</a>
          <a href="#slide11" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    */
