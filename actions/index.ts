export const addItems = (
  data1: string,
  data2: string,
  data3: string,
  data4: string,
  data5: string
) => {
  return {
    type: "ITEM_ADDED",
    payload: {
      id: new Date().getTime().toString(),
      data1: data1,
      data2: data2,
      data3: data3,
      data4: data4,
      data5: data5
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
