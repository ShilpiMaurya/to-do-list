import styled from "styled-components";
import { useState } from "react";
import { addItems } from "../actions/index";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const InputDataBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
`;

const InputContainer = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const ModalButtonContainer = styled.div``;

const InputData = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [taskTitleErrorMessage, setTaskTitleErrorMessage] = useState("");
  const [startDateErrorMessage, setStartDateErrorMessage] = useState("");
  const [endDateErrorMessage, setEndDateErrorMessage] = useState("");
  const [priorityErrorMessage, setPriorityErrorMessage] = useState("");
  const [statusErrorMessage, setStatusErrorMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <ModalButtonContainer>
        <button onClick={handleClickOpen}>Create task +</button>
      </ModalButtonContainer>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create task</DialogTitle>
        <DialogContent>
          <InputDataBox>
            <InputContainer>
              <input
                type="text"
                placeholder="Task title"
                value={taskTitle}
                onChange={event => setTaskTitle(event.target.value)}
                onBlur={event => {
                  const input = event.target.value;
                  if (!input.length) {
                    setTaskTitleErrorMessage("Please type the valid input");
                  } else {
                    setTaskTitleErrorMessage("");
                  }
                }}
              />
              {!!taskTitleErrorMessage && (
                <ErrorMessage>{taskTitleErrorMessage}</ErrorMessage>
              )}
            </InputContainer>

            <InputContainer>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                placeholderText="Start date"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                onBlur={event => {
                  const value = event.target.value;
                  if (!value.length) {
                    setStartDateErrorMessage("Please select valid date");
                  } else {
                    setStartDateErrorMessage("");
                  }
                }}
              />
              {!!startDateErrorMessage && (
                <ErrorMessage>{startDateErrorMessage}</ErrorMessage>
              )}
            </InputContainer>

            <InputContainer>
              <DatePicker
                selected={endDate}
                onChange={(date: Date | null) => setEndDate(date)}
                placeholderText="End date"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                onBlur={event => {
                  const value = event.target.value;
                  if (!value.length) {
                    setEndDateErrorMessage("Please select valid date");
                  } else {
                    setEndDateErrorMessage("");
                  }
                }}
              />
              {!!endDateErrorMessage && (
                <ErrorMessage>{endDateErrorMessage}</ErrorMessage>
              )}
            </InputContainer>

            <InputContainer>
              <input
                type="text"
                placeholder="Priority"
                value={priority}
                onChange={event => setPriority(event.target.value)}
                onBlur={event => {
                  const input = event.target.value;
                  if (
                    input !== ("High" || "Medium" || "Low") ||
                    !input.length
                  ) {
                    setPriorityErrorMessage("Please select the valid option");
                  } else {
                    setPriorityErrorMessage("");
                  }
                }}
                list="priority"
              />
              <datalist id="priority">
                <option value="High" />
                <option value="Medium" />
                <option value="Low" />
              </datalist>
              {!!priorityErrorMessage && (
                <ErrorMessage>{priorityErrorMessage}</ErrorMessage>
              )}
            </InputContainer>

            <InputContainer>
              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={event => setStatus(event.target.value)}
                onBlur={event => {
                  const input = event.target.value;
                  if (
                    input !== ("To Do" || "Doing" || "Done") ||
                    !input.length
                  ) {
                    setStatusErrorMessage("Please select the valid option");
                  } else {
                    setStatusErrorMessage("");
                  }
                }}
                list="status"
              />
              <datalist id="status">
                <option value="To Do" />
                <option value="Doing" />
                <option value="Done" />
              </datalist>
              {!!statusErrorMessage && (
                <ErrorMessage>{statusErrorMessage}</ErrorMessage>
              )}
            </InputContainer>

            <InputContainer>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => {
                  if (taskTitle && startDate && endDate && priority && status) {
                    dispatch(
                      addItems(
                        taskTitle,
                        startDate.toDateString(),
                        endDate.toDateString(),
                        priority,
                        status
                      )
                    );
                    setTaskTitle(""),
                      setStartDate(null),
                      setEndDate(null),
                      setPriority(""),
                      setStatus("");
                  }
                }}
                style={{ padding: ".7em" }}
                disabled={
                  !(taskTitle && startDate && endDate && priority && status)
                }
              >
                +
              </Button>
            </InputContainer>
          </InputDataBox>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="outlined">
              close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputData;
