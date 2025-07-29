
export class Notifier {
  constructor(iconPath = "./images/icons/GaGextension48.png", title = "Item Restock!") {
    this.iconPath = iconPath;
    this.title = title;
  }//end of constructor()

  send(message, imageOverride = null) {
    if (chrome?.notifications) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: imageOverride || this.iconPath,
        title: this.title,
        message: message,
      });
    }
  }//end of send()
}//end of notifier class