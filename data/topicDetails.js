// Rich details per topic — causes, effects, figures, connections, source snippets
// Keyed by topic name (must match units.js node.name exactly)
// Not every topic has data yet — UI handles missing gracefully

const topicDetails = {

  "Cradles of Civilisation": {
    causes: [
      "End of the last Ice Age stabilised climate (~10,000 BCE)",
      "The Agricultural Revolution created food surpluses",
      "River valleys provided predictable water & fertile soil"
    ],
    effects: [
      "Emergence of cities, writing, and organised religion",
      "Social hierarchy & the division of labour",
      "Laid foundations for every subsequent civilisation"
    ],
    figures: [
      { name: "Hammurabi", dates: "c. 1810–1750 BCE", role: "King of Babylon", why: "Issued one of the earliest known written law codes." },
      { name: "Narmer (Menes)", dates: "c. 3150 BCE", role: "First pharaoh of unified Egypt", why: "Unified Upper and Lower Egypt, founding the First Dynasty." },
      { name: "Sargon of Akkad", dates: "c. 2334–2279 BCE", role: "Founder of the Akkadian Empire", why: "Created the world's first multi-ethnic empire." }
    ],
    connections: ["Ancient Egypt", "Ancient India & China", "The Bronze Age Collapse", "Human Origins & Prehistory"],
    sourceSnippet: {
      text: "If a man has destroyed the eye of a free man, they shall destroy his eye. If he has broken the bone of a free man, they shall break his bone.",
      attribution: "The Code of Hammurabi, c. 1754 BCE"
    }
  },

  "Human Origins & Prehistory": {
    causes: [
      "Climate changes driving adaptation",
      "Cognitive revolution ~70,000 years ago",
      "Tool-making & control of fire"
    ],
    effects: [
      "Sapiens spread globally, outcompeting other human species",
      "Agricultural Revolution made settlement possible",
      "Set the stage for civilisation"
    ],
    figures: [
      { name: "Lucy (Australopithecus)", dates: "c. 3.2 million years ago", role: "Famous hominid fossil", why: "Proved bipedalism predated large brains." }
    ],
    connections: ["Cradles of Civilisation"],
    sourceSnippet: {
      text: "The handprints in Chauvet Cave, made 36,000 years ago, are among the oldest human artworks. We cannot read their meaning, but we recognise the gesture: I was here.",
      attribution: "Paleolithic cave art, Chauvet, France"
    }
  },

  "Ancient Egypt": {
    causes: [
      "Predictable Nile flooding enabled large-scale agriculture",
      "Natural desert barriers provided protection",
      "Unification of Upper & Lower Egypt under Narmer"
    ],
    effects: [
      "3,000+ years of cultural continuity",
      "Monumental architecture that still stands today",
      "Influenced Greek, Roman, and Islamic civilisations"
    ],
    figures: [
      { name: "Hatshepsut", dates: "r. 1479–1458 BCE", role: "Female pharaoh", why: "One of the most successful rulers in Egyptian history." },
      { name: "Akhenaten", dates: "r. 1353–1336 BCE", role: "'Heretic' pharaoh", why: "Attempted to enforce monotheism — a radical break with tradition." },
      { name: "Ramses II", dates: "r. 1279–1213 BCE", role: "'Ramses the Great'", why: "Reigned 66 years; built more monuments than any other pharaoh." },
      { name: "Cleopatra VII", dates: "69–30 BCE", role: "Last pharaoh of Egypt", why: "Allied with Rome; her death ended Ptolemaic rule." }
    ],
    connections: ["Cradles of Civilisation", "Ancient Nubia & Kush", "The Roman Republic & Empire", "Rise of World Religions"],
    sourceSnippet: {
      text: "I am yesterday, today, and tomorrow, and I have the power to be born a second time.",
      attribution: "The Egyptian Book of the Dead, c. 1550 BCE"
    }
  },

  "Ancient Greece": {
    causes: [
      "Geography of peninsulas & islands encouraged independent city-states",
      "Trade with Egypt & the Near East spread ideas",
      "Persian threat united Greek poleis"
    ],
    effects: [
      "Invented democracy, philosophy & systematic science",
      "Alexander spread Greek culture from Egypt to India",
      "Became the foundation of Western civilisation"
    ],
    figures: [
      { name: "Pericles", dates: "c. 495–429 BCE", role: "Athenian statesman", why: "Led Athens during its Golden Age." },
      { name: "Socrates", dates: "c. 470–399 BCE", role: "Philosopher", why: "Founded Western philosophy through the Socratic method." },
      { name: "Alexander the Great", dates: "356–323 BCE", role: "Macedonian conqueror", why: "Created one of history's largest empires before age 33." }
    ],
    connections: ["The Persian Empires", "The Roman Republic & Empire", "Rise of World Religions", "The Renaissance"],
    sourceSnippet: {
      text: "Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves. It is called a democracy, because not the few but the many govern.",
      attribution: "Pericles, Funeral Oration, 431 BCE (via Thucydides)"
    }
  },

  "The Roman Republic & Empire": {
    causes: [
      "Strategic location in the Mediterranean",
      "Strong legal & political institutions (Republic)",
      "Disciplined, professional legions"
    ],
    effects: [
      "Latin became the root of Romance languages",
      "Roman law forms the basis of European legal systems",
      "Christianity spread across the empire and beyond",
      "Concepts of republic, senate & citizenship endure today"
    ],
    figures: [
      { name: "Julius Caesar", dates: "100–44 BCE", role: "General & dictator", why: "His crossing the Rubicon ended the Republic." },
      { name: "Augustus", dates: "63 BCE–14 CE", role: "First emperor", why: "Established the Principate and Pax Romana." },
      { name: "Constantine", dates: "272–337 CE", role: "Emperor", why: "Legalised Christianity & founded Constantinople." }
    ],
    connections: ["Ancient Greece", "The Byzantine Empire", "Rise of World Religions", "Medieval Europe", "Pre-Roman Europe"],
    sourceSnippet: {
      text: "I found Rome a city of bricks and left it a city of marble.",
      attribution: "Attributed to Augustus, c. 14 CE"
    }
  },

  "The Rise of Islam": {
    causes: [
      "Crisis of the Byzantine-Sasanian wars weakened both empires",
      "Trade networks connecting Arabia to wider world",
      "Muhammad's unifying religious message"
    ],
    effects: [
      "Islam spread from Spain to China within a century",
      "Preserved & translated Greek/Roman knowledge (Islamic Golden Age)",
      "Reshaped the Middle East, North Africa & Central Asia",
      "Transmitted mathematics (algebra) & science to medieval Europe"
    ],
    figures: [
      { name: "Muhammad", dates: "c. 570–632 CE", role: "Prophet of Islam", why: "Founded one of the world's great religions." },
      { name: "Harun al-Rashid", dates: "r. 786–809 CE", role: "Abbasid Caliph", why: "Presided over Baghdad's intellectual golden age." },
      { name: "Al-Khwarizmi", dates: "c. 780–850 CE", role: "Mathematician", why: "His work gave us 'algebra' and 'algorithm'." },
      { name: "Ibn Sina (Avicenna)", dates: "980–1037 CE", role: "Philosopher & physician", why: "His Canon of Medicine was used in Europe for centuries." }
    ],
    connections: ["The Byzantine Empire", "The Mongol Empire", "The Ottoman Empire", "African Kingdoms", "The Mughal Empire"],
    sourceSnippet: {
      text: "Seek knowledge even as far as China.",
      attribution: "Hadith attributed to the Prophet Muhammad"
    }
  },

  "The Mongol Empire": {
    causes: [
      "Steppe drought pushed tribes together",
      "Genghis Khan's political & military genius",
      "Mounted archers held a decisive military advantage"
    ],
    effects: [
      "Pax Mongolica enabled Silk Road trade at its peak",
      "Spread the Black Death along trade routes to Europe",
      "Facilitated Marco Polo's journey & European knowledge of Asia",
      "The Yuan Dynasty reunified China; Tamerlane inherited their legacy"
    ],
    figures: [
      { name: "Genghis Khan", dates: "c. 1162–1227", role: "Founder of the Mongol Empire", why: "Built the largest contiguous empire in history." },
      { name: "Kublai Khan", dates: "1215–1294", role: "Founder of Yuan Dynasty", why: "Grandson of Genghis; hosted Marco Polo." }
    ],
    connections: ["The Rise of Islam", "Medieval Europe", "Classical China", "Central Asia — Timurids & Turkic Peoples", "The Byzantine Empire"],
    sourceSnippet: {
      text: "The greatest happiness is to scatter your enemy, to drive him before you, to see his cities reduced to ashes, to see those who love him shrouded in tears, and to gather into your bosom his wives and daughters.",
      attribution: "Attributed to Genghis Khan"
    }
  },

  "The Renaissance": {
    causes: [
      "Italian wealth from Mediterranean trade",
      "Fall of Constantinople (1453) pushed Greek scholars west",
      "The printing press (c. 1440) spread ideas",
      "Rediscovery of classical Greek & Roman texts"
    ],
    effects: [
      "Scientific Revolution (Copernicus, Galileo, Newton)",
      "Protestant Reformation undermined Church authority",
      "Age of Exploration funded by Renaissance wealth",
      "Modern concepts of individualism & secular inquiry"
    ],
    figures: [
      { name: "Leonardo da Vinci", dates: "1452–1519", role: "Polymath", why: "Embodied Renaissance ideals — artist, scientist, engineer." },
      { name: "Michelangelo", dates: "1475–1564", role: "Sculptor & painter", why: "Sistine Chapel, David, St Peter's dome." },
      { name: "Lorenzo de' Medici", dates: "1449–1492", role: "Ruler of Florence", why: "Patron of Botticelli, Michelangelo & the cultural flourishing." }
    ],
    connections: ["The Byzantine Empire", "The Reformation", "Age of Exploration", "The Enlightenment"],
    sourceSnippet: {
      text: "Obstacles cannot crush me. Every obstacle yields to stern resolve. He who is fixed to a star does not change his mind.",
      attribution: "Leonardo da Vinci, notebooks"
    }
  },

  "Age of Exploration": {
    causes: [
      "Ottoman control of land routes to Asia",
      "Renaissance navigation tech — astrolabe, caravel, portolan maps",
      "Iberian competition (Portugal & Spain) for trade routes",
      "Desire for direct access to Asian spices & gold"
    ],
    effects: [
      "The Columbian Exchange — plants, animals, diseases, peoples",
      "Devastation of Indigenous American populations (~90% died)",
      "The transatlantic slave trade (12+ million Africans enslaved)",
      "First truly global economy & European dominance for 500 years"
    ],
    figures: [
      { name: "Christopher Columbus", dates: "1451–1506", role: "Italian navigator (for Spain)", why: "Opened European contact with the Americas." },
      { name: "Vasco da Gama", dates: "c. 1460–1524", role: "Portuguese navigator", why: "First European to reach India by sea." },
      { name: "Ferdinand Magellan", dates: "c. 1480–1521", role: "Portuguese navigator (for Spain)", why: "His crew first circumnavigated the globe." }
    ],
    connections: ["Pre-Columbian Americas", "The Renaissance", "The Ottoman Empire", "Imperialism & Colonialism", "Abolition & Reform"],
    sourceSnippet: {
      text: "They brought us parrots and balls of cotton and spears and many other things, which they exchanged for the glass beads and hawks' bells. They willingly traded everything they owned.",
      attribution: "Christopher Columbus, journal, 12 October 1492"
    }
  },

  "The Reformation": {
    causes: [
      "Perceived corruption in the Catholic Church (indulgences)",
      "The printing press spread Luther's ideas in weeks",
      "Political tensions between German princes & the Holy Roman Empire",
      "Rising literacy & vernacular Bibles"
    ],
    effects: [
      "Fractured Christendom into Catholic & Protestant branches",
      "Wars of Religion killed millions",
      "Peace of Westphalia (1648) created the modern state system",
      "Led eventually to religious toleration & secular governance"
    ],
    figures: [
      { name: "Martin Luther", dates: "1483–1546", role: "German theologian", why: "His 95 Theses sparked the Reformation." },
      { name: "John Calvin", dates: "1509–1564", role: "French-Swiss reformer", why: "Founded Calvinism; influenced Puritanism & capitalism." },
      { name: "Henry VIII", dates: "1491–1547", role: "King of England", why: "Broke with Rome to found the Church of England." }
    ],
    connections: ["The Renaissance", "The Enlightenment", "Age of Revolutions", "The Byzantine Empire"],
    sourceSnippet: {
      text: "Here I stand, I can do no other. God help me. Amen.",
      attribution: "Martin Luther, Diet of Worms, 1521"
    }
  },

  "The Industrial Revolution": {
    causes: [
      "British coal reserves & capital from colonial trade",
      "Agricultural Revolution freed up labour",
      "Stable government & property rights",
      "Scientific Revolution enabled technological innovation"
    ],
    effects: [
      "Global shift from agrarian to industrial economies",
      "Mass urbanisation & the rise of the working class",
      "Marxism emerged as critique of capitalism",
      "Environmental degradation & climate change begin"
    ],
    figures: [
      { name: "James Watt", dates: "1736–1819", role: "Inventor", why: "Improved the steam engine, powering the revolution." },
      { name: "Karl Marx", dates: "1818–1883", role: "Philosopher & economist", why: "Co-authored The Communist Manifesto critiquing industrial capitalism." },
      { name: "Friedrich Engels", dates: "1820–1895", role: "Philosopher & industrialist", why: "Documented working-class conditions in Manchester." }
    ],
    connections: ["The Enlightenment", "Imperialism & Colonialism", "Abolition & Reform", "The Russian Revolution", "Globalisation"],
    sourceSnippet: {
      text: "I worked in a worsted mill from seven in the morning till eight at night, with a thirty-minute break for lunch. I was eight years old.",
      attribution: "Testimony to British Parliamentary Committee on Factory Children's Labour, 1832"
    }
  },

  "World War I": {
    causes: [
      "MAIN: Militarism, Alliances, Imperialism, Nationalism",
      "Assassination of Archduke Franz Ferdinand (28 June 1914)",
      "German 'blank cheque' to Austria-Hungary",
      "Rigid mobilisation plans made war hard to stop"
    ],
    effects: [
      "17 million killed, 20 million wounded",
      "Four empires collapsed: Russian, German, Austro-Hungarian, Ottoman",
      "Treaty of Versailles set stage for WWII",
      "Russian Revolution & birth of the USSR",
      "Redrew Middle East borders (Sykes-Picot)"
    ],
    figures: [
      { name: "Gavrilo Princip", dates: "1894–1918", role: "Bosnian Serb assassin", why: "His bullets triggered the war." },
      { name: "Kaiser Wilhelm II", dates: "1859–1941", role: "German Emperor", why: "His aggressive diplomacy helped cause the war." },
      { name: "Woodrow Wilson", dates: "1856–1924", role: "US President", why: "His Fourteen Points shaped the peace." }
    ],
    connections: ["The Russian Revolution", "The Ottoman Empire", "The Interwar Period", "World War II", "The Middle East Since 1945"],
    sourceSnippet: {
      text: "Bent double, like old beggars under sacks, knock-kneed, coughing like hags, we cursed through sludge... My friend, you would not tell with such high zest to children ardent for some desperate glory, the old Lie: Dulce et decorum est pro patria mori.",
      attribution: "Wilfred Owen, 'Dulce et Decorum Est', 1917"
    }
  },

  "World War II": {
    causes: [
      "Unresolved tensions from Treaty of Versailles",
      "Great Depression fuelled extremism",
      "Appeasement emboldened Hitler",
      "Japanese imperialism in Asia"
    ],
    effects: [
      "70–85 million killed — deadliest conflict in history",
      "The Holocaust — 6 million Jews murdered",
      "Nuclear age begins (Hiroshima, Nagasaki)",
      "Cold War divides the world for 45 years",
      "End of European empires; UN established"
    ],
    figures: [
      { name: "Adolf Hitler", dates: "1889–1945", role: "Führer of Nazi Germany", why: "Instigated the war & orchestrated the Holocaust." },
      { name: "Winston Churchill", dates: "1874–1965", role: "British Prime Minister", why: "Rallied Britain during its darkest hour." },
      { name: "Franklin D. Roosevelt", dates: "1882–1945", role: "US President", why: "Led Allies; New Deal & Lend-Lease." },
      { name: "Joseph Stalin", dates: "1878–1953", role: "Soviet leader", why: "Red Army bore the brunt of defeating Hitler." }
    ],
    connections: ["The Interwar Period", "The Spanish Civil War", "Genocides of the 20th Century", "The Cold War", "The Russian Revolution"],
    sourceSnippet: {
      text: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
      attribution: "Winston Churchill, House of Commons, 4 June 1940"
    }
  },

  "The Cold War": {
    causes: [
      "Incompatible US & Soviet visions for postwar Europe",
      "The Yalta & Potsdam conferences' unresolved tensions",
      "Nuclear weapons created mutual distrust",
      "Ideological struggle between capitalism & communism"
    ],
    effects: [
      "Proxy wars: Korea, Vietnam, Afghanistan, Angola",
      "The nuclear arms race & doctrine of mutually assured destruction",
      "Space Race led to Moon landing & satellite communications",
      "Decolonisation accelerated as superpowers competed for allies",
      "Collapse of USSR (1991) ended the bipolar world"
    ],
    figures: [
      { name: "Harry Truman", dates: "1884–1972", role: "US President", why: "Truman Doctrine & Marshall Plan shaped Cold War strategy." },
      { name: "Nikita Khrushchev", dates: "1894–1971", role: "Soviet Premier", why: "De-Stalinisation; Cuban Missile Crisis." },
      { name: "Mikhail Gorbachev", dates: "1931–2022", role: "Last Soviet leader", why: "Glasnost, perestroika & peaceful end of Cold War." },
      { name: "Ronald Reagan", dates: "1911–2004", role: "US President", why: "'Tear down this wall' — pressed USSR economically." }
    ],
    connections: ["World War II", "Decolonisation", "The Space Race & Exploration", "Modern Latin America", "The Middle East Since 1945"],
    sourceSnippet: {
      text: "From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent.",
      attribution: "Winston Churchill, Fulton, Missouri, 5 March 1946"
    }
  },

  "The Mughal Empire": {
    causes: [
      "Fall of the Delhi Sultanate created a vacuum",
      "Babur's Timurid heritage gave him legitimacy & military skill",
      "Indian wealth and agricultural surplus to support empire"
    ],
    effects: [
      "Produced some of history's greatest architecture (Taj Mahal)",
      "Urdu language emerged from Persian-Hindi blend",
      "Mughal weakness enabled British colonisation",
      "1857 Rebellion led to direct British Raj"
    ],
    figures: [
      { name: "Babur", dates: "1483–1530", role: "Founder of Mughal Empire", why: "Brought Timurid civilisation into India." },
      { name: "Akbar the Great", dates: "1542–1605", role: "Mughal Emperor", why: "Religious tolerance & imperial consolidation." },
      { name: "Shah Jahan", dates: "1592–1666", role: "Mughal Emperor", why: "Built the Taj Mahal as a tomb for his wife Mumtaz." },
      { name: "Aurangzeb", dates: "1618–1707", role: "Mughal Emperor", why: "Extended empire but intolerance sparked decline." }
    ],
    connections: ["Central Asia — Timurids & Turkic Peoples", "The Rise of Islam", "Imperialism & Colonialism", "South Asia Since Partition"],
    sourceSnippet: {
      text: "If there be a paradise on earth, it is this, it is this, it is this.",
      attribution: "Inscription in the Diwan-i-Khas, Red Fort, Delhi (Shah Jahan's era)"
    }
  },

  "The Ottoman Empire": {
    causes: [
      "Decline of Byzantine power in Anatolia",
      "Turkic migrations from Central Asia",
      "Skilled military (janissaries) & administrative structure"
    ],
    effects: [
      "Controlled Mediterranean & Black Sea trade for centuries",
      "Fall of Constantinople ended Byzantine Empire (1453)",
      "Pushed Europeans to seek sea routes to Asia → Age of Exploration",
      "Modern Middle East borders drawn from Ottoman collapse"
    ],
    figures: [
      { name: "Mehmed II", dates: "1432–1481", role: "Ottoman Sultan", why: "Conquered Constantinople at age 21." },
      { name: "Suleiman the Magnificent", dates: "1494–1566", role: "Ottoman Sultan", why: "Empire reached its peak under his rule." },
      { name: "Mustafa Kemal Atatürk", dates: "1881–1938", role: "Founder of modern Turkey", why: "Abolished the sultanate; built secular nation-state." }
    ],
    connections: ["The Byzantine Empire", "Central Asia — Timurids & Turkic Peoples", "Age of Exploration", "World War I", "The Middle East Since 1945"],
    sourceSnippet: {
      text: "Cities, like forests, have their dens where all the vilest and most fearsome beasts hide. But in a city, such beasts are under two legs, not four.",
      attribution: "Suleiman the Magnificent"
    }
  },

  "Pre-Columbian Americas": {
    causes: [
      "Peopling of Americas via Beringia (c. 15,000+ years ago)",
      "Independent agricultural revolutions (corn, potatoes, quinoa)",
      "Isolation allowed unique civilisations to develop"
    ],
    effects: [
      "Contact with Europeans brought catastrophic disease epidemics",
      "Gold & silver flooded European economies",
      "American crops (potatoes, corn, tomatoes) reshaped global diets",
      "Indigenous populations declined by ~90% in a century"
    ],
    figures: [
      { name: "Pacal the Great", dates: "603–683 CE", role: "Maya king of Palenque", why: "His tomb is one of the great Maya archaeological finds." },
      { name: "Montezuma II", dates: "c. 1466–1520", role: "Aztec emperor", why: "Ruled when Cortés arrived — his death marked the end." },
      { name: "Atahualpa", dates: "c. 1502–1533", role: "Last Inca emperor", why: "Captured & executed by Pizarro; signalled Inca collapse." }
    ],
    connections: ["Age of Exploration", "Abolition & Reform", "Modern Latin America"],
    sourceSnippet: {
      text: "When the Spaniards fainted from the heat and weight of their armour, and could no longer fight, the Tlaxcalans carried them off the battlefield on their backs.",
      attribution: "Bernal Díaz del Castillo, The Conquest of New Spain, c. 1568"
    }
  },

  "The Middle East Since 1945": {
    causes: [
      "Collapse of the Ottoman Empire redrew borders",
      "Discovery of vast oil reserves",
      "Creation of Israel (1948)",
      "Cold War superpower competition"
    ],
    effects: [
      "Multiple Arab-Israeli wars",
      "1973 oil shock transformed global economy",
      "Rise of political Islam",
      "Gulf Wars & War on Terror reshaped US foreign policy",
      "Ongoing Syrian, Yemeni & Palestinian conflicts"
    ],
    figures: [
      { name: "David Ben-Gurion", dates: "1886–1973", role: "Israel's first PM", why: "Declared Israeli independence in 1948." },
      { name: "Gamal Abdel Nasser", dates: "1918–1970", role: "Egyptian President", why: "Leader of Arab nationalism; Suez Crisis." },
      { name: "Yasser Arafat", dates: "1929–2004", role: "PLO Chairman & PA President", why: "Leader of Palestinian national movement." },
      { name: "Ayatollah Khomeini", dates: "1902–1989", role: "Iran's Supreme Leader", why: "Led the 1979 Islamic Revolution." }
    ],
    connections: ["The Ottoman Empire", "World War I", "The Cold War", "Decolonisation", "Globalisation"],
    sourceSnippet: {
      text: "Every people has a right to determine its own destiny... We shall not compromise. We shall take our right of existence and dignity.",
      attribution: "Gamal Abdel Nasser, nationalising the Suez Canal, 1956"
    }
  },

};
