import React, { useState } from "react";
import useListe from "../customHook/useListe";

export default function ReadTap() {
  const {
    processing,
    pickedWord,
    bundleList,
    listId,
    RenderResult,
    ListSelector,
    setListId,
    pickNextWord,
    addRecord,
  } = useListe(); // list to use

  const displayer = {
    home: true,
    training: false,
    finish: false,
  };

  const [displayed, setDisplayed] = useState(displayer);

  const handleIdChange = (event: React.ChangeEvent) => {
    const targetedSelector = event.target as HTMLSelectElement;
    setListId(Number(targetedSelector.value));
  };

  const onClickStartingButton = () => {
    if (listId === 0) {
      return;
    }
    setDisplayed({ ...displayed, home: false, training: true });
    pickNextWord();
  };

  const onClickNextButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const clickedBTNtextContent = event.currentTarget.textContent;
    addRecord({
      input: clickedBTNtextContent,
      answer: pickedWord[0].word,
      result: clickedBTNtextContent === pickedWord[0].word,
    });
    if (processing.length > 0) {
      pickNextWord();
      return;
    } else {
      setDisplayed({ ...displayed, finish: true, training: false });
    }
  };

  const BundleWordToGrid = () => {
    return (
      <div className="grid w-full grid-flow-row grid-cols-2 p-3">
        {bundleList.map((word, index) => (
          <button
            key={index}
            className="m-2 btn btn-secondary"
            onClick={onClickNextButton}
          >
            {word}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      id="readtap-training"
      className="flex flex-col w-full h-full justify-evenly training-readtap bg-primary text-primary-content"
    >
      {displayed.home && (
        <ListSelector
          handleIdChange={handleIdChange}
          onClickStartingButton={onClickStartingButton}
        />
      )}
      {displayed.training && (
        <>
          <BundleWordToGrid />
        </>
      )}
      {displayed.finish && (
        <>
          <div className="textarea-md">
            <div className="text-xl font-bold">Bravo tu l&apos;as fait !</div>
            <RenderResult />
          </div>
        </>
      )}
    </div>
  );
}
