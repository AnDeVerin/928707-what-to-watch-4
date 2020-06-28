const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export default formatDate;
