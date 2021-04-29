import axios from "axios";

// Coingecko API URL
// https://api.coingecko.com/api/v3/

export default {
  getList: () => {
    return axios.get(
      "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
    );
  },
};
