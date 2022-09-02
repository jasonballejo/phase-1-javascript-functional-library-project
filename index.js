function normalizeCollection(collection) {
    if (Array.isArray(collection)) {
        return collection.slice()
    } else {
        return Object.values(collection)
    }
}

function myEach(collection, callback) {
    let normColl = normalizeCollection(collection)
    // console.log('Collection:', collection)
    // console.log('Normalized:', normColl)

    for (let i = 0; i < normColl.length; i++) {
        callback(normColl[i])
      }
      return collection
}

function myMap(collection, callback){
    let normColl = normalizeCollection(collection)
    // console.log('Collection:', collection)
    // console.log('Normalized:', normColl)

    let newArray = []
    for (let i = 0; i < normColl.length; i++){
        newArray.push(callback(normColl[i]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let normColl = normalizeCollection(collection)
    // console.log('Collection:', collection)
    // console.log('Normalized:', normColl)
    // console.log('ACC:', acc)

    if (!acc) {
        acc = normColl[0]
        normColl = normColl.slice(1)
    }
    for (let i = 0; i < normColl.length; i++){
        acc = callback(acc, normColl[i], normColl)
    } 
    return acc
}

function myFind(collection, predicate) {
    let normColl = normalizeCollection(collection)
    // console.log('Normalized:', normColl)
    // console.log('Pred:', predicate)

    for (let i = 0; i < normColl.length; i++){
        if (predicate(normColl[i])) return normColl[i]
    } 
}

function myFilter(collection, predicate){
    let normColl = normalizeCollection(collection)
    
    let newArray = []
    for (let i = 0; i < normColl.length; i++){
    if (predicate(normColl[i])) newArray.push(normColl[i]);
    }
    return newArray
}

function mySize(collection){
    let normColl = normalizeCollection(collection)
    // console.log('Normalized:', normColl)

    return normColl.length
}

function myFirst(array, n){

    return (n) ? array.slice(0, n) : array[0];
}

function myLast(array, n){
    // console.log(array)
    // console.log(n)

    return n ? array.slice(array.length -n): array[array.length -1]
}

function myKeys(object){
    // console.log('Object:', object)

    let propertyName = Object.keys(object)
    return propertyName
}

function myValues(object){
    console.log('Object:', object)
    let propertyName = Object.values(object)
    console.log('Updated:', propertyName)

    return propertyName
}