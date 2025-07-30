
export class ItemRenderer {
  constructor(containerId, dataFetcher, itemType) {
    this.container = document.getElementById(containerId);
    this.fetchData = dataFetcher;
    this.itemType = itemType;
  }//end of Constructor

  async init() {
    try {
      const items = await this.fetchData();
      this.renderItems(items);
    } catch (error) {
      this.displayErrorMessage("Unable to load items at the moment. Please refresh the extension.");
    }
  }//end of init()

  renderItems(items) {
    try{
      items.forEach(item => {
        const li = document.createElement("li");

        const wrapper = document.createElement("div");
        wrapper.className = "image-wrapper";

        const img = document.createElement("img");

        const sanitizedName = item.name.replace(/\s+/g, '_');
        img.src = `images/${this.itemType}/${sanitizedName}.png`;
        img.onerror = () => {
            img.src = "./images/icons/GaGextension16.png";
        };
        img.className = "small-icon";

        const text = document.createElement("span");
        text.className = `${this.itemType}-count`;
        text.textContent = `X${item.quantity}`;

        wrapper.appendChild(img);
        wrapper.appendChild(text);
        li.appendChild(wrapper);
        this.container.appendChild(li);
    });
    }catch(error){
        this.displayErrorMessage("An error occurred while rendering items. Please refresh the extension.");
    }
    
  }//end of renderItems()

  displayErrorMessage(message) {
    const errorEl = document.createElement("p");
    errorEl.className = "error-message";
    errorEl.textContent = message;
    this.container.innerHTML = ""; 
    this.container.appendChild(errorEl);
  }//end of displayErrorMessage()
}