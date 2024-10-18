import { useState } from "react";
import '../styles/Global.css';

export const Button = () => {
    const [value, setValue] = useState(5);
    console.log("line server")
    function counterButton(){
        console.log('test')
        setValue(prevValue => prevValue + 50); 
    }

    return (
        <>
            <button onClick={ counterButton } className="content">{value}</button>
        </>
    );
};
