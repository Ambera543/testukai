import Item from "./Item";

function List({nuts, modal }) {
  return (
    <>
      {nuts.map((data) => (
        <Item key={data.id} data={data} modal={modal}></Item>
      ))}
    </>
  );
}
export default List;