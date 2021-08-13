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

export const postData = (
  taskTitle: string,
  description: string,
  startDate: string,
  endDate: string,
  status: string,
  priority: string
) => {
  return (dispatch: AppDispatch) => {
    const url = "/api/task";
    const data = {
      taskTitle: taskTitle,
      description: description,
      startDate: startDate,
      endDate: endDate,
      status: status,
      priority: priority
    };

    axios({ method: "post", url: url, data })
      .then(data =>
        data
          ? dispatch(
              addItems(
                taskTitle,
                description,
                startDate,
                endDate,
                priority,
                status
              )
            )
          : "No data provided"
      )
      .catch(error => console.log(error, "error"));
  };
};
