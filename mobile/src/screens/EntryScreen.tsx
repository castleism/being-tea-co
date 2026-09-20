import type { TastingEntry } from "@brew-core";
import { useState } from "react";
import { useBrewStore } from "../storeContext.ts";

export function EntryScreen({
  entry,
  onClose,
}: {
  entry: TastingEntry;
  onClose: () => void;
}) {
  const store = useBrewStore();
  const [draft, setDraft] = useState(entry);

  function field<K extends keyof TastingEntry>(key: K, value: TastingEntry[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="stack">
      <button className="btn-ghost" onClick={onClose}>← Journal</button>
      <label>
        Tea name
        <input value={draft.teaName} onChange={(event) => field("teaName", event.target.value)} />
      </label>
      <label>
        Family slug
        <input value={draft.familySlug} onChange={(event) => field("familySlug", event.target.value)} />
      </label>
      <label>
        Method slug
        <input value={draft.methodSlug} onChange={(event) => field("methodSlug", event.target.value)} />
      </label>
      <label>
        Leaf amount observed
        <input value={draft.leafAmount} onChange={(event) => field("leafAmount", event.target.value)} />
      </label>
      <label>
        Water amount observed
        <input value={draft.waterAmount} onChange={(event) => field("waterAmount", event.target.value)} />
      </label>
      <label>
        Temperature you observed
        <input
          value={draft.temperatureObserved}
          onChange={(event) => field("temperatureObserved", event.target.value)}
          placeholder="Your kettle reading, not a published claim"
        />
      </label>
      <label>
        Aroma
        <textarea value={draft.aroma} onChange={(event) => field("aroma", event.target.value)} />
      </label>
      <label>
        Taste
        <textarea value={draft.taste} onChange={(event) => field("taste", event.target.value)} />
      </label>
      <label>
        Texture
        <textarea value={draft.texture} onChange={(event) => field("texture", event.target.value)} />
      </label>
      <label>
        Finish
        <textarea value={draft.finish} onChange={(event) => field("finish", event.target.value)} />
      </label>
      <label>
        Notes
        <textarea value={draft.notes} onChange={(event) => field("notes", event.target.value)} />
      </label>
      <label>
        Brew again?
        <select
          value={draft.wouldBrewAgain === null ? "" : draft.wouldBrewAgain ? "yes" : "no"}
          onChange={(event) => {
            const value = event.target.value;
            field("wouldBrewAgain", value === "" ? null : value === "yes");
          }}
        >
          <option value="">Not sure</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <p className="legal">Infusion times recorded: {draft.infusionTimesSeconds.join(", ") || "none"}</p>
      <div className="actions">
        <button
          className="btn"
          onClick={() => {
            store.editEntry(entry.id, draft);
            onClose();
          }}
        >
          Save tasting
        </button>
        <button
          className="btn-ghost"
          onClick={() => {
            store.removeEntry(entry.id);
            onClose();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
