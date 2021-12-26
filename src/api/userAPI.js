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