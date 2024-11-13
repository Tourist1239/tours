document.addEventListener("DOMContentLoaded", () => {
   
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tourName = e.target.dataset.tourName;
            alert(`You selected: ${tourName}`);
            e.target.closest('.card').classList.toggle('highlight'); 
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const messageDiv = document.getElementById('form-message');
        messageDiv.textContent = 'Thank you for your submission!';
        messageDiv.classList.remove('hidden');
        messageDiv.classList.add('fade-in');
        contactForm.reset(); 
    });

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const tours = document.querySelectorAll('.tour-card');

        tours.forEach(tour => {
            const tourName = tour.dataset.tourName.toLowerCase();
            if (tourName.includes(searchTerm)) {
                tour.style.display = 'block';
            } else {
                tour.style.display = 'none';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");
    const submitButton = document.querySelector("#booking-form button[type='submit']");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

  
        const destination = document.getElementById("destination").value.trim();
        const departureDate = document.getElementById("departure-date").value.trim();
        const arrivalDate = document.getElementById("arrival-date").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const guests = document.getElementById("guests").value.trim();
        const hotelClass = document.getElementById("hotel-class").value.trim();
        const mealPlan = document.getElementById("meal-plan").value.trim();
        const resort = document.getElementById("resort").value.trim();
        const budget = document.getElementById("budget").value.trim();

       
        if (!destination || !departureDate || !arrivalDate || !nights || !guests || !hotelClass || !mealPlan || !resort || !budget) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        
        alert("Your application has been accepted. Our manager will contact you.");
        
  
        form.reset();
    });
});

window.onload = () => {
    const savedData = JSON.parse(localStorage.getItem('bookingFormData'));
    if (savedData) {
        document.getElementById('destination').value = savedData.destination || 'Select a country...';
        document.getElementById('departure-date').value = savedData.departureDate || '';
        document.getElementById('arrival-date').value = savedData.arrivalDate || '';
        document.getElementById('nights').value = savedData.nights || '';
        document.getElementById('guests').value = savedData.guests || '';
        document.getElementById('hotel-class').value = savedData.hotelClass || 'Select hotel class...';
        document.getElementById('meal-plan').value = savedData.mealPlan || 'Select meal plan...';
        document.getElementById('resort').value = savedData.resort || 'Select a resort...';
        document.getElementById('budget').value = savedData.budget || '';
    }
};


document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = {
        destination: document.getElementById('destination').value,
        departureDate: document.getElementById('departure-date').value,
        arrivalDate: document.getElementById('arrival-date').value,
        nights: document.getElementById('nights').value,
        guests: document.getElementById('guests').value,
        hotelClass: document.getElementById('hotel-class').value,
        mealPlan: document.getElementById('meal-plan').value,
        resort: document.getElementById('resort').value,
        budget: document.getElementById('budget').value
    };

  
    localStorage.setItem('bookingFormData', JSON.stringify(formData));

   
    alert('Your trip details have been saved!');
});


    document.addEventListener('DOMContentLoaded', () => {
        const detailsBtns = document.querySelectorAll('.details-btn');
const infoCard = document.getElementById('infoCard');
const closeBtn = document.querySelector('.close-btn');
const detailsTitle = document.getElementById('detailsTitle');
const detailsDescription = document.getElementById('detailsDescription');
const detailsIcons = document.getElementById('detailsIcons');

const tours = {
    "Kyoto": {
        title: "Kyoto Tour Details",
        description: "Join us on an unforgettable journey through Kyoto's temples and beautiful gardens. This tour includes visits to famous landmarks and a traditional tea ceremony.",
        icons: ["📅 3 Days", "💵 $1,200", "🏯 Cultural Experience"]
    },
    "Paris": {
        title: "Paris Adventure Details",
        description: "Experience the magic of Paris with guided tours of the Eiffel Tower, Louvre, and more. Perfect for romantic getaways or exploring history.",
        icons: ["📅 5 Days", "💵 $2,300", "🗼 Romantic Tour"]
    },
    "Bali": {
        title: "Bali Trip Details",
        description: "Escape to the beaches of Bali! This tour covers famous spots, unique temples, and hidden waterfalls for an unforgettable trip.",
        icons: ["📅 7 Days", "💵 $1,500", "🏖️ Beach Paradise"]
    }
};

detailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tour = btn.getAttribute('data-tour');
        detailsTitle.textContent = tours[tour].title;
        detailsDescription.textContent = tours[tour].description;
        
        
        detailsIcons.innerHTML = '';
        tours[tour].icons.forEach(iconText => {
            const iconElement = document.createElement('span');
            iconElement.textContent = iconText;
            detailsIcons.appendChild(iconElement);
        });
        infoCard.classList.add('active');
        infoCard.style.display = 'block';
    });
});
closeBtn.addEventListener('click', () => {
    infoCard.classList.remove('active');
    infoCard.style.display = 'none';
});
    });
    