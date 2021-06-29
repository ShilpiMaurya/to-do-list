export const addItems = (data: string) => {
  return {
    type: "ITEM_ADDED",
    payload: {
      id: new Date().getTime().toString(),
      data: data
    }
  };
};

export const deleteItems = (id: number) => {
  return {
    type: "ITEM_DELETED",
    payload: {
      id
    }
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL"
  };
};
