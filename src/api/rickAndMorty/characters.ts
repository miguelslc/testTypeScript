import { instance } from "./api.base";

const endpoint = "character";

export const characters = {
  getAll: ({ page = 1 }: { page?: number }) => {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
  getById: ({ id }: { id: string | undefined }) => {
    return instance.get(`${endpoint}/${id}`);
  },
};
