const initialData = {
  loading: false,
  list: [],
  error: ""
};

type Action = {
  type: string;
  payload: {
    id: string;
    taskTitleData: string;
    descriptionData: string;
    startDateData: string;
    endDateData: string;
    priorityData: string;
    statusData: string;
  };
};

type Item = {
  id: string;
  data: string;
};

const toDoReducers = (state = initialData, action: any) => {
  switch (action.type) {
    case "ITEM_ADDED":
      const {
        id,
        taskTitleData,
        descriptionData,
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
            descriptionData: descriptionData,
            startDateData: startDateData,
            endDateData: endDateData,
            priorityData: priorityData,
            statusData: statusData
          }
        ],
        loading: false,
        error: ""
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
    case "POST_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "POST_DATA_FAILURE":
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default toDoReducers;
