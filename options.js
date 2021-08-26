function save_settings() {
  var minlat = parseFloat(document.getElementById('minlat').value);
  var maxlat = parseFloat(document.getElementById('maxlat').value);
  var minlong = parseFloat(document.getElementById('minlong').value);
  var maxlong = parseFloat(document.getElementById('maxlong').value);

  chrome.storage.sync.set({
    user_minlat: minlat,
    user_maxlat: maxlat,
    user_minlong: minlong,
    user_maxlong: maxlong
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function init() {
  chrome.storage.sync.get({
    user_minlat: 42.3,
    user_maxlat: 51.2,
    user_minlong: -5.0,
    user_maxlong: 8.0
  }, function(items) {
    document.getElementById('minlat').value = items.user_minlat.toString();
    document.getElementById('maxlat').value = items.user_maxlat.toString();
    document.getElementById('minlong').value = items.user_minlong.toString();
    document.getElementById('maxlong').value = items.user_maxlong.toString();
  });

  document.getElementById('save').addEventListener('click', save_settings);
}

document.addEventListener('DOMContentLoaded', init);
