import axios from "axios";
import { AppDispatch } from "../store";

export const addItems = (
  taskTitleData: string,
  descriptionData: string,
  startDateData: string,
  endDateData: string,
  priorityData: string,
  statusData: string
) => {
  return {
    type: "TASK_ITEMS_ADDED",
    payload: {
      id: new Date().getTime().toString(),
      taskTitleData: taskTitleData,
      descriptionData: descriptionData,
      startDateData: startDateData,
      endDateData: endDateData,
      priorityData: priorityData,
      statusData: statusData
    }
  };
};

export const deleteItems = (id: string) => {
  return {
    type: "TASK_ITEMS_DELETED",
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

export const postTaskDataRequest = () => {
  return {
    type: "POST_TASK_DATA_REQUEST"
  };
};

export const postTaskDataSuccess = (uniqueId: string) => {
  return {
    type: "POST_TASK_DATA_SUCCESS",
    payload: {
      uniqueId
    }
  };
};

export const postTaskDataFailure = (error: string) => {
  return {
    type: "POST_TASK_DATA_FAILURE",
    payload: { error }
  };
};

export const postTaskData = (
  taskTitle: string,
  description: string,
  startDate: string,
  endDate: string,
  status: string,
  priority: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch(postTaskDataRequest());
    const url = "/api/tasks";
    const data = {
      taskTitle: taskTitle,
      description: description,
      startDate: startDate,
      endDate: endDate,
      status: status,
      priority: priority
    };

    axios({ method: "post", url: url, data })
      .then(data => {
        if (data) {
          dispatch(
            addItems(
              taskTitle,
              description,
              startDate,
              endDate,
              priority,
              status
            )
          );
          dispatch(postTaskDataSuccess(data.data.uniqueId));
        }
      })
      .catch(error => dispatch(postTaskDataFailure(error.message)));
  };
};

export const deleteData = (uniqueId: string) => {
  return () => {
    const url = `/api/tasks/${uniqueId}`;
    axios.delete(url);
  };
};
