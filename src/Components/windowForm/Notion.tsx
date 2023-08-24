import React, { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import "./windowForm.scss";

const Notion = () => {
  
  const [notionBlockMap, setNotionBlockMap] = useState({});
  useEffect(() => {
    (async () => {
        const notionBlockMap = await (
            await fetch(
                "https://notion-api.splitbee.io/v1/page/fb52391cfd5847de90fc7980acbf819a?pvs=4"
            )
        ).json();
        setNotionBlockMap(notionBlockMap);
    })();
  }, []);
  console.log(notionBlockMap)
  return (
    <div className="Notion">
      {Object.keys(notionBlockMap).length ? (
        <NotionRenderer blockMap={notionBlockMap} fullPage={true} />
      ) : null}
    </div>
  );
};

export default Notion;
