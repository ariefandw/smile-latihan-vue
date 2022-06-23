import http from "../http-common";
class PostService {
  getAll(q='') {
    return http.get(`/post?q=${q}`);
  }
  get(id) {
    return http.get(`/post/${id}`);
  }
  create(data) {
    return http.post("/post", data);
  }
  update(id, data) {
    return http.put(`/post/${id}`, data);
  }
  delete(id) {
    return http.delete(`/post/${id}`);
  }
}
export default new PostService();