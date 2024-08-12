export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-gray-500 hover:bg-gray-400 transition-colors ease-in-out duration-300 p-2 rounded-md text-sm ">
      {children}
    </button>
  );
}
