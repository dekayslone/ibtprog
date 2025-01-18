const slides = [
    {
        text: "Study",
        image: "../Images/Universityimage.jpg"
    },
    {
        text: "Work",
        image: "../Images/mancase.jpg"
    },
    {
        text: "Travel",
        image: "../Images/image1.jpg"
    }
];

let currentSlide = 0;

const heroSection = document.querySelector('.hero-section');
const heroTitle = document.getElementById('hero-text');


function updateSlide() {
    heroTitle.classList.remove('visible');


    setTimeout(() => {
        heroSection.style.backgroundImage = `url(${slides[currentSlide].image})`;
        heroTitle.textContent = slides[currentSlide].text;

        heroTitle.classList.add('visible');

        currentSlide = (currentSlide + 1) % slides.length;
    }, 1000);
}

updateSlide();

setInterval(updateSlide, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee");
  
    marquee.innerHTML += marquee.innerHTML;
  
    let scrollAmount = 0;
  
    function scrollMarquee() {
      scrollAmount -= 1;
      marquee.style.transform = `translateX(${scrollAmount}px)`;
  
      if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
      }
  
      requestAnimationFrame(scrollMarquee);
    }
  
    scrollMarquee();
  });
  
function animateCounter(start, end, duration) {
    const counter = document.getElementById('counter');
    let startTime = null;

    function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const current = Math.min(Math.floor(progress / duration * (end - start) + start), end);
    counter.textContent = current;
    if (current < end) {
         window.requestAnimationFrame(step);
           }
            }

            window.requestAnimationFrame(step);
        }

animateCounter(0, 1000, 6000);

function startCounting(counter) {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/[+%]/, '');

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + (target === 90 ? '%' : '+'); // Use % for 90, + for others
            setTimeout(updateCount, 40);
        } else {
            counter.innerText = target + (target === 96 ? '%' : '+'); // Final format: % for 90, + for others
        }
    };
    updateCount();
}

// Intersection Observer to trigger counting when in view
const counters = document.querySelectorAll('.counter-number');
const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            startCounting(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});


let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const navDots = document.querySelectorAll('.nav-dot');

// Function to change the active testimonial
function changeTestimonial() {
    // Remove active class from the previous testimonial and dot
    testimonials[currentIndex].classList.remove('active');
    navDots[currentIndex].classList.remove('active');

    // Increment the index
    currentIndex = (currentIndex + 1) % testimonials.length;

    // Add active class to the next testimonial and dot
    testimonials[currentIndex].classList.add('active');
    navDots[currentIndex].classList.add('active');
}

// Auto-advance testimonials every 3 seconds
setInterval(changeTestimonial, 7000);

// Click to navigate testimonials
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(interval);
        testimonials[currentIndex].classList.remove('active');
        navDots[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        testimonials[currentIndex].classList.add('active');
        navDots[currentIndex].classList.add('active');
    });
});

// Services data
const services = [
    {
      title: "School Applications",
      description: "Unlock opportunities to study at top-ranked universities in Canada, the United Kingdom, Europe, the United States, and beyond."
    },
    {
      title: "Visa Applications",
      description: " Our expert team provides tailored assistance to ensure a smooth and successful visa application process for your desired destination."
    },
    {
      title: "Scholarships",
      description: "Find and apply for scholarships to support your study abroad journey, making your education more affordable."
    },
    {
      title: "Flight Bookings",
      description: "We assist you in booking affordable flights to your destination, ensuring a smooth travel experience as you embark on your academic adventure."
    },
    {
      title: "Student Loans",
      description: "We help you access flexible student loan options to fund your studies abroad, making your dream education more attainable and affordable."
    },
    {
      title: "Interview Preparation",
      description: "Prepare confidently for your university admission and visa interviews with our tailored coaching sessions. "
    },
    {
        title: "Post-arrival Support",
        description: "We are with you all the way through study abroad experience, offering support to help you settle in and make the most of your time abroad."
      },
      {
        title: "Pre-departure Orientation",
        description: "Get ready for your study abroad adventure with our orientation. We provide essential guidance to help you prepare for your journey, ensuring you feel confident and informed before you leave."
      },
      {
        title: "Ongoing Academic Support",
        description: "We offer ongoing guidance to help you thrive academically during your study abroad experience, ensuring you have the resources and assistance you need to succeed."
      },
    
  ];
  
  const servicesContainer = document.getElementById("servicesContainer");
  
  if (servicesContainer) {
    services.forEach((service) => {
      // Create the card
      const card = document.createElement("div");
      card.classList.add("service-card");
  
      // Create the title element
      const title = document.createElement("h3");
      title.textContent = service.title;
  
      // Create the description element
      const description = document.createElement("p");
      description.textContent = service.description;
  
      // Append title and description to the card
      card.appendChild(title);
      card.appendChild(description);
  
      // Append the card to the container
      servicesContainer.appendChild(card);
    });
  } else {
    console.error("Services container not found in the DOM.");
  }
  
  function toggleFaq(faq) {
    const isOpen = faq.classList.contains('open');

    document.querySelectorAll('.faq').forEach(item => {
        item.classList.remove('open');
    });

    if (!isOpen) {
        faq.classList.add('open');
    }
}

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach((card) => {
    const question = card.querySelector('.faq-question');
    const answer = card.querySelector('.faq-answer');
    const icon = card.querySelector('.icon');

    question.addEventListener('click', () => {
        if (answer.style.height === '0px' || !answer.style.height) {
            answer.style.height = `${answer.scrollHeight}px`;
            icon.classList.add('open');
        } else {
            answer.style.height = '0px';
            icon.classList.remove('open');
        }
    });
});
