const randomNumber = (...args) => {
  if (args.length === 1) {
    return Math.floor(Math.random() * args[0]);
  }

  if (args.length === 2) {
    return Math.floor(Math.random() * args[1]) + args[0];
  }
  return Math.floor(Math.random() * 100);
};

export default randomNumber;
