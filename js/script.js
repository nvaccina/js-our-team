const container = document.querySelector('.wrap-container');
const card = document.createElement('div');
const image = document.createElement('img');
card.classList.add('card');


const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: '<img>src="img/wayne-barnett-founder-ceo.jpg"</img>',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: '<img>src="img/angela-caroll-chief-editor.jpg"</img>',
  },
  {
    name: 'Waletr Gordon',
    role: 'Officer Manager',
    image: '<img>src="img/walter-gordon-office-manager.jpg"</img>',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: '<img>src="img/angela-lopez-social-media-manager.jpg"</img>',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: '<img>src="img/scott-estrada-developer.jpg"</img>',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: '<img>src="img/barbara-ramos-graphic-designer.jpg"</img>',
  }
]
for(let member of team){
  console.log(member);
  card.innerHTML += `${member}`

  for(let key in member){
    console.log(key, member[key]);
    card.innerHTML += `
    <div>${key}:${member[key]}</div>
    `
  }
}