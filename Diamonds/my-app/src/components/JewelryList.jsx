
import Jewely from "./Jewely"

function JewelryList({jewelrys, modal}) {

    return (
        <div className="jewelry_list">
            {jewelrys.map(jewely => <Jewely key={jewely.id} jewelry={jewely} modal={modal}></Jewely>)}
        </div>
    )
}


export default JewelryList;


