import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const ModalTitleBox = styled.div`
  color: #3f51b5;
  font-size: 30px;
  font-weight: 100;
  padding-bottom: 10px;
`;

const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 30px 30px;
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
  color: #757575;
  align-self: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const FooterText = styled.div`
  color: #757575;
`;

const FooterLink = styled.div`
  padding-left: 5px;
  color: #3f51b5;
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

const SignupPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOnButtonClick = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <button onClick={handleOnButtonClick}>SignUp</button>
      <Dialog
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
      >
        <CloseIconContainer>
          <CloseIconButton>
            <CloseIcon color="primary" onClick={handleModalClose} />
          </CloseIconButton>
        </CloseIconContainer>
        <SignUpBox>
          <ModalTitleBox>Create Account</ModalTitleBox>
          <ModalContent>
            <TextField margin="dense" label="Name" type="text" fullWidth />
            <TextField margin="dense" label="Email" type="text" fullWidth />
            <TextField margin="dense" label="Password" type="text" fullWidth />
            <CheckBoxContainer>
              <Checkbox color="primary" size="medium" />
              <CheckBoxText>Remember me</CheckBoxText>
            </CheckBoxContainer>
          </ModalContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "20px",
                width: "100%"
              }}
            >
              SignUp
            </Button>
          </DialogActions>
          <Footer>
            <FooterText>Have already an account ?</FooterText>
            <FooterLink>
              <a>Login here</a>
            </FooterLink>
          </Footer>
        </SignUpBox>
      </Dialog>
    </>
  );
};

export default SignupPage;
