import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-left">
          <span className="nav-name">Anastasiia Rudych</span>
        </div>
        <a className="nav-contact" href="mailto:ana.rudych@gmail.com">
          ana.rudych@gmail.com
        </a>
      </header>

      <main className="hero">
        <div className="arch" aria-hidden="true" />
        <div className="hero-texts">
          <p className="hero-text"><span className="text-strong">Hi! My name is Anastasiia.</span>
            <br />I am a frontend engineer and a fiction writer under the pen name A. Kaparytska.
          </p>
          <p className="hero-text">You can check out my professional CV here:
            <br /><a className="hero-link" href="https://drive.google.com/file/d/1wpNQv_NoAZXjcQElw2t-f05LdBEYp09L/view?usp=sharing" target="_blank" rel="noopener noreferrer">Anastasiia Rudych - CV 2026</a>
          </p>
          <p className="hero-text">Or read about my book here (in Ukrainian)
            <br /><a className="hero-link" href="https://drive.google.com/file/d/14llQbcfwMvFyqtYAE145ZyhH04BgXV1j/view?usp=sharing" target="_blank" rel="noopener noreferrer">Book Pitch</a>
          </p></div>

      </main>

      <footer className="year">2026</footer>
    </div>
  )
}

export default App
