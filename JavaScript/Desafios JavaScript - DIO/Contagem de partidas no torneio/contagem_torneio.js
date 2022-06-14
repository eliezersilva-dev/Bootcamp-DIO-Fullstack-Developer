let lines = gets().split('\n')
var numberOfMatches = parseInt(lines)
let n = parseInt(lines.shift())
let totalMatches = 0

while (n > 1) {
  if (numberOfMatches % 2 == 0) {
    numberOfMatches = numberOfMatches / 2
    totalMatches = totalMatches + numberOfMatches
  } else {
    numberOfMatches = (numberOfMatches - 1) / 2
    totalMatches = totalMatches + numberOfMatches + 1
  }
  n = numberOfMatches
}
print(totalMatches)