export default (timeInMin = 0) => {
  const hours = Math.floor(timeInMin / 60);
  const minites = timeInMin - hours * 60;

  return hours ? `${hours}h ${minites}m` : `${timeInMin}m`;
};
