import axios from "axios";

export default axios.create({
  baseURL: "https://www.giantbomb.com/api/",
  params: {
    api_key: "bf7313353bd2575fbca52a5daba6b42a71e2be33",
    format: "json",
  },
});
