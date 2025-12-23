export default function LinkCard({ link }) {
  const Icon = link.icon;
  return (
    <a className="link-card" href={link.url} target="_blank" rel="noopener noreferrer">
      <Icon />
      <span>{link.label}</span>
    </a>
  );
}
