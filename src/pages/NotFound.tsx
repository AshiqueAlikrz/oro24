import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 py-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-gray-300 mb-4 sm:mb-6">404</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-gray-900 text-center">Page Not Found</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-center max-w-md px-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Button 
        onClick={() => navigate("/")} 
        className="bg-primary-yellow text-white hover:bg-yellow-400 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
