// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = makeRequest(1);

var url = "https://reqres.in/api/users?page=1";


function makeRequest(pageNum) {
	var url = "https://reqres.in/api/users?page=" + pageNum;

    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...



	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			document.querySelector("#data").innerHTML = "";
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			for(var i=0; i < jsData.data.length; i++){
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				var td2 = document.createElement("td");
				var td3 = document.createElement("td");
				var td4 = document.createElement("td");

				var ID = document.createElement("h4");
				var ID_text = document.createTextNode(jsData.data[i].id);
				ID.appendChild(ID_text);
				td1.appendChild(ID);
				tr.appendChild(td1);

				var f_name = document.createElement("h4");
				var f_name_text = document.createTextNode(jsData.data[i].first_name);
				f_name.appendChild(f_name_text);
				td2.appendChild(f_name);
				tr.appendChild(td2);

				var l_name = document.createElement("h4");
				var l_name_text = document.createTextNode(jsData.data[i].last_name);
				l_name.appendChild(l_name_text);
				td3.appendChild(l_name);
				tr.appendChild(td3);
				
				var avatar = document.createElement("img");
				avatar.setAttribute("src", jsData.data[i].avatar);
				td4.appendChild(avatar);
				tr.appendChild(td4);
				
				document.querySelector("#data").appendChild(tr);
			
			}
			
			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			document.getElementById("pgbtn1").className = "pgbtn";
			document.getElementById("pgbtn2").className = "pgbtn";
			document.getElementById("pgbtn3").className = "pgbtn";
			document.getElementById("pgbtn4").className = "pgbtn";
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			if(jsData.page == 1) {
				document.getElementById("pgbtn1").className = "active";
			}	
			else if(jsData.page == 2) {
				document.getElementById("pgbtn2").className = "active";
			}	
			else if(jsData.page == 3) {
				document.getElementById("pgbtn3").className = "active";
			}
			else if(jsData.page == 4) {
				document.getElementById("pgbtn4").className = "active";
			
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
	}
}