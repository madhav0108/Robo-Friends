import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() { //class App extends React.Component {
    // constructor() {
    //     super()
    //     this.state = { robots: [], searchfield: '' }
    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=> { return response.json(); })
    //     .then(users=> { this.setState({robots: users}) })
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> {setRobots(users)})
    },[count]) // only run and fetch if count changes

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    // render() {
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots = {filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
