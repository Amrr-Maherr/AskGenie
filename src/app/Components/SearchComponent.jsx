import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchComponent() {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 flex-col md:flex-row">
        <Input type="text" placeholder="Ask me anything..." />
        <Button className="cursor-pointer" size="lg">Submit Question</Button>
      </div>
    </>
  );
}
