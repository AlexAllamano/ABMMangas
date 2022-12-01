import { mangas } from "../../data/mangas"
import { MangaCard } from "./MangaCard"

export const ListaProductos = () => {

  return (
    <div className="container d-flex flex-wrap">
        {
            mangas.map( manga => (
                <MangaCard 
                    key={manga.id}
                    {...manga}
                />
            ))
        }
    </div>
  )
}

