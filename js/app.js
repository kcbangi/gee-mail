'use strict';

window.onload = function() {
	console.log(window.geemails);
	let tbl = document.getElementById('tbl');
	let email = 0;

	window.geemails.forEach(function(msg) {
		loadEmail(msg)
	}); 

	function loadEmail(msg) {
		email++;
		// show number of messages
		document.getElementById('inbox').innerHTML = `Inbox ${email}`;
		
		// create row and cell for the email
		let rows = tbl.insertRow(1);
		let senderCell = rows.insertCell(0);
		senderCell.innerHTML = msg.sender;
		let subjectCell = rows.insertCell(1);
		subjectCell.innerHTML = msg.subject;
		let dateCell = rows.insertCell(2);
		dateCell.innerHTML = msg.date;
		let body = msg.body;

		// print info and message
		rows.onclick = function() {
			document.getElementById('email-info').innerHTML = `${msg.date}<br>${msg.sender}<br>${msg.subject}`;
			document.getElementById('email-content').innerHTML = `${body}`;
		}
	};
	// render new message
	setInterval(function() {
		loadEmail(getNewMessage());
	}, 8000)
};