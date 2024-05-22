import { instance } from "./instance";

export const testAPI = async () => {
  const response = await instance.get("/api/test");
  return response.data;
};
