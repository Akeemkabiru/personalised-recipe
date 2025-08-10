export function formatTime(timeValue: Date) {
  return Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timeValue));
}
