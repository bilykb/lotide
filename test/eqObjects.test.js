const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const ab = { a : "1", b : "2" };
const ba = { b : "2", a : "1" };
const xy = { x : "3", y : "4" };
const yx = { y : "5", x : "1" };
const zx = { z : "3", x : "4" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(xy, yx), false);
assertEqual(eqObjects(xy, zx), false);

const abc = { a : "1", b : "2", c : "3" };
const cd = { c : "1", d : ["2", 3] };
const dc = { d : ["2", 3], c : "1" };
const cd2 = { c : "1", d : ["2", 3, 4] };
const dc2 = { d : ["2", 3, 4], c : "1"  };
const ae = { a : "1", e : ["2", 3, 4] };
const emp1 = {};
const emp2 = {};

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ae, cd2), false);
assertEqual(eqObjects(cd2, dc2), true);
assertEqual(eqObjects(emp1, emp2), true);