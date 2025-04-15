import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function AvatarImg() {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
    </>
  );
}
