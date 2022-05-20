import axios from "axios";

export const requestData = async (urlData) => {
  const res = await axios.get(urlData);
  return res.data;
};
