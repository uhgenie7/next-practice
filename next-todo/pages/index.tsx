import React from "react";
import { NextPage } from "next";
import TodoList from "./components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "수학 숙제하기", color: "orange", checked: true },
  { id: 3, text: "코딩하기", color: "yellow", checked: false },
  { id: 5, text: "요리 연습하기", color: "blue", checked: true },
  { id: 6, text: "분리수거 하기", color: "navy", checked: false },
  { id: 7, text: "할 일", color: "red", checked: false },
  { id: 8, text: "할 일2", color: "orange", checked: false },
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
  // TodoList 컴포넌트가 props로 todos를 받기로 되어있지 않기 때문에 에러가 발생
};

export default app;
