type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P) {
  const result = (await promise1) + (await promise2);
  return result;
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

async function addTwoPromises2(promise1: P, promise2: P): Promise<number> {
  const number1: number = await promise1;
  const number2: number = await promise2;
  return new Promise((resolve) => resolve(number1 + number2));
}

console.log(`Try - ${addTwoPromises2(Promise.resolve(1), Promise.resolve(2)).then(console.log)}`);
