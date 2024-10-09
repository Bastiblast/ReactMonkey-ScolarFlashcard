import React, {
  PropsWithChildren,
  useReducer,
  ReactElement,
  Children,
} from "react";

interface FlipperProps extends PropsWithChildren {
  children: ReactElement[];
}

interface FlipperState {
  elements: ReactElement[];
  isModify: boolean;
}

interface FlipperAction {
  event?: React.MouseEvent;
  type: "training_launch" | "default_display";
  payload?: number;
}

/**
 *
 * @param props Feed with pair of component within <div></div>, first for the gallery list, second to be onClick focus.
 * @returns
 */
export function Flipper(props: FlipperProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, {
    elements: children,
    isModify: false,
  });

  function trainingLaunch(event: React.MouseEvent) {
    dispatch({ type: "training_launch", event: event });
  }

  function trainingInit() {
    dispatch({ type: "default_display" });
  }

  function initReducer() {
    if (state?.elements) {
      return Children.map(state.elements, (child) => {
        // console.log("child",child)
        return child.props.children[0];
      });
    } else {
      return null;
    }
  }

  return (
    <div id="Flipper" className="w-full h-full">
      <div className="w-full h-full">
        {!state?.isModify ? (
          <div onClick={trainingLaunch}>{initReducer()}</div>
        ) : (
          state.elements
        )}
      </div>
      {state.isModify && (
        <button
          id="flipper-exit-btn"
          onClick={trainingInit}
          className="absolute top-0 right-0 m-3 btn btn-error btn-square btn-sm"
        >
           <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
        </button>
      )}
    </div>
  );

  function reducer(state: FlipperState, action: FlipperAction) {
    // console.log("reducer start state",state)
    switch (action.type) {
      case "training_launch":
        if (action.event) {
          const targetElement: HTMLElement = action.event.target as HTMLElement;
          const targetParentCard: HTMLElement = targetElement.closest(
            ".card",
          ) as HTMLElement;
          const targetParentCardIndex: number = Number(
            targetParentCard.dataset.index,
          );
          const selectedCardIndex = targetParentCardIndex;
          // console.log("state.elements",state.elements)

          const newState = Children.map(state.elements, (child) => {
            // console.log("child",child)
            // console.log("child.props",child.props)
            return child.props.children[1];
          })[selectedCardIndex];
          return { elements: newState, isModify: true };
        } else {
          return { elements: state.elements, isModify: true };
        }

      case "default_display":
        return { elements: children, isModify: false };
    }
  }
}
