import React from 'react';
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
"https://jsonplaceholder.typicode.com/users")
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
        <div className = "App">
            <h1> Fetching data from an api in React </h1>  {
                items.map((item) => ( 
                <div key = { item.id } >
                   <p>Username: { item.username }</p> 
                    <p>Fullname: { item.name }</p> 
                    <p>User_Email: {item.email}</p> 
                    <br></br>
                    </div>
                ))
            }
        </div>
    );
}
}

export default App;
