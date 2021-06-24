export const addItems = (data: string) => {
  return {
    type: "ITEM_ADDED",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};
