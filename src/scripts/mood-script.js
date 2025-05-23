// Mood-based color palettes
const moodColors = {
  energetic: ["#FF0000", "#FFA500", "#FFD700", "#FF69B4", "#FF4500"],
  calm: ["#87CEEB", "#98FB98", "#E6E6FA", "#F0F8FF", "#B0C4DE"],
  sophisticated: ["#000000", "#808080", "#A9A9A9", "#D3D3D3", "#FFFFFF"],
  cozy: ["#8B4513", "#DEB887", "#F4A460", "#D2691E", "#CD853F"],
};

// Mood-based outfit categories
const moodOutfits = {
  energetic: {
    casual: ["Bright T-shirts", "Patterned shorts", "Colorful sneakers"],
    formal: ["Bold suits", "Statement dresses", "Vibrant accessories"],
    streetwear: ["Neon hoodies", "Graphic tees", "Colorful sneakers"],
    athleisure: [
      "Bright workout sets",
      "Colorful sports bras",
      "Neon running shoes",
    ],
  },
  calm: {
    casual: ["Soft cotton tees", "Flowing skirts", "Light cardigans"],
    formal: ["Pastel blazers", "Flowing dresses", "Subtle accessories"],
    streetwear: ["Oversized sweaters", "Relaxed jeans", "Minimal sneakers"],
    athleisure: ["Soft yoga pants", "Light tank tops", "Neutral trainers"],
  },
  sophisticated: {
    casual: ["Classic white shirts", "Tailored pants", "Leather loafers"],
    formal: ["Black suits", "Evening gowns", "Pearl accessories"],
    streetwear: ["Monochrome outfits", "Designer sneakers", "Luxury bags"],
    athleisure: [
      "Designer sportswear",
      "Premium leggings",
      "Sleek running shoes",
    ],
  },
  cozy: {
    casual: ["Chunky sweaters", "Soft joggers", "Warm boots"],
    formal: ["Velvet blazers", "Knit dresses", "Comfortable heels"],
    streetwear: ["Fleece hoodies", "Cargo pants", "Platform sneakers"],
    athleisure: ["Fleece jackets", "Warm leggings", "Cozy sneakers"],
  },
};

// DOM Elements
const moodCards = document.querySelectorAll(".mood-card");
const outfitShowcase = document.querySelector(".outfit-showcase");
const themeSelector = document.querySelector(".theme-selector");
const colorPalette = document.querySelector(".color-palette");
const outfitGrid = document.querySelector(".outfit-grid");

// Event Listeners
moodCards.forEach((card) => {
  card.addEventListener("click", () => {
    const mood = card.dataset.mood;
    showMoodSelection(mood);
  });
});

function showMoodSelection(mood) {
  // Show color palette
  colorPalette.innerHTML = "";
  moodColors[mood].forEach((color) => {
    const colorSwatch = document.createElement("div");
    colorSwatch.style.backgroundColor = color;
    colorSwatch.style.width = "50px";
    colorSwatch.style.height = "50px";
    colorSwatch.style.borderRadius = "50%";
    colorPalette.appendChild(colorSwatch);
  });

  // Show theme selector
  themeSelector.classList.remove("hidden");
  outfitShowcase.classList.remove("hidden");

  // Add event listeners to theme cards
  const themeCards = document.querySelectorAll(".theme-card");
  themeCards.forEach((card) => {
    card.addEventListener("click", () => {
      const theme = card.dataset.theme;
      showOutfits(mood, theme);
    });
  });
}

function showOutfits(mood, theme) {
  outfitGrid.innerHTML = "";
  const outfits = moodOutfits[mood][theme];

  outfits.forEach((outfit) => {
    const outfitCard = document.createElement("div");
    outfitCard.className = "mood-card";
    outfitCard.innerHTML = `
            <h3>${outfit}</h3>
            <p>Perfect for ${mood} ${theme} style</p>
        `;
    outfitGrid.appendChild(outfitCard);
  });
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
