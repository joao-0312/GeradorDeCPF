"strict mode"

let checkbox = document.getElementById('checkbox');

chrome.storage.sync.get(["cpfComPontuacao"]).then(result => {
    checkbox.checked = result.cpfComPontuacao
})

checkbox.addEventListener('change', () =>{
    chrome.storage.sync.set({cpfComPontuacao: checkbox.checked})
})
    
