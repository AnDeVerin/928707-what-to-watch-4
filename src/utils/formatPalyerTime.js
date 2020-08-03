export default (timeInSec = 0) => {
  const hours = Math.floor(timeInSec / 60 / 60);
  const minites = Math.floor((timeInSec - hours * 60 * 60) / 60);
  const seconds = timeInSec - hours * 60 * 60 - minites * 60;

  return `${hours}:${minites}:${seconds}`;
};
