/* 1-Manager-Schema
 * -/-/-/-/-/-/-/-/- */


/* INSTRUCTIONS: 
 * A) Create a store database in mysql: "CREATE DATABASE store0;"
 * B) Create the manager model with Sequelize CLI.
 * C) Extract the manager model into server.js 
 *    by requiring the model directory.
 * D) Sync your model with models.sequelize.sync()
 * E) Connect the above sync with a .then().
 			Inside the .then, write an anonymous function that
			uses the Manager model to create a manager in your database.
 * E) Run the file with node and check your mysql database 
 *    to check if it created the manager table and field
 * 
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

 // bring in our Sequelize models object
var models = require('./models')

models.sequelize.sync()

.then(function(){

  return models.manager.create({
    fullName: "Brad Lakes",
    storeZip: "07748",
    uniformColor: "Teal",
    uniformNumber: "9731"
  })
});



// TODO: bring in our Sequelize models object


// TODO: Sync our models


// TODO: attach .then to the sync
//       and Create our Manager in the callback
// ================================================


