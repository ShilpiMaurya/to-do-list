import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useState, useCallback } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { createUser } from "../actions/index";
import { AppDispatch } from "../store";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useRouter } from "next/router";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "next/link";

const ModalTitleBox = styled.div`
  color: var(--modal-secondary-color);
  font-size: 30px;
  font-weight: 100;
  padding-bottom: 10px;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px 30px;
`;

const ModalContent = styled.div`
  width: 100%;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;

const CheckBoxText = styled.div`
  color: var(--modal-primary-color);
  align-self: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const FooterText = styled.div`
  color: var(--modal-primary-color);
`;

const FooterLink = styled.div`
  padding-left: 5px;
  color: var(--modal-secondary-color);
  cursor: pointer;
`;

const CloseIconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 10px;
  padding-right: 10px;
`;

const CloseIconButton = styled.div`
  cursor: pointer;
`;

const ErrorMessageContainer = styled.div`
  height: 20px;
`;

const ErrorMessage = styled.div`
  color: var(--modal-error-color);
`;

const SignUpButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 20px 5px 20px;
  justify-content: center;
`;

const PopupLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #fc446b, #3f5efb);
  color: white;
  padding: 25px 30px 25px 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const LoadingText = styled.div`
  font-size: 20px;
  padding-left: 20px;
`;

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const SignupComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [openLoadingModal, setOpenLoadingModal] = useState(false);
  const uniqueUserId = useSelector(
    (state: RootStateOrAny) => state.todoReducers.uniqueUserId.uniqueUserId
  );
  if (uniqueUserId) {
    router.push("/");
  }
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const disabled =
    !(name && email && password) ||
    !!(nameErrorMessage || emailErrorMessage || passwordErrorMessage);

  const handleOnButtonClick = useCallback(() => {
    setOpenSignupModal(true);
  }, [openSignupModal]);

  const handleModalClose = useCallback(() => {
    setOpenSignupModal(false),
      setName(""),
      setPassword(""),
      setEmail(""),
      setNameErrorMessage(""),
      setEmailErrorMessage(""),
      setPasswordErrorMessage("");
  }, [
    openSignupModal,
    name,
    password,
    email,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage
  ]);

  const handleCheckboxChange = useCallback(
    e => {
      setChecked(e.target.checked);
    },
    [checked]
  );

  const handleSignUpButtonClick = useCallback(() => {
    if (name && email && password) {
      dispatch(createUser(name, email, password, checked));
    }
    localStorage.setItem("rememeberMe", checked ? "true" : "false");
    setOpenLoadingModal(true);
  }, [name, password, email, openLoadingModal, checked]);

  return (
    <>
      <button
        onClick={handleOnButtonClick}
        style={{ fontSize: "20px", padding: "10px" }}
      >
        SignUp
      </button>
      <Dialog
        open={openSignupModal}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
        fullWidth={true}
      >
        <CloseIconContainer>
          <CloseIconButton>
            <CloseIcon color="primary" onClick={handleModalClose} />
          </CloseIconButton>
        </CloseIconContainer>
        <SignUpBox>
          <ModalTitleBox>Create Account</ModalTitleBox>
          <ModalContent>
            <TextField
              margin="dense"
              label="Name"
              type="name"
              fullWidth
              value={name}
              onChange={event => setName(event.target.value)}
              onBlur={event => {
                const input = event.target.value;
                if (!input.length) {
                  setNameErrorMessage("Please, enter a valid name");
                } else {
                  setNameErrorMessage("");
                }
              }}
            />
            <ErrorMessageContainer>
              {!!nameErrorMessage && (
                <ErrorMessage>{nameErrorMessage}</ErrorMessage>
              )}
            </ErrorMessageContainer>
            <TextField
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
              value={email}
              onChange={event => setEmail(event.target.value)}
              onBlur={event => {
                const input = event.target.value;
                if (!input.match(emailFormat)) {
                  setEmailErrorMessage(
                    "This field is required, Please, enter a valid email"
                  );
                } else {
                  setEmailErrorMessage("");
                }
              }}
            />
            <ErrorMessageContainer>
              {!!emailErrorMessage && (
                <ErrorMessage>{emailErrorMessage}</ErrorMessage>
              )}
            </ErrorMessageContainer>
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={event => setPassword(event.target.value)}
              onBlur={event => {
                const input = event.target.value;
                if (input.length < 6) {
                  setPasswordErrorMessage(
                    "Password must be minimun 6 characters"
                  );
                } else {
                  setPasswordErrorMessage("");
                }
              }}
            />
            <ErrorMessageContainer>
              {!!passwordErrorMessage && (
                <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
              )}
            </ErrorMessageContainer>
            <CheckBoxContainer>
              <Checkbox
                color="primary"
                size="medium"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <CheckBoxText>Remember me</CheckBoxText>
            </CheckBoxContainer>
          </ModalContent>
          <DialogActions>
            <SignUpButtonContainer>
              <Button
                color="primary"
                variant="contained"
                disabled={disabled}
                onClick={handleSignUpButtonClick}
                fullWidth
              >
                SignUp
              </Button>
            </SignUpButtonContainer>
          </DialogActions>
          <Footer>
            <FooterText>Have already an account ?</FooterText>
            <FooterLink>
              <Link href="/login">
                <a>Login here</a>
              </Link>
            </FooterLink>
          </Footer>
        </SignUpBox>
      </Dialog>
      <Modal
        className={classes.modal}
        open={openLoadingModal}
        BackdropComponent={Backdrop}
      >
        <Fade in={openLoadingModal}>
          <PopupLayout>
            <CircularProgress style={{ color: "white" }} />
            <LoadingText>Please wait...</LoadingText>
          </PopupLayout>
        </Fade>
      </Modal>
    </>
  );
};

export default SignupComponent;
