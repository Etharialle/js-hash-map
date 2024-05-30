//if (index < 0 || index >= buckets.length) {
//    throw new Error("Trying to access index out of bound");
//}

  class HashMap {
    constructor (capacity = 16, loadFactor = .75, buckets) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity);
        
    }
    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key, value) {
        const index = this.hash(key) % this.capacity;
        this.buckets[index] = value;
    }
}

const hashTable = new HashMap();
console.log(hashTable);
hashTable.set("title", "lotr");
console.log(hashTable);

