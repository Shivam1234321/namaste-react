import { useState } from "react";

const User = ({name})=>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    return(
        <div>
            <h2>Count : {count}</h2>
            <h2>Count2 : {count2}</h2>
            <h2>Shivam Kumar Sahu</h2>
            <h2>Location: Mohali</h2>
            <h2>Contact : </h2>

        </div>
    )
}

export default User;