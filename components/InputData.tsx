import { deleteCookie } from "../actions/index";
import styled from "styled-components";
import { useState } from "react";
import { createTask } from "../actions/index";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppDispatch } from "../store";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const InputDataBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ModalTitleBox = styled.div`
  color: #3f51b5;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 25px;
  @media (max-width: 430px) {
    flex-direction: column;
    padding-top: 10px;
  }
`;

const DateContainer = styled.div`
  padding-right: 20px;
  @media (max-width: 430px) {
    padding-bottom: 10px;
  }
`;

const ModalContent = styled.div`
  width: 100%;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding-top: 50px;
`;

const AssigneeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ErrorMessageContainer = styled.div`
  height: 20px;
`;

const ErrorMessage = styled.div`
  color: #ff6961;
`;

const InputData = () => {
  const dispatch: AppDispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [taskTitleErrorMessage, setTaskTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [startDateErrorMessage, setStartDateErrorMessage] = useState("");
  const [endDateErrorMessage, setEndDateErrorMessage] = useState("");
  const [priorityErrorMessage, setPriorityErrorMessage] = useState("");
  const [statusErrorMessage, setStatusErrorMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const handleButtonClick = () => {
    if (taskTitle && startDate && endDate && priority && status) {
      dispatch(
        createTask(taskTitle, description, startDate, endDate, priority, status)
      );
    }
    setOpenModal(false);
    setTaskTitle(""), setDescription("");
    setStartDate(""), setEndDate(""), setPriority(""), setStatus("");
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setTaskTitle(""), setDescription("");
    setStartDate(""), setEndDate(""), setPriority(""), setStatus("");
    setTaskTitleErrorMessage("");
    setStartDateErrorMessage("");
    setEndDateErrorMessage("");
    setDescriptionErrorMessage("");
    setPriorityErrorMessage("");
    setStatusErrorMessage("");
  };

  const handleLogoutClose = () => {
    setOpenLogoutModal(false);
  };

  const handleLogoutOpen = () => {
    setOpenLogoutModal(true);
  };

  return (
    <>
      <ModalButtonContainer>
        <button
          onClick={handleClickOpen}
          style={{ marginRight: "10px", marginBottom: "15px" }}
        >
          Create New Task +
        </button>
        <button
          onClick={handleLogoutOpen}
          style={{ marginRight: "10px", marginBottom: "15px" }}
        >
          Log Out
        </button>
      </ModalButtonContainer>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <InputDataBox>
          <ModalTitleBox>Edit task</ModalTitleBox>
          <ModalContent>
            <AssigneeBox>
              <AccountCircleIcon
                fontSize="large"
                color="primary"
                style={{ marginTop: "20px", marginRight: "10px" }}
              />
              <TextField margin="dense" type="text" label="Assignee" />
            </AssigneeBox>

            <TextField
              margin="dense"
              label="Task "
              type="text"
              fullWidth
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
            <ErrorMessageContainer>
              {!!taskTitleErrorMessage && (
                <ErrorMessage>{taskTitleErrorMessage}</ErrorMessage>
              )}
            </ErrorMessageContainer>

            <TextField
              margin="dense"
              label="Decription"
              type="text"
              fullWidth
              value={description}
              onChange={event => setDescription(event.target.value)}
              onBlur={event => {
                const input = event.target.value;
                if (!input.length) {
                  setDescriptionErrorMessage("Please type the valid input");
                } else {
                  setDescriptionErrorMessage("");
                }
              }}
            />
            <ErrorMessageContainer>
              {!!descriptionErrorMessage && (
                <ErrorMessage>{descriptionErrorMessage}</ErrorMessage>
              )}
            </ErrorMessageContainer>

            <DateBox>
              <DateContainer>
                <label
                  style={{
                    color: "#686868",
                    paddingRight: "10px"
                  }}
                >
                  Start date
                </label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={event => setStartDate(event.target.value)}
                  onBlur={event => {
                    const value = event.target.value;
                    if (!value.length) {
                      setStartDateErrorMessage("Please select valid date");
                    } else {
                      setStartDateErrorMessage("");
                    }
                  }}
                />
                <ErrorMessageContainer>
                  {!!startDateErrorMessage && (
                    <ErrorMessage>{startDateErrorMessage}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </DateContainer>

              <DateContainer>
                <label
                  style={{
                    color: "#686868",
                    paddingRight: "10px"
                  }}
                >
                  End date
                </label>
                <input
                  type="date"
                  min={startDate}
                  required
                  value={endDate}
                  onChange={event => setEndDate(event.target.value)}
                  onBlur={event => {
                    const value = event.target.value;
                    if (!value.length) {
                      setEndDateErrorMessage("Please select valid date");
                    } else {
                      setEndDateErrorMessage("");
                    }
                  }}
                />
                <ErrorMessageContainer>
                  {!!endDateErrorMessage && (
                    <ErrorMessage>{endDateErrorMessage}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </DateContainer>
            </DateBox>

            <DateBox>
              <DateContainer>
                <label
                  style={{
                    color: "#686868",
                    paddingRight: "30px"
                  }}
                >
                  Priority
                </label>
                <input
                  list="priority"
                  value={priority}
                  onChange={event => setPriority(event.target.value)}
                  onBlur={event => {
                    const input = event.target.value;
                    if (!input.length) {
                      setPriorityErrorMessage("Please select the valid option");
                    } else {
                      setPriorityErrorMessage("");
                    }
                  }}
                />
                <datalist id="priority">
                  <option value="High" />
                  <option value="Medium" />
                  <option value="Low" />
                </datalist>
                <ErrorMessageContainer>
                  {!!priorityErrorMessage && (
                    <ErrorMessage>{priorityErrorMessage}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </DateContainer>

              <DateContainer>
                <label
                  style={{
                    color: "#686868",
                    paddingRight: "30px"
                  }}
                >
                  Status
                </label>
                <input
                  list="status"
                  value={status}
                  onChange={event => setStatus(event.target.value)}
                  onBlur={event => {
                    const input = event.target.value;
                    if (!input.length) {
                      setStatusErrorMessage("Please select the valid option");
                    } else {
                      setStatusErrorMessage("");
                    }
                  }}
                />
                <datalist id="status">
                  <option value="To Do" />
                  <option value="Doing" />
                  <option value="Done" />
                </datalist>
                <ErrorMessageContainer>
                  {!!statusErrorMessage && (
                    <ErrorMessage>{statusErrorMessage}</ErrorMessage>
                  )}
                </ErrorMessageContainer>
              </DateContainer>
            </DateBox>
            <DialogActions>
              <ButtonContainer>
                <Button
                  style={{ marginLeft: "20px", marginBottom: "10px" }}
                  color="primary"
                  variant="contained"
                  disabled={
                    !(
                      taskTitle &&
                      description &&
                      startDate &&
                      endDate &&
                      status &&
                      priority
                    )
                  }
                  onClick={handleButtonClick}
                >
                  add task
                </Button>

                <Button
                  style={{ marginLeft: "20px", marginBottom: "10px" }}
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                >
                  close
                </Button>
              </ButtonContainer>
            </DialogActions>
          </ModalContent>
        </InputDataBox>
      </Dialog>
      <Dialog
        open={openLogoutModal}
        onClose={handleLogoutClose}
        aria-labelledby="form-dialog-title"
      >
        <InputDataBox>
          <DialogContent>
            <DialogContentText style={{ fontSize: "20px" }}>
              Are you sure you want to log out?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleLogoutClose}
              color="primary"
              variant="contained"
              style={{ marginLeft: "20px" }}
            >
              CANCEL
            </Button>
            <Button
              onClick={() => dispatch(deleteCookie())}
              color="primary"
              variant="contained"
              style={{ marginLeft: "20px" }}
            >
              LOG OUT
            </Button>
          </DialogActions>
        </InputDataBox>
      </Dialog>
    </>
  );
};

export default InputData;
