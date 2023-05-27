import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Query from "./Query.js";
import LoadingSpinner from "./LoadingSpinner.js";
import Pagination from "./Pagination.js";

import { itemsPerPage } from "../utils/utils.js";

const QueryList = ({ findValue, isLoading }) => {
  const queriesResults = useSelector((state) => state.queries.currentQueries);
  let queries = Object.values(queriesResults)[0];

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [isResults, setIsResults] = useState(true);

  useEffect(() => {
    if (queries?.length > 0) {
      fetchData(currentPage);
      setIsResults(true);
    } else {
      setIsResults(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queriesResults]);

  //for pagination
  const fetchData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredQueries = queries.slice(startIndex, endIndex);
    setData(filteredQueries);
  };

  return (
    <>
      {isResults &&
        data &&
        data.map((query, index) => (
          <Query query={query} key={index} findValue={findValue} />
        ))}
      {!isResults && <div className="no-results-div">No results were find</div>}
      {isLoading && <LoadingSpinner />}

      <Pagination
        totalItems={queries ? queries.length : 0}
        fetchData={fetchData}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default QueryList;
