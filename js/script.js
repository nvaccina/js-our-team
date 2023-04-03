const container = document.querySelector('.wrap-container');



const team = [
  {
    image: '<img src="img/wayne-barnett-founder-ceo.jpg"></img>',
    name: 'Wayne Barnett',
    role: 'Founder & CEO',    
  },
  {
    image: '<img src="img/angela-caroll-chief-editor.jpg"></img>',
    name: 'Angela Caroll',
    role: 'Chief Editor',
    
  },
  {
    image: '<img src="img/walter-gordon-office-manager.jpg"></img>',
    name: 'Waletr Gordon',
    role: 'Officer Manager',
  },
  {
    image: '<img src="img/angela-lopez-social-media-manager.jpg"></img>',
    name: 'Angela Lopez',
    role: 'Social Media Manager',    
  },
  {
    image: '<img src="img/scott-estrada-developer.jpg"></img>',
    name: 'Scott Estrada',
    role: 'Developer',    
  },
  {
    image: '<img src="img/barbara-ramos-graphic-designer.jpg"></img>',
    name: 'Barbara Ramos',
    role: 'Graphic Designer',    
  }
]
for(let element of team){
  console.log(element);

  const card = document.createElement('div');
  card.classList.add('card');
  document.querySelector('.wrap-container').appendChild(card);

  for(let key in element){
    console.log(element[key]);

    const memeber = element[key];
    card.innerHTML += `    
      <div>${memeber}</div>
    `
  }
}