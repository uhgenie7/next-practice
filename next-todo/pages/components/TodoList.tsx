import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import { TodoType } from "../../types/todo";

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  // props 타입에 대해서는 interface를 사용. React.FC는 리액트의 React.FunctionComponent 타입으로 마우스를 올려보면 알 수 있다.
  // P(props)라는 타입을 <> 제네릭을 사용하여 React.FC에 전달해주고 있음.
  // 이제 TodoList 컴포넌트는 props로 IProps를 전달받음.
  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>
      </div>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};
    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }
`;
