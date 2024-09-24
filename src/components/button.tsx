export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="absolute bottom-0 w-full p-2 mx-0 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      onClick={onClick}
    >
      作成
    </button>
  );
}
