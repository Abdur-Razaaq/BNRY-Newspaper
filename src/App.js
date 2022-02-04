import React from 'react';
import './App.css';
import NewsList from './components/NewsList';

class App extends React.Component {   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
  // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://newsapi.org/v2/top-headlines?country=us&apiKey=788703c5467e43ecb2011237ad66d369")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
            <div className="App">
                <NewsList/>
          </div>
    );
}
}

export default App;
