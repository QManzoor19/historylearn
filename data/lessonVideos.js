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
  "Ancient Egypt::2": {
    videoId: "7JrYimyTH1o",
    title: "Building Khufu's Pyramid — Lost Secrets of the Pyramid",
    channel: "Documentary",
    blurb: "How the Old Kingdom built the Great Pyramid — engineering, workers, and the Mark Lehner discoveries."
  },
  "Ancient Egypt::3": {
    videoId: "RtrpGKUjVdU",
    title: "The Middle Kingdom: A Complete Overview (c. 2055 BC – c. 1650 BC)",
    channel: "Historical documentary",
    blurb: "Mentuhotep II, the 12th Dynasty, Senusret III, and the literary golden age of Middle Kingdom Egypt."
  },
  "Ancient Egypt::4": {
    videoId: "ObCKrypZC68",
    title: "New Kingdom Egypt: A Complete Overview From Ahmose to Ramesses",
    channel: "Historical documentary",
    blurb: "The rise of imperial Egypt — Ahmose, Hatshepsut, Thutmose III, and the Amarna Letters."
  },
  "Ancient Egypt::5": {
    videoId: "hPlHwTXi7tk",
    title: "AKHENATON: The Rebel Pharaoh",
    channel: "Ancient Egypt History Documentary",
    blurb: "The religious revolution at Amarna, Nefertiti, Tutankhamun's restoration, and Ramses II."
  },
  "Ancient Egypt::6": {
    videoId: "MhRWu0WNKhE",
    title: "Egypt, The Book of the Dead",
    channel: "Planet Doc Full Documentaries",
    blurb: "The pantheon, mummification, the Weighing of the Heart, and the journey to the afterlife."
  },
  "Ancient Egypt::7": {
    videoId: "Ju2JBoe9C7A",
    title: "Decoding Egyptian Hieroglyphs: the Rosetta Stone, Champollion, and Young",
    channel: "Voices of Ancient Egypt",
    blurb: "How hieroglyphs work, the 1799 discovery of the Rosetta Stone, and Champollion's 1822 breakthrough."
  },
  "Ancient Egypt::8": {
    videoId: "4kuZcxB8hzY",
    title: "Alexander To Cleopatra: Ptolemaic Egypt — FULL DOCUMENTARY",
    channel: "Historical documentary",
    blurb: "The long twilight — Kushite 25th Dynasty, Persian rule, Alexander's founding of Alexandria, the Ptolemies, and Cleopatra."
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

  // ─── Ancient Nubia & Kush — verified per-module videos ───
  "Ancient Nubia & Kush": {
    videoId: "lnoqlCV__z4",
    title: "Introduction to Ancient Nubia and the Kingdom of Kush",
    channel: "Fall of Civilizations",
    blurb: "Paul Cooper's overview of Nubian civilisation — the perfect starting point for any module."
  },
  "Ancient Nubia & Kush::1": {
    videoId: "RINKkVY4prE",
    title: "Ancient Nubia Part 1: Pre-Kerma — Kingdoms of Kush",
    channel: "Archaeology in the Community × ASOR",
    blurb: "Scholarly introduction to the A-Group, C-Group, and the earliest Nubian civilisations."
  },
  "Ancient Nubia & Kush::2": {
    videoId: "b2OCA8BAtF0",
    title: "KERMA, the First Kingdom of Sudan — Charles Bonnet",
    channel: "DAL Cultural Forum",
    blurb: "Lecture by Charles Bonnet, the Swiss archaeologist who has directed the Kerma excavations since 1977."
  },
  "Ancient Nubia & Kush::3": {
    videoId: "qbxLwgLwpoQ",
    title: "Ancient Nubia Part 2: Pre-Kerma — Kingdoms of Kush",
    channel: "Archaeology in the Community × ASOR",
    blurb: "Continuation of the ASOR Nubia series — covers Egyptian-Nubian interactions during the New Kingdom."
  },
  "Ancient Nubia & Kush::4": {
    videoId: "npMeN8kG3xs",
    title: "The Black Pharaohs: The Kingdoms of Kush",
    channel: "See U in History",
    blurb: "Animated history of the 25th Dynasty — Piye, Taharqa, and the Kushite rule of Egypt."
  },
  "Ancient Nubia & Kush::5": {
    videoId: "Cj7_3ezFFp0",
    title: "Nubian Pyramids — The Lost History of Sudan's Ancient Kingdom",
    channel: "Documentary",
    blurb: "Survey of the Meroitic pyramids and the kingdom that built more pyramids than Egypt itself."
  },
  "Ancient Nubia & Kush::6": {
    videoId: "E1R-zIMSZq8",
    title: "The Kingdom of Kush: A Brief History of Ancient Nubia",
    channel: "Historical overview",
    blurb: "Concise survey including Kushite religion, the kandake institution, and social structure."
  },
  "Ancient Nubia & Kush::7": {
    videoId: "u8U1SHb-G6Q",
    title: "The Kingdom of Kush: A Complete Overview (754 BC – 656 BC)",
    channel: "Historical documentary",
    blurb: "Kushite art, monuments, and the cultural production of Napata and Meroë."
  },
  "Ancient Nubia & Kush::8": {
    videoId: "jKIoLwKYpuY",
    title: "Nubia — Christian Kingdoms in the Heart of Africa",
    channel: "Documentary",
    blurb: "The post-Meroitic Christian Nubian kingdoms of Nobadia, Makuria, and Alodia."
  },

};
