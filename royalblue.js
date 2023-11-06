fetch("https://co.wuk.sh", {
  method: "POST",
  body: JSON.stringify({
    url: https://www.youtube.com/watch?v=M3IGrj7g0fA
  }),
  headers: {
    Content-type: application/json
    Accept: application/json
  }
});
  .then((response) => response.json())
  .then((json) => console.log(json));

