const initialData = {
  list: []
};

type Action = {
  type: string;
  payload: {
    id: number;
    taskTitleData: string;
    startDateData: string;
    endDateData: string;
    priorityData: string;
    statusData: string;
  };
};

type Item = {
  id: number;
  data: string;
};

const toDoReducers = (state = initialData, action: Action) => {
  switch (action.type) {
    case "ITEM_ADDED":
      const {
        id,
        taskTitleData,
        startDateData,
        endDateData,
        priorityData,
        statusData
      } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            taskTitleData: taskTitleData,
            startDateData: startDateData,
            endDateData: endDateData,
            priorityData: priorityData,
            statusData: statusData
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
