// export const getRandomColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return "#" + randomColor;
// };

export const getPreparedColor = (index) => {
  const colors = [
    "#4b8fb1",
    "#f4755c",
    "#64c492",
    "#dfa388",
    "#491fb3",
    "#df123c",
    "#5d3f57",
    "#3b6bac",
    "#fedc0c",
    "#6d3a5d"
  ];

  const length = colors.length;

  const colorIndex = index - length * Math.floor(index / length);

  return colors[colorIndex + (Math.floor(index / length) > 0 ? 1 : 0)];
};

export function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
