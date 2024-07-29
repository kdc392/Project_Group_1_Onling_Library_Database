import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [search, setSearch] = useState({
    searchContent: "",
  });

  function expand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setSearch(() => {
      return {
        [name]: value,
      };
    });
  }

  //   function search(event) {
  //     props.onSearch(note);
  //     event.preventDefault();
  //   }

  return (
    <div className="container">
      <form>
        <input
          className="searchField"
          id="outlined-search"
          label="Search field"
          type="search"
          name="search"
          onClick={expand}
          onChange={handleChange}
          value={search.searchContent}
          placeholder="Looking for something specific?"
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab /*onClick={search}*/>
            <SearchIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default SearchBar;