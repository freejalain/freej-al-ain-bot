const sessions = new Map();

const getSession = (id) => {
  if (!sessions.has(id)) {
    sessions.set(id, {
      history: [],
      lastInteraction: Date.now(),
      order: { isFirstMessage: true, items: [], status: 'idle' }
    });
  }
  return sessions.get(id);
};

const updateSession = (id, updates) => {
  const s = getSession(id);
  if (updates.message) s.history.push({ role: updates.role, content: updates.message });
  if (updates.order) s.order = { ...s.order, ...updates.order };
  s.lastInteraction = Date.now();
};

const resetOrder = (id) => {
  const s = getSession(id);
  s.order = { isFirstMessage: false, items: [], status: 'idle' };
};

const clearOldSessions = () => {
  const now = Date.now();
  for (const [id, s] of sessions.entries()) {
    if (now - s.lastInteraction > 3600000) sessions.delete(id);
  }
};

module.exports = { getSession, updateSession, resetOrder, clearOldSessions };
