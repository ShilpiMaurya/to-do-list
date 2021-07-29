import { deleteItems, removeAll } from "../actions/index";
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

const ToDoListItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ButtonBox2 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content: center;
`;

const TableContainer = styled.div`
  overflow: auto;
`;

type Item = {
  id: number;
  taskTitleData: string;
  descriptionData: string;
  startDateData: string;
  endDateData: string;
  priorityData: string;
  statusData: string;
};

const ToDoList = () => {
  const list = useSelector((state: RootStateOrAny) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <ToDoListItemsBox>
      <Heading />
      <InputData />
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
          {list.map((element: Item) => {
            return (
              <TableBody key={element.id}>
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
                    onClick={() => dispatch(deleteItems(element.id))}
                  />
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>

      <ButtonBox2>
        <button onClick={() => dispatch(removeAll())}>Remove List</button>
      </ButtonBox2>
    </ToDoListItemsBox>
  );
};

export default ToDoList;
