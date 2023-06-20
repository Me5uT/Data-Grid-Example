import { IMockDataModel } from "../model/MockDataModel";
import axios from "./MockAxios";

export class API {
  static async getAll(url: string) {
    try {
      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  static async post(url: string, data: IMockDataModel) {
    try {
      const response = await axios.post(url, data);

      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
