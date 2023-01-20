const form = document.querySelector("form")
const setupFunction = new NLWSetup(form)
const button = document.querySelector("button")

// const data = {
//   run: ["01-01", "01-03", "01-05"],
//   water: ["01-01", "01-02", "01-04", "01-05"],
//   muscle: ["01-02", "01-04", "01-06"],
//   sleep: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
//   dogCare: [],
//   diet: [],
// }

button.addEventListener("click", () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = setupFunction.dayExists(today)
  setupFunction.addDay(today)

  if (dayExists) {
    return alert(`Dia ${today} já cadastrado`)
  }
})

form.addEventListener("change", () => {
  console.log(setupFunction.data)
  localStorage.setItem(
    "gmunizviana@gmail.com",
    JSON.stringify(setupFunction.data)
  )
})

const data = JSON.parse(localStorage.getItem("gmunizviana@gmail.com")) || {}
setupFunction.setData(data)
setupFunction.load()
