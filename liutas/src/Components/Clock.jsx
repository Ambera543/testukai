import { Component } from "react"

class  Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {clock: new Date()};
      }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
    
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );
//     return (
//         <div>{clockTime}</div>
//     );


export default Clock