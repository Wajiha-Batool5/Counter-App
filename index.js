let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById("sum-el")
let entries = []

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    entries.push(count)
    saveEl.textContent = "Previous entries: " + entries.join(" - ")
    count = 0
    countEl.textContent = count
}

function sumEntries() {
    let sum = entries.reduce((a, b) => a + b, 0)
    sumEl.textContent = "Sum of previous entries: " + sum
}

function resetEntries() {
    entries = []
    saveEl.textContent = "Previous entries: "
    sumEl.textContent = ""
}
