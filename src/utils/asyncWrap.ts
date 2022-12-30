const asyncWrap = ((fn) => (req, res, next, ...args) => {
  const result = fn(req, res, next, ...args);
  return Promise.resolve(result).catch(next);
});
export default asyncWrap;
