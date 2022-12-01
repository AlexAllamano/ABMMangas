import { useParams } from "react-router-dom"
import { getMangaById } from "../../../helpers/getMangasById";

export const ItemProducto = () => {

  const { id } = useParams();

  const manga = getMangaById( id );

  return (
    <div>ItemProducto</div>
  )
}
