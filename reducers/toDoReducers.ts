const initialData = {
  list: []
};

type Action = {
  type: string;
  payload: { id: number; data: string };
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
    default:
      return state;
  }
};

export default toDoReducers;
