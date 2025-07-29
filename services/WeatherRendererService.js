export class WeatherRenderer {
   constructor(containerId, dataFetcher) {
    this.container = document.getElementById(containerId);
    this.fetchData = dataFetcher;
  }//end of constructor()

  async init() {
    const weatherData = await this.fetchData(); 
    const activeWeather = weatherData.weather.find(w => w.active);  
    if (activeWeather) {
      this.render(activeWeather);
    }
  }//end of init()

  render(weather) {
    const li = document.createElement("li");
    const wrapper = document.createElement("div");
    wrapper.className = "image-wrapper";

    const img = document.createElement("img");
    img.src = weather.icon; 
    img.onerror = () => {
      img.src = "./images/icons/GaGextension16.png"; 
    };
    img.className = "small-icon";

    wrapper.appendChild(img);
    li.appendChild(wrapper);
    this.container.appendChild(li);
  }//end of render()
}//end of WeatherRenderer class