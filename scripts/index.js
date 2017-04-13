function password() {
  var inputLength = document.getElementById('input').value;
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*();:[]{}";

  for( var i=0; i < inputLength; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.getElementById('output').innerHTML = text;
}
