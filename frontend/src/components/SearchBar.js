import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQueries } from "../actions/queryActions";
import { flatQueries } from "../utils/utils";

const SearchBar = ({ searchParam, setSearchParam, index, isLoading }) => {
  const queriesResults = useSelector((state) => state.queries.queries);
  const dispatch = useDispatch();

  const queries = flatQueries(queriesResults);

  const handleClick = () => {
    dispatch(fetchQueries(searchParam));
  };

  useEffect(() => {
    if (index !== undefined && queries[index]) {
      setSearchParam(queries[index].searchParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="input-container">
      <input
        type="text"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Search..."
        className="input-field"
      />
      <button
        className="button"
        disabled={isLoading}
        onClick={() => handleClick()}
      >
        Execute
      </button>
    </div>
  );
};

export default SearchBar;
