import { useMutation } from "@tanstack/react-query";
import { logout, deleteUser } from "apis/users"; // 수정된 부분: deleteUser 추가

export const useLogout = () => {
  return useMutation({ mutationFn: () => logout() });
};

export const useDeleteUser = () => {
  return useMutation({ mutationFn: () => deleteUser() });
};
