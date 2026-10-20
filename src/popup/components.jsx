import { FREE_AT, isLocked, measure, neglectedMs } from '../shared/plants.js';

export function CurrentTabCard({ entry, minutes }) {
  if (!entry) {
    return (
      <Card title="This tab">
        <div className="muted">Nothing can grow here (browser pages and the Web Store are off-limits).</div>
      </Card>
    );
  }

  const { state } = entry;
  const snapshot = measure(state, minutes);
  const locked = isLocked(snapshot);
  const pct = percent(snapshot.coverage);

  return (
    <Card title="This tab">
      <div className="big">{pct}% overgrown</div>
      <CoverageBar percent={pct} />
      <div className="muted">
        Neglected for {formatDuration(neglectedMs(state))}
      </div>
      <div className={locked ? 'status locked' : 'status clear'}>
        {locked ? `🔒 Walled off — slash it down to ${percent(FREE_AT)}% to free the page` : '✓ The page is free'}
      </div>
    </Card>
  );
}

export function TabListCard({ entries, minutes }) {
  const rows = entries
    .map((entry) => ({ ...entry, snapshot: measure(entry.state, minutes) }))
    .sort((a, b) => b.snapshot.coverage - a.snapshot.coverage);

  return (
    <Card title={`All tabs (${entries.length})`}>
      <ul className="tabs">
        {rows.length === 0 && <li className="muted">No overgrown tabs yet.</li>}
        {rows.map(({ tab, snapshot }) => (
          <TabRow key={tab.id} tab={tab} snapshot={snapshot} />
        ))}
      </ul>
    </Card>
  );
}

function TabRow({ tab, snapshot }) {
  const pct = percent(snapshot.coverage);
  return (
    <li onClick={() => focusTab(tab)}>
      <img src={tab.favIconUrl || undefined} alt="" />
      <div className="title">
        {tab.title || tab.url}
        <CoverageBar percent={pct} thin />
      </div>
      <div className="pct">
        {isLocked(snapshot) ? '🔒 ' : ''}
        {pct}%
      </div>
    </li>
  );
}

function focusTab(tab) {
  chrome.tabs.update(tab.id, { active: true });
  chrome.windows.update(tab.windowId, { focused: true });
}

export function Card({ title, children }) {
  return (
    <section className="card">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

function CoverageBar({ percent, thin }) {
  return (
    <div className={thin ? 'bar thin' : 'bar'}>
      <i style={{ width: `${percent}%` }} />
    </div>
  );
}

const percent = (fraction) => Math.round(fraction * 100);

function formatDuration(ms) {
  const minutes = Math.floor(ms / 60000);
  if (minutes < 1) return 'less than a minute';
  if (minutes < 60) return `${minutes} min`;
  return `${Math.floor(minutes / 60)} h ${minutes % 60} min`;
}
