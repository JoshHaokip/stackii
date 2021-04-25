import React from "react";
import Link from "next/link";
import styles from "../styles/Newsletter.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: name.value,
    });

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputContainer}>
        <input
          className={styles.formInput}
          ref={(node) => (name = node)}
          type="text"
          placeholder="Tim Cook"
        />
        <br />
        <input
          className={styles.formInput}
          ref={(node) => (email = node)}
          type="email"
          placeholder="tim@apple.com"
        />
        {status === "sending" && (
          <div style={{ color: "#fe7624" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "#5d20d1" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <br />
        <div className={styles.buttonContainer}>
          <button className={styles.submit} onClick={submit}>
            Subscribe
          </button>
          <button className={styles.back}>
            <Link href="/">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  const url =
    "https://dev.us1.list-manage.com/subscribe/post?u=ca070fb7a10b409a14221388e&amp;id=4f56eb8533";

  return (
    <div className={styles.container}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <div className={styles.newsletterContainer}>
        <h1 className={styles.title}>📩 stackii newsletter</h1>
        <h3 className={styles.subHeading}>
          Bi-weekly newsletter with all the best tools and resouces to help you
          build products
        </h3>
        <p className={styles.bonus}>
          Sign up before 31st May to find out how I built stackii for less than
          $10
        </p>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Newsletter;
