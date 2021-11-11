import Jewely from "./Jewely";

function JewelryList({ jewelrys, modal }) {
  return (
    <div className="container flex-child">
      <div className="row">
        <div className="col-10">
    
            <div className="card-header">Jewelry</div>

            <div className="card-body">
              <table className="table">
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total value</th>
                  <th>Last order</th>
                  <th>In Stock?</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {jewelrys.map((jewely) => (
                  <Jewely
                    key={jewely.id}
                    jewelry={jewely}
                    modal={modal}
                  ></Jewely>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default JewelryList;
