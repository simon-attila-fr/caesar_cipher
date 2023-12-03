import Textarea from "../components/Textarea/Textarea";

function Home() {
  return (
    <>
      <div>
        <h1>Caesar cipher</h1>
      </div>
      <div>
        <ul>
          <li>Technical description of the site (competences)</li>
          <li>Upcoming features</li>
        </ul>
      </div>
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
            cols="50"
            form="caesar-cipher-home-form"
            rows="10"
            id="caesar-cipher-home-plaintext"
            name="plaintext"
            placeholder="Your text to be caesared..."
            readOnly={false}
            required
          />
          <label htmlFor="caesar-cipher-home-shift">Shift</label>
          <input
            type="number"
            name="shift"
            id="caesar-cipher-home-shift"
          ></input>
          <button>Encrypt</button>
        </form>
      </div>
      <div>
        <h2>Encrypted text</h2>
        <textarea readOnly="true" placeholder="Encrypted text" />
        <button>Copy to clipboard</button>
      </div>
    </>
  );
}

export default Home;
