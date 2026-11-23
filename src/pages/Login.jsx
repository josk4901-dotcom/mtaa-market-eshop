import { Link } from "react-router-dom";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Login form submitted.");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Sign in to your Mtaa Market account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/login" className="font-semibold underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;