import axios from "axios";

const getJobListing = () => {
  const requestData = {
    limit: 10,
    offset: 0,
  };
  return axios.post(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestData
  );
};

export { getJobListing };
