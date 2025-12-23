import { LINKS } from "../data/links";
import LinkTimeline from "./LinkTimeLine";

export default function LinkSection() {
  return (
    <section>
      <h2>My Journey</h2>
      <LinkTimeline links={LINKS} />
    </section>
  );
}
