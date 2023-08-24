import React, { useState, useEffect } from "react";
import {NotionRenderer} from 'react-notion'
import "./windowForm.scss";
import axios from 'axios';
const Notion = () => {
  // fb52391cfd5847de90fc7980acbf819a?pvs=4
  const [notionBlockMap, setNotionBlockMap] = useState({});
  const [response, setResponse] = useState<any>({});
  useEffect(() => {
    const NOTION_PAGE_ID = '3fb52391cfd5847de90fc7980acbf819a?pvs=4';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);
  // console.log(response.keys())
  
  return (
    <div className="Notion">
   { Object.keys(response).length && <NotionRenderer blockMap={response} fullPage={false} />}
    
    </div>
  );
};

export default Notion;
