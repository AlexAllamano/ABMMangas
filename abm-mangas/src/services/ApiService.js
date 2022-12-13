import axios from "axios";

export const baseUrl = "https://638a26014eccb986e8a5726a.mockapi.io/appmangas";

export const API_Endpoints = {
  USUARIOS: "/usuarios",
};
export const API_Verbos = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
};

export async function consultaApi(endPoint, verbo, objeto = {}) {
  try {
    if (verbo == API_Verbos.DELETE) {
      const response = axios.delete(`${baseUrl}${endPoint}/${objeto.id}`);
      return response;
    } else {
      const response = await axios({
        url: `${baseUrl}${endPoint}`,
        method: verbo,
        data: objeto,
      });
      return response;
    }
  } catch (e) {
    console.log(e);
  }
}
