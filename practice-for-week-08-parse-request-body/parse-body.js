function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map((el) => el.split("="));
}

function thirdStep(input) {
  return input.map(ele => {
    return ele.map(source => {
      return source.replace("+", " ");
    })
  })
}

function fourthStep(input) {
  return input.map(ele => {
    return ele.map(source => {
      return decodeURIComponent(source);
    })
  })
}

function fifthStep(input) {
  let result = {};

  input.forEach(elePair => {
    result[elePair[0]] = elePair[1];
  })

  return result;
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
