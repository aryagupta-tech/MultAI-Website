import type { CSSProperties, ReactNode } from 'react';
import { Check, Download, Phone, Target } from './Icons';
import { ANDROID_APK, MAC_DMG } from './links';

type Chip = { style: CSSProperties; icon: ReactNode; title: string; sub: ReactNode };

// Teammate activity floating around the headline; decorative, hidden on narrow screens.
const CHIPS: Chip[] = [
  { style: { left: 40, top: 40, rotate: '-4deg' }, icon: <span className="avatar avatar-sk">AL</span>, title: 'Alex joined', sub: 'from a browser' },
  { style: { right: 30, top: 20, rotate: '5deg', animationDelay: '-2s' }, icon: <span className="chip-icon is-ok"><Check /></span>, title: 'Approved', sub: <span className="mono">npm test</span> },
  { style: { left: 0, top: 250, rotate: '3deg', animationDelay: '-4s' }, icon: <span className="chip-icon"><Target /></span>, title: 'SAM 3.1', sub: 'found the Pay button' },
  { style: { right: 0, top: 270, rotate: '-3deg', animationDelay: '-5.5s' }, icon: <span className="chip-icon"><Phone /></span>, title: 'Approved from phone', sub: 'styles.css' },
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
            <span className="pill"><span className="pill-dot" />Built on Meta’s Muse models</span>
            <h1>One coding agent.<br />The whole team.</h1>
            <p className="lede">Bring a teammate into your AI coding session. They see everything and can steer the agent, and you approve every change. Your code stays on your computer.</p>
            <div className="actions">
              <a className="btn btn-primary" href={MAC_DMG} download><Download />Download for macOS</a>
              <a className="btn btn-secondary" href={ANDROID_APK}><Phone />Get the Android app</a>
            </div>
            <span className="fine">macOS on Apple silicon · Android · any browser</span>
          </div>
        </div>

        <div className="window">
          <img src="/app.webp" width={1800} height={1125} alt="MultAI: a teammate's direction waits for the host under a Muse Wonder catch-up brief, next to the live diff" />
        </div>
      </div>
    </section>
  );
}
