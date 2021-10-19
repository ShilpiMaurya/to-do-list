import {
  deleteTaskItem,
  deleteTaskRequest,
  fetchUserTasks
} from "../actions/index";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Heading from "./Heading";
import InputData from "./InputData";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import { AppDispatch } from "../store";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ToDoListItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TableContainer = styled.div`
  overflow: auto;
`;

const ErrorStateContainer = styled.div`
  height: 20px;
`;

const ErrorStateMessage = styled.div`
  color: red;
`;

type Item = {
  id: string;
  taskTitleData: string;
  descriptionData: string;
  startDateData: string;
  endDateData: string;
  priorityData: string;
  statusData: string;
};

type TaskItem = {
  taskId: string;
  taskTitle: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
  status: string;
};

const ToDoList = () => {
  const [loading, setLoading] = useState(true);
  const list = useSelector((state: RootStateOrAny) => state.todoReducers.list);
  const dispatch: AppDispatch = useDispatch();
  const errorState = useSelector(
    (state: RootStateOrAny) => state.todoReducers.error
  );
  const taskId = useSelector(
    (state: RootStateOrAny) => state.todoReducers.uniqueTaskId.uniqueId
  );

  useEffect(() => {
    dispatch(fetchUserTasks());
    setLoading(false);
  }, []);

  const tasks = useSelector(
    (state: RootStateOrAny) => state.todoReducers.userTasksList.tasks
  );

  return (
    <ToDoListItemsBox>
      <Heading />
      <InputData />
      <ErrorStateContainer>
        {!!errorState && <ErrorStateMessage>{errorState}</ErrorStateMessage>}
      </ErrorStateContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                Task
              </TableCell>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                Description
              </TableCell>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                Start date
              </TableCell>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                End date
              </TableCell>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                Priority
              </TableCell>
              <TableCell
                className="head_element"
                style={{
                  color: "white",
                  padding: "10px 5px",
                  fontSize: "18px"
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          {loading === true && (
            <SkeletonTheme color="#B8B8B8" highlightColor="#D0D0D0">
              <div style={{ fontSize: 15, lineHeight: 3 }}>
                <Skeleton height={20} count={3} style={{ width: "100vw" }} />
              </div>
            </SkeletonTheme>
          )}
          {tasks &&
            tasks.map((element: TaskItem, index: number) => {
              return (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.taskTitle}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.description}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.startDate}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.endDate}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.priority}
                    </TableCell>
                    <TableCell
                      style={{
                        color: "white",
                        padding: "15px 5px"
                      }}
                    >
                      {element.status}
                    </TableCell>
                    <DeleteIcon
                      style={{
                        fontSize: "30px",
                        color: "white",
                        cursor: "pointer",
                        marginTop: "10px",
                        marginLeft: "5px"
                      }}
                      onClick={() => {
                        dispatch(deleteTaskItem(element.taskId));
                        dispatch(deleteTaskRequest(element.taskId));
                      }}
                    />
                  </TableRow>
                </TableBody>
              );
            })}
          {list.map((element: Item, index: number) => {
            return (
              <TableBody key={index}>
                <TableRow>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.taskTitleData}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.descriptionData}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.startDateData}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.endDateData}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.priorityData}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "white",
                      padding: "15px 5px"
                    }}
                  >
                    {element.statusData}
                  </TableCell>
                  <DeleteIcon
                    style={{
                      fontSize: "30px",
                      color: "white",
                      cursor: "pointer",
                      marginTop: "10px",
                      marginLeft: "5px"
                    }}
                    onClick={() => {
                      dispatch(deleteTaskRequest(taskId));
                      dispatch(deleteTaskItem(element.id));
                    }}
                  />
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </ToDoListItemsBox>
  );
};

export default ToDoList;
