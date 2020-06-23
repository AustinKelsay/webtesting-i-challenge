module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  repairedItem = item;
  repairedItem.durabiity = 100;
  return { ...repaitedItem };
}

function get(item) {
  return { ...item };
}
