// The MultAI stacked-layer mark, as drawn in the desktop app.
const LAYER = 'M16 21.5 4.5 15.75 16 10l11.5 5.75L16 21.5Z';

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d={LAYER} transform="translate(0 6)" fill="currentColor" opacity="0.22" />
      <path d={LAYER} transform="translate(0 2)" fill="currentColor" opacity="0.5" />
      <path d={LAYER} transform="translate(0 -2)" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <span className="wordmark">
      <LogoMark size={size} />
      <span>
        Mult<span className="wordmark-ai">AI</span>
      </span>
    </span>
  );
}
