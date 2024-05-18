import { useMutation } from "@tanstack/react-query";
import { logout, deleteUser } from "apis/users";

export const useLogout = () => {
  return useMutation({ mutationFn: () => logout() });
};

export const useDeleteUser = () => {
  return useMutation({ mutationFn: () => deleteUser() });
};
