var randomNumber = Math.floor(Math.random() * 10);

(function(){
  var httpRequest;
  getUserInfo("http://jsonplaceholder.typicode.com/users");
     
  
  function getUserInfo(url) {
    httpRequest = new XMLHttpRequest();
    
    if (!httpRequest){
      console.log("Fail");
      return false;
    }
    httpRequest.onreadystatechange = printUserInfo;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  function printUserInfo() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var jsonResponse = JSON.parse(httpRequest.responseText);
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

(function(){
  var httpRequest;
  getAlbumInfo("http://jsonplaceholder.typicode.com/albums");
     
  
  function getAlbumInfo(url) {
    httpRequest = new XMLHttpRequest();
    
    if (!httpRequest){
      console.log("Fail");
      return false;
    }
    httpRequest.onreadystatechange = printAlbumInfo;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  function printAlbumInfo() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var jsonResponse = JSON.parse(httpRequest.responseText);
        document.getElementById("albumname").innerHTML = "<p>Album Name: "+jsonResponse[randomNumber].title+"</p>"
        
      } else {
        alert("there was a problem");
      }
    }
  }
})();

(function(){
  var httpRequest;
  getPhotoInfo("http://jsonplaceholder.typicode.com/photos");
     
  
  function getPhotoInfo(url) {
    httpRequest = new XMLHttpRequest();
    
    if (!httpRequest){
      console.log("Fail");
      return false;
    }
    httpRequest.onreadystatechange = printPhotoInfo;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  function printPhotoInfo() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var jsonResponse = JSON.parse(httpRequest.responseText);
        document.querySelector(".myImg").src = jsonResponse[randomNumber].thumbnailUrl
        document.querySelector('model-content').src = jsonResponse[randomNumber].url
      } else {
        alert("there was a problem");
      }
    }
  }

  var modal = document.getElementById('modal');
  var img = document.querySelector('myImg');
  var modalImg = document.getElementById('img01');

  img.onclick = function(){
  	modal.style.display = "block";
  	modalImg.src = this.src;
  }

  var span = document.querySelector('close');
  span.onclick = function(){
  	modal.style.display = "none";
  }
})();