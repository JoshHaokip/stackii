import React, { useRef, useState } from "react";
import styles from "../styles/Newsletter.module.css";

const Newsletter = () => {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div className={styles.container}>
      <h1></h1>
      <form onSubmit={subscribe} className={styles.formContainer}>
        <input
          className={styles.input}
          id="email-input"
          name="email"
          placeholder="you@stackii.com"
          ref={inputEl}
          required
          type="email"
        />

        <div className={styles.message}>
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam.`}
        </div>
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
