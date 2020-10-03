
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0
  } else {
    return array.reduce((sum,current) => Math.min(sum,current), 0)
  }
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0
  } else {
    return array.reduce((sum,current) => Math.max(sum,current), 0)
  }
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {
    return 0
  } else {
    return array.reduce((sum, current) => (sum + current), 0)  / array.length
  }
}
