"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SearchComponent() {
  const [SearchValue, setSearchValue] = useState("")
  const SendData = () => {
    
  }
  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 flex-col md:flex-row">
        <Input
          type="text"
          placeholder="Ask me anything..."
          onChange={(event) => {setSearchValue(event.target.value);}}
        />
        <Button className="cursor-pointer" size="lg" onClick={SendData}>
          Submit Question
        </Button>
      </div>
    </>
  );
}
