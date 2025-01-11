import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl text-blue-900 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            404
          </div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-4">
        <div className="text-center">
          <h1 className="text-blue-900 text-8xl md:text-9xl font-bold animate-bounce">
            Error
          </h1>
          <h2 className="text-blue-900 text-9xl md:text-[12rem] font-bold mb-8 animate-pulse">
            404
          </h2>
          <p className="text-gray-600 text-xl mb-8">
            Oops! The page you&apos;re looking for seems to have gone missing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Home size={20} />
              Go Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
