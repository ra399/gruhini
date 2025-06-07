import React from "react";
import Accordionn from "./components/Queries/Accordionn";
import Navbar from "./components/Navbar";

const Queries= () => {
    return ( 
        <div className="Queries">
          <Navbar />
          <div className="mt-5 pt-5">
          <Accordionn />
          </div>
        </div>
     );
}
 
export default Queries;