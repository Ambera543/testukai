function Zmogus({ data, modal, remove }) {
  const showEdit = () => {
    modal(data);
  };

  return (
    <tr>
      <td>{data.firstname}</td>
      <td>{data.surname}</td>
      <td>{data.address}</td>
      <td>{data.phone_no}</td>
      <td>{data.email}</td>
      <td>{data.salary}</td>
      <td>{data.started_work.slice(0, 10)}</td>
      <td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={()=>remove(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Zmogus;
