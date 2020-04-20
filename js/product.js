let shoeData = fetch("./shoes.json")
  .then((response) => response.json())
  .then((data) => console.log("ok"));

function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === "?"
    ? queryString.substr(1)
    : queryString
  ).split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

console.log(window.location);
console.log(parseQuery(window.location.search));
