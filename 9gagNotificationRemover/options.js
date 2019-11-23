// Saves options to chrome.storage
function save_options() {
    var likedcBoxResult = document.getElementById('likedcBox').checked;
    var coccBoxResult = document.getElementById('coccBox').checked;
    chrome.storage.sync.set({
        likedcBox: likedcBoxResult,
        coccBox: coccBoxResult
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get(['likedcBox', 'coccBox'], function(items) {
      document.getElementById('likedcBox').value = items.likedcBox;
      document.getElementById('coccBox').checked = items.coccBox;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);