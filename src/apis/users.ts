import { ax } from "./axios";

export const logout = async () => {
  await ax.get("/users/sign-out");
};

export const deleteUser = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  await ax.delete(`${baseUrl}/users`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export interface UpdateProfileData {
  nickname: string;
  email: string;
}

export const updateProfile = async (data: UpdateProfileData) => {
  await ax.put("/users", data);
};
