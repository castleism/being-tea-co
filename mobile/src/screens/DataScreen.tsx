import { exportFilename, type ExportBundle, type ImportPreview } from "@brew-core";
import { useState } from "react";
import { useBrewStore } from "../storeContext.ts";
import fixtureRaw from "../../fixtures/sample-journal.v1.json?raw";

export function DataScreen() {
  const store = useBrewStore();
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState<{ preview: ImportPreview; bundle: ExportBundle } | null>(null);

  function download(filename: string, text: string) {
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="stack">
      <section className="card">
        <h2>Export</h2>
        <p className="muted">
          Download your journal and user-saved sessions as JSON. Use this before
          installing a differently signed debug APK; Android will treat that as
          a different app and will not keep this local store.
        </p>
        <div className="actions">
          <button
            className="btn"
            onClick={() => {
              const bundle = store.exportBundle(false);
              download(exportFilename(new Date(), false), JSON.stringify(bundle, null, 2));
              setMessage(`Exported ${bundle.entries.length} tastings and ${bundle.sessions.length} user sessions.`);
            }}
          >
            Export my journal
          </button>
        </div>
      </section>
      <section className="card">
        <h2>Import</h2>
        <p className="muted">
          Preview first. Merge keeps existing notes and updates matching ids
          only when the incoming record is newer. Replace swaps tastings after
          you confirm. Built-in approved sessions are not deleted.
        </p>
        <label>
          Journal JSON
          <input
            type="file"
            accept="application/json,.json"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              try {
                const raw = await file.text();
                setPreview(store.previewImport(raw));
                setMessage("");
              } catch (error) {
                setPreview(null);
                setMessage(error instanceof Error ? error.message : "Import failed.");
              }
            }}
          />
        </label>
        {preview ? (
          <div className="preview">
            <p>
              Schema {preview.preview.schema}. {preview.preview.entryCount} entries,
              {" "}{preview.preview.sessionCount} sessions.
              {preview.preview.fixture ? " This file is a fixture/sample." : ""}
            </p>
            <p>
              New entries: {preview.preview.newEntryIds.length}. Collisions: {preview.preview.collidingEntryIds.length}.
            </p>
            <div className="actions">
              <button className="btn" onClick={() => { store.applyImport(preview.bundle, "merge"); setMessage("Merged import into the local journal."); setPreview(null); }}>
                Merge
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  if (window.confirm("Replace all tastings with this file? Export first if you need the current journal.")) {
                    store.applyImport(preview.bundle, "replace");
                    setMessage("Replaced local tastings from the imported file.");
                    setPreview(null);
                  }
                }}
              >
                Replace
              </button>
              <button className="btn-ghost" onClick={() => setPreview(null)}>Cancel</button>
            </div>
          </div>
        ) : null}
      </section>
      <section className="card">
        <h2>Fixture for side-by-side testing</h2>
        <p className="muted">
          This sample is not your journal. It exists so import can be tested
          without touching founder notes. Phone-test prototypes from other
          devices are not in this checkout.
        </p>
        <button
          className="btn-secondary"
          onClick={() => {
            download("being-tea-co-journal-fixture.json", fixtureRaw);
            setMessage("Downloaded the labeled fixture file.");
          }}
        >
          Download sample fixture
        </button>
      </section>
      {message ? <div className="banner">{message}</div> : null}
      <p className="legal">
        Storefront pages are unchanged. This companion stores notes only on the
        device. No store listing, paid service, or production secret is used
        here.
      </p>
    </div>
  );
}
