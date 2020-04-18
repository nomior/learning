const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employersNames = employers.map((item) => item.toLowerCase().trim()).filter((name) => {return name.length > 0});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;
const sumSponsor = [...eu, ...rus, 'unexpected snonsor'];
let money = cash.reduce((sum,current) => {return sum+current},0);

function makeBusiness({cash, emp, owner = 'Sam', director = 'Victor'}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsor}`);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});