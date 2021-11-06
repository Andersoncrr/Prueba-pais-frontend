const axios = require("axios");
const baseUrl = process.env.REACT_APP_API_COUNTRYS;

export const countrys = async () => {
  try {
    const res = await axios.get(baseUrl);
    return res;
  } catch (error) {
    console.log(error);
  }
};
