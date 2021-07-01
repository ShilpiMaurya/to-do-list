import styled from "styled-components";
import ToDoListItems from "../components/ToDoListItems";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background-color: #575b71;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export default function Home() {
  return (
    <Container>
      <ToDoListItems />
    </Container>
  );
}
