export const addItems = (
  taskTitleData: string,
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
      startDateData: startDateData,
      endDateData: endDateData,
      priorityData: priorityData,
      statusData: statusData
    }
  };
};

export const deleteItems = (id: number) => {
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
