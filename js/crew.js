let id = 0;

let crew = {
	"members": [
		{
			"id": 1,
			"image": "images/crew/chewbacca.jpg",
			"name": "Chewbacca",
			"role": "Captain",
			"description": "A simple guy, legendary wookie warrior, shampoo lover and space-travel enthusiast.",
			"skills": "Blasters, lasers, and hand-to-hand combat"
		},
		{
			"id": 2,
			"image": "images/crew/yoda.jpg",
			"name": "Yoda",
			"role": "Master",
			"description": "The Grand Master of the Jedi Order.  Let the force be with us.",
			"skills": "The force, acrobatic combat, lightsword fighting, remote communication & more"
		}, 
		{
			"id": 3,
			"image": "images/crew/bb8.jpg",
			"name": "BB8",
			"role": "Droid",
			"description": "A fun, smart and loyal companion who is full of surprices.",
			"skills": "Free rolling, multiple panel tool & port configurations"
		}, 
		{
			"id": 7,
			"image": "images/crew/jam.jpg",
			"name": "Jhonny Star wars",
			"role": "Rey",
			"description": "Rey de la casa ",
			"skills": "En mi casa se hace lo que yo obedezca  "
		},
		{

			"id": 6,
			"image": "images/crew/Joda.jpg",
			"name": "Joda",
			"role": "Master Joda",
			"description": "Un maestro que jode mucho",
			"skills": "joder mucho"
		},
		{
			"id": 4,
			"image": "images/crew/EBM.jpg",
			"name": "EBM",
			"role": "Ovni",
			"description": "Ayudante de Yoda",
			"skills": "Volar y puedo comer mucho"
		},
		{
			"id": 5,
			"image": "images/crew/G2U2.jpg",
			"name": "G2U2",
			"role": "android",
			"description": "Toda una maquina multi usos.",
			"skills": "Barre , trapea y lava loza muy bien"

		},
		{
			"id": 8,
			"image": "images/crew/darth-vader.jpg",
			"name": "Darth Vader",
			"role": "Commander",
			"description": "A fun and nice Empire's commander.",
			"skills": "Generator of change and leadership."
		}, 
		{
			"id": 9,
			"image": "images/crew/captainrex.jpg",
			"name": "Captain Rex",
			"role": "Lieutenant of Anakin",
			"description": "Clone soldier of the Republic army, who led the 501st Legion in its beginnings",
			"skills": "Light saber handling"
		},
		{
			"id":10,
			"image":"images/crew/Maestro_jedi.jpg",
			"name":"Maestro Jenobi",
			"role":"Master",
			"description":"Master of the Jedi Order, the rising hero of the Republic",
			"skills":"The force, lightsword fighting"
		},
		{
			"id": 11,
			"image": "images/crew/CCB.jpg",
			"name": "Han Solo",
			"role": "cowboy",
			"description": "el pirata espacial m�s querido de la galaxia",
			"skills": "un verdadero cowboy del espacio"
		},
		{
			"id": 13,
			"image": "images/crew/FPU96.jpg",
			"name": "Kylo Ren",
			"role": "Master",
			"description": "Guerrero de la fuerza y Líder supremo de la primera orden",
			"skills": "Asesino Jedi"
		}
	]
};

function previousCrewMember() {
	id--;
	id = validateId(id);
	getCrewMemberInfo(id);
}

function nextCrewMember() {
	id++;
	id = validateId(id);
	getCrewMemberInfo(id);
}

function getCrewMemberInfo(crewMemberId) {
	id = crewMemberId;
	if  (crew.members[crewMemberId].id != 'undefined') {
		document.getElementById("image").src = crew.members[crewMemberId].image;
		document.getElementById("name").innerHTML = crew.members[crewMemberId].name;
		document.getElementById("role").innerHTML = crew.members[crewMemberId].role;
		document.getElementById("description").innerHTML = crew.members[crewMemberId].description;
		document.getElementById("skills").innerHTML = crew.members[crewMemberId].skills;
	}
}

function validateId(id) {
	if (id == Object.keys(crew.members).length) {
		id = 0;
	} else if (id == -1) {
		id = Object.keys(crew.members).length - 1;
	}
	return id;
}
