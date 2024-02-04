const xpathEnglish = "//li[contains(@class, 'vjs-captions-menu-item') and contains(., 'English')]";
const xpathSwedish = "//li[contains(@class, 'vjs-captions-menu-item') and contains(., 'Swedish')]";
var englishButton;
var swedishButton;

window.addEventListener("load", () => {
  englishButton = getElementByXpath(xpathEnglish);
  swedishButton = getElementByXpath(xpathSwedish);

  document.addEventListener("keydown", function (event) {
    // if "c" is pressed
    if (event.key === "c") {
      // if both button is found
      if (englishButton && swedishButton) {
        if (englishButton.classList.contains("vjs-selected")) {
          swedishButton.click();
        } else {
          englishButton.click();
        }
        // unfocus clicked buttons
        document.activeElement.blur();
      } else {
        console.error("One or both buttons not found.");
      }
    }
  });
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
