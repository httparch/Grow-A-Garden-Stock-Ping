# 🌱 Grow a Garden Stock Notifier - Chrome Extension

A lightweight and helpful Chrome extension for **Grow a Garden** players. Stay updated on in-game item stocks, real-time weather, and wiki information—without opening the game!

---

## 🔍 Features

- **Current Stocks Viewer**  
  View the list of currently available in-game items via the Grow a Garden API.

- **Smart Notifications**  
  Get real-time notifications when **specific rare or valuable items** are in stock, including:
  
  ```
  "Master Sprinkler", "Level Up Lollipop", "Medium Toy", "Medium Treat", 
  "Common Egg", "Tomato", "Carrot", "Basic Sprinkler", "Trowel",
  "Elder Strawberry", "Burning Bud", "Sugar Apple", "Giant Pinecone", 
  "Beanstalk", "Ember Lily", "Paradise Egg", "Mythical Egg", "Bug Egg"
  ```

- **Grow a Garden Wiki Search**  
  Easily search for items and info from the Grow a Garden wiki, powered by the official API.

- **Weather Integration**  
  View the current in-game weather at a glance.

---

## 🔗 API Endpoints Used

- `https://api.joshlei.com/v2/growagarden/info/`  
  Used for fetching:
  - Wiki search results
  - Current weather conditions
  - Available in-game stocks

---

## ⚠️ Version 1 Limitations

- 🔒 **Cosmetics and event-specific items are not yet supported** for stock alerts or search.
- 🧪 Feature improvements and UI enhancements are in progress for future versions.

---

## 🚀 Installation

1. Clone or download this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the extension folder.

---

## 🛠️ Development Notes

- Written in vanilla JavaScript.
- Uses `setInterval()` polling to check stocks and fire notifications.
- Notification logic is customizable via a list of watchlisted items.
- More features (e.g., filters, UI themes, cosmetic tracking) coming soon!

---

## 💡 Contributing

Have suggestions or want to help improve the extension?  
Feel free to fork this repo and open a pull request!

---

## 📄 License

MIT License
