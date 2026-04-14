// Flashcard decks — grouped by era
const flashcardDecks = [
  {
    id: "ancient",
    name: "The Ancient World",
    icon: "🏺",
    cards: [
      { q: "What is the 'Fertile Crescent'?", a: "An arc of fertile land from the Persian Gulf through Mesopotamia to the eastern Mediterranean — where agriculture and civilisation first developed." },
      { q: "What writing system did the Sumerians develop?", a: "Cuneiform — wedge-shaped marks pressed into clay tablets, one of the earliest writing systems (~3400 BCE)." },
      { q: "What were the four river-valley civilisations?", a: "Mesopotamia (Tigris-Euphrates), Egypt (Nile), Indus Valley (Indus), and China (Yellow/Huang He River)." },
      { q: "What is a city-state?", a: "An independent state consisting of a city and its surrounding territory — like Athens, Sparta, and Ur." },
      { q: "Who was the first known emperor of a unified China?", a: "Qin Shi Huang (259–210 BCE) — he unified the warring states, standardised weights and writing, and began the Great Wall." },
      { q: "What is democracy and where did it originate?", a: "Government by the people. Originated in Athens ~508 BCE under Cleisthenes — male citizens voted directly on laws." },
      { q: "What were the Egyptian pyramids built for?", a: "As monumental tombs for pharaohs, designed to protect and provide for the ruler in the afterlife." },
      { q: "Name three ancient Greek philosophers.", a: "Socrates (questioning method), Plato (ideal forms/Republic), and Aristotle (logic/empiricism)." },
      { q: "What is the Code of Hammurabi?", a: "One of the earliest known written legal codes (~1754 BCE), from Babylon. Famous for 'an eye for an eye' proportional justice." },
      { q: "What were the Vedas?", a: "The oldest sacred texts of Hinduism, composed in Sanskrit between 1500–1200 BCE. They form the foundation of Hindu religious tradition." },
    ]
  },
  {
    id: "classical",
    name: "The Classical Age",
    icon: "🦅",
    cards: [
      { q: "What was the Pax Romana?", a: "The 'Roman Peace' — roughly 200 years (27 BCE–180 CE) of stability, prosperity, and minimal expansion under the Roman Empire." },
      { q: "What was the Silk Road?", a: "A network of trade routes connecting China to the Mediterranean, facilitating exchange of goods (silk, spices), ideas, religions, and diseases." },
      { q: "Why did the Roman Republic fall?", a: "Civil wars, concentration of power in generals (Marius, Sulla, Caesar), land inequality, and political corruption led to the rise of the Empire under Augustus." },
      { q: "Who was Ashoka and why is he significant?", a: "Mauryan emperor who converted to Buddhism after the Kalinga war and promoted non-violence, religious tolerance, and welfare through his rock edicts." },
      { q: "What were the main achievements of the Han Dynasty?", a: "Paper invention, Silk Road expansion, civil service exams, Confucian governance, iron tools, and advances in astronomy and medicine." },
      { q: "What caused the fall of the Western Roman Empire?", a: "A combination of barbarian invasions, economic troubles, military overextension, political instability, and the division into Eastern/Western halves." },
      { q: "What are the Four Noble Truths of Buddhism?", a: "1) Life involves suffering (dukkha), 2) Suffering arises from desire, 3) Suffering can end, 4) The Eightfold Path leads to its end." },
      { q: "How did Christianity spread through the Roman Empire?", a: "Through apostles like Paul, trade networks, appeal to the poor, and eventually Emperor Constantine's conversion and the Edict of Milan (313 CE)." },
    ]
  },
  {
    id: "medieval",
    name: "The Medieval World",
    icon: "⚔️",
    cards: [
      { q: "What was feudalism?", a: "A system where lords granted land (fiefs) to vassals in exchange for military service, creating a hierarchy: King → Lords → Knights → Serfs." },
      { q: "What was the Islamic Golden Age?", a: "A period (~8th–14th century) of scientific, cultural, and economic flourishing in the Islamic world — advances in algebra, medicine, optics, and philosophy." },
      { q: "What were the Crusades?", a: "A series of religious wars (1096–1291) launched by European Christians to recapture the Holy Land, with lasting political and cultural consequences." },
      { q: "How did the Black Death transform Europe?", a: "Killed 30–60% of Europe's population, leading to labour shortages, higher wages for peasants, decline of feudalism, and religious questioning." },
      { q: "Who was Genghis Khan?", a: "Founder of the Mongol Empire (r. 1206–1227), the largest contiguous land empire in history. United nomadic tribes and conquered from China to Eastern Europe." },
      { q: "What was the significance of Mansa Musa's hajj?", a: "His 1324 pilgrimage to Mecca, with vast quantities of gold, put Mali on European maps and demonstrated the wealth of West African empires." },
      { q: "What was the Magna Carta?", a: "A 1215 charter forcing King John to accept limits on royal power — a foundational document for constitutional governance and the rule of law." },
      { q: "What made Constantinople strategically important?", a: "Located at the crossroads of Europe and Asia, it controlled key trade routes between the Mediterranean and Black Sea, and was heavily fortified." },
    ]
  },
  {
    id: "early-modern",
    name: "Early Modern Era",
    icon: "🧭",
    cards: [
      { q: "What was the Renaissance?", a: "A cultural movement (14th–17th century) beginning in Italy — a 'rebirth' of classical learning, humanism, art, and scientific inquiry." },
      { q: "What was the Columbian Exchange?", a: "The transfer of plants (potatoes, maize, tobacco), animals (horses, cattle), diseases (smallpox), and people between the Americas and Old World after 1492." },
      { q: "What sparked the Protestant Reformation?", a: "Martin Luther's 95 Theses (1517) criticising the Catholic Church's sale of indulgences, backed by the printing press spreading his ideas rapidly." },
      { q: "What were the key ideas of the Enlightenment?", a: "Reason over tradition, individual rights, the social contract, separation of powers, religious tolerance, and scientific inquiry." },
      { q: "What caused the French Revolution?", a: "Financial crisis, Enlightenment ideas, inequality of the Three Estates, food shortages, and the example of the American Revolution." },
      { q: "Who were Locke, Montesquieu, and Rousseau?", a: "Enlightenment thinkers: Locke (natural rights, consent of governed), Montesquieu (separation of powers), Rousseau (social contract, general will)." },
      { q: "What was the significance of the printing press?", a: "Gutenberg's press (~1440) made books affordable, spreading literacy, enabling the Reformation, and accelerating the Scientific Revolution." },
      { q: "What was the Haitian Revolution?", a: "A successful slave revolt (1791–1804) that created Haiti — the first free Black republic and the only successful large-scale slave rebellion in history." },
    ]
  },
  {
    id: "nineteenth",
    name: "The Long 19th Century",
    icon: "🏭",
    cards: [
      { q: "Why did the Industrial Revolution begin in Britain?", a: "Coal and iron resources, colonial markets, stable government, agricultural revolution freeing up labour, and a culture of innovation." },
      { q: "What was the 'Scramble for Africa'?", a: "The rapid colonisation of Africa by European powers (1881–1914), formalised at the Berlin Conference (1884–85), dividing the continent with little regard for existing borders." },
      { q: "What was the Meiji Restoration?", a: "An 1868 Japanese revolution that restored imperial rule and launched rapid industrialisation, military modernisation, and Westernisation." },
      { q: "What were the Opium Wars?", a: "Two conflicts (1839–42, 1856–60) between China and Britain over the opium trade, resulting in unequal treaties and the ceding of Hong Kong." },
      { q: "Who was Karl Marx?", a: "A German philosopher (1818–1883) who wrote The Communist Manifesto and Das Kapital, arguing that class struggle drives history and capitalism would be overthrown by workers." },
      { q: "What was the abolition movement?", a: "A global campaign to end slavery. Key moments: British abolition (1833), US Emancipation Proclamation (1863), Brazil (1888)." },
    ]
  },
  {
    id: "world-wars",
    name: "The World at War",
    icon: "💣",
    cards: [
      { q: "What were the main causes of WWI?", a: "MAIN: Militarism, Alliances, Imperialism, Nationalism — triggered by the assassination of Archduke Franz Ferdinand in 1914." },
      { q: "What was the Treaty of Versailles?", a: "The 1919 peace treaty ending WWI that imposed reparations, territorial losses, and military restrictions on Germany — widely blamed for enabling WWII." },
      { q: "What was the Russian Revolution?", a: "Two 1917 revolutions: February (overthrew the Tsar) and October (Bolsheviks under Lenin seized power), leading to the creation of the USSR." },
      { q: "What caused the Great Depression?", a: "The 1929 US stock market crash, overproduction, bank failures, and protectionist tariffs — creating a global economic crisis that lasted through the 1930s." },
      { q: "What was the Holocaust?", a: "The systematic genocide of 6 million Jews and millions of others (Roma, disabled, political prisoners) by Nazi Germany during WWII." },
      { q: "What led to WWII?", a: "Treaty of Versailles resentment, the rise of fascism (Hitler, Mussolini), appeasement policies, the Great Depression, and German expansionism." },
      { q: "What were the atomic bombings of Hiroshima and Nagasaki?", a: "US nuclear attacks (August 1945) that killed ~200,000 people and led to Japan's surrender — the only wartime use of nuclear weapons." },
      { q: "What was D-Day?", a: "June 6, 1944 — the Allied invasion of Normandy, France. The largest seaborne invasion in history, marking the beginning of the end of Nazi control over Europe." },
    ]
  },
  {
    id: "contemporary",
    name: "The Contemporary World",
    icon: "🌐",
    cards: [
      { q: "What was the Cold War?", a: "A geopolitical struggle (1947–1991) between the US and USSR — characterised by proxy wars, nuclear arms races, and ideological competition without direct conflict." },
      { q: "What was the Berlin Wall?", a: "A wall dividing East and West Berlin (1961–1989), symbolising the Iron Curtain. Its fall in 1989 marked the beginning of the end of the Cold War." },
      { q: "What was decolonisation?", a: "The process by which colonies gained independence from European powers, primarily 1940s–1970s. India (1947), Ghana (1957), and Algeria (1962) are key examples." },
      { q: "What was apartheid?", a: "A system of racial segregation in South Africa (1948–1994), ended through resistance movements and negotiations led by Nelson Mandela and the ANC." },
      { q: "What caused the collapse of the Soviet Union?", a: "Economic stagnation, Gorbachev's reforms (glasnost/perestroika), nationalist movements in republics, the arms race burden, and the fall of communist governments in Eastern Europe." },
      { q: "What is globalisation?", a: "The increasing interconnection of economies, cultures, and populations through trade, technology, and migration — accelerated by the internet and container shipping." },
    ]
  },
];
