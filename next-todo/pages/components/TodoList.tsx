import React from "react";
import styled from "styled-components";
import { TodoType } from "../../types/todo";

interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  width: 100%;
`;

const TodoList: React.FC<IProps> = () => {
  // props 타입에 대해서는 interface를 사용. React.FC는 리액트의 React.FunctionComponent 타입으로 마우스를 올려보면 알 수 있다.
  // P(props)라는 타입을 <> 제네릭을 사용하여 React.FC에 전달해주고 있음.
  // 이제 TodoList 컴포넌트는 props로 IProps를 전달받음.
  return (
    <Container>
      <h1>TodoList</h1>
    </Container>
  );
};

export default TodoList;
