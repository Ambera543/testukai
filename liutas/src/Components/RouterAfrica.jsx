import { useParams } from "react-router";

function RouterAfrica() {
    const paramsFromURL= useParams()
    console.log(paramsFromURL);

    return (
        <h2>Africa{paramsFromURL.times}times</h2>
    )
}

export default RouterAfrica;