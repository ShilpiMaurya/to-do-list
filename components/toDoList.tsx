import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { useState } from "react";
import { addItems } from "../actions/index";
import { useDispatch } from "react-redux";
const ToDoList = () => {
  const [titleData, setTitleData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Task's title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Person responsible</TableCell>
          <TableCell>
            <TableSortLabel active={true} direction={"desc"}>
              Start date
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel active={true} direction={"desc"}>
              End date
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel active={true} direction={"desc"}>
              Status
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel active={true} direction={"desc"}>
              Priority
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableRow>
        <TableCell>
          <input
            type="text"
            placeholder="title"
            value={titleData}
            onChange={event => setTitleData(event.target.value)}
          />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="description" />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="person responsible" />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="start date" />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="end date" />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="status" />
        </TableCell>
        <TableCell>
          <input type="text" placeholder="priority" />
        </TableCell>
        <TableCell>
          <button onClick={() => dispatch(addItems(titleData))}>Add</button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ToDoList;
