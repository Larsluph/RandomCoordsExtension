function randdouble(min, max) {
  len = max-min;
  return min + Math.random()*len;
}

function openRandom() {
  chrome.storage.sync.get({
    user_minlat: 42.3,
    user_maxlat: 51.2,
    user_minlong: -5,
    user_maxlong: 8
  }, function(items) {
    lat = randdouble(items.user_minlat, items.user_maxlat);
    long = randdouble(items.user_minlong, items.user_maxlong);

    console.log(items.user_minlat, items.user_maxlat);
    console.log(items.user_minlong, items.user_maxlong);
    console.log(lat, long);

    chrome.tabs.create({ url: `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}` });
  });
}

chrome.action.onClicked.addListener(
  function(_tab) {
    openRandom()
  }
);
