import React from "react";
import RenderHighlightedTitle from "./RenderHighlightedTitle";
import "../css/links.css";

const Query = ({ query, findValue }) => {
  return (
    <div className="links">
      <a href={query.FirstURL} target="_blank" rel="noreferrer">
        <RenderHighlightedTitle text={query.Text} findValue={findValue} />
      </a>
    </div>
  );
};

export default Query;
