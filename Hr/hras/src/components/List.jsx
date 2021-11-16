import Zmogus from "./Zmogus";

function List({ table, modal }) {
  return (
    <>
      {table.map((data) => (
        <Zmogus key={data.id} data={data} modal={modal}></Zmogus>
      ))}
    </>
  );
}

export default List;