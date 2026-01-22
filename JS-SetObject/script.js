// Set Object and Its Methods Example

// Normal array (allows duplicates)
const array = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(array);

// Creating a Set (automatically removes duplicates)
const set = new Set([1, 2, 3, 4, 5, 1, 2, 3]);
console.log(set);
console.log(set.size); // 5

// add() - Adds a new element to the set
console.log(set.add(6));
console.log(set.size); // 6

// delete() - Deletes a value from the set
console.log(set.delete(3)); // true → deletion successful
console.log(set.size); // 5
console.log(set); // Set(5) {1, 2, 4, 5, 6}

// has() - Checks if value exists in the set
console.log(set.has(4)); // true
set.clear();
console.log(set.size); // 0

// / Iterating a set using for...of loop
for (item of set) {
  console.log(item);
}

// Set Operations (Custom Implementations)
const names1 = new Set(["Nagu", "Ashok", "Hemanth"]);
const names2 = new Set(["Sai Babu", "Narendra", "Praveen", "Nagu", "Ashok"]);
console.log(names1);
console.log(names2);

// union - Combines unique elements from both sets
const unionNames = names1.union(names2);
console.log(unionNames);

// intersection - Common elements in both sets
const interset = names1.intersection(names2);
console.log(interset); // Nagu

// DIFFERENCE - Elements in names1 but not in names2
const diffSet = names1.difference(names2);
console.log(diffSet);

// symmetricDifference - Elements present in either set but not in both
const symmDiff = names1.symmetricDifference(names2);
console.log(symmDiff);

// Subset Check
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([2, 3, 4, 5]);

const finalSet = set1.isSubsetOf(set2);
console.log(finalSet); // false
