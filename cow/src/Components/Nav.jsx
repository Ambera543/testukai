import { useState } from "react";

function Nav({ reset, sort }) {
  const [sortValue, setSortValue] = useState("");

  const selectSort = (e) => {
    setSortValue(e.target.value);
    sort(e.target.value);
  };
  const resetHandler = () => {
    reset();
    setSortValue("");
    sort("");
  };
  return (
    <div className="cow_nav">
      <div> Sort By </div>
      <select onChange={selectSort} value={sortValue}>
        <option value="" onChange={resetHandler}> Select cow</option>
        <option value="weight_asc"> Weight - 1-9</option>
        <option value="weight_desc"> Weight- 9-1</option>
        <option value="milk_asc"> Milk Total - 1-9</option>
        <option value="milk_desc">Milk Total  - 9-1</option>
      </select>
    {/* <div>
        <button className="btn btn-primary mx-4"  onClick={resetHandler}>
          Reset
        </button>
        </div> */}
     
    </div>
  );
}

export default Nav;