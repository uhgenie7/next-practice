import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import Mailcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened-eye.svg";
import CloseEyeIcon from "../../public/static/svg/auth/closed_eye.svg";
import Input from "../common/Input";

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
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <div className="input-wrapper">
        <Input placeholder="이메일 주소" type="email" icon={<Mailcon />} />
        {/* input 이 아닌 Input 으로 컴포넌트화 된 것에 주의 */}
      </div>
      <div className="input-wrapper">
        <Input placeholder="이름(예: 길동)" icon={<PersonIcon />} />
      </div>
      <div className="input-wrapper">
        <Input placeholder="성(예: 홍)" icon={<PersonIcon />} />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type="password"
          icon={<OpenedEyeIcon />}
        />
      </div>
    </Container>
  );
};

export default SignUpModal;
