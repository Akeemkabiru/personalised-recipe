export {};

declare global {
  interface ChatMessage {
    id: number;
    type: string;
    content: string;
    timestamp: Date;
  }
}
