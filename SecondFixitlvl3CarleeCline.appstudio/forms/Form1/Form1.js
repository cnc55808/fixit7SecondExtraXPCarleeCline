let rowNumber = Number(prompt("How many rows should there be?"))
let columnNumber = Number(prompt("How many columns should there be?"))

for (i = 0; i < rowNumber; i++) {
  for (j = 0; j < columnNumber; j++) {
    document.write("*")
    }
    document.writeln("<br/>")
  }

