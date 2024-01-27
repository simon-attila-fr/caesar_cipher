import { useState, useEffect } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Caesar from "../../components/Caesar/Caesar";
import "./CaesarPage.css";
import Button from "../../components/Button/Button";

export default function CaesarPage() {
  const [plainText, setPlainText] = useState("");

  const [encryptedText, setEncryptedText] = useState("");
  const [shift, setShift] = useState(0);

  const [isError, setIsError] = useState({ error: false, message: "" });
  const [message, setMessage] = useState("");

  function handlePlainText(e) {
    setPlainText(e.target.value);
  }

  function handleShift(e) {
    setShift(e.target.value);
  }

  function handleMessage(msg, reset_after_delay = false, delay = 0) {
    setMessage(msg);
    if (reset_after_delay) {
      setTimeout(() => {
        setMessage("");
      }, delay);
    }
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(encryptedText).then(
      () => {
        /* clipboard successfully set */
        handleMessage(
          "The encrypted text has been succesfully copied to the clipboard.",
          true,
          3000
        );
      },
      (err) => {
        console.error(err);
        handleMessage(err.message, true, 5000);
        /* clipboard write failed */
      }
    );
  }

  useEffect(() => {
    try {
      setIsError({ error: false, message: "" });
      setEncryptedText(Caesar(plainText, Number(shift)));
    } catch (error) {
      console.error(error);
      setIsError({ error: true, message: error.message });
    }
  }, [plainText, encryptedText, shift]);

  return (
    <div>
      {/* TODO */}
      {/* <h2>What is this and how to use?</h2>
      <p>Some explanation about Caesar cipher...</p>
      <p>
        <span>Allowed caracters in this version:...</span>
      </p> */}
      {(isError.error && <div>{isError.message}</div>) ||
        (message && <div>{message}</div>)}
      <form id="caesar-caesarpage-form">
        <div id="caesar-caesarpage-form-plaintext">
          <label htmlFor="caesar-caesarpage-form-plaintext-textarea">
            Plaintext
          </label>
          <Textarea
            classname={
              isError.error
                ? "caesar-caesarpage-form-plaintext-textarea-error"
                : "caesar-caesarpage-form-plaintext-textarea"
            }
            autofocus={true}
            cols="80"
            form="caesar-cipher-home-form"
            rows="10"
            id="caesar-caesarpage-form-plaintext-textarea"
            name="plaintext"
            placeholder="Your text to be caesared..."
            readOnly={false}
            required
            value={plainText}
            onChange={handlePlainText}
          />
        </div>
        <div id="caesar-caesarpage-form-plaintext-shift-box">
          <label htmlFor="caesar-caesarpage-form-plaintext-shift">Shift</label>
          <input
            type="number"
            name="shift"
            id="caesar-caesarpage-form-plaintext-shift"
            onChange={handleShift}
          ></input>
        </div>
      </form>
      <div>
        <h2>Encrypted text</h2>
        <Textarea
          id="caesar-caesarpage-form-encrypted-textarea"
          readonly={true}
          placeholder="Encrypted text"
          value={encryptedText}
          cols="80"
          rows="10"
        />
        <Button onClick={handleCopyToClipboard}>Copy to clipboard</Button>
      </div>
    </div>
  );
}
