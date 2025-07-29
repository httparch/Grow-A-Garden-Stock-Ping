import { getEggData, getGearData, getSeedData, getWeatherData } from "./api/endpoints.js";
import { ItemRenderer } from "./services/ItemRendererService.js";
import { WeatherRenderer } from "./services/WeatherRendererService.js";
import { GaGWiki } from "./services/WikiSearchService.js";

let isPage1Visible = true;

const eggRenderer = new ItemRenderer("eggList", getEggData, "egg");
const seedRenderer = new ItemRenderer("seedList", getSeedData, "seed");
const gearRenderer = new ItemRenderer("gearList", getGearData, "gear");
const weatherRenderer = new WeatherRenderer("weatherList", getWeatherData);
const wikiRenderer = new GaGWiki();

eggRenderer.init();
seedRenderer.init();
gearRenderer.init();
weatherRenderer.init();
wikiRenderer.init();

toggleBtn.addEventListener("click", () => {
  isPage1Visible = !isPage1Visible;
  page1.style.display = isPage1Visible ? "block" : "none";
  page2.style.display = isPage1Visible ? "none" : "block";

  toggleBtn.style.backgroundImage = isPage1Visible
    ? "url('../images/util/search.png')"
    : "url('../images/icons/GaGextension16.png')";
});