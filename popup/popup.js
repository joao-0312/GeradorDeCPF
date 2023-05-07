"strict mode"

let checkbox = document.getElementById('checkbox')
let emoji = document.getElementById("emoji")

chrome.storage.sync.get(["cpfComPontuacao"]).then(result => {
    checkbox.checked = result.cpfComPontuacao

    emoji.textContent = checkbox.checked ? String.fromCodePoint(0x1F7E9) : String.fromCodePoint(0x1F7E5)
})

checkbox.addEventListener('change', () =>{
    chrome.storage.sync.set({cpfComPontuacao: checkbox.checked})
})

checkbox.addEventListener('change', () => {
    emoji.textContent = checkbox.checked ? String.fromCodePoint(0x1F7E9) : String.fromCodePoint(0x1F7E5)
})