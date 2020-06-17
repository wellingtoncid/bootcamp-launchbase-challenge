// Users and technologies

const users = [
    { name: 'Carlos', technologies: ['HTML', 'CSS'] },
    { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
    { name: 'Tuane', technologies: ['HTML', 'Node.js'] }
];

// Search for technologies

function checkIfUserUseCSS(user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUserUseCSS(users[i]);

    if (userWorksWithCSS) {
        console.log(`User ${users[i].name} works with CSS`);
    }
}
