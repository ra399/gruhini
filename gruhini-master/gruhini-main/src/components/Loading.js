import React from "react";  
import HashLoader from "react-spinners/HashLoader";
import '../style/App.css';
const Loader = () => {
    return ( 
        <div className="loader">
        <HashLoader
 color={"pink"} size={60} /></div>
     );
}  
 
export default Loader;