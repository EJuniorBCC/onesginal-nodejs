const request = require('request-promise');

var body;
var players_id;
var api_key;

var Notification = function(body,players_id) {
	this.body = body;
	this.players_id = players_id;
	this.api_key = "ONE SIGNAL KEY";
}

Notification.prototype.send = function() {

	var headers = {
		"Content-Type": "application/json; charset=utf-8",
		"Authorization":"HEADR Authorization"
	};

	var notification = {
		app_id: this.api_key,
		include_player_ids:this.players_id,
		contents: {en: this.body},
		large_icon:'Exemplo de icone'
	};

	var options = {
		uri: "https://onesignal.com/api/v1/notifications",
		port: 443,
		method: "POST",
		headers: headers,
		body:notification,
		json:true
	};

	return request(options);

}

module.exports = Notification;