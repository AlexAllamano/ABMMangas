

export const baseUrl = "https://638a26014eccb986e8a5726a.mockapi.io/appmangas";

export const API_Endpoints = {
    USUARIOS: '/usuarios',
}



// export async function getUsuarios(){
//     try{
//         const response = await axios({
//             url: `${baseUrl}/usuarios`,
//             method: 'GET'
//         })

//         return response;
//     }catch (e){
//         console.log(e);
//     }
// }

// export async function postUsuarios(usuario){
//     try{

//         console.log('hollla', usuario);

//         const response = await axios({
//             url: `${baseUrl}/usuarios`,
//             method: 'POST',
//             data: usuario
//         })
        

//         return response;
//     }catch (e){
//         console.log(e);
//     }
// }