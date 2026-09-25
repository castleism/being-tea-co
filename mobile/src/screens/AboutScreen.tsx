import { listFamilies, startingPoints } from "@brew-core";

export function AboutScreen() {
  const families = listFamilies();
  return (
    <div className="stack">
      <section className="card">
        <h2>About this companion</h2>
        <p className="quote">
          Being Tea Co. is independent tea-culture education. This companion
          keeps brewing sessions and tasting notes on the device. It does not
          replace the public storefront. The web preview can be installed as a
          Progressive Web App. That install is not the Android APK and does
          not schedule native infusion notices.
        </p>
        <p className="muted">
          Starting points are copied from the approved tea library. House timer
          defaults are labeled as house defaults. Personal monastery practice
          is not lineage authority.
        </p>
      </section>
      <section className="card">
        <h2>Approved pairings in this build</h2>
        <p className="muted">{startingPoints.length} family/method pairings. {families.length} families.</p>
        <ul className="quote">
          {startingPoints.map((point) => (
            <li key={point.id}>{point.familyName} · {point.methodName}</li>
          ))}
        </ul>
      </section>
      <section className="card">
        <h2>Privacy</h2>
        <p className="quote">
          Tasting notes, reusable sessions, and the active timer stay in this
          app’s local storage. There is no Being Tea Co. account, analytics
          pixel, or cloud sync in this build. Export is how you copy your
          journal to another install.
        </p>
        <p className="muted">
          Email beingteaco@gmail.com for a privacy request. Do not send
          passwords or medical records. A public privacy URL for store listing
          is still a human publishing step.
        </p>
      </section>
      <section className="card">
        <h2>What this build does not claim</h2>
        <p className="quote">
          No health, medicinal, or invented temperature claims. A local
          infusion notice, if you grant permission, is not a guaranteed alarm
          after the system stops the app. Store listing and paid services are
          not active.
        </p>
      </section>
    </div>
  );
}
