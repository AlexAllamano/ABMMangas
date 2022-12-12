import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm"
import { MangaCard } from "./MangaCard"
import { getMangasByName } from "../../helpers/getMangasByName";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    //Tomo la q del querystring y si no viene es un string vacio
    const { q = '' } = queryString.parse( location.search );
    const mangas = getMangasByName(q);

    //Esta condicion devuelve un bool
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && mangas.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${ searchText }`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type="text"
                            placeholder="Busca un manga"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    
                    <div className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none'}}> 
                        Busca un manga 
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}> 
                        No hay resultados con <b>{ q }</b> 
                    </div>

                    {
                        mangas?.map( (manga) => (
                            <MangaCard key={ manga.id } {...manga} />
                        ))
                    }
                    
                </div>


            </div>

        </>
    )
}
