
// Saves options to chrome.storage.sync.
function save_options() {
  var currency = document.getElementById('id_currency_multi').value;
  var fiat = document.getElementById('id_fiat_multi').value;
  var curr_sel = []
  curr_sel.push(currency)
  curr_sel.push(document.getElementById('watch-list').textContent)
  chrome.storage.sync.set({'currencies': curr_sel }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    var watch = document.getElementById('watch-list');
    var fiatPref = document.getElementById('fiat-pref');
    status.textContent = 'Options saved.';
    watch.textContent = curr_sel.toString()
    fiatPref.textContent = fiat
    setTimeout(function() {
       status.textContent = '';
     }, 750);
   });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get('currencies', function(items) {
    if (!chrome.runtime.error) {
      var watch = document.getElementById('watch-list').textContent=items.currencies;
    }
  });
}

function clear_options() {
  chrome.storage.local.clear(function () {
    var watch = document.getElementById('watch-list').textContent='';
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
       status.textContent = '';
     }, 750);
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('clear').addEventListener('click', clear_options);
