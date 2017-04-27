window.onload = (function(){
  var httpRequest;
  makeRequest("http://jsonplaceholder.typicode.com/users");
     
  
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    
    if (!httpRequest){
      console.log("Fail");
      return false;
    }
    httpRequest.onreadystatechange = printContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  function printContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var jsonResponse = JSON.parse(httpRequest.responseText);
        var randomNumber = Math.floor(Math.random() * 10);
        document.getElementById("names").innerHTML = "<p>Name: "+jsonResponse[randomNumber].name+"</p>"
        document.getElementById("user").innerHTML = "<p>User: "+jsonResponse[randomNumber].username+"</p>"
        document.getElementById("email").innerHTML = "<p>email: "+jsonResponse[randomNumber].email+"</p>"
        document.getElementById("telephone").innerHTML = "<p>telephone: "+jsonResponse[randomNumber].phone+"</p>"
        document.getElementById("company").innerHTML = "<p>Company: "+jsonResponse[randomNumber].company.name+"</p>"
      } else {
        alert("there was a problem");
      }
    }
  }
})();