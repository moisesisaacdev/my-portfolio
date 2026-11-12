import emailjs from "@emailjs/browser";

export async function sendMessage(data) {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  });

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    data
  );
}