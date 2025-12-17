
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  // Disable/Enable scroll
  if (sidebar.classList.contains("open")) {
    document.body.classList.add("sidebar-open");
  } else {
    document.body.classList.remove("sidebar-open");
  }
}
// Optional: Close sidebar when a link is clicked
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("open");
    document.body.classList.remove("sidebar-open");
  });
});
document.getElementById("toggleBtn").addEventListener("click", toggleSidebar);
  // Navigation link closing
  document.querySelectorAll('.navitems a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggleBtn.querySelector('i').classList.remove('fa-times');
      toggleBtn.querySelector('i').classList.add('fa-bars');
    });
  });
  // Sticky top-nav
  window.addEventListener('scroll', function () {
    const topNav = document.getElementById('topNav');
    if (window.scrollY > 50) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  });
  // Bootstrap carousel
  const myCarousel = document.querySelector('#headerCarousel');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 6000,
    pause: false,
    wrap: true
  });
        // package-button
        

               // Function to redirect to WhatsApp with package details
        function bookPackage(packageName, packagePrice) {
            const whatsappNumber = "+91 9861001919";
            // Customize your message
            const message = `Hello! I'm interested in booking the ${packageName} for $${packagePrice}. Could you please provide more information?`;
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            // Open in new tab
            window.open(whatsappUrl, '_blank');
        }
        // gallery

 document.addEventListener('DOMContentLoaded', function () {
  const exploreBtn = document.getElementById('exploreBtn');
  const hiddenCards = document.querySelectorAll('.photo-card.hidden');
  let isExpanded = false;

  exploreBtn.addEventListener('click', function () {
    if (isExpanded) {
      // Collapse the hidden cards
      hiddenCards.forEach(card => {
        card.classList.add('hidden');
      });
      exploreBtn.innerHTML = `Show More `; // ✅ No arrow
    } else {
      // Show the hidden cards
      hiddenCards.forEach(card => {
        card.classList.remove('hidden');
      });
      exploreBtn.innerHTML = `Show Less`; // ✅ No arrow
    }

    isExpanded = !isExpanded;

    // Smooth scroll to button's new position after expansion
    setTimeout(() => {
      exploreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  });
});

// service
function connectWhatsApp() {
  const phoneNumber = '91 9861001919'; 
  const message = 'I want to book a premium car'; 
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
document.querySelector('.booking-btn').addEventListener('click', connectWhatsApp);
const bookingBtn = document.createElement('button');
bookingBtn.className = 'booking-btn';
bookingBtn.textContent = 'Booking';
bookingBtn.addEventListener('click', connectWhatsApp);
document.body.appendChild(bookingBtn); // Add to your desired parent element



//contact
  const travelMode = document.getElementById("travelMode");
    const carTypeSection = document.getElementById("carTypeSection");

    travelMode.addEventListener("change", function () {
      if (this.value === "Car") {
        carTypeSection.style.display = "block";
      } else {
        carTypeSection.style.display = "none";
      }
    });

    document.getElementById("inquiryForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const destination = document.getElementById("destination").value;
      const members = document.getElementById("members").value;
      const travel = travelMode.value;
      const carType = document.getElementById("carType").value;

      let message = `Name: ${name}%0ADestination: ${destination}%0AMembers: ${members}%0ATravel Mode: ${travel}`;

      if (travel === "Car" && carType) {
        message += `%0ACar Type: ${carType}`;
      }

      // Replace the phone number below with your WhatsApp number
      const phone = "919861001919"; // ← replace with your number (with country code)
      const url = `https://wa.me/${phone}?text=${message}`;

      window.open(url, "_blank");
    });