window.onload = startUp;

function startUp() {
	var httpReq;
	var lookUpButtn = document.getElementById("lookup");
	var allCuntryzButtn = document.getElementById("allCountries");
	
    lookUpButtn.addEventListener('click', function runLookUp(e) {
	e.preventDefault();
	httpReq = new XMLHttpRequest();

	var input = document.getElementById("country").value;
	
    if (allCuntryzButtn.checked == false && null !== input)
    {
        var url = "world.php?country=" + input;
        httpReq.onreadystatechange = load;
        httpReq.open('GET', url);
        httpReq.send();
    }
    else if (allCuntryzButtn.checked == true)
    {
	    var url = "world.php?all=true";
        httpReq.onreadystatechange = load;
        httpReq.open('GET', url);
        httpReq.send();    
	}
	else if (allCuntryzButtn.checked == false && input == null)
	{
        alert("No value entered.");
	}
});

function load () {
    if  (httpReq.readyState === XMLHttpRequest.DONE)
    {
        if (httpReq.status === 200)
        {
            var response = httpReq.responseText;
            document.getElementById('result').innerHTML = response;
        }
        else
        {
            alert("ERROR!");
        }
    }
}
};