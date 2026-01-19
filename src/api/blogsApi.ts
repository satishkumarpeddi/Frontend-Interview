import axios from "axios";
const API_URL = "http://localhost:3001/blogs";
export interface Blog {
  id?: number;
  title: string;
  descirption: string;
  coverImage: string;
  content: string;
  author: string;
}
export const getBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};
export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
export const createBlog = async (blog: Blog): Promise<Blog[]> => {
  const res = await axios.post(API_URL, blog);
  return res.data;
};
