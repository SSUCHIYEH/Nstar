import axios from ".";
const baseURL = "https://nstar-backend.herokuapp.com"

export const signInWithEmailPassword = async (email, password) => {
    try {
      let res = await axios.post(`${URL}/users/user/signin`, { email, password });
      return { status: res.status, user: res.data };
    } catch (err) {
      return { status: err.response.status, detail: err.response.data.detail };
    }
  };