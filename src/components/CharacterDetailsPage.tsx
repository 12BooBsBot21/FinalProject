import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { Character } from "../types";
import { useFavorite } from "./favorite/useFavorite";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const numericId = Number(id);

  const validId: boolean =
    id !== undefined &&
    id !== "" &&
    Number.isInteger(numericId) &&
    numericId > 0;

  const endUrl = validId ? id : "";
  const navigate = useNavigate();

  const { data, isLoading, error, statusResponse } = useFetch<Character>(
    endUrl ? `/${endUrl}` : "",
  );

  const { isFavorite, toggleFavorite } = useFavorite();
  const favorite = data ? isFavorite(data.id) : false;

  if (!validId) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Not valid ID</h1>
          <p className="mt-2 text-sm text-gray-600">
            Передан некорректный идентификатор персонажа.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to list
          </button>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Loading...</h1>
          <p className="mt-2 text-sm text-gray-600">
            Загружаем информацию о персонаже.
          </p>
        </div>
      </section>
    );
  }

  if (statusResponse === 404) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">
            Character not found
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Персонаж с таким id не найден.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to list
          </button>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-red-600">Error</h1>
          <p className="mt-2 text-sm text-gray-600">{error}</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to list
          </button>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">
            Page not found
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-6 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Back to list
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-6">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="aspect-square w-full bg-gray-100">
            <img
              src={data.image}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm text-gray-500">Status</p>
              <p className="mt-1 text-base font-medium text-gray-900">
                {data.status}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="mt-1 text-base font-medium text-gray-900">
                {data.gender}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 px-4 py-3">
              <p className="text-sm text-gray-500">Species</p>
              <p className="mt-1 text-base font-medium text-gray-900">
                {data.species}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Back to list
            </button>

            <button
              type="button"
              onClick={() => toggleFavorite(data)}
              className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                favorite
                  ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
              }`}
            >
              {favorite ? "♥ В избранном" : "♡ В избранное"}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
