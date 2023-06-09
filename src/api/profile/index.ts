import { API_ROOT } from "../../constants/constants";

export const getProfileAPI = async (params: string) => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${API_ROOT}/profiles/${params}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const followAPI = async (username: string) => {
  const token = JSON.parse(localStorage.getItem("user_data") || "{}").token;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Token " + token : "",
      },
    };
    const response = await fetch(
      `${API_ROOT}/profiles/${username}/follow`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const unfollowAPI = async (username: string) => {
  const token = JSON.parse(localStorage.getItem("user_data") || "{}").token;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Token " + token : "",
      },
    };
    const response = await fetch(
      `${API_ROOT}/profiles/${username}/follow`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};
