import api from "./config";

export const adminLogin = async (data, setIsError) => {
  try {
    const result = await api.post("/admin/auth/login", data);
    const accessToken = JSON.stringify(result.data.access_token);
    localStorage.setItem("adminCredential", accessToken);
    setIsError(false);

    return result;
  } catch (error) {
    console.log(error);
    setIsError(true);
  }
};

export default adminLogin;
