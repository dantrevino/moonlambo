// Saves options to chrome.storage.sync.
function save_options() {
  var currency = document.getElementById('id_currency_multi').value;
  var curr_sel = []
  curr_sel.push(currency)
  // var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({'currencies': curr_sel }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    var watch = document.getElementById('watch-list');
    status.textContent = 'Options saved.';
    watch.textContent = curr_sel.toString()
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({'currencies': 'Bitcoin' }, function(items) {
    // document.getElementById('currency').value = items.currency;
    var watch = document.getElementById('watch-list').textContent=items.currencies;
    // document.getElementById('like').innerHTML = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
