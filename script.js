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
var ul = document.createElement("ul");
for (var i = 0; i < results.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = results[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var searchQuery = document.querySelector("input[name='search']").value;
  search(searchQuery);
});
