const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const totalEl = document.getElementById("total-el")
let count = 0
let total = 0



function increment() {
    count += 1
    countEl.textContent = count
    
}

function save() {
    const countStr = count + " - "
    saveEl.textContent += countStr
    total += count
    countEl.textContent = 0
    count = 0
    totalEl.textContent = "Total: " + total
}
