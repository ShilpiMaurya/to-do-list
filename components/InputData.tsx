import styled from "styled-components";
import { useState } from "react";
import { addItems } from "../actions/index";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDataBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputContainer = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 10px;
`;

const InputData = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  return (
    <InputDataBox>
      <InputContainer>
        <input
          type="text"
          placeholder="Task title"
          value={taskTitle}
          onChange={event => setTaskTitle(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <DatePicker
          selected={startDate}
          // @ts-ignore
          onChange={date => setStartDate(date)}
          placeholderText="Start date"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </InputContainer>
      <InputContainer>
        <DatePicker
          selected={endDate}
          // @ts-ignore
          onChange={date => setEndDate(date)}
          placeholderText="End date"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          placeholder="Priority"
          value={priority}
          onChange={event => setPriority(event.target.value)}
          list="priority"
        />
        <datalist id="priority">
          <option value="High" />
          <option value="Medium" />
          <option value="Low" />
        </datalist>
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={event => setStatus(event.target.value)}
          list="status"
        />
        <datalist id="status">
          <option value="To Do" />
          <option value="Doing" />
          <option value="Done" />
        </datalist>
      </InputContainer>
      <InputContainer>
        <button
          onClick={() =>
            dispatch(
              addItems(taskTitle, startDate, endDate, priority, status),
              // @ts-ignore
              setTaskTitle(""),
              setStartDate(null),
              setEndDate(null),
              setPriority(""),
              setStatus("")
            )
          }
          style={{ padding: ".7em" }}
        >
          +
        </button>
      </InputContainer>
    </InputDataBox>
  );
};

export default InputData;
