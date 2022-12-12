import { mangas } from "../data/mangas";

export const getMangasByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();

    if( name.length === 0 ) return [];

    return mangas.filter(
        manga => manga.nombre.toLowerCase().includes( name )
    );

}