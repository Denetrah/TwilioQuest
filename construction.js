function construct(name) {
    let person = {};
        person.name = name;
        person.material="human";
        person.assemble = true;
        person.duration = 1000;
    

     return person;
}

const somePerson = construct('Irene');
console.log('name is:' + somePerson.name);
console.log('duration is:' + somePerson.duration)