import Nuts from "./Nuts";

function List({nuts, modal, remove }) {
  return (
    <>
      {nuts.map((data) => (
        <Nuts key={data.id} data={data} modal={modal} remove={remove}></Nuts>
      ))}
    </>
  );
}
export default List;