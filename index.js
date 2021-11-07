//6 užduotis
const stats = [

    {
        id: 1, 
        name: 'Jonas', 
        isMale: true 
    },
    {
        id: 2, 
        name:'Petras', 
        isMale: true
    },
    {
        id: 3, 
        name: 'Paulius', 
        isMale: true
    },
    {
        id: 4, 
        name: 'Ona', 
        isMale: false
    }

]
const filteredStats = stats.filter(status => status.isMale === false)
const modified = stats.map(stat => ({id: stat.id, name: stat.name,  isFemale: isFemale =! stat.isMale}));

const numbers = [1, -2, 3, -4, 5];

const negativeNumbers = numbers.filter(n => n > 0);
const newNumbers = numbers.map(number => number = [number])
console.log("-- Sukurti masyva (Array) --")
console.log(stats)
console.log("--Isfiltruoti masyva pagal parametra isMale --")
console.log(filteredStats)
console.log("-- Panaudoti map ir sukurti nauja masyva --")
console.log(modified)
console.log("-- 6.2 - Isfiltruoti neigiami skaiciai --")
console.log(negativeNumbers);
console.log("-- 6.3-Panaudoti map ir sukurti nauja masyva -- ")
console.log(newNumbers);
