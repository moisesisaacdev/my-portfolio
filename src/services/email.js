import emailjs from "@emailjs/browser";

export async function sendMessage(data) {
  await emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  });
}