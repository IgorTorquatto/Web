const persons = [
    {name: "Ale", vip: true},
    {name: "bele", vip: false},
    {name: "Cele", vip: true},
    {name: "Dele", vip: true},
    {name: "Ele", vip: false},
    {name: "Fele", vip: false},
]

const define_sector = (person)=>{
    let attPerson;

    if(person.vip == true){
        attPerson = {name: person.name, vip: person.vip, sector:"Black"}
        return attPerson
    }
    else{
        attPerson = {name: person.name, vip: person.vip, sector:"Green"}
        return attPerson
    }
}

const persons_by_sector = persons.map(define_sector)
console.log(persons_by_sector);