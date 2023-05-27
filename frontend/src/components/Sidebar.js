import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQueries,
  getQueriesFromDb,
  saveData,
} from "../actions/queryActions";
import RenderHighlightedTitle from "./RenderHighlightedTitle";
import { flatQueries } from "../utils/utils";
import "../style/css/sidebar.css";

const Sidebar = ({ setIndex, findValue }) => {
  const dispatch = useDispatch();
  const queriesResults = useSelector((state) => state.queries.queries);
  const [prevQueriesLength, setPrevQueriesLength] = useState(0);

  useEffect(() => {
    dispatch(getQueriesFromDb());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (queriesResults.length !== prevQueriesLength) {
      dispatch(saveData(queriesResults));
      setPrevQueriesLength(queriesResults.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queriesResults]);

  const queries = flatQueries(queriesResults);
  const handleClick = (index) => {
    dispatch(fetchQueries(queries[index].searchParam));
    setIndex(index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>History</h2>
      </div>
      {queries.length > 0 &&
        queries.map((query, index) => (
          <div
            className="sidebar-link"
            key={index}
            onClick={() => handleClick(index)}
          >
            <RenderHighlightedTitle
              text={query.searchParam}
              findValue={findValue}
            />
            : <RenderHighlightedTitle text={query.Text} findValue={findValue} />
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
