import React, { useMemo } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import { TodoType } from "../../types/todo";

import TrashCanIcon from "../../public/static/svg/trash_can.svg";
import CheckMarkIcon from "../../public/static/svg/check_mark.svg";

interface IProps {
  todos: TodoType[];
}

type ObjectIndexType = {
  [key: string]: number | undefined;
};

const TodoList: React.FC<IProps> = ({ todos }) => {
  // props 타입에 대해서는 interface를 사용. React.FC는 리액트의 React.FunctionComponent 타입으로 마우스를 올려보면 알 수 있다.
  // P(props)라는 타입을 <> 제네릭을 사용하여 React.FC에 전달해주고 있음.
  // 이제 TodoList 컴포넌트는 props로 IProps를 전달받음.

  const todoColorNums = useMemo(() => {
    const colors: ObjectIndexType = {};

    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        // 존재하지 않는 키
        colors[`${todo.color}`] = 1;
      } else {
        // 존재하는 키
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {console.log(Object.keys(todoColorNums))}
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? "checked-todo-text" : ""
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <TrashCanIcon className="todo-trash-can" onClick={() => {}} />
                  <CheckMarkIcon
                    className="todo-check-mark"
                    onClick={() => {}}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => {}}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

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

  .todo-list-header-colors {
    display: flex;
    .todo-list-header-color-num {
      display: flex;
      margin-right: 8px;
      p {
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        margin-left: 6px;
      }
      .todo-list-header-round-color {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};
      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        align-items: center;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          path {
            fill: ${palette.deep_red};
            //path 엘리먼트는 선, 곡선, 호 등 다양한 형태를 그릴 수 있음. path엘리먼트의 fill 을 이용하여 색상 바꿈 가능.
          }
        }
        .todo-check-mark {
          fill: ${palette.deep_green};
        }
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;
