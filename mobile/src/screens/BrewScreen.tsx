import {
  getStartingPoint,
  listFamilies,
  startingPointsForFamily,
  type BrewSessionTemplate,
} from "@brew-core";
import { useMemo, useState } from "react";
import { useBrewState, useBrewStore } from "../storeContext.ts";

export function BrewScreen({ onStarted }: { onStarted: () => void }) {
  const store = useBrewStore();
  const state = useBrewState();
  const families = useMemo(() => listFamilies(), []);
  const [familySlug, setFamilySlug] = useState(families[0]?.slug ?? "");
  const methods = startingPointsForFamily(familySlug);
  const [guidanceId, setGuidanceId] = useState(methods[0]?.id ?? "");
  const selected = getStartingPoint(guidanceId) ?? methods[0];
  const userTemplates = state.templates.filter((template) => template.origin === "user");

  function startFromTemplate(template: BrewSessionTemplate) {
    store.startTemplate(template);
    onStarted();
  }

  return (
    <div className="stack">
      <p className="legal">
        Starting points are copied from the approved tea library. House timer
        defaults use the low end of a published range, or a brief reusable
        sequence when the source only says “brief.” They are not health claims.
      </p>
      <label>
        Tea family
        <select
          value={familySlug}
          onChange={(event) => {
            const nextFamily = event.target.value;
            setFamilySlug(nextFamily);
            const nextMethods = startingPointsForFamily(nextFamily);
            setGuidanceId(nextMethods[0]?.id ?? "");
          }}
        >
          {families.map((family) => (
            <option key={family.slug} value={family.slug}>
              {family.name}
            </option>
          ))}
        </select>
      </label>
      <div className="stack">
        {methods.map((point) => (
          <button
            key={point.id}
            className="choice"
            data-guidance={point.id}
            onClick={() => setGuidanceId(point.id)}
          >
            <small>{point.infusionMode} · {point.houseTimerSeconds.length || "user-set"} infusion slots</small>
            <h2>{point.methodName}</h2>
            <p className="quote">{point.familyBrewQuote}</p>
          </button>
        ))}
      </div>
      {selected ? (
        <section className="card">
          <p className="kicker">Approved method starting point</p>
          <h2>{selected.familyName} · {selected.methodName}</h2>
          <p className="quote">{selected.methodStartingPointQuote}</p>
          {selected.methodWatchQuote ? <p className="quote">{selected.methodWatchQuote}</p> : null}
          <p className="muted">{selected.timerNote}</p>
          <div className="sources">
            {selected.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            ))}
          </div>
          <div className="actions" style={{ marginTop: 14 }}>
            <button
              className="btn"
              onClick={() => {
                const template = state.templates.find((item) => item.guidanceId === selected.id && item.origin === "approved-guidance");
                if (template) startFromTemplate(template);
              }}
            >
              Start this session
            </button>
          </div>
        </section>
      ) : null}

      <h2 className="section">Reusable sessions you saved</h2>
      {userTemplates.length === 0 ? (
        <p className="muted">No user-saved sessions yet. Adjust a live timer, then save it. Built-in templates stay separate from fixtures.</p>
      ) : (
        userTemplates.map((template) => (
          <article className="card" key={template.id}>
            <small>{template.familySlug} · {template.infusions.length} infusions</small>
            <h2>{template.name}</h2>
            <p className="muted">{template.notes}</p>
            <div className="actions">
              <button className="btn" onClick={() => startFromTemplate(template)}>Reuse</button>
              <button className="btn-ghost" onClick={() => store.removeTemplate(template.id)}>Delete</button>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
