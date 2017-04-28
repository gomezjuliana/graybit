const randomNumber = Math.floor(Math.random() * 10);

(function(){
  let httpRequest;
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
        let jsonResponse = JSON.parse(httpRequest.responseText);
        document.getElementById("names").innerHTML = "<p><strong>Name: </strong>"+jsonResponse[randomNumber].name+"</p>"
        document.getElementById("user").innerHTML = "<p><strong>User: </strong>"+jsonResponse[randomNumber].username+"</p>"
        document.getElementById("email").innerHTML = "<p><strong>Email: </strong>"+jsonResponse[randomNumber].email+"</p>"
        document.getElementById("telephone").innerHTML = "<p><strong>Telephone: </strong>"+jsonResponse[randomNumber].phone+"</p>"
        document.getElementById("company").innerHTML = "<p><strong>Company: </strong>"+jsonResponse[randomNumber].company.name+"</p>"
      } else {
        alert("there was a problem");
      }
    }
  }
})();

(function(){
  let httpRequest;
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
        let jsonResponse = JSON.parse(httpRequest.responseText);
        document.getElementById("albumname").innerHTML = "<p><strong>Album Name: </strong>"+jsonResponse[randomNumber].title+"</p>"
      } else {
        alert("there was a problem");
      }
    }
  }
})();

(function(){
  let httpRequest;
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
        document.getElementById("myImg").src = jsonResponse[randomNumber].thumbnailUrl
      } else {
        alert("there was a problem");
      }
    }

    let modal = document.getElementById('myModal');
    let img = document.getElementById('myImg');
    let modalImg = document.getElementById('img01');
  
    img.onclick = function(){
  	  modal.style.display = "block";
  	  modalImg.src = jsonResponse[randomNumber].url;
    }

    let span = document.querySelector('.close');
    span.onclick = function(){
  	  modal.style.display = "none";
    }
  }
})();