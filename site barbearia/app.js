// ============================================================






const CONFIG = {
  business: {
    name: "Blackwood Barber",
    slogan: "Seu estilo começa aqui.",
    tagline: "Cortes, barba e estilo feitos para você.",
    phone: "5545999419150",
    address: "Rua das Palmeiras, 250 - Centro",
    instagram: "@blackwoodbarber",
    hours: {
      weekdays: "09:00 às 19:00",
      saturday: "09:00 às 17:00",
      sunday: "Fechado"
    }
  },
  services: [
    {
      title: "Corte Masculino",
      description: "Corte personalizado de acordo com seu estilo.",
      price: "40",
      image: "assets/images (2).jpeg"
    },
    {
      title: "Barba",
      description: "Barba alinhada, acabamento preciso e toalha quente.",
      price: "30",
      image: "assets/images (4).jpeg"
    },
    {
      title: "Corte + Barba",
      description: "O combo completo para renovar seu visual.",
      price: "60",
      image: "assets/images (3).jpeg"
    },
    {
      title: "Sobrancelha",
      description: "Acabamento discreto para completar seu visual.",
      price: "15",
      image: "assets/8b7fdeb608150b8b25eb3d3d62c29cf3.jpg"
    }
  ],
  team: [
    {
      name: "Lucas",
      role: "Barbeiro Master",
      image: "assets/Captura de tela de 2026-08-29 15-17-31.png"
    },
    {
      name: "Rafael",
      role: "Especialista em Degradê",
      image: "assets/Captura de tela de 2026-08-29 15-17-17.png"
    }
  ],
  testimonials: [
    {
      name: "Carlos S.",
      text: "Melhor barbearia da cidade! O atendimento do Lucas é impecável e a toalha quente na barba é relaxante.",
      stars: 5,
    },
    {
      name: "Felipe M.",
      text: "O ambiente é premium e os barbeiros entendem perfeitamente de cortes modernos. Indico a todos.",
      stars: 5,
    },
    {
      name: "Gustavo R.",
      text: "Preço justo pelo excelente trabalho. Espaço agradável, música boa e ótimo atendimento.",
      stars: 5,
    }
  ]
};


document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderTeam();
  renderTestimonials();
  

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});


function toggleMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  drawer.classList.toggle("hidden");
}

const toggleButton = document.getElementById("mobile-menu-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", toggleMenu);
}


function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="service-photo">
      <div class="service-body">
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.description}</p>
        <div class="service-footer">
          <span class="service-price">R$ ${service.price}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


function renderTeam() {
  const container = document.getElementById("team-grid");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.team.forEach(member => {
    const card = document.createElement("div");
    card.className = "team-card";
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="team-avatar">
      <h3 class="team-name">${member.name}</h3>
      <p class="team-role">${member.role}</p>
    `;
    container.appendChild(card);
  });
}


function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.testimonials.forEach(t => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    

    let starsHtml = "";
    for(let i=0; i < t.stars; i++) {
      starsHtml += '<i data-lucide="star" style="width: 14px; height: 14px; fill: var(--accent-color); stroke: none;"></i>';
    }

    card.innerHTML = `
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-user">
        <img src="${t.avatarUrl}" alt="${t.name}" class="testimonial-user-photo">
        <div class="testimonial-info">
          <h4>${t.name}</h4>
          <div class="stars-rating">${starsHtml}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}