import { useEffect, useState, type ReactNode } from 'react';
import { Check, Download, Globe, Laptop, Layers, People, Phone, Target } from './Icons';
import { ANDROID_APK, MAC_DMG, WEB_APP } from './links';

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  { icon: <People />, title: 'Join from a browser', body: 'Teammates open a link. No install, no API key. A catch-up brief tells them what happened so far.' },
  { icon: <Target />, title: 'Point at the bug', body: 'Click what’s broken and it’s outlined for the agent. The agent checks its own fix on the real page.' },
  { icon: <Layers />, title: 'Agents in parallel', body: '/split runs several agents, each in its own worktree. Switch models and the context comes along.' },
  { icon: <Phone />, title: 'Control it from your phone', body: 'Pair once, then send prompts and approve each step from Android or a phone browser.' },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 style={{ maxWidth: 640 }}>Get unstuck together.</h2>
        <p className="section-lede">Your teammate joins the session itself, not a pile of screenshots.</p>
        <div className="features">
          {FEATURES.map((f) => (
            <article key={f.title} className="feature">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Decision = 'pending' | 'approved' | 'rejected';

// A working sample of the host's approval card: it counts down, and either button settles it.
function ApprovalCard() {
  const [left, setLeft] = useState(9 * 60);
  const [decision, setDecision] = useState<Decision>('pending');

  useEffect(() => {
    if (decision !== 'pending') return;
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [decision]);

  const reset = () => { setDecision('pending'); setLeft(9 * 60); };
  const timer = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;

  return (
    <div className="approval">
      <div className="approval-head">
        <span className="approval-label">APPROVAL NEEDED</span>
        {decision === 'pending' && <span className="approval-timer mono" aria-label={`Expires in ${timer}`}>{timer}</span>}
      </div>
      <strong className="approval-title">Run the webhook test suite</strong>
      <span className="command mono"><span className="command-prompt">$</span> npm test -- test/webhooks</span>
      {decision === 'pending' ? (
        <div className="approval-actions">
          <button type="button" className="btn btn-secondary btn-md" onClick={() => setDecision('rejected')}>Reject</button>
          <button type="button" className="btn btn-primary btn-md" onClick={() => setDecision('approved')}><Check size={15} />Approve and run</button>
        </div>
      ) : (
        <p className={decision === 'approved' ? 'approval-result is-ok' : 'approval-result'} role="status">
          {decision === 'approved' ? 'Approved. Running once on your computer.' : 'Rejected. Nothing ran.'}{' '}
          <button type="button" className="btn btn-secondary btn-sm" onClick={reset} style={{ marginLeft: 8 }}>Try again</button>
        </p>
      )}
    </div>
  );
}

export function Approvals() {
  return (
    <section id="approvals" className="section">
      <div className="container split">
        <div className="split-copy">
          <span className="eyebrow">Host approvals</span>
          <h2>Nothing runs until you say so.</h2>
          <p className="section-lede" style={{ marginTop: 0, maxWidth: 440 }}>Your computer keeps the files and runs the agent. You see the exact command before it runs, and teammates never get your shell.</p>
          <ul className="checks">
            <li><Check />One approval, one exact command</li>
            <li><Check />Change an argument, approve again</li>
            <li><Check />Teammates’ directions wait for you too</li>
          </ul>
        </div>
        <ApprovalCard />
      </div>
    </section>
  );
}

const OPTIONS = [
    { title: 'The plan you already pay for', body: 'Your ChatGPT plan, or any compatible API key.' },
  { title: 'Local models', body: 'Run a model in Ollama or LM Studio. Nothing leaves your computer.' },
];

export function Connect() {
  return (
    <section id="connect" className="section">
      <div className="container">
        <h2>Bring the AI you already have.</h2>
        <p className="section-lede">The host connects once. Everyone who joins works through it, with no account of their own.</p>
        <div className="options">
          {OPTIONS.map((o) => (
            <div key={o.title} className="option">
              <strong>{o.title}</strong>
              <span>{o.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DOWNLOADS = [
  { icon: <Laptop />, title: 'macOS', body: 'Apple silicon. On first open, allow it in System Settings → Privacy & Security.', href: MAC_DMG, cta: 'Download', download: true },
  { icon: <Phone />, title: 'Android', body: 'Follow your sessions, pair as owner, approve from anywhere.', href: ANDROID_APK, cta: 'Get the APK', download: false },
  { icon: <Globe />, title: 'Browser', body: 'Join a session from a link, on any phone or computer.', href: WEB_APP, cta: 'Open', download: false },
];

export function GetApp() {
  return (
    <section id="download" className="section cta">
      <div className="container">
        <h2>Start a session together.</h2>
        <div className="downloads">
          {DOWNLOADS.map((d) => (
            <a key={d.title} className="download" href={d.href} {...(d.download ? { download: true } : {})}>
              <span className="feature-icon">{d.icon}</span>
              <strong>{d.title}</strong>
              <span>{d.body}</span>
              <span className="btn btn-secondary btn-sm download-cta">{d.download && <Download size={14} />}{d.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
