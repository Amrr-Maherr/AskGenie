import AvatarImg from "./AvatarImage";
import DialogForm from "./DialogForm";

export default function Nav() {
  return (
    <>
      <div className="p-5 flex items-center justify-between w-full">
        <DialogForm />
        <AvatarImg />
      </div>
    </>
  );
}
