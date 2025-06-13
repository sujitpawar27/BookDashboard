import axios from "axios";

const API_URL = "http://localhost:3001/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const bookService = {
  // Get all books with pagination
  getBooks: async (page = 1, limit = 10) => {
    const response = await api.get(`/books?page=${page}&limit=${limit}`);
    return response.data;
  },

  // Get a single book
  getBook: async (id) => {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },

  // Create a new book
  createBook: async (bookData) => {
    const response = await api.post("/books", bookData);
    return response.data;
  },

  // Update a book
  updateBook: async (id, bookData) => {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },

  // Delete a book
  deleteBook: async (id) => {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  },
};
