import { Notifier } from "./services/NotificationService.js";
import { getAllItem } from "./api/endpoints.js";


const notifier = new Notifier();

const CATEGORY_MAP = {
  gear: { items: 'gear', folder: 'gear' },
  seeds: { items: 'seeds', folder: 'seed' },
  eggs: { items: 'eggs', folder: 'egg' },
};

const itemsToNotify = ["Master Sprinkler", "Level Up Lollipop", "Medium Toy", "Medium Treat","Godly Sprinkler","Tanning Mirror","Friendship Pot", "Magnifying Glass",
                        "Elder Strawberry", "Burning Bud", "Sugar Apple", "Giant Pinecone", "Beanstalk", "Ember Lily","Grape", "Mushroom","Pepper","Cacao",
                        "Paradise Egg", "Mythical Egg", "Bug Egg"];


async function notifyItemRestock(category) {
  try {
    const allData = await getAllItem();

    const { items, folder } = CATEGORY_MAP[category];
    const categoryItems = allData[items] || [];

    categoryItems.forEach(item => {
      if (itemsToNotify.includes(item.name)) {
        const icon = `images/${folder}/${item.name.replace(/\s+/g, "_")}.png`;
        notifier.send(`${item.name} is now available!`, icon);
      }
    });
  } catch (err) {
    console.error(`${category} check failed:`, err);
  }
}


chrome.runtime.onInstalled.addListener(() => {

  chrome.alarms.create("checkEggAlarm", {
    delayInMinutes: getDelayUntilNextMultipleOf(30,true,30), 
    periodInMinutes: 30,
  });

  chrome.alarms.create("checkFastAlarm", {
    delayInMinutes: getDelayUntilNextMultipleOf(5,true,30), 
    periodInMinutes: 5,
  });

});


chrome.alarms.onAlarm.addListener((alarm) => {


   if (alarm.name === "checkFastAlarm") {
    setTimeout(() => {
      notifyItemRestock("gear");
      notifyItemRestock("seeds");
    }, 10000); 
  }

  if (alarm.name === "checkEggAlarm") {
    setTimeout(() => {
      notifyItemRestock("eggs");
    }, 10000);
  }

});

function getDelayUntilNextMultipleOf(minutes, alignToNext = false, extraSeconds = 30) {
  if (!alignToNext) return 0.01;

  const now = new Date();
  const msNow = now.getTime();

  const intervalMs = minutes * 60 * 1000;
  const extraDelayMs = extraSeconds * 1000;

  const nextAlignedTimeMs = Math.ceil(msNow / intervalMs) * intervalMs + extraDelayMs;
  const delayMs = nextAlignedTimeMs - msNow;

  const delayInMinutes = Math.max(delayMs / 60000, 0.01);
  const nextAlarm = new Date(msNow + delayMs);

  console.log(`⏰ Now:         ${now.toLocaleTimeString()}`);
  console.log(`🧮 Next Alarm: ${nextAlarm.toLocaleTimeString()} (+${minutes}min interval, +${extraSeconds}s extra)`);
  console.log(`⏳ Delay:       ${delayInMinutes.toFixed(2)} minutes\n`);

  return delayInMinutes;
}