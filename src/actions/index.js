export const ADD = "ADD";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SAVE_MEMORY = "SAVE_MEMORY";
export const RECALL_MEMORY = "RECALL_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const add = (n) => {
  return { type: ADD, payload: n };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const saveMemory = (total) => {
  return { type: SAVE_MEMORY, payload: total };
};

export const recallMemory = (memory) => {
  return { type: RECALL_MEMORY, payload: memory };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};
