import axios from "axios";

export default class ApiService {
  browserInfo = navigator.userAgent;
  constructor() {
    axios.interceptors.request.use(
      (request: any) => {
        if (this.browserInfo) {
          request.headers["Browser-Info"] = this.browserInfo;
        }
        return request;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const { config, response } = error;
        if (response.status === 500) {
          alert("Error with code 500!");
        }
      }
    );
  }

  getRequest(link: string) {
    return axios.get(link);
  }
  postRequest(link: string, data: any, headers?: any) {
    return axios.post(link, data, { headers });
  }

  updateRequest(link: string, data: any, headers?: any) {
    return axios.put(link, data, { headers });
  }

  deleteRequest(link: string, headers?: any) {
    return axios.delete(link, { headers });
  }
}
