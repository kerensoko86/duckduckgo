import React, { useState } from "react";
import QueryList from "./QueryList";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Find from "./Find";
import { ReactComponent as Logo } from "../style/assets/download.svg";

const Main = () => {
  const [findValue, setFindValue] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [index, setIndex] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="content">
      <Find setFindValue={setFindValue} findValue={findValue} />
      <Logo className="content-title" />
      <SearchBar
        isLoading={isLoading}
        searchParam={searchParam}
        setSearchParam={setSearchParam}
        index={index}
      />
      <QueryList
        findValue={findValue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Sidebar findValue={findValue} setIndex={setIndex} />
    </div>
  );
};

export default Main;
