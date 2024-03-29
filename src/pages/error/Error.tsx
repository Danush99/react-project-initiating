import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

export default function Error() {
  const navigate = useNavigate();
  useEffect ( () => {
    setTimeout( () => {
      navigate("/login");
    } , 7000);
  } , [navigate] )   // timeout is depend on [navigate]
  console.log("URL not found");
  return (
    <div className="error">
      <h3>URL not found</h3>
    </div>
  );
}
