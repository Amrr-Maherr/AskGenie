import { Copy, Share2, ThumbsUp, ThumbsDown } from "lucide-react";
function ChatActions() {
  return (
    <div className="flex gap-3 mt-5 justify-start">
      <button className="hover:text-white transition cursor-pointer">
        <Copy className="w-5 h-5 text-gray-400" />
      </button>
      <button className="hover:text-white transition cursor-pointer">
        <Share2 className="w-5 h-5 text-gray-400" />
      </button>
      <button className="hover:text-white transition cursor-pointer">
        <ThumbsUp className="w-5 h-5 text-gray-400" />
      </button>
      <button className="hover:text-white transition cursor-pointer">
        <ThumbsDown className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}

export default ChatActions;
