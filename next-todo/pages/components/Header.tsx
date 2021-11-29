import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Header = () => {
  return (
    <Container>
      <h1>TodoList</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${palette.gray};
  h1 {
    font-size: 21px;
  }
`;
