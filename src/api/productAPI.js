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

export const getProductById = async (_product_id) => {
    try{
        const _url = `${baseURL}/api/v1/products/id/${_product_id}`;
        const resp = await axios.get(_url);
        return {
            status: resp.status,
            product: resp.data
        }
    }catch (e){
        return { status:e.response.status, detail: e.response.data.detail };
    }
}