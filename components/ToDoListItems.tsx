import { useState } from "react";
import { addItems, deleteItems, removeAll } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

type Item = {
  id: number;
  data: string;
};

const DisplayBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ToDoList = () => {
  const [titleData, setTitleData] = useState("");
  // @ts-ignore
  const list = useSelector(state => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="Add items..."
        value={titleData}
        onChange={event => setTitleData(event.target.value)}
      />
      <button
        // @ts-ignore
        onClick={() => dispatch(addItems(titleData), setTitleData(""))}
      >
        Add
      </button>
      <div>
        {list.map((elem: Item) => {
          return (
            <DisplayBox key={elem.id}>
              <div>{elem.data}</div>
              <button onClick={() => dispatch(deleteItems(elem.id))}>
                Delete
              </button>
            </DisplayBox>
          );
        })}
      </div>
      <button onClick={() => dispatch(removeAll())}>Remove all</button>
    </>
  );
};

export default ToDoList;
