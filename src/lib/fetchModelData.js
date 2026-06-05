import axios from "axios";

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 * @returns {Promise}       A promise that resolves with an object containing the data.
 */
function fetchModel(url) {
  return new Promise(function (resolve, reject) {
    axios.get(url, { withCredentials: true })
      .then((response) => {
        resolve({ data: response.data });
      })
      .catch((error) => {
        reject(new Error(error.response?.data?.error || error.message));
      });
  });
}

export default fetchModel;