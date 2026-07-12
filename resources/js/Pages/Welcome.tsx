
interface WelcomeProps {
  version: string;
}

export default function Welcome({ version }: WelcomeProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900 font-sans">
      <div className="w-[90%] max-w-[500px] rounded-xl bg-white p-10 text-center shadow-2xl shadow-black/15">
        <div className="mb-8 flex justify-center">
          <img
            src="https://www.goravel.dev/logo.png"
            alt="Goravel Logo"
            className="w-60"
          />
        </div>
        <h1 className="mb-3 text-2xl font-bold text-gray-800">
          Goravel + Inertia + React (TSX)
        </h1>
        <p className="mb-8 text-base leading-relaxed text-gray-600">
          Welcome to your single-page application built on top of a Laravel-like Go architecture using TypeScript!
        </p>
        <div className="flex items-center justify-between border-t border-gray-200 pt-5 text-sm text-gray-400">
          <span>Framework Version:</span>
          <span className="font-semibold text-gray-600">Goravel {version}</span>
        </div>
      </div>
    </div>
  );
}
