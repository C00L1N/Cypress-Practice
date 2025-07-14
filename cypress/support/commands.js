// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('genderGenerator', () => {
    const gender = Math.floor(Math.random() * 2);
    return cy.wrap(gender);
})

Cypress.Commands.add('maleFirstNameGenerator', () => {
        const maleFirstNames = [
        "Liam", "Noah", "Oliver", "Elijah", "James",
        "William", "Benjamin", "Lucas", "Henry", "Alexander",
        "Jackson", "Sebastian", "Aiden", "Matthew", "Samuel",
        "David", "Joseph", "John", "Andrew", "Isaac",
        "Anthony", "Dylan", "Luke", "Gabriel", "Owen",
        "Wyatt", "Caleb", "Christian", "Mason", "Ethan",
        "Logan", "Ryan", "Charles", "Jeremiah", "Adam",
        "Nolan", "Jonathan", "Joshua", "Jaxon", "Zachary",
        "Carter", "Hunter", "Julian", "Easton", "Grayson",
        "Jasper", "Leonardo", "Max", "Xavier", "Ezra",
        "Brody", "Tristan", "Vincent", "Bryson", "Cole",
        "Miles", "Eli", "Luca", "Santiago", "Asher",
        "Ryder", "Theo", "Beckett", "Roman", "Giovanni",
        "August", "Silas", "Riley", "Elliot", "Tobias",
        "Kaden", "Jett", "Judah", "Seth", "Landen",
        "Reed", "Emmett", "Finn", "Kendrick", "Dante",
        "Rafael", "Amari", "Darius", "Khalil", "Malik",
        "Wesley", "Soren", "Keegan", "Alvin", "Zane",
        "Jace", "Gideon", "Nicolas", "Hugo", "Dorian",
        "Lorenzo", "Malcolm", "Desmond", "Harrison", "Conner",
        "Quentin", "Cyrus", "Leon", "Orion", "Troy",
        "Cody", "Derek", "Warren", "Vance", "Marshall",
        "Damon", "Kurt", "Tanner", "Grant", "Alfred",
        "Gerald", "Leonard", "Rex", "Russell", "Raymond",
        "Lyle", "Eugene", "Freddie", "Calvin", "Daryl",
        "Elias", "Floyd", "Kirk", "Ricky", "Tracy",
        "Hugo", "Jeffery", "Felix", "Marco", "Graham",
        "Kendall", "Darius", "Bobby", "Levi", "Omar",
        "Isaiah", "Brooks", "Paxton", "Sullivan", "Quinlan"
    ];

    const randomIndex = Math.floor(Math.random() * maleFirstNames.length);
    const generateMaleFirstName = maleFirstNames[randomIndex];

    return cy.wrap(generateMaleFirstName)
})

Cypress.Commands.add('femaleFirstNameGenerator', () => {
    const femaleFirstNames = [
        "Emma", "Olivia", "Ava", "Sophia", "Isabella",
        "Mia", "Amelia", "Harper", "Evelyn", "Abigail",
        "Ella", "Scarlett", "Grace", "Chloe", "Aria",
        "Layla", "Lily", "Riley", "Zoey", "Nora",
        "Hannah", "Lillian", "Addison", "Lucy", "Natalie",
        "Aubrey", "Savannah", "Audrey", "Brooklyn", "Bella",
        "Claire", "Skylar", "Mila", "Samantha", "Kinsley",
        "Allison", "Katherine", "Violet", "Madison", "Elizabeth",
        "Penelope", "Sophie", "Aaliyah", "Hazel", "Ivy",
        "Autumn", "Lydia", "Willow", "Cora", "Adeline",
        "Delilah", "Luna", "Victoria", "Nadia", "Arianna",
        "Genevieve", "Maria", "Mackenzie", "Sloane", "Cecilia",
        "Maya", "Daisy", "Kylie", "Emery", "Raelynn",
        "Ruth", "Joanna", "Sienna", "Katherine", "Leah",
        "Brielle", "Piper", "Emilia", "Jasmine", "Norah",
        "Vivian", "Margaret", "Iris", "Raven", "Sadie",
        "Tessa", "Harley", "Juliet", "Margot", "Zara",
        "Lola", "Madeline", "Gia", "Miriam", "Nancy",
        "Esther", "Paige", "Ellie", "Ainsley", "Francesca",
        "Seraphina", "Dahlia", "Carmen", "Kendra", "Rosalie",
        "Athena", "Lila", "Hope", "Callie", "Fiona",
        "Alina", "Esme", "Sabrina", "Adele", "Giselle",
        "Margo", "Ember", "Bianca", "Elena", "Ophelia",
        "Celeste", "Savanna", "Freya", "Talia", "Isla",
        "Brianna", "Sierra", "Sophie", "Megan", "Kayla",
        "Dakota", "Kiera", "Chloe", "Anastasia", "Jada",
        "Lorelei", "Zoe", "Ariella", "Mikayla", "Tara",
        "Athena", "Beatrice", "Jade", "Gwendolyn", "Penny",
        "Nina", "Felicity", "Rhea", "Simone", "Ariana",
        "Elise", "Shelby", "Noelle", "Vivienne", "Kaitlyn"
    ];

    const randomIndex = Math.floor(Math.random() * femaleFirstNames.length);
    const randomFemaleFirstName = femaleFirstNames[randomIndex];

    return cy.wrap(randomFemaleFirstName);
})

Cypress.Commands.add('lastnameGenerator', () => {
    const lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
        "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
        "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
        "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
        "Hall", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen",
        "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera",
        "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans",
        "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
        "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan",
        "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox",
        "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James",
        "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood",
        "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell",
        "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler",
        "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell",
        "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham",
        "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Coleman",
        "Harrison", "Fisher", "Ellis", "Hicks", "Gilbert", "Bishop", "Floyd"
    ];


    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return cy.wrap(randomLastName);
})

Cypress.Commands.add('middlenameGenerator', () => {
    const middleNames = [
        "James", "Lee", "Marie", "Ann", "John", "Lynn", "Rose", "Grace", "David", "Alice",
        "Joseph", "Kay", "Michael", "Jean", "Elizabeth", "Anne", "Claire", "Nicole",
        "Paul", "Taylor", "Diane", "Victoria", "Eve", "Mae", "Renee", "Hope",
        "Joy", "Faith", "Scott", "Sloane", "Morgan", "Bailey", "Peyton", "Harper",
        "Cameron", "Avery", "Jordan", "Skye", "Quinn", "Parker", "Reese", "Sierra",
        "Kendall", "Brooke", "Shannon", "Casey", "Tatum", "Blake", "Riley",
        "Jaden", "Cody", "Zoe", "Clara", "Hazel", "Olivia", "Abigail", "Isla",
        "Lila", "Nora", "Stella", "Scarlett", "Piper", "Layla", "Ivy", "Gianna",
        "Madeline", "Sabrina", "Phoebe", "Natalie", "Kylie", "Ariana", "Cassidy",
        "Carmen", "Ruth", "Megan", "Lynn", "Dawn", "George", "Robert", "Thomas",
        "Edward", "William", "Henry", "Charles", "Benjamin", "Daniel", "Matthew",
        "Alexander", "Christopher", "Samuel", "Lucas", "Nathan", "Simon", "Joseph"
    ];

    const randomMiddleName = middleNames[Math.floor(Math.random() * middleNames.length)];

    return cy.wrap(randomMiddleName);
})

Cypress.Commands.add('phoneNumberGenerator', () => {
    const prefixes = [
        "0917", "0927", "0939", "0949",
        "0918", "0919", "0998", "0920",
        "0922", "0935", "0936", "0946",
        "0906", "0908", "0910", "0911",
        "0912", "0913", "0914", "0915",
        "0916", "0917", "0918", "0919",
        "0921", "0923", "0924", "0925",
        "0926", "0928", "0929", "0930",
        "0931", "0932", "0933", "0934",
        "0937", "0938", "0940", "0941",
        "0942", "0943", "0944", "0945",
        "0947", "0948", "0949", "0950",
        "0951", "0952", "0953", "0954",
        "0955", "0956", "0957", "0958",
        "0959", "0960", "0961", "0962",
        "0963", "0964", "0965", "0966",
        "0967", "0968", "0969", "0970",
        "0971", "0972", "0973", "0974",
        "0975", "0976", "0977", "0978",
        "0979", "0980", "0981", "0982",
        "0983", "0984", "0985", "0986",
        "0987", "0988", "0989", "0990",
        "0991", "0992", "0993", "0994",
        "0995", "0996", "0997", "0999"
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const remainingDigits = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');

    return cy.wrap(`${randomPrefix}${remainingDigits}`);
})

Cypress.Commands.add('emailaddressGenerator', () => {
    const domains = [
        "example.com",
        "gmail.com"
    ]

    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return cy.wrap(randomDomain);
}) 

Cypress.Commands.add('generatePassword', (length = 12) => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  const allChars = lowercase + uppercase + numbers + symbols;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
    password += randomChar;
  }

  return cy.wrap(password); // wrap the value so Cypress can use it in .then()
});
