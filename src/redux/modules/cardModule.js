// widgets.js

import { db } from "../../firebase";
import { collection, getstate, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions
//프로젝트명/모듈명/액션명
const LOAD = "addingCard/LOAD";
const CREATE = "addingCard/CREATE";
// const UPDATE = "my-app/widgets/UPDATE";
// const REMOVE = "addingCard/REMOVE";

//initial state 초기값
const initialState = {
  data: [
    {
      word: "game",
      mean: "게임",
      ex: "Let the games begin.",
    },
    {
      word: "war",
      mean: "전쟁",
      ex: "This War of Mine.",
    },
    {
      word: "serious",
      mean: "심각한",
      ex: "Don't be so serious.",
    },
    {
      word: "tie",
      mean: "묶다",
      ex: "Tie yellow ribbon round the ole oak tree.",
    },
    {
      word: "gold",
      mean: "금",
      ex: "We will turn to gold.",
    },
    {
      word: "hollywood",
      mean: "할리우드",
      ex: "We are going to hollywood and never coming back.",
    },
    {
      word: "silence",
      mean: "조용한",
      ex: "Touched the sound of silence.",
    },
    {
      word: "disturb",
      mean: "방해하다",
      ex: "Disturb the sound of silence.",
    },
  ],
};

// Action Creators
export function loadCard(load_card) {
  return { type: LOAD, load_card };
}

export function createCard(addingCard) {
  //키와 밸류가 같다면 단축이 가능하다. ex.{ widget: widget }은 { widget }과 동일하다.
  //위젯을 받아온 후 크리에이트 액션을 한다.
  return { type: CREATE, addingCard };
}

// export function removeCard(card_index) {
//   return { type: REMOVE, card_index };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
//미들웨어
export const loadCardList = () => {
  return async function (dispatch) {
    const cardData = await getDocs(collection(db, "mydict"));
    // console.log(cardData);

    let cardList = [];
    cardData.forEach((cardOne) => {
      // console.log(cardOne.data());
      cardList.push({ id: cardOne.id, ...cardOne.data() });
    });
    // console.log(cardList);

    dispatch(loadCard(cardList));
  };
};

export const addCardOne = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mydict"), card);
    // console.log(docRef);
  };
};

// export const removeCardOne = (card_id) => {
//   return async function (dispatch, getstate) {
//     const docRef = doc(db, "mydict", card_id);
//     await deleteDoc(docRef);
//   };
// };

// Reducer
//state={}, action={}의 의미:
//파마미터에 값이 들어오지 않는다면 비어있는 딕셔너리라는 의미
export default function reducer(state = initialState, action = {}) {
  //액션타입으로 스위치를 작동시킨다.
  switch (action.type) {
    case "addingCard/LOAD": {
      // console.log(action.load_card)
      return { data: action.load_card };
    }

    case "addingCard/CREATE": {
      // console.log(action.addingCard);
      const new_card_list = [...state.data, action.addingCard];
      return { data: new_card_list };
    }
    // case "addingCard/REMOVE": {
    //   console.log(action.card_index);
    //   const delete_card = [...state.data, action.card_index];
    //   return { data: delete_card };
    // }
    // do reducer stuff
    //리듀서가 해야할 것.
    default:
      return state;
  }
}
