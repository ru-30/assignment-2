const students = [
    { id: 1, name: "Jolivet", age: 24 },
    { id: 2, name: "Aline", age: 21 },
    { id: 3, name: "Kevin", age: 28 },
    { id: 4, name: "Sarah", age: 19 }
];

export const searchById = (id) => {
    const student = students.find(student => student.id === id);
    return student || "Student not found";
};

export const searchByName = (name) => {
    const student = students.find(student => 
        student.name.toLowerCase() === name.toLowerCase()
    );
    return student || "No student with that name";
};

export const filterByAge = (minAge) => {
    return students.filter(student => student.age >= minAge);
};