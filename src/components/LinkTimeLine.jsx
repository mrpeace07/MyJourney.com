import LinkCard from "./LinkCard";

export default function LinkTimeline({ links }) {
  return (
    <div className="link-timeline">
      {links.map(link => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
