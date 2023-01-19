var xhr = new XMLHttpRequest();
xhr.open("GET", "words.txt", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var words = xhr.responseText.split("\n");
  }
};
xhr.send();
var words = xhr.responseText.split("\n");
var results = words.filter(function(word) {
  return word.indexOf(searchQuery) !== -1;
});
