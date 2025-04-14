import SearchComponent from "./SearchComponent";
import Title from "./Title";

export default function HomeSection() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="h-[80%] w-[50%]">
          <div className="text-center flex items-center justify-center flex-col gap-4">
            <Title
              text="Ask Genie"
              size="text-6xl"
              font="text-bold"
              color="text-white"
            />
            <Title
              text="Powered by Google AI"
              size="text-md"
              font="text-bold"
              color="text-white"
            />
          </div>
          <div className="mt-10">
            <SearchComponent/>
          </div>
        </div>
      </div>
    </>
  );
}
