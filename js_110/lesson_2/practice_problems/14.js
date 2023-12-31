/*
Given the following data structure write some code to return an array
containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized.
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = Object.keys(obj).map(key => {
  if (obj[key]['type'] === 'fruit') {
    return obj[key]['colors'].map(color => color.slice(0, 1).toUpperCase() + color.slice(1));
  } else if (obj[key]['type'] === 'vegetable') {
    return obj[key]['size'].toUpperCase();
  }
});

console.log(colorsAndSizes);