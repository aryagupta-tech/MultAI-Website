import type { ReactNode } from 'react';

function Icon({ size = 18, strokeWidth = 1.8, children }: { size?: number; strokeWidth?: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const Download = ({ size = 16 }: { size?: number }) => (
  <Icon size={size} strokeWidth={2}><path d="M12 4v12" /><path d="m6 10 6 6 6-6" /><path d="M5 20h14" /></Icon>
);
export const Check = ({ size = 16 }: { size?: number }) => (
  <Icon size={size} strokeWidth={2.2}><path d="m5 12 5 5 9-10" /></Icon>
);
export const Scale = () => (
  <Icon size={16} strokeWidth={2}><path d="M12 3v18" /><path d="M5 8h14" /><path d="m5 8-2 6h6z" /><path d="m19 8-2 6h6z" /></Icon>
);
export const People = () => (
  <Icon><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14.5c2.4 0 4 1.5 4.5 4" /></Icon>
);
export const Message = () => (
  <Icon><path d="M4 5h16v10H9l-5 4z" /></Icon>
);
export const Bookmark = () => (
  <Icon><path d="M6 3h12v18l-6-4-6 4z" /></Icon>
);
export const Branch = () => (
  <Icon><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="9" r="2.5" /><path d="M6 8.5v7" /><path d="M18 11.5c0 3-3 4-9.5 5" /></Icon>
);
export const Laptop = () => (
  <Icon><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2.5 19h19" /></Icon>
);
export const Phone = () => (
  <Icon><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></Icon>
);
export const Globe = () => (
  <Icon><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z" /></Icon>
);
export const Target = () => (
  <Icon><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" /></Icon>
);
export const Layers = () => (
  <Icon><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></Icon>
);
