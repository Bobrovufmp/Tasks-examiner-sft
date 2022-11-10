const stepCount1 =
  "L1, L3, L5, L3, R1, L4, L5, R1, R3, L5, R1, L3, L2, L3, R2, R2, L3, L3, R1, L2, R1, L3, L2, R4, R2, L5, R4, L5, R4, L2, R3, L2, R4, R1, L5, L4, R1, L2, R3, R1, R2, L4, R1, L2, R3, L2, L3, R5, L192, R4, L5, R4, L1, R4, L4, R2, L5, R45, L2, L5, R4, R5, L3, R5, R77, R2, R5, L5, R1, R4, L4, L4, R2, L4, L1, R191, R1, L1, L2, L2, L4, L3, R1, L3, R1, R5, R3, L1, L4, L2, L3, L1, L1, R5, L4, R1, L3, R1, L2, R1, R4, R5, L4, L2, R4, R5, L1, L2, R3, L4, R2, R2, R3, L2, L3, L5, R3, R1, L4, L3, R4, R2, R2, R2, R1, L4, R4, R1, R2, R1, L2, L2, R4, L1, L2, R3, L3, L5, L4, R4, L3, L1, L5, L3, L5, R5, L5, L4, L1, R1, L2, L4, L2, L4, L1, R4, R4, R5, R1, L4, R2, L3, L2, L4, R2, L4, L1, L2, R1, R4, R3, R2, R2, R5, L1, L2";

const stepCount2 = stepCount1.split(", ");

 // direction 0 - север 1 - восток 2 - юг 3 запад

// const direction = {
//   north: 0,
//   east: 1,
//   south: 2,
//   west: 3,
// };

let x = 0;
let y = 0;
let i = 0;

const minimalSteps = stepCount2.forEach((el, index) => {
  const stepCountInteger = parseInt(el.slice(1));

  if (i == 0) {
    if (isLeft(el)) {
      x = x - stepCountInteger;
      i = 3;
    } else {
      x = x + stepCountInteger;
      i = 1;
    }
    console.log(x, y, `Direction ${i}`);
    return i;
  }

  if (i == 1) {
    if (isLeft(el)) {
      y = y + stepCountInteger;
      i = 0;
    } else {
      y = y - stepCountInteger;
      i = 2;
    }
    console.log(x, y, `Direction ${i}`);
    return i;
  }

  if (i == 2) {
    if (isLeft(el)) {
      x = x + stepCountInteger;
      i = 1;
    } else {
      x = x - stepCountInteger;
      i = 3;
    }
    console.log(x, y, `Direction ${i}`);
    return i;
  }
  if (i == 3) {
    if (isLeft(el)) {
      y = y - stepCountInteger;
      i = 2;
    } else {
      y = y + stepCountInteger;
      i = 0;
    }
  }

  console.log(x, y, `Direction ${i}`);
});

function isLeft(el) {
  return el.startsWith("L");
}
