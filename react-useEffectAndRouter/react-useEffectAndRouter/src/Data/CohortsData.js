
const studentsCohortRanger = [
    {name: "Abdullah", age: 30, height: 8 },
    {name: "Soliu", age: 40, height: 4 },
    {name: "Dolu", age: 10, height: 3 },
    {name: "Aishat", age: 20, height: 4 },
    {name: "Fateemah", age: 50, height: 6},
];

const studentsCohortIdan= [
    {name: "Suli", age: 10, height: 1 },
    {name: "Segun", age: 50, height: 3 },
    {name: "Dolu", age: 10, height: 4},
    {name: "Zimbi", age: 25, height: 7 },
    {name: "Fateemah", age: 55, height: 2},
];


const cohortsData = [
    {id: 1,  
    name: "ranger",
    mentor: "Raji",
    students: studentsCohortRanger, 
    studentsNum: studentsCohortRanger.length,
},
    {id: 2,  
    name: "Idan",
    mentor: "Idrees",
    students: studentsCohortRanger, 
    studentsNum: studentsCohortIdan.length,
}
];

export default  cohortsData