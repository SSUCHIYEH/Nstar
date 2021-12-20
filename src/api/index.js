import axios from "axios";
import women_top from "../json/women_top.json";
import women_bottom from "../json/women_bottom.json";
import men_top from "../json/men_top.json";
import men_bottom from "../json/men_bottom.json";

export const getJSON = (url,where) => {
  console.log(url)
    switch (url) {
      case "/":
        return women_top;
      case "/product/category/women_top":
        return women_top;
      case "/product/category/men_top":
        return men_top;
      case "/product/category/women_bottom":
        return women_bottom;
      case "/product/category/men_bottom":
        return men_bottom;
      default:
        return women_top;
    }
  };

  const _axios = (baseURL) => {
    const instance = axios.create({
      baseURL: baseURL,
      timeout: 20000,
    });

    return instance
  };

  export { _axios };
  export default _axios();