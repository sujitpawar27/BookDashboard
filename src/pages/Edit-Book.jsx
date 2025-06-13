import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { bookService } from "../services/api";
import toast from "react-hot-toast";
import { XMarkIcon } from "@heroicons/react/24/outline";

const genres = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Mystery",
  "Romance",
  "Biography",
  "History",
];

export default function EditBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      publishedYear: "",
      status: "Available",
    },
  });

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      try {
        const data = await bookService.getBook(id);
        reset({
          title: data.title || "",
          author: data.author || "",
          genre: data.genre || "",
          publishedYear: data.publishedYear || "",
          status: data.status || "Available",
        });
      } catch (err) {
        toast.error("Failed to fetch book data");
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id, reset]);

  const handleFormSubmit = (data) => {
    bookService
      .updateBook(id, data)
      .then(() => {
        toast.success("Book updated successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed to update book");
      });
  };

  const handleClose = () => navigate(-1);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white/80 p-8 rounded-2xl shadow-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-white/80 shadow-2xl backdrop-blur-lg p-8 border border-white/30">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-indigo-600 focus:outline-none transition"
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">
            Edit Book
          </h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white/80 transition"
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Author
            </label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white/80 transition"
            />
            {errors.author && (
              <p className="mt-1 text-xs text-red-600">
                {errors.author.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Genre
            </label>
            <select
              {...register("genre", { required: "Genre is required" })}
              className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white/80 transition"
            >
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            {errors.genre && (
              <p className="mt-1 text-xs text-red-600">
                {errors.genre.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Published Year
            </label>
            <input
              type="number"
              {...register("publishedYear", {
                required: "Published year is required",
                min: { value: 1000, message: "Invalid year" },
                max: {
                  value: new Date().getFullYear(),
                  message: "Year cannot be in the future",
                },
              })}
              className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white/80 transition"
            />
            {errors.publishedYear && (
              <p className="mt-1 text-xs text-red-600">
                {errors.publishedYear.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Status
            </label>
            <select
              {...register("status", { required: "Status is required" })}
              className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-900 shadow focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-white/80 transition"
            >
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-xs text-red-600">
                {errors.status.message}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xl border border-gray-300 bg-white/80 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
