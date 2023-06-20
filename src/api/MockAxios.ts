import { defaultData } from "./../mock-data/MockData";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { LocalStorage } from "../utilities/LocalStorage";
import { IMockDataModel } from "../model/MockDataModel";

const mock = new MockAdapter(axios, { delayResponse: 2000 });
const localItems = LocalStorage.getItem("accounts");

export const mockData: IMockDataModel[] = localItems ? localItems : defaultData;

mock.onGet("/account").reply(200, { payload: mockData });

mock.onPost("/account").reply((config) => {
  const requestData = JSON.parse(config.data);
  requestData.id = (new Date().getTime() / 1000).toFixed(0);

  mockData.push(requestData);

  LocalStorage.setItem("accounts", mockData);
  return [200, { payload: mockData }];
});

export default axios;
