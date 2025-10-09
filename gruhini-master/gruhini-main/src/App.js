import React, { useEffect, useState } from "react";
import "./style/App.css";
import Empower from "./Empower";
import FindJob from "./FindJob";
import BuyProduct from "./BuyProduct";
import SellProduct from "./SellProduct";
import PostJob from "./PostJob";
import GetStarted from "./GetStarted";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import ForgotPass from "./components/Authentication/ForgotPassword";
import { Authentication } from "./data/auth";
import PrivateRoute from "./components/PrivateRoute";
import Queries from "./Queries";
import Loading from './components/Loading';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (      
    loading ? <Loading/> : <div className="App">
      <Authentication child={
        <Router>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/empower" element={ <PrivateRoute child={<Empower />}></PrivateRoute> } />
          <Route path="/postjob" element={ <PrivateRoute child={<PostJob />}></PrivateRoute> } />
          <Route path="/findjob" element={ <PrivateRoute child={<FindJob />}></PrivateRoute> } />
          <Route path="/buyproduct" element={ <PrivateRoute child={<BuyProduct />}></PrivateRoute> } />
          <Route path="/sellproduct" element={ <PrivateRoute child={<SellProduct />}></PrivateRoute> } />
          <Route path="/queries" element={ <PrivateRoute child={<Queries />}></PrivateRoute> } />
          <Route path={"/forgotpassword"} element={<ForgotPass/>} />
        </Routes>
      </Router>
      } />
      
    </div>
  );
}

export default App;
