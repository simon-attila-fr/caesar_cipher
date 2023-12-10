import { useState, useRef, useEffect } from "react";
import Textarea from "../../components/Textarea/Textarea"
import Caesar from "../../components/Caesar/Caesar";

export default function CaesarPage() {
  const [plainText, setPlainText] = useState("");
  const plaintextRef = useRef(null);

  const [encryptedText, setEncryptedText] = useState("");
  const [shift, setShift] = useState(0);

  function handlePlainText(e) {
    setPlainText(e.target.value);
  }

  // function handleCaesarClick() {
  //   // setEncryptedText(Caesar(plainText, Number(shift)))
  // }

  function handleShift(e) {
    setShift(e.target.value);
  }

  useEffect(() => {
    setEncryptedText(Caesar(plainText, Number(shift)));
  }, [plainText, encryptedText, shift]);

  return (
    <div>
      <h2>What is this and how to use?</h2>
      <p>Some explanation about Caesar cipher...</p>
      <p>
        <span>Allowed caracters in this version:...</span>
      </p>
      <h2>Plaintext</h2>
      <form id="caesar-cipher-home-form">
        <label htmlFor="caesar-cipher-home-plaintext">Plaintext</label>
        <Textarea
          autofocus={true}
          cols="80"
          form="caesar-cipher-home-form"
          rows="10"
          id="caesar-cipher-home-plaintext"
          name="plaintext"
          placeholder="Your text to be caesared..."
          readOnly={false}
          required
          value={plainText}
          onChange={handlePlainText}
          ref={plaintextRef}
        />
        <label htmlFor="caesar-cipher-home-shift">Shift</label>
        <input
          type="number"
          name="shift"
          id="caesar-cipher-home-shift"
          onChange={handleShift}
        ></input>
      </form>
      <div>
        <h2>Encrypted text</h2>
        <Textarea readOnly="true" placeholder="Encrypted text" value={encryptedText} cols="80" rows="10"/>
        <button>Copy to clipboard</button>
      </div>
    </div>
  );
}
