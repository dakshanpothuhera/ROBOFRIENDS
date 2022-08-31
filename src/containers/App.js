import React, {Component} from "react";
import CardArray from "../components/CardArray";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import '../containers/App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=> Response.json())
            .then(users=> this.setState({robots: users}));
        
    }

    onsearchchange = (event) => {
        this.setState({searchfield: event.target.value})
            
        
    }

    render(){
        const { robots, searchfield } = this.state;
        const filterRobots =robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0){
            return <h1>Loading</h1>
        }else {
         return (
            <div className="tc">
                <h1 className="f1">RobotFriends</h1>
                <SearchBox searchChange={this.onsearchchange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardArray robots={filterRobots}/>
                    </ErrorBoundry>
                    
                </Scroll>
            </div>
        );
    }
}
}
export default App;