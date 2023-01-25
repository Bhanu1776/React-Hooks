export const reducer = (state: any, action: any) => {
  if (action.type === "INC") {
    return (state = state + 1);
  }
  if (action.type === "DEC") {
    return (state = state - 1);
  }
  return state;
};
