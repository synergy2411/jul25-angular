import { getDailyFortune, getLuckyNumber } from "./utils/fortune";
import { sum } from "./utils/maths";

import multiplyFn from "./utils/maths";

console.log("Today Fortune : ", getDailyFortune());

console.log("Your lucky number today : ", getLuckyNumber());

console.log("Multiply : ", multiplyFn(3, 4));
console.log("Sum : ", sum(3, 4));
