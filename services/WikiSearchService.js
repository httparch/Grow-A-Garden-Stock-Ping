import { getGaGInfo } from '../api/endpoints.js';

export class GaGWiki {
  constructor() {
    this.searchInput = document.getElementById('searchbar');
    this.displayName = document.getElementById('display_name');
    this.rarityInfo = document.getElementById('rarity_info');
    this.description = document.getElementById('description');
    this.icon = document.getElementById('icon');
    this.typeInfo = document.getElementById('type_info');
    this.priceInfo = document.getElementById('price_info');
    this.infoSection = document.getElementById('infoSec');
    this.data = [];
  }

  async init() {
    this.data = await getGaGInfo();
    if (!this.data || !Array.isArray(this.data)) {
      console.error("Invalid data received from API");
      return;
    }

    this.searchInput.addEventListener('input', () => this.handleSearch());
  }

  handleSearch() {
    const query = this.searchInput.value.trim().toLowerCase();
    const match = this.data.find(item =>
      item.display_name.toLowerCase().includes(query)
    );

    if (match) {
      this.displayItem(match);
    } else {
      this.clearDisplay();
    }
  }

  displayItem(item) {
    this.infoSection.style.display = "block";
    this.displayName.textContent = item.display_name;
    this.rarityInfo.textContent = item.rarity || "Unknown";
    this.description.textContent = item.description || "No description available.";
    this.icon.src = item.icon || "images/icons/default.png";
    this.typeInfo.textContent = item.type || "Unknown";
    this.priceInfo.textContent = `${item.price || "?"} ${item.currency || ""}`;
  }

  clearDisplay() {
    this.infoSection.style.display = "none";
  }
}