chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.getAllInWindow(null, function(tabs){
    if (tabs.length > 20) {
      alert("YOU HAVE TOO MANY TABS OPEN!")
      chrome.tabs.remove(tabs[0].id);
      window.location.reload();
    }
  });
});
