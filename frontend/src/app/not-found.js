import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-6 text-center text-white">
      <h1 className="text-8xl font-bold text-blue-500">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-400">
        Sorry! The page you are looking for doesn't exist
        or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}