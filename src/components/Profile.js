import { useEffect, useState } from "react";

const Profile = ({name})=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    useEffect(() =>{
        const timer= setInterval(() =>{
            console.log("SET INTERVAL");
        }, 1000);

        return () =>{ // This method work like a componentWillMount work
            clearInterval(timer);
        }

    });

    return(
        <div>
            <h2>Profile Component</h2>
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            <h2>Shivam Kumar Sahu</h2>
            <h2>Location: Mohali</h2>
            <h2>Contact : </h2>

        </div>
    )
}

export default Profile;