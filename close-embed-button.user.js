// ==UserScript==
// @name        close embed script
// @namespace   Violentmonkey Scripts
// @match       https://www.destiny.gg/bigscreen
// @grant       none
// @version     1.0
// @author      Riott
// @description 18/07/2024, 14:41:55
// ==/UserScript==

const chatControls = document.getElementById("chat-controls");
const closeEmbedButton = document.createElement("button");
const closeChatButton = document.getElementById("close");

const icon = document.createElement("i");
icon.classList.add("fas", "fa-window-close", "me-1");

closeEmbedButton.onclick = () => {
  document.getElementById("close-embed-btn").click();
};

chatControls.insertBefore(closeEmbedButton, closeChatButton);

closeEmbedButton.appendChild(icon);
const text = document.createTextNode("Close Embed");

closeEmbedButton.appendChild(text);
