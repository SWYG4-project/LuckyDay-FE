import { ax } from "./axios";

export const logout = async () => {
  const data = await ax.get("/users/sign-out");

  return data;
};
