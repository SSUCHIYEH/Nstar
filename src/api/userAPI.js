import axios from ".";
const baseURL = "https://nstar-backend.herokuapp.com"

export const signInWithEmailPassword = async (email, password) => {
  try {
    const url = 'https://nstar-backend.herokuapp.com/api/v1/users/user/signin';
    let res = await axios.post(url, { email, password });
    return { status: res.status, user: res.data };
  } catch (err) {
    return { status: err.response.status, detail: err.response.data.detail };
  }
};

export const registerWithEmailPassword = async (name, email, password) => {
  console.log(name, email, password);
  try {
    const url = `${baseURL}/api/v1/users/user/register`
    let resp = await axios.post(url, {
      username: name,
      email: email,
      image: "https://reurl.cc/kL4v9G",
      is_admin: true,
      password: password
    });
    return { status: resp.status, user: resp.data };
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
};

export const postBuyOrder = async (order, user_id) => {
  try {
    const url = `${baseURL}/api/v1/user-order/create-buy-order/${user_id}`;
    const resp = await axios.post(url, order);
    return { status: resp.status, order: resp.data }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const getUserProduct = async (user_id) => {
  try {
    const url = `${baseURL}/api/v1/user-product/my-product/${user_id}`;
    const resp = await axios.get(url);
    return { status: resp.status, product: resp.data.products_sell }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const putUserProduct = async (user_id, product) => {
  try {
    const url = `${baseURL}/api/v1/user-product/create-my-product/${user_id}`;
    const resp = await axios.put(url, product);
    return { status: resp.status, product: resp.data }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const postImageUpload = async (file) => {
  try {
    const url = `${baseURL}/api/v1/products/image`;
    const resp = await axios.post(url, file);
    const imageURL = `${baseURL}/api/v1/products/image/${resp.data.file_name}`
    return { status: resp.status, url: imageURL }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const putUserLike = async (user_id, product_id) => {
  try {
    const url = `${baseURL}/api/v1/user-like/create-like-collect/${user_id}`;
    const resp = await axios.put(url, { product_id });
    return { status: resp.status, like: resp.data };
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const getUserLike = async (user_id) => {
  try {
    const url = `${baseURL}/api/v1/user-like/like-collect/${user_id}`;
    const resp = await axios.get(url);
    return { status: resp.status, like: resp.data.collects_like }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}

export const deleteUserLike = async (product_id) => {
  try {
    const url = `${baseURL}/api/v1/user-like/delete-like-collect/${product_id}`;
    const resp = await axios.get(url);
    return { status: resp.status, detail: resp.detail }
  } catch (e) {
    return { status: e.response.status, detail: e.response.data.detail };
  }
}