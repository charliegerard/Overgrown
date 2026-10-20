import { useEffect, useState } from 'react';

export function useNeglectClock(state, persist) {
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!state) return;
    const update = () => {
      const now = Date.now();
      if (document.hidden) {
        if (!state.neglectSince) {
          state.neglectSince = now;
          persist(state, true);
        }
        return;
      }
      if (state.neglectSince) {
        state.neglect += now - state.neglectSince;
        state.neglectSince = null;
      }
      state.url = location.href;
      persist(state, true);
      setTick((t) => t + 1);
    };

    document.addEventListener('visibilitychange', update);
    update();
    return () => document.removeEventListener('visibilitychange', update);
  }, [state, persist]);
}
