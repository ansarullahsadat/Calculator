"use strict"

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")
let output = ""
// operator
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText !== "=") {
      display.value += button.innerText
    } else {
      output = `${display.value}`
      display.value = eval(output)
      output = ""
    }
    if (button.innerText === "C") display.value = ""
  })
})

// deleting previous character
const deleteChar = document.querySelector(".cursor-pointer")

deleteChar.addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1)
})
