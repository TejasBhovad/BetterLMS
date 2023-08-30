// content.js

// Function to apply the custom CSS from storage
function applyCustomCss() {
  chrome.storage.sync.get(["customCss"], function (result) {
    const customCss = result.customCss || "";
    const style = document.createElement("style");
    style.innerHTML = customCss;
    document.head.appendChild(style);
  });
}

// Function to modify the page's appearance
function modifyPage() {
  const targetInput = document.querySelector("input#username");
  if (
    targetInput &&
    targetInput.tagName === "INPUT" &&
    targetInput.type === "text"
  ) {
    targetInput.placeholder = "Email"; // Change the value to whatever you want
  }

  const loginPanel = document.querySelector(".loginpanel");
  if (loginPanel) {
    const h2Element = loginPanel.querySelector("h2");
    if (h2Element && h2Element.textContent === "LOGIN") {
      h2Element.textContent = "LMS LOGIN"; // Change the text to whatever you want
    }
  }

  const targetDiv = document.querySelector(".loginimg-container"); // Replace with the actual class or ID of the div
  if (targetDiv) {
    const imgElements = targetDiv.querySelectorAll("img");
    imgElements.forEach((imgElement) => {
      imgElement.remove();
    });
  }

  // Continue with other modifications
}

// open PDF in new tab if flex paper
function openPDF() {
  const pageSource = document.documentElement.innerHTML;
  const pdfUrlRegex = /http[s]?:\/\/[^"]+\.pdf/g;
  const matchedUrls = pageSource.match(pdfUrlRegex);

  if (matchedUrls && matchedUrls.length > 0) {
    const pdfUrl = matchedUrls[0];
    window.open(pdfUrl, "_blank");
  }
}

// Apply the custom CSS and modify the page on page load
applyCustomCss();
modifyPage();
openPDF();
