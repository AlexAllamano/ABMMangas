import { mangaApi } from "../../api/mangaApi"
import { mangas } from "../../data/mangas"
import { MangaCard } from "./MangaCard"
import axios from 'axios';

export const ListaProductos = () => {

  return (
    <div className="container d-flex flex-wrap">
      {
        mangas.map(manga => (
          <MangaCard
            key={manga.id}
            {...manga}
          />
        ))
      }
    </div>
  )
}

