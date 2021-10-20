function Number(handleNumber) {
  const change = (e) => {
    handleNumber(e);
  };
  return (
    <>
      <div>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="50"
          onChange={(e) => change(e)}
        ></input>
      </div>
    </>
  );
}

export default Number;
