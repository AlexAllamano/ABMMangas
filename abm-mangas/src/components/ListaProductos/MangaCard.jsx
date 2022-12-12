import { Link } from "react-router-dom";
import "./MangaCard.css";

export const MangaCard = ({
    id,
    nombre,
    numero,
    descripcion,
    precio,
}) => {

    const mangaImageUrl = `/mangasImg/${id}.jpg`;

    console.log("id",id)

    return (
            <div className="card m-1 w-33 animate__animated animate__fadeIn">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={mangaImageUrl} className="card-img" alt={nombre} />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{nombre}</h5>
                            
                            <p className="card-text">
                                <small className="text-muted">{descripcion}</small>
                            </p>

                            <h5 className="card-text">{precio}</h5>
                            
                            <Link to={`/manga/${id}`}>
                                Mas Detalles...
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
    )
}
