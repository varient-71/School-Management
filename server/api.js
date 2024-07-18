import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectionString = "mongodb://127.0.0.1:27017";
// const connectionString = "mongodb://localhost:27017";

const app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

// Rest of your code...

// For example, starting the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(express.json());
app.get("/",(req,res) => {
    const htmlResponse = `
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome to the School Management System!</h1>
        <p>Use the endpoints to manage users.</p>
      </body>
    </html>
  `
  res.send(htmlResponse);
});
app.get("/users", (request,response)=>{
    MongoClient.connect(connectionString).then((clientObject)=>{
      var database = clientObject.db("SchoolManagement");
      database.collection("tbl_register").find({}).toArray().then((documents)=>{
        response.send(documents);
      })
    })
  });
  
// post method to submit
  app.post("/registeruser", (request , response)=>{
    var user ={
      "UserName": request.body.UserName,
      "Password": request.body.Password,
      "Email": request.body.Email,
      "Mobile": request.body.Mobile,
    }
    response.send(user)
    // MongoClient.connect(connectionString).then(clientObject=>{
    //   var database = clientObject.db("SchoolManagement");
    //   database.collection("tbl_register").insertOne(user).then(result=>{
    //     console.log("Record Inserted");
    //     response.redirect("/users");
  
    //   })
  
    //  })
  });
// app.post("/registeruser", (request, response) => {
//     const user = {
//       "UserName": request.body.UserName,
//       "Password": request.body.Password,
//       "Email": request.body.Email,
//       "Mobile": request.body.Mobile,
//     };
//     console.log( "user: ",user)
  
// //     MongoClient.connect(connectionString).then(clientObject => {
// //       const database = clientObject.db("SchoolManagement");
// //       database.collection("tbl_register").insertOne(user).then( result => {
// //         console.log("Record Inserted");
// //         response.status(200).json({ message: "Record Inserted" });
// //       }).catch(error => {
// //         console.error('Error inserting record:', error);
// //         response.status(500).json({ message
// //   : "Error inserting record" });
// //   });
//   }).catch(error => {
//   console.error('Failed to connect to the database:', error);
//   response.status(500).json({ message: "Failed to connect to the database" });
//   });
//   });
// // app.listen(8080);
// // console.log(`server started : http://127.0.0.1:8080`);