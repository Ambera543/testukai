
import Jewely from "./Jewely"

function JewelryList({jewelrys}) {

    return (
        <div>
            {jewelrys.map(jewelry => <Jewely key={jewelry.id} jewelry={jewelry}></Jewely>)}
        </div>
    )
}


export default JewelryList;



//     quantity: "",
//     price: "",
//     in_stock: "",
//   last_order: ""</h1>
//   }