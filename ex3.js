/** PROBLEM
    In this exercise the database name is learnyoumongo.
    So, the url would be something like: mongodb://localhost:27017/learnyoumongo
    
    Use the parrots collection to find all documents where age
    is greater than the first argument passed to your script.
*/

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageVar = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    // db gives access to the database
    if (err) throw err;

    db.collection('parrots').find({
        'age': { $gt: ageVar }
    }).toArray(function(err, documents) {
        console.log(documents);
    });
    db.close();
})