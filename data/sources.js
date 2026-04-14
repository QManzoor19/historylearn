// Primary source excerpts for guided analysis
const primarySources = [
  {
    id: "hammurabi",
    title: "The Code of Hammurabi",
    date: "c. 1754 BCE",
    era: "ancient",
    type: "Legal Code",
    excerpt: `"If a man has put out the eye of a free man, they shall put out his eye. If he breaks the bone of a free man, they shall break his bone. If he puts out the eye of a serf, or breaks the bone of a serf, he shall pay one mina of silver."`,
    context: "One of the earliest surviving written legal codes, inscribed on a stone stele in Babylon. It reveals how ancient Mesopotamian society was structured by class.",
    questions: [
      "What principle of justice does this excerpt demonstrate?",
      "What does the different punishment for injuring a 'free man' vs. a 'serf' reveal about Babylonian society?",
      "How does this compare to modern legal systems?"
    ]
  },
  {
    id: "pericles",
    title: "Pericles' Funeral Oration",
    date: "431 BCE",
    era: "ancient",
    type: "Speech",
    excerpt: `"Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves. Its administration favours the many instead of the few; this is why it is called a democracy. If we look to the laws, they afford equal justice to all in their private differences."`,
    context: "Delivered by Athenian leader Pericles to honour soldiers killed in the Peloponnesian War, as recorded by the historian Thucydides. It is one of the most famous defences of democratic governance.",
    questions: [
      "How does Pericles define democracy in this speech?",
      "Who was actually included in Athenian democracy, and who was excluded?",
      "Why might Pericles emphasise these ideals during a funeral for war dead?"
    ]
  },
  {
    id: "caesar",
    title: "Julius Caesar — Commentarii de Bello Gallico",
    date: "58–49 BCE",
    era: "classical",
    type: "Military Account",
    excerpt: `"All Gaul is divided into three parts, one of which the Belgae inhabit, the Aquitani another, those who in their own language are called Celts, in our language Gauls, the third. All these differ from each other in language, customs and laws."`,
    context: "Caesar's own account of his military campaigns in Gaul (modern France). Written partly as propaganda to build his political reputation in Rome.",
    questions: [
      "Why might Caesar describe the diversity of Gaul's peoples?",
      "How reliable is a military commander's own account of his conquests?",
      "What does this tell us about Roman attitudes towards non-Roman peoples?"
    ]
  },
  {
    id: "magna-carta",
    title: "The Magna Carta",
    date: "1215 CE",
    era: "medieval",
    type: "Legal Document",
    excerpt: `"No free man shall be seized, imprisoned, dispossessed, outlawed, exiled, or ruined in any way, nor in any way proceeded against, except by the lawful judgement of his peers and the law of the land. To no one will we sell, to no one will we deny or delay, right or justice."`,
    context: "Signed by King John of England under pressure from rebellious barons. Though initially a political compromise, it became a foundational document for constitutional law and individual rights.",
    questions: [
      "What rights does this excerpt guarantee?",
      "Who were the 'free men' this document protected — was it everyone?",
      "Why is the Magna Carta considered a turning point in the history of governance?"
    ]
  },
  {
    id: "luther",
    title: "Martin Luther's 95 Theses (Selections)",
    date: "1517",
    era: "early-modern",
    type: "Religious Document",
    excerpt: `"27. They preach only human doctrines who say that as soon as the money clinks into the money chest, the soul flies out of purgatory.\n\n36. Any truly repentant Christian has a right to full remission of penalty and guilt, even without indulgence letters."`,
    context: "Luther nailed these theses to the door of the Castle Church in Wittenberg, challenging the Catholic Church's practice of selling indulgences. The printing press spread them across Europe in weeks.",
    questions: [
      "What specific practice is Luther criticising?",
      "Why was the printing press crucial to the impact of these theses?",
      "How might ordinary people have reacted to Luther's arguments?"
    ]
  },
  {
    id: "declaration-rights",
    title: "Declaration of the Rights of Man and Citizen",
    date: "1789",
    era: "early-modern",
    type: "Political Document",
    excerpt: `"Article 1: Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good.\n\nArticle 2: The aim of all political association is the preservation of the natural and imprescriptible rights of man. These rights are liberty, property, security, and resistance to oppression."`,
    context: "Adopted during the French Revolution by the National Constituent Assembly. Heavily influenced by Enlightenment thinkers, especially Locke and Rousseau.",
    questions: [
      "Which Enlightenment ideas can you identify in these articles?",
      "The document says 'men' — were women included in these rights?",
      "How does this compare to the American Declaration of Independence (1776)?"
    ]
  },
  {
    id: "factory-testimony",
    title: "Child Factory Worker Testimony",
    date: "1832",
    era: "nineteenth",
    type: "Parliamentary Testimony",
    excerpt: `"I worked in a worsted mill from seven in the morning till eight at night, with a thirty-minute break for lunch. I was eight years old. The overlooker used to strap us when we were drowsy. I was very tired at the end of the day. Many times I have been so fatigued I could scarcely eat my supper."`,
    context: "Testimony given to a British Parliamentary committee investigating factory conditions, which eventually led to the Factory Acts limiting child labour.",
    questions: [
      "What were the working conditions described here?",
      "Why might Parliament have been investigating factory conditions in 1832?",
      "How does this testimony connect to the broader effects of the Industrial Revolution?"
    ]
  },
  {
    id: "wilfred-owen",
    title: "Dulce et Decorum Est — Wilfred Owen",
    date: "1917",
    era: "world-wars",
    type: "Poetry",
    excerpt: `"Bent double, like old beggars under sacks,\nKnock-kneed, coughing like hags, we cursed through sludge,\nTill on the haunting flares we turned our backs,\nAnd towards our distant rest began to trudge.\n...\nIf you could hear, at every jolt, the blood\nCome gargling from the froth-corrupted lungs,\n... you would not tell with such high zest\nTo children ardent for some desperate glory,\nThe old Lie: Dulce et decorum est\nPro patria mori."`,
    context: "Written by British soldier-poet Wilfred Owen during WWI. The Latin phrase means 'It is sweet and fitting to die for one's country.' Owen was killed in action one week before the Armistice.",
    questions: [
      "How does Owen's description of soldiers contrast with the idea of glorious warfare?",
      "What is 'the old Lie' Owen refers to?",
      "Why is poetry a powerful primary source for understanding war?"
    ]
  },
  {
    id: "mandela",
    title: "Nelson Mandela — Speech from the Dock",
    date: "1964",
    era: "contemporary",
    type: "Court Speech",
    excerpt: `"During my lifetime I have dedicated myself to this struggle of the African people. I have fought against white domination, and I have fought against black domination. I have cherished the ideal of a democratic and free society in which all persons live together in harmony and with equal opportunities. It is an ideal which I hope to live for and to achieve. But if needs be, it is an ideal for which I am prepared to die."`,
    context: "Mandela delivered this speech during the Rivonia Trial before being sentenced to life imprisonment. He served 27 years before becoming South Africa's first Black president in 1994.",
    questions: [
      "What does Mandela mean by fighting against both 'white domination' and 'black domination'?",
      "Why would Mandela choose to make this statement knowing he faced the death penalty?",
      "How does this speech reflect broader themes of decolonisation and civil rights?"
    ]
  },
];
