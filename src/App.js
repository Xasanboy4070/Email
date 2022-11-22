import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unqnvlb",
        "template_b0x9ssp",
        form.current,
        "cd7TTJNhNkRe1Zgd-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1>Email</h1>
      <form ref={form} onSubmit={sendEmail} action="">
        <input name="user_name" type="text" placeholder="text" />
        <input name="user_email" type="email" placeholder="text" />
        <input name="subject" type="number" placeholder="number" />
        <button type="submit">send email</button>
      </form>
    </div>
  );
}

export default App;
