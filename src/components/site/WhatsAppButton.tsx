import { whatsappLink } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Gravity Hospital, I'd like to book an appointment / enquire.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gravity Hospital on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-3d pulse-glow hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
        <path d="M19.11 17.34c-.29-.14-1.7-.84-1.96-.94-.27-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.14-.17.19-.34.22-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.02.14.19 2.06 3.14 4.99 4.41.7.3 1.25.48 1.68.62.71.23 1.35.2 1.86.12.57-.08 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.19-.55-.34z" />
        <path d="M26.65 5.34C23.86 2.55 20.06 1 16.05 1 7.87 1 1.2 7.66 1.2 15.84c0 2.61.68 5.16 1.98 7.4L1 31l7.94-2.08c2.17 1.19 4.62 1.82 7.11 1.82h.01c8.18 0 14.85-6.66 14.85-14.84 0-3.96-1.54-7.68-4.35-10.47zm-10.6 22.84h-.01c-2.22 0-4.4-.6-6.29-1.72l-.45-.27-4.71 1.24 1.26-4.6-.29-.47a12.28 12.28 0 01-1.89-6.52c0-6.8 5.53-12.33 12.34-12.33 3.29 0 6.39 1.29 8.72 3.62a12.28 12.28 0 013.61 8.72c0 6.8-5.53 12.33-12.29 12.33z" />
      </svg>
      <span className="hidden sm:inline font-semibold">WhatsApp</span>
    </a>
  );
}
