import { Copy, Share2, ThumbsUp, ThumbsDown } from "lucide-react";
import ChatActions from "./ChatActions";

export default function ResponseItem({ item }) {
  return (
    <div className="flex flex-col gap-3 px-2 animate-fadeInUp">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="text-white p-3 rounded-xl rounded-tr-none max-w-[70%] shadow-lg break-words">
          {item.user}
        </div>
      </div>

      {/* AI Message */}
      <div className="flex flex-col gap-1 justify-start">
        <div className="text-white p-3 rounded-xl rounded-tl-none max-w-[70%] shadow-lg break-words relative">
          {item.bot}
          {/* Action Icons */}
          <ChatActions/>
        </div>
      </div>
    </div>
  );
}
