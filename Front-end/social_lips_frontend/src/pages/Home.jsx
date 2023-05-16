import React from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FileUpload from "../components/FileUpload";

const auth = false;

function Home(props) {
  if (!auth) {
    return <Login />;
  } else {
    return <FileUpload />;
  }
}

export default Home;
