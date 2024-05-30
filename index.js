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
        //this.buckets[index] = {};
        //this.buckets[index][key] = value;
        this.buckets[index] = {...this.buckets[index], [key]:value};
    }
    get(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index] || !this.buckets[index][key]) {
            return null;
        }
        return this.buckets[index][key];
    }
    has(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index] || !this.buckets[index][key]) {
            return false;
        }
        return true;
    }
    remove(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index] || !this.buckets[index][key]) {
            return false;
        }
        delete this.buckets[index][key];
        if (Object.keys(this.buckets[index]).length === 0) {
            this.buckets[index] = undefined;
        }
        return true;
    }
    length() {
        let size = 0;
        for (const index of this.buckets) {
            if (index) {
                size++
            }
        }
        return size;
    }
    clear() {
        this.buckets = new Array(this.capacity);
    }
    keys() {
        let keys = [];
        for (const bucket in this.buckets) {
            let kvPair = this.buckets[bucket];
            for (const key in kvPair) {
                keys.push(key);
            }
            
        }
        return keys;
    }
}

const hashTable = new HashMap();
console.log(hashTable);
hashTable.set("title", "lotr");
hashTable.set("ti", "another");
hashTable.set("t", "blah");
hashTable.set("d", "overwrite");
hashTable.set("titles", "stuff");
hashTable.set("Carlos", "stuff");
hashTable.set("Carla", "stuff");
console.log(hashTable);
console.log(hashTable.get("title"));
console.log(hashTable.get("etharialle"));
console.log(hashTable.has("title"));
console.log(hashTable.has("etharialle"));

//console.log(hashTable.remove("ti"));
//console.log(hashTable.remove("t"));
console.log(hashTable);
console.log(hashTable.length());
console.log(hashTable);
//console.log(hashTable.clear());
//console.log(hashTable);
console.log(hashTable.keys());
hashTable.capacity = 32;
console.log(hashTable);
console.log(hashTable.get("title"));
