import { LinkedList } from "./linkedList.mjs";
import { Node } from "./linkedList.mjs";
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
        if (this.length() >= this.capacity * this.loadFactor){
            this.resize();
        }
        const index = this.hash(key) % this.capacity;
        const nodeValue = {[key]:value}
        const newNode = new Node(nodeValue);
        if (!this.buckets[index]) {
            const newList = new LinkedList();
            newList.append(newNode);
            this.buckets[index] = newList;
            return;
        }
        this.buckets[index].append(newNode);
    }
    get(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index]) {
            return null;
        }
        const listPosition = this.buckets[index].find(key);

        return this.buckets[index].at(listPosition).value[key];
    }
    has(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index] || this.buckets[index].find(key) === false) {
            return false;
        }
        return true;
    }
    remove(key) {
        const index = this.hash(key) % this.capacity;
        if (!this.buckets[index] || this.buckets[index].find(key) === false) {
            return false;
        }
        const deleteNodeIndex = this.buckets[index].find(key);
        this.buckets[index].removeAt(deleteNodeIndex);
        return true;
    }
    length() {
        let size = 0;
        for (const index of this.buckets) {
            if (index) {
                size += index.getSize();
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
            const listSize = this.buckets[bucket].getSize()
            for (let i = 0; i < listSize; i++) {
                keys.push(this.buckets[bucket].at(i).value);
            }
            }
        let newKeys = []
        for (const index of keys) {
            for (const key in index) {
                newKeys.push(key);
            }
        }
        return newKeys;
    }
    values() {
        let keys = [];
        for (const bucket in this.buckets) {
            const listSize = this.buckets[bucket].getSize()
            for (let i = 0; i < listSize; i++) {
                keys.push(this.buckets[bucket].at(i).value);
            }
            }
        let newKeys = []
        for (const index of keys) {
            for (const key in index) {
                newKeys.push(index[key]);
            }
        }
        return newKeys;
    }
    entries() {
        const keys = this.keys();
        const values = this.values();
        let entriesArray = [];
        for (let i = 0; i < keys.length; i++) {
            entriesArray.push([keys[i], values[i]]);
        }
        return entriesArray;
    }
    resize() {
        const entriesArray = this.entries();
        this.capacity *= 2;
        this.clear();
        for (const entry of entriesArray) {
            this.set(entry[0],entry[1]);
        }
    }
}

const hashTable = new HashMap();
hashTable.set("title", "lotr");
hashTable.set("ti", "another");
hashTable.set("t", "blah");
hashTable.set("d", "overwrite");
hashTable.set("titles", "stuff");
hashTable.set("Carlos", "stuff");
hashTable.set("Carla", "stuff");
hashTable.set("Etharialle", "awesome");
hashTable.set("TOP", "the best");
hashTable.set("Numbers", 0);
hashTable.set("c", "stuff");
hashTable.set("f", "stuff");
hashTable.set("g", "stuff");
hashTable.set("h", "stuff");
hashTable.set("i", "stuff");
console.log(hashTable.get("t"));
console.log(hashTable.get("etharialle"));
console.log(hashTable.has("title"));
console.log(hashTable.has("etharialle"));
console.log(hashTable.remove("ti"));
console.log(hashTable.remove("t"));
console.log(hashTable);
console.log(hashTable.length());
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.entries());
console.log(hashTable);