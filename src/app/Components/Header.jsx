import Title from "./Title";

export default function Header() {
  return (
    <div className="text-center flex flex-col gap-2 mb-10">
      <Title
        text="Ask Genie"
        size="text-5xl sm:text-6xl"
        font="font-extrabold"
        color="text-white"
      />
      <Title
        text="Powered by Google AI"
        size="text-sm sm:text-md"
        font="font-semibold"
        color="text-gray-300"
      />
    </div>
  );
}
