import { Hero } from './components/Hero';
import { Wordmark } from './components/Logo';
import { Approvals, Connect, Features, GetApp } from './components/Sections';

export function App() {
  return (
    <>
      <header className="container nav">
        <a href="#top" aria-label="MultAI home"><Wordmark /></a>
        <nav className="nav-links" aria-label="Main">
          <a href="#features">Features</a>
          <a href="#approvals">Approvals</a>
          <a href="#connect">Your AI</a>
          <a className="btn btn-secondary btn-sm" href="#download">Download</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Features />
        <Approvals />
        <Connect />
        <GetApp />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <Wordmark size={18} />
          <span>© MultAI</span>
        </div>
      </footer>
    </>
  );
}
