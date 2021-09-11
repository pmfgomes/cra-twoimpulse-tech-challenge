export const getRandomInt = max => {
  return Math.floor(Math.random() * max);
};

export const randomIsoDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toISOString();
};
