function stretch() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done stretching'), 1000);
  })

  return promise.then(value => console.log(value));
}

function runOnTreadmill() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done running on treadmill'), 500);
  })

  return promise.then(value => console.log(value));
}

function liftWeights() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done lifting weights'), 2000);
  })

  return promise.then(value => console.log(value));
}

function workout() {
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => console.log("done working out"));
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
