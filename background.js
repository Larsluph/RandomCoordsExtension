function randdouble(min, max) {
  len = max-min;
  return min + random()*len;
}

chrome.browserAction.onClicked.addListener(
  function() {
    let lat = randdouble(42, 51);
    let long = randdouble(-5, 8);

    chrome.tabs.create({ url: `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}` });
  }
);
