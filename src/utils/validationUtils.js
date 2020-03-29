export const noEmptyValues = obj => {
  return Object.values(obj).every(v => v !== null && v !== '' && v !== undefined)
}

export const noEmptyValuesArr = arr => {
  return arr.every(v => v !== null && v !== '' && v !== undefined)
}

export const objectsHaveSameKeys = (obj1, obj2) => {
  var obj1Keys = Object.keys(obj1).sort()
  var obj2Keys = Object.keys(obj2).sort()
  return JSON.stringify(obj1Keys) === JSON.stringify(obj2Keys)
}
