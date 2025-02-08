import EmailReplyForm from "./components/ui/EmailReplyForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "./assets/Logo.png";
import bg from "./assets/bg.jpg";
import bg2 from "./assets/bg2.jpg";
import {
  LucideMessageCircle,
  Mail,
  MailCheckIcon,
  MailIcon,
  MailMinusIcon,
  MailSearch,
  MessageCircleMore,
} from "lucide-react";
function App() {
  return (
    <div
      className="w-full min-h-screen px-4 flex justify-center items-center "
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >
      <Card className="relative w-full max-h-[90vh] max-w-4xl mx-auto bg-zinc-950 outline-none text-white rounded-2xl shadow-lg border border-white border-opacity-20 bg-black/50 backdrop-blur-lg overflow-hidden">
        <CardHeader>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2">
              <CardTitle className="text-3xl font-bold">
                Mail<span className="text-blue-500">Genius</span>
              </CardTitle>
              <MessageCircleMore size={30} />
            </div>
            <p className="text-[15px] text-zinc-500">
              Genius at replying to emails
            </p>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <EmailReplyForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
