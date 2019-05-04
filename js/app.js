'use strict';

window.onload = function() {
    console.log(window.geemails);
    let tbl = document.getElementById('tbl');
    let email = 0;

    window.geemails.forEach(function(msg) {
        loadEmail(msg)
    }); 

    function loadEmail(msg) {
        // show number of messages
        email++;
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

        // print-content and message
        rows.onclick = function() {
            document.getElementById('message-content').innerHTML = `<b>Date:</b> ${msg.date}<br><br><b>From:</b> ${msg.sender}<br><br><b>Subject:</b> ${msg.subject}<br><br>${body}</strong>`;  
        }
        // hide/show messages  
        let hideStuff = document.querySelector('#message-content');
        rows.addEventListener('click', function() {
            if(hideStuff.style.display == 'block'){
                hideStuff.style.display = 'none'
            }else{
                hideStuff.style.display = 'block'
            }
            }
        );  
    };
    // render new random message
    setInterval(function() {
        loadEmail(getNewMessage());
    }, 10000);
};