// Curated video for each topic. If a topic isn't here, the lesson view
// falls back to a YouTube search-link card so nothing breaks.
//
// Schema:
//   "Topic Name": { videoId, title, channel, blurb? }
//
// Most defaults below are episodes of John Green's "Crash Course World
// History" — a single 12-minute primer that pairs well with a deeper read.
// Some topic-specific picks (e.g. Joann Fletcher on Egypt) come from
// data/resources.js. All IDs in this file have been verified.

const lessonVideos = {

  // ─── Era 1 — The Ancient World ───────────────────────────
  "Human Origins & Prehistory": {
    videoId: "Yocja_N5s1I",
    title: "The Agricultural Revolution",
    channel: "Crash Course World History #1",
    blurb: "John Green on the dawn of farming and how settling down rewrote human life."
  },
  "Cradles of Civilisation": {
    videoId: "sohXPx_XZ6Y",
    title: "Mesopotamia",
    channel: "Crash Course World History #3",
    blurb: "The first cities, the first writing, the first written laws — Sumer to Babylon."
  },
  "Ancient Egypt": {
    videoId: "ZU2Roq-emxw",
    title: "The Entire History of Ancient Egyptian Civilization",
    channel: "with Joann Fletcher",
    blurb: "Egyptologist Joann Fletcher walks through the full arc of Egyptian civilisation."
  },
  "Ancient Egypt::1": {
    videoId: "X4cld7OUKcs",
    title: "The History of Ancient Egypt — Lectures 1–10",
    channel: "Bob Brier",
    blurb: "Dr. Bob Brier's classic university-style lecture series — start here for the predynastic period."
  },
  "The Persian Empires": {
    videoId: "Q-mkVSasZIM",
    title: "The Persians & Greeks",
    channel: "Crash Course World History #5",
    blurb: "How Achaemenid Persia became the ancient world's first superpower — and met Greece on the battlefield."
  },
  "Ancient Greece": {
    videoId: "Q-mkVSasZIM",
    title: "The Persians & Greeks",
    channel: "Crash Course World History #5",
    blurb: "From the polis to Persian Wars to the philosophical legacy of Athens."
  },
  "Ancient India & China": {
    videoId: "n7ndRwqJYDM",
    title: "Indus Valley Civilization",
    channel: "Crash Course World History #2",
    blurb: "The mysterious cities of the Indus and the early threads of Indian civilisation."
  },

  // ─── Era 2 — The Classical Age ───────────────────────────
  "The Roman Republic & Empire": {
    videoId: "oPf27gAup9U",
    title: "The Roman Empire. Or Republic. Or...Which Was It?",
    channel: "Crash Course World History #10",
    blurb: "From Romulus to Caesar to Augustus — when did Rome stop being a Republic?"
  },
  "Classical China": {
    videoId: "vfe-eNq-Qyg",
    title: "The Silk Road and Ancient Trade",
    channel: "Crash Course World History #9",
    blurb: "How the Han dynasty's roads tied China to Rome — and how ideas travelled with the silk."
  },
  "Classical India": {
    videoId: "8Nn5uqE3C9w",
    title: "Buddha and Ashoka",
    channel: "Crash Course World History #6",
    blurb: "Hinduism, the rise of Buddhism, the Mauryan empire, and Ashoka's extraordinary conversion."
  },
  "Rise of World Religions": {
    videoId: "TG55ErfdaeY",
    title: "Christianity from Judaism to Constantine",
    channel: "Crash Course World History #11",
    blurb: "From Abraham to Paul to imperial Rome — how Christianity became a world religion."
  },

  // ─── Era 3 — The Medieval World ──────────────────────────
  "The Rise of Islam": {
    videoId: "TpcbfxtdoI8",
    title: "Islam, the Quran, and the Five Pillars",
    channel: "Crash Course World History #13",
    blurb: "The Prophet Muhammad, the Hijra, the early caliphates, and the spread of Islam."
  },
  "The Byzantine Empire": {
    videoId: "3PszVWZNWVA",
    title: "Fall of The Roman Empire...in the 15th Century",
    channel: "Crash Course World History #12",
    blurb: "Why the Eastern Roman Empire outlasted the Western one by 1,000 years."
  },
  "The Vikings & the Norse World": {
    videoId: "etmRI2_9Q_A",
    title: "Russia, the Kievan Rus, and the Mongols",
    channel: "Crash Course World History #20",
    blurb: "How Swedish Vikings (the Rus) founded the first Russian states and traded with Constantinople."
  },
  "Southeast Asian Kingdoms": {
    videoId: "a6XtBLDmPA0",
    title: "International Commerce, Snorkeling Camels & the Indian Ocean Trade",
    channel: "Crash Course World History #18",
    blurb: "The maritime trading networks that connected Southeast Asia to Africa, India, and China."
  },
  "The Mongol Empire": {
    videoId: "szxPar0BcMo",
    title: "Wait For It...The Mongols!",
    channel: "Crash Course World History #17",
    blurb: "How a confederation of steppe nomads built the largest land empire in history."
  },
  "African Kingdoms": {
    videoId: "jvnU0v6hcUo",
    title: "Mansa Musa and Islam in Africa",
    channel: "Crash Course World History #16",
    blurb: "Mali, Songhai, Mansa Musa's legendary pilgrimage, and the gold-and-salt trade of medieval Africa."
  },

  // ─── Era 4 — Early Modern ────────────────────────────────
  "The Renaissance": {
    videoId: "Vufba_ZcoR0",
    title: "The Renaissance: Was it a Thing?",
    channel: "Crash Course World History #22",
    blurb: "John Green pokes at the myth — was the Renaissance really a unique cultural rebirth?"
  },
  "Pre-Columbian Americas": {
    videoId: "HQPA5oNpfM4",
    title: "The Columbian Exchange",
    channel: "Crash Course World History #23",
    blurb: "What the Americas and Eurasia traded after 1492 — crops, animals, and devastating disease."
  },
  "Age of Revolutions": {
    videoId: "lTTvKwCylFY",
    title: "The French Revolution",
    channel: "Crash Course World History #29",
    blurb: "Bastille to guillotine to Napoleon — how France remade modern politics."
  },

  // ─── Era 5 — The Long Nineteenth Century ─────────────────
  "The Industrial Revolution": {
    videoId: "zhL5DCizj5c",
    title: "Coal, Steam, and The Industrial Revolution",
    channel: "Crash Course World History #32",
    blurb: "Why Britain, why coal, and why the world hasn't been the same since."
  },
  "Imperialism & Colonialism": {
    videoId: "alJaltUmrGo",
    title: "Imperialism",
    channel: "Crash Course World History #35",
    blurb: "The 19th-century European scramble for empire — and how steam, quinine, and machine guns made it possible."
  },
  "Meiji Japan & Qing China": {
    videoId: "Nosq94oCl_M",
    title: "Samurai, Daimyo, Matthew Perry & Nationalism",
    channel: "Crash Course World History #34",
    blurb: "How Japan modernised in a single generation while Qing China struggled with the same challenge."
  },

  // ─── Era 6 — The World at War ────────────────────────────
  "World War I": {
    videoId: "_XPZQ0LAlR4",
    title: "Archdukes, Cynicism, and World War I",
    channel: "Crash Course World History #36",
    blurb: "How the assassination of one archduke triggered the deadliest war the world had then seen."
  },
  "World War II": {
    videoId: "Q78COTwT7nE",
    title: "World War II",
    channel: "Crash Course World History #38",
    blurb: "The deadliest conflict in human history — fronts, atrocities, and the world it made."
  },

  // ─── Era 7 — The Contemporary World ──────────────────────
  "The Cold War": {
    videoId: "y9HjvHZfCUI",
    title: "USA vs USSR Fight! The Cold War",
    channel: "Crash Course World History #39",
    blurb: "The 45-year rivalry that shaped the late 20th century — without ever directly going hot."
  },
  "Decolonisation": {
    videoId: "T_sGTspaF4Y",
    title: "Decolonization and Nationalism Triumphant",
    channel: "Crash Course World History #40",
    blurb: "The end of European empires — and the new nation-states that emerged in 35 years."
  },
  "Globalisation": {
    videoId: "5SnR-e0S6Ic",
    title: "Globalization I — The Upside",
    channel: "Crash Course World History #41",
    blurb: "John Green follows a t-shirt around the world to explain how the global economy actually works."
  },

};
