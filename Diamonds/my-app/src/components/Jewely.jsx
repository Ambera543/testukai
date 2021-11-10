function Jewely({ jewelry, modal }) {
  const showEdit = () => {
    modal(jewelry);
  };

  const showRemove = () => {
    modal(jewelry);
  };
  function in_stock() {
  if (jewelry.in_stock > 0){return "yes";}
  else return "no";}

  const total = jewelry.quantity * jewelry.price;
  const last = jewelry.last_order.slice(0, 10);
  //   const date =parseInt(jewelry.last_order, 10)
  // const dateOnly = (data) => {
  //     return data.map(j => {
  //         j.last_order = j.last_order.slice(0, 10);
  //         return j;
  //     });
  // }
  // const year = new Date(jewelry.last_order).getFullYear();
  // const month = new Date(jewelry.last_order).getMonth();
  // const day = new Date(jewelry.last_order).getDate();

  return (
    <tr>
      <td>{jewelry.product}</td>
      <td>{jewelry.quantity}</td>
      <td>{jewelry.price}</td>
      <td>{total.toFixed(2)}</td>
      <td>{last}</td>
      <td> {in_stock()}</td>
      <td>
        <button onClick={showEdit}>Edit</button>
      </td>
      <td>
        <button onClick={showRemove}>Delete</button>
      </td>
    </tr>

    //     <div className="diamonds_list_jewelry_product">Product: {jewelry.product}</div>
    //     <div className="diamonds_list_jewelry_quantity">Quantity: {jewelry.quantity}</div>
    //     <div className="diamonds_list_jewelry_price">Price: {jewelry.price}</div>
    //     <div>Total value: {total.toFixed(2)}</div>
    //     <div className="diamonds_list_jewelry_stats">
    //     Last order: {new Date(jewelry.last_order).getFullYear()} </div>
    //      <div> In Stock? {jewelry.in_stock}</div>
    //     <button onClick={showEdit}>Edit</button>
    //     <button onClick={showRemove}>Delete</button>

    // </div>
  );
}

export default Jewely;

// <table>
//       <th>
//           <td> Product</td>
//           <td> Quantity</td>
//           <td> Price</td>
//           <td>Total value</td>
//           <td> Last order</td>
//           <td> In Stock?</td>
//           <td>Edit</td>
//           <td>Delete</td>
//         </th>

//         </table>

// {/* <td>{jewelry.product}</td>
// <td>{jewelry.quantity}</td>
// <td>{jewelry.price}</td>
// <td>{total.toFixed(2)}</td>
// <td>{year}-{month}-{day}</td>
// <td> Yes</td> */}
