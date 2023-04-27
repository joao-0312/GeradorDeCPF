"use strict"

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'cpf',
        title: 'Gerar CPF',
        contexts: ['editable']
    })
})

chrome.contextMenus.onClicked.addListener((item, tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['gerarCPF.js']
    })
})

