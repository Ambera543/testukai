import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import RouterBasic from "./Components/RouterBasic";

function App(){

    return (
        <Router>
            <h1> Hello you</h1>
            <ul className="hello-menu">
                <li><Link to= "/">Basic</Link></li>
                <li><Link to= "/africa">Africa</Link></li>
                <li><Link to= "/australia">Australia</Link></li>
            </ul>
       <Routes>

      
<Route path="/" element={<RouterBasic/>}>aaa</Route>
</Routes>
        </Router>
    )
}

export default App;