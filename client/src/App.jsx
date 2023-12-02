import "./App.css";

function App() {
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
      <p><span>Allowed caracters in this version:...</span></p>
      <h2>
        Plaintext
      </h2>
      <textarea
        type='text'
        label='Plaintext'
      >
      </textarea>
      <label htmlFor='shift'>
        Shift
      </label>
      <input
        type='number'
        name='shift'
      >
      </input>
      <button>
        Encrypt
      </button>
    </div>
    <div>
      <h2>
        Encrypted text
      </h2>
      <textarea
        readOnly='true'
        placeholder="Encrypted text"
      />
      <button>
        Copy to clipboard
      </button>
    </div>
    </>
  );
}

export default App;
