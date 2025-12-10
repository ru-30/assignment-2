import { 
    searchById, 
    searchByName, 
    filterByAge 
} from "./search.js";

console.log("\n--- Student Search Functions ---");


const student1 = searchById(1);
const student5 = searchById(5);
console.log(`Search by ID (Valid): ${typeof student1 === 'object' ? JSON.stringify(student1) : student1}`);
console.log(`Search by ID (Invalid): ${student5}`);

const jolivet = searchByName("joLiVeT");
const paul = searchByName("Paul");

console.log(
    `\nSearch by Name ("joLiVeT"): ${
        typeof jolivet === 'object' 
            ? `Found student: ${JSON.stringify(jolivet)}`
            : paul
    }`
);
console.log(`Search by Name ("Paul"): ${paul}`);

const filteredStudents = filterByAge(21);
console.log(`\nStudents aged 21 and above: ${
        filteredStudents.length > 0 
            ? JSON.stringify(filteredStudents) 
            : "No students found"
    }`
);