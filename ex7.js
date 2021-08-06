/** PROBLEM
 * This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script.
 */

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(err, db) {
    var currentDB = db.collection(collectionName);
    var query = { '_id': id };

    currentDB.deleteOne(query, function(err, rs) {
        if (err) throw err;
        console.log(rs.result);
    });
    db.close();
})




/** SOLUTION
 * var mongo = require('mongodb').MongoClient
    
    var url = 'mongodb://localhost:27017/' + process.argv[2]
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection(process.argv[3])
      collection.remove({
        _id: process.argv[4]
      }, function(err) {
        if (err) throw err
        db.close()
      })
    })
 */