import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import ResponseDisplay from "./ResponseDisplay"; // Ensure this component is correctly handling props

export default function EmailReplyForm() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [responseData, setResponseData] = useState(null);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    setIsLoading(true);
    setResponseData(null);
    setError("");

    try {
      const response = await axios.post(
        "https://mailgenius-backend-dsl6.onrender.com/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      setResponseData(response.data);
      console.log("Api Reponse: ", response.data); // Store response data, not full response object
      toast({
        title: "Reply Generated",
        description: "Your smart reply has been generated successfully.",
        duration: 2500,
      });
    } catch (error) {
      setError("Failed to generate email reply. Please try again!");
      toast({
        title: "Error",
        description: "Failed to generate email reply. Please try again!",
        duration: 3000,
        variant: "destructive",
      });

      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      {/* Display the response */}
      {responseData != null && <ResponseDisplay responseData={responseData} />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between gap-4 items-center ">
          <div className="w-full h-16">
            <Textarea
              id="email-content"
              placeholder="Paste your email content here..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              className="h-16 resize-none border-zinc-700 text-white"
              required
            />
          </div>
          <div className="w-1/4  ">
            <Select onValueChange={setTone} required>
              <SelectTrigger id="tone" className="h-16 border-zinc-700">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
                <SelectItem value="sarcastic">Sarcastic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {isLoading ? (
          <Button disabled className="w-full ">
            Genius Reply on the way
            <Loader2 className="animate-spin" />
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full "
            disabled={!emailContent || isLoading}
          >
            Generate Reply
          </Button>
        )}
      </form>
    </div>
  );
}
