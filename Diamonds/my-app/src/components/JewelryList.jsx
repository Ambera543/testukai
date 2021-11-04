
import Jewely from "./Jewely"

function JewelryList({jewelrys, modal}) {

    return (
        <div className="container">
            {jewelrys.map(jewely => <Jewely key={jewely.id} jewelry={jewely} modal={modal}></Jewely>)}
        </div>
    )
}


export default JewelryList;



//     quantity: "",
//     price: "",
//     in_stock: "",
//   last_order: ""</h1>
//   }