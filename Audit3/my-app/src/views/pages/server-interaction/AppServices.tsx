import { API_URL } from "../../../AppApi";
import useApi from "../../../services/UseApi";

export default new (class AppServices {
  async getUser(id: string) {
    let data: any;
    const userId = id ? `/${id}` : "";
    await useApi.getRequest(API_URL + userId).then((response) => {
      data = response.data;
    });
    return data;
  }

  async postRequest(url: string, data: any, headers: any) {
    return await useApi.postRequest(url, data, headers);
  }

  async updateRequest(url: string, data: any, headers: any) {
    return await useApi.updateRequest(url, data, headers);
  }

  async deleteRequest(url: string, headers: any) {
    return await useApi.deleteRequest(url, headers);
  }
})();
