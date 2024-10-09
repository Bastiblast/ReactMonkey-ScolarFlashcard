import React, { useMemo, useState, useEffect } from "react";
import { Record } from "./Record";

interface ListSelectorProps {
  handleIdChange: (event: React.ChangeEvent) => void;
  onClickStartingButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export default function useListe() {
    const initialList = useMemo(() => listeDesMots, []);
  const [listId, setListId] = useState<number>(0);
  const [selectedList, setSelectedList] = useState<MotDetailed[]>([]); // list to use
  const [processing, setProcessing] = useState<MotListe[]>([]); // record what is done
  const [pickedWord, setPickedWord] = useState<MotListe[]>([]);
  const [bundleList, setBundleList] = useState<string[]>([]);
  const [record, setRecord] = useState<Record[]>([]);

  const renderListDetail = () => {
    if (processing.length === 0) {
      return;
    }
    const renderDetailsInSpan = processing.map(
        (array, index) => <span key={index}>{array.word}</span>
    );
    return <p className="flex flex-row gap-2">{renderDetailsInSpan}</p>;
  };

  const processingWordArray = (newList: Array<MotDetailed>) => {
    console.log("selectedList", newList);
    const array = [...newList[0].liste];
    return array;
  };

  useEffect(() => {
    if (!listId) {
      return;
    }
    const newList = initialList.filter((liste) => liste.id === listId);
    const wordList = processingWordArray(newList);
    setProcessing(wordList);
  }, [listId]);

  const RenderListAsOption = () => {
    return <>
    <option key={0}>Selectionne une liste</option>
        {initialList.map((data, index) => (
          <option key={index + 1}>{data.id}</option>
        ))}
    </>

};

  const addRecord = ({ input, answer, result }: Record) => {
    setRecord([...record, { input: input, answer: answer, result: result }]);
  };

  const pickNextWord = () => {
    const wordListe = [...processing];
    const pickAWord = wordListe.splice(getRandomInt(wordListe.length), 1);
    setPickedWord(pickAWord);
    setProcessing(wordListe);
    const newBundle = [...pickAWord[0].falseWord, pickAWord[0].word];
    setBundleList(shuffle(newBundle));
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const RenderResult = () => {
    return (
      <div>
        {record.map((result, index) => {
          return (
            <li
              key={index}
              className={result.result ? "bg-lime-500" : "bg-red-500"}
            >
              {result.input} est une
              {result.result
                ? " bonne réponse."
                : " mauvaise réponse. La réponse attendu était :"}
              {!result.result && (
                <span className="font-bold bg-lime-500"> {result.answer}</span>
              )}
            </li>
          );
        })}
        <span>
          Ton score final est de {countTrueRecord()} sur {record.length}
        </span>
      </div>
    );
  };

  function ListSelector(props: ListSelectorProps) {
    const { handleIdChange, onClickStartingButton } = props;
    return (
      <div id="training-home">
        <div id="training-parameters" className="flex flex-col gap-2">
          Choisi la liste à réviser :
          <select
            name="liste-name"
            id="liste"
            onChange={handleIdChange}
            className="bg-secondary text-secondary-content"
          >
            <RenderListAsOption />
          </select>
          {selectedList && renderListDetail()}
        </div>
        <button onClick={onClickStartingButton} className="m-2 btn btn-accent">
          Commencer
        </button>
      </div>
    );
  }

  const countTrueRecord = (): number => {
    return record.reduce((acc: number, val: Record) => {
    
      return val.result ? acc + 1 : acc;
    }, 0);
  };

  console.log({
    initialList,
    selectedList,
    processing,
    pickedWord,
    bundleList,
    record,
    listId,
  });

  return {
    initialList,
    selectedList,
    processing,
    pickedWord,
    bundleList,
    record,
    listId,
    ListSelector,
    countTrueRecord,
    RenderResult,
    addRecord,
    pickNextWord,
    setListId,
    setSelectedList,
    renderListDetail,
  };
}

const listeDesMots: ListeDeMots = [
  {
    id: 14,
    liste: [
      {
        word: "le soir",
        falseWord: ["lessoir", "le soar", "le seaur"],
      },
      {
        word: "le matin",
        falseWord: ["le mattin", "le mathin", "le matain"],
      },
      {
        word: "le midi",
        falseWord: ["le midie", "le mydi", "le middi"],
      },
      {
        word: "beau",
        falseWord: ["baux", "bo", "beauh"],
      },
      {
        word: "un oiseau",
        falseWord: ["un oaseau", "un oizeau", "un oiso"],
      },
    ],
  },
  {
    id: 15,
    liste: [
      {
        word: "le chapeau",
        falseWord: ["le chapo", "le chapau", "le shapeau"],
      },
      {
        word: "bonhomme",
        falseWord: ["bonome", "beauhomme", "bonehome"],
      },
      {
        word: "la fleur",
        falseWord: ["la feur", "la fleure", "le fleur"],
      },
      {
        word: "un gâteau",
        falseWord: ["un gateâu", "un gato", "un guateau"],
      },
      {
        word: "il a",
        falseWord: ["i l'a", "ile a", "ila"],
      },
      {
        word: "elle a",
        falseWord: ["el a", "ella", "elle la"],
      },
    ],
  },
  {
    id: 16,
    liste: [
      {
        word: "le mois",
        falseWord: ["le moa", "le moie", "le moit"],
      },
      {
        word: "la chambre",
        falseWord: ["la shambre", "la chanbre", "la chembre"],
      },
      {
        word: "l'année",
        falseWord: ["l'anner'", "l'anné", "la née"],
      },
      {
        word: "mes",
        falseWord: ["met", "mé", "mai"],
      },
      {
        word: "demain",
        falseWord: ["deumain", "demin", "demmain"],
      },
    ],
  },
];
