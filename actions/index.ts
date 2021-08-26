import axios from "axios";
import { AppDispatch } from "../store";

export const addTaskItem = (
  taskTitleData: string,
  descriptionData: string,
  startDateData: string,
  endDateData: string,
  priorityData: string,
  statusData: string
) => {
  return {
    type: "TASK_ITEM_ADDED",
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

export const deleteTaskItem = (id: string) => {
  return {
    type: "TASK_ITEM_DELETED",
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

export const createTaskRequest = () => {
  return {
    type: "CREATE_TASK_REQUEST"
  };
};

export const createTaskRequestSuccess = (uniqueId: string) => {
  return {
    type: "CREATE_TASK_REQUEST_SUCCESS",
    payload: {
      uniqueId
    }
  };
};

export const createTaskRequestFailure = (error: string) => {
  return {
    type: "CREATE_TASK_REQUEST_FAILURE",
    payload: { error }
  };
};

export const createTask = (
  taskTitle: string,
  description: string,
  startDate: string,
  endDate: string,
  status: string,
  priority: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch(createTaskRequest());
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
            addTaskItem(
              taskTitle,
              description,
              startDate,
              endDate,
              priority,
              status
            )
          );
          dispatch(createTaskRequestSuccess(data.data.uniqueId));
        }
      })
      .catch(error => dispatch(createTaskRequestFailure(error.message)));
  };
};

export const deleteTaskRequest = (uniqueId: string) => {
  return () => {
    const url = `/api/tasks/${uniqueId}`;
    axios.delete(url);
  };
};
