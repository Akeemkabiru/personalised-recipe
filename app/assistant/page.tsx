"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mic, MicOff, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { chats } from "@/constant";

interface ChatMessage {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
}

const VoiceAssistantScreen = () => {
  const { back } = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(chats);

  // Ref for last message
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // Scroll to last message when messages change
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <div className="min-h-screen bg-background w-[450px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-chef-orange to-chef-orange-light p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 cursor-pointer">
            <ArrowLeft onClick={() => back()} className="w-5 h-5" />
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
      <div className="flex-1 p-4 space-y-4 h-[350px] pb-32 overflow-y-auto">
        {messages.map((message, idx) => (
          <div
            key={message.id}
            ref={idx === messages.length - 1 ? lastMessageRef : null}
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

      {/* Input Area */}
      <div className="relative">
        <div className="fixed bottom-0  w-full max-w-[450px] bg-white border-t border-border p-4">
          <div className="flex items-center gap-3">
            {/* Voice Button */}
            <button
              className={`p-3 rounded-full flex items-center justify-center transition-colors ${
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
            </button>

            {/* Text Input */}
            <Input
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Type your question or use voice..."
              className="flex-1 rounded-2xl border-border"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Send Button */}
            <button
              className="p-3 rounded-full bg-chef-orange hover:bg-chef-orange-light flex items-center justify-center transition-colors"
              onClick={sendMessage}
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
            {[
              "How can I make this recipe healthier?",
              "What can I substitute for eggs?",
              "Adjust recipe for 2 people",
            ].map((text, idx) => (
              <button
                key={idx}
                onClick={() => setTextInput(text)}
                className="px-3 py-1 rounded-full text-xs whitespace-nowrap border border-chef-orange text-chef-orange hover:bg-chef-orange hover:text-white transition-colors"
              >
                {text.includes("healthier")
                  ? "Make it healthier"
                  : text.includes("eggs")
                  ? "Substitute ingredients"
                  : "Adjust portions"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantScreen;
