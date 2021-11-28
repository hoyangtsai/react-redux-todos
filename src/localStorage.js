export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    // console err
  } finally {
    return;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};