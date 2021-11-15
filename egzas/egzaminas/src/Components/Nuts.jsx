function Nuts({ data, modal, remove, nut}) {
  const showEdit = () => {
    modal(data);
  };

  // const showDelete = () => {
  //   alert("Do you realy want to delete?")}
  //   remove(nuts.id)
  // };

  return (
    <tr>
      <td>{data.product}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>{data.last_received.slice(0, 10)}</td>
      <td>
        <button className="btn-sm btn-primary mx-2" onClick={showEdit}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn-sm btn-primary mx-2" onClick={()=>remove(nut.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Nuts;
