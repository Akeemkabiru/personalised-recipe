import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface VoiceAssistantScreenProps {
  onNavigate: (screen: string) => void;
}

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export const VoiceAssistantScreen = ({
  onNavigate,
}: VoiceAssistantScreenProps) => {
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: "ai",
      content:
        "Hi! I'm your AI cooking assistant. Ask me anything about recipes, substitutions, or cooking techniques!",
      timestamp: new Date(),
    },
    {
      id: 2,
      type: "user",
      content: "Can I substitute butter with oil in the cookie recipe?",
      timestamp: new Date(),
    },
    {
      id: 3,
      type: "ai",
      content:
        "Yes! You can substitute butter with oil in cookies. Use 3/4 the amount of oil as butter (so if recipe calls for 1 cup butter, use 3/4 cup oil). This will make cookies more tender and slightly less crispy. Vegetable oil or melted coconut oil work best.",
      timestamp: new Date(),
    },
  ]);

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real app, this would start/stop speech recognition
  };

  const sendMessage = () => {
    if (!textInput.trim()) return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      type: "user",
      content: textInput,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setTextInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: messages.length + 2,
        type: "ai",
        content: "That's a great question! Let me help you with that...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-chef-orange to-chef-orange-light p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4">
          <div
            className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            onClick={() => onNavigate("home")}
          >
            <ArrowLeft className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Assistant</h1>
            <p className="text-white/80 text-sm">
              Ask me anything about cooking!
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <Card
              className={`max-w-[80%] rounded-2xl shadow-md ${
                message.type === "user"
                  ? "bg-chef-orange text-white"
                  : "bg-card"
              }`}
            >
              <CardContent className="p-4">
                <p
                  className={`text-sm ${
                    message.type === "user" ? "text-white" : "text-foreground"
                  }`}
                >
                  {message.content}
                </p>
                <p
                  className={`text-xs mt-2 ${
                    message.type === "user"
                      ? "text-white/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Voice Recording Indicator */}
      {isListening && (
        <div className="px-4 py-2">
          <Card className="bg-chef-green-light rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-chef-green rounded-full animate-pulse" />
                <span className="text-chef-green font-medium">
                  Listening...
                </span>
                <div className="flex gap-1 ml-auto">
                  <div
                    className="w-1 h-4 bg-chef-green rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-1 h-4 bg-chef-green rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-1 h-4 bg-chef-green rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-border">
        <div className="flex items-center gap-3">
          {/* Voice Button */}
          <div
            className={`rounded-full ${
              isListening
                ? "bg-red-500 hover:bg-red-600"
                : "bg-chef-green hover:bg-chef-green/90"
            }`}
            onClick={toggleListening}
          >
            {isListening ? (
              <MicOff className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-white" />
            )}
          </div>

          {/* Text Input */}
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type your question or use voice..."
            className="flex-1 rounded-2xl border-border"
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />

          {/* Send Button */}
          <div
            className="rounded-full bg-chef-orange hover:bg-chef-orange-light"
            onClick={sendMessage}
          >
            <Send className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-3 overflow-x-auto">
          <div
            className="rounded-full text-xs whitespace-nowrap border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white"
            onClick={() =>
              setTextInput("How can I make this recipe healthier?")
            }
          >
            Make it healthier
          </div>
          <div
            className="rounded-full text-xs whitespace-nowrap border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white"
            onClick={() => setTextInput("What can I substitute for eggs?")}
          >
            Substitute ingredients
          </div>
          <div
            className="rounded-full text-xs whitespace-nowrap border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white"
            onClick={() => setTextInput("Adjust recipe for 2 people")}
          >
            Adjust portions
          </div>
        </div>
      </div>
    </div>
  );
};
