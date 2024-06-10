import MainLogo from "../images/logo.png";
import close from "../images/button/close.png";
import miniSize from "../images/button/minimise.png";
import maxsize from "../images/button/maximise.png";
import resize from "../images/button/resize.png";
import windowLogo from "../images/icon/winlogo.png";
import back from "../images/icon/back.png";
import forward from "../images/icon/forward.png";
import folder from "../images/icon/folder.png";
import folders from "../images/icon/folders.png";
import search from "../images/icon/search.png";
import arrow from "../images/icon/arrow_down.png";
import thumbnail from "../images/icon/thumbnail.png";
import down from "../images/icon/tooldropdown.png";
import go from "../images/icon/go.png";

//Start Menu Image

import play from "../images/icon/play.png";
import off from "../images/button/shutdown.png";
import menuTop from "../images/startImg.png";
import folder2 from "../images/icon/menuIcon/folder.png";
import recentDoc from "../images/icon/menuIcon/recentdoc.png";
import clipboard from "../images/icon/menuIcon/clipboard.png";
import run from "../images/icon/menuIcon/run.png";
import print from "../images/icon/menuIcon/printerfax.png";
import myComputer from "../images/icon/menuIcon/mycomputer.png";
import folder_img from "../images/icon/menuIcon/folder_image.png";
import internet from "../images/icon/internet.png";
import descFolder from "../images/folder.png";
import todo from "../images/icon/todo.png";

//  프로젝트 이미지
import { windowImg, gbgImg, kioskImg, adminImg } from "./projectImg";
import bgbIcon from "../images/icon/gyeongbokgung-icon.png";
import dumpling from "../images/icon/dumpling.png";
import vscode from "../images/icon/vscode.png";

import lotto from "../images/icon/lotto.png";

export const menu_img = { menuTop, off, play };
export const handle_img = { close, miniSize, maxsize, resize };
export const mainLogo = MainLogo;

// main icon
export const mainIcons = [
  {
    icon: folder2,
    title: "내 문서",
  },
  {
    icon: myComputer,
    title: "내 컴퓨터",
  },
  {
    icon: internet,
    title: "내 네트워크 환경",
  },
];
export const descTopIcon = { descFolder, todo, vscode, lotto };

// Skill badge
const html =
  "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const css =
  "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const scss =
  "https://img.shields.io/badge/sass-cc6699?style=for-the-badge&logo=sass&logoColor=white";
const JS =
  "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white";
const TS =
  "https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white";
const jQuery =
  "https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white";
const react =
  "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white";
const redux =
  "https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white";
const bootstrap =
  "https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white";
const github =
  "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white";
const git =
  "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white";
const nextjs =
  "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white";
const recoil =
  "https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white";
const tailwind =
  "https://img.shields.io/badge/tailwindcss-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white";
export const toolbar_img = {
  windowLogo,
  back,
  forward,
  folder,
  folders,
  search,
  arrow,
  thumbnail,
  go,
  down,
};

type RightIconType = {
  iconImg: string;
  title: string;
};
export const rightIcon_data: RightIconType[] = [
  {
    iconImg: folder2,
    title: "내 문서",
  },
  {
    iconImg: recentDoc,
    title: "내 최근 문서",
  },
  {
    iconImg: folder_img,
    title: "내 그림",
  },
  {
    iconImg: myComputer,
    title: "내 컴퓨터",
  },
  {
    iconImg: clipboard,
    title: "제어판",
  },
  {
    iconImg: print,
    title: "프린터 및 팩스",
  },
  {
    iconImg: search,
    title: "검색",
  },
  {
    iconImg: run,
    title: "실행",
  },
];

export type ProjectType = {
  id: number;
  title: string;
  icon: string;
  desc: string[];
  project_img: string[];
  url: string;
  skill: string[];
  screenToggle: boolean;
  position: { x: number; y: number };
  active: boolean;
  hide: boolean;
  zIndex: number;
  type: string;
};

export const projectData: ProjectType[] = [
  {
    id: 0,
    title: "Dumpling Admin - 체인점 Kiosk",
    icon: dumpling,
    desc: [
      "Firestore 데이터베이스 연동 및 SWR 라이브러리 활용 주문 내역 실시간 확인",
      "Axios instance, interceptor를 활용해 에러 핸들링 관리",
      "메뉴 관리 페이지 CRUD 구현",
      "로그인 권한 별 페이지 분기 ( 전체 관리 / 지점 관리 )",
      "Window 객체 alert 재정의, alert 호출 시 React-Portal 활용 커스텀 컴포넌트 호출 구현",
    ],
    project_img: adminImg,
    url: "https://admin-khaki-delta.vercel.app/",
    skill: [nextjs, TS, recoil, tailwind, git, github],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 1,
    title: "Dumpling Kiosk - 체인점 Kiosk",
    icon: dumpling,
    desc: [
      "Firestore 데이터베이스 연동 및 SWR 라이브러리 활용 주문 내역 실시간 확인",
      "Axios instance, interceptor를 활용해 에러 핸들링 관리",
      "지점 코드 별 페이지 분기",
      "낮,밤 행사 카드 페이지네이션 구",
      "TypeScript를 사용하여 정적 타입 검사를 통해 코드의 안정성과 유지보수성 향상",
      "Window 객체 alert 재정의, alert 호출 시 React-Portal 활용 커스텀 컴포넌트 호출 구현",
    ],
    project_img: kioskImg,
    url: "https://kiosk-beryl.vercel.app/",
    skill: [nextjs, TS, recoil, tailwind, git, github],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 2,
    title: "Portfolio Mindow XP",
    icon: MainLogo,
    desc: [
      "React / Typescript 기반 개발",
      "Redux 활용 전역 상태관리",
      "Redux 활용 폴더 최대화,최소화,폴더 위치 상태 관리",
      "localStorage, Redux 활용 투두리스트 작성,수정,삭제 기능 구현",
      "폴더,아이콘 Drag & Drop",
      "HTML / SCSS / BOOTSTRAP 화면 퍼블리싱",
    ],
    project_img: windowImg,
    url: "https://mindowsxp-dc710.web.app/",
    skill: [html, react, redux, JS, TS, scss, bootstrap, git],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 3,
    title: "Team - 경복궁 관리소",
    icon: bgbIcon,
    desc: [
      "반응형 웹페이지",
      "이달의 행사 달력, 무한 슬라이드 구현",
      "location.search 활용 낮,밤 행사/예약 페이지 분기",
      "낮,밤 행사 카드 페이지네이션 구현",
      "예약 페이지 행사 기간별 날짜 활성화 구현",
      "예약페이지 예약 / 예약 확인 구현",
    ],
    project_img: gbgImg,
    url: "https://gyeongbokgung-c8579.web.app/",
    skill: [html, css, JS, jQuery, bootstrap],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },

  {
    id: 4,
    title: "todo",
    icon: todo,
    desc: [""],
    project_img: [""],
    url: "",
    skill: [""],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "TODO",
  },
  {
    id: 5,
    title: "Read Me",
    icon: vscode,
    desc: [""],
    project_img: [""],
    url: "",
    skill: [""],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "README",
  },
  {
    id: 6,
    title: "Lotto",
    icon: lotto,
    desc: [""],
    project_img: [""],
    url: "",
    skill: [""],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "LOTTO",
  },
];
