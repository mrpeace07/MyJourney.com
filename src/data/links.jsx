/* src/data/links.jsx */

/* ---------- Base icon classes ---------- */
const baseIcon = "w-4 h-4 text-gray-300 transition-transform duration-200 group-hover:scale-110";

/* ---------- Inline SVGs ---------- */
export const InstagramIcon = () => (
  <svg className={baseIcon} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg className={baseIcon} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="none" />
    <rect x="6" y="9" width="2" height="8" />
    <circle cx="7" cy="7" r="1" />
    <rect x="10" y="9" width="2" height="8" />
    <rect x="14" y="12" width="2" height="5" />
  </svg>
);

export const TwitterIcon = () => (
  <svg className={baseIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

export const MediumIcon = () => (
  <svg className={baseIcon} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6" cy="12" r="4" />
    <ellipse cx="14" cy="12" rx="2" ry="4" />
    <ellipse cx="18.5" cy="12" rx="1.5" ry="4" />
  </svg>
);

export const YouTubeIcon = () => (
  <svg className={baseIcon} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="6" width="18" height="12" rx="3" />
    <polygon points="10,9 16,12 10,15" fill="white" />
  </svg>
);

/* ---------- Link data ---------- */
export const LINKS = [
  { id: 1, label: "Instagram", url: "#", icon: InstagramIcon },
  { id: 2, label: "LinkedIn", url: "#", icon: LinkedInIcon },
  { id: 3, label: "Twitter (X)", url: "#", icon: TwitterIcon },
  { id: 4, label: "Medium", url: "#", icon: MediumIcon },
  { id: 5, label: "YouTube", url: "#", icon: YouTubeIcon },
];
