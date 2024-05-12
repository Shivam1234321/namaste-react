import React from "react";

class UserClass extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        count: 0,
        count2: 2,
        userInfo: {
            name: 'Dummy',
            location: 'dummy'
        }
    }
    //console.log(props.name+ " Child Constructor");
   }

   async componentDidMount(){
    //console.log(this.props.name+ " Child component did mount");
    const data= await fetch('https://api.github.com/users/shivam1234321');

    const res= await data.json();

    console.log(res.name);

    this.setState({
        userInfo : res
    });

    this.timer = setInterval(() =>{
        console.log('SET INTERVAL');
    }, 1000);

  }


  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("COmponent will unmount...");
     // This code run when component change like remove 
  }

   render(){
    const {name, location} = this.state.userInfo;
    const {count} = this.state;

    //console.log(name+ " Child Render");

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() =>{
                this.setState({
                    count: this.state.count + 1
                });
            }}>Inc. Count</button>
            <h2>{name}</h2> 
            <h2>{location}</h2>
            <h2>Contact : </h2>

        </div>
    )
   }
}

export default UserClass;