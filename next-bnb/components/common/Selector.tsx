/* eslint-disable indent */
import React from "react";
import styled, { css } from "styled-components";
import palette from "../../styles/palette";
import WarningIcon from "../../public/static/svg/common/warning.svg";

const Container = styled.div`
  select {
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 1px solid ${palette.gray_b0};
    padding: 0 14px 0 12px;
    appearance: none;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/static/svg/selector/register_selector_down_arrow.svg");
    background-position: right 14px center;
    background-repeat: no-repeat;
    font-size: 16px;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  value?: string;
  disabledOptions?: string[];
}

const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  return (
    <Container>
      <select {...props}>
        {disabledOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;
