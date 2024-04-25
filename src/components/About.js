import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
      <>
        <div>About Us</div>
         <User name={'Shivam SAhu'} />

         <UserClass   name= {`Shivam Kumar sahu`} location={`Varanasi`}/>
      </>
    );
  }
  
  export default About;