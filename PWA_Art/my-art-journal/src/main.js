var dbPromise = idb.open('imageScaling', 1, function(db) {

    if (!db.objectStoreNames.contains('conversions')) {
    db.createObjectStore('conversions', {keyPath: 'rowId', autoIncrement: true});
  }   
});




function calculate() {
    var thisbaseMeasurement = document.getElementById('baseMeasurement').value;
    var thiscanvas = document.getElementById('canvas').value;

    console.log("calculating . . . ")
    return dbPromise
    .then(function(db) {
       console.log("connected to db . . . ")
       console.log("The picture size is ", thisbaseMeasurement);
       console.log("The canvas size is ", thiscanvas);
        // create the variable (the data to be put in the database)
        var writeToDB = { baseMeasure: thisbaseMeasurement, canvaseMeasure: thiscanvas};
        // Opens up the connection to the objectStore (tabel) in readwrite -using lib in idb.js
        var tx = db.transaction('conversions', 'readwrite'); //name of Object(table in db)
        var store = tx.objectStore('conversions');
        // putting data to transacton that has been set up (writing data to db)
        store.put(writeToDB)
        .then(function(writeResults){
            console.log('in function writeResults . . . ');
            var tx = db.transaction('conversions', 'readonly'); //name of Object(table in db)
            var store = tx.objectStore('conversions');
            store.getAll()
            .then (function(readAllResults){
                console.log('Read results :', readAllResults);
                var clearlist = document.getElementById('allDataList').innerHTML = '';
                

                for (var item in readAllResults){
                    var itemList = document.getElementById('allDataList').innerHTML += '<li>Base : '+readAllResults[item].baseMeasure + ' Canvas : ' + readAllResults[item].canvaseMeasure;
                    var clear1 = document.getElementById('baseMeasurement').value = '';
                    var clear1 = document.getElementById('canvas').value = '';

                }
            })
        })
    });
}

//if ('serviceWorker' in navigator) {
//  navigator.serviceWorker
//    .register('serviceWorker.js')
//    .then(function () {
//      console.log('Service worker registered!');
//    })
//    .catch(function(err) {
//      console.log(err);
//    });
//} 
