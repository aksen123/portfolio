import MainLogo from '../images/logo.png'
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
import menuTop from "../images/menuImg.png";
import folder2 from "../images/icon/menuIcon/folder.png";
import recentDoc from "../images/icon/menuIcon/recentdoc.png";
import clipboard from "../images/icon/menuIcon/clipboard.png";
import run from "../images/icon/menuIcon/run.png";
import print from "../images/icon/menuIcon/printerfax.png";
import myComputer from "../images/icon/menuIcon/mycomputer.png";
import folder_img from "../images/icon/menuIcon/folder_image.png";
import internet from '../images/icon/internet.png'
import descFolder from '../images/folder.png'
import todo from '../images/icon/todo.png'
import { windowImg } from './projectImg';





export const menu_img = { menuTop, off, play };
export const handle_img = { close, miniSize, maxsize, resize };
export const mainLogo = MainLogo

// main icon
export const mainIcons = [
  {
    icon: folder2,
    title: '내 문서'
  },
  {
    icon: myComputer,
    title: '내 컴퓨터'
  },
  {
    icon: internet,
    title: '내 네트워크 환경'
  },
]
export const descTopIcon = {descFolder, todo}


// Skill badge
const html =
  "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const css =
  "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const scss =
  "https://img.shields.io/badge/sass-cc6699?style=for-the-badge&logo=sass&logoColor=white";
const styled =
  "https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white";
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
  "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white";
const git ="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"

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
  screenToggle : boolean;
  position: {x:number, y:number};
  active: boolean;
  hide: boolean;
  zIndex: number;
  type: string;
};


export const projectData: ProjectType[] = [
  {
    id: 0,
    title: "Portfolio Mindow XP",
    icon: MainLogo,
    desc: [
      "React / Typescript 기반 개발",
      "Redux 활용 전역 상태관리",
      "Redux 활용 폴더 최대화,최소화,폴더 위치 상태 관리",
      "localStorage, Redux 활용 투두 리스트",
      "Drag & Drop 적용 폴더,아이콘 위치 변경 기능",
      "HTML / SCSS / BOOTSTRAP 화면 퍼블리싱",
    ],
    project_img: windowImg,
    url: "https://www.naver.com/",
    skill: [html, react, redux, JS, TS, scss, bootstrap, git],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 1,
    title: "test1",
    icon: folder2,
    desc: ["설명 1", "설명 2", "설명 3", "설명 4", "설명 5"],
    project_img: [MainLogo, myComputer, folder, back],
    url: "https://finance.naver.com/",
    skill: [react, html, bootstrap, bootstrap, bootstrap],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 2,
    title: "test2",
    icon: folders,
    desc: ["설명 1", "설명 2", "설명 3", "설명 4", "설명 5"],
    project_img: [MainLogo, myComputer, folder, back],
    url: "https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014144750",
    skill: [react, html, bootstrap],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "WINDOW_FORM",
  },
  {
    id: 3,
    title: "test3",
    icon: thumbnail,
    desc: ["설명 1", "설명 2", "설명 3", "설명 4", "설명 5"],
    project_img: [MainLogo, myComputer, folder, back],
    url: "https://sports.news.naver.com/index",
    skill: [react, html, bootstrap],
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
    icon: thumbnail,
    desc: ["설명 1", "설명 2", "설명 3", "설명 4", "설명 5"],
    project_img: [MainLogo, myComputer, folder, back],
    url: "abc",
    skill: [react, html, bootstrap],
    screenToggle: false,
    position: { x: 0, y: 0 },
    active: true,
    hide: false,
    zIndex: 0,
    type: "TODO",
  },
];
