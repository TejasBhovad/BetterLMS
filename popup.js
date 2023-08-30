// popup.js

document.addEventListener("DOMContentLoaded", function () {
  const applyButton = document.getElementById("applyButton");

  applyButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: modifyPage,
      });
    });
  });
});
