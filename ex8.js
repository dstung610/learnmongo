/** PROBLEM
 * Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.

Using console.log, print the number to stdout.

## HINTS

To count the number of documents meeting certain criteria,
we must use the collection.count() function.

Here is an example:

    collection.count({
      name: 'foo'
    }, function(err, count) {
    
    })


*/


var mongo = require('mongodb').MongoClient
var dbName = 'learnyoumongo';
var collectionName = 'parrots';
var url = 'mongodb://localhost:27017/' + dbName;
var age = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
    if (err) throw err;

    var collection = db.collection(collectionName);

    // collection.find({}).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    // })
    var query = { 'age': { $gt: age } };
    collection.count(query, function(err, res) {
        if (err) throw err;
        console.log(res);
    })
    db.close();
})


/** SOLUTION
 *     var mongo = require('mongodb').MongoClient
    var age = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.count({
        age: {
          $gt: +age
        }
      }, function(err, count) {
        if (err) throw err
        console.log(count)
        db.close()
      })
    })
 */