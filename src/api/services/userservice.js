import AxiosService from "../apiservice";

export const getProfile = async () => {
  const response = await AxiosService.get("/admin/dash");
  return response.data;
};

export const login = async (data) => {
  const response = await AxiosService.post("/users/login", data);
  return response.data;
};

export const register = async (data) => {
    const response = await AxiosService.post("/users/register", data);
    return response.data;
  };

export const userProfile = async (id) => {
  const response = await AxiosService.get("users/users/getdetails/"+id);
  return response.data;
};