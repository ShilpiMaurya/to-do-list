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

export const deleteFetchedTaskItem = (taskId: string) => {
  return {
    type: "FETCHED_TASK_ITEM_DELETED",
    payload: {
      taskId
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

export const userCreationRequest = () => {
  return {
    type: "USER_CREATION_REQUEST_CREATED"
  };
};

export const addUserCredential = (
  name: string,
  email: string,
  password: string,
  checked: boolean
) => {
  return {
    type: "USER_CREDENTIAL_ADDED",
    payload: {
      name,
      email,
      password,
      checked
    }
  };
};

export const userCreationSuccess = (uniqueUserId: string) => {
  return {
    type: "USER_CREATION_SUCCEED",
    payload: { uniqueUserId }
  };
};

export const userCreationFailure = (error: string) => {
  return {
    type: "USER_CREATION_FAILED",
    payload: { error }
  };
};

export const userLoginRequest = () => {
  return {
    type: "USER_LOGIN_REQUEST_CREATED"
  };
};

export const addUserLoginCredentials = (
  userEmail: string,
  userPassword: string,
  isUserChecked: boolean
) => {
  return {
    type: "ADDED_USER_LOGIN_CREDENTIALS",
    payload: {
      userEmail,
      userPassword,
      isUserChecked
    }
  };
};

export const userLoginSuccess = (uniqueUserLoginId: string) => {
  return {
    type: "USER_LOGIN_SUCCEED",
    payload: { uniqueUserLoginId }
  };
};

export const userLoginFailure = (error: string) => {
  return {
    type: "USER_LOGIN_FAILED",
    payload: { error }
  };
};

export const fetchUserTasksRequest = () => {
  return {
    type: "FETCH_USER_TASKS_REQUEST"
  };
};

export const fetchUserTasksSuccess = (tasks: {}[]) => {
  return {
    type: "FETCH_USER_TASKS_SUCCESS",
    payload: tasks
  };
};

export const fetchUserTasksFailure = (error: string) => {
  return {
    type: "FETCH_USER_TASKS_FAILURE",
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

export const deleteCookie = () => {
  return () => {
    const url = `/api/logout`;
    axios.get(url);
  };
};

export const createUser = (
  name: string,
  email: string,
  password: string,
  checked: boolean
) => {
  return (dispatch: AppDispatch) => {
    dispatch(userCreationRequest());
    const url = "/api/users";
    const data = {
      name,
      email,
      password,
      checked
    };
    axios({ method: "post", url: url, data })
      .then(data => {
        if (data) {
          dispatch(addUserCredential(name, email, password, checked));
          dispatch(userCreationSuccess(data.data.uid));
        }
      })
      .catch(error => {
        dispatch(userCreationFailure(error.message));
      });
  };
};

export const loginUser = (
  userEmail: string,
  userPassword: string,
  isUserChecked: boolean
) => {
  return (dispatch: AppDispatch) => {
    dispatch(userLoginRequest());
    const url = "/api/login";
    const data = { userEmail, userPassword, isUserChecked };

    axios({ method: "post", url: url, data })
      .then(data => {
        if (data) {
          dispatch(
            addUserLoginCredentials(userEmail, userPassword, isUserChecked)
          );
          dispatch(userLoginSuccess(data.data.uid));
        }
      })
      .catch(error => {
        dispatch(userLoginFailure(error.message));
      });
  };
};

export const fetchUserTasks = () => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchUserTasksRequest());
    axios
      .get("/api/tasks")
      .then(response => {
        const tasks = response.data;
        dispatch(fetchUserTasksSuccess(tasks));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchUserTasksFailure(errorMessage));
      });
  };
};
