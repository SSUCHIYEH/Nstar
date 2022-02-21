import axios from ".";


const baseURL = "https://nstar-backend-new.herokuapp.com"
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

export const deleteProduct = async (_product_id) => {
    try{
        const url = `${baseURL}/api/v1/products/delete/${_product_id}`;
        const resp = await axios.get(url);
        return {
            status: resp.status,
            detail: resp.data
        }
    }catch(e) {
        return { status:e.response.status, detail: e.response.data.detail };
    }
}

export const getSellOrder = async (user_id) => {
    try{
        const url = `${baseURL}/api/v1/user-order/get-sell-order/${user_id}`;
        const resp = await axios.get(url);
        return {
            status: resp.status,
            order: resp.data.order_sell,
        }
    }catch(e){
        console.log(e)
        return { status:e.response.status, detail: e.response.data.detail };
    }
}

export const getBuyOrder = async (user_id) => {
    try{
        const url = `${baseURL}/api/v1/user-order/get-buy-order/${user_id}`;
        const resp = await axios.get(url);
        return {
            status: resp.status,
            order: resp.data.order_buy,
        }
    }catch(e){
        console.log(e)
        return { status:e.response.status, detail: e.response.data.detail };
    }
}