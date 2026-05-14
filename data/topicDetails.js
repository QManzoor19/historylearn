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

  "Classical China": {
    causes: [
      "Centuries of Warring States exhaustion created appetite for unification",
      "Qin's harsh legalist administration produced a centralised state machine",
      "Iron tools and improved agriculture supported a much larger population"
    ],
    effects: [
      "Established a unified Chinese state, script, and bureaucratic model that endured for 2,000+ years",
      "Created the Silk Road and connected Han China to Rome via Central Asia",
      "Confucian civil-service examinations became a model for meritocratic government"
    ],
    figures: [
      { name: "Qin Shi Huangdi", dates: "r. 221–210 BCE", role: "First Emperor of China", why: "Unified the Warring States, standardised script and weights, built the first Great Wall — and the Terracotta Army." },
      { name: "Liu Bang (Emperor Gaozu)", dates: "r. 202–195 BCE", role: "Founder of the Han Dynasty", why: "A peasant who became emperor, replacing brutal Legalism with Confucian governance." },
      { name: "Han Wudi", dates: "r. 141–87 BCE", role: "Han 'Martial Emperor'", why: "Expanded the empire, made Confucianism the state ideology, opened the Silk Road." },
      { name: "Zhang Qian", dates: "d. 113 BCE", role: "Han diplomat", why: "His mission to Central Asia opened up the Silk Road trade network." },
      { name: "Cai Lun", dates: "d. c. 121 CE", role: "Han eunuch & official", why: "Credited with perfecting paper-making — a technology that took over a millennium to reach Europe." }
    ],
    connections: ["Ancient India & China", "Classical India", "The Roman Republic & Empire", "The Mongol Empire"],
    sourceSnippet: {
      text: "Burn the books and bury the scholars. Let no one again study the past to criticise the present.",
      attribution: "Edict attributed to Li Si, chancellor under Qin Shi Huangdi, 213 BCE"
    }
  },

  "Classical India": {
    causes: [
      "The Mauryan unification of the subcontinent created political stability for cultural development",
      "Trade with the Hellenistic world and the Silk Road brought wealth and ideas",
      "The patronage of Buddhist and Hindu rulers funded art, science, and literature"
    ],
    effects: [
      "Spread Buddhism across Asia, transforming the religious geography of the continent",
      "Developed the decimal number system with zero — the basis of modern mathematics",
      "Crystallised Hinduism in its modern devotional form, with the great epics in their final shape"
    ],
    figures: [
      { name: "Chandragupta Maurya", dates: "r. 322–298 BCE", role: "Founder of the Mauryan Empire", why: "Unified the Indian subcontinent for the first time and built a sophisticated bureaucratic state." },
      { name: "Ashoka", dates: "r. 268–232 BCE", role: "Mauryan Emperor", why: "Renounced violent conquest after Kalinga, converted to Buddhism, and inscribed his moral vision on rocks across his empire." },
      { name: "Chandragupta II", dates: "r. c. 380–415 CE", role: "Gupta Emperor", why: "Presided over India's classical golden age of art, mathematics, and literature." },
      { name: "Aryabhata", dates: "476–550 CE", role: "Mathematician & astronomer", why: "Calculated π, proposed Earth's rotation, and helped develop the decimal/zero number system." },
      { name: "Kalidasa", dates: "c. 4th–5th century CE", role: "Sanskrit poet & playwright", why: "Author of Shakuntala — the high point of classical Sanskrit literature." }
    ],
    connections: ["Ancient India & China", "Classical China", "Rise of World Religions", "The Mughal Empire"],
    sourceSnippet: {
      text: "All men are my children. As I desire for my own children that they should obtain welfare and happiness in this world and the next, so do I desire it for all men.",
      attribution: "Edicts of Ashoka, c. 250 BCE"
    }
  },

  "Rise of World Religions": {
    causes: [
      "Multi-ethnic empires (Persian, Mauryan, Roman, Han) needed religious frameworks that crossed tribes and cities",
      "Long-distance trade routes carried missionaries and scriptures alongside merchants",
      "Writing made religious teaching durable and portable, outliving founders"
    ],
    effects: [
      "Drew the religious map of Eurasia that still largely holds today — Buddhist Asia, Christian Europe, Hindu India",
      "Created institutions (monasteries, churches, councils) that became centres of learning, welfare, and continuity through political collapse",
      "Established universal moral frameworks that crossed ethnic and class lines"
    ],
    figures: [
      { name: "Siddhartha Gautama (the Buddha)", dates: "c. 563–483 BCE", role: "Founder of Buddhism", why: "His teaching on suffering, impermanence, and the Eightfold Path became the basis of a faith that would shape Asia." },
      { name: "Jesus of Nazareth", dates: "c. 4 BCE – 30 CE", role: "Founder of Christianity", why: "His teachings, transmitted by his followers after his execution, grew into the dominant religion of the Roman world and beyond." },
      { name: "Paul of Tarsus", dates: "c. 5–67 CE", role: "Apostle & theologian", why: "Reframed Christianity as a universal faith, opening it to non-Jews — the decisive turn that made it a world religion." },
      { name: "Constantine the Great", dates: "r. 306–337 CE", role: "Roman Emperor", why: "Legalised Christianity in 313 CE; his conversion fused Roman imperial structure with Christian institutions." },
      { name: "Ashoka", dates: "r. 268–232 BCE", role: "Mauryan Emperor", why: "First state sponsor of Buddhism — sent missionaries from Sri Lanka to Greece." }
    ],
    connections: ["Classical India", "Classical China", "The Roman Republic & Empire", "The Rise of Islam", "Medieval Europe"],
    sourceSnippet: {
      text: "There is neither Jew nor Greek, slave nor free, male nor female, for you are all one in Christ Jesus.",
      attribution: "Paul, Letter to the Galatians, 3:28, c. 50 CE"
    }
  },

  "Medieval Europe": {
    causes: [
      "Collapse of central Roman authority required new local arrangements",
      "Christian Church inherited Roman administrative structures and Latin learning",
      "Viking, Magyar, and Saracen raids made local self-defence essential, fostering feudalism"
    ],
    effects: [
      "Built durable institutions — universities, parliaments, common law, guild towns — that underpin modern Europe",
      "Cathedrals and Gothic art produced one of the great visual cultures of human history",
      "Late medieval crises (Black Death, Hundred Years' War) destabilised feudalism and set the stage for early modernity"
    ],
    figures: [
      { name: "Charlemagne", dates: "r. 768–814", role: "King of the Franks, first Holy Roman Emperor", why: "Briefly reunited much of Western Europe and sponsored a renaissance of Latin learning." },
      { name: "Pope Gregory VII", dates: "r. 1073–1085", role: "Reforming pope", why: "Forced Emperor Henry IV to do penance at Canossa, asserting papal supremacy over secular rulers." },
      { name: "Thomas Aquinas", dates: "1225–1274", role: "Dominican theologian", why: "Synthesised Aristotle and Christianity in the Summa Theologica — the high point of medieval philosophy." },
      { name: "William the Conqueror", dates: "r. 1066–1087", role: "Norman king of England", why: "1066 invasion fused Norman feudalism with Anglo-Saxon governance, shaping English law forever." }
    ],
    connections: ["The Byzantine Empire", "The Rise of Islam", "The Vikings & the Norse World", "The Renaissance", "The Reformation"],
    sourceSnippet: {
      text: "When Adam delved and Eve span, who was then the gentleman?",
      attribution: "John Ball, sermon during the English Peasants' Revolt, 1381"
    }
  },

  "The Byzantine Empire": {
    causes: [
      "The eastern Roman Empire was richer, more urbanised, and more defensible than the West",
      "Constantinople's strategic location and triple walls deterred invasion for nearly a millennium",
      "Continuity of Roman law, administration, and Greek culture provided unmatched institutional depth"
    ],
    effects: [
      "Preserved classical Greek learning that would later seed the Italian Renaissance",
      "Codified Roman law in Justinian's Corpus Juris Civilis — basis of much continental European law",
      "Christianised the Slavs, gave Russia its alphabet (Cyrillic) and church, and shaped the Balkans"
    ],
    figures: [
      { name: "Justinian I", dates: "r. 527–565", role: "Byzantine Emperor", why: "Reconquered parts of the West, codified Roman law, built Hagia Sophia." },
      { name: "Theodora", dates: "c. 500–548", role: "Empress, wife of Justinian", why: "Probably saved Justinian's throne during the Nika Riots; pushed reforms protecting women." },
      { name: "Cyril and Methodius", dates: "9th century", role: "Missionary brothers", why: "Christianised the Slavs and invented the alphabet that became Cyrillic." },
      { name: "Constantine XI Palaiologos", dates: "r. 1449–1453", role: "Last Byzantine Emperor", why: "Died defending Constantinople when it fell to the Ottomans in 1453." }
    ],
    connections: ["The Roman Republic & Empire", "Medieval Europe", "The Rise of Islam", "The Ottoman Empire"],
    sourceSnippet: {
      text: "We knew not whether we were in heaven or on earth, for surely there is no such splendour or beauty anywhere on earth.",
      attribution: "Envoys of Prince Vladimir of Kiev describing Hagia Sophia, c. 987"
    }
  },

  "The Vikings & the Norse World": {
    causes: [
      "Population pressure and political fragmentation in Scandinavia",
      "Development of the seaworthy longship enabled long-distance raiding and trade",
      "Wealthy, weakly-defended monasteries on European coasts offered easy targets"
    ],
    effects: [
      "Founded states from Ireland (Dublin) to France (Normandy) to Russia (the Rus)",
      "Reached North America c. 1000 CE — 500 years before Columbus",
      "Profoundly influenced English language, English law, and the politics of medieval Europe"
    ],
    figures: [
      { name: "Alfred the Great", dates: "r. 871–899", role: "King of Wessex", why: "Stopped the Viking conquest of England, laid foundations for a unified English kingdom." },
      { name: "Rollo", dates: "c. 860–933", role: "Viking founder of Normandy", why: "Granted Normandy in 911; his descendants — including William the Conqueror — reshaped England." },
      { name: "Leif Erikson", dates: "c. 970–1020", role: "Norse explorer", why: "Reached Vinland (Newfoundland) c. 1000 — the first European to reach North America." },
      { name: "Harald Hardrada", dates: "1015–1066", role: "King of Norway", why: "Served in the Varangian Guard, sought England's throne, died at Stamford Bridge — symbolic end of the Viking Age." }
    ],
    connections: ["Medieval Europe", "The Byzantine Empire", "Pre-Columbian Americas"],
    sourceSnippet: {
      text: "From the fury of the Northmen, deliver us, O Lord.",
      attribution: "Anglo-Saxon prayer, 9th century"
    }
  },

  "Medieval Japan & Korea": {
    causes: [
      "Adoption of Chinese script, Buddhism, and bureaucratic models seeded both states",
      "Geographic isolation allowed distinct cultural development from China",
      "Fragmentation of central authority gave rise to warrior elites (samurai) in Japan"
    ],
    effects: [
      "Established the shogun-emperor dual system in Japan, lasting until 1868",
      "Produced world-class literature (Tale of Genji), aesthetics (Zen, wabi-sabi), and craft traditions",
      "Korea's hangul alphabet and movable metal type were major contributions to global literacy"
    ],
    figures: [
      { name: "Murasaki Shikibu", dates: "c. 973–1031", role: "Heian court lady & author", why: "Wrote The Tale of Genji, often called the world's first novel." },
      { name: "Minamoto no Yoritomo", dates: "1147–1199", role: "First shogun of Japan", why: "Founded the Kamakura shogunate, beginning 700 years of military rule." },
      { name: "Sejong the Great", dates: "r. 1418–1450", role: "Joseon king of Korea", why: "Commissioned the Hangul alphabet, transforming Korean literacy." },
      { name: "Yi Sun-sin", dates: "1545–1598", role: "Korean admiral", why: "Defended Korea during Hideyoshi's invasions with revolutionary 'turtle ship' tactics." },
      { name: "Tokugawa Ieyasu", dates: "1543–1616", role: "First Tokugawa shogun", why: "Reunified Japan after Sengoku and founded a dynasty that ruled until 1868." }
    ],
    connections: ["Classical China", "The Mongol Empire", "Meiji Japan & Qing China"],
    sourceSnippet: {
      text: "The sound of the Gion Shōja bells echoes the impermanence of all things; the colour of the sāla flowers reveals the truth that the prosperous must decline.",
      attribution: "Opening of The Tale of the Heike, c. 1330"
    }
  },

  "Southeast Asian Kingdoms": {
    causes: [
      "Indian merchants and monks brought Sanskrit, Hinduism, and Buddhism, which local rulers adopted",
      "Monsoon-driven maritime trade made the region central to Indian Ocean–South China Sea exchange",
      "Rice agriculture in great river valleys supported large populations and centralised states"
    ],
    effects: [
      "Built some of the world's greatest religious monuments (Angkor Wat, Borobudur)",
      "Maintained diverse religious traditions — Hindu, Buddhist, Muslim, animist — that still coexist",
      "Created the maritime trading networks that European colonisers would later seize"
    ],
    figures: [
      { name: "Suryavarman II", dates: "r. 1113–1150", role: "Khmer king", why: "Built Angkor Wat — the largest religious monument in the world." },
      { name: "Gajah Mada", dates: "d. c. 1364", role: "Majapahit prime minister", why: "Architect of Majapahit's expansion across the Indonesian archipelago." },
      { name: "Ngô Quyền", dates: "r. 938–944", role: "Vietnamese king", why: "Defeated Chinese forces at the Battle of Bach Dang, securing Vietnamese independence after 1,000 years of Chinese rule." }
    ],
    connections: ["Classical India", "Classical China", "Age of Exploration", "Imperialism & Colonialism"],
    sourceSnippet: {
      text: "Until I have unified Nusantara — Gurun, Seram, Tanjungpura, Haru, Pahang, Dompo, Bali, Sunda, Palembang, Tumasik — I shall not taste palapa.",
      attribution: "Gajah Mada's Palapa Oath, c. 1336"
    }
  },

  "Central Asia — Timurids & Turkic Peoples": {
    causes: [
      "Steppe geography produced highly mobile, militarily dominant nomadic societies",
      "Turkic conversion to Islam from the 8th–11th centuries gave them a unifying ideology",
      "Mongol destruction created a power vacuum filled by post-Mongol successor warlords"
    ],
    effects: [
      "Founded the Seljuk, Timurid, Ottoman, Safavid, and Mughal empires",
      "Made Samarkand and Herat among the most architecturally splendid cities of the medieval world",
      "Carried Persian high culture from Bukhara to Delhi and Istanbul"
    ],
    figures: [
      { name: "Tughril Beg", dates: "r. 1037–1063", role: "Founder of the Seljuk Empire", why: "Took Baghdad in 1055, establishing the Sultan-Caliph political model." },
      { name: "Tamerlane (Timur)", dates: "1336–1405", role: "Conqueror & founder of the Timurid Empire", why: "Built one of the most extensive empires of the late medieval world; rebuilt Samarkand into a wonder of architecture." },
      { name: "Ulugh Beg", dates: "1394–1449", role: "Timurid sultan & astronomer", why: "Built one of the world's great medieval observatories at Samarkand and produced an unprecedented star catalogue." },
      { name: "Babur", dates: "1483–1530", role: "Founder of the Mughal Empire", why: "Direct descendant of Tamerlane and Genghis Khan, founded the Mughal Empire in India in 1526." }
    ],
    connections: ["The Mongol Empire", "The Rise of Islam", "The Ottoman Empire", "The Mughal Empire"],
    sourceSnippet: {
      text: "If you doubt my power, look at my buildings.",
      attribution: "Inscription on Timur's tomb, the Gur-e-Amir, Samarkand"
    }
  },

  "African Kingdoms": {
    causes: [
      "Trans-Saharan camel caravans linked West African gold to Mediterranean markets",
      "Indian Ocean monsoon trade plugged the East African coast into a global economy",
      "Adoption of Islam (West Africa, Swahili Coast) and Christianity (Aksum) connected African states to broader civilisational networks"
    ],
    effects: [
      "Built some of the wealthiest empires of the medieval world (Mali, Songhai)",
      "Made Timbuktu, Kilwa, and Great Zimbabwe major cultural and economic centres",
      "Preserved an intellectual tradition (the Timbuktu manuscripts) and built monumental architecture (Lalibela, Great Zimbabwe) that survives today"
    ],
    figures: [
      { name: "King Ezana of Aksum", dates: "r. c. 320s–360 CE", role: "Aksumite king", why: "Made Aksum one of the earliest Christian states in the world." },
      { name: "Sundiata Keita", dates: "r. c. 1235–1255", role: "Founder of the Empire of Mali", why: "Subject of West Africa's great oral epic; built Mali into a major imperial power." },
      { name: "Mansa Musa", dates: "r. 1312–1337", role: "Emperor of Mali", why: "His 1324 pilgrimage to Mecca distributed so much gold it caused regional inflation; possibly the wealthiest individual in human history." },
      { name: "Askia Muhammad", dates: "r. 1493–1528", role: "Songhai emperor", why: "Centralised Songhai administration and patronised Timbuktu's scholars." }
    ],
    connections: ["Ancient Nubia & Kush", "The Rise of Islam", "Age of Exploration", "Imperialism & Colonialism"],
    sourceSnippet: {
      text: "He flooded Cairo with his benefactions… so much that they depreciated the gold and caused its value to fall.",
      attribution: "Al-Umari describing Mansa Musa's visit, c. 1324"
    }
  },

  "The Space Race & Exploration": {
    causes: [
      "Cold War rivalry made space achievement a proxy for ideological competition",
      "Captured German V-2 rocket technology gave both U.S. and USSR a starting platform",
      "Massive state investment (NASA's budget peaked at ~4% of U.S. federal spending)"
    ],
    effects: [
      "Put humans on the Moon and robotic probes throughout the solar system",
      "Drove technological spinoffs (computing, materials science, satellite telecoms)",
      "Made Earth visible from space, helping launch the modern environmental movement"
    ],
    figures: [
      { name: "Sergei Korolev", dates: "1907–1966", role: "Soviet chief rocket designer", why: "Architect of the Soviet space programme; his identity was a state secret during his lifetime." },
      { name: "Yuri Gagarin", dates: "1934–1968", role: "Soviet cosmonaut", why: "First human in space, April 12, 1961." },
      { name: "Neil Armstrong", dates: "1930–2012", role: "Apollo 11 commander", why: "First human to walk on the Moon, July 20, 1969." },
      { name: "Katherine Johnson", dates: "1918–2020", role: "NASA mathematician", why: "Calculated trajectories for early Mercury and Apollo missions; broke barriers as a Black woman in 1960s NASA." },
      { name: "Valentina Tereshkova", dates: "b. 1937", role: "Soviet cosmonaut", why: "First woman in space, 1963." }
    ],
    connections: ["The Cold War", "The Industrial Revolution", "The Digital Age"],
    sourceSnippet: {
      text: "That's one small step for [a] man, one giant leap for mankind.",
      attribution: "Neil Armstrong, on stepping onto the Moon, 20 July 1969"
    }
  },

  "Decolonisation": {
    causes: [
      "WWII bankrupted European empires and broke their prestige",
      "Long-developing anti-colonial movements reached organisational maturity",
      "Cold War made both U.S. and USSR willing to support decolonisation, for different reasons"
    ],
    effects: [
      "Created over 80 new independent states between 1945 and 1980",
      "Drew the political map of the modern Global South",
      "Left long-running problems: arbitrary colonial borders, neocolonial economic dependence, ethnic conflict"
    ],
    figures: [
      { name: "Mahatma Gandhi", dates: "1869–1948", role: "Indian independence leader", why: "Pioneered mass nonviolent resistance against British rule; assassinated in 1948." },
      { name: "Kwame Nkrumah", dates: "1909–1972", role: "First Prime Minister of independent Ghana", why: "Led the first Sub-Saharan African colony to independence and championed Pan-Africanism." },
      { name: "Ho Chi Minh", dates: "1890–1969", role: "Vietnamese revolutionary leader", why: "Led Vietnamese resistance against the French and then the Americans, achieving independence at enormous cost." },
      { name: "Nelson Mandela", dates: "1918–2013", role: "South African leader & first president of post-apartheid South Africa", why: "Spent 27 years in prison, then led South Africa's transition from apartheid to democracy." },
      { name: "Frantz Fanon", dates: "1925–1961", role: "Martinican-Algerian psychiatrist & theorist", why: "His Wretched of the Earth (1961) became the foundational text of anti-colonial thought." }
    ],
    connections: ["Imperialism & Colonialism", "World War II", "The Cold War"],
    sourceSnippet: {
      text: "The wind of change is blowing through this continent. Whether we like it or not, this growth of national consciousness is a political fact.",
      attribution: "British PM Harold Macmillan to the South African Parliament, 3 February 1960"
    }
  },

  "South Asia Since Partition": {
    causes: [
      "1947 Partition of British India along religious lines created India and Pakistan",
      "Border-drawing decisions (especially over Kashmir) and population exchanges produced lasting hostility",
      "Cold War alignments (India non-aligned then Soviet-leaning, Pakistan U.S.-aligned) shaped the next 50 years"
    ],
    effects: [
      "Made India and Pakistan permanent rivals — both nuclear-armed since 1998",
      "Produced the secession of Bangladesh in 1971 after a brutal war",
      "South Asia now contains roughly a quarter of humanity and a major emerging economic power"
    ],
    figures: [
      { name: "Mahatma Gandhi", dates: "1869–1948", role: "Father of Indian independence", why: "Architect of nonviolent resistance; assassinated in 1948 by a Hindu nationalist." },
      { name: "Jawaharlal Nehru", dates: "1889–1964", role: "First Prime Minister of India", why: "Built India as a secular democratic state and a leader of the Non-Aligned Movement." },
      { name: "Muhammad Ali Jinnah", dates: "1876–1948", role: "Founder of Pakistan", why: "Led the Muslim League's demand for a separate Muslim state; first Governor-General of Pakistan." },
      { name: "Indira Gandhi", dates: "1917–1984", role: "Prime Minister of India", why: "Powerful and controversial leader; declared the 1975 Emergency; assassinated in 1984." },
      { name: "Sheikh Mujibur Rahman", dates: "1920–1975", role: "Founder of Bangladesh", why: "Led East Pakistan's independence struggle; first president of Bangladesh; assassinated in 1975." },
      { name: "Narendra Modi", dates: "b. 1950", role: "Prime Minister of India since 2014", why: "Architect of the Hindu nationalist BJP's dominance of Indian politics." }
    ],
    connections: ["Imperialism & Colonialism", "Decolonisation", "The Cold War"],
    sourceSnippet: {
      text: "At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.",
      attribution: "Jawaharlal Nehru, 'Tryst with Destiny' speech, 14 August 1947"
    }
  },

  "Modern Latin America": {
    causes: [
      "Long colonial legacy of inequality and concentrated land ownership",
      "Cold War made the region a battleground between U.S.-backed regimes and Cuba-inspired revolutionaries",
      "Resource-export economies left countries vulnerable to commodity-price swings"
    ],
    effects: [
      "Cycles of populist mobilisation, military dictatorship, and democratic restoration",
      "Some of the world's deepest economic inequalities, persistent into the 21st century",
      "A 'pink tide' of left-wing governments in the 2000s that has receded but partially returned"
    ],
    figures: [
      { name: "Emiliano Zapata", dates: "1879–1919", role: "Mexican revolutionary", why: "Led peasant land-reform movement during the Mexican Revolution." },
      { name: "Juan Perón", dates: "1895–1974", role: "Argentine president & founder of Peronism", why: "Defined the dominant populist tradition in Latin American politics." },
      { name: "Fidel Castro", dates: "1926–2016", role: "Cuban revolutionary leader", why: "Led the 1959 revolution; ruled Cuba for nearly half a century." },
      { name: "Salvador Allende", dates: "1908–1973", role: "Chilean Marxist president", why: "Democratically elected; killed in the 1973 U.S.-backed coup that brought Pinochet to power." },
      { name: "Augusto Pinochet", dates: "1915–2006", role: "Chilean military dictator", why: "Ruled Chile 1973–1990; oversaw thousands of deaths and economic restructuring." },
      { name: "Lula da Silva", dates: "b. 1945", role: "Brazilian President (2003–2010, 2023– )", why: "Former union leader; presided over major poverty reduction in Brazil." }
    ],
    connections: ["Age of Revolutions", "The Cold War", "Imperialism & Colonialism"],
    sourceSnippet: {
      text: "I would rather die on my feet than live on my knees.",
      attribution: "Often attributed to Emiliano Zapata, Mexican Revolution"
    }
  },

  "Civil Rights Movements": {
    causes: [
      "Long-suppressed racial, gender, and sexual minorities organised mass political movements",
      "The post-WWII anti-fascist consensus made racial discrimination internationally embarrassing",
      "Television and mass media made injustices visible to wider publics"
    ],
    effects: [
      "Ended legal racial segregation in the U.S. and apartheid in South Africa",
      "Won voting rights, equal-pay laws, and same-sex marriage in many countries",
      "Established that organised social movements can change deeply entrenched legal regimes"
    ],
    figures: [
      { name: "Martin Luther King Jr.", dates: "1929–1968", role: "American civil rights leader", why: "Apostle of nonviolent direct action; led the U.S. movement to legal victories before assassination in 1968." },
      { name: "Malcolm X", dates: "1925–1965", role: "American black-nationalist leader", why: "Powerful counterpoint to King's nonviolence; assassinated in 1965." },
      { name: "Rosa Parks", dates: "1913–2005", role: "Civil rights activist", why: "Her 1955 refusal to give up her bus seat sparked the Montgomery Bus Boycott." },
      { name: "Nelson Mandela", dates: "1918–2013", role: "Anti-apartheid leader & South African president", why: "Symbol of the global anti-apartheid struggle." },
      { name: "Betty Friedan", dates: "1921–2006", role: "American feminist", why: "Author of The Feminine Mystique (1963), which helped launch second-wave feminism." },
      { name: "Marsha P. Johnson", dates: "1945–1992", role: "American LGBTQ+ activist", why: "Black trans woman, central to the Stonewall uprising and to early gay liberation organising." }
    ],
    connections: ["Abolition & Reform", "Decolonisation", "Globalisation"],
    sourceSnippet: {
      text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
      attribution: "Martin Luther King Jr., March on Washington, 28 August 1963"
    }
  },

  "The Yugoslav Wars": {
    causes: [
      "Tito's death in 1980 left Yugoslavia without a unifying figure",
      "Economic crisis and the collapse of communism elsewhere weakened the federation",
      "Slobodan Milošević's exploitation of Serbian nationalism set off a chain of secessions"
    ],
    effects: [
      "Killed approximately 140,000 people and displaced millions",
      "Brought ethnic cleansing and genocide to Europe within a generation of the Holocaust",
      "Established new precedents in international criminal law (ICTY)"
    ],
    figures: [
      { name: "Josip Broz Tito", dates: "1892–1980", role: "Communist leader of Yugoslavia", why: "Held the federation together through personal authority; broke with Stalin in 1948." },
      { name: "Slobodan Milošević", dates: "1941–2006", role: "Serbian nationalist leader", why: "Architect of Serbia's role in the Yugoslav wars; first sitting head of state indicted for war crimes; died in custody before verdict." },
      { name: "Ratko Mladić", dates: "b. 1942", role: "Bosnian Serb general", why: "Commander at Srebrenica; convicted of genocide in 2017." },
      { name: "Radovan Karadžić", dates: "b. 1945", role: "Bosnian Serb political leader", why: "Wartime president of Republika Srpska; convicted of genocide and war crimes." },
      { name: "Alija Izetbegović", dates: "1925–2003", role: "Bosnian president", why: "Led wartime Bosnia-Herzegovina and signed the Dayton Accords." }
    ],
    connections: ["Genocides of the 20th Century", "The Cold War", "World War II"],
    sourceSnippet: {
      text: "We do not want to live in your Yugoslavia, but you cannot make us live in your Serbia.",
      attribution: "Bosnian saying during the war"
    }
  },

  "Globalisation": {
    causes: [
      "Postwar institutions (Bretton Woods, GATT/WTO, EU) progressively reduced trade and capital barriers",
      "Containerised shipping and information technology collapsed the costs of moving goods and ideas",
      "End of the Cold War and China's reforms brought billions of people into the global market"
    ],
    effects: [
      "Largest reduction of extreme poverty in human history",
      "Rising inequality within wealthy countries; decline of manufacturing in former industrial regions",
      "Climate change as the central global externality of fossil-fuel-driven growth"
    ],
    figures: [
      { name: "Deng Xiaoping", dates: "1904–1997", role: "Paramount leader of China", why: "Architect of China's market reforms from 1978 — arguably the most consequential economic transformation of the 20th century." },
      { name: "Margaret Thatcher", dates: "1925–2013", role: "British Prime Minister 1979–1990", why: "Helped define the neoliberal turn — privatisation, deregulation, free trade." },
      { name: "Ronald Reagan", dates: "1911–2004", role: "U.S. President 1981–1989", why: "American counterpart to Thatcher; reshaped U.S. economic policy along similar lines." },
      { name: "Manmohan Singh", dates: "1932–2024", role: "Indian Finance Minister & PM", why: "Architected India's 1991 liberalisation, integrating India into the global economy." },
      { name: "Greta Thunberg", dates: "b. 2003", role: "Climate activist", why: "Galvanised global youth climate protest from 2018 with Fridays for Future." }
    ],
    connections: ["The Cold War", "The Industrial Revolution", "The Digital Age", "Imperialism & Colonialism"],
    sourceSnippet: {
      text: "It does not matter whether the cat is black or white — as long as it catches mice.",
      attribution: "Deng Xiaoping, paraphrased in support of pragmatic economic reform"
    }
  },

  "The Digital Age": {
    causes: [
      "Sustained doubling of computing power (Moore's Law) made personal computers cheap and powerful",
      "ARPANET and the World Wide Web created a global information infrastructure",
      "Smartphones and mobile internet brought the network to billions of new users"
    ],
    effects: [
      "Transformed work, communication, retail, finance, dating, and politics in a single generation",
      "Made surveillance and disinformation possible at unprecedented scale",
      "Set the stage for artificial intelligence as a general-purpose technology"
    ],
    figures: [
      { name: "Alan Turing", dates: "1912–1954", role: "British mathematician & computer pioneer", why: "Founded theoretical computer science; broke the Enigma code; died early after persecution for being gay." },
      { name: "Tim Berners-Lee", dates: "b. 1955", role: "Inventor of the World Wide Web", why: "Designed the system of linked documents that became the web; gave it away free in 1991." },
      { name: "Steve Jobs", dates: "1955–2011", role: "Apple co-founder", why: "Drove the personal computer revolution and (with the iPhone) the mobile-internet revolution." },
      { name: "Bill Gates", dates: "b. 1955", role: "Microsoft co-founder", why: "Built the operating-system monopoly that defined the PC era; later turned to global health philanthropy." },
      { name: "Tim Cook", dates: "b. 1960", role: "CEO of Apple", why: "Oversaw Apple's rise to the world's most valuable company; pioneered tech-company supply-chain management." },
      { name: "Edward Snowden", dates: "b. 1983", role: "NSA whistleblower", why: "2013 leaks revealed the global scale of state surveillance; remains in exile in Russia." }
    ],
    connections: ["Globalisation", "The Industrial Revolution", "The Cold War", "The Space Race & Exploration"],
    sourceSnippet: {
      text: "Information wants to be free.",
      attribution: "Stewart Brand, 1984"
    }
  },

  "The Russian Revolution": {
    causes: [
      "Tsarist autocracy refused meaningful reform despite mounting peasant and worker discontent",
      "WWI exposed the regime's military and economic incapacity",
      "Lenin and the Bolsheviks offered a clear, ruthless plan: peace, land, bread, all power to the soviets"
    ],
    effects: [
      "Created the Soviet Union — the first state explicitly built on Marxist principles",
      "Inspired communist movements worldwide, from China to Vietnam to Cuba",
      "Made the Cold War possible and shaped the 20th-century ideological landscape"
    ],
    figures: [
      { name: "Vladimir Lenin", dates: "1870–1924", role: "Bolshevik leader, founder of Soviet state", why: "Ruthless tactician who positioned the Bolsheviks to seize power in October 1917." },
      { name: "Leon Trotsky", dates: "1879–1940", role: "Bolshevik intellectual & Red Army founder", why: "Built the Red Army from scratch and led it to victory in the Civil War; later murdered in exile by Stalin's agents." },
      { name: "Joseph Stalin", dates: "1878–1953", role: "Soviet dictator", why: "Outmanoeuvred Lenin's other heirs to seize power; industrialised the USSR through forced collectivisation, terror, and the Gulag." },
      { name: "Tsar Nicholas II", dates: "r. 1894–1917", role: "Last Russian Emperor", why: "Personally amiable, politically catastrophic; abdicated in March 1917, executed with his family in 1918." },
      { name: "Alexander Kerensky", dates: "1881–1970", role: "Provisional Government leader", why: "Moderate socialist who tried to keep Russia in WWI and lost authority to the Bolsheviks." }
    ],
    connections: ["World War I", "The Industrial Revolution", "World War II", "The Cold War"],
    sourceSnippet: {
      text: "Peace, Land, and Bread!",
      attribution: "Bolshevik slogan, 1917"
    }
  },

  "The Interwar Period": {
    causes: [
      "Versailles Treaty's harsh terms produced German resentment and economic instability",
      "The Great Depression destroyed faith in liberal democracy and market capitalism",
      "Russia's revolution made communism a global force, frightening conservatives into the arms of fascism"
    ],
    effects: [
      "Brought fascism to power in Italy, Germany, and (eventually) Spain",
      "Discredited the League of Nations and revealed the limits of collective security",
      "Made WWII possible — and arguably inevitable — by 1939"
    ],
    figures: [
      { name: "Benito Mussolini", dates: "r. 1922–1943", role: "Fascist dictator of Italy", why: "First major fascist leader; pioneered the political model Hitler and Franco would adapt." },
      { name: "Adolf Hitler", dates: "r. 1933–1945", role: "Nazi Führer of Germany", why: "Used the Depression to bring Nazi extremism to power; rebuilt German military to launch WWII." },
      { name: "Franklin Delano Roosevelt", dates: "r. 1933–1945", role: "U.S. President", why: "Delivered the New Deal in response to the Depression; led the U.S. into and through WWII." },
      { name: "Neville Chamberlain", dates: "PM 1937–1940", role: "British Prime Minister", why: "Architect of the Munich Agreement and appeasement policy that failed to prevent WWII." },
      { name: "John Maynard Keynes", dates: "1883–1946", role: "British economist", why: "Predicted Versailles would lead to disaster; later founded modern macroeconomics." }
    ],
    connections: ["World War I", "The Russian Revolution", "World War II", "The Spanish Civil War"],
    sourceSnippet: {
      text: "I believe it is peace for our time.",
      attribution: "Neville Chamberlain after the Munich Agreement, 30 September 1938"
    }
  },

  "The Spanish Civil War": {
    causes: [
      "Spain entered the 1930s as a politically polarised society between landowning conservatives and reformist left",
      "The Second Republic's reforms enraged conservative elites, the Church, and the military",
      "Foreign powers (Germany, Italy, USSR) saw Spain as a proxy battleground"
    ],
    effects: [
      "Established Franco's military dictatorship, which lasted until 1975",
      "Demonstrated the weakness of European democracies in resisting fascism",
      "Foreshadowed WWII tactics, including aerial bombing of civilians"
    ],
    figures: [
      { name: "Francisco Franco", dates: "r. 1939–1975", role: "Spanish dictator", why: "Led the Nationalist victory and ruled Spain for 36 years; one of the most consequential European dictators of the 20th century." },
      { name: "Manuel Azaña", dates: "1880–1940", role: "Republican president of Spain", why: "Reformist president who oversaw the Republic's struggle and exile after defeat." },
      { name: "Dolores Ibárruri ('La Pasionaria')", dates: "1895–1989", role: "Communist Republican leader", why: "Iconic Republican orator whose 'No pasarán!' (They shall not pass!) became the slogan of anti-fascism." },
      { name: "George Orwell", dates: "1903–1950", role: "British writer", why: "Fought for the POUM, was wounded, and described the war and its internal Republican betrayals in Homage to Catalonia." }
    ],
    connections: ["The Interwar Period", "World War II", "Imperialism & Colonialism"],
    sourceSnippet: {
      text: "It is better to die on your feet than to live on your knees.",
      attribution: "Dolores Ibárruri, La Pasionaria, 1936"
    }
  },

  "Genocides of the 20th Century": {
    causes: [
      "Total war, ideological extremism, and modern bureaucratic capacity made mass killing possible at unprecedented scale",
      "Ethnic and religious nationalism, often state-sponsored, defined who 'belonged' and who didn't",
      "Failure of international institutions to intervene early or consistently allowed perpetrators to act with impunity"
    ],
    effects: [
      "Established the legal concept of genocide and the UN Genocide Convention (1948)",
      "Created international tribunals (Nuremberg, ICTY, ICTR, ICC) — imperfect but precedent-setting",
      "Reshaped postwar memory, monuments, and education across multiple countries"
    ],
    figures: [
      { name: "Raphael Lemkin", dates: "1900–1959", role: "Polish-Jewish lawyer", why: "Coined the word 'genocide' in 1944 and devoted his life to making it a legal concept; lost 49 family members to the Nazis." },
      { name: "Adolf Eichmann", dates: "1906–1962", role: "Nazi bureaucrat", why: "Logistical organiser of the Holocaust; tried in Jerusalem in 1961 — Hannah Arendt's famous 'banality of evil.'" },
      { name: "Pol Pot", dates: "1925–1998", role: "Khmer Rouge leader", why: "Architect of the Cambodian genocide; died without ever facing trial." },
      { name: "Romeo Dallaire", dates: "b. 1946", role: "Canadian general & UN commander in Rwanda", why: "Tried in vain to get UN to authorise force to stop the Rwandan genocide; his memoir is essential reading." },
      { name: "Ratko Mladić", dates: "b. 1942", role: "Bosnian Serb general", why: "Commanded forces at Srebrenica; convicted of genocide in 2017." }
    ],
    connections: ["World War II", "The Russian Revolution", "The Interwar Period", "The Yugoslav Wars"],
    sourceSnippet: {
      text: "Genocide is a denial of the right of existence of entire human groups, as homicide is the denial of the right to live of individual human beings.",
      attribution: "UN General Assembly Resolution 96(I), 1946"
    }
  },

  "Imperialism & Colonialism": {
    causes: [
      "Industrial technology (steamships, quinine, machine guns) made conquest easier",
      "Industrial economies needed colonial raw materials and markets",
      "Pseudoscientific racism and 'civilising mission' rhetoric provided ideological cover"
    ],
    effects: [
      "Drew most of the world's modern political borders, often arbitrarily",
      "Extracted vast wealth from colonies, fuelling Western European prosperity and Asian/African impoverishment",
      "Created enduring patterns of inequality, ethnic conflict, and global migration"
    ],
    figures: [
      { name: "Cecil Rhodes", dates: "1853–1902", role: "British imperialist", why: "Built a diamond empire in South Africa and dreamed of British territory from 'Cape to Cairo'." },
      { name: "King Leopold II", dates: "r. 1865–1909", role: "King of the Belgians", why: "Personally owned the Congo Free State as private property; oversaw atrocities that killed perhaps 10 million Congolese." },
      { name: "Emperor Menelik II", dates: "r. 1889–1913", role: "Emperor of Ethiopia", why: "Defeated Italy at Adwa in 1896, keeping Ethiopia independent through the colonial era." },
      { name: "Rudyard Kipling", dates: "1865–1936", role: "British poet and writer", why: "Wrote 'The White Man's Burden' — the classic statement of imperial ideology." }
    ],
    connections: ["The Industrial Revolution", "The Mughal Empire", "African Kingdoms", "Decolonisation"],
    sourceSnippet: {
      text: "Take up the White Man's burden — / Send forth the best ye breed — / Go bind your sons to exile / To serve your captives' need.",
      attribution: "Rudyard Kipling, 'The White Man's Burden,' 1899"
    }
  },

  "Ireland — Famine & Nationalism": {
    causes: [
      "Tenant agricultural system made the rural poor dependent on a single crop — the potato",
      "British political and economic rule treated Ireland as a peripheral colony",
      "Late blight (Phytophthora infestans) destroyed successive potato harvests from 1845"
    ],
    effects: [
      "About 1 million dead and 1–2 million emigrated; population fell ~20% in seven years",
      "Created a global Irish diaspora that reshaped American politics and culture",
      "Galvanised Irish nationalism, leading to the Easter Rising and eventual independence in 1922"
    ],
    figures: [
      { name: "Charles Stewart Parnell", dates: "1846–1891", role: "Irish parliamentary leader", why: "Pushed for Home Rule and led the political wing of the Irish nationalist movement." },
      { name: "Michael Collins", dates: "1890–1922", role: "IRA leader and statesman", why: "Led the guerrilla campaign in the War of Independence, negotiated the 1921 Treaty, and was killed in the Civil War that followed." },
      { name: "Patrick Pearse", dates: "1879–1916", role: "Easter Rising leader", why: "Read the Proclamation of the Irish Republic in 1916; executed by the British, became a national martyr." },
      { name: "Charles Trevelyan", dates: "1807–1886", role: "British Treasury official", why: "Oversaw the British government's catastrophically inadequate response to the Famine." }
    ],
    connections: ["The Industrial Revolution", "Imperialism & Colonialism", "Age of Revolutions"],
    sourceSnippet: {
      text: "We declare the right of the people of Ireland to the ownership of Ireland and to the unfettered control of Irish destinies, to be sovereign and indefeasible.",
      attribution: "Proclamation of the Irish Republic, 1916"
    }
  },

  "Abolition & Reform": {
    causes: [
      "Enlightenment arguments about universal human equality undermined slavery's legitimacy",
      "Religious movements (especially Quakers and Methodists) made abolition a moral imperative",
      "Industrial capitalism's growth made slave-based agriculture increasingly anomalous"
    ],
    effects: [
      "Ended legal slavery in the British Empire (1833), the U.S. (1865), and Brazil (1888)",
      "Established the precedent that mass social movements could overturn ancient institutions",
      "Launched the women's rights movement that won suffrage across most of the world by 1950"
    ],
    figures: [
      { name: "William Wilberforce", dates: "1759–1833", role: "British MP and abolitionist", why: "Led the parliamentary campaign that ended the British slave trade (1807) and slavery (1833)." },
      { name: "Frederick Douglass", dates: "1818–1895", role: "American abolitionist & orator", why: "Self-emancipated slave whose speeches and autobiography were among abolition's sharpest weapons." },
      { name: "Harriet Tubman", dates: "c. 1822–1913", role: "Underground Railroad conductor", why: "Escaped slavery and returned 13 times to lead approximately 70 enslaved people to freedom." },
      { name: "Elizabeth Cady Stanton", dates: "1815–1902", role: "American women's rights leader", why: "Co-organised Seneca Falls (1848) and drafted the Declaration of Sentiments." },
      { name: "Emmeline Pankhurst", dates: "1858–1928", role: "British suffragette leader", why: "Founded the militant Women's Social and Political Union; used direct action to win British women the vote." },
      { name: "Olaudah Equiano", dates: "c. 1745–1797", role: "Igbo abolitionist and writer", why: "His 1789 autobiography of his enslavement and emancipation was a key abolitionist text." }
    ],
    connections: ["The Enlightenment", "Age of Revolutions", "The Industrial Revolution", "Civil Rights Movements"],
    sourceSnippet: {
      text: "We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights.",
      attribution: "Declaration of Sentiments, Seneca Falls Convention, 1848"
    }
  },

  "Meiji Japan & Qing China": {
    causes: [
      "Western industrial powers forcibly opened both Japan and China to trade in the 1850s–60s",
      "Both nations faced existential pressure to modernise or be colonised",
      "Internal political crises (Taiping Rebellion in China, Tokugawa decline in Japan) created openings for radical change"
    ],
    effects: [
      "Japan transformed into a modern industrial and military power within a single generation",
      "China suffered a 'century of humiliation' that ended only with the 1949 Communist victory",
      "Established a divergence in East Asian development that shaped the entire 20th century"
    ],
    figures: [
      { name: "Emperor Meiji", dates: "r. 1867–1912", role: "Emperor of Japan", why: "Symbolic head of the Meiji Restoration, presided over Japan's transformation into a modern state." },
      { name: "Empress Dowager Cixi", dates: "1835–1908", role: "Effective ruler of late Qing China", why: "Dominated Qing politics for nearly 50 years; her conservative resistance contributed to the dynasty's failure to reform." },
      { name: "Lin Zexu", dates: "1785–1850", role: "Qing imperial commissioner", why: "Tried to suppress the British opium trade in 1839; his actions triggered the First Opium War." },
      { name: "Hong Xiuquan", dates: "1814–1864", role: "Leader of the Taiping Rebellion", why: "Claimed to be Jesus's younger brother and led the bloodiest civil war in human history." },
      { name: "Itō Hirobumi", dates: "1841–1909", role: "First Prime Minister of Japan", why: "Architect of the Meiji Constitution and one of the chief modernisers of Japan." },
      { name: "Sun Yat-sen", dates: "1866–1925", role: "Chinese revolutionary leader", why: "Founded the Republic of China after the 1911 revolution overthrew the Qing." }
    ],
    connections: ["The Industrial Revolution", "Imperialism & Colonialism", "Medieval Japan & Korea", "World War II", "The Cold War"],
    sourceSnippet: {
      text: "Knowledge shall be sought throughout the world, so as to strengthen the foundations of imperial rule.",
      attribution: "Charter Oath of the Meiji Emperor, 1868"
    }
  },

  "The Enlightenment": {
    causes: [
      "The Scientific Revolution (Newton, Galileo) suggested human reason could decode any system",
      "Religious wars exhausted Europe and made tolerance attractive",
      "Printing presses, salons, and rising literacy created a public sphere for ideas"
    ],
    effects: [
      "Provided the philosophical foundations of modern democracy and human rights",
      "Inspired the American and French Revolutions",
      "Established the case for religious tolerance and separation of church and state"
    ],
    figures: [
      { name: "John Locke", dates: "1632–1704", role: "English philosopher", why: "Argued government legitimacy comes from consent of the governed; foundational to American political thought." },
      { name: "Voltaire", dates: "1694–1778", role: "French philosophe", why: "Most famous defender of religious tolerance and free expression; wit and satire shaped public opinion." },
      { name: "Montesquieu", dates: "1689–1755", role: "French political philosopher", why: "Argued for separation of powers; directly influenced the U.S. Constitution." },
      { name: "Rousseau", dates: "1712–1778", role: "Genevan philosopher", why: "Argued legitimate government comes from the 'general will' of the people; foundational to democratic theory." },
      { name: "Mary Wollstonecraft", dates: "1759–1797", role: "English writer", why: "Wrote A Vindication of the Rights of Woman (1792), founding modern feminist thought." },
      { name: "Adam Smith", dates: "1723–1790", role: "Scottish moral philosopher", why: "Wrote The Wealth of Nations (1776), founding modern economics." }
    ],
    connections: ["The Renaissance", "The Reformation", "Age of Revolutions", "The Industrial Revolution"],
    sourceSnippet: {
      text: "I disapprove of what you say, but I will defend to the death your right to say it.",
      attribution: "Often attributed to Voltaire (paraphrased by biographer Evelyn Beatrice Hall, 1906)"
    }
  },

  "Age of Revolutions": {
    causes: [
      "Enlightenment ideas about consent, rights, and reason undermined absolute monarchy",
      "Atlantic trade and capitalism created a wealthy bourgeoisie excluded from aristocratic privilege",
      "British financial crises after the Seven Years' War triggered colonial taxation disputes"
    ],
    effects: [
      "Established the United States, Haiti, and most of Latin America as independent nations",
      "Ended absolute monarchy in France and challenged it everywhere in Europe",
      "Created the political vocabulary — democracy, citizenship, human rights — still used today"
    ],
    figures: [
      { name: "Thomas Jefferson", dates: "1743–1826", role: "American Founding Father", why: "Drafted the Declaration of Independence; later third U.S. president." },
      { name: "Maximilien Robespierre", dates: "1758–1794", role: "French revolutionary leader", why: "Architect of the Reign of Terror; symbolised the dark side of revolutionary purity." },
      { name: "Toussaint Louverture", dates: "c. 1743–1803", role: "Haitian revolutionary leader", why: "Led the only successful slave revolt in modern history; died in a French prison." },
      { name: "Napoleon Bonaparte", dates: "1769–1821", role: "Emperor of the French", why: "Codified revolutionary law (Napoleonic Code) and exported revolutionary ideas across Europe — at the point of a bayonet." },
      { name: "Simón Bolívar", dates: "1783–1830", role: "Liberator of South America", why: "Led independence movements in Venezuela, Colombia, Ecuador, Peru, and Bolivia." },
      { name: "Olympe de Gouges", dates: "1748–1793", role: "French playwright and feminist", why: "Wrote the Declaration of the Rights of Woman in 1791; guillotined for her radicalism." }
    ],
    connections: ["The Enlightenment", "The Reformation", "The Industrial Revolution", "Abolition & Reform"],
    sourceSnippet: {
      text: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
      attribution: "U.S. Declaration of Independence, 1776"
    }
  },

  "Polynesian Voyaging & Pacific Peoples": {
    causes: [
      "Sophisticated double-hulled voyaging canoe technology enabled open-ocean travel",
      "An Austronesian linguistic and cultural inheritance carried sailing traditions across millennia",
      "Population growth on small islands required outward exploration for new land"
    ],
    effects: [
      "Settled the largest area of the Earth's surface ever colonised by a pre-modern civilisation",
      "Reached Hawaii, Easter Island, and New Zealand — among the most isolated places on Earth",
      "Preserved a navigation tradition (wayfinding) only recently revived and now globally celebrated"
    ],
    figures: [
      { name: "Hawailoa (legendary)", dates: "c. 1st millennium CE", role: "Traditional founding navigator of Hawaii", why: "Stands for the generations of unnamed Polynesian explorers who reached the most remote islands." },
      { name: "Kupe", dates: "legendary, c. 925 CE", role: "Polynesian navigator", why: "Māori tradition credits him with the discovery of Aotearoa (New Zealand)." },
      { name: "Mau Piailug", dates: "1932–2010", role: "Micronesian master navigator", why: "Revived traditional Pacific wayfinding in the 1970s, sailing the Hōkūle'a from Hawaii to Tahiti without instruments." },
      { name: "Tupaia", dates: "c. 1725–1770", role: "Tahitian high priest & navigator", why: "Sailed with Captain Cook and demonstrated Polynesian geographic knowledge of much of the Pacific." }
    ],
    connections: ["Cradles of Civilisation", "Southeast Asian Kingdoms", "Age of Exploration"],
    sourceSnippet: {
      text: "He hono tangata e kore e motu; ka pā he taura waka, ka motu. — A bond of people will not be severed; only the rope of a canoe can be cut.",
      attribution: "Māori whakataukī (proverb)"
    }
  },

  // ── Bronze Age Collapse — Module 1 ──────────────────────
  "The Bronze Age Collapse::1": {
    causes: [
      "The metallurgical necessity of combining geographically separate copper and tin to make bronze",
      "Centuries of slowly developing trade networks linked Afghanistan, Mesopotamia, the Levant, Egypt, Cyprus, and the Aegean",
      "The 'Great King' diplomatic system reinforced commercial ties with royal marriages and gift exchange"
    ],
    effects: [
      "Created the world's first long-distance globalised elite economy across the eastern Mediterranean and Near East",
      "Tied the military capability of palace civilisations to the continued flow of distant resources",
      "Made the entire system vulnerable to disruption of any major component (tin, copper, grain shipping)"
    ],
    figures: [
      { name: "George Bass", dates: "1932–2021", role: "American underwater archaeologist", why: "Founder of the Institute of Nautical Archaeology; directed the early Uluburun excavations from 1984 onward." },
      { name: "Cemal Pulak", dates: "b. 1948", role: "Turkish-American nautical archaeologist", why: "Long-term director of the Uluburun excavations, identifying the wreck's cargo and dating it to c. 1305 BCE." },
      { name: "Michael Ventris", dates: "1922–1956", role: "British architect & linguist", why: "Deciphered Mycenaean Linear B in 1952, revealing it as an early form of Greek and opening up the palace economies of Bronze Age Greece." },
      { name: "Eric Cline", dates: "b. 1960", role: "American archaeologist", why: "His book '1177 B.C.: The Year Civilization Collapsed' (2014) is the central modern synthesis of the Bronze Age Collapse — the framework most of these modules rely on." }
    ],
    connections: ["The Bronze Age Collapse", "Cradles of Civilisation", "Ancient Egypt::4", "Ancient Greece", "Cradles of Civilisation"],
    sourceSnippet: {
      text: "Tin is exhausted in the storehouse, my lord. Give the order that they may bring tin from Susa.",
      attribution: "Letter from Iarim-Lim of Aleppo to his lord, c. 1750 BCE — early documentation of the Bronze Age tin trade from Mari archives"
    }
  },

  // ── Ancient Nubia & Kush — Module 8 ─────────────────────
  "Ancient Nubia & Kush::8": {
    causes: [
      "Rise of Aksum and shifting trade routes weakened Meroë's regional dominance by the 3rd century CE",
      "King Ezana of Aksum's campaign around 330–360 CE destroyed Meroitic political power",
      "Byzantine missionary efforts under Justinian and Theodora converted the three post-Meroitic kingdoms to Christianity in the 540s CE",
      "The 652 CE Baqt treaty established a stable framework allowing Christian Nubia to coexist with Islamic Egypt for six centuries"
    ],
    effects: [
      "Built three Christian Nubian kingdoms (Nobadia, Makuria, Alodia) that lasted nearly a thousand years",
      "Produced the Faras cathedral frescoes — one of the major bodies of medieval Christian art outside Europe",
      "Created the Old Nubian language and literature, ancestors of languages still spoken in Egypt and Sudan today",
      "Negotiated the Baqt, the longest-lasting peace treaty in early Islamic history (~600 years)",
      "Preserved Nubian cultural continuity through Aksumite conquest, Christian conversion, and eventual Islamic absorption"
    ],
    figures: [
      { name: "Ezana of Aksum", dates: "r. c. 320–360 CE", role: "Aksumite king who conquered Meroë", why: "Defeated Meroitic forces around 330–360 CE; first major African king to convert to Christianity; his trilingual victory stele is foundational for Aksumite and post-Meroitic history." },
      { name: "Empress Theodora", dates: "c. 500–548 CE", role: "Byzantine empress", why: "Sponsored the Miaphysite Christian mission led by Julian that converted Nobadia in the 540s CE, beating her husband Justinian's Chalcedonian rivals to the prize." },
      { name: "Julian", dates: "fl. 540s CE", role: "Byzantine missionary", why: "Led Theodora's mission to Nobadia; converted the king and established Miaphysite Christianity in Nubia." },
      { name: "Abdullah ibn Sa'd", dates: "fl. 650s CE", role: "Arab governor of Egypt", why: "Negotiated the Baqt treaty with the Makurian king in 652 CE after two failed Arab invasions of Nubia." },
      { name: "John of Ephesus", dates: "c. 507–589 CE", role: "Byzantine ecclesiastical historian", why: "His Ecclesiastical History preserves the principal contemporary account of the conversion of Nobadia in the 540s." },
      { name: "Sultan Baibars", dates: "r. 1260–1277 CE", role: "Mamluk Sultan of Egypt", why: "Launched the campaigns that began the final dismantling of Christian Makuria in the 1270s CE." },
      { name: "Kazimierz Michałowski", dates: "1901–1981", role: "Polish archaeologist", why: "Director of the Polish-Sudanese Faras rescue excavations of the 1960s that recovered the Christian Nubian frescoes before Lake Nasser submerged the site." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::5", "Ancient Nubia & Kush::7", "Ancient Egypt::8", "The Rise of Islam", "African Kingdoms", "The Byzantine Empire"],
    sourceSnippet: {
      text: "And he came to Soba… and he conquered the people of the city, and there was great slaughter among them.",
      attribution: "Trilingual victory inscription of King Ezana of Aksum, c. 350 CE — describing the destruction of Meroë"
    }
  },

  // ── Ancient Nubia & Kush — Module 7 ─────────────────────
  "Ancient Nubia & Kush::7": {
    causes: [
      "Cultural confidence after a millennium of Egyptianised inheritance led the Meroitic state to develop its own indigenous writing system around 200 BCE",
      "Distinctively African physiognomy and royal regalia inspired a Kushite portraiture style that broke with Egyptian idealisation",
      "Long-term cultural exchange across the Red Sea trade routes brought Hellenistic and Roman architectural motifs into the Meroitic synthesis"
    ],
    effects: [
      "Produced the earliest indigenous African writing system used south of Egypt (Meroitic script)",
      "Built the largest concentration of pyramids on Earth — over 250 across the Kushite royal cemeteries",
      "Created a distinctive Kushite art style with broad-shouldered, full-featured royal portraiture and powerful queens depicted at king's-equal scale",
      "Produced cosmopolitan late-Meroitic architecture combining Egyptian, Hellenistic, Roman, and indigenous elements (the Kiosk at Naqa)"
    ],
    figures: [
      { name: "Francis Llewellyn Griffith", dates: "1862–1934", role: "British Egyptologist", why: "Deciphered the alphabetic values of the Meroitic script in 1909, making Meroitic readable aloud even if mostly untranslated." },
      { name: "Claude Rilly", dates: "b. 1959", role: "French linguist", why: "The leading modern Meroitic linguist; his work places Meroitic in the Nilo-Saharan/Northern East Sudanic language family, opening new translation possibilities." },
      { name: "Taharqa", dates: "r. 690–664 BCE", role: "Kushite pharaoh & builder", why: "His monumental Egyptian-style temple additions and the colossal Karnak statue helped define the Kushite royal portraiture tradition." },
      { name: "Amanitore", dates: "r. c. 1–20 CE", role: "Meroitic kandake", why: "Co-ruler with Natakamani; her depiction at king's-equal scale in the Lion Temple at Naqa typifies the distinctive Meroitic representation of royal women." },
      { name: "Pearce Paul Creasman", dates: "active 2010s–", role: "American archaeologist", why: "Leads modern excavations at Nuri, including underwater archaeology of Taharqa's flooded burial chamber." },
      { name: "John Garstang", dates: "1876–1956", role: "British archaeologist", why: "Excavated Meroë in 1909–1914, uncovering the Royal Baths and laying the foundation for systematic Meroitic archaeology." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::5", "Ancient Nubia & Kush::6", "Ancient Egypt::7", "African Kingdoms"],
    sourceSnippet: {
      text: "Whether or not the Meroitic script was independently invented or adapted from Egyptian, its purpose is unmistakable: a Meroitic civilisation determined to write its own language in its own form, no longer dependent on a foreign script.",
      attribution: "Synthesis of modern Meroitic scholarship"
    }
  },

  // ── Ancient Nubia & Kush — Module 6 ─────────────────────
  "Ancient Nubia & Kush::6": {
    causes: [
      "4,000 years of religious continuity in the Nubian Nile valley produced distinctive African forms of monumental religion",
      "Matrilineal succession and cattle-pastoral economic structures gave royal women institutional political authority",
      "The blend of indigenous deities (Apedemak, Sebewmeker) with Egyptian-derived ones (Amun, Isis) produced a unique syncretic theology"
    ],
    effects: [
      "Created the kandake institution — one of the most fully institutionalised forms of female royal authority in the ancient world",
      "Built the religious infrastructure (Amun of Gebel Barkal, the Apedemak lion temples) that defined Kushite kingship",
      "Established cultural patterns — queen-mothers, cattle-pastoral ritual, religious pluralism — that influenced later African civilisations from medieval Nubia to West African kingdoms"
    ],
    figures: [
      { name: "Amun of Gebel Barkal", dates: "cult attested c. 1450 BCE – 350 CE", role: "Patron deity of Kushite kings", why: "Identified by Egyptian theologians as the southern manifestation of Amun of Karnak; selected Kushite kings through oracle and legitimised their rule for nearly two millennia." },
      { name: "Apedemak", dates: "cult attested c. 270 BCE – 350 CE", role: "Lion-headed Meroitic warrior god", why: "Indigenous Meroitic deity with no Egyptian counterpart; depicted as three-headed and four-armed at his Lion Temple at Naqa." },
      { name: "Ergamenes (Arkamani I)", dates: "r. c. 270 BCE", role: "Reformer king", why: "Reported by Diodorus Siculus to have broken priestly authority that allegedly ordered ritual royal suicides; whether or not the report is literal, he embodies the Meroitic-period restructuring of religious-political power." },
      { name: "Shanakdakhete", dates: "r. c. 170 BCE", role: "First confirmed sole female Meroitic ruler", why: "Earliest known kandake to rule independently in male pharaonic regalia, anticipating later Amanirenas, Amanishakheto, and Amanitore." },
      { name: "Aspelta", dates: "r. c. 600–580 BCE", role: "Napatan king", why: "Left one of the most detailed surviving descriptions of a Kushite coronation, with the priestly oracle at Gebel Barkal acclaiming the new king." },
      { name: "Diodorus Siculus", dates: "c. 90–30 BCE", role: "Greek historian", why: "His Bibliotheca Historica preserves outside descriptions of Meroitic religion and the priest-king conflict, valuable despite Greek biases." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::4", "Ancient Nubia & Kush::5", "Ancient Nubia & Kush::7", "Ancient Egypt::6", "African Kingdoms"],
    sourceSnippet: {
      text: "Apedemak, lord of royal power, great of strength, mighty god, first of the gods of the south.",
      attribution: "Meroitic hymn at the Lion Temple of Musawwarat es-Sufra, c. 230 BCE — bilingual fragment"
    }
  },

  // ── Ancient Nubia & Kush — Module 5 ─────────────────────
  "Ancient Nubia & Kush::5": {
    causes: [
      "Loss of Egypt to Assyria and later Persia made Napata strategically exposed; Meroë was safer",
      "The Butana grasslands east of the Nile supported the cattle pastoralism and acacia forests that Napata's environment could not",
      "Abundant iron ore in the eastern Sudan made industrial-scale smelting possible at Meroë"
    ],
    effects: [
      "Established the longest-lasting Nubian kingdom — about 600 years of continuous Meroitic state power",
      "Invented the Meroitic script — Africa's first indigenous writing system south of Egypt (though still only partly translatable today)",
      "Built over 200 pyramids — the largest concentration in the world — across Meroë, Naqa, and Musawwarat es-Sufra",
      "Fought the Roman Empire to a draw and buried the bronze head of Augustus under a temple threshold"
    ],
    figures: [
      { name: "Arkamani I (Ergamenes)", dates: "r. c. 270 BCE", role: "Founder of the Meroitic period", why: "Completed the political shift of the royal capital from Napata to Meroë. Mentioned by Diodorus Siculus as having broken with priestly authority that previously dictated kings' deaths." },
      { name: "Amanirenas", dates: "r. c. 40–10 BCE", role: "Kandake (queen) of Meroë", why: "Led the Meroitic-Roman war of the 20s BCE, sacked Roman Aswan, captured the bronze head of Augustus, and negotiated a favourable peace directly with Augustus on Samos." },
      { name: "Amanishakheto", dates: "r. c. 10 BCE – 1 CE", role: "Kandake", why: "Built temples and pyramids; her treasure was looted by Ferlini's 1834 expedition and is now in Berlin and Munich museums." },
      { name: "Natakamani & Amanitore", dates: "r. c. 1–20 CE", role: "Joint king and queen of Meroë", why: "Built the most spectacular surviving Meroitic monuments, including the Lion Temple at Naqa. Their joint depiction in royal art is unusual in the ancient world." },
      { name: "Ezana of Aksum", dates: "r. c. 320–360 CE", role: "Aksumite king", why: "Conquered Meroë around 330–360 CE in the campaign that effectively ended the Meroitic state. His Greek-and-Ge'ez victory inscription survives." },
      { name: "Francis Llewellyn Griffith", dates: "1862–1934", role: "British Egyptologist", why: "Deciphered the alphabetic values of the Meroitic script in 1909 — we can read Meroitic aloud, even though we still cannot translate most of its vocabulary." },
      { name: "Giuseppe Ferlini", dates: "1797–1870", role: "Italian treasure-hunter", why: "Blew the tops off about 40 Meroitic pyramids in 1834 looking for gold; recovered Amanishakheto's treasure but destroyed irreplaceable archaeological evidence." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::4", "Ancient Nubia & Kush::6", "Ancient Nubia & Kush::7", "Ancient Nubia & Kush::8", "African Kingdoms", "The Roman Republic & Empire"],
    sourceSnippet: {
      text: "She is a masculine sort of woman, and blind in one eye.",
      attribution: "Strabo describing Kandake Amanirenas of Meroë, Geography XVII.1.54, c. 24 BCE"
    }
  },

  // ── Ancient Nubia & Kush — Module 4 ─────────────────────
  "Ancient Nubia & Kush::4": {
    causes: [
      "The Egyptianised cultural inheritance left by 450 years of New Kingdom colonisation gave the Napatan kingdom a ready-made pharaonic ideology",
      "Fragmentation of Egypt into Libyan dynasties and rival local powers in the 8th century BCE created a political vacuum",
      "The cult of Amun at Gebel Barkal provided unmatched religious legitimacy for Kushite kings claiming the Egyptian throne"
    ],
    effects: [
      "Established the 25th Dynasty of Egypt — c. 65 years of African pharaohs ruling the entire Nile valley from Nubia to the Mediterranean",
      "Produced one of the longest and most literary royal inscriptions from any African pharaoh (Piye's Victory Stele)",
      "Built more pyramids than Egypt itself ever built — over 200 across El-Kurru, Nuri, and (later) Meroë",
      "Restored Egyptian temple complexes that Libyan-period Egypt had allowed to decay"
    ],
    figures: [
      { name: "Alara", dates: "fl. c. 800 BCE", role: "Earliest named Kushite king", why: "Founder of the Napatan royal line; began the political consolidation that produced the 25th Dynasty." },
      { name: "Kashta", dates: "r. c. 760–745 BCE", role: "Father of the conquest", why: "Extended Kushite control to the First Cataract; installed his daughter Amenirdis as God's Wife of Amun at Thebes, asserting Kushite right to rule Upper Egypt." },
      { name: "Piye", dates: "r. c. 744–714 BCE", role: "Conqueror of Egypt", why: "Marched north and defeated every rival in Egypt around 727 BCE; his Victory Stele is one of the great works of African historical literature." },
      { name: "Shabaka", dates: "r. c. 714–705 BCE", role: "First resident Kushite pharaoh", why: "Moved the royal court to Memphis, preserved the Memphis Theology (the Shabaka Stone), and made the 25th Dynasty a fully unified Egypt-and-Nubia state." },
      { name: "Taharqa", dates: "r. 690–664 BCE", role: "Greatest Kushite pharaoh", why: "Massive building programme from Karnak to Gebel Barkal; intervened against Assyria; appears in the Hebrew Bible (2 Kings 19:9) as 'Tirhakah king of Cush.'" },
      { name: "Tantamani", dates: "r. 664–653 BCE", role: "Last Kushite pharaoh of Egypt", why: "Briefly retook Egypt before Ashurbanipal's sack of Thebes in 663 BCE ended 25th Dynasty rule. Withdrew to Napata, where the kingdom continued for centuries." },
      { name: "Ashurbanipal", dates: "r. 669–631 BCE", role: "Assyrian emperor", why: "Sacked Thebes in 663 BCE — one of the most consequential atrocities of the ancient Near East — and effectively ended 25th Dynasty rule of Egypt." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::3", "Ancient Nubia & Kush::5", "Ancient Egypt::8", "The Persian Empires", "African Kingdoms"],
    sourceSnippet: {
      text: "Is it because the horses have suffered hunger that I am more grieved than for any deed of evil you have done in the fullness of your wickedness?",
      attribution: "Piye to the defeated Libyan king Nimlot of Hermopolis, Victory Stele of Piye, c. 727 BCE"
    }
  },

  // ── Ancient Nubia & Kush — Module 3 ─────────────────────
  "Ancient Nubia & Kush::3": {
    causes: [
      "Thutmose I's conquest of Kerma around 1500 BCE eliminated the indigenous Nubian state and made direct Egyptian administration possible",
      "The strategic and economic value of Nubian gold made permanent occupation worthwhile to the New Kingdom state",
      "The need to project Egyptian religious authority into the south led to a network of Egyptian-style temples that took deep root"
    ],
    effects: [
      "Built the administrative system (Viceroy of Kush, indirect rule, hostage princes) that managed Nubia for 450 years",
      "Egyptianised the Nubian elite while leaving much of village-level Nubian culture intact",
      "Established the cult of Amun at Gebel Barkal — religious infrastructure that later legitimised the Kushite conquest of Egypt"
    ],
    figures: [
      { name: "Hekanefer", dates: "fl. c. 1330 BCE", role: "Prince of Miam (Aniba)", why: "Nubian client-prince whose tomb shows full Egyptian funerary culture, even while the Egyptian viceroy's tomb still depicted him in 'Nubian' dress as a tribute-bearer. The classic example of New Kingdom Nubian double-identity." },
      { name: "Huy", dates: "fl. c. 1335 BCE", role: "Viceroy of Kush under Tutankhamun", why: "His tomb at Thebes (TT40) contains the most detailed New Kingdom scenes of the Nubian tribute presented to the pharaoh." },
      { name: "Maiherperi", dates: "d. c. 1450 BCE", role: "Nubian courtier", why: "Buried (KV36) in the Valley of the Kings — the only known non-royal burial there in his lifetime. Demonstrates the highest level of Nubian integration into Egyptian society." },
      { name: "Amenhotep III", dates: "r. c. 1391–1353 BCE", role: "Pharaoh of the 18th Dynasty", why: "Built the great Egyptian temple at Soleb in Upper Nubia and expanded the Amun cult at Gebel Barkal." },
      { name: "Panehesy", dates: "fl. c. 1080 BCE", role: "Last attested Viceroy of Kush", why: "Marched north into Egypt during the dynasty's final crisis, briefly fought the High Priest of Amun, then withdrew to Nubia — taking with him much of southern Egypt's political authority." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::2", "Ancient Nubia & Kush::4", "Ancient Egypt::4", "Ancient Egypt::5", "African Kingdoms"],
    sourceSnippet: {
      text: "The Northland is in good order, and Kush is rich in barley and emmer; the cattle are good… every gold mine has been opened and the gold cast for the King's house.",
      attribution: "Tomb inscription of the Viceroy Huy under Tutankhamun, c. 1330 BCE"
    }
  },

  // ── Ancient Nubia & Kush — Module 2 ─────────────────────
  "Ancient Nubia & Kush::2": {
    causes: [
      "The fertile basin south of the Third Cataract supported an urban centre by 2500 BCE",
      "Control of trans-Saharan and Nile-valley trade in gold, ebony, and ivory made Kerma kings rich",
      "Kerma's military strength, especially its archers, kept Egypt from simply absorbing it for over a millennium"
    ],
    effects: [
      "Built the largest pre-modern mud-brick structures in sub-Saharan Africa (the deffufas)",
      "Demonstrated that complex African urban civilisation existed independently of and parallel to Egypt",
      "Defeated Egyptian fortresses during the Second Intermediate Period and briefly ruled Lower Nubia",
      "Established a cultural template that the later Kushite kings of Napata explicitly claimed as their heritage"
    ],
    figures: [
      { name: "Charles Bonnet", dates: "b. 1933", role: "Swiss archaeologist", why: "Director of the Kerma excavations from 1977 onward — produced the modern understanding of Kerma as an independent urban African civilisation." },
      { name: "Apophis", dates: "r. mid-16th century BCE", role: "Hyksos king of Lower Egypt", why: "Attempted to ally with the Kerma king against Egyptian Thebes — a diplomatic letter intercepted by Theban forces survives as evidence of Kerma's status as a Great Power." },
      { name: "Thutmose I", dates: "r. c. 1504–1492 BCE", role: "Egyptian pharaoh, conqueror of Kerma", why: "His campaign around 1500 BCE captured the city and ended Kerma's political independence; his demonstratively brutal victory inscription tells us how seriously Egypt took the Kerma threat." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Nubia & Kush::1", "Ancient Nubia & Kush::3", "Ancient Egypt::3", "Ancient Egypt::4", "African Kingdoms"],
    sourceSnippet: {
      text: "Send a message that we shall now move, you and I, on this Egypt and divide its towns between us, since my heart is troubled.",
      attribution: "Hyksos king Apophis to the king of Kush, c. 1555 BCE — Carnarvon Tablet I, intercepted by Theban forces"
    }
  },

  // ── Ancient Nubia & Kush — Module 1 ─────────────────────
  "Ancient Nubia & Kush::1": {
    causes: [
      "The Nile flows for 1,800 km through what is now Sudan, supporting parallel African civilisations south of Egypt",
      "Climate in the 4th–3rd millennia BCE supported cattle pastoralism in regions that are pure desert today",
      "The six cataracts both isolated Nubia from easy Egyptian conquest and divided it into distinct regional zones"
    ],
    effects: [
      "Established the A-Group and C-Group as the earliest complex African societies on the Upper Nile",
      "Produced (at Qustul) what may be the earliest royal iconography in the Nile Valley — predating Egyptian unification",
      "Created the cultural substrate from which the Kingdom of Kerma and later Kushite kingdoms would rise"
    ],
    figures: [
      { name: "George Reisner", dates: "1867–1942", role: "American archaeologist", why: "Pioneered systematic Nubian archaeology and named the A-, B-, C-, and X-Group cultures." },
      { name: "Keith Seele", dates: "1898–1971", role: "Oriental Institute Egyptologist", why: "Led the 1962–1964 Qustul excavation that recovered the controversial L-cemetery royal-style burials." },
      { name: "Bruce Williams", dates: "b. 1942", role: "American Egyptologist", why: "Published the Qustul finds and proposed the controversial hypothesis that Nubian royal iconography may predate Egyptian unification." },
      { name: "Senusret III", dates: "r. c. 1878–1839 BCE", role: "Middle Kingdom pharaoh", why: "Conducted the great Egyptian campaigns against Nubia, building the fortress chain and the Semna boundary stones that document how seriously Egypt took Nubian power." }
    ],
    connections: ["Ancient Nubia & Kush", "Ancient Egypt", "Ancient Egypt::1", "Ancient Egypt::3", "African Kingdoms"],
    sourceSnippet: {
      text: "Southern boundary, made in the year 8, under the majesty of the King of Upper and Lower Egypt Senusret… in order to prevent any Nubian from crossing it by land or in any boat, except a Nubian who comes to trade or on a commission.",
      attribution: "Boundary stele of Senusret III at Semna, c. 1860 BCE — describing Lower Nubia"
    }
  },

  // ── Ancient Egypt — Module 8 ────────────────────────────
  "Ancient Egypt::8": {
    causes: [
      "Bronze Age Collapse fragmented Egyptian central authority after Ramses XI (1069 BCE)",
      "Successive foreign powers — Libyan, Kushite, Assyrian, Persian, Greek, Roman — competed for control of the wealthiest land in the Mediterranean",
      "Christianity displaced traditional Egyptian religion by the 4th century CE, ending pharaonic ritual continuity"
    ],
    effects: [
      "Produced Alexandria — for centuries the largest and most learned city in the ancient world",
      "Made the Septuagint translation of the Hebrew Bible possible (Egyptian Greek scholarship)",
      "Preserved Egyptian religion in altered form (the cult of Isis) across the Roman world",
      "Ended a 3,000-year line of pharaohs with Cleopatra VII's suicide on 12 August 30 BCE",
      "Silenced hieroglyphs for 1,400 years until Champollion's 1822 decipherment"
    ],
    figures: [
      { name: "Shoshenq I", dates: "r. c. 945–924 BCE", role: "Libyan founder of the 22nd Dynasty", why: "The biblical Shishak; campaigned to Jerusalem; restored Egyptian unification after the Third Intermediate Period." },
      { name: "Piye", dates: "r. c. 744–714 BCE", role: "Kushite king, founder of the 25th Dynasty", why: "Marched north from Napata and conquered Egypt, founding the 'Black Pharaoh' dynasty. His victory stele is a literary masterpiece." },
      { name: "Taharqa", dates: "r. 690–664 BCE", role: "Greatest of the Kushite pharaohs", why: "Patron of an architectural revival across Egypt and Nubia; mentioned by name in the Hebrew Bible (2 Kings 19)." },
      { name: "Psamtik I", dates: "r. 664–610 BCE", role: "Founder of the Saite 26th Dynasty", why: "Reunified Egypt after Assyrian withdrawal, launching the last great native Egyptian renaissance." },
      { name: "Nectanebo II", dates: "r. 360–342 BCE", role: "Last native pharaoh of Egypt", why: "Final ethnically-Egyptian king in a line that began with Narmer 2,750 years earlier. Fled the second Persian invasion." },
      { name: "Alexander the Great", dates: "r. 332–323 BCE", role: "Macedonian king & pharaoh", why: "Liberated Egypt from Persian rule, founded Alexandria, and was crowned pharaoh by Egyptian priests at Memphis." },
      { name: "Ptolemy I Soter", dates: "r. 305–283 BCE", role: "Founder of the Ptolemaic Dynasty", why: "Alexander's general who founded Egypt's last dynasty and established the Library and Museum of Alexandria." },
      { name: "Cleopatra VII", dates: "r. 51–30 BCE", role: "Last pharaoh of Egypt", why: "The most politically sophisticated of the Ptolemies; spoke nine languages including Egyptian; allied with Caesar and then Antony; her death ended 3,000 years of pharaonic rule." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::5", "Ancient Egypt::7", "Ancient Nubia & Kush", "The Persian Empires", "The Roman Republic & Empire", "Ancient Greece", "Rise of World Religions"],
    sourceSnippet: {
      text: "I will not be led in his triumph.",
      attribution: "Words attributed to Cleopatra VII before her death, August 30 BCE — Plutarch, Life of Antony"
    }
  },

  // ── Ancient Egypt — Module 7 ────────────────────────────
  "Ancient Egypt::7": {
    causes: [
      "A bureaucratic state required durable writing for taxation, decrees, and ritual continuity",
      "Religious ideology demanded that royal images and texts survive eternally — driving the canonical art style",
      "Pharaonic legitimacy required ever-grander monuments, leading to additive temple complexes built by successive kings"
    ],
    effects: [
      "Produced the longest-lived writing system in human history (3,600+ years of continuous hieroglyphic use)",
      "Created a visual canon so distinctive that Egyptian art is instantly recognisable to anyone, anywhere",
      "Built monumental complexes — Karnak, Luxor, Abu Simbel — that remain among the most-visited heritage sites on Earth",
      "Made possible, through the Rosetta Stone, the modern recovery of an entire ancient civilisation"
    ],
    figures: [
      { name: "Jean-François Champollion", dates: "1790–1832", role: "French linguist, decipherer of hieroglyphs", why: "Read the first hieroglyphic text in over 1,400 years in 1822. Founded the modern discipline of Egyptology." },
      { name: "Thomas Young", dates: "1773–1829", role: "British polymath", why: "Made critical early progress on the Rosetta Stone — correctly identified the cartouches of Ptolemy and Cleopatra and showed hieroglyphs contained phonograms." },
      { name: "Athanasius Kircher", dates: "1602–1680", role: "Jesuit polymath", why: "17th-century scholar whose entirely fictional 'translations' of hieroglyphs typified pre-Champollion guesswork." },
      { name: "Senenmut", dates: "fl. c. 1473–1458 BCE", role: "Architect of Hatshepsut's Deir el-Bahri", why: "One of the few named Egyptian architects; his terraced temple is one of the most innovative works of ancient architecture." },
      { name: "Imhotep", dates: "fl. c. 2670 BCE", role: "Architect of the Step Pyramid", why: "The first non-royal Egyptian named in surviving inscriptions. Later worshipped as a god of wisdom and medicine." },
      { name: "Howard Carter", dates: "1874–1939", role: "British archaeologist", why: "Discovered Tutankhamun's KV62 in 1922 — the only essentially intact royal tomb ever found in the Valley of the Kings." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::1", "Ancient Egypt::2", "Ancient Egypt::5", "Ancient Egypt::6", "Cradles of Civilisation"],
    sourceSnippet: {
      text: "I clasp it in my hand. I read it. It opens for me. I see — I see clearly — that the inscriptions of Rameses and Thutmosis are the same, that we have here the names of the kings of Egypt as the Greeks knew them.",
      attribution: "Jean-François Champollion, on the morning of 14 September 1822, on first reading a royal cartouche"
    }
  },

  // ── Ancient Egypt — Module 6 ────────────────────────────
  "Ancient Egypt::6": {
    causes: [
      "3,000 years of religious continuity required by an agrarian society dependent on the Nile's annual rhythm",
      "Mummification technology developed in response to the optimistic theology of bodily resurrection",
      "Bureaucratic literacy created a scribal class that documented daily life in extraordinary detail (Deir el-Medina)"
    ],
    effects: [
      "Produced the most elaborate funerary culture in human history — mummies, tombs, the Book of the Dead",
      "Gave Egyptian women legal autonomy unmatched in the ancient Mediterranean for millennia",
      "Created social structures (peasant villages, scribal schools, craftsmen's quarters) so stable they survived every dynastic transition"
    ],
    figures: [
      { name: "Osiris", dates: "mythic", role: "First king of Egypt, god of the underworld", why: "Centre of the most influential resurrection myth in the ancient world; the model for every Egyptian afterlife." },
      { name: "Isis", dates: "mythic", role: "Magical mother, resurrection goddess", why: "Reassembled Osiris and bore Horus. Her cult eventually spread across the Roman Empire as far as Britain." },
      { name: "Anubis", dates: "mythic", role: "Jackal-headed god of embalming", why: "Patron of mummification and the Weighing of the Heart ceremony." },
      { name: "Ma'at", dates: "mythic", role: "Goddess of truth, justice, cosmic order", why: "Her feather, weighed against the heart of the deceased, was the moral standard of the afterlife." },
      { name: "Paneb", dates: "fl. c. 1200 BCE", role: "Foreman at Deir el-Medina", why: "Investigated for theft, adultery, and abuse of his position — preserved in the most detailed legal dossier we have of an Egyptian commoner." },
      { name: "Herodotus", dates: "c. 484–425 BCE", role: "Greek historian", why: "Visited Egypt in the 5th century BCE and described its religion, daily life, and the relatively high status of women in striking detail. Our principal outside witness." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::2", "Ancient Egypt::5", "Ancient Egypt::7", "Rise of World Religions"],
    sourceSnippet: {
      text: "I have not killed. I have not stolen. I have not robbed the gods. I have not lied. I have not despoiled the property of the poor. I have not made anyone weep. I have not been violent. I have not stopped the waters of the Nile in their season.",
      attribution: "Selections from the Negative Confession, Book of the Dead, Spell 125, New Kingdom"
    }
  },

  // ── Ancient Egypt — Module 5 ────────────────────────────
  "Ancient Egypt::5": {
    causes: [
      "Centuries of rising Amun-priesthood wealth made the cult's autonomy a structural problem for royal authority",
      "Late 18th-Dynasty solar theology under Amenhotep III created the ideological space for Akhenaten's monotheistic experiment",
      "The Bronze Age Collapse (Sea Peoples, drought, mass migrations) destabilised the entire eastern Mediterranean by 1200 BCE"
    ],
    effects: [
      "Produced the closest thing to monotheism in the ancient world before Judaism — and made it short-lived",
      "Created the world's oldest surviving peace treaty (Egypt–Hittite, 1258 BCE)",
      "Left the world's most famous archaeological discovery (Tutankhamun's tomb) and most replicated royal name (Ramses)",
      "Ended Egyptian imperial control over the Levant and ushered in the Third Intermediate Period"
    ],
    figures: [
      { name: "Akhenaten", dates: "r. c. 1353–1336 BCE", role: "Heretic pharaoh", why: "Abolished traditional gods, declared the Aten supreme, founded a new capital, and revolutionised Egyptian art. Erased from later king-lists." },
      { name: "Nefertiti", dates: "c. 1370–c. 1330 BCE", role: "Chief queen of Akhenaten", why: "Co-ruled with her husband; may have reigned briefly in her own right as Smenkhkare/Neferneferuaten. Her painted limestone bust is one of the most famous artworks in the world." },
      { name: "Tutankhamun", dates: "r. c. 1332–1323 BCE", role: "Boy-king who restored Amun-worship", why: "Reversed Akhenaten's revolution; died at 18 or 19. His almost-intact tomb, discovered in 1922, made him the most famous pharaoh in modern memory." },
      { name: "Horemheb", dates: "r. c. 1319–1292 BCE", role: "General turned pharaoh", why: "Restored institutional order after the Amarna upheaval and chose Ramses I as his successor, founding the 19th Dynasty." },
      { name: "Ramses II", dates: "r. c. 1279–1213 BCE", role: "Ramses the Great", why: "66-year reign, fought the Battle of Kadesh, signed the world's oldest peace treaty, built Abu Simbel, and re-inscribed his name on countless older monuments." },
      { name: "Merneptah", dates: "r. c. 1213–1203 BCE", role: "Son of Ramses II", why: "His victory stele contains the earliest non-Biblical reference to 'Israel.'" },
      { name: "Ramses III", dates: "r. c. 1186–1155 BCE", role: "Last great pharaoh of the New Kingdom", why: "Defeated the Sea Peoples in the largest naval-and-land battle of the Bronze Age, preserving Egypt while the rest of the region collapsed." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::4", "Ancient Egypt::6", "Ancient Egypt::8", "The Bronze Age Collapse", "Rise of World Religions"],
    sourceSnippet: {
      text: "How manifold are your works! They are hidden from the face of men. O sole god, like whom there is no other. You created the world according to your desire, while you were alone.",
      attribution: "The Great Hymn to the Aten, attributed to Akhenaten, c. 1340 BCE"
    }
  },

  // ── Ancient Egypt — Module 4 ────────────────────────────
  "Ancient Egypt::4": {
    causes: [
      "Expelling the Hyksos militarised Egypt and gave it the chariot, composite bow, and bronze armour",
      "Ahmose I and his successors chose to pursue the retreating Hyksos into the Levant rather than stopping at the border",
      "The vast wealth of the Nubian gold mines and Syrian tribute funded a permanent professional army for the first time"
    ],
    effects: [
      "Made Egypt the dominant power of the ancient Near East for roughly two centuries",
      "Concentrated enormous wealth and political power in the priesthood of Amun at Karnak",
      "Established the Valley of the Kings as the royal necropolis — a strategic shift away from pyramid-building",
      "Built the diplomatic system documented in the Amarna Letters — the earliest substantial international archive in history"
    ],
    figures: [
      { name: "Thutmose I", dates: "r. c. 1504–1492 BCE", role: "Conqueror-pharaoh, 18th Dynasty", why: "First Egyptian king to lead an army to the Euphrates; first king buried in the Valley of the Kings." },
      { name: "Hatshepsut", dates: "r. c. 1479–1458 BCE", role: "Female pharaoh", why: "Ruled prosperously for 22 years; built Deir el-Bahri; sent the Punt expedition. Erased from monuments after her death but rediscovered in the modern era." },
      { name: "Senenmut", dates: "fl. c. 1473–1458 BCE", role: "Architect & steward of Hatshepsut", why: "Designed Deir el-Bahri and oversaw construction of the queen's monuments. Buried near her — possibly her lover, possibly just her closest adviser." },
      { name: "Thutmose III", dates: "r. c. 1479–1425 BCE", role: "'Napoleon of Egypt'", why: "Led 17 military campaigns; won the Battle of Megiddo (1457 BCE); built the largest Egyptian empire in history." },
      { name: "Amenhotep III", dates: "r. c. 1391–1353 BCE", role: "Pharaoh at the apex", why: "Presided over the wealthiest and most prestigious period of Egyptian history. Built the Colossi of Memnon, rebuilt Luxor and Karnak." },
      { name: "Queen Tiye", dates: "c. 1398–1338 BCE", role: "Chief queen of Amenhotep III", why: "Non-royal-born wife of Amenhotep III who became a major political figure; appears in diplomatic correspondence with foreign Great Kings." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::3", "Ancient Egypt::5", "The Bronze Age Collapse", "Ancient Nubia & Kush"],
    sourceSnippet: {
      text: "His Majesty went forth in his chariot of electrum, arrayed in his weapons of war, like Horus, the Mighty of Arm… and the enemies fled headlong to Megiddo with faces of fear.",
      attribution: "Annals of Thutmose III, Karnak, c. 1457 BCE"
    }
  },

  // ── Ancient Egypt — Module 3 ────────────────────────────
  "Ancient Egypt::3": {
    causes: [
      "Old Kingdom collapse left Egypt fragmented under rival regional warlords (nomarchs)",
      "Climatic drying (the 4.2 kiloyear event) crippled the Nile floods and intensified competition for resources",
      "The eventual reunification under Thebes produced a more chastened, philosophically reflective state"
    ],
    effects: [
      "Produced Egypt's classical literary canon (Sinuhe, Eloquent Peasant, Ipuwer, Instruction texts)",
      "Democratised the afterlife — the Osirian resurrection became available to non-royals",
      "Introduced foreign technologies (chariot, composite bow) via the Hyksos that powered the later New Kingdom empire"
    ],
    figures: [
      { name: "Mentuhotep II", dates: "r. c. 2061–2010 BCE", role: "Theban king, reunifier of Egypt", why: "Defeated the Heracleopolitans and reunited the country around 2055 BCE, founding the Middle Kingdom." },
      { name: "Amenemhat I", dates: "r. c. 1991–1962 BCE", role: "Founder, 12th Dynasty", why: "Moved the capital to Lisht, restored central administration, and clipped the wings of regional nomarchs." },
      { name: "Senusret III", dates: "r. c. 1878–1839 BCE", role: "Pharaoh, 12th Dynasty", why: "Conquered Nubia, built the chain of frontier fortresses, and broke nomarch power. His careworn statues redefined royal portraiture." },
      { name: "Sobekneferu", dates: "r. c. 1806–1802 BCE", role: "First confirmed female pharaoh", why: "Took the male regalia and titulary of pharaoh, setting a precedent later expanded by Hatshepsut." },
      { name: "Ahmose I", dates: "r. c. 1550–1525 BCE", role: "Founder, 18th Dynasty", why: "Drove the Hyksos out of Egypt, reunified the country, and launched the New Kingdom imperial age." },
      { name: "Seqenenre Tao", dates: "r. c. 1558–1554 BCE", role: "Theban king, anti-Hyksos warrior", why: "Died in battle against the Hyksos — his mummy preserves the wounds. His campaign laid groundwork for Ahmose's victory." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::2", "Ancient Egypt::4", "The Bronze Age Collapse", "Ancient Nubia & Kush"],
    sourceSnippet: {
      text: "I had pity on him because of his words and gave him meat from the slaughter… for there is no harm in giving justice to the man who has spoken truthfully.",
      attribution: "The Tale of the Eloquent Peasant, Middle Kingdom, c. 1900 BCE"
    }
  },

  // ── Ancient Egypt — Module 2 ────────────────────────────
  "Ancient Egypt::2": {
    causes: [
      "Centuries of Predynastic and Early Dynastic political development produced a state capable of mass coordination",
      "Reliable Nile floods generated reliable agricultural surplus, freeing tens of thousands of seasonal workers",
      "The ideology of the pharaoh as god-king made monument-building a cosmic, not merely political, obligation"
    ],
    effects: [
      "Produced the Great Pyramid of Giza — tallest human-made structure on Earth for nearly 3,800 years",
      "Built an administrative and engineering tradition that survived the Old Kingdom's collapse",
      "Established the visual vocabulary of Ancient Egypt (pyramid, Sphinx, god-king) that still defines the civilisation in our imagination"
    ],
    figures: [
      { name: "Djoser", dates: "r. c. 2670–2650 BCE", role: "Pharaoh, 3rd Dynasty", why: "Commissioned the world's first pyramid — the Step Pyramid at Saqqara — and changed monumental architecture forever." },
      { name: "Imhotep", dates: "c. 2670 BCE", role: "Architect, vizier, polymath", why: "Designed the Step Pyramid; the first non-royal individual in history whose name has come down to us. Later deified." },
      { name: "Sneferu", dates: "r. c. 2613–2589 BCE", role: "Founder, 4th Dynasty", why: "Built three pyramids (Meidum, Bent, Red), refining the form into the smooth-sided true pyramid. Moved more stone than any other pharaoh." },
      { name: "Khufu (Cheops)", dates: "r. c. 2589–2566 BCE", role: "Builder of the Great Pyramid", why: "His Great Pyramid of Giza is the largest and most famous monument of antiquity." },
      { name: "Khafre", dates: "r. c. 2558–2532 BCE", role: "Pharaoh, 4th Dynasty", why: "Built the second Giza pyramid and almost certainly the Great Sphinx." },
      { name: "Pepi II", dates: "r. c. 2278–2184 BCE", role: "Last great pharaoh of the Old Kingdom", why: "Possibly the longest-reigning monarch in history (~94 years); his exceptionally long reign destabilised succession and helped trigger the collapse." }
    ],
    connections: ["Ancient Egypt", "Ancient Egypt::1", "Ancient Egypt::3", "Cradles of Civilisation", "The Bronze Age Collapse"],
    sourceSnippet: {
      text: "Inspection of the akhet-Khufu by the inspector Merer. We spent the day loading the boat with stones from the limestone quarries of Tura South.",
      attribution: "The Diary of Merer, Wadi al-Jarf papyri, c. 2560 BCE — the oldest known papyrus on Earth"
    }
  },

  // ── Ancient Egypt — Module 1 ────────────────────────────
  "Ancient Egypt::1": {
    causes: [
      "Monsoon rains in the Ethiopian highlands caused predictable annual Nile floods",
      "Desert barriers and Nile cataracts isolated the valley from outside invasion",
      "Centuries of farming villages built social complexity before kingship"
    ],
    effects: [
      "Created a unified state under a divine king (pharaoh) by c. 3100 BCE",
      "Established the iconography of Egyptian kingship — Double Crown, smiting pose, Double Lands",
      "Set the template for 3,000 years of Egyptian cultural continuity"
    ],
    figures: [
      { name: "Narmer", dates: "r. c. 3100 BCE", role: "Founder of the 1st Dynasty", why: "Credited with unifying Upper and Lower Egypt; the Narmer Palette is the earliest 'historical' monument of Egypt." },
      { name: "Menes", dates: "legendary, c. 3100 BCE", role: "Traditional unifier-king", why: "Later Egyptian king-lists name him as first pharaoh — most scholars identify him with Narmer." },
      { name: "Herodotus", dates: "c. 484–425 BCE", role: "Greek historian", why: "Coined the phrase 'Egypt is the gift of the Nile' — still the best one-line summary of the civilisation's foundation." }
    ],
    connections: ["Cradles of Civilisation", "Ancient Egypt", "Ancient Nubia & Kush"],
    sourceSnippet: {
      text: "When the Nile inundates the land, the whole country is converted into a sea, and nothing appears but the cities, which look like the islands in the Aegean.",
      attribution: "Herodotus, Histories, Book II, c. 440 BCE"
    }
  },

};
