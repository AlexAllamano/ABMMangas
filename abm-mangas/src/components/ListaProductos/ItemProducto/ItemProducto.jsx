import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getMangaById } from "../../../helpers/getMangasById";

export const ItemProducto = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const manga = useMemo( () => getMangaById( id ), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  //si el manga no existe
  if( !manga ) {
    return <Navigate to="/productos"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/mangasImg/${id}.jpg`} 
          alt={ manga.nombre } 
          className="img-thumbnail animate__animated animate__fadeInLeft"
          />
      </div>

      <div className="col-8">

        <h3>{ manga.nombre }</h3>
        <h3># { manga.numero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Editorial:  </b> { manga.editorial } </li>
          <li className="list-group-item"> <b> Descripcion:  </b> { manga.descripcion } </li>
          <li className="list-group-item"> <b> Precio:  </b> { manga.precio } </li>
        </ul>

        <button 
        className="btn btn-outline-primary mt-2"
        onClick={ onNavigateBack }
        >
          Back
        </button>
      </div>
    </div>
  )
}
