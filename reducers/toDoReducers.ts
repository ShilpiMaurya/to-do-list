const initialData = {
  loading: false,
  list: [],
  error: "",
  uniqueTaskId: ""
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
    error: string;
  };
};

type Item = {
  id: string;
  data: string;
};

const toDoReducers = (state = initialData, action: Action | any) => {
  switch (action.type) {
    case "TASK_ITEM_ADDED":
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
    case "TASK_ITEM_DELETED":
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
    case "CREATE_TASK_REQUEST":
      return {
        ...state,
        loading: true,
        error: ""
      };
    case "CREATE_TASK_REQUEST_SUCCESS":
      return {
        ...state,
        uniqueTaskId: action.payload
      };
    case "CREATE_TASK_REQUEST_FAILURE":
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default toDoReducers;
