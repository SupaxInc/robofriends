import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // We do not need arrow functions if the method comes with React
    componentDidMount() {
        // Run an HTTP request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({robots: users}));
    }

    // Anytime you make your own method inside a Component, you have to use arrow functions. To ensure 'this' is the App component and not from the event.
    onSearchChange = (event) => {
        // To change state we use the method setState
        this.setState({ searchfield: event.target.value}); // We change the state of searchfield to the value of the search field.
    }



    render() {
        // Using destructuring because we were using this.state a lot.
        const {robots, searchfield} = this.state;
        // Filter the robots list based on what is entered on the search box.
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // Check if the current state of the robots array has any robots inside or if it is still loading
        if(robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                
            );
        }
        

    } 
}

export default App;