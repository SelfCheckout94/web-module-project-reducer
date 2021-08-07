import {
  ADD,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
  SAVE_MEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};
const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        total: state.total + action.payload,
      };
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };
    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      return { ...state, total: 0 };
    case SAVE_MEMORY:
      return { ...state, memory: action.payload };
    case RECALL_MEMORY:
      return { ...state, total: action.payload };
    case CLEAR_MEMORY:
      return { ...state, memory: 0 };
    default:
      return state;
  }
};

export default reducer;
