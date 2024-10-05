import "./App.css";

function App() {
  return (
    <>
      <header className="App-header">
        <nav>
          <img src="../images/logo.jpg" alt="logo" />

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div id="left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant,
              <br /> focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <div id="right">
            <img src="../images/displayImg.jpg" alt="display" />
          </div>
        </section>
      </main>
      <footer>
        <p>2024 little limon</p>
      </footer>
    </>
  );
}

export default App;
