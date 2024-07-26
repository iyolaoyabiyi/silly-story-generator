const charNameInp = document.getElementById('charNameInp');
const submitBtn = document.getElementById('submitBtn');
const storyBoard = document.getElementById('storyBoard');
const storyPara = storyBoard.querySelector('p');
const storyTypeOpts = document.querySelectorAll('input[name="storyType"]');

function randNum(min, max) {
  if (Array.isArray(max)) {
    max = max.length - 1;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
function changeStory(storyType, {fantasyStory, sciFiStory}) {
  switch (storyType) {
    case 'fantasy':
      storyBoard.innerHTML = fantasyStory;
      break;
    case 'sci-fi':
      storyBoard.innerHTML = sciFiStory;
      break;
    default:
      break;
  }
}
const storyValues = {
  characterNames: ["Fluffy", "Sparkles", "Misty", "Bubbles", "Fuzzy", "Whiskers", "Blaze", "Snickers", "Wiggles", "Twinkle"],
  fantasyLands: ["Candyland", "Narnia", "Middle-Earth", "Wonderland", "Hogwarts", "Oz", "Neverland", "Atlantis", "Westeros", "Elfland"],
  animateAdjectives: ["silly", "brave", "cheerful", "grumpy", "lazy", "energetic", "mischievous", "friendly", "curious", "clumsy","mysterious", "wise", "noisy", "playful", "sly", "joyful"],
  animals: ["dragon", "unicorn", "gnome", "fairy", "elf", "ogre", "phoenix", "mermaid", "centaur", "griffin"],
  inanimateAdjectives: ["shiny", "mysterious", "glowing", "ancient", "sparkling", "curious", "strange", "colorful", "enchanted", "magical"],
  mObjects: ["lantern", "map", "sword", "shield", "book", "wand", "compass", "key", "scroll", "treasure chest"],
  activities: ["strolling", "hopping", "skipping", "wandering", "dancing", "exploring", "roaming", "meandering", "marching", "ambling"],
  homeLandscapes: ["forest", "park", "meadow", "village", "garden", "lake", "field", "hill", "glade", "grove"],
  creatures: ["troll", "sprite", "goblin", "pixie", "vampire", "werewolf", "leprechaun", "yeti", "sphinx", "hydra"],
  destinations: ["enchanted forest", "haunted castle", "mystic cave", "ancient ruins", "hidden valley", "abandoned village", "crystal lake", "secret garden", "foggy swamp", "mystical mountain"],
  travelScapes: ["river", "mountain", "desert", "ocean", "meadow", "swamp", "valley", "canyon", "waterfall", "hill"]
};
function showStory(e) {
  e && e.preventDefault();
  const value = charNameInp.value;
  const {
    characterNames,
    fantasyLands,
    animateAdjectives,
    animals,
    inanimateAdjectives,
    mObjects,
    activities,
    homeLandscapes,
    creatures,
    destinations,
    travelScapes
  } = storyValues;
  
  
  const characterName = value ? value : characterNames[randNum(0, characterNames)];
  const fantasyLand = fantasyLands[randNum(0, fantasyLands)];
  const animateAdjective = animateAdjectives[randNum(0, animateAdjectives)];
  const animateAdjective2 = animateAdjectives[randNum(0, animateAdjectives)];
  const animal = animals[randNum(0, animals)];
  const inanimateAdjective = inanimateAdjectives[randNum(0, inanimateAdjectives)];
  const mObject = mObjects[randNum(0, mObjects)];
  const activity = activities[randNum(0, activities)];
  const homeLandscape = homeLandscapes[randNum(0, homeLandscapes)];
  const creature = creatures[randNum(0, creatures)];
  const destination = destinations[randNum(0, destinations)];
  const travelScape = travelScapes[randNum(0, travelScapes)];

  let storyType = '';
  const stories = {
    fantasyStory: `<p>In the magical land of <span>${fantasyLand}</span>, a <span>${animateAdjective}</span> <span>${animal}</span> named <span>${capitalize(characterName)}</span> stumbled upon a <span>${inanimateAdjective}</span> <span>${mObject}</span> while <span>${activity}</span> through the <span>${homeLandscape}</span>. To their surprise, the <span>${mObject}</span> belonged to the <span>${animateAdjective2}</span> <span>${capitalize(creature)}</span> that lived in the <span>${destination}</span>. With a sense of adventure, <span>${capitalize(characterName)}</span> decided to return the <span>${mObject}</span>, embarking on a journey across the <span>${travelScape}</span> where they discovered the true magic of friendship.</p>`,
    sciFiStory: `<p>In the futuristic city of <span>${fantasyLand}</span>, a <span>${animateAdjective}</span> <span>${animal}</span> named <span>${characterName}</span> stumbled upon a <span>${inanimateAdjective}</span> <span>${mObject}</span> while <span>${activity}</span> through the <span>${homeLandscape}</span>. To their surprise, the <span>${mObject}</span> was a high-tech gadget belonging to the <span>${animateAdjective2}</span> <span>${capitalize(creature)}</span> that resided in the advanced colony of <span>${destination}</span>. Driven by curiosity, <span>${characterName}</span> decided to return the <span>${mObject}</span>, embarking on a mission across the <span>${travelScape}</span> where they uncovered the true essence of unity and innovation.</p>`
  }
  
  storyTypeOpts.forEach(storyTypeOpt => {
    if (storyTypeOpt.checked) {
      storyType = storyTypeOpt.value;
    }
    storyTypeOpt.addEventListener('click', () => {
      storyType = storyTypeOpt.value;
      changeStory(storyType, stories)
    })
  })
  storyBoard.style.display = 'block';
  changeStory(storyType, stories)
}
submitBtn.addEventListener('click', showStory)