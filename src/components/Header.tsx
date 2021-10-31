export const Header = () => {
  return (
    <header className="flex items-center max-w-2xl mx-auto p-8">
      <h1 className="flex-grow text-4xl text-gray-100">T O D O</h1>
      <button className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </header>
  );
};
