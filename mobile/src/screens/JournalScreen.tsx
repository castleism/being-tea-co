import { createEntry, type TastingEntry } from "@brew-core";
import { useMemo, useState } from "react";
import { useBrewState, useBrewStore } from "../storeContext.ts";

export function JournalScreen({ onEdit }: { onEdit: (entry: TastingEntry) => void }) {
  const store = useBrewStore();
  const { entries } = useBrewState();
  const [query, setQuery] = useState("");
  const results = useMemo(() => store.search(query), [store, query, entries]);

  return (
    <div>
      <p className="legal">
        Tasting notes stay on this device. The journal starts empty. Sample
        files are fixtures and are imported only when you choose them on Data.
      </p>
      <label className="search">
        Search tastings
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="oolong, roast, sencha…"
        />
      </label>
      <div className="actions" style={{ marginBottom: 14 }}>
        <button
          className="btn"
          onClick={() => {
            const entry = createEntry({ teaName: "Untitled tasting" }, new Date().toISOString());
            store.upsertEntry(entry);
            onEdit(entry);
          }}
        >
          New tasting
        </button>
      </div>
      {results.length === 0 ? (
        <div className="card">
          <h2>No tastings yet</h2>
          <p className="muted">Your journal is empty. Fixtures are not loaded as your notes.</p>
        </div>
      ) : (
        <div className="stack">
          {results.map((entry) => (
            <button key={entry.id} className="entry-card" onClick={() => onEdit(entry)}>
              <small>{new Date(entry.updatedAt).toLocaleString()}</small>
              <h2>{entry.teaName}</h2>
              <p className="muted">{[entry.familySlug, entry.methodSlug, entry.taste].filter(Boolean).join(" · ") || "No tasting notes yet"}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
