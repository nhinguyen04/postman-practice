function stretch(timeLeft) {
  const promise = new Promise((resolve, reject) => {
    if (timeLeft < 1000) {
      reject(new Error('you dont have enough time to stretch'));
    } else {
      timeLeft -= 1000;
      setTimeout(() => resolve(timeLeft), 1000);
    }
  })

  return promise.then((value) => {
    console.log('done stretching');
    return value;
  })
}


function runOnTreadmill(timeLeft) {
  const promise = new Promise((resolve, reject) => {
    if (timeLeft < 500) {
      reject(new Error('you dont have enough time to run on treadmill'));
    } else {
      timeLeft -= 500;
      setTimeout(() => resolve(timeLeft), 500);
    }
  })

  return promise.then((value) => {
    console.log('done running on treadmill');
    return value;
  })
}


function liftWeights(timeLeft) {
  const promise = new Promise((resolve, reject) => {
    if (timeLeft < 2000) {
      reject(new Error('you dont have enough time to lift weights'));
    } else {
      timeLeft -= 2000;
      setTimeout(() => resolve(timeLeft), 2000);
    }
  })

  return promise.then((value) => {
    console.log('done lifting weights');
    return value;
  })
}


function workout(totalTime) {
  stretch(totalTime)
    .then((value) => runOnTreadmill(value))
    .then((value) => liftWeights(value))
    .then((value) => console.log(`done working out with ${value / 1000} seconds left`))
    .catch((reason) => console.log(reason));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
