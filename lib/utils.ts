export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}
