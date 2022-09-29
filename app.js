const express = require("express");

const app = express();

app.get("/me", (request, response) => {
  console.log(request.method);
  response.status(200).json({
    nombre: "jose alejandro",
    edad: 23,
    pais: "Venezuela",
    verb: request.method,
  });
});
app.post("/metas", (request, response) => {
  console.log(request.method);
  response.status(200).json({
    hobbies: "read, play and research",
    verb: request.method,
  });
});
app.patch("/metas", (request, response) => {
  console.log(request.method);
  response.status(200).json({
    goal: `* get a job that gives me economic stability and helps me grow professionally \n *work at a big video game company`,
    verb: request.method,
  });
});
app.put("/business", (request, response) => {
  console.log(request.method);
  response.status(200).json({
    bussiness: `* RIOT
     *MONTOLL 
      *Square Enix`,
    verb: request.method,
  });
});
app.listen(8000, () => {
  console.log("server started at port 8000");
});
