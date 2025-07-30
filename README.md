# <img src="https://github.com/user-attachments/assets/2ea6143d-3d49-46bb-ae04-7bb2e99fe839" alt="GaG Icon" width="50" height="50"> Grow a Garden Stock Notifier – Chrome Extension
A lightweight and helpful Chrome extension for **Grow a Garden** players. Stay updated on in-game shop stocks, real-time weather, and searchable wiki information — all in one place, without opening the game!

---

## 🔍 Features

- **🛒 Current Shop Stocks**  
  View the list of currently available in-game shop items via Grow a Garden APIs.

- **🔔 Ring Notifications**  
  Receive real-time notifications when **rare or valuable items** appear in stock, including:
  
  ```
  "Master Sprinkler", "Level Up Lollipop", "Medium Toy", "Medium Treat", 
  "Elder Strawberry", "Burning Bud", "Sugar Apple", "Giant Pinecone", 
  "Beanstalk", "Ember Lily", "Paradise Egg", "Mythical Egg", "Bug Egg"
  ```

- **🔍 Grow a Garden Info Search**  
  Quickly look up item information from the Grow a Garden wiki using keyword search.

- **🌦️ Current Weather**  
  Instantly view the in-game weather conditions.
---

## ✅ [FEAT] in progresss 🚧

- 🔧 Current weather notification in progress
- 🔧 User can select which items to receive notifications for.

---

## 🔗 API Endpoints Used

- [`https://api.joshlei.com/v2/growagarden/info/`](https://api.joshlei.com/v2/growagarden/info/)  
  Used for:
  - Wiki search
  - Weather data

- [`https://github.com/Liriosha/GAGAPI`](https://github.com/Liriosha/GAGAPI)  
  Used to fetch:
  - Current in-game shop stock

---

## ⚠️ Version 1 Limitations

- 🎨 **Cosmetics and event-exclusive items are not yet supported** for alerts or display.
- 🧪 UI refinements and advanced filtering features are under development for future versions.
  
---

## 🚀 Installation

1. Clone or download this repository.
2. Open `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** (top right toggle).
4. Click **Load unpacked** and select the folder containing the extension files.

---

## 📢 Disclaimer

This Chrome extension uses the following third-party APIs:

- [Joshlei's Grow a Garden API](https://api.joshlei.com/)
- [Liriosha's GAGAPI](https://github.com/Liriosha/GAGAPI)

All data fetched through these APIs is owned by their respective creators.  
This extension is **fan-made**, does **not store or redistribute proprietary content**, and is **not affiliated** with Grow a Garden or its developers.

Please review the API providers' terms of service or licenses for compliance.

If you are the owner of any API used and have questions or concerns, please open an issue or contact me directly.

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute the code with proper attribution.  
See the [LICENSE](./LICENSE) file for full details.
