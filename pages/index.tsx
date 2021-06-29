import ToDoList from "../components/ToDoListItems";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Heading = styled.h1`
  text-align: center;
  padding-top: 40px;
`;

export default function Home() {
  return (
    <Container>
      <Heading>To-do-list</Heading>
      <ToDoList></ToDoList>
    </Container>
  );
}
