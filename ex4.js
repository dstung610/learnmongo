/** PROBLEM
    Here we will learn how to search for documents but only fetch the fields
    we need. Also known as projection in MongoDB

    Use the parrots collection from the database named learnyoumongo to
    find all documents where age is greater than the first argument
    passed to your script.

    The difference from the last lesson will be that we only want the
    name and age properties
 
 */

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var ageVar = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    var dbparrots = db.collection('parrots');
    dbparrots.find({
        'age': { $gt: ageVar }
    }, {
        'name': 1,
        'age': 1,
        '_id': 0
    }).toArray(function(err, documents) {
        if (err) throw err;
        console.log(documents);
    })
    db.close();
})