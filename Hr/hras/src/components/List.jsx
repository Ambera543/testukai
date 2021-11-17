import Zmogus from "./Zmogus";

function List({ table, modal, remove }) {
  return (
    <>
      {table.map((data) => (
        <Zmogus key={data.id} data={data} modal={modal} remove={remove}></Zmogus>
      ))}
    </>
  );
}

export default List;