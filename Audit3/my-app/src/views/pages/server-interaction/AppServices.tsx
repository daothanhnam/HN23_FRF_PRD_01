import { API_URL } from "../../../AppApi";
import useApi from "../../../services/UseApi";

// eslint-disable-next-line import/no-anonymous-default-export
export default new (class AppServices {
  async getUser(id: string) {
    let data: any;
    const userId = id ? `/${id}` : "";
    await useApi.getRequest(API_URL + userId).then((response) => {
      data = response.data;
    });
    return data;
  }

  async postRequest(url: string, data: any) {
    return await useApi.postRequest(url, data);
  }

  async updateRequest(url: string, data: any) {
    return await useApi.updateRequest(url, data);
  }

  async deleteRequest(url: string) {
    return await useApi.deleteRequest(url);
  }
})();
