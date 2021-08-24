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
    type: "ITEM_ADDED",
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
    type: "ITEM_DELETED",
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

export const postDataRequest = () => {
  return {
    type: "POST_DATA_REQUEST"
  };
};

export const postDataSuccess = (uniqueId: string) => {
  return {
    type: "POST_DATA_SUCCESS",
    payload: {
      uniqueId
    }
  };
};

export const postDataFailure = (error: string) => {
  return {
    type: "POST_DATA_FAILURE",
    payload: { error }
  };
};

export const postData = (
  taskTitle: string,
  description: string,
  startDate: string,
  endDate: string,
  status: string,
  priority: string
) => {
  return (dispatch: AppDispatch) => {
    dispatch(postDataRequest());
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
        }
      })
      .catch(error => dispatch(postDataFailure(error.message)));
  };
};

export const getUniqueId = () => {
  return (dispatch: AppDispatch) => {
    axios
      .get("/api/tasks")
      .then(response => {
        if (response) {
          console.log(response.data, "response");
          dispatch(postDataSuccess(response.data.uniqueId));
        }
      })
      .catch(error => dispatch(postDataFailure(error.message)));
  };
};
