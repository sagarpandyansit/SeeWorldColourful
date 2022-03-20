var menuItem = {
    "id": "speakText",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "speakText" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, {'rate': 0.7});
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "showPageAction") {
        
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});
