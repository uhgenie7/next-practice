import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import Mailcon from "../../public/static/svg/auth/mail.svg";
import PersonIcon from "../../public/static/svg/auth/person.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/opened-eye.svg";
import CloseEyeIcon from "../../public/static/svg/auth/closed_eye.svg";
import Input from "../common/Input";
import Selector from "../common/Selector";
import { dayList, monthList, yearList } from "../../lib/staticData";

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

  .sign-up-birthdat-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .sign-up-modal-birthday-info {
    margin-bottom: 16px;
    color: ${palette.charcoal};
  }

  .sign-up-modal-birthday-selectors {
    display: flex;
    margin-bottom: 24px;
    .sign-up-modal-birthday-month-selector {
      margin-right: 16px;
      flex-grow: 1;
    }
    .sign-up-modal-birthday-day-selector {
      margin-right: 16px;
      width: 25%;
    }
    .sign-up-modal-birthday-year-selector {
      width: 33.3333%;
    }
  }
`;

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  // 이메일 주소 변경 시
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // 이름 변경 시
  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  // 성 변경 시
  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(event.target.value);
  };

  // 비밀번호 변경 시
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 비밀번호 숨김 토글하기
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <Container>
      <div className="input-wrapper">
        <Input
          type="email"
          name="email"
          placeholder="이메일 주소"
          icon={<Mailcon />}
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="input-wrapper">
        <Input
          name="lastname"
          placeholder="이름(예: 길동)"
          icon={<PersonIcon />}
          value={lastname}
          onChange={onChangeLastname}
        />
      </div>
      <div className="input-wrapper">
        <Input
          name="firstname"
          placeholder="성(예: 홍)"
          icon={<PersonIcon />}
          value={firstname}
          onChange={onChangeFirstname}
        />
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="비밀번호 설정하기"
          type={hidePassword ? "password" : "text"}
          icon={
            hidePassword ? (
              <CloseEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <p className="sign-up-birthdat-label">생일</p>
      <p className="sign-up-modal-birthday-info">
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
        에어비엔비 이용자에게 공개되지 않습니다.
      </p>
      <div className="sign-up-modal-birthday-selectors">
        <div className="sign-up-modal-birthday-month-selector">
          <Selector
            options={monthList}
            disabledOptions={["월"]}
            defaultValue="월"
          />
        </div>
        <div className="sign-up-modal-birthday-day-selector">
          <Selector
            options={dayList}
            disabledOptions={["일"]}
            defaultValue="일"
          />
        </div>
        <div className="sign-up-modal-birthday-year-selector">
          <Selector
            options={yearList}
            disabledOptions={["년"]}
            defaultValue="년"
          />
        </div>
      </div>
    </Container>
  );
};

export default SignUpModal;
