chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var qrcode = new QRCode(document.getElementById("qrcode"), {width : 256,height : 256});
    qrcode.makeCode(tabs[0].url);
});