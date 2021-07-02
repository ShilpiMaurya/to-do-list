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
  padding-right: 15px;
`;

const InputData = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
          onChange={date => setStartDate(date)}
          placeholderText="Start date"
        />
      </InputContainer>
      <InputContainer>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          placeholderText="Start date"
        />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          placeholder="Priority"
          value={priority}
          onChange={event => setPriority(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={event => setStatus(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <button
          onClick={() =>
            dispatch(
              addItems(taskTitle, startDate, endDate, priority, status),
              // @ts-ignore
              setTaskTitle(""),
              setStartDate(""),
              setEndDate(""),
              setPriority(""),
              setStatus("")
            )
          }
          style={{ color: "grey" }}
        >
          +
        </button>
      </InputContainer>
    </InputDataBox>
  );
};

export default InputData;
