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
  padding-top: 30px;
`;

const InputDisplayItems = styled.div`
  display: flex;
  flex-direction: row;
`;

const H3Box = styled.div`
  padding-right: 15px;
  padding-top: 20px;
  text-align: center;
`;

const H3 = styled.div`
  width: 153px;
  background: #8184a1;
  color: white;
  border-radius: 2px;
`;

const ButtonBox1 = styled.div`
  padding-top: 20px;
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
  data1: string;
  data2: string | number;
  data3: string | number;
  data4: string;
  data5: string;
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
          console.log(element, "element");
          return (
            <InputDisplayItems key={element.id}>
              <H3Box>
                <H3>{element.data1}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.data2.toString()}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.data3.toString()}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.data4}</H3>
              </H3Box>
              <H3Box>
                <H3>{element.data5}</H3>
              </H3Box>
              <ButtonBox1>
                <button
                  onClick={() => dispatch(deleteItems(element.id))}
                  style={{
                    color: "grey"
                  }}
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
            color: "#575b71",
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
