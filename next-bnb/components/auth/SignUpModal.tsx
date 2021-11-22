import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import Mailcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened-eye.svg";
import CloseEyeIcon from "../../public/static/svg/auth/closed_eye.svg";

const Container = styled.form`
  padding: 32px;
  background-color: white;
  z-index: 11;

  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
    input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border: 1px solid ${palette.gray_eb};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      ::placeholder {
        color: ${palette.gray_76};
      }
    }
    svg {
      position: absolute;
      right: 11px;
      top: 16px;
    }
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <div className="input-wrapper">
        <input placeholder="이메일 주소" type="email" name="email" />
        <Mailcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="이름(예: 길동)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="성(예: 홍)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="비밀번호 설정하기" type="password" />
        <OpenedEyeIcon />
      </div>
    </Container>
  );
};

export default SignUpModal;
