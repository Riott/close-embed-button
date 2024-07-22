// ==UserScript==
// @name        close embed script
// @namespace   Violentmonkey Scripts
// @match       https://www.destiny.gg/bigscreen
// @grant       none
// @version     1.0
// @author      Riott
// @description 18/07/2024, 14:41:55
// @run-at       document-idle
// ==/UserScript==

const chatControls = document.getElementById("chat-controls")
const embedControls = document.getElementById("stream-controls")

const scriptCloseEmbedButton = document.createElement("button")
scriptCloseEmbedButton.style.display = "none"

//the button hidden in cinema mode
const nativeCloseEmbedButton = document.getElementById("close-embed-btn")
const closeChatButton = document.getElementById("close")


const icon = document.createElement("i");
icon.classList.add("fas", "fa-window-close", "me-1")


scriptCloseEmbedButton.onclick = () => {
  nativeCloseEmbedButton.click()
}


chatControls.insertBefore(scriptCloseEmbedButton, closeChatButton)

scriptCloseEmbedButton.appendChild(icon)
const text = document.createTextNode("Close Embed")

scriptCloseEmbedButton.appendChild(text)


// look for changes to embed to dynamically show button

const config = { attributes: true, attributeFilter:["data-embed-type"]};
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'attributes') {
      if (mutation.target.attributes["data-embed-type"].value === "embed") {
        scriptCloseEmbedButton.style.display = ""
      }
      else {
        scriptCloseEmbedButton.style.display = "none"
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(embedControls, config);

