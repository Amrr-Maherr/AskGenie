export default function ResponseItem({ item }) {
  return (
    <div className="flex flex-col gap-3 px-2 animate-fadeInUp">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white p-3 rounded-xl rounded-tr-none max-w-[70%] shadow-lg break-words">
          {item.user}
        </div>
      </div>

      {/* AI Message */}
      <div className="flex justify-start">
        <div className="bg-gray-800 text-green-400 p-3 rounded-xl rounded-tl-none max-w-[70%] shadow-lg break-words">
          {item.bot}
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-gray-500 text-xs text-right px-1">{item.time}</div>
    </div>
  );
}
