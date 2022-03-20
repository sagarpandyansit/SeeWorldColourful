$(function(){
    console.log("yes");
    chrome.storage.sync.get('deficiency', function(def){
        $('#deficiencyType').text(def.deficiency); 
    });
    $('#submitBtn').click(function(){
        chrome.storage.sync.get('deficiency', function(def){
            
            var newVal = $('#deficiency').val();
            chrome.storage.sync.set({'deficiency':newVal});
            $('#deficiencyType').text(newVal); 
        });
    });
});