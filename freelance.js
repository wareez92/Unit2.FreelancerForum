

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ];
  
  const freelancerName = ["Dr. Lice", "Dr. Sure", "Dr. Code", "Dr. Byte", "Dr. Pixel"];
  const freelancerOcc = ["NBA","scientist","teacher","musician","boxer"];

  const addLancerIntervalId = setInterval(newfreelancer, 1000);

  // Generate random names 

function  randomNames() { 
  const randomIndex = Math.floor(Math.random() * freelancerName.length);
  return freelancerName[randomIndex];
}

// Generate random occupation 

function randomOccupation() {
  const randomIndex = Math.floor(Math.random() * freelancerOcc.length);
  return freelancerOcc[randomIndex];
}

// Generate random price

function randomPrice () {
  return Math.floor(Math.random() * 101);
}

// Add a new freelancer to array

function newfreelancer () {
  const newfreelancer = {
    name: randomNames(),
    occupation: randomOccupation(),
    price: randomPrice ()
  }

  freelancers.push(newfreelancer)
}


console.log(freelancers);


// Add new freelancer to the Dom

function render() {

  

  const info = document.querySelector("#information");

  const lancerElement = document.createElement("li");
  lancerElement.textContent = newfreelancer();

  info.append(lancerElement);
}



