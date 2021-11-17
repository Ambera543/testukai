import { useState } from "react";

function NavBar({ table, filter, reset, search }) {
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const selectFilter = (e) => {
    setFilterValue(e.target.value);
    filter(e.target.value);
  };

  const resetHandler = () => {
    reset();
    setFilterValue("");
    setSearchValue("");
    // setSortValue('');
    // sort('');
  };
  const handleSearchValue = (e) => {
    if (e.target.value === "all") {
      resetHandler();
    } else {
      setSearchValue(e.target.value);
      search(e.target.value);
    }
  };

  return (
    <div className="form-group">
      <div className="m-4">
        <span> Surname Filter </span>
        <select onChange={selectFilter} value={filterValue}>
          <option value="all">Select Surname</option>
          {table.map((t) => (
            <option key={t.surname} value={t.surname}>
              {t.surname}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group m-4">
        <span>Surname Search </span>
        <input onChange={handleSearchValue} value={searchValue}></input>
      </div>

      <button className="btn btn-primary" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default NavBar;
