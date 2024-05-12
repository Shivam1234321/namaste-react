import React from "react";
import UserClass from "./UserClass";

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
          <hr/>
         <UserClass   name= {`First`} location={`Varanasi`}/>
      </>
    )
  }
}
export default About;