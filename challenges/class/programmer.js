// vector and objects

const programmer = {
    name: 'Carlos',
    age: 32,
    technologies: [
        { name: "C++", speciality: "Desktop" },
        { name: 'Python', speciality: 'Data Science' },
        { name: "JavaScript", speciality: "Web/Mobile" }
    ]
}

console.log(`The user ${programmer.name} is ${programmer.age} years old and uses technology ${programmer.technologies[0].name} with speciality in ${programmer.technologies[0].speciality}`)
