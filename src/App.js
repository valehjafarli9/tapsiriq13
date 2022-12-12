import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";


function About() {
  return (
    <article>
      <h1>It's about me</h1>
    </article>
  );
}

function Work() {
  return (
    <article>
      <h1>Our work is not response.</h1>
    </article>
  );
}

function Contact() {
  return (
    <article>
      <h1>Phone is not found</h1>
    </article>
  );
}

function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/work">
          Works
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

function Page() {
  return (
    <main>
      <Routes>
        <Route path="/about" element={<About />}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
      
        
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Page />
    </BrowserRouter>
  );
}
export default App;