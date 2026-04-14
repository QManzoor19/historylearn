// Curated external resources — tagged by era and type
const resourcesData = [
  // === YouTube Channels & Series ===
  {
    title: "Crash Course World History",
    url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9",
    type: "video",
    icon: "🎬",
    description: "John Green's engaging, fast-paced overview of world history in ~40 episodes. Perfect for building a broad foundation.",
    tags: ["all"],
    difficulty: "beginner"
  },
  {
    title: "Kings and Generals",
    url: "https://www.youtube.com/@KingsandGenerals",
    type: "video",
    icon: "🎬",
    description: "Detailed animated documentaries on battles, campaigns, and civilisations from ancient to modern times.",
    tags: ["ancient", "classical", "medieval", "early-modern"],
    difficulty: "intermediate"
  },
  {
    title: "OverSimplified",
    url: "https://www.youtube.com/@OverSimplified",
    type: "video",
    icon: "🎬",
    description: "Humorous, animated explainers on major historical events — the French Revolution, WWI, WWII, and more.",
    tags: ["early-modern", "world-wars"],
    difficulty: "beginner"
  },
  {
    title: "Epic History TV",
    url: "https://www.youtube.com/@EpicHistoryTV",
    type: "video",
    icon: "🎬",
    description: "Cinematic, map-based documentaries on Napoleon, Alexander the Great, WWI, and other grand narratives.",
    tags: ["classical", "early-modern", "world-wars"],
    difficulty: "intermediate"
  },
  {
    title: "Historia Civilis",
    url: "https://www.youtube.com/@HistoriaCivilis",
    type: "video",
    icon: "🎬",
    description: "Thoughtful, minimalist deep dives into Roman political history and ancient governance.",
    tags: ["classical"],
    difficulty: "intermediate"
  },
  {
    title: "Fall of Civilizations Podcast",
    url: "https://www.youtube.com/@FallofCivilizations",
    type: "video",
    icon: "🎬",
    description: "Beautiful, long-form explorations of how and why great civilisations collapsed — from Rome to the Aztecs.",
    tags: ["ancient", "classical", "medieval"],
    difficulty: "intermediate"
  },

  // === Podcasts ===
  {
    title: "Hardcore History (Dan Carlin)",
    url: "https://www.dancarlin.com/hardcore-history-series/",
    type: "podcast",
    icon: "🎙️",
    description: "Legendary long-form podcast exploring pivotal moments in history. 'Blueprint for Armageddon' (WWI) is essential listening.",
    tags: ["all"],
    difficulty: "intermediate"
  },
  {
    title: "Revolutions (Mike Duncan)",
    url: "https://thehistoryofrome.typepad.com/revolutions_702/",
    type: "podcast",
    icon: "🎙️",
    description: "Detailed series on the English, American, French, Haitian, and Russian revolutions. From the creator of 'The History of Rome.'",
    tags: ["early-modern", "nineteenth"],
    difficulty: "intermediate"
  },
  {
    title: "The Rest Is History",
    url: "https://www.goalhangerpodcasts.com/the-rest-is-history",
    type: "podcast",
    icon: "🎙️",
    description: "Tom Holland and Dominic Sandbrook discuss history with wit and depth — from ancient Rome to modern politics.",
    tags: ["all"],
    difficulty: "beginner"
  },

  // === Books ===
  {
    title: "Sapiens — Yuval Noah Harari",
    url: "https://www.ynharari.com/book/sapiens-2/",
    type: "book",
    icon: "📚",
    description: "A sweeping history of humankind from the Stone Age to the present. Accessible, provocative, and great for seeing the big picture.",
    tags: ["all"],
    difficulty: "beginner"
  },
  {
    title: "Guns, Germs, and Steel — Jared Diamond",
    url: "https://en.wikipedia.org/wiki/Guns,_Germs,_and_Steel",
    type: "book",
    icon: "📚",
    description: "Why did certain civilisations dominate? Diamond argues geography, agriculture, and disease — not racial superiority — explain global inequality.",
    tags: ["ancient", "early-modern"],
    difficulty: "intermediate"
  },
  {
    title: "The Silk Roads — Peter Frankopan",
    url: "https://en.wikipedia.org/wiki/The_Silk_Roads:_A_New_History_of_the_World",
    type: "book",
    icon: "📚",
    description: "A recentring of world history around Central Asia and the trade routes that connected civilisations for millennia.",
    tags: ["classical", "medieval", "early-modern"],
    difficulty: "intermediate"
  },
  {
    title: "A People's History of the United States — Howard Zinn",
    url: "https://en.wikipedia.org/wiki/A_People%27s_History_of_the_United_States",
    type: "book",
    icon: "📚",
    description: "US history told from the perspective of marginalised groups — workers, women, Indigenous peoples, and enslaved Africans.",
    tags: ["early-modern", "nineteenth", "contemporary"],
    difficulty: "intermediate"
  },

  // === Websites & Interactive ===
  {
    title: "World History Encyclopedia",
    url: "https://www.worldhistory.org/",
    type: "website",
    icon: "🌐",
    description: "A free, peer-reviewed encyclopedia of world history with articles, images, maps, and timelines. Excellent reference.",
    tags: ["all"],
    difficulty: "beginner"
  },
  {
    title: "Chronas — Interactive World History Map",
    url: "https://chronas.org/",
    type: "website",
    icon: "🗺️",
    description: "An interactive, community-built map of world history. Explore how borders, cultures, and rulers changed over time.",
    tags: ["all"],
    difficulty: "beginner"
  },
  {
    title: "Our World in Data",
    url: "https://ourworldindata.org/",
    type: "website",
    icon: "📊",
    description: "Data-driven research and visualisations on global change — population, health, war, poverty, and more. Great for the modern era.",
    tags: ["nineteenth", "contemporary"],
    difficulty: "intermediate"
  },
  {
    title: "British Museum — Virtual Collections",
    url: "https://www.britishmuseum.org/collection",
    type: "website",
    icon: "🏛️",
    description: "Browse millions of artifacts from every era and region. See the Rosetta Stone, Mesopotamian tablets, and more — all online.",
    tags: ["ancient", "classical", "medieval"],
    difficulty: "beginner"
  },
  {
    title: "Khan Academy — World History",
    url: "https://www.khanacademy.org/humanities/world-history",
    type: "website",
    icon: "🎓",
    description: "Free structured courses with videos, articles, and practice exercises covering all periods of world history.",
    tags: ["all"],
    difficulty: "beginner"
  },
];
