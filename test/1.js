function getFormData(e) {
    var token = "NjZ4qYlrV1oGaXLwNxXoQ0GzigGKCRf4CAr3D8Sr5mH";
    var form = FormApp.getActiveForm();
    var currentItemResponses = e.response.getItemResponses();
    var message = "\n";
    for(var i = 0; i< currentItemResponses.length; i++) {
        message += currentItemResponses[i].getItem().getTitle() + "：" + currentItemResponses[i].getResponse() + "\n\n";
    }
    message += "⏰填表時間：" + e.response.getTimestamp();
    sendLineNotify(message, token);
}
function sendLineNotify(message, token) {
    var options = {
        "method": "post",
        "payload": {
            "message": message
        },
        "headers": {
            "Authorization": "Bearer " + token
        }
    };
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
