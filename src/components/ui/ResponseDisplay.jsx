import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CopyIcon, Copyleft } from "lucide-react";
import { Avatar } from "./avatar";

export default function ResponseDisplay({ responseData }) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(responseData);
    toast({
      title: "Copied!",
      description: "The response has been copied to your clipboard.",
      duration: 2000,
    });
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          {/* <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar> */}
          <h2 className="text-lg font-semibold text-zinc-400">Your Reply - </h2>
        </div>
        <Button
          onClick={handleCopy}
          className="w-[5em]"
          disabled={!responseData}
          variant="secondary"
          readOnly
        >
          Copy <CopyIcon />
        </Button>
      </div>
      <Textarea
        value={responseData}
        placeholder="Your generated reply will appear here..."
        className="h-[15em]  border-zinc-800 resize-none bg-zinc-900"
        readOnly
      />
    </div>
  );
}
