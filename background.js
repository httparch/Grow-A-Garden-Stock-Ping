import { Notifier } from "./services/NotificationService.js";
import { getAllItem } from "./api/endpoints.js";

const notifier = new Notifier();

const CATEGORY_MAP = {
  gear: { items: 'gear', folder: 'gear' },
  seeds: { items: 'seeds', folder: 'seed' },
  eggs: { items: 'eggs', folder: 'egg' },
};

const itemsToNotify = ["Master Sprinkler", "Level Up Lollipop", "Medium Toy", "Medium Treat","Godly Sprinkler",
                        "Elder Strawberry", "Burning Bud", "Sugar Apple", "Giant Pinecone", "Beanstalk", "Ember Lily",
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
    delayInMinutes: getDelayUntilNextMultipleOf(30) + 0.5, 
    periodInMinutes: 25,
  });

  chrome.alarms.create("checkFastAlarm", {
    delayInMinutes: getDelayUntilNextMultipleOf(5) + 0.5, 
    periodInMinutes: 3,
  });
});


chrome.alarms.onAlarm.addListener((alarm) => {
  const currentMinute = new Date().getMinutes();

  if (currentMinute % 5 !== 0) {
    console.log("Skipped notification. Not a multiple of 5.");
    return;
  }

  if (alarm.name === "checkEggAlarm") {
    notifyItemRestock("eggs");
  } else if (alarm.name === "checkFastAlarm") {
    notifyItemRestock("gear");
    notifyItemRestock("seeds");
  }
});

function getDelayUntilNextMultipleOf(minutes) {
  const now = new Date();
  const ms = now.getTime();
  const next = new Date(Math.ceil(ms / (minutes * 60 * 1000)) * minutes * 60 * 1000);
  return (next - now) / 60000; // minutes
}


