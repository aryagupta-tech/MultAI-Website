import type { CSSProperties, ReactNode } from 'react';
import { Check, Download, Scale } from './Icons';

type Chip = { style: CSSProperties; icon: ReactNode; title: string; sub: ReactNode };

// Teammate activity floating around the headline; decorative, hidden on narrow screens.
const CHIPS: Chip[] = [
  { style: { left: 40, top: 40, rotate: '-4deg' }, icon: <span className="avatar avatar-sk">SK</span>, title: 'Sam joined', sub: 'as collaborator' },
  { style: { right: 30, top: 20, rotate: '5deg', animationDelay: '-2s' }, icon: <span className="chip-icon is-ok"><Check /></span>, title: 'Approved', sub: <span className="mono">npm test</span> },
  { style: { left: 0, top: 250, rotate: '3deg', animationDelay: '-4s' }, icon: <span className="chip-icon"><Scale /></span>, title: 'Decision saved', sub: 'Limit by merchant ID' },
  { style: { right: 0, top: 270, rotate: '-3deg', animationDelay: '-5.5s' }, icon: <span className="avatar avatar-km">KM</span>, title: 'Kai is typing', sub: 'Team discussion' },
];

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-inner">
          {CHIPS.map((c) => (
            <div key={c.title} className="chip" style={c.style} aria-hidden="true">
              {c.icon}
              <span className="chip-text">
                <strong>{c.title}</strong>
                <span className="chip-sub">{c.sub}</span>
              </span>
            </div>
          ))}

          <div className="hero-copy">
            <span className="pill"><span className="pill-dot" />Shared AI coding sessions</span>
            <h1>One coding agent.<br />The whole team.</h1>
            <p className="lede">Work on the same AI coding session together. Your teammates see everything. Your code and commands stay on your computer.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#download"><Download />Download for macOS</a>
              <a className="btn btn-secondary" href="#features">See how it works</a>
            </div>
            <span className="fine">Also for Windows and Linux</span>
          </div>
        </div>

        <div className="window">
          <div className="window-bar" aria-hidden="true">
            <span className="window-dot" /><span className="window-dot" /><span className="window-dot" />
          </div>
          <img src="/app.webp" width={1558} height={1132} alt="The MultAI app: a shared session where the agent asks the host to approve running the webhook test suite" />
        </div>
      </div>
    </section>
  );
}
