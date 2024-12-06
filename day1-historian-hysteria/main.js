import fs from 'node:fs'

const inputData = fs.readFileSync(process.cwd() + "/" + 'input')
  .toString()
  .split('\n')

const leftList = []
const rightList = []

for (let value of inputData) {
  let [left, right] = value.split('   ')

  leftList.push(Number(left ?? 0))
  rightList.push(Number(right ?? 0))
}

leftList.sort()
rightList.sort()

let result = 0

for (let [index, value] of leftList.entries()) {
  result += Math.abs(value - rightList[index])
}

console.log(result)
