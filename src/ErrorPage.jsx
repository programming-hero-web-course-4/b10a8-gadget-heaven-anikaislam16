import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <div
        className="text-blue-500 underline"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back Home
      </div>
    </div>
  );
}
