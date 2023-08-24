import React, { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import "./windowForm.scss";

const Notion = (notionBlockMap: any) => {

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
