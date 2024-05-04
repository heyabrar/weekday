import axios from "axios";

const getJobListing = ({
  requestData,
}: {
  requestData: { limit: number; offset: number };
}) => {
  return axios.post(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestData
  );
};

export { getJobListing };
