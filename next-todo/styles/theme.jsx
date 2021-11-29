const screenSize = {
  mobile: "767px",
  tablet_min: "768px",
  tablet_max: "991px",
  laptop_min: "992px",
  laptop_max: "1279px",
  desktop: "1280px",
};

const color = {
  mainTextColor: "rgba(5, 7, 9, 0.9)",
  subTextColor: "rgba(5,7,9, 0.58)",
  washTextColor: "#fefefe",
  highlightDarkTextColor: "#002b00",
  highlightTextColor: "#005500",
  disableTextColor: "rgba(153, 153, 153, 0.4)",
  underLineColor: "#c9f227",
  defaultBackgroundColor: "rgba(0, 85, 0, 0.05)",
  borderColor: "rgba(204, 204, 204, 0.6)",
};

const theme = {
  ...color,
  mobile: `(max-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.tablet_min}) and (max-width: ${screenSize.tablet_max})`,
  laptop: `(min-width: ${screenSize.laptop_min}) and (max-width: ${screenSize.laptop_max})`,
  desktop: `(min-width: ${screenSize.desktop})`,
};

export default theme;

// 사용 예시

// const MainWrap = styled.main`
//   width: 1200px;

//   @media ${(props) => props.theme.tablet} {
//     width: 100%;
//     margin: 0 auto;
//   }
// `;

// // 색상
// const MainText = styled.div`
//   color: ${(props) => props.theme.mainColor};
// `;
