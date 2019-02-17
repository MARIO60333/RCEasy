var Discord_ClientID;

function texta(e) {
  if (e.keyCode == 13) {
      var input = document.getElementsByClassName('texta')[0];
      Discord_ClientID = input.value;
      console.log(input.value);
      location.href = "./main-2.html";
      return false;
  }
}
