import close from '../images/button/close.png'
import miniSize from '../images/button/minimise.png'
import maxsize from '../images/button/maximise.png'
import resize from '../images/button/resize.png'
import windowLogo from '../images/icon/winlogo.png'
import back from '../images/icon/back.png'
import forward from '../images/icon/forward.png'
import folder from '../images/icon/folder.png'
import folders from '../images/icon/folders.png'
import search from '../images/icon/search.png'
import arrow from '../images/icon/arrow_down.png'
import thumbnail from '../images/icon/thumbnail.png'
import down from '../images/icon/tooldropdown.png'
import go from '../images/icon/go.png'

//Start Menu Image
// import test from 
import play from '../images/icon/play.png'
import off from '../images/button/shutdown.png'
import menuTop from '../images/menuImg.png'
import folder2 from '../images/icon/menuIcon/folder.png'
import recentDoc from '../images/icon/menuIcon/recentdoc.png'
import clipboard from '../images/icon/menuIcon/clipboard.png'
import defaultProg from '../images/icon/menuIcon/defaultprog.png'
import run from '../images/icon/menuIcon/run.png'
import print from '../images/icon/menuIcon/printerfax.png'
import help from '../images/icon/menuIcon/help.png'
import myComputer from '../images/icon/menuIcon/mycomputer.png'
import folder_music from '../images/icon/menuIcon/folder_music.png'
import folder_img from '../images/icon/menuIcon/folder_image.png'

export const menu_img = {menuTop, off, play}
export const handle_img = { close, miniSize, maxsize,resize };
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
  down
};



type RightIconType = {
  iconImg : string;
  title : string
}
export const rightIcon_data: RightIconType[] = [
  {
    iconImg: folder2,
    title:'내 문서',
  },
  {
    iconImg: recentDoc,
    title:'내 최근 문서',
  },
  {
    iconImg: folder_img,
    title:'내 그림',
  },
  {
    iconImg: myComputer,
    title:'내 컴퓨터',
  },
  {
    iconImg: clipboard,
    title:'제어판',
  },
  {
    iconImg: print,
    title:'프린터 및 팩스',
  },
  {
    iconImg: search,
    title:'검색',
  },
  {
    iconImg: run,
    title:'실행',
  },
]

type ProjectType = {
  id:number;
  title:string;
  icon:string;
  desc: string;
  project_img: string[];
  url : string;
}
export const projectData:ProjectType[] = [
  {
    id:0,
    title:'',
    icon:'',
    desc: '',
    project_img: [''],
    url : ''
  }
]