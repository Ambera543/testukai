import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import RouterBasic from "./Components/RouterBasic";
import RouterAfrica from "./Components/RouterAfrica";
import RouterAustralia from "./Components/RouterAustralia";
import RouterNotFound from "./Components/RouterNotFound";

function App(){

    return (
        <Router>
            <h1> Hello you</h1>
            <ul className="hello-menu">
                <li><Link to= "/">Basic</Link></li>
                <li><Link to= "/africa/77">Africa</Link></li>
                <li><Link to="/australia/15/kangaroo">Australia 15 kangaroo</Link></li>
                <li><Link to="/australia/354/platypus">Australia 354 platypus</Link></li>
            </ul>
       <Routes>

      
<Route index element={<RouterBasic/>}></Route>
<Route path="/africa/:times" element={<RouterAfrica/>}></Route>
<Route path="/australia/:times/:from" element={<RouterAustralia/>}></Route>
<Route path="*" element={<RouterNotFound/>} />
</Routes>
        </Router>
    )
}

export default App;