import { Dimensions } from 'react-native';

// Grab the window object from that native screen size.
const window = Dimensions.get('screen');

// The vertical resolution of the screen.
export const screenHeight = window.height;

// The horizontal resolution of the screen.
export const screenWidth = window.width;

export const wp = percentage => {
  const value = (percentage * screenWidth) / 100;
  return Math.round(value);
};

// The average resolution of common devices, based on a ~5" mobile screen.
// const baselineHeight = screenHeight < 750 ? 680 : 800;
const baselineHeight = screenHeight == 812 ? 800 : 680;

// Scales the item based on the screen height and baselineHeight
export const scale = value =>
  Math.round((screenHeight / baselineHeight) * value);

export default null;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const getLongDate = dateString => {
  let splittedDate = (dateString || '').split("-");
  return `${splittedDate[2]} ${monthNames[splittedDate[1] - 1]} ${splittedDate[0]}`;
}