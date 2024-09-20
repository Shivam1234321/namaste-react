import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

  constructor(props){
    super();
    //console.log("Parent Constructor");
  }

  componentDidMount(){
    //console.log("Parent component did mount");
  }

  render(){

    //console.log("Parent Render");

    return(
      <>
        <div>About Us</div>
        <div>User Logged IN :- 
          <UserContext.Consumer>
            {({loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
          <hr/>
         <UserClass   name= {`First`} location={`Varanasi`}/>
      </>
    )
  }
}
export default About;