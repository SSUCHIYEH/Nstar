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

  export const registerWithEmailPassword = async (name,email,password) => {
    console.log(name,email,password);
    try{
      const url = `${baseURL}/api/v1/users/user/register`
      let resp = await axios.post(url, {
        username:name,
        email:email,
        image:"https://reurl.cc/kL4v9G",
        is_admin:true,
        password:password});
      return { status:resp.status, user:resp.data };
    }catch(e){
      return { status:e.response.status, detail: e.response.data.detail };
    }
  };

