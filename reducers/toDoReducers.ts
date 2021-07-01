const initialData = {
  list: []
};

type Action = {
  type: string;
  payload: {
    id: number;
    data1: string;
    data2: string;
    data3: string;
    data4: string;
    data5: string;
  };
};

type Item = {
  id: number;
  data: string;
};

const toDoReducers = (state = initialData, action: Action) => {
  switch (action.type) {
    case "ITEM_ADDED":
      const { id, data1, data2, data3, data4, data5 } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4,
            data5: data5
          }
        ]
      };
    case "ITEM_DELETED":
      const newList = state.list.filter((elem: Item) => {
        return elem.id !== action.payload.id;
      });
      return {
        ...state,
        list: newList
      };
    case "REMOVE_ALL":
      return {
        ...state,
        list: []
      };

    default:
      return state;
  }
};

export default toDoReducers;
