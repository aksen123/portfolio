import React from 'react'
import "./windowForm.scss";
const a = {
  ab: [],
  ad: { avv: "123123" },
};

const Readme = () => {
  return (
    <div className="Readme">
      <p className="name" style={{ color: "#69cdfb" }}>
        <span className="let">let</span>
        Park
        <span className="white">: </span>
        <span style={{color:'#49c74d'}}>Developer</span>
        <span className="white"> = {"{"}</span>
      </p>
      <div className="info">
        <p style={{ color: "#69cdfb" }}>name : 
        <span style={{ color: "#be795c" }}> "박민욱"</span>
        <span className='white'>,</span>
        </p>
        <p style={{ color: "#69cdfb" }}>age : 
        <span style={{ color: "#99ce9b" }}> 33</span>
        <span className='white'>,</span>
        </p>
        <p style={{ color: "#69cdfb" }}>skills :
        <span style={{color: '#700e70'}}> {"["}</span>
        <span style={{ color: "#be795c" }}> "HTML"</span>
        <span className='white'>,</span>
        <span style={{ color: "#be795c" }}> "CSS"</span>
        <span className='white'>,</span>
        </p>
        <p className='skill' style={{ color: "#be795c" }}>"Javascript" 
        <span className='white'>,</span>
        <span style={{ color: "#be795c" }}> "Typescript"</span>
        <span className='white'>,</span>
        <span style={{ color: "#be795c" }}> "React"</span>
        <span style={{color: '#700e70'}}> {"]"}</span>
        <span className='white'>, </span>
        </p>
        <p style={{ color: "#69cdfb" }}>contact : 
        <span style={{ color: "#700e70" }}> {"{"}</span>
        </p>
        <p className='contact' style={{ color: "#69cdfb" }}>phone : 
        <span style={{ color: "#be795c" }}> "010-8623-0000"</span>
        <span className='white'>,</span>
        </p>
        <p className='contact' style={{ color: "#69cdfb" }}>email : 
        <span style={{ color: "#be795c" }}> "psmhome123@naver.com"</span>
        </p>
        <span style={{ color: "#700e70" }}> {"}"}</span>
      </div>
        <span className="white">{"}"} ;</span>
        <span className='flicker'> |</span>
    </div>
  );
}

export default Readme
