var arrNames = [];

var i;
var userName;

  for (i = 0; i < 5; i++) {
    arrNames[i] = prompt('Filling array user names');
}

userName = prompt('Enter user names');

for (i = 0; i < arrNames.length; i++) {
  if (arrNames[i] == userName) {
      alert(userName + ' You successfull enter');
      break;
  } else if (i ==(arrNames.length - 1)) {
      alert('False  user  name, you do not enter!')
  }
}
