window.onload = startUp;

function startUp {
	var httpReq;
	var lookUpButtn = document.getElementById("lookup");
	lookUpButtn.addEventListener('click', runLookUp()

function runLookUp(e) {
	e.preventDefault();
	httpReq = new XMLHttpRequest();

	var input = document.getElementById("country").value;
    
    var url = "world.php?country=" + input;
    httpReq.onreadystatechange = load;
    httpReq.open('GET', url);
    httpReq.send();
});

function load () {
    if  (httpReq.readyState === XMLHttpRequest.DONE)
    {
        if (httpReq.status === 200)
        {
            var response = httpReq.responseText;
            var input = document.getElementById("country").value;
            alert(document.getElementById("result").innerHTML = response);
        }
        else
        {
            alert('ERROR!');
        }
    }
}
};