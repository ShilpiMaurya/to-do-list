const initialData = {
  list: []
};

type Action = {
  type: string;
  payload: { id: number; data: string };
};

type Item = {
  id: number;
  data: string;
};

const toDoReducers = (state = initialData, action: Action) => {
  switch (action.type) {
    case "ITEM_ADDED":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
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
