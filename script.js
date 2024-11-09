// body 
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f8f9fa";

// Main content container
const mainContent = document.createElement("div");
document.body.appendChild(mainContent);

// Function load page content
function loadPage(page) {
    mainContent.innerHTML = ""; 
    if (page === "home") loadHome();
    else if (page === "about") loadAbout();
    else if (page === "pets") loadPets();
    else if (page === "contact") loadContact();
}

// Navigation bar
function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.style.backgroundColor = "green";
    navbar.style.color = "yellow";
    navbar.style.padding = "1rem 0";

    const container = document.createElement("div");
    container.style.maxWidth = "1200px";
    container.style.margin = "auto";
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";

    // Logo
    const logo = document.createElement("h1");
    logo.innerHTML = `Pet<span style="color:red">Adopt</span>`;
    logo.style.cursor = "pointer";
    logo.onclick = () => loadPage("home");

    // Nav links
    const navLinks = ["home", "about", "pets", "contact"];
    const ul = document.createElement("ul");
    ul.style.display = "flex";
    ul.style.listStyle = "none";
    ul.style.gap = "20px";

    navLinks.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = link.charAt(0).toUpperCase() + link.slice(1);
        a.style.color = "white";
        a.style.textDecoration = "none";
        a.style.cursor = "pointer";
        a.onclick = () => loadPage(link);
        li.appendChild(a);
        ul.appendChild(li);
    });

    container.appendChild(logo);
    container.appendChild(ul);
    navbar.appendChild(container);
    document.body.insertBefore(navbar, mainContent);
}

// Home page content
function loadHome() {
    const header = document.createElement("header");
    header.style.background = "white";
    header.style.color = "black";
    header.style.height = "80vh";
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.textAlign = "center";

    const headerContent = document.createElement("div");
    headerContent.innerHTML = `
        <h2 style="font-size: 2.5rem;">Find Your Perfect Pet Today</h2>
        <p style="font-size: 1.2rem; margin-top: 10px;">We help homeless animals find a loving home</p>
        <button style="padding: 10px 20px; color: ; background-color: #28a745; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;" onclick="loadPage('pets')">See Available Pets</button>
    `;
    header.appendChild(headerContent);
    mainContent.appendChild(header);
}

// About Us section
function loadAbout() {
    const about = document.createElement("section");
    about.style.padding = "10rem 0";
    about.style.backgroundColor = "white";
    about.style.textAlign = "center";
    about.style.height='80vh'
    // about.style.marginTop = "50px";
    // about.style.padding = "400px";
    // about.style.marginBottom = "50px";

    about.innerHTML = `
        <h3>About Us</h3>
        <p style="max-width: 800px; margin: auto;">At PetAdopt, we’re dedicated to finding loving homes for pets in need. Our mission is to give homeless animals a second chance by connecting them with caring families. With a simple process browse, apply, meet, and adopt we make it easy to welcome a pet into your life. Not ready to adopt? You can also help by volunteering, fostering, or donating. Join us in our mission to save lives, one paw at a time.

</p>
    `;
    mainContent.appendChild(about);
}

function setData() {
    let data = {
        "pets": [
            {
                "id": 1,
                "name": "Bella",
                "species": "Dog",
                "breed": "Labrador Retriever",
                "age": 3,
                "gender": "Female",
                "size": "Large",
                "color": "Yellow",
                "weight": 60,
                "description": "Friendly and playful, loves outdoor activities and good with children.",
                "status": "Available",
                "image_url": "https://th.bing.com/th/id/OIP.XGvRwx1I7qo-wuVZUfCOWAHaEo?rs=1&pid=ImgDetMain",
                "vaccinated": true,
                "spayed_neutered": true,
                "good_with_kids": true,
                "good_with_other_pets": true
            },
            {
                "id": 2,
                "name": "Whiskers",
                "species": "Cat",
                "breed": "Siamese",
                "age": 2,
                "gender": "Male",
                "size": "Medium",
                "color": "Cream",
                "weight": 12,
                "description": "Quiet and gentle, enjoys sunny spots and is well-mannered.",
                "status": "Pending Adoption",
                "image_url": "https://1.bp.blogspot.com/-Dq0blcdxKiw/X2k4y-fxEdI/AAAAAAAAAHs/KizUPYTazKke_WpUKgH7aGYoAl9JmichwCLcBGAsYHQ/w680/parviz-isaev-iTvO1oSCKDo-unsplash.jpg",
                "vaccinated": true,
                "spayed_neutered": true,
                "good_with_kids": true,
                "good_with_other_pets": false
            },
            {
                "id": 3,
                "name": "Buddy",
                "species": "Dog",
                "breed": "Beagle",
                "age": 1,
                "gender": "Male",
                "size": "Medium",
                "color": "Tricolor",
                "weight": 25,
                "description": "Energetic and loyal, loves going on walks and playing fetch.",
                "status": "Available",
                "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATF9rXor1M4e-wU0TPwZ2ueVRmYHzKqMxYwhatd7qI5Jwl7B4",
                "vaccinated": true,
                "spayed_neutered": true,
                "good_with_kids": true,
                "good_with_other_pets": true
            },
            {
                "id": 4,
                "name": "Luna",
                "species": "Cat",
                "breed": "Maine Coon",
                "age": 4,
                "gender": "Female",
                "size": "Large",
                "color": "Gray",
                "weight": 15,
                "description": "Calm and affectionate, enjoys being groomed and loves company.",
                "status": "Available",
                "image_url": "https://media.istockphoto.com/id/1352018825/photo/italian-mastiff.jpg?s=2048x2048&w=is&k=20&c=ZwekXkKb3jXb80yteJAbQ3S5Rx3uOcgtvHqPIF5Q_Ps=",
                "vaccinated": true,
                "spayed_neutered": true,
                "good_with_kids": true,
                "good_with_other_pets": true
            }
        ]
    }

    localStorage.setItem("petData", JSON.stringify(data));
}

function getData() {
    let petData = localStorage.getItem("petData");
    petData = JSON.parse(petData);
    return petData;
}

// Pets section
function loadPets() {
    const pets = document.createElement("section");
    pets.style.padding = "2rem 0";
    pets.style.textAlign = "center";
    pets.style.backgroundColor = "#f8f9fa";
    pets.style.height='80vh';
    // pets.style.weight='80px';

    const petsGallery = document.createElement("div");
    petsGallery.style.display = "flex";
    petsGallery.style.gap = "20px";
    petsGallery.style.flexWrap = "wrap";
    petsGallery.style.justifyContent = "center";

    const petData = getData();
    console.log(petData.pets);

    // petData.forEach((pet) => {
    //     const petCard = document.createElement("div");
    //     petCard.style.backgroundColor = "white";
    //     petCard.style.borderRadius = "10px";
    //     petCard.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
    //     petCard.style.padding = "15px";
    //     petCard.style.width = "200px";
    //     petCard.style.textAlign = "center";

    //     petCard.innerHTML = `
    //         <img src="${pet.image_url}" alt="${pet.breed}" style="width: 100%; height:250px; border-radius: 10px;">
    //         <h4 style = "margin-top:40px">${pet.name}</h4>
    //         <p>Breed: ${pet.breed}</p>
    //     `;
    //     petsGallery.appendChild(petCard);
    // });
    for (let pet of petData.pets ) {

        const petCard = document.createElement("div");
        
        petCard.style.backgroundColor = "white";
        petCard.style.borderRadius = "10px";
        petCard.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        petCard.style.padding = "15px";
        petCard.style.width = "200px";
        petCard.style.he= "200px";
        petCard.style.textAlign = "center";
        petCard.innerHTML = `
        <img src=${pet.image_url} alt=${pet.breed} style="width: 100%;height:130px; border-radius: 10px; box-shadow: 10px 10px 10px grey">
        <h4 style = "margin-top:40px">${pet.name}</h4>
        <p>Breed: ${pet.breed}</p>`;
        petsGallery.appendChild(petCard);
    }

    pets.appendChild(petsGallery);
    mainContent.appendChild(pets);
}

// Contact section
function loadContact() {
    const contact = document.createElement("section");
    contact.style.padding = "2rem 0";
    contact.style.textAlign = "center";
    contact.style.backgroundColor = "#f8f9fa";
    contact.style.marginTop = "220px";
    contact.style.height='50vh';
    // contact.style.marginBottom= "0px";

    contact.innerHTML = `
        <h3>Contact Us</h3>
        <p>To adopt or inquire about our pets, feel free to reach out via email or phone.</p>
        <p>Email: Annu@petadopt.com</p>
        <p>Phone: +91744-700-1314</p>
    
    `;
    mainContent.appendChild(contact);
}

// Footer
function createFooter() {
    const footer = document.createElement("footer");
    footer.style.backgroundColor = "#343a40";
    footer.style.color = "white";
    footer.style.textAlign = "center";
    footer.style.padding = "1rem 0";
    // footer.style.marginTop= "12%";
    // footer.style.position='static';

    footer.innerHTML = `
        <p>&copy; 2024 PetAdopt. All rights reserved. | Follow us on <a href="#" style="color: #ffcc00; text-decoration: none;">Social Media</a></p>
    `;
    document.body.appendChild(footer);
}

























// // Initial setup
createNavbar();
createFooter();
loadPage("home");
setData();