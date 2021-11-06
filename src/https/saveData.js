import Swal from "sweetalert2";

const axios = require("axios");
const baseUrl = process.env.REACT_APP_API_URL;

export const save = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/events`, data);
    return res;
  } catch (error) {
    Swal.fire("Error", "Digite un nombre", "error");
  }
};
