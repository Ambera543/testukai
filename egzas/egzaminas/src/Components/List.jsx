import Nuts from "./Nuts";

function List({nuts, modal }) {
  return (
    <>
      {nuts.map((data) => (
        <Nuts key={data.id} data={data} modal={modal}></Nuts>
      ))}
    </>
  );
}
export default List;