import { useState, useRef, useEffect } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Caesar from "../../components/Caesar/Caesar";
import "./CaesarPage.css";

export default function CaesarPage() {
  const [plainText, setPlainText] = useState("");
  const plaintextRef = useRef(null);

  const [encryptedText, setEncryptedText] = useState("");
  const [shift, setShift] = useState(0);

  function handlePlainText(e) {
    setPlainText(e.target.value);
  }

  function handleShift(e) {
    setShift(e.target.value);
  }

  useEffect(() => {
    setEncryptedText(Caesar(plainText, Number(shift)));
  }, [plainText, encryptedText, shift]);

  return (
    <div>
      {/* TODO */}
      {/* <h2>What is this and how to use?</h2>
      <p>Some explanation about Caesar cipher...</p>
      <p>
        <span>Allowed caracters in this version:...</span>
      </p> */}
      <form id="caesar-caesarpage-form">
        <div id="caesar-caesarpage-form-plaintext">
          <label htmlFor="caesar-caesarpage-form-plaintext-textarea">Plaintext</label>
          <Textarea
            classname="caesar-caesarpage-form-plaintext-textarea"
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
            ref={plaintextRef}
          />
        </div>
        <div id="caesar-caesarpage-form-plaintext-shift"> 
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
          readOnly={true}
          placeholder="Encrypted text"
          value={encryptedText}
          cols="80"
          rows="10"
        />
        <button>Copy to clipboard</button>
      </div>
    </div>
  );
}
