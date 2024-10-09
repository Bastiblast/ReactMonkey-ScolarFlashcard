import React, {
  ReactElement,
  ReactNode,
  Children,
  PropsWithChildren,
  ComponentProps,
} from "react";

interface Item {}

interface MyProps {
  props: {
    message: string;
    title: string;
  };
}

export function AccordionComponent(props: AccordionComponent) {
  return <></>;
}

export default function AccordionWithChilds({
  children,
}: {
  children: React.ReactElement<AccordionComponent>[];
}) {
  // console.log("children",children)
  if (!children.length) {
    return;
  }

  const renderNewsAccordion = () => {
    const accordionList = Children.map(children, (item, key) => {
      // console.log("item", item.props)
      const itemProps: AccordionComponent = item.props;
      const { message, title } = itemProps;
      // console.log("message", message)
      //  console.log("title", title)
      return (
        <div
          key={key}
          className="my-3 collapse collapse-plus bg-primary text-primary-content"
        >
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="text-xl font-medium collapse-title"> {title}</div>
          <div className="collapse-content">{message}</div>
        </div>
      );
    });

    return accordionList;
  };
  return (
    <div id="accordion-container" className="w-full mx-6">
      {renderNewsAccordion() && renderNewsAccordion()}
    </div>
  );
}
/* ORIGINAL
    <div>
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
        </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
        </div>
    </div>
    */
