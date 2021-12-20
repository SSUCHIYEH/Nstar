import axios from ".";


const baseURL = "https://nstar-backend.herokuapp.com"
export const getProductByCategory= async (_category)=>{
    try{
        const _url = `${baseURL}/api/v1/products/category/${_category}`;
        const result = await axios.get(_url);
        return result;
    }
    catch (err){
        console.log(err);
    }
}