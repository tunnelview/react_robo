import axios from "axios";

export const fetchRobo = (name) => {
  //code to fetch robot image url from API
  const apiUrl = "https://robohash.org/66.249.70.84.png";
  const response = axios.get(apiUrl);
  console.log(response);
};
