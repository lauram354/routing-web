import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Detail() {
 const params = useParams();
 const location = useLocation();
 const { nombre, raza, foto } = location.state;
 return (
   <div>
     <h1>{nombre}</h1>
     <img src = {foto} alt={params.mascotaID} width= "40%"></img>
     <h5>{raza}</h5>
   </div>
 );
}