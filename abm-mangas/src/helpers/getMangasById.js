import { mangas } from "../data/mangas";

export const getMangaById = ( id ) => {

    return mangas.find( manga => manga.id === id );
    
}