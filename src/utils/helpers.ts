export const getRandomInt = max => {
  return Math.floor(Math.random() * max);
};

export const randomIsoDate = (start, end) => {
  console.log("file: helpers.ts ~ line 6 ~ randomIsoDate ~ start", start);
  console.log("file: helpers.ts ~ line 6 ~ randomIsoDate ~ end", end);

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  ).toISOString();
};
