export const formatDate = (timestamp) => {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
                      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 
                      'Nov', 'Dec'];
  const date = new Date(timestamp);
  return `${monthNames[date.getMonth()]} ${date.getDate()}`;
};
