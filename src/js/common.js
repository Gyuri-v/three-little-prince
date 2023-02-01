export const getPoint = function (e) {
  if (e.touches) {
    e = e.touches[0] || e.changedTouches[0];
  }
  return [e.pageX || e.clientX, e.pageY || e.clientY];
};
