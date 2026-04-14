// World History glossary — key terms, people, places, events
const glossaryData = [
  // === Ancient World ===
  { term: "Civilisation", def: "A complex society with cities, government, religion, writing, and social hierarchy. The earliest civilisations emerged in river valleys around 3500 BCE.", category: "Concepts" },
  { term: "Mesopotamia", def: "The 'land between the rivers' (Tigris & Euphrates) in modern-day Iraq — home to Sumer, Babylon, and Assyria, often called the cradle of civilisation.", category: "Places" },
  { term: "Fertile Crescent", def: "An arc of fertile land stretching from the Persian Gulf through Mesopotamia to the eastern Mediterranean, where agriculture and civilisation first developed.", category: "Places" },
  { term: "Cuneiform", def: "One of the earliest writing systems, developed by Sumerians around 3400 BCE. Wedge-shaped marks pressed into clay tablets.", category: "Concepts" },
  { term: "Pharaoh", def: "The supreme ruler of ancient Egypt, considered both a political leader and a living god. The title means 'great house.'", category: "Concepts" },
  { term: "Dynasty", def: "A sequence of rulers from the same family line. Used across many cultures — Egyptian, Chinese, European, and more.", category: "Concepts" },
  { term: "City-state", def: "An independent state consisting of a city and its surrounding territory. Ancient Greek poleis (like Athens and Sparta) are classic examples.", category: "Concepts" },
  { term: "Democracy", def: "Government by the people. Originated in Athens around 508 BCE under Cleisthenes, where male citizens voted directly on laws and policy.", category: "Concepts" },
  { term: "Philosophy", def: "The 'love of wisdom' — the pursuit of knowledge about existence, ethics, and truth. Greek thinkers like Socrates, Plato, and Aristotle founded the Western tradition.", category: "Concepts" },
  { term: "Confucianism", def: "A Chinese ethical and philosophical system based on the teachings of Confucius (551–479 BCE), emphasising filial piety, social harmony, and moral governance.", category: "Concepts" },
  { term: "Hinduism", def: "One of the world's oldest religions, originating in the Indian subcontinent. Characterised by diverse beliefs, the caste system, karma, dharma, and cycles of rebirth.", category: "Concepts" },
  { term: "Buddhism", def: "A religion and philosophy founded by Siddhartha Gautama (the Buddha) in the 5th century BCE, teaching the path to enlightenment through the Four Noble Truths and Eightfold Path.", category: "Concepts" },

  // === Classical Age ===
  { term: "Republic", def: "A form of government where citizens elect representatives to make laws on their behalf. The Roman Republic (509–27 BCE) is a foundational example.", category: "Concepts" },
  { term: "Empire", def: "A large political unit that rules over diverse peoples and territories, usually created through conquest. Examples: Roman, Mongol, British, Ottoman.", category: "Concepts" },
  { term: "Senate", def: "The governing council of the Roman Republic, composed of patrician elders. It controlled finances, foreign policy, and provincial governance.", category: "Concepts" },
  { term: "Silk Road", def: "A network of ancient trade routes connecting China to the Mediterranean (~130 BCE–1453 CE), facilitating the exchange of goods, ideas, religions, and diseases.", category: "Concepts" },
  { term: "Pax Romana", def: "The 'Roman Peace' — roughly 200 years (27 BCE–180 CE) of relative stability, prosperity, and expansion across the Roman Empire.", category: "Events" },
  { term: "Julius Caesar", def: "Roman general and dictator (100–44 BCE) who expanded the Republic through conquest of Gaul and was assassinated on the Ides of March.", category: "People" },
  { term: "Augustus", def: "Born Octavian, the first Roman Emperor (27 BCE–14 CE) who established the Principate and ushered in the Pax Romana.", category: "People" },
  { term: "Ashoka", def: "Mauryan emperor (r. 268–232 BCE) who converted to Buddhism after the bloody conquest of Kalinga and became a champion of non-violence and dharma.", category: "People" },

  // === Medieval ===
  { term: "Feudalism", def: "A medieval European system in which lords granted land (fiefs) to vassals in exchange for military service and loyalty, forming a rigid social hierarchy.", category: "Concepts" },
  { term: "Serf", def: "A peasant bound to the land under feudalism, required to work for the lord in exchange for protection and the right to farm a small plot.", category: "Concepts" },
  { term: "Crusades", def: "A series of religious wars (1096–1291) launched by European Christians to recapture the Holy Land from Muslim control. Had lasting cultural and political effects.", category: "Events" },
  { term: "Caliphate", def: "An Islamic state led by a caliph — a political and religious successor to the Prophet Muhammad. Major caliphates: Rashidun, Umayyad, Abbasid, Ottoman.", category: "Concepts" },
  { term: "Magna Carta", def: "A charter signed in 1215 by King John of England, limiting royal power and establishing the principle that even the king was subject to law.", category: "Events" },
  { term: "Black Death", def: "A devastating plague pandemic (1347–1351) that killed an estimated 30–60% of Europe's population, transforming the continent's economy and society.", category: "Events" },
  { term: "Genghis Khan", def: "Founder and first Great Khan of the Mongol Empire (r. 1206–1227), which became the largest contiguous land empire in history.", category: "People" },
  { term: "Mansa Musa", def: "Emperor of the Mali Empire (r. 1312–1337), famed for his extraordinary wealth and his pilgrimage to Mecca that redistributed gold across North Africa.", category: "People" },

  // === Early Modern ===
  { term: "Renaissance", def: "A cultural and intellectual movement (14th–17th century) originating in Italy, characterised by renewed interest in classical learning, art, science, and humanism.", category: "Events" },
  { term: "Humanism", def: "A Renaissance intellectual movement emphasising human potential, classical learning, and secular inquiry over purely religious frameworks.", category: "Concepts" },
  { term: "Reformation", def: "A 16th-century religious movement initiated by Martin Luther's 95 Theses (1517), leading to the split of Western Christianity into Catholic and Protestant branches.", category: "Events" },
  { term: "Columbian Exchange", def: "The massive transfer of plants, animals, diseases, people, and ideas between the Americas and the Old World after 1492.", category: "Concepts" },
  { term: "Enlightenment", def: "An 18th-century intellectual movement emphasising reason, individual rights, scientific inquiry, and scepticism of traditional authority.", category: "Events" },
  { term: "Social Contract", def: "A theory (Hobbes, Locke, Rousseau) that governments derive their authority from the consent of the governed, who agree to surrender some freedoms for social order.", category: "Concepts" },
  { term: "Revolution", def: "A fundamental change in political power or organisational structures, typically occurring when the population revolts against the existing government.", category: "Concepts" },
  { term: "Martin Luther", def: "German theologian (1483–1546) who ignited the Protestant Reformation by posting his 95 Theses criticising the Catholic Church's sale of indulgences.", category: "People" },
  { term: "Leonardo da Vinci", def: "Italian Renaissance polymath (1452–1519) — painter, sculptor, architect, scientist, and inventor. Created the Mona Lisa and The Last Supper.", category: "People" },

  // === 19th Century ===
  { term: "Industrialisation", def: "The transition from agrarian economies to industrial manufacturing, beginning in Britain in the late 18th century. Transformed work, cities, and global power.", category: "Concepts" },
  { term: "Imperialism", def: "The policy of extending a country's power through colonisation, military force, or economic dominance over other nations and peoples.", category: "Concepts" },
  { term: "Colonialism", def: "The practice of acquiring political control over another country, occupying it with settlers, and exploiting it economically.", category: "Concepts" },
  { term: "Nationalism", def: "A political ideology centred on the belief that a people sharing common culture, language, or history should form an independent nation-state.", category: "Concepts" },
  { term: "Abolition", def: "The movement to end slavery. Key milestones: British abolition (1833), the US Emancipation Proclamation (1863), and Brazil's abolition (1888).", category: "Events" },
  { term: "Suffrage", def: "The right to vote in political elections. Suffrage movements fought to extend voting rights to non-property owners, women, and marginalised groups.", category: "Concepts" },
  { term: "Meiji Restoration", def: "The 1868 political revolution in Japan that restored imperial rule and launched rapid modernisation, industrialisation, and Westernisation.", category: "Events" },

  // === World Wars ===
  { term: "Alliances", def: "Formal agreements between nations to support each other, especially in war. Pre-WWI alliances (Triple Alliance, Triple Entente) turned a local crisis into a global war.", category: "Concepts" },
  { term: "Treaty of Versailles", def: "The 1919 peace treaty ending WWI, which imposed heavy reparations and territorial losses on Germany — widely seen as a cause of WWII.", category: "Events" },
  { term: "Fascism", def: "An authoritarian, ultranationalist ideology characterised by dictatorial power, suppression of opposition, and strong regimentation of society and economy.", category: "Concepts" },
  { term: "Holocaust", def: "The systematic genocide of six million Jews and millions of others by Nazi Germany during WWII (1941–1945), carried out through concentration and extermination camps.", category: "Events" },
  { term: "Totalitarianism", def: "A system of government where the state holds total authority over society and controls all aspects of public and private life.", category: "Concepts" },
  { term: "Adolf Hitler", def: "Leader of Nazi Germany (1933–1945) who instigated WWII in Europe and orchestrated the Holocaust. His expansionist policies led to the deadliest conflict in human history.", category: "People" },

  // === Contemporary ===
  { term: "Cold War", def: "The geopolitical tension (1947–1991) between the US-led Western bloc and the Soviet-led Eastern bloc, characterised by proxy wars, nuclear arms races, and ideological rivalry.", category: "Events" },
  { term: "Decolonisation", def: "The process by which colonies gained independence from European powers, primarily between the 1940s and 1970s across Africa, Asia, and the Middle East.", category: "Concepts" },
  { term: "Globalisation", def: "The increasing interconnection of the world's economies, cultures, and populations through trade, technology, migration, and the flow of information.", category: "Concepts" },
  { term: "United Nations (UN)", def: "An international organisation founded in 1945 to promote peace, security, and cooperation among nations. Succeeded the League of Nations.", category: "Concepts" },
  { term: "Apartheid", def: "A system of institutionalised racial segregation and discrimination in South Africa (1948–1994), dismantled following decades of resistance and the leadership of Nelson Mandela.", category: "Events" },
  { term: "Nelson Mandela", def: "South African anti-apartheid revolutionary and politician (1918–2013). Imprisoned for 27 years, he became the country's first Black president in 1994.", category: "People" },
  { term: "Mahatma Gandhi", def: "Indian independence leader (1869–1948) who pioneered non-violent civil disobedience (satyagraha) to resist British colonial rule.", category: "People" },
  { term: "Propaganda", def: "Information — often biased or misleading — used to promote a political cause or point of view. Widely used by all sides in both World Wars and the Cold War.", category: "Concepts" },
  { term: "Sovereignty", def: "The supreme authority of a state to govern itself without external interference. A foundational concept in international law since the Peace of Westphalia (1648).", category: "Concepts" },
  { term: "Genocide", def: "The deliberate and systematic destruction of a racial, ethnic, religious, or national group. The term was coined by Raphael Lemkin in 1944.", category: "Concepts" },
  { term: "Primary Source", def: "An original document, artifact, or record created during the time period being studied — letters, diaries, photographs, official records, etc.", category: "Concepts" },
  { term: "Secondary Source", def: "An analysis or interpretation of primary sources, created after the events being studied — textbooks, documentaries, academic articles, etc.", category: "Concepts" },
];
