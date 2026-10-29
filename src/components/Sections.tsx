import { useEffect, useState, type ReactNode } from 'react';
import { Bookmark, Branch, Check, Download, Message, People } from './Icons';
import { LogoMark } from './Logo';

const FEATURES: { icon: ReactNode; title: string; body: string }[] = [
  { icon: <People />, title: 'Join mid-task', body: 'See the conversation, decisions and current diff the moment you join.' },
  { icon: <Message />, title: 'Instruct or discuss', body: 'Talk to the agent, or just to your team. Discussion never reaches the agent by accident.' },
  { icon: <Bookmark />, title: 'Decisions that stick', body: 'Save what the team agreed on. The agent follows it for everyone.' },
  { icon: <Branch />, title: 'A private worktree per chat', body: 'Every chat works in its own copy. Your checkout is never touched.' },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 style={{ maxWidth: 640 }}>Built for working with an agent, together.</h2>
        <p className="section-lede">Join a teammate’s task without making them start over.</p>
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
            <li><Check />Plan mode blocks writes and commands</li>
          </ul>
        </div>
        <ApprovalCard />
      </div>
    </section>
  );
}

const OPTIONS = [
  { title: 'Provider account', body: 'Sign in with a subscription you already pay for.' },
  { title: 'API key', body: 'Stored encrypted on your computer, never shown to teammates.' },
  { title: 'Set up later', body: 'Join sessions and talk with your team right away.' },
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

export function GetApp() {
  return (
    <section id="download" className="section cta">
      <div className="container cta-inner">
        <span className="app-icon"><LogoMark size={40} /></span>
        <h2>Start a session together.</h2>
        <p>Everything it needs comes bundled. No setup beyond signing in.</p>
        <a className="btn btn-primary" href="#download"><Download />Download for macOS</a>
        <span className="fine">Windows · Linux</span>
      </div>
    </section>
  );
}
