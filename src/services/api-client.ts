import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2c9f06f3206843bebb368bfbf2043f6d",
  },
});
