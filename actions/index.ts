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

export const createUserRequest = () => {
  return {
    type: "USER_REQUEST_CREATED"
  };
};

export const addUserCredential = (
  name: string,
  email: string,
  password: string
) => {
  return {
    type: "USER_CREDENTIAL_ADDED",
    payload: {
      name,
      email,
      password
    }
  };
};

export const userRequestSuccess = (uniqueUserId: string) => {
  return {
    type: "USER_REQUEST_SUCCEED",
    payload: { uniqueUserId }
  };
};

export const userRequestFailure = (userError: string) => {
  return {
    type: "USER_REQUEST_FAILED",
    payload: { userError }
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

export const createUser = (name: string, email: string, password: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(createUserRequest());
    const url = "/api/users";
    const data = {
      name,
      email,
      password
    };
    axios({ method: "post", url: url, data })
      .then(data => {
        if (data) {
          dispatch(addUserCredential(name, email, password));
          dispatch(userRequestSuccess(data.data.uid));
        }
      })
      .catch(error => {
        dispatch(userRequestFailure(error.message));
      });
  };
};
