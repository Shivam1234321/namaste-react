import React from "react";

class UserClass extends React.Component{
   constructor(props){
    super(props);
   }

   render(){
    const {name, location} = this.props;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>Contact : </h2>

        </div>
    )
   }
}

export default UserClass;