const API_ROOT = "http://codeial.abhishekgarg.tech/api/v1";
export const APIUrls = {
  fetchPosts: () => {
    return `${API_ROOT}/posts`;
  },
  login: () => {
    return `${API_ROOT}/users/create-session`;
  },
};
