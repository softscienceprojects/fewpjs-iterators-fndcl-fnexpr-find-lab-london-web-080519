const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let toFind = arr.find(entry => entry.result === "W")
  if (toFind) {
    return toFind.year
  } else {
    return undefined
  }
}
