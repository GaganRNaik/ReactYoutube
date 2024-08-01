import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";
const options = {
params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'b923df77d1mshead99f320a0a760p128eb2jsnda4f37bd7ae8',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }

};

export const FetchfromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
