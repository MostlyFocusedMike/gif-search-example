export const fetchHandler = async (url, options) => {
  try {
    const res = await fetch(url, options)
    if (!res.ok) return [null, res];
    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
