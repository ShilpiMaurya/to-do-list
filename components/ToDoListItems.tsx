import { deleteItems, removeAll } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Heading from "./Heading";
import InputData from "./InputData";

const ToDoListItemsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputDisplay = styled.div`
  padding-top: 10px;
  overflow: auto;
`;

const InputDisplayItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const H3Box = styled.div`
  padding-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
  text-align: center;
`;

const H3 = styled.div`
  background: transparent;
  width: 150px;
  padding: 0.5em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
  outline: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ButtonBox1 = styled.div`
  padding-top: 10px;
  padding-left: 5px;
`;

const ButtonBox2 = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: center;
`;

type Item = {
  id: number;
  taskTitleData: string;
  startDateData: string;
  endDateData: string;
  priorityData: string;
  statusData: string;
};

const ToDoList = () => {
  // @ts-ignore
  const list = useSelector(state => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <ToDoListItemsBox>
      <Heading />
      <InputData />
      <InputDisplay>
        {list.map((element: Item) => {
          return (
            <InputDisplayItems key={element.id}>
              <H3Box>
                <H3>{element.taskTitleData}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.startDateData.toDateString()}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.endDateData.toDateString()}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.priorityData}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.statusData}</H3>
              </H3Box>
              <ButtonBox1>
                <button
                  onClick={() => dispatch(deleteItems(element.id))}
                  style={{ padding: ".7em" }}
                >
                  -
                </button>
              </ButtonBox1>
            </InputDisplayItems>
          );
        })}
      </InputDisplay>
      <ButtonBox2>
        <button
          onClick={() => dispatch(removeAll())}
          style={{
            fontSize: "16px"
          }}
        >
          Remove list
        </button>
      </ButtonBox2>
    </ToDoListItemsBox>
  );
};

export default ToDoList;
