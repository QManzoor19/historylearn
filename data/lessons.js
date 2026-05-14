// Lesson content — HTML format
// L["Topic Name"] = `<div class="lesson-body">...</div>`;

const L = {};

function simpleContent(name, sub) {
  return `<div class="lesson-body"><h3>${name}</h3><p>This lesson covers <strong>${name.toLowerCase()}</strong> — ${sub.toLowerCase()}.</p><div class="key-point">💡 Full detailed content coming soon. Use the Flashcards and Glossary tabs to study this topic!</div></div>`;
}

// ═══════════════════════════════════════════════════════
// ERA 1: THE ANCIENT WORLD
// ═══════════════════════════════════════════════════════

L["Human Origins & Prehistory"] = `<div class="lesson-body">

<h3>Before History</h3>
<p>Most of the human story took place <em>before</em> writing was invented. For over 300,000 years, our species existed without leaving behind a single written word. We know this period — called <span class="vocab-pill">prehistory</span> — only through bones, stones, paintings on cave walls, and the DNA we still carry. It's a strange feeling to realise that 95% of human existence is unknowable by the usual historical methods.</p>

<p>But "unknowable" doesn't mean "empty." This is when humans became human. We invented fire, language, art, religion, agriculture — everything that would later make civilisation possible. If civilisation is the book of human history, prehistory is the paper it's written on.</p>

<h3>Where Did We Come From?</h3>
<p>All modern humans share a common African ancestor. Around <strong>6–7 million years ago</strong>, our lineage split from the ancestors of chimpanzees. Over millions of years, various <span class="vocab-pill">hominid</span> species emerged — <em>Australopithecus</em> (including the famous "Lucy," ~3.2 million years ago), <em>Homo habilis</em>, <em>Homo erectus</em>, and eventually, around <strong>300,000 years ago in Africa</strong>, our own species: <em>Homo sapiens</em>.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The story of human evolution is less a ladder and more a branching tree. Multiple human species coexisted for most of our history — we weren't the only ones. Neanderthals lived in Europe, Denisovans in Asia, Homo floresiensis (the "hobbits") in Indonesia. If you met someone in Europe 50,000 years ago, they might have been a Neanderthal. Most modern non-African humans carry 1-4% Neanderthal DNA because our ancestors interbred with them.
</div>

<p>Around <strong>70,000 years ago</strong>, something remarkable happened — a "cognitive revolution." <em>Homo sapiens</em> started making more sophisticated tools, creating art, and using complex language. We began leaving Africa in significant numbers, eventually reaching every continent except Antarctica.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Where did modern humans (Homo sapiens) first evolve?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Europe</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Africa</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Central Asia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Life in the Paleolithic</h3>
<p>For most of prehistory, humans lived as <span class="vocab-pill">hunter-gatherers</span> in small bands of 25–150 people. This was the <strong>Paleolithic</strong> era — the "Old Stone Age." Life was hard but not always brutal. Studies of surviving hunter-gatherer societies suggest people worked only 3–5 hours a day to secure food. They had rich social lives, extensive knowledge of their environment, and were generally healthier (at the individual level) than early farmers would be.</p>

<p>The three great Paleolithic achievements:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Control of fire</strong> — cooked food provides more calories and kills parasites; fire extends the day and wards off predators.</li>
<li><strong>Language</strong> — no single invention is more important. Language lets us cooperate at scale, teach skills, and build on each other's knowledge.</li>
<li><strong>Tool-making</strong> — from simple stone flakes to hafted spears, bone needles, and fishhooks. Technology was the great amplifier.</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
In 1994, French cave explorers discovered <strong>Chauvet Cave</strong>, containing paintings of horses, lions, and mammoths made roughly 36,000 years ago. The artists used perspective, shading, and motion lines. These weren't "primitive" cave-scribblings — they were sophisticated art, made by people with the same brains we have. Near the paintings were handprints. Whoever we are now, we were already there.
</div>

<h3>The Agricultural Revolution</h3>
<p>Around <strong>10,000 BCE</strong>, something changed. In several places independently — the Fertile Crescent, China's Yellow River, Mesoamerica, the Andes, and New Guinea — humans started to farm. They planted seeds, domesticated animals, and stopped moving. This shift to agriculture is called the <span class="vocab-pill">Neolithic Revolution</span>, and it's probably the most important transition in human history.</p>

<p>Why did it happen? We're not entirely sure. The end of the last Ice Age stabilised the climate, making reliable harvests possible. Population pressure may have pushed groups to intensify food production. Whatever the causes, the effects were enormous.</p>

<div class="warning-box">
<strong>⚠️ Common misconception:</strong>
Agriculture is often called "progress" — but for the average person who lived through the transition, it was a disaster. Early farmers were shorter, sicker, and worked longer hours than their hunter-gatherer ancestors. Diets narrowed (a few crops replaced many wild foods). Close contact with animals spread new diseases. Some anthropologists call agriculture "the worst mistake in human history." Its benefits — civilisation, art, science — only became visible thousands of years later.
</div>

<h3>The First Towns</h3>
<p>Once people settled down, they built. Some of the earliest permanent settlements:</p>

<p><strong>Jericho</strong> (modern West Bank) — continuously occupied for over 11,000 years, making it one of the oldest cities in the world. Around 9000 BCE, its inhabitants built a massive stone wall and tower — a massive construction project that required coordination and probably, for the first time, some kind of leadership.</p>

<p><strong>Çatalhöyük</strong> (modern Turkey) — a Neolithic town of up to 8,000 people, dating to 7500 BCE. There were no streets; people entered their houses through the roof, walking across the town on a continuous rooftop surface. Çatalhöyük is strikingly egalitarian — every house is roughly the same size. It represents a pre-hierarchical stage of settled life, just before the emergence of kings and priests.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the Neolithic Revolution?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The invention of the wheel</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The shift from hunter-gathering to agriculture</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The domestication of the horse</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>The big picture:</strong> Everything we call "history" — cities, empires, writing, religion, wars — is built on a prehistoric foundation of fire, language, tools, and agriculture. These are the gifts our ancestors gave us across 300,000 years of struggle. When we open a book or plant a seed, we're using technologies older than civilisation itself.
</div>

</div>`;

// ─────────────────────────────────────────────────────────

L["Cradles of Civilisation"] = `<div class="lesson-body">

<h3>Why Here? Why Now?</h3>
<p>Around 10,000 years ago, something extraordinary happened. After hundreds of thousands of years of living as nomadic hunter-gatherers, humans began to <strong>settle down</strong>. They planted crops, domesticated animals, and built permanent villages. This shift — the <span class="vocab-pill">Neolithic Revolution</span> — didn't happen everywhere at once. It happened in very specific places, and for very specific reasons.</p>

<p>The key ingredient was <strong>water</strong>. The earliest civilisations all emerged in river valleys, where annual floods deposited rich, fertile silt along the banks. These rivers provided drinking water, irrigation for crops, transport routes, and fish. Without them, large-scale agriculture — and therefore large-scale society — was impossible.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine you're playing a survival game and you need to pick a starting location. You'd look for fresh water, fertile soil, natural defences, and trade routes. That's exactly what ancient peoples did — except their "game" lasted thousands of years, and the river valleys were the best spawn points on the map.
</div>

<h3>The Four River Valleys</h3>
<p>Historians identify four regions where civilisation independently emerged. Each developed writing, government, religion, and social hierarchy — but each did so in its own unique way.</p>

<p><strong>1. Mesopotamia — The Tigris & Euphrates (c. 3500 BCE)</strong></p>
<p>Located in modern-day Iraq, <span class="vocab-pill">Mesopotamia</span> means "land between the rivers." The Sumerians built the world's first cities here — Ur, Uruk, and Eridu — with populations in the tens of thousands. They invented <span class="vocab-pill">cuneiform</span> writing, the wheel, the plough, and the 60-minute hour (which we still use today). Mesopotamia was not a single empire but a patchwork of competing <span class="vocab-pill">city-states</span>, each with its own king, gods, and army.</p>

<p>The rivers here were unpredictable — unlike the Nile, they flooded irregularly and sometimes violently. This made Mesopotamians anxious and practical. Their religion featured capricious gods who could destroy cities on a whim. Their laws, like the famous <strong>Code of Hammurabi</strong> (c. 1754 BCE), were strict and specific — an attempt to impose order on a chaotic world.</p>

<div class="example-box">
<strong>🔗 Real-world connection:</strong>
The Code of Hammurabi contained 282 laws covering everything from property theft to medical malpractice. A surgeon whose patient died could have his hand cut off. This wasn't cruelty for its own sake — it was an attempt to create accountability in a society too large for everyone to know each other personally. Modern legal systems serve the same purpose, just with less dramatic punishments.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What does "Mesopotamia" mean?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Land of the gods</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Land between the rivers</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The first kingdom</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<p><strong>2. Ancient Egypt — The Nile (c. 3100 BCE)</strong></p>
<p>While Mesopotamia was chaotic and fragmented, Egypt was unified and stable. The <strong>Nile</strong> flooded predictably every year, depositing a strip of rich black soil along its banks. Egyptians called their land <em>Kemet</em> — "the black land" — in contrast to the red desert on either side. This reliability bred confidence. Egyptian religion was optimistic, focused on the afterlife and eternal order (<span class="vocab-pill">Ma'at</span>).</p>

<p>Around 3100 BCE, a king named <strong>Narmer</strong> (or Menes) unified Upper and Lower Egypt, creating one of history's first nation-states. The <span class="vocab-pill">pharaoh</span> was not just a king but a living god — the bridge between the human and divine worlds.</p>

<div class="key-point">
💡 <strong>Geography shapes culture:</strong> Mesopotamia's unpredictable floods produced anxious, legalistic societies. Egypt's predictable Nile produced confident, monumental ones. The same pattern repeats throughout history — the environment doesn't determine culture, but it profoundly shapes it.
</div>

<p><strong>3. The Indus Valley — The Indus River (c. 2600 BCE)</strong></p>
<p>The <span class="vocab-pill">Indus Valley</span> civilisation flourished in modern-day Pakistan and northwest India. Its two great cities — <strong>Mohenjo-daro</strong> and <strong>Harappa</strong> — were astonishingly well-planned. They had grid-pattern streets, standardised brick sizes, sophisticated drainage systems, and public baths. The level of urban planning suggests a powerful central authority.</p>

<p>Yet here's the mystery: we <em>cannot read their writing</em>. The Indus script has never been deciphered, which means we know far less about their beliefs, laws, and history than about Mesopotamia or Egypt.</p>

<p><strong>4. Ancient China — The Yellow River (c. 2000 BCE)</strong></p>
<p>Chinese civilisation emerged along the <strong>Huang He</strong> (Yellow River). The earliest documented Chinese dynasty is the <strong>Shang</strong> (c. 1600–1046 BCE), known for bronze casting, ancestor worship, and <strong>oracle bones</strong> — animal bones inscribed with questions to the gods, then heated until they cracked. These are the earliest form of Chinese writing.</p>

<p>The Shang were followed by the <strong>Zhou</strong> dynasty, which introduced the concept of the <span class="vocab-pill">Mandate of Heaven</span> — the idea that a ruler's authority comes from divine approval, which can be withdrawn if the ruler is unjust. This became the fundamental political philosophy of Chinese civilisation for the next 3,000 years.</p>

<h3>What Made These "Civilisations"?</h3>

<div class="key-point">
💡 <strong>The markers of civilisation:</strong>
<br>• <strong>Cities</strong> — permanent settlements with thousands of inhabitants
<br>• <strong>Government</strong> — organised political authority
<br>• <strong>Religion</strong> — shared beliefs with a priestly class
<br>• <strong>Writing</strong> — a system for recording language
<br>• <strong>Social hierarchy</strong> — distinct classes
<br>• <strong>Specialisation</strong> — people doing different jobs
<br>• <strong>Infrastructure</strong> — irrigation, roads, temples
</div>

<div class="warning-box">
<strong>⚠️ Common misconception:</strong>
"Civilisation" doesn't mean "better." Hunter-gatherer societies had their own complex cultures, knowledge systems, and social structures. The word "civilisation" is a technical term describing a specific type of social organisation — not a value judgement.
</div>

</div>`;

// ─────────────────────────────────────────────────────────

L["Ancient Egypt"] = `<div class="lesson-body">

<h3>The Gift of the Nile</h3>
<p>The Greek historian Herodotus called Egypt "the gift of the Nile" — and he was right. Without the river, Egypt would be desert. Every summer, monsoon rains far to the south swelled the Nile, which then flooded the Egyptian floodplain and left behind a layer of rich black silt. This happened with almost clockwork reliability, making Egypt one of the most productive agricultural regions in the ancient world.</p>

<p>Egyptians called their country <em>Kemet</em> — "the Black Land" — in contrast to <em>Deshret</em>, "the Red Land" of the surrounding desert. The desert was dangerous but also protective: it formed a natural barrier against invasion, allowing Egyptian civilisation to develop largely undisturbed for 3,000 years — one of the longest continuous civilisations in history.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
If Mesopotamia was a busy street corner — constantly invaded, traded through, and reshuffled — Egypt was a walled garden. The deserts on either side, the Mediterranean to the north, and the cataracts (rapids) on the upper Nile kept outsiders at bay. This is why Egyptian culture stayed so consistent for so long. Most empires last centuries; Egyptian civilisation lasted millennia.
</div>

<h3>The Three Kingdoms</h3>
<p>Egyptian history is traditionally divided into three "Kingdoms," separated by "Intermediate Periods" of instability:</p>

<p><strong>The Old Kingdom (c. 2686–2181 BCE)</strong> — the age of the pyramids. The great pyramids at Giza were built during this period, including the Great Pyramid of Khufu (c. 2560 BCE), which remained the tallest structure on Earth for nearly 4,000 years. The Old Kingdom collapsed after a combination of climate change (a drought caused the Nile floods to fail) and rising power of regional governors.</p>

<p><strong>The Middle Kingdom (c. 2055–1650 BCE)</strong> — a period of literature, art, and reform. Pharaohs focused on public works: irrigation projects, fortresses, and temples. This golden age of Egyptian literature produced works like "The Tale of Sinuhe," still read today. It ended when foreign invaders — the <strong>Hyksos</strong> — seized northern Egypt using superior military technology (chariots, composite bows).</p>

<p><strong>The New Kingdom (c. 1550–1070 BCE)</strong> — Egypt as imperial power. After driving out the Hyksos, Egyptian pharaohs pushed outward, creating an empire that stretched into Nubia and Syria. This was the age of famous pharaohs like <strong>Hatshepsut</strong>, <strong>Akhenaten</strong>, <strong>Tutankhamun</strong>, and <strong>Ramses II</strong>.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">During which kingdom were the great pyramids of Giza built?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Old Kingdom</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Middle Kingdom</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The New Kingdom</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Pharaoh as God-King</h3>
<p>Unlike in Mesopotamia, where kings were human rulers under the gods, the <span class="vocab-pill">pharaoh</span> in Egypt was himself divine. He was the earthly incarnation of the god Horus, and after death, he became Osiris. This gave pharaohs extraordinary ideological power — to rebel against the pharaoh was literally to rebel against the cosmic order (<span class="vocab-pill">Ma'at</span>).</p>

<p>The title "pharaoh" comes from <em>per-aa</em>, meaning "great house" — originally referring to the royal palace, later to the king himself. Pharaohs wore the Double Crown (combining the white crown of Upper Egypt and the red crown of Lower Egypt), carried the crook and flail, and wore a false ceremonial beard — even female pharaohs like Hatshepsut did so.</p>

<h3>Religion & the Afterlife</h3>
<p>Egyptians believed in an elaborate afterlife. When you died, your soul was weighed against the Feather of Truth. If your heart was lighter than the feather (meaning you lived a just life), you went to the Field of Reeds — a paradise that resembled Egypt. If heavier, a monster called Ammit devoured your heart and you ceased to exist.</p>

<p>This belief drove some of history's most elaborate funerary practices. <span class="vocab-pill">Mummification</span> preserved the body so the soul could return to it. Tombs were filled with food, treasures, and even servants (eventually replaced with small figurines called <em>shabtis</em>) to serve the deceased in the afterlife. The Book of the Dead provided spells and guidance for navigating the underworld.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The tomb of <strong>Tutankhamun</strong>, discovered nearly intact in 1922, contained over 5,000 artefacts — from golden sandals to chariots to a dagger made from meteoric iron. And Tutankhamun was a minor, short-reigning pharaoh whose tomb was smaller than most. Imagine what the tombs of Khufu or Ramses II must have contained before being looted in antiquity.
</div>

<h3>Writing & Knowledge</h3>
<p>Egyptian writing came in three forms:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Hieroglyphs</strong> — formal pictorial writing used on monuments and religious texts</li>
<li><strong>Hieratic</strong> — a cursive form for everyday administration</li>
<li><strong>Demotic</strong> — an even simpler script that emerged later</li>
</ul>

<p>The meaning of hieroglyphs was lost for over 1,400 years after the decline of Egyptian civilisation. It was only rediscovered after the <strong>Rosetta Stone</strong> was found in 1799 — a stone slab inscribed with the same text in hieroglyphs, demotic, and Greek. French scholar <strong>Jean-François Champollion</strong> cracked the code in 1822, reopening the door to Egyptian history.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the Rosetta Stone's role?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was Cleopatra's throne</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It allowed scholars to decipher hieroglyphs</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It marked the border of the empire</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Decline & Legacy</h3>
<p>After the New Kingdom, Egypt fell to a succession of foreign rulers — Nubians, Assyrians, Persians, Greeks (under Alexander, then the Ptolemies, ending with <strong>Cleopatra VII</strong>), and finally Romans. Egyptian culture gradually faded, though the Coptic Christian church preserved aspects of ancient Egyptian language until modern times.</p>

<p>Egypt's legacy is everywhere in our world — in the 365-day calendar, the 24-hour day, papyrus (the root of "paper"), our fascination with mummies and pyramids, and the enduring idea that civilisation's roots lie in the Nile Valley. When the Greeks visited Egypt, they felt humbled by its age; when Romans conquered it, they copied its architecture; when Napoleon's soldiers gazed at the Sphinx in 1798, they were still encountering something profoundly alien and ancient.</p>

</div>`;

// ─────────────────────────────────────────────────────────

L["Ancient Nubia & Kush"] = `<div class="lesson-body">

<h3>Africa's Forgotten Civilisations</h3>
<p>For most of the 20th century, when Western textbooks spoke of "ancient Africa," they meant Egypt. But Egypt was far from alone. Just south of Egypt, along the Upper Nile in modern Sudan, lay <span class="vocab-pill">Nubia</span> — a land of gold, trade, and powerful kingdoms that rivalled and sometimes ruled Egypt itself. The story of Nubia and its successor, the Kingdom of Kush, is one of ancient history's most underappreciated chapters.</p>

<p>Nubians and Egyptians shared the Nile but were distinct peoples with different languages and customs. The Egyptian-Nubian relationship was complex: sometimes trading partners, sometimes at war, sometimes one ruling the other. And — remarkably — Nubia eventually conquered Egypt and ruled it for about a century.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
If Egypt was the famous older sibling in the ancient African family, Nubia was the equally talented younger sibling who rarely got the spotlight. They shared a mother (the Nile) and had overlapping cultures, but each developed their own identity. And when Egypt got into trouble, it was Nubia who stepped in to save the family — ruling Egypt for decades as the 25th Dynasty.
</div>

<h3>The Kingdom of Kerma</h3>
<p>The earliest great Nubian civilisation was <strong>Kerma</strong> (c. 2500–1500 BCE), centred on a city of the same name. Kerma was a major power — large enough to alarm Egyptian pharaohs, who built a string of massive fortresses along the Nile to guard against Nubian raids.</p>

<p>Kerma was famous for:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Monumental architecture</strong> — massive mud-brick structures called <em>deffufas</em>, some of the largest ancient buildings in Africa</li>
<li><strong>Distinctive pottery</strong> — with striking black-topped red polished styles</li>
<li><strong>Royal burials</strong> — with hundreds of sacrificial attendants</li>
<li><strong>Gold</strong> — Nubia controlled the richest gold mines in the ancient world (the word "Nubia" may derive from the Egyptian <em>nub</em>, meaning gold)</li>
</ul>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why was Nubia particularly important to Egypt?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It provided Egypt's water</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It was a major source of gold and trade goods</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It built the pyramids</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>When Nubia Ruled Egypt: The 25th Dynasty</h3>
<p>Around 750 BCE, Egypt was politically fragmented and weak. The Nubian king <strong>Piye</strong>, ruling from the Kushite capital of Napata, saw an opportunity. He marched north, defeated the Egyptian factions, and established what Egyptians themselves called the <span class="vocab-pill">Twenty-Fifth Dynasty</span> — a line of Black pharaohs who ruled Egypt from approximately 747 to 656 BCE.</p>

<p>Piye and his successors — notably <strong>Shabaka</strong> and <strong>Taharqa</strong> — were devout admirers of Egyptian culture. They restored temples, revived Egyptian religious traditions, and promoted the arts. Taharqa, mentioned in the Hebrew Bible as an ally of Judah against Assyria, built monuments across Egypt that still stand today.</p>

<p>The 25th Dynasty ended when the Assyrian Empire — the military superpower of the age — invaded Egypt and drove the Nubians back south. But the legacy of the Black pharaohs endured: they saw themselves as more traditionally Egyptian than the Egyptians themselves, preserving practices that the Egyptian elite had abandoned.</p>

<div class="example-box">
<strong>🔗 Real-world connection:</strong>
For over a century, Europeans actively <em>denied</em> that the 25th Dynasty was African. Some scholars claimed the Nubians were "really" a Mediterranean people. It took the work of 20th-century African and African-American archaeologists to firmly re-establish Nubia's place in the historical record. This is a pattern we'll see repeatedly in African history — real achievements written out of the textbooks and slowly, painfully rewritten in.
</div>

<h3>Meroë — The Kushite Renaissance</h3>
<p>After being pushed out of Egypt, the Kushite kingdom continued to flourish — but shifted its capital south to <strong>Meroë</strong>, located in a fertile region well-suited to iron production. Meroë became a major centre of <strong>ironworking</strong>, the region's defining technology. Its iron tools and weapons fuelled both agriculture and military power.</p>

<p>Meroë is famous for its <strong>pyramids</strong> — more than 200 of them, though much smaller and steeper than Egyptian pyramids. Sudan actually has <em>more</em> pyramids than Egypt does, but most tourists have never heard of them. The Meroitic civilisation also developed its own script, which (like the Indus script) remains only partially deciphered.</p>

<div class="key-point">
💡 <strong>A surprising fact:</strong> Sudan has more pyramids than Egypt. Over 200 small, steep-sided pyramids at Meroë served as royal tombs for Kushite kings and queens. Many were damaged by the 19th-century Italian treasure-hunter Giuseppe Ferlini, who blew off their tops with dynamite searching for gold.
</div>

<h3>Aksum — The Next Great African Power</h3>
<p>As Meroë declined around 350 CE, another great African civilisation was rising: the Kingdom of <strong>Aksum</strong> (in modern Ethiopia). Aksum was one of the four great powers of the ancient world — ranked alongside Rome, Persia, and China by the Persian prophet Mani in the 3rd century.</p>

<p>Aksum became the first African kingdom to adopt <strong>Christianity</strong> (around 330 CE, before even the Roman Empire fully did so). Its capital featured towering stone obelisks — the tallest ever hewn as single pieces of rock. Aksum controlled the Red Sea trade, issued its own gold coinage, and its monarchs claimed descent from the biblical Queen of Sheba.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Where were the Nubian pyramids at Meroë located?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Modern-day Egypt</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Modern-day Sudan</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Modern-day Ethiopia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Why African History Is Often Underrepresented</h3>
<p>The omission of Nubia, Kush, Aksum, and later African kingdoms from most history curricula isn't accidental. It reflects centuries of European scholarship that assumed Africa was a "continent without history" — a racist assumption used to justify colonialism and slavery. The archaeology has always told a different story: Africa was home to sophisticated civilisations as old as any elsewhere.</p>

<p>Learning about Nubia and Kush isn't just filling in a gap. It's about reclaiming a fuller picture of human history — one where the Nile was shared by two great civilisations, where Black pharaohs ruled Egypt, where iron technology flowed from Sudan, and where the first Christian kingdom on Earth was in East Africa.</p>

</div>`;

// ─────────────────────────────────────────────────────────

L["The Bronze Age Collapse"] = `<div class="lesson-body">

<h3>When Civilisations Died Together</h3>
<p>Around <strong>1200 BCE</strong>, something catastrophic happened. Almost every major civilisation in the eastern Mediterranean collapsed — or suffered devastating blows — within about a generation. Cities burned. Empires fell. Writing systems disappeared. Populations plummeted. It took centuries to recover, and some places never did. Historians call this event the <span class="vocab-pill">Bronze Age Collapse</span>, and it remains one of the great mysteries of ancient history.</p>

<p>Imagine if, today, New York, London, Tokyo, Paris, and Beijing all collapsed within 50 years of each other — their governments gone, populations scattered, written records lost. That's the scale of what happened around the Mediterranean in the late 13th and early 12th centuries BCE.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Late Bronze Age was the ancient world's "version 1.0" of globalisation. Egypt, the Hittites, Mycenae (Greece), Babylon, and Assyria were deeply interconnected through trade in copper, tin, gold, and luxury goods. This interconnection made them wealthy — but also fragile. Modern analogy: imagine what happens to our smartphone supply chain if one or two key factories in Taiwan go offline. Now imagine that for everything, everywhere, at once.
</div>

<h3>The World Before the Collapse</h3>
<p>The Late Bronze Age (c. 1550–1200 BCE) was a period of remarkable international connection. Archaeologists have found:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>A Mycenaean sword in a Bronze Age grave in central Sweden</li>
<li>Afghan lapis lazuli in Egyptian tombs</li>
<li>Baltic amber in Greece and Mesopotamia</li>
<li>A shipwreck off the Turkish coast (Uluburun, ~1300 BCE) carrying cargo from at least nine different cultures — including Cypriot copper, Canaanite pottery, Egyptian glass, Baltic amber, and Mycenaean weaponry</li>
</ul>

<p>The major powers of the age were:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>New Kingdom Egypt</strong> — the southern superpower</li>
<li><strong>The Hittite Empire</strong> — ruling Anatolia (modern Turkey) and parts of the Levant</li>
<li><strong>Mycenaean Greece</strong> — palace-centred warrior kingdoms</li>
<li><strong>Babylon and Assyria</strong> — rival powers in Mesopotamia</li>
<li><strong>Mitanni</strong> — a kingdom in northern Syria</li>
<li><strong>The Canaanite cities</strong> — Ugarit, Byblos, and others</li>
</ul>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">The Late Bronze Age world was characterised by:</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Complete isolation of each civilisation</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Deep interconnection and long-distance trade</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Only two major superpowers</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Sea Peoples</h3>
<p>One of the best-known (and still mysterious) elements of the collapse is the arrival of the <strong>Sea Peoples</strong> — a confederation of seafaring raiders who attacked the coasts of Egypt, Anatolia, and the Levant. Egyptian inscriptions from the reign of <strong>Ramses III</strong> (c. 1178 BCE) describe vast fleets of invaders that the pharaoh — barely — managed to defeat.</p>

<p>Who were the Sea Peoples? The sources name groups like the Peleset, the Shekelesh, the Denyen, and the Sherden. Some scholars believe the Peleset became the Biblical Philistines, settling in what became "Palestine." But the origins of the others remain debated — they may have been refugees from elsewhere fleeing their own collapses, or perhaps Mediterranean raiders seizing an opportunity.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
Egyptian records describe the chaos vividly. The Hittite king wrote a desperate letter to a neighbouring ruler asking for grain shipments — "It is a matter of life and death!" Soon after, his empire was gone. A Canaanite scribe wrote during the fall of the city of Ugarit: "Ships of the enemy came. My cities were burned, and they did evil things in my country." This is one of the very last texts ever written in that city — which was abandoned shortly after and never reoccupied.
</div>

<h3>What Caused the Collapse?</h3>
<p>There's no single cause. Modern scholars see it as a "perfect storm" of overlapping disasters:</p>

<p><strong>1. Climate change & drought.</strong> Recent tree-ring and pollen studies show a severe, prolonged drought across the eastern Mediterranean starting around 1200 BCE. Harvests failed. Famine spread.</p>

<p><strong>2. Earthquakes.</strong> Seismic evidence suggests a cluster of major earthquakes in the region during this period, destroying cities and infrastructure.</p>

<p><strong>3. Internal rebellion.</strong> With food shortages came social unrest. The palace-based economies couldn't deliver basic goods, and peasant uprisings destabilised the elite.</p>

<p><strong>4. The Sea Peoples.</strong> Whether cause or symptom, their raids delivered the final blow to already-weakened states.</p>

<p><strong>5. Systemic vulnerability.</strong> Because the powers were so interconnected, the collapse of one weakened all. When Mycenaean trade disappeared, the Hittites (reliant on grain from distant sources) starved. When Egypt stopped importing tin, bronze became harder to make everywhere.</p>

<div class="warning-box">
<strong>⚠️ Common misconception:</strong>
The Bronze Age Collapse wasn't caused by one thing — no single "barbarian invasion" or "great flood." It was a cascading systems failure. Each problem made others worse. This is why scholars increasingly study it as a warning about how interconnected civilisations can unravel — a question that feels urgently relevant today.
</div>

<h3>The Aftermath: A Dark Age</h3>
<p>The consequences were staggering:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Mycenaean Greece collapsed entirely.</strong> Population fell by an estimated 75%. Writing (Linear B) was lost. Greece entered a 400-year "Dark Age" with no literature, no monumental building, no records. Only oral memory survived — which much later produced the <em>Iliad</em> and <em>Odyssey</em>.</li>
<li><strong>The Hittite Empire vanished.</strong> Its capital Hattusa was burned and abandoned.</li>
<li><strong>Egypt survived</strong> but never recovered its New Kingdom glory. It became a regional, not imperial, power.</li>
<li><strong>Almost every fortified city</strong> in the Levant and Anatolia was destroyed.</li>
</ul>

<p>But collapse also cleared the way for new civilisations. Out of the Dark Age eventually emerged <strong>classical Greece</strong>, the <strong>Phoenicians</strong> (who invented the alphabet), the <strong>Israelites</strong>, and eventually the <strong>Neo-Assyrian</strong> and <strong>Persian</strong> empires. The Iron Age — when iron tools replaced bronze — began in the collapse's aftermath, partly because copper and tin trade routes had been shattered.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What is the most accepted modern view of why the Bronze Age collapsed?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A single barbarian invasion</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A volcanic eruption</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A cascading mix of climate, rebellion, raiders, and systemic fragility</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Why It Still Matters</h3>
<p>The Bronze Age Collapse is more than a historical curiosity. It's the clearest ancient example of what happens when an interconnected, globalised system fails. It suggests that complexity brings vulnerability; that climate shocks can cascade into political disasters; that civilisations we think of as unshakeable can vanish within a generation.</p>

<p>When modern historians, scientists, and policymakers warn about "systems collapse" or "cascade failures," they often cite 1200 BCE as the template. The story isn't fatalistic — civilisations survived and rebuilt — but it is a reminder that we're more fragile than we think.</p>

</div>`;

// ─────────────────────────────────────────────────────────

L["The Persian Empires"] = `<div class="lesson-body">

<h3>The World's First Superpower</h3>
<p>If you'd asked someone in the year 500 BCE which civilisation dominated the known world, they would have answered without hesitation: <strong>Persia</strong>. The <span class="vocab-pill">Achaemenid Empire</span>, at its peak, stretched from the Indus River in modern Pakistan to the Mediterranean and even briefly into Europe. It governed perhaps 50 million people — roughly <strong>44% of the world's population</strong>. No empire before, and arguably none after until the British Empire, was relatively larger.</p>

<p>Yet in the Western imagination, Persia often appears only as the villain in the Greek story — the faceless empire repelled at Marathon and Salamis. The Persian side of the story is quite different: a tolerant, well-administered, multicultural realm whose innovations shaped every empire that followed.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
If Greece was the quirky, argumentative small town that invented democracy, Persia was the vast, diverse federal government that figured out how to run an empire. Persia invented the things we take for granted: standardised coinage, a postal system, a road network, provincial governors, and religious tolerance. Many of Rome's administrative ideas came directly from Persia.
</div>

<h3>Cyrus the Great & the Achaemenid Rise</h3>
<p>The empire was founded by <strong>Cyrus II</strong> — known to history as <strong>Cyrus the Great</strong> (r. 559–530 BCE). Cyrus started as a local king of Persis (in modern southern Iran), then in a remarkable series of conquests:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>Overthrew the <strong>Medes</strong> (his overlords)</li>
<li>Conquered <strong>Lydia</strong> in Anatolia, including the famous king Croesus</li>
<li>Took <strong>Babylon</strong> without a battle in 539 BCE</li>
<li>Freed the Jews from the <strong>Babylonian Captivity</strong>, allowing them to return to Jerusalem</li>
</ul>

<p>Cyrus's conquest style was revolutionary. Instead of destroying conquered cities (the Assyrian way), he let locals keep their religion, laws, and customs — as long as they paid tribute and provided soldiers. The <strong>Cyrus Cylinder</strong>, a clay cylinder inscribed with his proclamation on taking Babylon, is sometimes called the world's first charter of human rights. That's an overstatement, but the core message — respect local customs, allow displaced peoples to return home, restore temples — was genuinely new.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What made Cyrus the Great's approach to conquest distinctive?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">He destroyed every city he conquered</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">He allowed conquered peoples to keep their religion and customs</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">He forced everyone to speak Persian</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Darius the Administrator</h3>
<p>Cyrus built the empire; <strong>Darius I</strong> (r. 522–486 BCE) made it work. Darius was the great organiser, dividing the empire into roughly 20 provinces called <span class="vocab-pill">satrapies</span>, each governed by a <em>satrap</em>. He created:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The Royal Road</strong> — stretching about 2,700 km from Susa to Sardis. Royal couriers could carry messages the entire length in about a week — an efficiency no one would surpass for over 2,000 years.</li>
<li><strong>The postal system</strong> — Herodotus wrote that "neither snow nor rain nor heat nor gloom of night stays these couriers." Sound familiar? That's the inscription over the New York General Post Office.</li>
<li><strong>Standardised coinage</strong> — the <em>daric</em>, a gold coin used throughout the empire.</li>
<li><strong>A common language of administration</strong> — Imperial Aramaic, used in documents from Egypt to India.</li>
</ul>

<p>Darius also began building <strong>Persepolis</strong>, a magnificent ceremonial capital whose ruins remain among the most impressive in the world. Its walls depict subject peoples bringing tribute — a visual catalogue of the empire's diversity.</p>

<h3>The Persian Wars</h3>
<p>The conflicts Persia is most remembered for in Western history were, from Persia's perspective, minor border skirmishes. Darius and his son <strong>Xerxes</strong> tried to subjugate the independent Greek city-states after they supported a revolt in Ionia. The results were:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Marathon (490 BCE)</strong> — Darius's expedition defeated by the Athenians</li>
<li><strong>Thermopylae (480 BCE)</strong> — the famous stand of 300 Spartans (and others) against Xerxes</li>
<li><strong>Salamis (480 BCE)</strong> — the Greek fleet destroyed the Persian navy</li>
<li><strong>Plataea (479 BCE)</strong> — the final Greek land victory</li>
</ul>

<p>These were real defeats, but the Persian Empire survived and flourished for another 150 years.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
We owe much of what we "know" about Persia to <strong>Herodotus</strong>, the Greek "father of history." But Herodotus was writing for a Greek audience just after the wars, and he portrayed Persia as the decadent, despotic foil to Greek freedom. Modern historians use Persian sources (Cyrus Cylinder, Behistun inscription, Persepolis reliefs) alongside Greek ones to build a fairer picture. Remember: history isn't just about events; it's also about who gets to tell the story.
</div>

<h3>Alexander and the End of the Achaemenids</h3>
<p>In 334 BCE, <strong>Alexander the Great</strong> of Macedon invaded the Persian Empire. Within a decade, the Achaemenid Empire — a realm of 220 years — had fallen. Alexander portrayed himself as Cyrus's heir, married Persian princesses, and encouraged his Macedonian generals to do the same. But his empire fragmented after his death.</p>

<h3>The Parthian and Sasanian Revivals</h3>
<p>Persia didn't stay conquered. Two later Persian empires rose to take Rome — and later Byzantium — to their limits:</p>

<p><strong>The Parthian Empire (247 BCE – 224 CE)</strong> — ruled by the Arsacid dynasty. The Parthians were feared for their cavalry — especially the "Parthian shot," where a rider fires an arrow backwards while retreating (the origin of the English idiom "parting shot"). They repeatedly defeated Roman armies and kept Rome from ever truly conquering Mesopotamia. At the Battle of <strong>Carrhae</strong> (53 BCE), Parthians annihilated a Roman army and killed the Roman general Crassus.</p>

<p><strong>The Sasanian Empire (224–651 CE)</strong> — founded by Ardashir I, who revived Achaemenid traditions. For four centuries, the Sasanians and the Romans/Byzantines fought each other to a standstill. <strong>Zoroastrianism</strong> became the official religion — a faith whose concepts (heaven, hell, a cosmic struggle between good and evil, a final judgement) influenced Judaism, Christianity, and Islam.</p>

<div class="key-point">
💡 <strong>A cultural crossroads:</strong> Many Zoroastrian concepts — the dualism of light and darkness, the idea of a final judgement, angels and demons, the resurrection of the dead — passed into later religions. When Jews returned from Babylonian exile under Cyrus, they brought Persian religious ideas back with them. Trace the theological family tree of Abrahamic religions and you'll find Persian roots mixed in everywhere.
</div>

<h3>The Arab Conquest</h3>
<p>In 651 CE, the Sasanian Empire fell to the early Arab-Islamic conquests. Yet Persian culture didn't die — it transformed. Persians adopted Islam but retained their language (Persian/Farsi, not Arabic), their literature, and their artistic traditions. In the centuries that followed, Persians helped shape the Islamic Golden Age, and Persian became the language of court, poetry, and administration from Anatolia to India. When you look at a Mughal miniature or read Rumi's poetry, you're seeing Persia's living legacy.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What religion was central to the Sasanian Empire and influenced later Abrahamic faiths?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Buddhism</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Zoroastrianism</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Manichaeism</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

</div>`;

// ─────────────────────────────────────────────────────────

L["Ancient Greece"] = `<div class="lesson-body">

<h3>Why Greece Matters</h3>
<p>No civilisation has shaped Western thought more than ancient Greece. In a few hundred years, on a rocky, mountainous peninsula and a scatter of islands, Greeks invented or decisively transformed <strong>democracy</strong>, <strong>philosophy</strong>, <strong>history</strong>, <strong>theatre</strong>, <strong>mathematics</strong>, <strong>science</strong>, and <strong>systematic medicine</strong>. The words we still use — <em>politics</em>, <em>philosophy</em>, <em>democracy</em>, <em>history</em>, <em>physics</em>, <em>biology</em>, <em>logic</em>, <em>ethics</em> — are almost all Greek.</p>

<p>Yet ancient Greece was never a single country. It was a patchwork of independent <span class="vocab-pill">city-states</span> (poleis) that shared a language, religion, and culture but fought each other constantly. Their small scale and fierce independence may actually be <em>why</em> they invented so much — with no overarching ruler to enforce orthodoxy, ideas competed freely.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a continent divided into hundreds of small cities, each a fiercely independent experiment in governance. One is ruled by an assembly of all adult male citizens. Another is a militarised barracks-society. Another is a tyranny. They trade with each other, compete at sports, fight wars, and steal each other's best ideas. That was Greece — a natural laboratory of political and intellectual experimentation.
</div>

<h3>Bronze Age Roots: Minoans & Mycenaeans</h3>
<p>Greek civilisation didn't start with Socrates. Its roots go back 3,000 years earlier, to two Bronze Age cultures:</p>

<p><strong>The Minoans</strong> (on Crete, c. 2000–1450 BCE) — named after the legendary King Minos. They built grand, unfortified palaces (Knossos is the most famous), created stunning frescoes, and traded across the Mediterranean. Their script, Linear A, is still undeciphered. Around 1450 BCE, Minoan civilisation collapsed — possibly after the massive volcanic eruption of Thera.</p>

<p><strong>The Mycenaeans</strong> (mainland Greece, c. 1600–1100 BCE) — a warrior society of fortified palaces ruled by kings. They used Linear B (the earliest known form of Greek). The legends of the <strong>Trojan War</strong>, Agamemnon, Achilles, and Odysseus are hazy memories of this age, preserved orally for centuries before being written down by Homer.</p>

<p>Mycenaean civilisation collapsed around 1100 BCE in the Bronze Age Collapse. Greece entered a 400-year <strong>Dark Age</strong> — writing disappeared, populations crashed, and only oral tradition survived.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What were the Mycenaeans?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A classical Athenian philosophy school</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A Bronze Age warrior civilisation in mainland Greece</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A group of Persian invaders</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Rise of the Polis</h3>
<p>Around 800 BCE, Greece emerged from its Dark Age with a new political form: the <strong>polis</strong>, or city-state. Each polis was a small, self-governing community centred on a city — usually with a fortified high point (the <em>acropolis</em>) and a market/meeting space (the <em>agora</em>).</p>

<p>Some city-states — like <strong>Athens</strong> — grew into large urban centres with tens of thousands of inhabitants. Others remained small villages. What they shared was fierce independence. When the Athenians spoke of "freedom," they didn't mean abstract individual liberty — they meant the freedom of their <em>polis</em> from domination.</p>

<h3>Athens vs Sparta: Two Opposites</h3>
<p>The two most famous city-states were as different as two Greek cities could be.</p>

<p><strong>Sparta</strong> was a militarised, agrarian society. Spartan boys entered a brutal state-run training system (the <em>agoge</em>) at age 7 and lived as soldiers until retirement at 60. Sparta's economy ran on the labour of the <em>helots</em> — an enslaved population many times the number of Spartans themselves. Spartan women had more rights and education than women elsewhere in Greece (they needed to be strong, the theory went, to produce strong sons).</p>

<p><strong>Athens</strong> was a commercial, maritime, intellectual powerhouse. It traded across the Mediterranean, built a navy that dominated the Aegean, and became the greatest patron of art and philosophy in antiquity. Most famously, Athens invented <span class="vocab-pill">democracy</span>.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Spartan-Athenian contrast still shapes political metaphors. When people debate "military virtue vs. intellectual culture" or "security vs. liberty," they're unconsciously drawing on Sparta vs. Athens. Even the US Founding Fathers argued about which model to follow — and landed somewhere in between.
</div>

<h3>The Birth of Democracy</h3>
<p>Around 508 BCE, the Athenian reformer <strong>Cleisthenes</strong> overthrew an aristocratic faction and introduced a new system: adult male citizens would vote directly on laws and policy in an assembly called the <em>ekklesia</em>. Any citizen could speak. Most officials were chosen by <strong>lottery</strong> rather than election — the idea being that picking randomly from the citizen body was more democratic than voting (which favours the rich and famous).</p>

<p>But Athenian democracy had major limits. Only adult male citizens could vote — roughly 10–20% of the population. <strong>Women, slaves, and foreigners</strong> (even long-term residents called <em>metics</em>) were excluded. It was a direct democracy, not a representative one, and it worked at the small scale of a city of perhaps 40,000 male citizens.</p>

<div class="warning-box">
<strong>⚠️ Common misconception:</strong>
Athenian democracy was not universal. Most people in Athens — women, slaves, immigrants — could not vote. The Athenian population around 431 BCE was roughly 30% enslaved. Democracy in Athens was a democracy <em>of a citizen elite</em>. Modern liberal democracies took 2,500 years to extend voting to everyone; the Athenian innovation was only the first step on a very long road.
</div>

<h3>The Persian Wars & the Golden Age</h3>
<p>In 490 and 480 BCE, the Persian Empire tried to crush the independent Greek city-states. Against all odds, the Greeks held — at <strong>Marathon</strong>, <strong>Thermopylae</strong>, <strong>Salamis</strong>, and <strong>Plataea</strong>. Victory gave the Greeks (especially Athens) enormous confidence. The following decades — the mid-5th century BCE — became Athens's <strong>Golden Age</strong>.</p>

<p>Under <strong>Pericles</strong> (r. c. 461–429 BCE), Athens became the cultural centre of the Greek world. The <strong>Parthenon</strong> was built atop the Acropolis. Tragedy and comedy flourished — <strong>Aeschylus</strong>, <strong>Sophocles</strong>, <strong>Euripides</strong>, <strong>Aristophanes</strong>. Athens created the world's first <strong>history</strong> as a disciplined practice (Herodotus, Thucydides). Medicine became scientific (Hippocrates). And most famously, philosophy exploded.</p>

<h3>Socrates, Plato, Aristotle</h3>
<p>Three generations of Athenian philosophers laid the foundation of Western thought:</p>

<p><strong>Socrates</strong> (469–399 BCE) left no writings — we know him through his student Plato. His method was relentless questioning: in conversation, he'd ask someone to define a concept (justice, virtue, courage), then pick apart their answer until they admitted they didn't know. This "<strong>Socratic method</strong>" still drives law school classrooms. Athens eventually put him on trial for "corrupting the youth" and executed him with hemlock.</p>

<p><strong>Plato</strong> (428–348 BCE), Socrates's student, founded the <strong>Academy</strong> — the world's first university. He wrote dialogues exploring metaphysics, ethics, and politics. In <em>The Republic</em>, he imagined an ideal state ruled by philosopher-kings. His theory of <strong>Forms</strong> — that abstract concepts like beauty and justice have a more real existence than physical things — has echoed through 2,400 years of philosophy and theology.</p>

<p><strong>Aristotle</strong> (384–322 BCE), Plato's student, went in a very different direction. He was interested in everything — biology, physics, logic, ethics, poetics, politics. He invented systematic empiricism: observe, classify, infer. He also tutored a young Macedonian prince named Alexander. For 1,500 years, Aristotle's work was so dominant in European and Islamic scholarship that people just called him "The Philosopher."</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which philosopher was Alexander the Great's tutor?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Socrates</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Plato</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Aristotle</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Alexander & the Hellenistic World</h3>
<p><strong>Alexander the Great</strong> (356–323 BCE) was one of history's most successful conquerors. Starting at age 20, he conquered Persia, Egypt, and much of Central Asia, reaching India before his soldiers refused to go further. He died at 32 of a fever in Babylon.</p>

<p>Alexander's empire didn't last past his death — his generals carved it up into warring kingdoms. But his legacy did. The <strong>Hellenistic Age</strong> (323–30 BCE) that followed spread Greek culture across Egypt, the Middle East, and Central Asia. Greek became the language of trade and administration from the Nile to the Indus. Cities like Alexandria (Egypt) became multicultural melting pots. In Afghanistan and India, you can still find Buddhist statues with clearly Greek features — a legacy of Hellenistic art.</p>

<h3>The Legacy</h3>
<p>Greek civilisation didn't end — it was absorbed. Rome conquered Greece militarily but was itself conquered culturally: Roman literature, philosophy, religion, and art were Greek-derived. Through Rome, and later through Arab and Byzantine preservation, Greek learning reached medieval Europe and sparked the Renaissance. When the American Founding Fathers debated the Constitution, when Enlightenment philosophers wrote about rights, when modern scientists describe "elements" or "atoms" — they were all using Greek tools.</p>

<div class="key-point">
💡 <strong>The astonishing scale:</strong> Between roughly 500 and 300 BCE, a few hundred thousand Greeks produced more foundational ideas than almost any civilisation before or since. Democracy, philosophy, history, drama, scientific method, geometry — they're almost all Greek inventions. Whatever you're doing right now, you're probably doing it with concepts invented by ancient Greeks.
</div>

</div>`;

// ─────────────────────────────────────────────────────────

L["Ancient India & China"] = `<div class="lesson-body">

<h3>The Other Ancient Worlds</h3>
<p>Western history often focuses on Mesopotamia, Egypt, Greece, and Rome. But while those civilisations were rising and falling in the Mediterranean world, equally sophisticated civilisations were emerging in <strong>India</strong> and <strong>China</strong> — each producing religions, philosophies, and political systems that shape nearly half of humanity today.</p>

<p>This lesson covers the ancient foundations of both — the Vedic age, the birth of Hinduism and Buddhism, Confucianism and Daoism, and the Warring States period that set the stage for Chinese unification.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The 6th–4th centuries BCE were a period the philosopher Karl Jaspers called the <strong>Axial Age</strong>. Across Eurasia — independently — civilisations produced their foundational philosophies. Greece had Socrates. Israel had the later prophets. Persia had Zoroaster. India had the Buddha and the Upanishads. China had Confucius and Laozi. Something about the age pushed humans everywhere to ask the same big questions — and the answers they produced still frame our lives.
</div>

<h3>Part 1: Ancient India</h3>

<h3>The Vedic Age</h3>
<p>Around <strong>1500 BCE</strong>, Indo-European-speaking peoples — conventionally called the <strong>Aryans</strong> — migrated into the Indian subcontinent from Central Asia. (Note: the term "Aryan" here refers to a linguistic/cultural group from ancient India; it has no connection to the racist misuse in Nazi propaganda.) They brought Sanskrit, horse-drawn chariots, and a pantheon of sky-gods.</p>

<p>The Aryans composed the <strong>Vedas</strong> — sacred hymns passed down orally for centuries before being written. The <em>Rigveda</em>, the oldest, dates to around 1500–1200 BCE and is one of the oldest religious texts in the world still in continuous use. The Vedas are the foundation of <span class="vocab-pill">Hinduism</span>.</p>

<h3>The Caste System</h3>
<p>Vedic society organised people into four broad classes called <strong>varnas</strong>:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Brahmins</strong> — priests and scholars</li>
<li><strong>Kshatriyas</strong> — warriors and rulers</li>
<li><strong>Vaishyas</strong> — merchants and farmers</li>
<li><strong>Shudras</strong> — labourers and servants</li>
</ul>

<p>Outside these varnas were the <em>Dalits</em> (historically called "untouchables"), performing tasks deemed ritually polluting. Over time, varnas subdivided into thousands of <em>jatis</em> — endogamous communities that formed the social reality of daily life. The caste system is officially illegal in modern India, but its effects persist.</p>

<h3>Hinduism</h3>
<p>Hinduism isn't a single founded religion — it's a vast, evolving tradition with thousands of gods, sects, and practices. Core concepts include:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Dharma</strong> — cosmic order, and one's personal duty within it</li>
<li><strong>Karma</strong> — the law of cause and effect across lifetimes</li>
<li><strong>Samsara</strong> — the cycle of birth, death, and rebirth</li>
<li><strong>Moksha</strong> — liberation from the cycle</li>
</ul>

<p>Major gods include <strong>Brahma</strong> (creator), <strong>Vishnu</strong> (preserver), and <strong>Shiva</strong> (destroyer). Vishnu's avatars — especially <strong>Krishna</strong> and <strong>Rama</strong> — feature in the great epics <em>Mahabharata</em> and <em>Ramayana</em>, which shape Indian culture even today.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which of these is NOT a core concept of Hinduism?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Karma</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Moksha</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Original sin</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Buddhism & Jainism</h3>
<p>Around the <strong>6th–5th centuries BCE</strong>, north India saw a religious revolution. Teachers rejected the authority of the Vedas and the Brahmin priesthood, proposing new paths to liberation:</p>

<p><strong>Buddhism</strong> was founded by <strong>Siddhartha Gautama</strong> (c. 563–483 BCE), a prince who left his palace after encountering old age, disease, and death. After years of meditation, he achieved enlightenment and became the <strong>Buddha</strong> ("the awakened one"). His <strong>Four Noble Truths</strong> — life involves suffering, suffering comes from attachment, suffering can end, the Eightfold Path leads to its end — became one of the world's major religions.</p>

<p><strong>Jainism</strong> was founded (or refined) by <strong>Mahavira</strong> in the same era. Jains take non-violence (<em>ahimsa</em>) to remarkable extremes — some monks wear masks to avoid breathing in insects. Mahatma Gandhi was deeply influenced by Jain teachings.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
Buddhism later spread from India across Asia. It became dominant in Tibet, Mongolia, China, Japan, Korea, and Southeast Asia — but faded from India itself by about 1200 CE. Today, there are roughly 500 million Buddhists worldwide but relatively few in India. It's one of history's great religious migrations — a faith that spread further from its birthplace than almost any other.
</div>

<h3>Part 2: Ancient China</h3>

<h3>The Shang & Zhou Dynasties</h3>
<p>Chinese civilisation emerged along the Yellow River. The <strong>Shang Dynasty</strong> (c. 1600–1046 BCE) produced extraordinary bronzework, practised ancestor worship, and used <strong>oracle bones</strong> — animal bones inscribed with questions for the gods, then heated until they cracked. The cracks were "read" as divine answers. These oracle bone inscriptions are the earliest form of Chinese writing, directly ancestral to the characters used today.</p>

<p>The Shang were overthrown by the <strong>Zhou Dynasty</strong> (c. 1046–256 BCE). The Zhou introduced the <span class="vocab-pill">Mandate of Heaven</span> — the idea that a just ruler receives divine sanction, but an unjust one loses it and can be legitimately overthrown. This became the fundamental theory of Chinese politics for the next 3,000 years. It's actually a radical idea: the ruler is not absolute; rebellion against a bad ruler is morally justified.</p>

<div class="key-point">
💡 <strong>The Mandate of Heaven vs the Divine Right of Kings:</strong>
European "divine right of kings" said a king's authority was absolute and any rebellion was sin. The Chinese Mandate of Heaven said the opposite: if heaven removes its favour (signalled by natural disasters, peasant rebellion, or military loss), the dynasty has lost legitimacy and may be replaced. This is one reason Chinese dynasties could be peacefully replaced — losing didn't mean being cosmically wrong, just heaven-abandoned.
</div>

<h3>The Warring States Period</h3>
<p>By 475 BCE, Zhou power had collapsed. The period from 475 to 221 BCE is called the <strong>Warring States</strong> — over two centuries of near-constant conflict between seven major states fighting to unify China. It was brutal — mass armies, siege warfare, and entire populations wiped out. But it was also intellectually explosive: desperate rulers sought any philosophy or technique that would give them an edge.</p>

<h3>The Hundred Schools of Thought</h3>
<p>The Warring States produced the intellectual ferment later called the <strong>Hundred Schools of Thought</strong>. Three schools would prove most influential:</p>

<p><strong>Confucianism</strong> — founded by <strong>Confucius</strong> (Kongzi, 551–479 BCE). Confucius emphasised <em>ren</em> (humaneness), filial piety, respect for elders, and proper rituals. He believed a well-ordered society depended on virtuous rulers and well-educated officials. His collected sayings, the <em>Analects</em>, became the central text of Chinese education for two thousand years.</p>

<p><strong>Daoism (Taoism)</strong> — associated with <strong>Laozi</strong> (traditionally 6th century BCE; possibly a later figure or a composite). The core text, the <em>Daodejing</em>, urges harmony with the <em>Dao</em> ("the way") — a flowing, spontaneous natural order. Daoists distrusted political ambition and cultural artifice; they celebrated simplicity, paradox, and <em>wu wei</em> (effortless action). Daoism deeply shaped Chinese art, medicine, and spiritual practice.</p>

<p><strong>Legalism</strong> — pragmatic and harsh. Legalists argued humans are self-interested and only strict laws with heavy punishments can maintain order. They rejected Confucian ethics as naive. The state of Qin, adopting Legalism, would eventually conquer all the other Warring States and unify China.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Chinese philosophy emphasised ritual, filial piety, and virtuous government?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Confucianism</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Daoism</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Legalism</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Cultural Foundations That Still Shape Asia</h3>
<p>The cultural patterns laid in ancient India and China still shape billions of lives today:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>Hinduism has ~1.2 billion adherents; Buddhism ~500 million</li>
<li>Confucian social ethics — respect for elders, emphasis on education, family obligations — still dominate East Asian societies</li>
<li>Chinese characters, devised during the Shang and refined in the Zhou, are still used daily by over 1.4 billion people</li>
<li>Indian mathematics gave us the decimal system and the concept of zero</li>
<li>Chinese political theory — including the idea that the government must deserve its people's trust — shapes East Asian politics today</li>
</ul>

<p>Western history often treats ancient India and China as side stories. But they aren't — they're two of the four great wells from which human civilisation flows. Understanding them isn't optional for world history; it's essential.</p>

</div>`;

// ─────────────────────────────────────────────────────────

L["Pre-Roman Europe"] = `<div class="lesson-body">

<h3>The Europe Before Rome</h3>
<p>When Julius Caesar invaded Gaul in 58 BCE, he wasn't entering a "barbarian wilderness" — he was entering a continent full of sophisticated peoples with their own languages, religions, art, and political structures. The world that existed in Europe <em>before</em> Rome often gets reduced to a footnote: savage Celts and wild Germans waiting for Roman civilisation to save them. The reality was far richer.</p>

<p>This lesson covers the Iron Age peoples of pre-Roman Europe — primarily the <strong>Celts</strong> and the <strong>Germanic tribes</strong> — whose cultures shaped medieval and modern Europe far more than most textbooks suggest.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a continent where no one writes down their own history — but their neighbours do, and their neighbours tend to be their enemies. That's our problem with pre-Roman Europe. Almost everything we know about the Celts and Germans comes from Roman and Greek writers who saw them as exotic, frightening others. It's like trying to understand a country using only its enemies' propaganda.
</div>

<h3>The Indo-European Background</h3>
<p>Most European languages — from Irish to Russian to Greek to English — descend from a prehistoric tongue called <strong>Proto-Indo-European</strong>, spoken around 4000 BCE, probably in the steppes north of the Black Sea. Over thousands of years, Indo-European speakers spread across Eurasia, branching into Celts, Italics (who became Romans), Greeks, Germanics, Slavs, Persians, and Indo-Aryans (who reached India).</p>

<p>Related vocabulary across these languages makes this visible. Compare the word for "mother":</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li>Sanskrit: <em>mātṛ</em></li>
<li>Greek: <em>mētēr</em></li>
<li>Latin: <em>māter</em></li>
<li>Old Irish: <em>máthair</em></li>
<li>German: <em>Mutter</em></li>
<li>English: <em>mother</em></li>
<li>Persian: <em>mādar</em></li>
</ul>

<p>These languages didn't all develop the word independently — they inherited it from a common ancestor. Pre-Roman Europe's peoples, despite their differences, were linguistic cousins.</p>

<h3>The Celts: From Iberia to Anatolia</h3>
<p>The <strong>Celts</strong> were a loose family of peoples sharing related languages and cultural markers. They never formed a single "Celtic empire" — they were organised into hundreds of tribes and small kingdoms. But they spread across an enormous range:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The British Isles</strong> — the ancestors of the Irish, Welsh, Scots, and Cornish</li>
<li><strong>Gaul</strong> (modern France) — the Celts Caesar fought</li>
<li><strong>Iberia</strong> — the Celtiberians in central Spain and Portugal</li>
<li><strong>Central Europe</strong> — the cultural homeland of Celtic civilisation</li>
<li><strong>Galatia</strong> — Celts who migrated all the way to central Anatolia (modern Turkey). The biblical Epistle to the Galatians was addressed to them.</li>
</ul>

<p>Celtic craftsmanship was exceptional. The <strong>Hallstatt</strong> (c. 800–500 BCE) and <strong>La Tène</strong> (c. 500 BCE – 50 CE) cultures produced stunning metalwork: swords, shields, torcs (neck-rings), and cauldrons decorated with flowing, abstract designs. La Tène style — sinuous, asymmetrical, full of hidden figures — looks strikingly modern.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which of these places had Celtic-speaking populations in antiquity?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Only the British Isles</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">From Iberia to central Anatolia</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Only Scandinavia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Druids, Religion & Oral Tradition</h3>
<p>Celtic religion was led by <strong>druids</strong> — priests, judges, teachers, and keepers of tribal memory. Druids committed enormous amounts of lore to memory; Caesar claimed some trainees studied for 20 years. They refused to write down sacred knowledge, believing the written word weakened memory and spread wisdom to the unworthy.</p>

<p>This creates an ironic problem: the Celts could have told us their own story if they'd been willing to write it down. Instead, we depend on hostile Roman and Greek sources.</p>

<p>Celtic religion featured many gods, often associated with specific tribes or regions. Sacred groves, springs, and lakes were common places of worship. Ritual sacrifice — including, sometimes, human sacrifice — was practised; archaeological "bog bodies" from Iron Age Europe appear to be sacrificial victims.</p>

<p>Celtic women had considerably more rights and power than their Roman or Greek counterparts. They could inherit property, divorce husbands, and — famously in the case of <strong>Boudica</strong> of the Iceni — lead tribes into battle.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
In 60 CE, Boudica led a massive Celtic uprising against Roman rule in Britain. Her forces burned the Roman cities of Camulodunum (Colchester), Londinium (London), and Verulamium (St Albans) before being defeated. Tacitus estimates 70,000 Romans and allies died. Boudica became a British national hero — Queen Victoria was sometimes compared to her — and she's a reminder that pre-Roman Europe was not passive in the face of empire.
</div>

<h3>Germanic Tribes</h3>
<p>North and east of the Celts lived the <strong>Germanic peoples</strong> — ancestors of today's Germans, Dutch, English, Scandinavians, and others. Unlike the Celts with their elaborate Iron Age art, the Germanic tribes left less archaeological spectacle — though their wooden buildings, ships, and poetry were equally sophisticated, just less durable.</p>

<p>Germanic society was tribal, organised around warrior kings and free farmers. Early Germanic tribes included:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The Cimbri and Teutons</strong> — whose migrations terrified late Republican Rome</li>
<li><strong>The Suevi, Cherusci, and Marcomanni</strong> — who fought Rome along the Rhine and Danube</li>
<li><strong>The Goths, Vandals, Franks, Saxons, and Lombards</strong> — later peoples who would dismember the Western Roman Empire</li>
</ul>

<p>In 9 CE, a German chieftain named <strong>Arminius</strong> (Hermann) led a coalition of tribes to ambush three Roman legions in the <strong>Battle of the Teutoburg Forest</strong>, killing some 15,000 Romans. Emperor Augustus was said to have cried out, "Varus, give me back my legions!" The battle stopped Roman expansion east of the Rhine — effectively setting the border between "Romance" and "Germanic" Europe that still exists in language today.</p>

<h3>Iron Age Daily Life</h3>
<p>Most pre-Roman Europeans were farmers living in small villages. A typical Iron Age settlement consisted of roundhouses (circular thatched huts) with a central hearth, storage pits, grain silos, and defensive earthworks. <strong>Hillforts</strong> — fortified hilltop settlements — dotted the landscape; some, like Maiden Castle in England, are breathtaking in their scale.</p>

<p>The diet included bread, porridge, beef, pork, mutton, cheese, ale, and — when available — wine imported from the Mediterranean. Iron tools had made agriculture far more productive than in the Bronze Age, supporting larger populations.</p>

<p>Trade networks crisscrossed Iron Age Europe. British tin ended up in Mediterranean bronzes. Baltic amber was prized from Greece to Italy. Wine flowed from Gaul to Britain. The idea of "isolated primitive tribes" is a Roman propaganda image; the reality was a connected continent.</p>

<div class="warning-box">
<strong>⚠️ Common misconception:</strong>
Romans called non-Roman peoples "barbarians" — originally just meaning "people who don't speak Greek/Latin." It later acquired today's connotation of savagery. But "barbarian" peoples weren't savage; they were different. They had their own sophisticated cultures, economies, and political systems — just not ones Romans recognised as civilisation. When we use "barbarian" unthinkingly today, we're adopting an ancient slur.
</div>

<h3>The Migration Period</h3>
<p>As the Western Roman Empire weakened in the 4th and 5th centuries CE, Germanic peoples moved in increasing numbers across the imperial frontiers. The <strong>Migration Period</strong> (roughly 300–600 CE) saw Goths, Vandals, Franks, Angles, Saxons, Lombards, and Burgundians settle across former Roman territory — often with Rome's permission as <em>foederati</em> (federated allies), but eventually as sovereign kingdoms in their own right.</p>

<p>Out of this came modern Europe. The <strong>Franks</strong> founded what became France. The <strong>Angles and Saxons</strong> crossed the North Sea to become the English. The <strong>Visigoths</strong> founded kingdoms in Spain. The <strong>Lombards</strong> took northern Italy. Roman Europe dissolved into Germanic Europe — and the medieval world began.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the significance of the Battle of the Teutoburg Forest (9 CE)?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Rome conquered all of Germania</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Germanic tribes stopped Roman expansion east of the Rhine</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Celts and Romans made peace</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>A Continent Shaped by Its Pre-Roman Past</h3>
<p>When you visit Ireland, Scotland, Wales, or Brittany today, you're encountering living Celtic cultures. When you speak English, German, Dutch, or Swedish, you're speaking descendants of the Germanic languages. When you see a Celtic knot, a Viking rune, or a medieval coat of arms, you're looking at traditions that stretch back to pre-Roman Iron Age Europe.</p>

<p>Rome is, rightly, central to European history. But it never extinguished what came before. It absorbed some, fought others, and was eventually replaced by the descendants of the peoples it had called barbarians. Pre-Roman Europe isn't a prelude — it's the substrate on which all the later story was built.</p>

</div>`;

// ═════════════════════════════════════════════════════════
// ANCIENT EGYPT — DEEP MODULES
// Pilot for the modular in-depth curriculum. Each module is a
// self-contained lesson under the "Ancient Egypt" topic.
// ═════════════════════════════════════════════════════════

L["Ancient Egypt::1"] = `<div class="lesson-body">

<h3>A River That Made a Civilisation</h3>
<p>Egypt is, in its essence, a thin green ribbon running through a vast desert. Pull up a satellite image and you can see it instantly: a sliver of farmland hugging the Nile for over 1,000 kilometres, and on either side — nothing. Without the river, there is no Egypt. With it, there is one of the longest-lived civilisations humanity has ever produced.</p>

<p>What made the Nile unusually generous was its <em>predictability</em>. Every summer, monsoon rains over the Ethiopian highlands swelled the river. By July the floodwaters reached Egypt; by October they receded, leaving behind a fresh layer of dark, mineral-rich silt. Egyptian farmers could count on this. Unlike the Tigris and Euphrates — which flooded violently and unpredictably — the Nile's <span class="vocab-pill">inundation</span> was so reliable that Egyptians built their entire calendar around it: three seasons of four months each, named Flooding, Emergence, and Harvest.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Mesopotamia's rivers were like a short-tempered landlord — one year they forgave your rent, the next they evicted everyone. The Nile was like a dependable, if demanding, employer who paid on the same day every month for 3,000 years. That difference shaped everything: Mesopotamian myths are anxious and apocalyptic, Egyptian myths are cyclical and confident. When your world renews itself every summer, you start to believe that eternity is real.
</div>

<h3>The Black Land and the Red Land</h3>
<p>Egyptians called their country <em>Kemet</em> — "the Black Land" — after the dark silt of the floodplain. Beyond it lay <em>Deshret</em>, "the Red Land": the hostile, barren desert. This was not just a geographical distinction. It was a moral one. The Black Land was order, fertility, and civilisation. The Red Land was chaos, death, and the unknown. The god Set, associated with storms and violence, was a desert god. The god Osiris, associated with resurrection and grain, was of the Black Land.</p>

<p>The desert wasn't purely hostile, though — it was also a shield. To the west lay the Sahara. To the east, eastern desert and the Red Sea. To the north, the Mediterranean. To the south, a series of rocky rapids called <span class="vocab-pill">cataracts</span> that blocked easy travel up the Nile. For most of Egyptian history, invading Egypt was simply too hard. This is why Egyptian culture stayed so stable for so long: it was not that Egyptians were uniquely conservative, it was that nobody could easily barge in and force them to change.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why was the Nile's flooding more useful than the Tigris and Euphrates'?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Nile flooded more water</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Nile flooded on a predictable, gentle schedule</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Nile never flooded, so farmers never lost crops</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The First Egyptians</h3>
<p>Long before pharaohs and pyramids, the Nile Valley was home to small farming villages. By around <strong>6000 BCE</strong>, people along the river had domesticated wheat, barley, cattle, sheep, and goats. They lived in mud-brick houses, made pottery, and buried their dead with care — often in shallow graves in the dry desert sand, which mummified the bodies naturally. (It's possible these accidental natural mummies inspired the later ritual practice.)</p>

<p>By the fourth millennium BCE, a sequence of archaeological cultures we now call <strong>Badarian</strong>, <strong>Naqada I</strong>, <strong>Naqada II</strong>, and <strong>Naqada III</strong> rose along the Upper (southern) Nile. Each was more complex than the last. Naqada pottery grew finer. Copper tools appeared. Symbols that look suspiciously like early hieroglyphs began showing up on ceremonial objects. By 3200 BCE, we can see the outlines of a chiefdom-level society with distinct elites, long-distance trade, and proto-writing.</p>

<p>Meanwhile, Lower (northern) Egypt — the Delta — had its own cultural tradition, often called <strong>Maadi-Buto</strong>. The two halves of what would become Egypt were not yet one country. They had different pottery, different burial customs, and probably different languages. What they did share was the river.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
In a Naqada II grave at Hierakonpolis, archaeologists found painted pottery showing a man in a tall white crown striking down bound enemies with a mace. The scene is almost identical to one we'd see a thousand years later on temple walls — the pharaoh smiting his foes. The <em>iconography of Egyptian kingship</em> was already forming before Egypt as a unified state even existed. Kings didn't invent the imagery. They inherited it.
</div>

<h3>Signs of a Kingdom Emerging</h3>
<p>How do archaeologists know proto-kings existed <em>before</em> Narmer? The evidence is on the ground, and it's striking. At <strong>Hierakonpolis</strong> (ancient Nekhen), excavators uncovered Tomb 100 — the so-called "Painted Tomb" — dating to around 3500 BCE. Its walls carry Egypt's earliest known narrative painting: boats, hunters, a ruler clubbing bound captives, and images of control and violence that would echo down the next three millennia. Whoever was buried here already thought of himself as something much more than a village chief.</p>

<p>From the same site came the <strong>Scorpion Macehead</strong>, a ceremonial stone mace carved with the image of a king wearing the White Crown of Upper Egypt, performing what looks like an irrigation ritual — opening a canal with a hoe. We don't know if "Scorpion" was one king or several (there may have been a Scorpion I and a Scorpion II), but he is almost certainly one of Narmer's immediate predecessors. Before unification, Upper Egyptian rulers were already styling themselves as divine engineers of the land.</p>

<p>Meanwhile, in the cemetery at Abydos known as <strong>Umm el-Qa'ab</strong> ("Mother of Pots"), successive generations of Predynastic and then early dynastic kings were buried in deep brick-lined pits, surrounded by hundreds of wine jars imported from the Levant. These jars are datable and traceable, which tells us two things: Upper Egyptian proto-kings had the wealth to import enormous quantities of foreign wine, and they expected to drink it in the afterlife. That's a culture already thinking in pharaonic terms.</p>

<h3>Narmer and the Unification (c. 3100 BCE)</h3>
<p>At some point around 3100 BCE, Upper and Lower Egypt became one. Exactly how this happened is debated. The traditional story, based on later Egyptian king-lists, credits a king named <strong>Menes</strong> with unifying the two lands. Most Egyptologists now identify Menes with a figure named <strong>Narmer</strong>, known from a remarkable artefact called the <span class="vocab-pill">Narmer Palette</span>.</p>

<p>The Narmer Palette, found at the ancient site of Hierakonpolis, is a shield-shaped piece of siltstone roughly 64 cm tall, carved in shallow relief around 3100 BCE. On one side, a king wearing the White Crown of Upper Egypt grips a kneeling captive by the hair and raises a mace to smash his skull. On the other side, the same king — now wearing the Red Crown of Lower Egypt — inspects rows of decapitated enemies. The message is brutally direct: one king now rules both lands.</p>

<p>Whether the unification was actually a single violent conquest, a slow absorption, or a political fiction invented to glorify one dynasty, it set the template. From this moment on, Egypt would almost always be ruled by a single king, who wore the Double Crown combining Upper and Lower symbols, and who was depicted — forever — smiting his enemies on the walls of his temples.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What does the Narmer Palette depict?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The building of the first pyramid</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A king ruling both Upper and Lower Egypt</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A funeral procession for a pharaoh</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Early Dynastic Period</h3>
<p>Narmer's unification kicked off what Egyptologists call the <strong>Early Dynastic Period</strong> (c. 3100–2686 BCE) — Dynasties 1 and 2. These first kings established the basic institutions of Egyptian civilisation: a divine kingship, a capital at <strong>Memphis</strong> (strategically placed at the junction of Upper and Lower Egypt), a unified writing system, a bureaucratic state capable of collecting taxes and managing land, and monumental tombs at sites like <strong>Abydos</strong> and <strong>Saqqara</strong>.</p>

<p>These royal tombs are important. They were the prototypes from which pyramids would evolve. The earliest were rectangular mud-brick structures called <span class="vocab-pill">mastabas</span> ("bench" in Arabic), with deep burial shafts beneath. They were already stocked with grave goods, surrounded by servant burials (sometimes including sacrificed retainers, a practice that thankfully died out by the Old Kingdom), and decorated with inscriptions naming the king. The tomb of <strong>Den</strong>, a 1st Dynasty pharaoh, even included Egypt's earliest known staircase — a small architectural step that, by the time of Djoser's Step Pyramid 400 years later, would become a monumental one.</p>

<p>The Early Dynastic kings also introduced something we often overlook: a systematic calendar. They conducted biennial cattle counts — essentially national tax audits — and kept year-by-year records, some of which survive on an artefact called the <strong>Palermo Stone</strong>. Year entries note things like the height of that year's Nile flood, royal rituals performed, and enemies defeated. Egypt was already a society that wrote down what happened and why. That habit would fuel 3,000 years of history.</p>

<p>By the end of the Second Dynasty, the essentials were in place: a single king, a divine ideology, a bureaucracy, writing, monumental architecture, and a cultural identity that distinguished Egypt from everyone around it. The next step — stacking one mastaba on top of another until you got a pyramid — was just around the corner.</p>

<h3>Writing, Trade & the Wider World</h3>
<p>One of the surprises of the Predynastic period is how <em>connected</em> it was. Egypt was not a sealed garden. By 3500 BCE, Upper Egyptian elites were importing lapis lazuli from Afghanistan, cedar from Lebanon, copper from Sinai, and wine from the southern Levant. The cultural flow went both ways: some of Egypt's earliest monumental architecture — niched brick facades — seems to copy Mesopotamian designs, and a handful of cylinder seals from Mesopotamia show up in Egyptian graves.</p>

<p>Writing appears in Egypt around the same time it does in Mesopotamia, c. 3200 BCE. Whether the two systems were invented independently or one inspired the other is still debated. What's clear is that Egyptian hieroglyphs emerged fully-formed and distinctly Egyptian: pictorial, tied to royal contexts, carved on labels and palettes and monuments. Some of the earliest known hieroglyphic inscriptions come from tomb U-j at Abydos, where ivory tags were attached to imported goods — essentially the world's oldest shipping labels, identifying origin, quantity, and owner.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">The earliest known hieroglyphs come from ivory tags at Abydos. What were they being used for?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Religious spells</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Poems praising the pharaoh</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Labels for imported trade goods</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Cataracts, Nubia, and the South</h3>
<p>Egypt's relationship with its southern neighbour, <strong>Nubia</strong>, was already active in the Predynastic. Upper Egyptian rulers raided south of the First Cataract (at modern Aswan) for gold, ivory, and ebony — and for people, too. The unification of Egypt may itself have been partly driven by competition over Nubian trade routes. This is a theme we'll see again and again: almost every major phase of Egyptian expansion eventually pushes south, and almost every period of Egyptian collapse sees Nubian kingdoms rising to fill the vacuum.</p>

<p>We'll explore this more deeply when we look at <em>Ancient Nubia & Kush</em> as its own topic. For now, just remember: Egypt was never alone in its valley. Its story is always, on some level, a story about what's happening further upriver.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> The "beginning of Ancient Egypt" wasn't a single moment — it was a slow fusion of three ingredients: a geography that rewarded patience and organisation, cultural traditions stretching back to the Neolithic, and a ruling class that by 3500 BCE was already projecting itself as divinely ordained. Narmer didn't invent Egypt in 3100 BCE. He harvested it.
</div>

<h3>Why Egypt's Start Matters</h3>
<p>It's tempting to see the pyramids as the beginning of Egyptian civilisation. They're not. They're a mature flowering of something that had been developing for thousands of years. Every element — the divine king, the Double Crown, the smiting pose, the burial in the desert, the union of two lands, the calendar tied to the flood, the writing, the trade networks — was already in place when Khufu's architects started stacking stones on the Giza plateau.</p>

<p>Understanding the Predynastic and Early Dynastic periods is what lets you see Egypt clearly. It shows you that civilisations don't appear fully formed; they emerge. It shows you how profoundly geography can shape culture. And it shows you why Egypt was so stable: by the time the pyramids rose, Egyptian civilisation already had a thousand years of momentum behind it — and another 2,500 still to come.</p>

<p>Keep that arc in mind as we move into the next module. When the first true pyramid rises at Saqqara under Djoser around 2650 BCE, it's not a sudden leap. It's the next logical step in a tradition that, by then, felt ancient even to the Egyptians themselves.</p>

</div>`;

L["Ancient Egypt::2"] = `<div class="lesson-body">

<h3>An Age Defined by Stone</h3>
<p>Between roughly <strong>2686 and 2181 BCE</strong>, Egypt experienced one of the most remarkable cultural and political flowerings in human history. We call it the <strong>Old Kingdom</strong> — the era of the great pyramids. In just five centuries, Egyptian civilisation moved from building royal tombs out of mud brick to raising the tallest stone structures the world would see for the next four thousand years. The state grew enormously powerful. The pharaoh became, in the official ideology, not merely a king but a living god. And then, with surprising speed, the whole system collapsed.</p>

<p>This is the period that gave us almost every image we associate with ancient Egypt: the smooth-sided pyramids of Giza, the Sphinx, the seated god-king, the priestly bureaucracy. It is also the period that demonstrates how much organisation, mathematics, engineering, and human labour an ancient state could mobilise when it had complete confidence in its mission.</p>

<h3>Djoser and Imhotep: The First Pyramid</h3>
<p>The Old Kingdom is conventionally dated from the start of the <strong>Third Dynasty</strong>, around 2686 BCE. Its second king, <strong>Djoser</strong> (also written Netjerikhet), broke decisively with everything that had come before. Earlier kings had been buried in <span class="vocab-pill">mastabas</span> — flat-roofed mud-brick rectangles, impressive but earthly. Djoser commissioned something new.</p>

<p>His architect was <strong>Imhotep</strong>, a name worth remembering. Imhotep was vizier, high priest, physician, and chief architect — perhaps the first non-royal individual in history whose name has come down to us through the millennia. He started by building a mastaba at Saqqara out of <em>stone</em> rather than mud brick. Then he kept going. He stacked another mastaba on top of it. Then another. Then three more. The result, when it was finished around 2650 BCE, was the <strong>Step Pyramid of Djoser</strong> — a six-stepped stone structure rising 60 metres above the desert plateau. It was the largest single building in the world at the time.</p>

<p>The Step Pyramid was not just a tomb. It was the centre of a vast funerary complex covering 15 hectares — courtyards, shrines, dummy buildings (carved in stone to imitate the perishable mud-brick palaces of life), all surrounded by an enclosure wall over a kilometre long. Imhotep was inventing not just an architectural form but an entire ritual landscape. Two thousand years later, the Egyptians still worshipped him as a god of wisdom and medicine. The Greeks identified him with Asclepius.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a society where, within a single human lifetime, the largest building you could think of grows from one storey of mud brick to a six-storey palace of dressed stone. That is what Djoser and Imhotep represented to their contemporaries — an enormous, sudden leap in what was possible. Every later pyramid is essentially trying to top, refine, or rival what they started.
</div>

<h3>Sneferu: The True Pyramid Emerges</h3>
<p>The next great pyramid-builder was <strong>Sneferu</strong>, founder of the Fourth Dynasty (r. c. 2613–2589 BCE). Sneferu didn't build one pyramid. He built three, learning as he went.</p>

<p>His first attempt was the <strong>Meidum Pyramid</strong>, which began as a stepped structure and was later modified to have smooth sides — but the outer casing collapsed catastrophically (perhaps during construction). His second was the <strong>Bent Pyramid</strong> at Dahshur, where the builders started at one steep angle (54°) and then, alarmingly, switched halfway up to a much shallower angle (43°). They had clearly realised the original angle wouldn't hold. His third was the <strong>Red Pyramid</strong>, also at Dahshur — the first true geometrically perfect smooth-sided pyramid in history.</p>

<p>By the end of Sneferu's reign, Egyptian builders had figured out how to construct a true pyramid. Sneferu in fact moved more stone — perhaps 3.7 million cubic metres across his three pyramids — than any other Egyptian king. He was the master engineer who made his son's project possible.</p>

<h3>Khufu and the Great Pyramid</h3>
<p>That son was <strong>Khufu</strong> (also known by his Greek name, Cheops), and the project was the <strong>Great Pyramid of Giza</strong>, built c. 2560 BCE. It remains one of humanity's most extraordinary achievements.</p>

<p>The Great Pyramid contains approximately <strong>2.3 million blocks of limestone</strong>, weighing on average 2.5 tonnes each (some interior blocks weigh up to 80 tonnes). Its base covers about 5.3 hectares — large enough to fit eight football pitches. Its sides are aligned to the cardinal directions with an error of less than a tenth of a degree. Its original height was 146.6 metres; until the Lincoln Cathedral spire was completed in 1311 CE, no human-made structure on Earth was taller. <strong>For nearly 3,800 years, the Great Pyramid was the tallest building in the world.</strong></p>

<p>Khufu's pyramid stands alongside two others on the Giza plateau: <strong>Khafre's</strong> (almost as tall, looking taller because it sits on higher ground and still retains a fragment of its original limestone casing at the top) and <strong>Menkaure's</strong> (about half the size of the other two, the last of the great pyramids). Khafre is also widely credited with commissioning the <strong>Great Sphinx</strong> — carved from a single limestone outcrop, with the body of a lion and a human face that may be his own portrait.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">For roughly how long was the Great Pyramid of Khufu the tallest building in the world?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">About 400 years</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">About 1,200 years</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Nearly 3,800 years</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>How Were the Pyramids Built?</h3>
<p>For centuries, the popular imagination has filled the gap with extravagant theories — aliens, lost technologies, even psychic powers. The reality is, in some ways, more impressive. The pyramids were built by ordinary Egyptian workers, with copper tools, simple ropes, wooden sledges, levers, and a staggering capacity for organisation.</p>

<p>Modern archaeology has uncovered the workers' settlement at Giza, just south of the pyramids. It included <strong>permanent housing, bakeries, breweries, and butcher's yards capable of processing thousands of animals</strong>. The skeletal remains show injuries consistent with hard physical labour, but also signs of careful medical care — broken bones set, lives prolonged. These weren't slaves. They were skilled, fed, and respected workers — many of them seasonal farmers who came to the building site during the flood months when their fields were underwater.</p>

<p>Estimates suggest a workforce of around <strong>20,000–30,000 people</strong> built the Great Pyramid over roughly 20 years. That's a colossal undertaking but a far cry from the "millions of slaves" of Hollywood imagination. The Egyptians cut the limestone blocks from quarries (most onsite, but the finest casing stones came from Tura across the Nile and Aswan granite from 700 km south), floated them down the Nile, and dragged them on sledges up earthen ramps. Recent papyrus discoveries — particularly the <strong>diary of Merer</strong>, a Fourth Dynasty official — describe the daily logistics in remarkable detail.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Diary of Merer</strong>, discovered in 2013 at Wadi al-Jarf on the Red Sea coast, is the oldest known papyrus document on Earth. It records, in matter-of-fact bureaucratic language, the work of a team that quarried fine Tura limestone and shipped it to Giza for the casing of Khufu's pyramid. Merer logs ship arrivals, work parties, food rations. He even refers to his boss, "the noble Ankhhaf," who we now know managed the construction project. It is the most direct administrative evidence we have for how the Great Pyramid was actually built.
</div>

<h3>The Pharaoh as God-King</h3>
<p>Why this enormous expenditure of human effort? Because in Old Kingdom theology, the pharaoh was not just a ruler but a <span class="vocab-pill">god</span>. In life he was the earthly incarnation of <strong>Horus</strong>, the falcon-god of kingship. In death he became <strong>Osiris</strong>, ruler of the underworld. His successful journey to the afterlife wasn't just a personal concern — it was the cosmic necessity that guaranteed the rebirth of crops, the predictability of the Nile flood, the order (<span class="vocab-pill">ma'at</span>) that held the universe together.</p>

<p>The pyramid was the vehicle of that journey. It was a launchpad for the king's soul, a stone reproduction of the primordial mound from which the world had emerged, a monument designed to outlast every conceivable catastrophe. The size of the pyramid was a statement of cosmic confidence: <em>this king's afterlife is secure, and therefore so is yours</em>. Egyptians did not build pyramids to one-up each other. They built them because the entire moral order of the universe was understood to depend on the success of the burial.</p>

<p>This ideology required a powerful, centralised state. The pharaoh's vizier headed a hierarchy of officials who collected grain taxes, organised the workforce, ran the quarries, managed the priesthood, and surveyed the land each year after the floods. Old Kingdom Egypt was one of the most bureaucratically sophisticated states the ancient world would produce. The famous bust of <strong>Prince Rahotep and his wife Nofret</strong> — painted limestone, eyes inlaid with rock crystal, almost three-dimensional in their realism — is a portrait of this Old Kingdom elite at its confident height.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In Old Kingdom theology, what was the pharaoh believed to <em>become</em> after death?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">An ancestor spirit, but not divine</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Osiris, ruler of the underworld</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A star in the night sky, but never a god</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Cracks in the System</h3>
<p>By the Fifth and Sixth Dynasties, the absolute confidence of the early Old Kingdom was beginning to ebb. Pyramids got smaller. The kings of the Fifth Dynasty (Userkaf, Sahure, Nyuserre) still built pyramids, but they also poured huge resources into solar temples — vast open-air shrines to the sun god Ra. The cult of Ra was rising. The cult of the king, by comparison, was being shared.</p>

<p>Provincial governors — the <span class="vocab-pill">nomarchs</span> — also became more powerful. Originally appointed by the king and recallable at will, they gradually turned into hereditary local rulers, accumulating wealth and loyalty in their own districts. The Egyptian state, which had functioned as a single unified machine under Khufu, began to fragment into competing centres of power.</p>

<p>The longest-reigning pharaoh of the Old Kingdom was <strong>Pepi II</strong>, who, according to later tradition, ruled for an astonishing 94 years (c. 2278–2184 BCE). His extraordinarily long reign created a succession crisis no one had planned for. By the time he died, the central state was already dissolving.</p>

<h3>The Collapse</h3>
<p>Around 2181 BCE, the Old Kingdom ended. The Sixth Dynasty fragmented; rival claimants vied for the throne; central authority effectively disappeared. Egypt entered what historians call the <strong>First Intermediate Period</strong> — a phrase Egyptologists invented to politely describe a chaotic century during which there was sometimes no clear king at all.</p>

<p>What caused the collapse? Modern research points to a perfect storm of three factors:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Climate change</strong>. Sediment cores from the Nile and pollen records from Lake Faiyum show that between roughly 2200 and 2000 BCE, the African monsoon weakened dramatically. The Nile floods, which Old Kingdom Egypt depended on so absolutely, became erratic. Several consecutive years of low floods meant famine. This was part of a much larger regional event — the so-called <strong>4.2 kiloyear event</strong> — that also collapsed the Akkadian Empire in Mesopotamia and the Indus Valley civilisation.</li>
<li><strong>Decentralisation</strong>. The hereditary nomarchs had grown strong enough that, when the central state weakened, they could fend for themselves. They did. Provinces splintered into local rivalries.</li>
<li><strong>Ideological exhaustion</strong>. The pyramid project required total state confidence. By the late Sixth Dynasty, the state had been building progressively shabbier pyramids for two centuries. The aura of god-kingship was thinning long before the political crisis arrived.</li>
</ul>

<p>The transition was not entirely violent — there's evidence of social mobility, even creativity, in this period. But the great Old Kingdom system, that magnificent confident pyramid-state, was gone.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What climate event is now thought to have helped collapse the Old Kingdom around 2200 BCE?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A volcanic winter caused by an eruption in Iceland</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A drying of the African monsoon known as the 4.2 kiloyear event</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A sudden rise in sea level that flooded the Nile Delta</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Why the Pyramid Age Still Matters</h3>
<p>The Old Kingdom is the source of nearly every cliché about ancient Egypt. But strip away the clichés and what's left is genuinely astonishing: a society that, within a few generations of becoming a unified state, built the largest stone structures the world would see for thousands of years; that produced engineering, mathematics, and bureaucratic systems easily good enough to make Khufu's pyramid the wonder it remains; and that did so in service of a religious vision — the god-king's safe passage to eternity — that they believed held the entire universe together.</p>

<p>And then it ended. Not because of invasion (Egypt was famously hard to invade), but because of climate stress, political devolution, and the slow erosion of ideological confidence. The First Intermediate Period that followed would teach Egyptians something they had not previously understood about themselves: their gods could fail, their kings could be powerless, and their world could come apart. When Egypt reunified a century later under the Middle Kingdom, it would be sobered, less grand — and in some ways, more humane. That's the story of Module 3.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> The Old Kingdom is a case study in what a coherent, confident, organised pre-modern state can accomplish. It also shows how a society can become so committed to one specific ideological project — in this case, building monuments to god-kings — that when external pressures (climate, political fragmentation) arrive, it lacks the flexibility to adapt. Both the magnificence and the collapse are lessons. The Egyptians themselves never forgot either.
</div>

</div>`;

L["Ancient Egypt::3"] = `<div class="lesson-body">

<h3>An Egypt That Knew Itself Could Fall</h3>
<p>The Old Kingdom built monuments designed to outlast eternity. It also collapsed. Between roughly <strong>2181 and 1650 BCE</strong>, Egypt lived through three very different chapters — a century of fragmentation, then a long reunified golden age of literature and reform, then a foreign-ruled interlude that ended the era. This module follows Egypt from the rubble of Khufu's world to the moment, around 1550 BCE, when a Theban prince named Ahmose drove out the foreign Hyksos and ushered in the imperial New Kingdom.</p>

<p>What makes this period special — and easy to skip past — is that it doesn't have the iconic visual punch of the pyramids or Tutankhamun. What it has instead is something subtler and arguably more important: Egypt becoming <em>self-conscious</em>. The Middle Kingdom is when Egyptian civilisation looked at its own grand past, mourned what it had lost, and reinvented itself in a chastened, humane, philosophically alert key. It is the period that produced Egypt's first novelist, its first satire, its first poetry of doubt. Reading it, you start to feel like you are meeting Egyptians as individuals rather than as types.</p>

<h3>The First Intermediate Period (c. 2181 – 2055 BCE)</h3>
<p>After the death of Pepi II, the central state dissolved. We have lists of kings from this <strong>First Intermediate Period</strong> with reigns sometimes only a few months long. Provincial governors — the <span class="vocab-pill">nomarchs</span> — became, in effect, regional warlords. The desert oases that had been Egyptian colonies asserted local independence. The unified Egypt of Khufu was gone.</p>

<p>This was also a time of suffering. The drying climate of the <strong>4.2 kiloyear event</strong> made Nile floods erratic. Inscriptions of the period speak of famine, lawlessness, and the breakdown of social trust. The <strong>autobiography of Ankhtifi</strong>, a nomarch of Hierakonpolis, brags that during his rule "Upper Egypt died of hunger to such a degree that every man had to eat his children. But I never allowed it to happen that anyone died of hunger in this nome." Even allowing for boasting, the description of conditions elsewhere is chilling.</p>

<p>Two rival royal houses eventually emerged. The <strong>Heracleopolitan</strong> kings of the Ninth and Tenth Dynasties ruled from the north, claiming continuity with the old Memphite tradition. The <strong>Theban</strong> kings of the Eleventh Dynasty rose in the south. Between them lay a contested middle Egypt. For roughly a century, the two states fought a slow, intermittent civil war for control of the country.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Egyptians lived through the First Intermediate Period the way later civilisations lived through their "dark ages" — a real crisis that, in hindsight, drove a flowering. The literature that follows is haunted by it. Middle Kingdom texts are constantly invoking the memory of "the king who came after the time of trouble." The collapse was not just a fact to be moved past; it became a permanent feature of how Egyptians understood themselves.
</div>

<h3>Mentuhotep II Reunifies Egypt (c. 2055 BCE)</h3>
<p>The reunifier was <strong>Mentuhotep II</strong> of Thebes, the fifth king of the Eleventh Dynasty. After a long, careful campaign, he defeated the Heracleopolitans and reunited Egypt around 2055 BCE. The Egyptians of later periods regarded him as a foundational figure on par with Narmer — the king who restored ma'at, the cosmic order, after the chaos of fragmentation.</p>

<p>His mortuary complex at <strong>Deir el-Bahri</strong>, on the west bank at Thebes, was an architectural statement of the new era. Instead of building a pyramid, Mentuhotep cut a terraced temple into the cliff face. It combined elements of the old pyramid complex (causeway, valley temple) with new ideas (terraces, colonnades) that would directly influence Hatshepsut's spectacular temple on the same site five centuries later. The message was: <em>we are continuing the Old Kingdom tradition, but we are also doing something new.</em></p>

<h3>The Twelfth Dynasty and the Middle Kingdom Proper</h3>
<p>After Mentuhotep II's descendants, power passed to a new royal line: the <strong>Twelfth Dynasty</strong>, founded by <strong>Amenemhat I</strong> around 1991 BCE. The Twelfth Dynasty is the Middle Kingdom at its height. It produced four centuries of stable, ambitious government — under kings named Amenemhat I–IV and Senusret I–III, the names alternating like American presidents.</p>

<p>Amenemhat I moved the capital from Thebes to a new city near modern Lisht, just south of Memphis — closer to the strategic heartland of the country and to the Delta. He also reorganised the kingdom administratively, clipping the wings of the powerful nomarchs (although they remained important for another century). He revived pyramid-building, though the Middle Kingdom pyramids were smaller, built of mud-brick cores faced with stone, and have weathered badly. They were monuments of restored kingship rather than statements of total cosmic confidence.</p>

<p><strong>Senusret III</strong> (r. c. 1878–1839 BCE) was perhaps the dynasty's most consequential ruler. He campaigned aggressively into <strong>Nubia</strong>, building a series of imposing brick fortresses along the Second Cataract — the Egyptian state's first systematic experiment with territorial empire. He also broke the political power of the hereditary nomarchs once and for all, replacing them with appointed officials directly answerable to the throne. His sculpted portraits show a king with deeply lined cheeks, heavy-lidded eyes, and a hard mouth — utterly unlike the serene god-kings of the Old Kingdom. He looks weighed down by the work of ruling. That itself is a Middle Kingdom innovation.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Theban king reunified Egypt around 2055 BCE after the First Intermediate Period?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Amenemhat I</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Mentuhotep II</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Senusret III</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Golden Age of Egyptian Literature</h3>
<p>If the Old Kingdom is the great age of Egyptian architecture, the Middle Kingdom is the great age of Egyptian <em>literature</em>. Almost every Egyptian text we still read for pleasure was either composed or canonised in this period. Egyptian scribal schools used these works as classical models for the next 1,500 years — the way Europe used Cicero and Virgil.</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The Tale of Sinuhe</strong> — a first-person adventure novel about an Egyptian courtier who flees after the death of his king, builds a life in Canaan, and longs to return home before he dies. It is sometimes called the world's first novel. Its emotional intelligence is striking.</li>
<li><strong>The Tale of the Eloquent Peasant</strong> — a farmer is robbed by a corrupt official, appeals to higher authorities in nine increasingly passionate speeches, and finally wins justice. It is part literature, part essay on ma'at.</li>
<li><strong>The Admonitions of Ipuwer</strong> — a despairing lament for a country in chaos, almost certainly recalling the First Intermediate Period. "The river is blood… plague is throughout the land… the wealth of the poor is given to the rich… ladies of rank go in rags."</li>
<li><strong>The Instruction of Amenemhat I</strong> — a startling text purporting to be the assassinated Amenemhat I speaking from beyond the grave, warning his son Senusret I to trust no one. "Be on your guard against subordinates… for a man has no friends on the day of woe."</li>
<li><strong>The Story of the Shipwrecked Sailor</strong> — a small, perfect fable about a sailor cast away on an enchanted island, who meets a giant talking snake-god who consoles him with wisdom about loss.</li>
</ul>

<p>What jumps out across this corpus is a recurring tone of <em>doubt</em>. Middle Kingdom literature is unusually willing to question kings, suffer with peasants, criticise the powerful, and articulate the inner lives of individuals. It is also formally inventive — moving between prose and verse, narrator and dialogue. Reading it, you encounter ancient Egyptians whose subjective experience feels remarkably accessible.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Tale of Sinuhe</strong>'s closing scene — when the aged Sinuhe finally returns to Egypt and the king's children sing a hymn welcoming him home — is preserved on dozens of surviving copies, more than any other Egyptian literary text. School-scribes were still copying it as a classical model fifteen centuries after it was written. By any measure, it is one of the best-preserved and most beloved works of ancient literature anywhere in the world.
</div>

<h3>Religion, Art, and Everyday Life</h3>
<p>Middle Kingdom religion shifted in subtle but profound ways. The cult of <strong>Osiris</strong>, lord of the underworld, surged. In the Old Kingdom, only the pharaoh could realistically expect an Osirian afterlife. In the Middle Kingdom, this began to <strong>democratise</strong>: nobles and even modestly well-off commoners commissioned their own funerary equipment, painted with the spells later collected as the <strong>Coffin Texts</strong> — the direct ancestor of the New Kingdom's famous Book of the Dead. The implication was radical: any Egyptian, in principle, could now hope for resurrection. The pharaoh was still divine, but eternity was no longer his alone.</p>

<p>Art evolved alongside. Where Old Kingdom royal sculpture showed serene, ageless faces, Middle Kingdom royal sculpture is hauntingly weathered, with sagging jowls and tired eyes. Some scholars think this reflects a deliberate ideology of the king as a careworn protector of his people rather than a remote god — burdened, vigilant, mortal-looking. Whatever the intent, the portraits are powerful. A grim Senusret III stares out of museum vitrines as one of the most striking faces from the ancient world.</p>

<p>The Middle Kingdom also expanded territorially. Senusret III's Nubian fortresses gave Egypt control of gold-producing regions south of the First Cataract. Trade with Punt (probably modern Eritrea or coastal Sudan), the Levant, and the Aegean intensified. Egyptian artefacts have turned up at Cretan sites; Cretan pottery at Egyptian ones. Egypt was reconnecting with a wider world.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the major religious shift visible in the Middle Kingdom?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The pharaoh was no longer considered divine at all</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Osirian afterlife — once a royal privilege — became available to nobles and commoners</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Monotheism replaced the traditional pantheon</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Late Twelfth Dynasty and the Slide</h3>
<p>The Twelfth Dynasty ended around 1802 BCE with the reign of Egypt's first known woman ruler, <strong>Sobekneferu</strong> — a daughter of Amenemhat III who took the throne after her brother Amenemhat IV died without male heirs. Her reign was short (about four years), but the precedent — a woman in the male regalia of pharaoh, claiming all the same titles — was set. Hatshepsut, six hundred years later, would take it much further.</p>

<p>The Thirteenth Dynasty (c. 1802–1649 BCE) is the start of the slide. Royal authority weakened. Kings reigned for shorter periods. Many had non-royal backgrounds. The state didn't collapse the way it had after the Old Kingdom, but it lost its grip. Provincial centres began to act increasingly on their own. The Delta, in particular, drifted out of central control.</p>

<h3>The Hyksos and the Second Intermediate Period</h3>
<p>Into this drifting Egypt came a new presence: Asiatic migrants and traders from the Levant, who had been settling in the eastern Delta in growing numbers for generations. By around 1650 BCE, one of these groups had become powerful enough to take political control of northern Egypt. The Egyptians called them <strong>Heqa-khasut</strong>, "rulers of foreign lands" — Greek writers later rendered this as <span class="vocab-pill">Hyksos</span>.</p>

<p>The Hyksos established their capital at <strong>Avaris</strong> in the eastern Delta. They ran a recognisably Egyptian-style state, adopting Egyptian titles, religious forms, and administrative tools. But they were ethnically and culturally distinct — Semitic-speaking, with West Asian gods and architecture. And they brought military technology Egypt had never seen: the <strong>composite bow</strong>, the <strong>horse-drawn chariot</strong>, bronze weapons, and improved body armour.</p>

<p>For roughly a century, Egypt was effectively split. The Hyksos Fifteenth Dynasty ruled the Delta and north. A weakened Egyptian dynasty (the Sixteenth and Seventeenth) clung on at Thebes. A separate Nubian kingdom of <strong>Kush</strong> had pushed north into formerly Egyptian-controlled territory along the Nile. Egyptians of later generations would remember this as a national humiliation — the moment foreigners ruled the Black Land. They would also remember that the foreigners had brought tools that, once Egypt drove them out, made Egyptian armies the most fearsome in the region.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>chariot</strong> the Egyptians eventually deployed against everyone from the Hittites to the Nubians is essentially a refined Hyksos design — light, fast, manoeuvrable, drawn by two horses, carrying a driver and a bowman. Egypt did not invent the chariot; it inherited it from invaders, kept it after expelling them, and weaponised it on a scale the original users could never have matched. It is a model case of how an empire learns from the people who beat it.
</div>

<h3>Ahmose and the Edge of a New Era</h3>
<p>The Theban Seventeenth Dynasty began fighting back in the mid-1500s BCE. <strong>Seqenenre Tao</strong> died in battle against the Hyksos — his mummy survives, with horrendous battle wounds on the skull. His son <strong>Kamose</strong> pressed the war forward, leaving a triumphant inscription that survives at Karnak. And Kamose's brother <strong>Ahmose I</strong> — founder of the Eighteenth Dynasty — finally captured Avaris around 1550 BCE, drove the Hyksos out of Egypt, and pursued them into Canaan.</p>

<p>That moment marks the conventional end of the Second Intermediate Period and the start of the <strong>New Kingdom</strong>. Egypt was reunified, militarised, and angry. It had been beaten. It had learned. And it was about to build the largest empire the Egyptian state had ever seen.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Egyptian king drove the Hyksos out of Egypt around 1550 BCE?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Mentuhotep II</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Senusret III</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Ahmose I</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Middle Kingdom is sometimes treated as a quiet transition between the iconic pyramids and the iconic New Kingdom empire. It deserves a closer look. This is when Egypt invented introspection — when it produced its great works of literature, expanded the afterlife to non-royals, faced foreign invasion for the first time, and emerged with a tougher, smarter, more politically realistic worldview. By 1550 BCE, when Ahmose's army marched into Avaris, the Egyptians who had survived the Hyksos century were not the same people who had built the Step Pyramid two millennia earlier. They were ready to become an empire.
</div>

</div>`;

L["Ancient Egypt::4"] = `<div class="lesson-body">

<h3>Egypt Becomes an Empire</h3>
<p>For most of its earlier history, Egypt had been content to be itself. The Old and Middle Kingdoms governed the Nile Valley, traded with neighbours, occasionally raided south into Nubia, but did not aspire to permanent imperial rule over foreign peoples. The Hyksos century changed that. After Ahmose I expelled the Hyksos around <strong>1550 BCE</strong>, his successors did not stop at the border. They marched into the Levant, hunted the Hyksos remnant back to Sharuhen, sacked it, kept going, and within a generation had turned Egypt into the dominant military power of the Near East. The <strong>Eighteenth Dynasty</strong> — the first half of the New Kingdom — is the period when Egypt becomes, for the first and almost the only time in its long history, a genuine empire.</p>

<p>It is also the period of Egypt's greatest international prestige. Egyptian gold, grain, and craftsmanship flowed across the Mediterranean. Letters in cuneiform between the pharaoh and the kings of Babylon, Mitanni, Hatti, and Assyria — preserved in the famous <strong>Amarna archive</strong> — show pharaohs being addressed by their fellow Great Kings as "my brother." For roughly two centuries, Egypt sat at the head of the table of the ancient world.</p>

<h3>Ahmose's Sons and the Push into Syria</h3>
<p>Ahmose I had retaken the country, but the work of building empire fell to his immediate successors. <strong>Amenhotep I</strong> (r. c. 1525–1504 BCE) consolidated control, campaigned in Nubia, and established the labour village at <strong>Deir el-Medina</strong> on the west bank at Thebes — the settlement of artisans who would, for the next four centuries, carve and decorate the royal tombs of the Valley of the Kings.</p>

<p>His successor <strong>Thutmose I</strong> (r. c. 1504–1492 BCE) was the first Egyptian pharaoh to lead an army deep into <strong>Syria</strong>. He fought a campaign all the way to the Euphrates and famously erected a victory stele on the river's far bank. He also pushed Egypt's southern frontier further into Nubia than any previous king. By the time Thutmose I died, Egypt was no longer a regional state. It was a power whose armies set foot on territory from the Fourth Cataract of the Nile in modern Sudan to the great river of Mesopotamia.</p>

<p>Thutmose I was also the first king buried in what would become the <strong>Valley of the Kings</strong> — the secluded desert wadi west of Thebes that, for the next five centuries, was the necropolis of New Kingdom pharaohs. The decision to abandon the pyramid form for hidden rock-cut tombs is one of the most consequential aesthetic decisions in Egyptian history. New Kingdom rulers no longer wanted to mark their tombs with skyline-dominating monuments. They wanted them to be invisible. (It did not save them from tomb-robbers in the long run, but the strategy did give us, four millennia later, the largely intact tomb of Tutankhamun.)</p>

<h3>Hatshepsut: A Female Pharaoh Who Worked</h3>
<p>One of the most extraordinary figures in Egyptian history took the throne in 1479 BCE. <strong>Hatshepsut</strong> was the daughter of Thutmose I and the chief wife of her half-brother Thutmose II. When Thutmose II died young, his heir — the future <strong>Thutmose III</strong> — was only a child. Hatshepsut began as regent for the boy-king. Within a few years, she had taken the full titulary of pharaoh herself, accepted male regalia (the false beard, the kilt, the bull's tail), and ruled in her own right for roughly 22 years.</p>

<p>Crucially, she ruled <em>well</em>. Hatshepsut presided over a period of internal stability and a deliberate revival of state-sponsored building. Her mortuary temple at <strong>Deir el-Bahri</strong> — three superimposed colonnaded terraces cut into the cliff — is one of the most architecturally adventurous buildings of the ancient world. Half a millennium after Mentuhotep II had built his pyramid-temple on the same spot, Hatshepsut's architect <strong>Senenmut</strong> took the same site and outdid him completely.</p>

<p>Her most famous achievement was a peaceful one: the <strong>Punt expedition</strong> of around 1463 BCE. A fleet of five ships sailed down the Red Sea to the mysterious land of <strong>Punt</strong> (probably modern Eritrea or coastal Sudan) and returned loaded with myrrh, ebony, ivory, gold, exotic animals, and — a delighted Egyptian record-keeper notes — living myrrh trees, transplanted with their roots in baskets of soil for the temple gardens at Deir el-Bahri. The expedition's exterior wall reliefs at Deir el-Bahri are among Egyptian art's most charming creations: rounded Puntite chieftains, queens with extraordinarily corpulent bodies, giraffes, baboons, monkeys, and the swaying palms of the African coast.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Hatshepsut was not the first female ruler of Egypt — Sobekneferu had taken the male regalia of pharaoh four centuries earlier. But Hatshepsut was the first to rule successfully for a long, prosperous reign. She is, in a real sense, the first woman in recorded human history we can confidently say was a wholly competent, peaceful, successful head of state. Her trade missions, her temple, her economic stewardship — all of these required, at every step, the loyalty of Egypt's military, priestly, and bureaucratic elites. They gave it.
</div>

<h3>Thutmose III: The Napoleon of Egypt</h3>
<p>When Hatshepsut died in 1458 BCE, her stepson took sole power as <strong>Thutmose III</strong>. He was no novice — he had been co-regent for two decades and had led the army for years. Now, free of his stepmother's restraining influence, he became one of the great military commanders of the ancient world. The 19th-century Egyptologist James Henry Breasted called him "the Napoleon of Egypt." It is one of the rare cases where the comparison is, if anything, an understatement.</p>

<p>Thutmose III led <strong>seventeen military campaigns</strong> over twenty years, mostly into the Levant, where a coalition of Canaanite city-states had revolted on Hatshepsut's death. His first campaign in 1457 BCE produced one of history's earliest reliably documented battles: the <strong>Battle of Megiddo</strong>. The Egyptian army marched through the Aruna Pass — a narrow defile that the rebels expected would be impossible to use — and surprised the coalition encamped before Megiddo. The rout was total. The city held out under siege for seven months but eventually surrendered. Thutmose's account, inscribed on the temple of Amun at Karnak in 224 columns of text, is the longest narrative military report from the ancient world.</p>

<p>By the end of his reign in 1425 BCE, Thutmose III had extended Egyptian control to the Euphrates, secured the Levantine coast, brought Nubia south to the Fifth Cataract under direct Egyptian administration, and made Egypt the dominant power between the Aegean and the Persian Gulf. His annual campaigns also generated an enormous stream of plunder and tribute, much of which flowed into the <strong>temple of Amun at Karnak</strong>. Amun, originally a modest local god of Thebes, became — through Thutmose's gold — the supreme deity of the empire. The priesthood of Amun, which controlled the wealth and lands accumulated through this period, would by the late New Kingdom be a power second only to the pharaoh himself.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the major military innovation of Thutmose III's first campaign at Megiddo (1457 BCE)?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The introduction of iron weapons</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Marching through a narrow pass the enemy thought impassable, achieving total surprise</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The use of war elephants imported from Punt</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<p>Thutmose III also did something darker. Late in his reign, he had Hatshepsut's name and image methodically removed from her monuments. Statues were smashed, cartouches were chiselled out, her image at Deir el-Bahri was replaced with images of Thutmose I and II. Egyptologists debated for a long time whether this was personal revenge (he had been sidelined by her for two decades) or political legitimation (a female pharaoh in retrospect threatened the male-line ideology of kingship he wanted to project). The most recent consensus tilts toward the second: it was political housekeeping, not vendetta. But the effect was the same. Hatshepsut was nearly erased from Egyptian memory until 19th-century archaeologists pieced her story back together.</p>

<h3>Amenhotep II, Thutmose IV, and a Settling Empire</h3>
<p>The next two pharaohs consolidated rather than expanded. <strong>Amenhotep II</strong> (r. c. 1427–1397 BCE) was a famous athlete — chariot driver, archer, oarsman — and a tough campaigner who suppressed Levantine revolts but didn't enlarge the empire significantly. <strong>Thutmose IV</strong> (r. c. 1401–1391 BCE) is best known for the <strong>Dream Stele</strong>, set up between the paws of the Sphinx at Giza. It records his account of falling asleep in the shadow of the half-buried Sphinx as a prince, dreaming that the god Horemakhet promised him the throne if he cleared the sand. He did, and (the stele says) he got the throne. The Sphinx, weathered and ancient by then, became a place of pilgrimage. This is, incidentally, our earliest evidence of New Kingdom Egyptians thinking of their own pyramids as marvels of a half-mythical past.</p>

<p>Thutmose IV also concluded one of the most important diplomatic acts of the New Kingdom: he made peace with the <strong>kingdom of Mitanni</strong> in northern Syria, Egypt's principal rival in the region. The peace was sealed by his marriage to a Mitannian princess. From this point forward, royal marriages between Egypt and the other Great Kings of the Near East — Babylon, Mitanni, Hatti, Arzawa — became a normal feature of imperial diplomacy. Egypt was no longer just conquering. It was managing a system.</p>

<h3>The Golden Age of Amenhotep III</h3>
<p>The Eighteenth Dynasty reached its peak under <strong>Amenhotep III</strong> (r. c. 1391–1353 BCE). His thirty-eight-year reign was, by ancient measures, one of the most prosperous periods any state has ever enjoyed. There were no major wars. The empire's frontiers were quiet. Levantine vassals sent annual tribute. Nubian gold poured in. And Amenhotep spent it.</p>

<p>The visual record is overwhelming. Amenhotep III commissioned more surviving statues of himself than any other Egyptian king — well over a thousand. He built the colossal mortuary temple now marked by the surviving <strong>Colossi of Memnon</strong>: two seated statues, each 18 metres tall, that for centuries afterwards travellers from Strabo to Roman emperors came to visit. He effectively rebuilt the temple of <strong>Luxor</strong>. He doubled the size of <strong>Karnak</strong>. He commissioned a vast palace city at <strong>Malqata</strong> on the west bank of Thebes, with painted floors, ornamental pools, and a lake dug specifically so his wife could sail on it.</p>

<p>His chief queen, <strong>Tiye</strong>, was not of royal birth — an extraordinary fact, given Egyptian convention — and yet she appears prominently in royal art beside her husband, with equal billing. Diplomatic letters from the Great Kings of Babylon and Mitanni address her directly. Tiye is the first non-royal Egyptian queen we can clearly identify as a major political figure in her own right.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Amarna Letters</strong> — a cache of nearly 400 clay tablets found in the ruins of the later capital at Amarna — preserve much of Amenhotep III's and Amenhotep IV/Akhenaten's diplomatic correspondence. Vassal princes in Canaan beg for more gold, more soldiers, more attention. The Great Kings of Babylon and Mitanni demand more Egyptian gold ("for in your country gold is as plentiful as dust"). It is the earliest substantial archive of international diplomacy in human history. Reading it, you encounter ancient kings negotiating dowries, treating sons-in-law badly, and complaining bitterly when their fellow Great King is slow to write back. The texture of the late Bronze Age world becomes startlingly real.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who was Tiye?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A Mitannian princess sent to Egypt as a diplomatic bride</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Amenhotep III's non-royal chief queen, a major political figure in her own right</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Theban priestess who anointed Hatshepsut as pharaoh</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Slow Rise of the Sun</h3>
<p>Underneath the gold, something theological was shifting. Amenhotep III increasingly emphasised his close association with the sun god <strong>Ra</strong> and, more specifically, with the sun-disc itself — <strong>the Aten</strong>. His own divinity was promoted aggressively. He built temples to himself as a living god. The old pantheon of countless local gods, with the priesthood of Amun at its centre, was beginning to feel — to some Egyptian elites — increasingly cluttered, and the priesthood of Amun was beginning to feel increasingly powerful.</p>

<p>This was not yet a religious revolution. Amenhotep III worked within the traditional system; he was, on the official level, a perfectly orthodox king who honoured Amun at Karnak as much as Ra at Heliopolis. But the theological emphasis on solar imagery, on the king as the unique earthly counterpart of the sun, was building. When Amenhotep III died and his son Amenhotep IV — soon to rename himself <strong>Akhenaten</strong> — took the throne, the latent ideas would erupt into one of the most extraordinary religious experiments in the ancient world.</p>

<p>That, however, is Module 5. For now, what matters is this: by the time Amenhotep III died around 1353 BCE, Egypt was at the apex of its political, military, economic, and cultural power. The empire he passed to his son was the largest, wealthiest, and most prestigious Egyptian state that had ever existed. Whether his son would build on that or break it apart was the next great question.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">During the 18th Dynasty, what new burial practice did the pharaohs adopt instead of pyramids?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Cremation followed by burial in royal urns</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Hidden rock-cut tombs in the Valley of the Kings</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Burial at sea in the Red Sea fleet ships</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Eighteenth Dynasty took Egypt from a recently humiliated regional state to the dominant great power of the Bronze Age world in a single century. Hatshepsut showed that a woman could rule prosperously and peacefully; Thutmose III showed that an Egyptian army could conquer the Near East; Amenhotep III showed that an Egyptian court could rival any rival in wealth and splendour. But the same period also concentrated enormous power in the priesthood of Amun and quietly set up the theological tensions that would explode in the reign of Amenhotep III's son. The empire was magnificent. It was also, in ways nobody yet saw, fragile.
</div>

</div>`;

L["Ancient Egypt::5"] = `<div class="lesson-body">

<h3>The Most Disruptive Reign in Egyptian History</h3>
<p>Around <strong>1353 BCE</strong>, Amenhotep III died, and his son Amenhotep IV took the throne. What followed is the most extraordinary religious and political experiment in the history of pharaonic Egypt. In a single generation, a young king abolished the worship of the traditional gods, declared himself the sole intermediary of a single supreme deity, moved the capital to a brand-new city in the middle of the desert, and reorganised art, architecture, and royal ideology around his personal vision. The experiment failed almost immediately after his death. His name was struck from the king-lists. His city was abandoned and demolished. But his fingerprints are still visible everywhere in what came after — and they help us understand the long, complex decline of the New Kingdom that runs through Tutankhamun, Ramses II, and the eventual Bronze Age collapse around 1100 BCE.</p>

<h3>Akhenaten and the Aten</h3>
<p>In the fifth year of his reign, Amenhotep IV announced a series of decisions that, by Egyptian standards, were astonishing. He changed his name from <strong>Amenhotep</strong> ("Amun is satisfied") to <strong>Akhenaten</strong> ("effective for the Aten"). He proclaimed that the supreme god was no longer Amun — the patron of Thebes and head of the conventional pantheon — but the <span class="vocab-pill">Aten</span>, the literal disc of the sun. Within a few more years, he closed the temples of Amun, defaced inscriptions of the traditional gods across Egypt, redirected state revenues to his new cult, and announced the founding of a new capital city.</p>

<p>The new capital was called <strong>Akhetaten</strong>, "horizon of the Aten" — today the site of <strong>Amarna</strong>, halfway between Memphis and Thebes. It was built from scratch in five years on virgin desert ground. Its temples to the Aten had no roofs: the sun's rays were supposed to shine directly on the offerings. Its art broke radically with millennia of Egyptian convention. Where pharaohs had always been depicted as serene, idealised, ageless, Akhenaten ordered his sculptors to depict him with an elongated skull, full hips, swollen thighs, a softened belly, thick lips. His wife <strong>Nefertiti</strong> and their six daughters appear in the same exaggerated style — sometimes kissing the king on a chariot, sometimes weeping over a dead daughter, sometimes informally caressing one another in postures no earlier royal family had ever shown.</p>

<p>The theology was equally radical. The <strong>Great Hymn to the Aten</strong>, discovered in the tomb of Akhenaten's courtier Ay, sets out the new faith in 13 vivid stanzas. The sun-disc is described as a singular, universal creator who made every land and every people: "How manifold are your works! They are hidden from the face of men. O sole god, like whom there is no other." Some scholars (including the great Egyptologist Erik Hornung) have argued that what Akhenaten introduced was not strict monotheism so much as "monolatry" — the worship of one god among many — but the cult's exclusive insistence and its violent attacks on other gods make it the closest thing to a state-sponsored monotheism in the ancient world before Judaism.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a king of England in 1500 who, having watched Catholic clergy accumulate too much wealth, abruptly bans Catholicism, dissolves the monasteries, declares himself the unique earthly representative of a single god he just invented, builds a new capital city in the Midlands devoted to that god, and orders artists to depict him in a startling new naturalistic style. Imagine, too, that this all happens before any other king has dared to challenge religious orthodoxy. That is roughly the scale of Akhenaten's audacity. He had no template. He was making it up.
</div>

<h3>The Letters from Amarna</h3>
<p>Akhenaten's reign coincided with a quiet erosion of Egypt's empire. The clay-tablet correspondence found at Amarna preserves desperate letters from vassal kings in the Levant — Rib-Hadda of Byblos, Abdi-Heba of Jerusalem — pleading for Egyptian troops to defend them against the rising Hittite Empire and against shifting local powers. The replies from Akhenaten's court are slow, distracted, and inadequate. Whatever the merits of his theological vision, the king who had time to compose hymns to the sun-disc had less time for the messy work of maintaining a Bronze Age empire.</p>

<p>Northern Syria — won by Thutmose III at such cost a century earlier — drifted out of Egyptian control. The Hittites, under their formidable king Suppiluliuma I, absorbed Mitanni, Egypt's principal Asian ally, while Akhenaten was preoccupied with internal religious affairs. By the time of Akhenaten's death around 1336 BCE, Egypt's imperial credibility had weakened significantly. The borders had not collapsed, but the apex of Eighteenth Dynasty power was unmistakably past.</p>

<h3>Nefertiti and the End of the Heresy</h3>
<p><strong>Nefertiti</strong> may have ruled briefly in her own right after Akhenaten died. A short-reigning king known as <strong>Smenkhkare</strong> or <strong>Ankhkheperure-Neferneferuaten</strong> follows in the king-lists, and some scholars now think this figure was actually Nefertiti taking pharaonic titulary — much as Hatshepsut had done a century earlier. The evidence is debated, but the world's most famous Egyptian artistic image — the painted limestone <strong>bust of Nefertiti</strong> discovered at Amarna in 1912 and now in Berlin — preserves her startling beauty more vividly than any other royal portrait from antiquity.</p>

<p>What is clear is that the Amarna experiment did not survive. Within a few years of Akhenaten's death, the new boy-king on the throne — Akhenaten's nine-year-old son <strong>Tutankhaten</strong> — was being advised by traditionalists at court to reverse course. He changed his name to <strong>Tutankhamun</strong> ("living image of Amun"), restored the closed temples, returned the capital to Memphis and Thebes, and quietly let Akhetaten/Amarna be abandoned. Within a generation, builders were dismantling the heretic capital for its stone blocks. The Egyptians of later periods, listing their kings, would simply skip the Amarna pharaohs as "the criminal of Akhetaten." It is largely because their successors tried so hard to erase them that we know so much about them — every block they dismantled and reused has preserved Amarna fragments for modern archaeologists to recover.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What did Akhenaten do to the traditional cult of Amun?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">He honoured Amun above all other gods alongside the Aten</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">He closed Amun's temples and defaced inscriptions of the traditional gods across Egypt</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">He gave Amun's priesthood control of the Aten cult to preserve continuity</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Tutankhamun: The Restoration</h3>
<p><strong>Tutankhamun</strong> reigned for only about nine years, dying around 1323 BCE at the age of eighteen or nineteen. By any normal historical reckoning, he should be a footnote. He produced no great campaigns, no architectural masterworks, no philosophical statements. His chief achievement was political housekeeping — undoing his father's revolution as gently as possible while the country's elders (especially the powerful officials <strong>Ay</strong> and <strong>Horemheb</strong>) reconsolidated state authority. He is, in his own time, an essentially uninteresting king.</p>

<p>Then on <strong>November 26, 1922</strong>, the British archaeologist <strong>Howard Carter</strong> peered through a hole into a sealed chamber in the Valley of the Kings, and the world's view of Tutankhamun changed forever. The boy-king's tomb (KV62) was the only royal Egyptian tomb ever found <em>essentially intact</em>. Inside were over 5,000 artefacts: a solid-gold inner coffin weighing 110 kg, a famous gold death mask now in the Egyptian Museum, alabaster boats, chariots, a dagger forged from <strong>meteoric iron</strong> (one of the earliest worked iron objects from the ancient world), full sets of clothing, walking sticks, board games, food and wine for the afterlife. The find caused a global sensation, kicked off the Egyptomania of the 1920s, and made Tutankhamun — the inconsequential boy-king — the most famous pharaoh of all time.</p>

<p>It is worth pausing on this. If Tutankhamun's small, hastily-prepared tomb contained that much gold, what must have been in the great tombs of Khufu, Hatshepsut, Thutmose III, Amenhotep III? Almost all those tombs were systematically robbed in antiquity. Tutankhamun survived only because his tomb was small, hidden under the rubble of a later pharaoh's tomb construction, and forgotten. The wealth of the late New Kingdom court is almost impossible to overstate.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>iron dagger</strong> in Tutankhamun's tomb — analysed by Italian researchers in 2016 — turned out to be made from <strong>meteoric iron</strong>, with a distinctive nickel and cobalt signature that matches known meteorite compositions. In an age of bronze, iron from the sky was a uniquely prestigious material. The dagger may well have been a diplomatic gift from one of the Anatolian kings to Tutankhamun's grandfather Amenhotep III. It is, very literally, a piece of an ancient meteorite shaped into a royal weapon and buried with the king. Few artefacts so vividly demonstrate the global reach of Egyptian wealth in this period.
</div>

<h3>The 19th Dynasty and Ramses II</h3>
<p>After Tutankhamun's early death, the elderly Ay reigned briefly, then the general <strong>Horemheb</strong> took the throne, restored the old institutions, and prepared the way for a new dynasty. Horemheb left no heir of his own. The line passed in 1292 BCE to his vizier — a tough old soldier from the Delta named <strong>Ramses</strong>, who reigned briefly as <strong>Ramses I</strong> and founded the <strong>Nineteenth Dynasty</strong>. His son Seti I and grandson Ramses II would dominate the next century.</p>

<p><strong>Ramses II</strong> — Ramses the Great — reigned for an astonishing <strong>66 or 67 years</strong> (c. 1279–1213 BCE), making his one of the longest reigns in Egyptian history. He fought campaigns in the Levant, expanded Nubian holdings, and built more monuments than any pharaoh before or since. His name and image appear on so many statues, columns, and temple walls — many of them appropriated from earlier kings by simply re-inscribing them — that "Ramses II" became almost shorthand for "ancient Egyptian king."</p>

<p>His most famous campaign was the <strong>Battle of Kadesh</strong> in 1274 BCE, fought against the Hittite king Muwatalli II in northern Syria. Ramses, leading his elite chariot division ahead of the main army, walked into an ambush near the city of Kadesh and was nearly annihilated. He managed (according to his own version of the story) to rally his troops, fight a defensive battle, and avoid total disaster. He retreated to Egypt and promptly commissioned monumental inscriptions and reliefs at Karnak, Luxor, the Ramesseum, and Abu Simbel describing the battle as a glorious personal victory. The Hittites, on their own surviving inscriptions, described it as a Hittite victory. Modern historians treat it as a tactical draw — and the most thoroughly documented battle in human history before the Greeks, with two parallel accounts from both sides.</p>

<p>Sixteen years later, in 1258 BCE, Ramses II and the new Hittite king Hattusili III signed a formal treaty of peace and mutual defence. <strong>This is the oldest surviving international peace treaty in the world.</strong> A copy in Akkadian cuneiform survives at the Hittite capital of Hattusa; a hieroglyphic copy is carved on the walls of Karnak. The treaty even includes extradition clauses for political fugitives. A modern enlarged replica now hangs in the United Nations headquarters in New York.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the outcome of the Battle of Kadesh (1274 BCE) between Egypt and the Hittites?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A decisive Egyptian victory that crushed the Hittite Empire</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A tactical draw — followed sixteen years later by the world's oldest surviving peace treaty</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A catastrophic Egyptian defeat that ended the empire</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<p>Ramses also commissioned the <strong>Abu Simbel</strong> temples — two rock-cut sanctuaries on the Nubian frontier, the larger fronted by four 20-metre seated colossi of Ramses himself. The temple was aligned so that twice a year the rising sun penetrates the entire 60-metre corridor and illuminates the statues of the gods in the innermost sanctuary. In the 1960s, when the Aswan High Dam threatened to submerge the site, UNESCO oversaw a massive international project to cut the entire temple complex into more than a thousand blocks, lift it 65 metres up the cliff, and reassemble it on higher ground. The sunlight alignment was preserved with an error of one day.</p>

<h3>The Sons of Israel and the Sea Peoples</h3>
<p>One small detail at the end of Ramses II's reign deserves note. His son <strong>Merneptah</strong> (r. c. 1213–1203 BCE) campaigned in the Levant and left a monumental victory inscription, the <strong>Merneptah Stele</strong>. It commemorates the defeat of Libyan invaders and lists a number of subdued peoples in Canaan. One of those names, written with the Egyptian determinative for "people" rather than "city" or "land," is <strong>Israel</strong>. This is, by a considerable margin, the <strong>oldest non-Biblical reference to Israel anywhere in the world</strong> — a single line on an Egyptian victory stele, dated to around 1207 BCE.</p>

<p>Far more ominously, Merneptah's inscription mentions Libyan invaders allied with mysterious "Sea Peoples" — coalitions of migrating Bronze Age groups whose origins are still debated. Three decades later, during the reign of <strong>Ramses III</strong> (c. 1186–1155 BCE), the Sea Peoples returned in force. Ramses III fought one of the largest naval and land battles of the Bronze Age against them on the Nile Delta. He won. His mortuary temple at <strong>Medinet Habu</strong> records the victory in spectacular reliefs of bound prisoners, captured ships, and slain enemies.</p>

<p>But the Sea Peoples wave was part of a much wider <strong>Bronze Age Collapse</strong>. Across the eastern Mediterranean — Mycenae, the Hittite Empire, Ugarit, Cyprus — palace civilisations crumbled or vanished entirely between 1200 and 1150 BCE. Egypt was the only major Bronze Age power to survive. Ramses III's victories preserved the country, but the New Kingdom never fully recovered. After his reign, royal authority weakened steadily. The next eight pharaohs (Ramses IV through XI) presided over rising prices, tomb-robberies in the Valley of the Kings, civil unrest, and the gradual takeover of southern Egypt by the increasingly powerful priesthood of Amun at Karnak.</p>

<h3>The End of the New Kingdom</h3>
<p>By the death of <strong>Ramses XI</strong> around 1069 BCE, central royal authority in Egypt had effectively dissolved. The high priest of Amun at Thebes ruled the south more or less independently. A separate dynasty governed the Delta from the city of <strong>Tanis</strong>. Foreign craftsmen, mercenaries, and Libyans had become permanent presences in the Egyptian elite. The country was still recognisably Egyptian, but the integrated, militarised, prestige-rich state of Hatshepsut and Thutmose III and Amenhotep III was gone.</p>

<p>This is the moment we conventionally end the New Kingdom and begin the <strong>Third Intermediate Period</strong> — the long, complicated centuries that we'll follow in Module 8. For now, what matters is this: the Egyptian state had run a successful empire for roughly five hundred years. It had also survived a religious revolution, the most disruptive succession crisis in its history, the Battle of Kadesh, the Sea Peoples, and the wider Bronze Age Collapse. The fact that Egyptian civilisation continued to exist as a recognisable cultural entity through all of this — when so many of its peers vanished entirely — is one of the most remarkable facts about it.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What is the historical significance of the Merneptah Stele (c. 1207 BCE)?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It records the world's oldest peace treaty</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It contains the earliest non-Biblical reference to 'Israel' anywhere in the world</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It is the only surviving Egyptian record of the Battle of Kadesh</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The reigns from Akhenaten to Ramses XI span two and a half centuries — from the most radical religious experiment in the ancient world, through the boy-king whose accidental survival of tomb-robbers made him the most famous pharaoh in history, to the longest reign and largest monumental program any Egyptian king ever attempted, to a slow imperial decline driven by external migration, internal corruption, and the global Bronze Age Collapse. The New Kingdom did not end with a sudden catastrophe like the Old Kingdom's. It ended with a gradual fragmentation of authority that nobody seems to have quite noticed at the time — until, looking back, Egypt realised that its empire was gone.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 2: THE CLASSICAL AGE
// ═══════════════════════════════════════════════════════

L["The Roman Republic & Empire"] = `<div class="lesson-body">

<h3>From Village to World Power</h3>
<p>Rome's story is, in the long view, almost ridiculous. A small Iron Age village on seven hills beside a muddy river became, over roughly a thousand years, the political and cultural superpower of the entire Mediterranean world. By 117 CE its empire stretched from Scotland to Mesopotamia, from the Sahara to the Rhine. It absorbed Greek philosophy, Egyptian religion, Celtic tribes, and Jewish prophecy, and forged something new from all of it. Then, slowly and dramatically, it fell apart — and even that took centuries.</p>

<p>Almost everything in Western political thought, law, language, and architecture traces back to Rome. The U.S. Senate, the British calendar, the word "republic," the dome on basilicas and capitols, even the very layout of formal cities: all are Roman inheritances. To understand the West, you have to understand Rome.</p>

<h3>The Founding & the Kings</h3>
<p>Rome was traditionally founded in <strong>753 BCE</strong> by <strong>Romulus</strong>, who, according to legend, killed his twin brother Remus in a quarrel over which hill to build the city on. The Romans loved this story precisely because it was awkward — fratricide at the founding moment was a useful reminder that civic peace was fragile and had to be defended.</p>

<p>For its first ~250 years Rome was ruled by kings, including some Etruscan ones. In <strong>509 BCE</strong>, the Romans expelled their last king, the tyrannical Tarquin the Proud, and swore never to be ruled by a king again. That oath would shape Roman politics for the next 500 years. The word "king" (<em>rex</em>) became politically toxic. When Julius Caesar later seemed to want a crown, it cost him his life.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
For Romans, "king" was what "dictator" is for modern liberal democracies — not a job title but an accusation. Their entire political system was an elaborate machine for preventing any one person from gaining unchecked power. It worked for centuries. Then it didn't.
</div>

<h3>The Roman Republic (509–27 BCE)</h3>
<p>The <span class="vocab-pill">Roman Republic</span> was a complex constitutional system designed to prevent tyranny. Power was deliberately fragmented and rotated. Two consuls — co-presidents, essentially — were elected each year and could veto each other. The <strong>Senate</strong>, an assembly of ex-magistrates, set policy. Various popular assemblies passed laws. A <span class="vocab-pill">dictator</span> could be appointed in emergencies, but only for six months at a time.</p>

<p>The Republic was also extraordinarily aggressive. Rome fought non-stop — first conquering its Italian neighbours, then absorbing the Greek cities of southern Italy. Then came the long, brutal <strong>Punic Wars</strong> (264–146 BCE) against Carthage, the great trading power of the western Mediterranean. Hannibal famously crossed the Alps with elephants and ravaged Italy for fifteen years; Rome eventually won by attrition and razed Carthage to the ground in 146 BCE, salting the earth (according to legend) so nothing would grow there again.</p>

<p>Conquest made Rome rich, but it also tore the Republic apart. Wealthy generals returned with private armies loyal to them, not the Senate. Land inequality exploded. By the late Republic, politics was a series of civil wars between strongmen — Marius vs Sulla, then Caesar vs Pompey.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why did Rome ultimately defeat Carthage in the Punic Wars?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Superior naval technology from the very start</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Greater manpower and willingness to absorb losses</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">An alliance with the Persian Empire</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Caesar and the End of the Republic</h3>
<p><strong>Julius Caesar</strong> was the man who broke the Republic. A brilliant general and political operator, he conquered Gaul (modern France) in the 50s BCE, then in 49 BCE crossed the <strong>Rubicon</strong> river with his army — an act of treason — and seized Rome. He was made <em>dictator perpetuo</em> (dictator for life) in 44 BCE. A few weeks later, on the Ides of March, he was stabbed to death by senators on the steps of the Senate house. They thought they were saving the Republic. They weren't.</p>

<p>The wars that followed Caesar's assassination ended in 31 BCE when his adopted heir, <strong>Octavian</strong>, defeated Mark Antony and Cleopatra at the naval Battle of Actium. In 27 BCE, Octavian took the title <strong>Augustus</strong> ("the revered one") and founded what we now call the <strong>Roman Empire</strong> — though, with characteristic Roman cleverness, he never abolished the Republic on paper. The Senate still met. Consuls were still elected. Augustus simply held all the real power.</p>

<h3>The Empire & the Pax Romana</h3>
<p>For roughly 200 years, from Augustus to the death of Marcus Aurelius (180 CE), Rome enjoyed the <span class="vocab-pill">Pax Romana</span> — the "Roman peace." This wasn't a peaceful time everywhere; frontier wars never stopped. But within the empire's borders, an unprecedented zone of stability, trade, and shared culture emerged. Goods, people, and ideas flowed from Britain to Syria along the famous Roman roads. Cities boomed. Latin became the lingua franca of the West.</p>

<p>Rome's engineering legacy is everywhere. The <strong>aqueducts</strong> brought clean water to cities. <strong>Concrete</strong> — a Roman invention using volcanic ash — let them build domes like the Pantheon's, still standing 1,900 years later. The road network — over 80,000 km of paved highways — was so durable that some sections are still in use. The phrase "all roads lead to Rome" was, for a few centuries, literal truth.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Pantheon</strong> in Rome, completed by Hadrian around 126 CE, still has the largest unreinforced concrete dome in the world. Modern engineers can replicate it; the Romans figured it out without calculus, computers, or even Arabic numerals. It's been continuously in use as a building for nearly 1,900 years.
</div>

<h3>Crisis, Christianity & the Fall of the West</h3>
<p>The third century brought catastrophe. Between 235 and 284 CE, Rome had over 50 emperors — most assassinated by their own troops. The empire fragmented. Plague, inflation, and barbarian invasions battered every frontier. <strong>Diocletian</strong> (r. 284–305) stabilised things by splitting the empire into eastern and western halves and reorganising the administration top to bottom. <strong>Constantine</strong> (r. 306–337) reunited it briefly, founded a new eastern capital at <strong>Constantinople</strong>, and — most consequentially of all — converted to Christianity.</p>

<p>What had been a persecuted minority faith became, within a century, the official religion of the Roman Empire. The implications are still working themselves out. Christianity provided a framework for European identity that would outlast the empire itself, while Roman institutions of church organisation (dioceses, parishes, the Latin liturgy) became the bones of medieval Christendom.</p>

<p>The Western Roman Empire ended, conventionally, in <strong>476 CE</strong>, when the Germanic chieftain Odoacer deposed the boy-emperor Romulus Augustulus and didn't bother replacing him. By that time the West had already been ruled by Germanic kings in all but name for decades. The Eastern half — what we now call the <strong>Byzantine Empire</strong> — continued for nearly a thousand years more. To them, they were always just "Romans."</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why is 476 CE traditionally considered the end of the Western Roman Empire?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Rome was destroyed in a single battle</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A Germanic chieftain deposed the last emperor and ruled directly</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The capital was moved to Constantinople</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Why Rome Still Matters</h3>
<p>Rome's afterlife is almost as remarkable as its life. The Catholic Church kept Latin and Roman administrative habits alive through the Middle Ages. The Holy Roman Empire claimed descent from it for a thousand years. The American Founders modelled their republic on Roman ideals — Senate, Capitol, civic virtue, <em>res publica</em>. Russian tsars (the word itself derived from "Caesar") called Moscow the "Third Rome." Even today, when politicians invoke "the rule of law" or "civic duty," they're using vocabulary forged in Rome.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> Rome wasn't great because it was eternal — it became "eternal" in our imagination because it was great. Its real achievement was <em>institutional</em>: building structures (legal, military, religious, architectural) so durable that they outlived the state that created them and were inherited by everyone who came after.
</div>

</div>`;

L["Classical China"] = `<div class="lesson-body">

<h3>From Warring States to Unified Empire</h3>
<p>For 250 years before 221 BCE, China was at war with itself. The Zhou dynasty's authority had collapsed and seven major rival states (Qin, Chu, Yan, Han, Zhao, Wei, Qi) battled for supremacy in what is fittingly called the <strong>Warring States Period</strong>. Then, in a single brutal generation, the western state of <strong>Qin</strong> conquered all the others. In 221 BCE, its king proclaimed himself <strong>Qin Shi Huangdi</strong> — "First Emperor of Qin" — and founded the first unified Chinese state.</p>

<p>Two thousand two hundred years later, the country still bears his name. ("China" almost certainly comes from "Qin.") The unification he forced through, often by extraordinary violence, set a template that has held with remarkable consistency: a single emperor, a single bureaucratic state, a single written language, governing a vast and culturally diverse territory.</p>

<h3>The First Emperor's Revolution</h3>
<p>Qin Shi Huangdi was, by any measure, a transformative ruler. In a reign of just 11 years (221–210 BCE) he:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Standardised everything</strong> — the writing system, the width of cart axles (so a cart could travel any road), the weights, the measures, the currency.</li>
<li><strong>Built the first Great Wall</strong> by linking earlier defensive walls along the northern frontier.</li>
<li><strong>Constructed an enormous network of roads and canals</strong> connecting the empire.</li>
<li><strong>Buried scholars alive</strong> who criticised him and burned books that contradicted his policies — the infamous "burning of the books and burying of the scholars."</li>
<li><strong>Built his own tomb</strong>, guarded by an army of <strong>8,000 life-sized terracotta warriors</strong>, only rediscovered by farmers digging a well in 1974.</li>
</ul>

<p>The Qin philosophy of governance — known as <span class="vocab-pill">Legalism</span> — held that humans were naturally selfish and required strict laws and harsh punishments. It worked, for a while. Then Qin Shi Huangdi died, his empire collapsed within four years of his death, and his dynasty became the historical example of "what happens when you push too hard."</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Qin standardisation was the ancient world's equivalent of forcing every state in the U.S. to use the same electrical plug, same time zones, same alphabet, same legal code, all overnight. It was brutal and resented. It also worked. Two millennia later, you can still read a 2,000-year-old Chinese inscription using essentially the same script — that's a direct legacy of Qin Shi Huangdi.
</div>

<h3>The Han Dynasty (206 BCE – 220 CE)</h3>
<p>Out of the Qin collapse rose the <strong>Han Dynasty</strong>, founded by a former village headman named <strong>Liu Bang</strong>. The Han kept the Qin's unified state — the bureaucracy, the writing system, the canals — but softened the ideology, replacing harsh Legalism with <span class="vocab-pill">Confucianism</span> as the state philosophy. The result was four centuries of mostly stable rule, a golden age comparable to Rome's at its height.</p>

<p>Under Han Wudi (r. 141–87 BCE), the empire expanded west into Central Asia, north against the Xiongnu nomads (who would later, perhaps, become the Huns who terrorised Rome), and south into Vietnam. To this day, the dominant Chinese ethnic group calls itself "Han" — and the Chinese script "Han characters."</p>

<p>The Han state was run by a professional civil service. Officials were selected, in principle, by competitive <strong>examinations</strong> testing knowledge of Confucian classics. This was a radical idea for the ancient world: that government should be staffed by educated experts, not hereditary nobles. The exam system would persist, with revisions, for over 2,000 years — China only abolished it in 1905.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What philosophy replaced Legalism as the state ideology under the Han?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Buddhism</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Confucianism</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Daoism</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Inventions that Reshaped the World</h3>
<p>Han China was an extraordinarily inventive society. During this period — and continuing into later dynasties — Chinese inventors produced technologies that would only reach Europe much later, often via the Islamic world:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Paper</strong> (c. 105 CE) — a Han eunuch named Cai Lun perfected paper-making. Europe wouldn't widely adopt paper until ~1100 years later.</li>
<li><strong>The seismograph</strong> — Zhang Heng's brass device (132 CE) detected earthquakes hundreds of miles away.</li>
<li><strong>The compass</strong> — first used for divination, later for navigation.</li>
<li><strong>The wheelbarrow</strong>, the iron plough, water-powered bellows, the rudder — all Han-era innovations.</li>
<li><strong>Cast iron</strong> — Chinese metallurgists were producing high-quality cast iron 1,500 years before Europe.</li>
</ul>

<p>Combined with paper, ink, and a script that worked across spoken dialects, these innovations gave China something the West wouldn't have until the printing press: <em>a mass-literate bureaucratic state</em>.</p>

<h3>The Silk Road & the Connected World</h3>
<p>Around 130 BCE, a Han envoy named <strong>Zhang Qian</strong> returned from a 13-year mission into Central Asia with descriptions of distant kingdoms — and a horse so fine it was called "heavenly." His reports opened up the trade route we now call the <span class="vocab-pill">Silk Road</span>. By 100 BCE, Chinese silk was reaching Rome (where senators denounced it as scandalously expensive and immoral). Roman gold flowed back to Han China.</p>

<p>The two greatest empires of the classical world — Rome and Han China — knew of each other only dimly, through middlemen. They never directly traded or fought. But for the first time in human history, a single chain of merchants and middlemen connected the entire Eurasian continent.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Han envoy Zhang Qian was captured by the Xiongnu, held for over a decade, escaped, completed his mission, and returned to China. His detailed reports of the West are preserved in the <em>Records of the Grand Historian</em>. He's sometimes called "the Father of the Silk Road" — though the actual silk traders came after him.
</div>

<h3>Decline & Legacy</h3>
<p>The Han Dynasty fell in 220 CE — a slow collapse driven by court corruption, eunuch power struggles, peasant rebellions (the famous Yellow Turbans), and over-mighty regional generals. China then fragmented into three rival states, made famous by the historical novel <em>Romance of the Three Kingdoms</em>. The unified empire wouldn't return until the Sui dynasty in 589 CE.</p>

<p>But the Han template — a single emperor, a Confucian bureaucracy selected by exam, a unified script — survived every collapse and was always restored. China's later dynasties (Tang, Song, Yuan, Ming, Qing) didn't invent themselves; they restored a model that the Qin and Han had set down 2,000 years before.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> Rome built the institutions of the West and then died, leaving fragments. China built its institutions in the Qin and Han, and then kept rebuilding them after every collapse. That's why China today remains, recognisably, the heir of an unbroken classical tradition.
</div>

</div>`;

L["Classical India"] = `<div class="lesson-body">

<h3>The Subcontinent's Golden Age</h3>
<p>While Rome was rising in the Mediterranean and Han China was forging its bureaucratic state, the Indian subcontinent produced a civilisation that, in some respects, outshone both. Classical India's contributions are so foundational to the modern world that we use them every day without noticing — the numerals on this page, the concept of zero, the idea of infinity, the games of chess and snakes-and-ladders, religions practised by billions. This was not a quiet age. It was a flowering.</p>

<p>The classical period of India spans, roughly, from the founding of the <strong>Maurya Empire</strong> in 322 BCE to the collapse of the <strong>Gupta Empire</strong> around 550 CE. In those nine centuries, Indian thinkers produced enduring philosophical, mathematical, and artistic achievements that would ripple outward through Buddhism, the Silk Road, and the Islamic world to reshape Eurasia.</p>

<h3>Chandragupta and the Mauryan Empire</h3>
<p>In 322 BCE, a young man of obscure origins named <strong>Chandragupta Maurya</strong>, advised by the brilliant strategist <strong>Kautilya</strong> (also called Chanakya), seized the throne of the Magadha kingdom in what is now eastern India. Within twenty years he had unified almost the entire subcontinent under a single rule for the first time in its history — an empire stretching from the Hindu Kush in the west to Bengal in the east.</p>

<p>Kautilya's political treatise, the <em>Arthashastra</em>, is sometimes compared to Machiavelli's <em>The Prince</em> — but it predates Machiavelli by 1,800 years and is far more comprehensive. It covers taxation, espionage, foreign policy, agriculture, and statecraft with cold realism. The Mauryan state ran a sophisticated bureaucracy, a network of spies, and a standing army said to number in the hundreds of thousands.</p>

<h3>Ashoka's Conversion (r. 268–232 BCE)</h3>
<p>Chandragupta's grandson <strong>Ashoka</strong> is one of the most remarkable figures in world history. He inherited an empire and proceeded, like all good Mauryan rulers, to expand it. Around 261 BCE he conquered the eastern kingdom of <strong>Kalinga</strong> (modern Odisha) — and was so horrified by the slaughter (over 100,000 dead, by his own admission) that he renounced violent conquest entirely and converted to <span class="vocab-pill">Buddhism</span>.</p>

<p>What followed was unprecedented. Ashoka spent the rest of his reign promoting <em>dharma</em> — non-violence, compassion, religious tolerance, public welfare. He built hospitals (for both humans and animals), planted shade trees along roads, dispatched Buddhist missionaries as far as Greece, Egypt, and Sri Lanka, and inscribed his moral edicts on rocks and pillars across his empire. Many of these inscriptions survive — they are among the earliest surviving writings in any Indian language and an extraordinary historical record of a king's actual thoughts.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a Roman emperor at the height of his power deciding, after one bloody war, that all future imperial policy would be based on Buddhist ethics — and then carving that pledge in stone across half of Eurasia. That's Ashoka. The British, when they discovered his pillars in the 19th century, found a king they could barely believe had existed.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event triggered Ashoka's conversion to Buddhism?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A vision in a dream</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The carnage of his conquest of Kalinga</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Defeat by Alexander the Great's successors</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Between Empires: The Long Middle</h3>
<p>The Mauryan Empire collapsed about fifty years after Ashoka's death, fragmenting into smaller kingdoms. For nearly five centuries, no single power dominated the subcontinent. But this fragmentation was paradoxically productive. Regional kingdoms — the Indo-Greeks, the Kushans, the Satavahanas — competed and sponsored art, religion, and trade. The famous Buddhist sculpture of Gandhara, where Greek artistic technique met Indian subject matter, dates from this period.</p>

<p>It was during these centuries that Buddhism spread along the Silk Road into Central Asia and China, that Hinduism crystallised into the form we recognise today, and that the great Hindu epics — the <strong>Mahabharata</strong> and the <strong>Ramayana</strong> — reached their final form. The <em>Bhagavad Gita</em>, embedded in the Mahabharata, dates from around this period.</p>

<h3>The Gupta Empire (320–550 CE)</h3>
<p>In 320 CE, a king who took the deliberately resonant name <strong>Chandragupta I</strong> founded a new dynasty in north India: the <strong>Gupta Empire</strong>. Under his successors — <strong>Samudragupta</strong> ("the Indian Napoleon") and <strong>Chandragupta II</strong> — the Guptas reunified much of the north, ushering in what is often called India's <strong>Golden Age</strong>.</p>

<p>The Gupta era was less an age of conquest than of cultural and scientific flowering:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The decimal system</strong> with positional notation, including a symbol for zero — invented in India and later transmitted to the Islamic world and Europe as "Arabic numerals."</li>
<li><strong>Aryabhata</strong> (b. 476 CE) calculated π to four decimal places, proposed that the Earth rotates on its axis, and accurately described eclipses.</li>
<li><strong>Sushruta's surgical compendium</strong> described over 300 surgical procedures, including reconstructive (essentially plastic) surgery.</li>
<li><strong>The plays of Kalidasa</strong>, especially <em>Shakuntala</em>, set a literary standard in Sanskrit that has never been surpassed.</li>
<li><strong>The Ajanta caves</strong> — Buddhist rock-cut shrines decorated with extraordinary frescoes — were largely painted in this period.</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The numerals you used the last time you wrote down a phone number — 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 — were developed in classical India and transmitted via the Islamic world to medieval Europe. The very <em>idea</em> of zero as a number, not just a placeholder, is an Indian invention. Modern science, banking, and computing all depend on it.
</div>

<h3>The Spread of Buddhism</h3>
<p>The most far-reaching cultural export of classical India was Buddhism. Born in northern India in the 5th century BCE, championed by Ashoka, and carried by merchants and missionaries along the Silk Road, Buddhism spread first to Sri Lanka, then to Central Asia, then to China (where it transformed Chinese religious life), then onward to Korea, Japan, Tibet, and Southeast Asia.</p>

<p>By 600 CE, Buddhism was the dominant religion across an enormous arc of Asia. Strikingly, it gradually faded in its homeland: by the 12th century CE, Buddhism had been largely absorbed back into Hinduism within India proper. The faith outlived its origin.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which of these mathematical concepts was developed in classical India?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Pythagorean theorem</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The decimal system with zero as a number</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Calculus</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Decline and Legacy</h3>
<p>The Gupta Empire was weakened by invasions of the <strong>Hephthalites</strong> (or "White Huns") in the 5th–6th centuries CE, and dissolved by around 550 CE. India would not be politically unified again until the Mughal era, more than a thousand years later. But the cultural achievements of the classical period — Buddhism, Hindu cosmology, the Sanskrit literary tradition, the decimal system — went on without interruption, shaping not just India but vast tracts of Asia and, eventually, the world.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> Classical India is sometimes overshadowed in Western storytelling by Rome and Greece. But many of the things that make modern life modern — our number system, the very idea of zero, two world religions still practised by billions, and a habit of philosophical questioning that runs from the Upanishads through Buddhist meditation to modern science — owe an enormous debt to this 900-year flowering on the Indian subcontinent.
</div>

</div>`;

L["Rise of World Religions"] = `<div class="lesson-body">

<h3>An Age of Faith</h3>
<p>Something strange happens in the historical record between roughly 600 BCE and 600 CE. Across an enormous swathe of Eurasia, almost simultaneously, a new kind of religion appears. Not the local cults of village gods that had defined human spirituality for millennia, but <strong>universal religions</strong> — faiths that claimed truth for all people, in all places, regardless of tribe or city. Buddhism, Christianity, and later Islam belong to this category. Hinduism, in this era, evolved toward the cosmic, devotional form we recognise today. By the end of the classical age, the religious map of the world looked broadly like the one we still inhabit.</p>

<p>The German philosopher Karl Jaspers called this the <span class="vocab-pill">Axial Age</span> — a hinge in human consciousness when, somehow, people in widely separated cultures started asking the same kinds of questions about ethics, meaning, suffering, and salvation. Confucius in China, the Buddha in India, the Hebrew prophets in Israel, Socrates in Greece, and Zoroaster in Persia were all roughly contemporaries. None of them knew about the others. Why this happened is still debated.</p>

<h3>Why Classical-Age Religions?</h3>
<p>Several factors helped. <strong>Empires</strong> — Persian, Mauryan, Han, Roman — created large, multi-ethnic political units. The old "city god" or "tribal god" no longer fit. Was Zeus the patron of Rome too? Was the god of one Hebrew tribe also the god of someone in Babylon? Empires demanded religious answers that worked across borders.</p>

<p><strong>Trade routes</strong> — especially the Silk Road and the Indian Ocean trade — carried merchants who carried ideas. Buddhist monks travelled with caravans. Christian missionaries sailed Roman shipping lanes. Religions that could be exported, that didn't need a specific temple in a specific city, suddenly had an advantage.</p>

<p>And <strong>writing</strong> made it possible for religious teachings to outlive their teachers. Jesus wrote nothing. The Buddha wrote nothing. But their followers, within a generation or two, committed teachings to texts that could be copied and carried.</p>

<h3>Buddhism Goes Global</h3>
<p>The Buddha (Siddhartha Gautama, c. 563–483 BCE) preached in northern India — but during his lifetime, his teachings remained a regional spiritual movement competing with many others. The decisive turn came under <strong>Ashoka</strong> (r. 268–232 BCE), who used the Mauryan state to send Buddhist missionaries as far as Sri Lanka, Central Asia, the Hellenistic kingdoms, and possibly even Egypt.</p>

<p>By the 1st century CE, Buddhism had reached <strong>China</strong> via the Silk Road. By 500 CE, it was deeply rooted in China, Korea, Vietnam, and Japan. Buddhist art absorbed Greek influences in Gandhara (today's Pakistan/Afghanistan), then carried those styles across Asia. The serene seated Buddha statues that became iconic across East Asia are descendants of Greek-influenced Indian art.</p>

<p>Crucially, Buddhism made itself portable. It didn't require pilgrimage to a holy land. Its rituals could be performed anywhere. Its texts could be translated. It met other religions (Daoism in China, Shinto in Japan) and absorbed them, rather than fighting. That flexibility, more than any imperial sponsorship, drove its spread.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which empire's missionary efforts most accelerated Buddhism's early spread beyond India?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Roman Empire</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Mauryan Empire under Ashoka</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Persian Empire under Cyrus</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Birth of Christianity</h3>
<p>In the early 1st century CE, a Jewish preacher in Roman-occupied Judaea named <strong>Jesus of Nazareth</strong> gathered a small group of followers, taught a radical message of love, repentance, and the imminent kingdom of God, and was crucified by the Roman governor Pontius Pilate around 30 CE. By any normal historical reckoning, that should have been the end of him.</p>

<p>It wasn't. Within decades, his followers — convinced that Jesus had risen from the dead — were spreading a new faith across the eastern Roman Empire. The decisive figure in this transformation was <strong>Paul of Tarsus</strong>, a former Pharisee who, after a dramatic conversion, made Christianity universal — explicitly preaching that gentiles (non-Jews) could be Christians without first becoming Jewish. This single decision turned a Jewish reform movement into a world religion.</p>

<p>For three centuries Christians were a persecuted minority. They were thrown to lions in the Colosseum, killed under Diocletian's "Great Persecution" (303 CE), and considered atheists by Romans because they refused to worship the state gods. Then everything changed.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
In 312 CE, on the eve of the battle of the Milvian Bridge, the Roman general <strong>Constantine</strong> reportedly saw a vision of a cross and the words "<em>In hoc signo vinces</em>" — "In this sign, conquer." He won the battle, became emperor, and legalised Christianity the next year (the Edict of Milan, 313 CE). By 380 CE Christianity was the official religion of the Roman Empire. From persecuted to imperial in 70 years.
</div>

<h3>Christianity Becomes Empire-Shaping</h3>
<p>Once it had imperial backing, Christianity did something none of the older Mediterranean cults had managed: it became a single, doctrinally unified, institutionally organised religion. Bishops met at councils (Nicaea in 325, Chalcedon in 451) to define orthodoxy and condemn heresy. The Roman administrative model — provinces, dioceses, hierarchies — was repurposed as church governance.</p>

<p>When the Western Roman Empire fell, the Catholic Church inherited its infrastructure. Latin remained the language of religion and learning for another thousand years. Bishops sometimes ran cities the empire had abandoned. The <strong>Pope</strong> in Rome would, by the medieval era, be a more powerful continuous institution than any king.</p>

<h3>Hinduism in the Classical Age</h3>
<p>Hinduism is older than the classical age, with roots in the Vedic period of the second millennium BCE. But it was during the Gupta era that its modern form crystallised. The great epics (<em>Mahabharata</em>, <em>Ramayana</em>) reached their final form. The major gods of devotional worship — <strong>Vishnu</strong>, <strong>Shiva</strong>, <strong>Devi</strong> — emerged as central figures. Temple architecture matured. The system of <em>bhakti</em> (devotional love directed at a personal deity) became a dominant religious mode.</p>

<p>Unlike Christianity, Hinduism didn't develop a single creed or central authority. It absorbed local gods and regional practices, allowing enormous flexibility. By 700 CE, what we'd recognise as Hinduism was the dominant religion of the Indian subcontinent — a position it has held ever since.</p>

<h3>How Religion Reshaped Daily Life</h3>
<p>The classical-age religions did more than save souls; they restructured societies. They redefined how people thought about <strong>marriage, sex, food, work, and death</strong>. They created new institutions — monasteries, churches, religious schools — that for centuries served as the main centres of learning, healthcare, and welfare. They imposed new calendars (Sundays, Sabbaths, Ramadan, Buddhist holy days) that shaped the rhythm of weeks and years.</p>

<p>And they offered something the older religions couldn't: a personal relationship between an individual soul and a universal divine, available to anyone — slave or free, woman or man, rich or poor. That democratic promise, more than imperial sponsorship, was the deepest source of their staying power.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What did Karl Jaspers call the period (c. 600 BCE – 0 CE) when many of the world's major religious and philosophical traditions emerged?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Pagan Era</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Axial Age</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Classical Faith</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The classical age didn't just produce empires and inventions — it produced the religious frameworks that still shape billions of human lives today. The maps of religion in Eurasia were drawn between roughly 500 BCE and 600 CE, and have changed surprisingly little since. Islam, which we'll meet in the medieval era, would extend the same logic — a universal faith with a portable text — over an even larger area.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 3: THE MEDIEVAL WORLD
// ═══════════════════════════════════════════════════════

L["Medieval Europe"] = `<div class="lesson-body">

<h3>Reassessing the "Dark Ages"</h3>
<p>For centuries, "medieval" was a synonym for "ignorant" — a thousand years between the glory of Rome and the rebirth of the Renaissance, supposedly filled with superstition, plague, and stagnation. That picture is wrong. The medieval period (c. 500–1500 CE) was an age of cathedrals, universities, complex law, sophisticated philosophy, exquisite art, mechanical clocks, eyeglasses, and the windmill. Europe was poorer and more rural than Rome at its height, but it was inventing the institutions that would later make modern Europe possible.</p>

<p>What we call the "fall of Rome" was, for most ordinary people in Europe, a slow transition rather than a crash. Roman roads remained in use. Latin remained the language of religion and learning. The Catholic Church inherited the empire's organisational shell. What disappeared was central political authority. What replaced it would take a thousand years to build.</p>

<h3>The Carolingian Renaissance</h3>
<p>The first major attempt to rebuild a Roman-style state in the West came under <strong>Charlemagne</strong> (r. 768–814), king of the Franks. He conquered most of modern France, Germany, and northern Italy. On Christmas Day 800 CE, Pope Leo III crowned him "Emperor of the Romans" in Rome — a moment that signalled both the church's claim to legitimise rulers and Charlemagne's claim to inherit Roman authority.</p>

<p>Charlemagne couldn't read fluently himself, but he saw that learning had to be revived. He gathered scholars from across Europe to his court at Aachen. They reformed handwriting (creating the clear "Carolingian minuscule" — the ancestor of every printed lowercase letter you read today), copied classical texts that had been decaying, and standardised the liturgy. This <span class="vocab-pill">Carolingian Renaissance</span> saved much of what we have of Roman literature.</p>

<h3>Feudalism & the Manorial Economy</h3>
<p>Charlemagne's empire splintered after his death, and Europe entered a phase of decentralisation. Vikings raided from the north, Magyars from the east, and Saracen pirates from the south. Without a strong central state, defence became local. The system that emerged — historians now resist calling it a single "system" — was built on personal bonds: a <strong>lord</strong> granted land (a <em>fief</em>) to a <strong>vassal</strong> in exchange for military service. The vassal in turn protected the peasants who worked the land.</p>

<p>At the bottom were the <span class="vocab-pill">serfs</span> — peasants who weren't quite slaves but couldn't leave their lord's land. They worked the manor's fields, ground their grain at the lord's mill, and gave a portion of their crops to the lord and the church. In exchange, in theory, they got protection. In practice, they got hard work, taxes, and occasionally famine.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
"Feudalism" is a textbook term that paints something far messier than it really was. It's like calling all of "the modern economy" a single system. Different regions of Europe had different arrangements, and they kept changing. The deep pattern was: in the absence of a strong state, security and obligation came from personal relationships up and down a hierarchy. Not a constitution; a web.
</div>

<h3>The Power of the Church</h3>
<p>Through all of this, the Catholic Church was Europe's most durable institution. It outlasted every dynasty. Bishops and abbots controlled vast estates. Monasteries preserved learning, copied books, brewed beer, drained swamps, and ran what passed for hospitals. The pope, by the 11th century, claimed authority over kings — and sometimes made it stick. When Pope Gregory VII excommunicated Emperor Henry IV in 1077, Henry stood barefoot in the snow at Canossa for three days begging forgiveness.</p>

<p>The church's power had limits. The <strong>Great Schism of 1054</strong> split Christianity into Catholic (West, Latin, Pope) and Orthodox (East, Greek, Patriarch of Constantinople) branches. The split has never been healed. And by the late medieval period, the church's wealth and corruption would set the stage for the Reformation.</p>

<h3>The Crusades & the Wider World</h3>
<p>In 1095, Pope Urban II called for European Christians to march east and recapture Jerusalem from Muslim rule. This launched the <strong>Crusades</strong>, two centuries of military campaigns that brought Europeans into sustained contact with the wealthier, more sophisticated Islamic world. The Crusades themselves achieved little militarily — Jerusalem changed hands repeatedly and was lost permanently in 1291 — but they reshaped Europe.</p>

<p>European traders followed the crusader armies. Italian city-states like <strong>Venice</strong> and <strong>Genoa</strong> grew rich shipping pilgrims and goods between Europe and the East. Knowledge flowed: Arabic numerals, paper-making, classical Greek philosophy preserved by Muslim scholars, sugar, citrus, and the vocabulary of warfare. The European words "admiral," "magazine," "syrup," and "algebra" all entered the language during this era.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What happened in the Great Schism of 1054?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Holy Roman Empire collapsed</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Christianity split into Catholic (West) and Orthodox (East) branches</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Charlemagne was crowned Emperor</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Towns, Trade & Universities</h3>
<p>From around 1100 onward, Europe began a long economic recovery. New farming techniques (the heavy plough, the three-field rotation, the horse collar) increased productivity. Surplus food meant towns could grow. Towns meant markets. Markets meant <strong>guilds</strong> of craftsmen and merchants protecting their trades. Some towns won charters from kings making them legally free of the local lord — the origin of "<em>Stadtluft macht frei</em>": "town air makes you free."</p>

<p>Universities began appearing in the 12th century — <strong>Bologna</strong> (1088), <strong>Paris</strong> (c. 1150), <strong>Oxford</strong> (c. 1167), <strong>Cambridge</strong> (1209). They were communities of teachers and students, organised as guilds, with the right to police themselves. They studied theology, law, medicine, and philosophy — including, increasingly, Aristotle, recovered from the Islamic world. <strong>Thomas Aquinas</strong> (1225–1274) used Aristotelian logic to systematise Christian theology in his <em>Summa Theologica</em>, an intellectual achievement that still shapes Catholic thought.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The medieval cathedral was a thousand-year argument in stone. <strong>Chartres</strong>, <strong>Notre-Dame de Paris</strong>, <strong>Cologne</strong>, <strong>Salisbury</strong> — these buildings took generations to complete. The masons who designed them used geometry, advanced engineering, and clever use of flying buttresses to make stone walls into walls of glass. Anyone who tells you medieval people were ignorant has never stood inside one of these spaces.
</div>

<h3>Plague, War & the End of the Medieval Order</h3>
<p>The 14th century brought catastrophe. The <strong>Black Death</strong> (1347–1351) killed perhaps 30–60% of Europe's population in just four years. Whole villages disappeared. Survivors found their labour suddenly valuable, undermining the manorial system. The <strong>Hundred Years' War</strong> (1337–1453) between England and France ground on through this devastation, sometimes feeding it. Famine, peasant revolts (England 1381, France 1358), and church scandals (the Papacy moved to Avignon, 1309–1377; the Western Schism produced rival popes) shook every institution.</p>

<p>And yet, the late medieval period also produced Dante's <em>Divine Comedy</em>, Chaucer's <em>Canterbury Tales</em>, Giotto's frescoes, the first eyeglasses, mechanical clocks, the magnetic compass adapted for navigation, gunpowder, and — by the 1450s — Gutenberg's printing press. The "medieval" world ended by inventing the tools that would make the next world possible.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly what fraction of Europe's population died in the Black Death (1347–1351)?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">5–10%</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">15–20%</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">30–60%</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The medieval millennium was not a long darkness between Rome and the Renaissance. It was the period when Europe built — slowly, often painfully — the institutions (the church, the university, the chartered town, the guild, the parliament, the common law) that the modern West still rests on. Nothing was static. Everything we mean by "Europe" was being put together.
</div>

</div>`;

L["The Rise of Islam"] = `<div class="lesson-body">

<h3>The Last of the Great Religions</h3>
<p>By 600 CE, the religious map of Eurasia looked nearly complete. Christianity dominated the Mediterranean. Buddhism stretched from India to Japan. Hinduism flourished across South Asia. Zoroastrianism was the state faith of Sasanian Persia. There seemed to be no room left for another world religion. Then, in the early 7th century, in a cluster of trading towns in western Arabia, a faith arose that would, within a single century, spread from Spain to the Indus Valley.</p>

<p><strong>Islam</strong> emerged in a historical moment perfectly suited to it: the great empires of late antiquity (Byzantine and Sasanian) had exhausted themselves in decades of war, and Arabia, long marginal, suddenly became central. Muhammad's followers united the Arabian Peninsula, then poured outward into a world that had no idea what was coming.</p>

<h3>Pre-Islamic Arabia</h3>
<p>Before Islam, the Arabian Peninsula was a patchwork of Bedouin tribes, oasis towns, and trading centres. Most Arabs followed a polytheistic religion centred on shrines like the <strong>Kaaba</strong> in <strong>Mecca</strong> — already a pilgrimage site housing dozens of tribal idols. Christianity and Judaism had communities scattered across the peninsula. Mecca itself was an important commercial hub; its <strong>Quraysh</strong> tribe controlled lucrative caravan routes between Yemen and the Mediterranean.</p>

<p>It was into this world that <strong>Muhammad ibn Abdullah</strong> was born around 570 CE — into the Quraysh, but as an orphan from a poor branch. He worked as a merchant, gained a reputation for honesty (his nickname was <em>al-Amin</em>, "the trustworthy"), married a wealthy older widow named <strong>Khadija</strong>, and at age 40, around 610 CE, began receiving what he reported as revelations from the angel Gabriel.</p>

<h3>Muhammad's Mission</h3>
<p>The revelations — collected after Muhammad's death as the <strong>Qur'an</strong> — proclaimed strict monotheism, denounced idol worship, demanded social justice for the poor, and promised paradise to the righteous and judgement for the corrupt. Muhammad preached this message in Mecca for 12 years, attracting a small but committed following — and fierce opposition from the Quraysh elite, whose wealth depended on the polytheistic pilgrimage trade.</p>

<p>In 622 CE, threatened with assassination, Muhammad and his followers migrated north to <strong>Yathrib</strong>, soon renamed <strong>Medina</strong> ("the city of the Prophet"). This migration — the <span class="vocab-pill">Hijra</span> — is so important to Islam that it marks Year 1 of the Islamic calendar. In Medina, Muhammad became not just a prophet but the political leader of a new community: the <span class="vocab-pill">umma</span>.</p>

<p>For eight years, Muhammad and his followers fought a series of wars with the Meccans, eventually returning to take Mecca peacefully in 630 CE. Muhammad cleansed the Kaaba of its idols and rededicated it to the worship of the one God, <strong>Allah</strong>. By his death in 632, almost the entire Arabian Peninsula was united under Islam.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event marks Year 1 of the Islamic calendar?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Muhammad's birth</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Muhammad's first revelation</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Hijra — Muhammad's migration to Medina</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Rashidun & Umayyad Caliphates</h3>
<p>Muhammad left no son and no clear successor, sparking debates that would shape Islam forever. The first four leaders, called the <strong>Rashidun</strong> ("rightly-guided") caliphs — Abu Bakr, Umar, Uthman, and Ali — were chosen from his close companions. Under them, Arab armies achieved one of history's most stunning expansions: defeating both the exhausted Byzantine and Sasanian empires, conquering Egypt, the Levant, Mesopotamia, and Persia within twenty years of Muhammad's death.</p>

<p>The Rashidun period ended in civil war. <strong>Ali</strong>, Muhammad's cousin and son-in-law, was assassinated in 661 CE. The caliphate passed to the <strong>Umayyad</strong> dynasty, which ruled from <strong>Damascus</strong> and pushed conquest further: into North Africa, into Spain (711 CE), and eastward to the borders of India. By 750 CE, the Umayyad Caliphate was the largest empire the world had ever seen.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine that the Roman Empire's eastern half (Byzantine) and its bitter rival (Persia) had fought themselves to ruin — and then a confederation of unified, disciplined desert tribes rolled out and conquered both within a generation. That's roughly what happened. The Arab conquests are not really comparable to anything else in pre-modern history. They redrew the map of the entire Old World between Spain and Central Asia.
</div>

<h3>The Sunni–Shia Divide</h3>
<p>The dispute over who should have succeeded Muhammad never went away. Those who supported the Rashidun selection process became the <span class="vocab-pill">Sunnis</span>. Those who believed Ali, as Muhammad's blood relative, should have been the first caliph became the <span class="vocab-pill">Shia</span> ("party" of Ali). The split deepened in 680 CE when Ali's son <strong>Hussein</strong> was killed at the Battle of <strong>Karbala</strong> by Umayyad forces — a martyrdom Shia Muslims still mourn annually.</p>

<p>Today, about 85–90% of Muslims are Sunni; 10–15% are Shia, concentrated mainly in Iran, southern Iraq, Bahrain, Lebanon, and Yemen. The split is not just theological. It involves different religious authorities, different rituals, and a long, complex history.</p>

<h3>The Abbasid Golden Age</h3>
<p>In 750 CE, the Umayyads were overthrown by the <strong>Abbasid</strong> dynasty, who moved the capital to a new city: <strong>Baghdad</strong>, founded in 762 CE on the Tigris. For roughly the next two centuries, Baghdad was the largest, richest, and most culturally vibrant city on Earth. Under caliphs like <strong>Harun al-Rashid</strong> (r. 786–809) and <strong>al-Ma'mun</strong> (r. 813–833), Baghdad's <strong>House of Wisdom</strong> sponsored the translation of Greek, Persian, Indian, and Syriac texts into Arabic — and the original scholarship that built on them.</p>

<p>The achievements of the Islamic Golden Age are immense:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Algebra</strong> (the word itself comes from <em>al-jabr</em>) — al-Khwarizmi's 9th-century treatise gave us the modern field</li>
<li><strong>Optics</strong> — Ibn al-Haytham (Alhazen) wrote the foundational text on optics around 1021, anticipating the scientific method</li>
<li><strong>Medicine</strong> — Ibn Sina's (Avicenna's) <em>Canon of Medicine</em> was the standard textbook in European universities for 600 years</li>
<li><strong>Philosophy</strong> — Ibn Rushd (Averroes) preserved and extended Aristotelian thought, profoundly influencing Aquinas and medieval Christian theology</li>
<li><strong>Geography</strong> — al-Idrisi made the most accurate world map of the Middle Ages for the Norman king Roger II of Sicily</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Arabic numerals you write — 0, 1, 2, 3 — came to Europe from the Islamic world (which had got them from India). When medieval European merchants started using them instead of Roman numerals, they could finally do bookkeeping efficiently. Capitalism, science, and accounting all owe a debt to a Baghdad mathematician's textbook.
</div>

<h3>Al-Andalus, Cordoba & the Transmission of Knowledge</h3>
<p>Meanwhile, in the far west, the surviving Umayyads had fled to <strong>Spain</strong> and founded an emirate (later caliphate) at <strong>Cordoba</strong>. Muslim Spain — <strong>al-Andalus</strong> — became the most sophisticated society in Western Europe. By 1000 CE, Cordoba had a population of perhaps 500,000, paved streets, public baths, libraries with hundreds of thousands of volumes, and a culture in which Muslims, Jews, and Christians lived (mostly) together. The poets, philosophers, and scientists of al-Andalus would, in the 12th and 13th centuries, transmit Greek and Arabic knowledge into Christian Europe — kicking off the Renaissance.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the House of Wisdom in Abbasid Baghdad?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A military training school</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A major translation and research centre</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A grand mosque</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> For roughly five centuries (c. 750–1250 CE), the Islamic world was the most advanced civilisation on Earth in science, mathematics, medicine, and philosophy. Much of what Europeans came to know about ancient Greek thought reached them via Arabic translations and commentaries. The "European recovery" of classical knowledge was, more honestly, a transmission from the Islamic world.
</div>

</div>`;

L["The Byzantine Empire"] = `<div class="lesson-body">

<h3>Rome That Didn't Fall</h3>
<p>Most popular narratives say Rome fell in 476 CE. The Romans of Constantinople would have laughed. The eastern half of the Roman Empire continued, in unbroken constitutional succession, for nearly a thousand years more — until 1453. They never called themselves "Byzantines"; they always called themselves <em>Romaioi</em>, "Romans." The label "Byzantine Empire" is a 16th-century coinage of Western historians who didn't want to admit that Rome had outlived itself.</p>

<p>Why did the East survive when the West collapsed? Several reasons: the East was richer and more urbanised, with major cities like Antioch and Alexandria. Its wealth funded a strong navy and a professional army. <strong>Constantinople</strong> itself was an almost impregnable fortress, sited on a peninsula and protected by triple walls that wouldn't be breached for nearly a thousand years.</p>

<h3>Justinian & Theodora</h3>
<p>The 6th century brought the empire's last major effort to reconquer the lost West. Emperor <strong>Justinian I</strong> (r. 527–565), backed by his formidable wife <strong>Theodora</strong> (a former actress whose political instincts probably saved his throne during the Nika Riots of 532), launched ambitious campaigns under the general <strong>Belisarius</strong> that retook North Africa, much of Italy, and parts of Spain.</p>

<p>The reconquest didn't last. Plague (the <strong>Plague of Justinian</strong>, 541 CE — the same bacterium that later caused the Black Death) devastated the empire and killed perhaps a third of its population. New invaders — Lombards in Italy, Slavs in the Balkans — undid most of Justinian's gains within a generation.</p>

<p>But Justinian's other achievements endured. He commissioned the <strong>Corpus Juris Civilis</strong>, a comprehensive codification of Roman law. This <em>Justinian Code</em> would become the basis of legal systems across continental Europe and, indirectly, much of the modern world. He also rebuilt the church of <strong>Hagia Sophia</strong> — for nearly a thousand years the largest cathedral in the Christian world, a masterpiece of engineering whose enormous dome appeared, to contemporaries, to hover by divine power.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine if the United States, after some catastrophe, lost its western half and continued for a thousand years from a fortified Boston, still calling itself "The United States" while neighbouring countries called it something else. That's the cognitive trick required to understand the Byzantines. They were, in their own minds, simply Romans. Continuing.
</div>

<h3>The Greek-Speaking Orthodox World</h3>
<p>Byzantine culture was fundamentally Greek-speaking and Orthodox Christian. Latin gave way to Greek in administration. Constantinople produced sophisticated theological literature, illuminated manuscripts, ivory carvings, mosaics, and church architecture that would shape Eastern Christianity forever.</p>

<p>The empire's relationship with the Western Catholic Church was tense. Theological disputes — over the nature of Christ, the use of icons, the precise wording of the Nicene Creed — gradually divided East and West. The break became formal in 1054 (the <strong>Great Schism</strong>) when papal legates and the Patriarch of Constantinople mutually excommunicated each other.</p>

<h3>Iconoclasm — Religion of Images</h3>
<p>One peculiar Byzantine controversy deserves mention: the <span class="vocab-pill">Iconoclast</span> Crisis (c. 726–843). Emperor Leo III banned the veneration of religious images (icons) — possibly because Muslim and Jewish criticism of "idol worship" was making him uncomfortable. For over a century, religious images were destroyed across the empire. Then, in 843, the empress Theodora restored icon veneration. The "Triumph of Orthodoxy" is still celebrated annually in Eastern churches.</p>

<p>The Iconoclast Crisis matters because it shows how seriously Byzantines took theological detail. The exact role of images in worship was, to them, a question worth a century of conflict. It also widened the gap between East and West: Rome generally supported icons, putting the popes at odds with Constantinople.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the legal achievement most associated with Justinian?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Magna Carta</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Corpus Juris Civilis (Justinian Code)</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Twelve Tables</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Cultural Influence on the Slavs</h3>
<p>Byzantium's most lasting cultural legacy was the conversion of the Slavs. In the 9th century, two missionary brothers — <strong>Saints Cyril and Methodius</strong> — were sent to bring Christianity to the Slavic peoples. To do so, they invented an alphabet for writing Slavic languages, which evolved into the <strong>Cyrillic</strong> alphabet still used today across Russia, Bulgaria, Serbia, Ukraine, and beyond.</p>

<p>In 988 CE, Prince Vladimir of Kievan Rus' converted to Orthodox Christianity, supposedly after his envoys reported that Hagia Sophia was so beautiful "we knew not whether we were in heaven or on earth." Russia inherited Byzantine religion, art, alphabet, and political ideology — including the title <em>tsar</em> ("Caesar"). When Constantinople fell in 1453, Moscow declared itself the "Third Rome."</p>

<h3>The Slow Decline</h3>
<p>The empire's medieval centuries were a long story of attrition. Persians, then Arabs, then Bulgars, then Seljuk Turks chipped away at the borders. The disaster of <strong>Manzikert</strong> (1071) lost Anatolia — the empire's heartland — to the Seljuks. The Crusades, supposedly come to help, often hurt: the <strong>Fourth Crusade</strong> in 1204 sacked Constantinople itself, looted its treasures, and installed Latin rulers for sixty years. Byzantium recovered the city in 1261 but never the strength.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The bronze horses now displayed at <strong>St Mark's Basilica in Venice</strong> were looted from Constantinople by Crusaders in 1204. They had originally been made for the Hippodrome of Constantinople, and were probably crafted in the 4th century BCE. They're a small physical reminder that the "fall of Constantinople" began long before 1453.
</div>

<h3>1453: The Fall</h3>
<p>By the 1400s, the empire had shrunk to little more than the city of Constantinople and a few outposts. The Ottoman Turks, who had begun as a small principality in northwest Anatolia, encircled them. On 29 May 1453, after a 53-day siege, the Ottoman sultan <strong>Mehmed II</strong> — using new artillery (gigantic siege guns) capable of breaching Constantinople's ancient walls — took the city. Constantine XI, the last Byzantine emperor, died fighting. Hagia Sophia became a mosque (today a contested museum-mosque).</p>

<p>The fall of Constantinople is sometimes used to mark the end of the Middle Ages. Greek scholars fleeing west brought manuscripts that helped fuel the Italian Renaissance. The closure of overland routes to the East spurred Atlantic exploration. The Roman Empire, finally, was over — 2,206 years after Romulus, supposedly, founded the city on its seven hills.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> Byzantium is the great forgotten medieval empire of the West's textbooks. It preserved Greek learning, codified Roman law, converted the Slavs, defended Europe from Persians and Arabs and Turks for centuries, and built one of the most beautiful civilisations in human history. To understand Russia, the Balkans, and Orthodox Christianity, you have to start here.
</div>

</div>`;

L["The Vikings & the Norse World"] = `<div class="lesson-body">

<h3>More Than Raiders</h3>
<p>The Vikings have suffered, in popular imagination, from the worst sort of historical cliché — the bearded raider with a horned helmet (which they never wore), the brutal pillager, the savage from the cold north. The truth is far more interesting. Between roughly 793 and 1066 CE, the people of Scandinavia exploded outward across Europe, Asia, and even North America in a burst of raiding, trading, settlement, exploration, and political innovation that reshaped the medieval world.</p>

<p>They sailed open-decked longships through Atlantic storms. They founded states from Ireland to Russia. They reached Newfoundland five centuries before Columbus. They were, simultaneously, terrifying enemies and shrewd merchants. To understand the European medieval world without the Vikings is impossible.</p>

<h3>Scandinavia Before the Vikings</h3>
<p>Scandinavia in the 8th century was a world of small kingdoms, fjords, farms, and trading towns. The land was difficult — short growing season, rocky soil — which encouraged seafaring. Scandinavians were already accomplished shipbuilders and traders. What changed around 800 CE was technology and ambition: the development of the <strong>longship</strong>, a narrow, shallow-draft, oared-and-sailed vessel that could cross oceans, ride up rivers, and land on any beach.</p>

<p>That technology, combined with population pressure, political fragmentation at home, and the wealth of weakly-defended monasteries abroad, set the stage for the Viking Age.</p>

<h3>The Lindisfarne Raid</h3>
<p>The traditional start of the Viking Age is <strong>8 June 793 CE</strong>, when Norse raiders descended on the Christian monastery of <strong>Lindisfarne</strong> on the northeast coast of England. They killed monks, looted relics, and disappeared back to sea. The shock was profound. The Northumbrian scholar Alcuin wrote: "Never before in Britain has such a terror appeared as we have now suffered from a pagan race." Monasteries were soft targets — wealthy, undefended, on coasts.</p>

<p>For decades the raids continued and intensified. Vikings sailed up the Seine to attack Paris (845, 885). They besieged London. They sacked Hamburg, Cologne, and even Lisbon. They reached the Mediterranean. By the mid-9th century, no European coast or navigable river was truly safe.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
For Western Europeans of the 9th century, Viking raids were the medieval equivalent of an unstoppable ballistic threat — fast, unpredictable, devastating, and arriving with no notice. The standard prayer of the era was: "From the fury of the Northmen, deliver us, O Lord."
</div>

<h3>Settlement & the Danelaw</h3>
<p>The Vikings did not just raid; they settled. Large parts of England fell under Viking control by the late 9th century, an area called the <strong>Danelaw</strong> ("the law of the Danes"). King <strong>Alfred the Great</strong> of Wessex (r. 871–899) stopped the conquest in southern England and laid the foundation for a unified English kingdom that would, over the next century, gradually reabsorb Viking territories — but only after profound Viking influence on English law, language, and place-names. Many English words — sky, egg, husband, leg, knife, window, give, take — are Norse loans.</p>

<p>In <strong>Ireland</strong>, Vikings founded Dublin (841) as a slave-trading hub. In <strong>France</strong>, a Viking warlord named Rollo was granted a chunk of coast in 911 to keep him quiet — this became <strong>Normandy</strong>, "Northmen's Land." His descendant William the Conqueror would invade England in 1066. <strong>Iceland</strong> was settled around 870, becoming an independent commonwealth with its own legal assembly (the <em>Althing</em>) — arguably the world's oldest continuous parliament.</p>

<h3>East: The Rus and the Roads to Constantinople</h3>
<p>While Norwegians and Danes attacked the West, Swedes pushed east, into the river systems of what is now Russia and Ukraine. Called the <strong>Rus</strong> (probably the origin of "Russia"), they founded trading and political centres at <strong>Novgorod</strong> and <strong>Kiev</strong>. They followed the rivers down to the Black Sea, opening trade routes to <strong>Constantinople</strong> — and sometimes attacking it.</p>

<p>The Rus formed the bodyguard corps of the Byzantine emperor: the famous <strong>Varangian Guard</strong>, six thousand axe-wielding northerners who served emperors for over three centuries. Some Varangians, like the future king Harald Hardrada of Norway, became fabulously wealthy in Byzantine service before sailing home. Norse runestones in Sweden mention warriors who died as far away as Greece, Jerusalem, and Baghdad.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Viking-derived state lent its name to the modern country of Russia?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Danelaw</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Rus</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Normandy</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Atlantic Exploration: Greenland & Vinland</h3>
<p>Westward the Norse pushed even further. <strong>Erik the Red</strong>, banished from Iceland for murder, settled <strong>Greenland</strong> around 985 CE — naming it greenly to attract colonists. Greenland's Norse colonies survived for nearly five hundred years before the Little Ice Age and isolation killed them.</p>

<p>Erik's son <strong>Leif Erikson</strong>, around 1000 CE, sailed further west still and landed at a place he called <strong>Vinland</strong> — almost certainly <strong>Newfoundland</strong>. Norse archaeology at <strong>L'Anse aux Meadows</strong> confirmed in the 1960s that Vikings had a settlement in North America roughly 500 years before Columbus. The settlement didn't last — too far, too few colonists, hostile relations with native peoples — but the Vikings reached the Americas first.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The L'Anse aux Meadows site in Newfoundland is now a UNESCO World Heritage site. Excavations there in the 1960s found the foundations of Norse-style longhouses, iron-working slag (Indigenous Americans didn't smelt iron at the time), and a bronze pin of a known Viking type. The Vikings reached North America. Then they decided it wasn't worth keeping. That's medieval reality.
</div>

<h3>Religion, Sagas & the End of the Viking Age</h3>
<p>The Norse religion centred on Odin, Thor, Freyja, and a host of other gods, with elaborate myths recorded in the <strong>Eddas</strong> and the <strong>sagas</strong> — extraordinary medieval Icelandic literature that mixes history, family drama, magical realism, and verse. The <em>Saga of Erik the Red</em>, <em>Njál's Saga</em>, and the <em>Heimskringla</em> are among medieval Europe's literary masterpieces.</p>

<p>Conversion to Christianity came gradually, often by political decree — Iceland adopted Christianity by majority vote at the Althing in 1000 CE. As Scandinavian kingdoms consolidated and Christianised, the great raiding age ended. By 1066, when Harald Hardrada died at Stamford Bridge trying to take England, the Viking Age was effectively over. Three weeks later William the Conqueror — descended from Vikings himself — invaded the south of England. The Norse legacy didn't die. It simply settled into the new Europe.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">When and where did Norse explorers reach North America?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">c. 1492 CE in Florida</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">c. 1000 CE in Newfoundland</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">c. 1300 CE in Greenland alone</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Vikings weren't just terror or trade — they were both, simultaneously, across an ocean's worth of space. They founded Russia, settled Iceland, reached America, served Byzantine emperors, traded with Baghdad, conquered England, and gave their genes and language to half of Europe. Few peoples have transformed the medieval world so quickly or so far.
</div>

</div>`;

L["Medieval Japan & Korea"] = `<div class="lesson-body">

<h3>Two Lands, One Cultural Sphere</h3>
<p>For most of their history, Korea and Japan have lived in the cultural shadow of China — borrowing writing, Buddhism, bureaucratic models, court ritual — while developing distinctively their own. The medieval period (roughly 600 to 1600 CE) is when each country forged the political and cultural identity it still carries: Japan with its samurai, shogun, and courtly aesthetic; Korea with its scholar-officials, hangul script, and Confucian rigour.</p>

<h3>Heian Japan: The Court of Aesthetes</h3>
<p>The classical Japanese state was modelled, in the 7th and 8th centuries, on Tang Chinese imperial governance. By 794 CE the imperial capital had moved to <strong>Heian-kyō</strong> (modern Kyoto), beginning the <strong>Heian Period</strong> (794–1185). For nearly four centuries, Japan was ruled — at least nominally — by an emperor, but real power flowed through the aristocratic <strong>Fujiwara</strong> family, who married daughters into the imperial line generation after generation.</p>

<p>Heian court culture was, for its tiny aristocratic elite, an obsessively refined world. Writing poetry well was a survival skill. Choosing the right combinations of coloured silks for one's robes was a moral test. Calligraphy mattered. Perfumes mattered. The masterpiece of the era, <strong>Murasaki Shikibu's <em>Tale of Genji</em></strong> (c. 1010), is often called the world's first novel — a 1,000-page exploration of love, beauty, and impermanence written by a court lady. Most of the Heian literature we have was written by women, in Japanese; men were busy with formal Chinese.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Heian court culture was if Versailles, Renaissance Florence, and Bloomsbury all merged — and were all run by aristocratic women who wrote diaries and fell in love and produced literary masterpieces. Outside the palace gates, Japan was a poor agricultural country. Inside, it was perhaps the most refined civilisation on Earth.
</div>

<h3>Rise of the Samurai</h3>
<p>While the court was writing poetry, real military power was accumulating in the provinces. Wealthy clans needed armed retainers to police their lands, defend their estates, and collect taxes. These warriors — the <span class="vocab-pill">samurai</span> — gradually developed a distinct identity, a code of honour (later codified as <em>bushidō</em>), and a willingness to take political power.</p>

<p>In the late 12th century, two warrior clans — the <strong>Taira</strong> and the <strong>Minamoto</strong> — fought a series of civil wars. The Minamoto won. In 1192, their leader <strong>Minamoto no Yoritomo</strong> received the title <span class="vocab-pill">shogun</span> ("generalissimo") from the emperor and established a military government at <strong>Kamakura</strong>. The emperor remained as a sacred figurehead, but real power had passed to the shogun and the samurai class. This shogunate model — emperor reigning, shogun ruling — would last, with interruptions, until 1868.</p>

<h3>The Mongol Invasions and the Kamikaze</h3>
<p>In 1274 and again in 1281, <strong>Kublai Khan</strong> launched massive Mongol invasions of Japan from Korea. Both times, the invasion fleets were destroyed by typhoons. The Japanese called these storms <span class="vocab-pill">kamikaze</span> — "divine winds" — and saw them as proof that Japan was protected by the gods. The Mongols, despite conquering all of China and most of Eurasia, never set foot on Japanese soil.</p>

<h3>Sengoku — The Warring States Period</h3>
<p>By the late 15th century, central authority had collapsed. Japan fragmented into competing domains ruled by local warlords called <span class="vocab-pill">daimyō</span>. The <strong>Sengoku Period</strong> ("Warring States," c. 1467–1600) was 130 years of near-constant warfare, technological innovation (Portuguese matchlock muskets arrived in 1543 and were quickly mass-produced), and political treachery.</p>

<p>Three remarkable warlords reunified Japan: <strong>Oda Nobunaga</strong> (assassinated 1582), the brutal innovator who first used massed gunfire on European lines; <strong>Toyotomi Hideyoshi</strong> (d. 1598), the peasant-born general who completed national reunification; and <strong>Tokugawa Ieyasu</strong>, who in 1600 won the decisive battle of Sekigahara and founded the <strong>Tokugawa Shogunate</strong> that would rule Japan for 265 years of "closed country" (<em>sakoku</em>) isolation and remarkable internal stability.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The serene Japanese aesthetic of tea ceremony, dry-stone gardens, ink-wash painting, and minimalist architecture was largely codified during the medieval period — particularly under the influence of <strong>Zen Buddhism</strong>. The concept of <em>wabi-sabi</em> (the beauty of imperfection, transience, and simplicity) emerged in this era. It still shapes Japanese design today.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What does "shogun" mean?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">"Emperor"</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">"Generalissimo" — military ruler</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">"Priest-king"</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Korea: The Three Kingdoms & Goryeo</h3>
<p>Korea's medieval story runs in parallel. Three rival kingdoms — <strong>Goguryeo</strong>, <strong>Baekje</strong>, and <strong>Silla</strong> — competed for the peninsula until <strong>Silla</strong>, allied with Tang China, unified Korea in 668 CE. Buddhism had arrived in the 4th century and shaped Korean art, especially the magnificent stone-carved temples of <strong>Bulguksa</strong> and the pure-gold <strong>Buddha statues</strong> of the era.</p>

<p>Silla gave way in 918 CE to the <strong>Goryeo Dynasty</strong> (the source of the modern name "Korea"). Goryeo developed a sophisticated bureaucracy modelled on the Chinese exam system, and produced extraordinary craft achievements: the world's earliest <strong>movable metal type</strong> (used for printing in 1234, two centuries before Gutenberg) and the <strong>Tripitaka Koreana</strong>, an entire Buddhist canon carved on 81,000 wooden printing blocks that survive intact today.</p>

<h3>Joseon: The Confucian State</h3>
<p>In 1392, a general named <strong>Yi Seong-gye</strong> founded the <strong>Joseon Dynasty</strong>, which would rule Korea until 1910. Joseon was self-consciously Confucian. The kingdom was reorganised as a strict bureaucratic state staffed by scholar-officials (the <em>yangban</em>) selected through exams.</p>

<p>The dynasty's most beloved king, <strong>Sejong the Great</strong> (r. 1418–1450), commissioned the creation of <strong>Hangul</strong> — a phonetic Korean alphabet designed to be learnable in a few hours by anyone, breaking the literary monopoly of Chinese characters and the elite. Hangul is now considered one of the most ingeniously designed writing systems ever created.</p>

<h3>Hideyoshi's Invasions</h3>
<p>Joseon Korea was nearly destroyed in the 1590s by <strong>Hideyoshi's invasions</strong> from Japan (1592–1598). The first invasion devastated much of the peninsula. Korea was saved by the brilliance of admiral <strong>Yi Sun-sin</strong>, whose ironclad "turtle ships" repeatedly destroyed Japanese fleets, and by Chinese Ming intervention. Hideyoshi's death in 1598 ended the war. The trauma of the invasions shaped Korean attitudes toward Japan for centuries.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Korean king commissioned the Hangul alphabet in the 15th century?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Yi Seong-gye</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Sejong the Great</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Yi Sun-sin</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Japan and Korea both built medieval civilisations around Chinese cultural imports — script, Confucianism, Buddhism, bureaucracy — and both transformed those imports into something distinctively their own. Japan's samurai/shogun system and Korea's scholar-bureaucracy and hangul script set patterns that lasted into the modern era.
</div>

</div>`;

L["Southeast Asian Kingdoms"] = `<div class="lesson-body">

<h3>The Crossroads of Asia</h3>
<p>Southeast Asia — the long peninsula and vast archipelago between India, China, and Australia — has been one of the great cultural meeting grounds of human history. Hindu, Buddhist, Muslim, Confucian, and (later) Christian influences washed across it in successive waves. Indigenous traditions absorbed and reshaped each one. The result, by the medieval period, was a region of extraordinarily rich kingdoms — some of which built monuments that rival anything in Egypt or Mesoamerica.</p>

<p>Geography shaped everything. The mainland — Burma, Thailand, Cambodia, Vietnam — supported rice-growing kingdoms in great river valleys. The maritime world — modern Indonesia, Malaysia, the Philippines — was a constellation of trading ports tied to monsoon-driven seas, where small empires controlled chokepoints rather than territory.</p>

<h3>Funan and the First Indianised States</h3>
<p>From around the 1st century CE, Indian merchants, monks, and scholars began arriving in Southeast Asia, bringing Sanskrit, Hindu and Buddhist religion, and political models. They didn't conquer — they were welcomed and emulated. Local rulers absorbed Indian ideas about kingship, ritual, writing, and cosmology, and grafted them onto local traditions.</p>

<p>The first major state we know of is <strong>Funan</strong> (c. 1st–6th centuries CE), in the lower Mekong delta of modern Cambodia and Vietnam. Funan grew rich on the maritime trade between India and China, with major ports like <strong>Oc Eo</strong> where archaeologists have found Roman coins, Indian beads, and Chinese mirrors all in the same site. Southeast Asia was, from very early on, plugged into the world economy.</p>

<h3>Angkor: The Khmer Empire</h3>
<p>Funan gave way, by the 9th century, to its more famous successor: the <strong>Khmer Empire</strong>, centred at the city of <strong>Angkor</strong> in modern Cambodia. For nearly six centuries (c. 802–1431), Angkor was one of the largest and most sophisticated cities in the world. At its height it housed perhaps a million people, fed by an enormous network of <strong>barays</strong> (artificial reservoirs) and canals that supported intensive rice agriculture.</p>

<p>The Khmer kings considered themselves <em>devarajas</em> — god-kings — and built temples to themselves. The greatest of these is <strong>Angkor Wat</strong>, built by King <strong>Suryavarman II</strong> in the 12th century. It is the largest religious monument in the world, originally dedicated to Vishnu and later converted to Buddhist use, with intricately carved walls depicting Hindu epics across hundreds of metres of stone.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
When French explorers "rediscovered" Angkor Wat in the 1860s, they refused to believe the local Khmer people had built it. They credited everyone from Alexander the Great to Atlantean refugees. They were wrong. The temple was raised by the Khmer themselves, with no European or Chinese involvement, in a span of about 30 years. It is one of humanity's masterpieces.
</div>

<h3>Srivijaya & the Maritime World</h3>
<p>While Angkor dominated the mainland, the maritime world was led, for centuries, by <strong>Srivijaya</strong> (c. 7th–13th centuries) — a thalassocracy ("sea empire") based on the island of <strong>Sumatra</strong>. Srivijaya controlled the <strong>Strait of Malacca</strong>, the chokepoint between the Indian Ocean and the South China Sea. Every ship sailing from China to India had to pay Srivijaya tolls.</p>

<p>Srivijaya was Buddhist. Its capital <strong>Palembang</strong> was an important centre of Buddhist learning where Chinese pilgrim-scholars stopped en route to India. The <strong>Borobudur</strong> temple in central Java — built around 800 CE by the Sailendra dynasty (Srivijaya's rivals/allies) — is the largest Buddhist monument on Earth: a stepped pyramid of stone carved with thousands of Buddhist scenes.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why was the maritime empire of Srivijaya so wealthy?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It mined gold in the Bornean interior</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It controlled the Strait of Malacca trade chokepoint</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It conquered most of mainland Southeast Asia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Majapahit and the Last Hindu-Buddhist Empire</h3>
<p>By the 14th century, Srivijaya had faded and a new Javanese empire rose: <strong>Majapahit</strong> (c. 1293–1527). At its peak under the chief minister <strong>Gajah Mada</strong>, Majapahit claimed authority over much of modern Indonesia and parts of the Philippines and Malaysia. It is remembered today in Indonesia as a foundational pre-colonial state, and its territorial reach loosely prefigures the modern Indonesian nation.</p>

<p>Majapahit was the last great Hindu-Buddhist empire in Indonesia. By the 15th century, Islam was spreading rapidly through the archipelago via Muslim traders. Coastal sultanates — <strong>Demak</strong>, <strong>Aceh</strong>, <strong>Brunei</strong> — replaced Hindu courts. Today Indonesia is the world's largest Muslim-majority nation; Bali, with its still-Hindu population, is the most visible remnant of the older order.</p>

<h3>Mainland Mainstays: Vietnam, Burma, and the Thai</h3>
<p>Vietnam's medieval story is unique: it spent over a thousand years (111 BCE – 938 CE) as part of China, absorbing Chinese writing, Confucian governance, and Mahayana Buddhism. After winning independence at the Battle of <strong>Bach Dang</strong> (938) — where Vietnamese general Ngô Quyền famously planted iron-tipped stakes underwater to impale a Chinese fleet — Vietnam developed its own dynasties (Lý, Trần, Lê) and pushed steadily south, absorbing Cham and Khmer territories on its way to its modern shape.</p>

<p>In Burma, the <strong>Pagan Empire</strong> (849–1287) built a stunning landscape of over 10,000 Buddhist temples in its capital — many of which still stand on the plains of central Myanmar. To the east, Thai-speaking peoples migrated south from southern China and founded the kingdoms of <strong>Sukhothai</strong> (1238) and then <strong>Ayutthaya</strong> (1351), the latter a major regional power until destroyed by Burma in 1767.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a Europe-sized region in which a dozen different language families, three world religions, two great economic zones (mainland rice paddy and maritime archipelago), and roughly fifteen distinct civilisations all coexisted, traded, intermarried, and influenced one another for over a thousand years. That's medieval Southeast Asia. There's a reason it's so complicated to summarise.
</div>

<h3>The Coming of Islam and the Europeans</h3>
<p>By the 15th century, Islam had spread through the archipelago, the Spice Islands had been "discovered" by Europeans (Portuguese reached Malacca in 1511), and Southeast Asia was being drawn into a new global trading system that would, by the 19th century, see almost all of it under European colonial rule. But the medieval kingdoms — Angkor, Srivijaya, Majapahit, Pagan, Ayutthaya — left an extraordinary legacy: monuments, languages, religious traditions, and cultural confidence that survived colonisation and shaped the modern nations of the region.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Angkor Wat was originally dedicated to which religion?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Hinduism (Vishnu)</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Buddhism only, from the start</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Islam</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Southeast Asian medieval kingdoms aren't a footnote — they were among the largest, richest, and most architecturally astonishing societies of their day. Angkor Wat and Borobudur are world-class monuments. The region's success at absorbing successive cultural waves while keeping its own identity is one of the great stories of human history.
</div>

</div>`;

L["The Mongol Empire"] = `<div class="lesson-body">

<h3>The Largest Land Empire in History</h3>
<p>In the year 1200, the Mongols were a scattered handful of nomadic tribes on the high steppes of Central Asia, perhaps a million people in all, fighting each other over pastures and women. Within a single human lifetime, their empire stretched from Korea to Hungary, from Siberia to the Persian Gulf. It was the largest contiguous land empire that has ever existed — twice the size of the Roman Empire at its peak — and it was the work of one man and his descendants.</p>

<p>The Mongol conquest is one of history's most extreme inflection points. It killed perhaps 40 million people. It also created the conditions for the first true unification of the Eurasian world: a Pax Mongolica during which a merchant could ride from the Mediterranean to the Pacific in safety, ideas and technologies (including the Black Death) flowed across continents, and Marco Polo could spend 17 years in the court of a Mongol emperor of China.</p>

<h3>Temüjin Becomes Genghis Khan</h3>
<p>The man who would become <strong>Genghis Khan</strong> was born around 1162 to a minor steppe chieftain. His birth name was <strong>Temüjin</strong>. His father was poisoned when he was nine. His family was abandoned by their tribe and lived for years on the edge of starvation. Temüjin himself was captured and enslaved as a young man before escaping. He emerged from this hard early life with extraordinary military and political talents, an iron will, and a deep grudge against tribal politics.</p>

<p>Over twenty years, Temüjin united the Mongol tribes — by alliance, marriage, and ruthless warfare — and in 1206 was proclaimed <strong>Genghis Khan</strong> ("universal ruler") at a great assembly. He immediately reorganised Mongol society on military lines: every man became a soldier, the whole society was structured into units of ten, hundred, thousand, and ten thousand, and tribal loyalties were deliberately broken. He had built a war machine without precedent.</p>

<h3>The Conquest of Eurasia</h3>
<p>The Mongol military system was simple and devastating. Mongol warriors grew up on horseback. They could shoot a composite bow accurately at full gallop. They moved fast, lived light, and used psychological warfare ruthlessly: cities that surrendered were spared; cities that resisted were annihilated. Word spread, and many cities surrendered.</p>

<p>The conquests came in waves:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>1209–1227</strong> Genghis defeats the Tangut Western Xia, the Jin Dynasty in northern China, and the Khwarezmian Empire in Persia/Central Asia. The latter campaign was particularly brutal: cities like Samarkand, Bukhara, Merv, and Nishapur were systematically destroyed and their populations massacred. Some never recovered.</li>
<li><strong>1235–1241</strong> Genghis's sons and grandsons push into Russia, Poland, Hungary. Russian principalities are subjugated; the Mongols inflict shattering defeats on European armies at Liegnitz and Mohi (1241). Western Europe is saved only when the Great Khan Ögedei dies and the Mongol commanders return east to elect a new ruler.</li>
<li><strong>1258</strong> Hulagu Khan sacks <strong>Baghdad</strong>, kills the last Abbasid caliph, and ends 500 years of caliphate. The Tigris reportedly ran black with the ink of destroyed books and red with the blood of the dead.</li>
<li><strong>1260</strong> The Mongols are finally checked, at <strong>Ain Jalut</strong> in Palestine, by the Egyptian Mamluks — the first time a Mongol army of size loses a major battle.</li>
<li><strong>1271–1279</strong> Kublai Khan completes the conquest of China, founding the <strong>Yuan Dynasty</strong> as the first non-Chinese imperial line.</li>
</ul>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine if, over fifty years, a single state had conquered everything from Beijing to Vienna and Moscow to Damascus, and had done it with a population smaller than London's. That is what the Mongols did. The historical question that has obsessed historians for centuries is: <em>how</em>?
</div>

<h3>The Pax Mongolica</h3>
<p>The most surprising fact about the Mongol Empire is what came after the conquests. Once the killing stopped, the empire became extraordinarily open. The Mongols ran enormous postal relay systems, protected merchants on the Silk Road, employed administrators of every religion, and showed unusual religious tolerance for the era. Their courts swarmed with Chinese, Persian, Arab, Russian, Tibetan, and even European visitors.</p>

<p>The Italian merchant <strong>Marco Polo</strong> spent 17 years in the service of <strong>Kublai Khan</strong>, returning to write a book that astonished Europe with descriptions of paper money, mass cities, and porcelain. <strong>Ibn Battuta</strong>, the great Moroccan traveller, journeyed across the Mongol-influenced world from West Africa to China. The Pax Mongolica wasn't peaceful in any modern sense, but it was open in a way Eurasia had never been before — and arguably wouldn't be again until the 19th century.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event in 1241 saved Western Europe from continued Mongol invasion?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A massive European victory at Liegnitz</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The death of Great Khan Ögedei caused commanders to return east</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A peace treaty signed in Vienna</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Successor Khanates</h3>
<p>The empire was always meant to be ruled jointly by the descendants of Genghis. After his death (1227), it gradually split into four major khanates:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li>The <strong>Yuan Dynasty</strong> in China (under Kublai Khan and his successors, 1271–1368)</li>
<li>The <strong>Ilkhanate</strong> in Persia and the Middle East</li>
<li>The <strong>Chagatai Khanate</strong> in Central Asia</li>
<li>The <strong>Golden Horde</strong> in Russia and the western steppe</li>
</ul>

<p>Each followed a different trajectory. The Persian Ilkhans converted to Islam; the Yuan emperors in China became increasingly Sinicised before being driven out by the Ming in 1368; the Golden Horde imposed a 250-year "Tatar Yoke" on Russia that fundamentally shaped Russian political culture; the Chagatais splintered, eventually giving rise to Tamerlane (Timur).</p>

<h3>The Black Death and the Mongol Legacy</h3>
<p>The Mongol-protected trade routes that carried silk and silver also carried disease. Most historians now think the <strong>Black Death</strong> reached Europe via the Silk Road and Mongol trade networks, possibly with rats stowing aboard merchant caravans from Yunnan or the steppe. The pandemic that killed perhaps 30–60% of Europe's population was, in part, a tragic byproduct of Mongol unification.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
Genghis Khan's genetic legacy is, remarkably, measurable. A 2003 genetic study found that roughly <strong>1 in 200 men alive today</strong> — about 16 million people, mostly across Central Asia and east — share a Y-chromosome lineage that almost certainly descends from him or his immediate male relatives. He had many wives and concubines, and his sons after him inherited the same opportunities. Few individuals have left so direct a biological imprint on the world.
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Mongol Empire is unique in scale, speed, and consequence. It killed millions, ended the Abbasid Caliphate, devastated Persia, founded a Chinese dynasty, gave Russia a foreign occupation that shaped its politics, accidentally globalised the Silk Road, and possibly delivered the Black Death to Europe. Few states have changed Eurasia so completely in so little time.
</div>

</div>`;

L["Central Asia — Timurids & Turkic Peoples"] = `<div class="lesson-body">

<h3>The Steppe World That Shaped Civilisations</h3>
<p>For three millennia, the great grass corridor stretching from Hungary to Mongolia — the Eurasian steppe — was home to peoples who, periodically, exploded outward and reshaped the settled civilisations on its borders. Scythians, Huns, Avars, Bulgars, Khazars, Magyars, Pechenegs, Cumans, Mongols, Turks: all came out of the steppe. By the medieval period, the dominant population across most of this enormous belt were Turkic-speaking peoples, who would go on to found three of the world's great early modern empires — the Ottomans in the Mediterranean, the Safavids in Persia, and the Mughals in India.</p>

<p>This lesson covers the Turkic and Mongol-influenced world of Central Asia between roughly 600 and 1500 CE — and especially the empire of one extraordinary conqueror: <strong>Tamerlane</strong> (Timur).</p>

<h3>The Turkic Migrations</h3>
<p>The Turks first appear in Chinese sources as the <strong>Göktürks</strong> — "Sky Turks" — who founded a great steppe empire in 552 CE that briefly stretched from Manchuria to the Black Sea. The Göktürk Khaganate eventually fragmented, but Turkic-speaking peoples spread outward in successive waves. By 1000 CE, Turkic warriors were everywhere: in the bodyguards of the Abbasid Caliphs (where they often became kingmakers), in the Byzantine military, in the steppe north of China, and increasingly, as a distinct settled-and-mounted population, in what is now Iran and Anatolia.</p>

<p>The conversion of most Turkic peoples to <strong>Islam</strong> happened gradually between the 8th and 11th centuries. By the time the Seljuk Turks defeated the Byzantine emperor at <strong>Manzikert</strong> in 1071, the Turks were arriving in the Middle East not as pagan raiders but as Muslim warriors bringing their own variety of Islamic civilisation.</p>

<h3>The Seljuks and the Sultanate</h3>
<p>The <strong>Seljuk Empire</strong> (1037–1194) was the first major Turkic Muslim state to control the heartlands of the old Abbasid Caliphate. Its founder, <strong>Tughril Beg</strong>, took Baghdad in 1055 — not destroying the Caliph but making him a religious figurehead while the Seljuk <em>Sultan</em> (a new title, meaning "authority") held real power. This division of religious authority and political authority would define Sunni Islamic governance for centuries.</p>

<p>Under the Seljuks, Persian-language culture flourished alongside Arabic. The poet <strong>Omar Khayyam</strong> (d. 1131), the philosopher <strong>al-Ghazali</strong>, and the great vizier and political theorist <strong>Nizam al-Mulk</strong> all worked in this period. Nizam al-Mulk's <em>Siyasatnama</em> ("Book of Government") became a classic of Islamic political thought.</p>

<h3>Samarkand, Bukhara & the Silk Road Cities</h3>
<p>The cultural heart of medieval Central Asia was a constellation of cities along the Silk Road in the region between the Amu Darya and Syr Darya rivers — historically called <strong>Transoxiana</strong>. <strong>Samarkand</strong>, <strong>Bukhara</strong>, <strong>Khwarezm</strong>, <strong>Merv</strong>, <strong>Balkh</strong>: these were among the wealthiest and most learned cities in the world during the 9th–12th centuries.</p>

<p>Bukhara housed the great library where the philosopher <strong>Ibn Sina (Avicenna)</strong> learned medicine. Samarkand was renowned for paper-making (a Chinese technology that arrived via captured Chinese craftsmen at the Battle of Talas in 751 CE). The astronomer <strong>al-Biruni</strong>, the poet <strong>Rudaki</strong>, and dozens of other scholars whose names appear in medieval encyclopedias worked in this region.</p>

<p>Then came the Mongols. In 1219–1221, Genghis Khan's armies destroyed almost every major city in Transoxiana. Samarkand, Bukhara, and Merv were sacked and partially depopulated. It was a regional catastrophe.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why did the Seljuks let the Abbasid Caliph stay in office after taking Baghdad in 1055?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">They were defeated and couldn't depose him</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Caliph kept religious legitimacy while the Sultan held real power</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Caliph converted them to Sunni Islam in exchange</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Tamerlane (Timur, 1336–1405)</h3>
<p>Out of the post-Mongol fragmentation rose <strong>Timur</strong>, known in the West as <strong>Tamerlane</strong> ("Timur the Lame," from a battle wound). Born in 1336 to a minor Turco-Mongol clan near Samarkand, Timur claimed descent from Genghis Khan (probably a fiction), styled himself a defender of Islam, and proceeded over thirty years to conquer most of the territory between Delhi and Damascus.</p>

<p>He sacked Delhi (1398) so brutally that the city took a century to recover. He devastated Baghdad and Damascus. He defeated and captured the Ottoman Sultan Bayezid I at <strong>Ankara</strong> in 1402 — postponing the Ottoman conquest of Constantinople by half a century. He built towers of skulls outside conquered cities. By any measure, Timur was an extraordinary military commander and a personally ferocious ruler.</p>

<p>And yet — he was also a patron of high culture. He brought captured artisans, architects, and scholars from across his empire to Samarkand, which he rebuilt into one of the most architecturally splendid cities of the medieval world. The <strong>Bibi-Khanym Mosque</strong>, the mausoleum complex of <strong>Shah-i-Zinda</strong>, and Timur's own tomb the <strong>Gur-e-Amir</strong> remain breathtaking. Timur's empire was a paradox: built on slaughter, decorated like paradise.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Mughal Empire of India — perhaps the most magnificent of the early-modern Islamic empires — was founded by <strong>Babur</strong>, a Timurid prince and direct descendant of both Tamerlane and Genghis Khan. The Taj Mahal is, in a sense, a Timurid building. The Central Asian steppe-nomadic tradition had reached, by 1631, the banks of the Yamuna in Agra.
</div>

<h3>The Timurid Renaissance</h3>
<p>Timur's heirs proved poor military leaders but excellent patrons. The 15th century saw a <strong>Timurid Renaissance</strong> centred on <strong>Herat</strong> in modern Afghanistan, where Sultan <strong>Husayn Bayqara</strong> presided over a dazzling court. The miniature-painter <strong>Bihzad</strong>, the poet <strong>Jami</strong>, and the polymath statesman <strong>Mir Ali Shir Nava'i</strong> (who wrote in Chagatai Turkish to prove it could be a literary language) all worked there. <strong>Ulugh Beg</strong> (Timur's grandson) built a great astronomical observatory in Samarkand that produced one of the most accurate star catalogues of the pre-modern world.</p>

<h3>The Three Gunpowder Empires</h3>
<p>By 1500, the Timurid Empire was crumbling. But its political and cultural style — Turco-Mongol military aristocracy, Persian high culture, Sunni or Shia Islamic legitimisation — would be inherited by three new empires that dominated the Islamic world into the modern era:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li>The <strong>Ottomans</strong> (Anatolia and the Mediterranean) — covered in their own Era 4 lesson</li>
<li>The <strong>Safavids</strong> (Persia, distinctively Shia) — founded in 1501 by Shah Ismail</li>
<li>The <strong>Mughals</strong> (India) — founded in 1526 by Babur, a Timurid prince</li>
</ul>

<p>All three drew on the steppe-nomadic political tradition while ruling settled, agricultural empires. All three were Turkic-Mongol in origin and Persian in court culture.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which of these dynasties was directly descended from Tamerlane?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Ottomans</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Mughals</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Safavids</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Central Asia is often imagined as a periphery — but for most of the medieval period, its cities were among the world's wealthiest, its scholars among the most influential, and its warlords among the most consequential. The Turkic and Mongol peoples of the steppe gave rise, directly or indirectly, to the three great Islamic empires of the early modern era: Ottoman, Safavid, and Mughal.
</div>

</div>`;

L["African Kingdoms"] = `<div class="lesson-body">

<h3>A Continent of Civilisations</h3>
<p>One of the most persistent myths about Africa is that it was a "blank slate" before European colonialism — a continent without kings, kingdoms, cities, scholarship, or technology. The truth is the opposite. By the medieval period, Africa was home to some of the world's wealthiest empires, most learned cities, and most sophisticated craft traditions. The empires of Mali and Songhai dwarfed contemporary European kingdoms in territory and wealth. Timbuktu's libraries rivalled any in Europe. The stone cities of Great Zimbabwe and the trading ports of the Swahili coast were nodes in a global economy that stretched from Cairo to China.</p>

<p>That this story is so often left out of "world history" courses says more about the limits of European source material than about the realities of medieval Africa.</p>

<h3>Aksum: Christian Africa</h3>
<p>One of the great early African states was <strong>Aksum</strong>, in what is now northern Ethiopia and Eritrea. By the 4th century CE, Aksum was a major trading kingdom — listed by a Persian writer of the 3rd century as one of the four great empires of the world, alongside Rome, Persia, and China. It minted its own coinage, traded with India, and erected enormous granite obelisks (some over 30 metres tall) at its capital.</p>

<p>Around 330 CE, King <strong>Ezana</strong> of Aksum converted to Christianity, making Ethiopia one of the earliest Christian states in the world — older than most of Europe. Ethiopian Christianity (the Ethiopian Orthodox Tewahedo Church) developed in relative isolation, preserving traditions and books — including parts of the Old Testament Apocrypha — that other Christian traditions lost. The remarkable rock-cut churches of <strong>Lalibela</strong>, carved out of solid stone in the 12th century, remain places of pilgrimage today.</p>

<h3>Trans-Saharan Trade and the Rise of Ghana</h3>
<p>The Sahara — a desert the size of the United States — has often been imagined as a barrier. It wasn't. From at least the 4th century CE, traders crossed it on camel caravans, exchanging Saharan salt for West African gold, slaves, and ivory. The salt-for-gold trade made some of West Africa the wealthiest region on Earth.</p>

<p>The first major beneficiary was the <strong>Empire of Ghana</strong> (c. 700–1240 CE) — confusingly, located not in modern Ghana but in modern Mauritania and Mali. Ghana controlled the southern end of the trans-Saharan trade and grew rich taxing it. Arab geographers wrote awed descriptions of its capital and its court, where the king reportedly tied his horses to gold-encrusted ropes.</p>

<h3>The Empire of Mali and Mansa Musa</h3>
<p>Ghana fell to nomadic invaders in the 11th century, and out of its successor states rose the <strong>Empire of Mali</strong> (c. 1235–1670). Founded by the warrior-king <strong>Sundiata Keita</strong> — whose epic story is preserved in oral tradition by West African griots to this day — Mali became one of the largest, richest, and most cosmopolitan empires of the medieval world.</p>

<p>Its most famous ruler was <strong>Mansa Musa</strong> (r. 1312–1337). On his pilgrimage to Mecca in 1324, Musa travelled with a caravan of 60,000 followers and 80 camels each carrying gold dust. He distributed so much gold in Cairo that he caused a regional inflation lasting over a decade. His name appeared on European maps; the famous Catalan Atlas of 1375 shows him on a throne, holding a gold nugget. Some modern estimates make him the wealthiest individual in human history.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
After Mansa Musa's pilgrimage, scholars and books from across the Islamic world were drawn to <strong>Timbuktu</strong>, which became a major centre of learning. Its libraries housed perhaps 700,000 manuscripts — works of theology, law, astronomy, mathematics, medicine, and poetry. Many were preserved by local families through colonisation and the 2012 jihadist occupation. The "Timbuktu manuscripts" are now an active subject of scholarly research.
</div>

<h3>Songhai and the Sahel</h3>
<p>Mali's successor in the 15th and 16th centuries was the <strong>Songhai Empire</strong> (c. 1464–1591), based at <strong>Gao</strong> on the Niger. Under <strong>Sunni Ali</strong> and his successor <strong>Askia Muhammad</strong>, Songhai was the largest empire in West African history — bigger than Western Europe — with a sophisticated bureaucracy, a standing professional army, and a tax system that funded scholarship and infrastructure.</p>

<p>Songhai fell suddenly in 1591 when a Moroccan army crossed the Sahara armed with European gunpowder weapons and shattered Songhai's larger but musket-less forces at the Battle of Tondibi. The collapse of Songhai marked the end of large-scale state power in the Sahel for centuries.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What did the Empire of Mali tax to become so wealthy?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Spice imports from India</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Trans-Saharan trade in gold and salt</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Manufactured cotton textiles</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Great Zimbabwe and the Southern Stone Cities</h3>
<p>In southern Africa, between roughly 1100 and 1450 CE, a major city of stone walls, towers, and ritual structures rose at <strong>Great Zimbabwe</strong> (in modern Zimbabwe — the country took its name from the site). Its dry-stone walls, some up to 11 metres high, were built without mortar by skilled masons of the Shona-speaking peoples. At its peak, the city had perhaps 18,000 inhabitants and was the centre of an empire trading gold and ivory with the Swahili coast.</p>

<p>For decades, European archaeologists in colonial Rhodesia refused to credit the site to local Africans, attributing it to Phoenicians or "lost civilisations." This was politically motivated. Modern archaeology has confirmed beyond doubt that Great Zimbabwe was built by the ancestors of the local Shona population — and that it was one of dozens of stone-walled urban sites across the region.</p>

<h3>The Swahili Coast</h3>
<p>Along the East African coast — modern Kenya, Tanzania, Mozambique — a chain of trading city-states grew up between the 8th and 15th centuries: <strong>Kilwa</strong>, <strong>Mombasa</strong>, <strong>Zanzibar</strong>, <strong>Sofala</strong>. They were Muslim, Swahili-speaking (Bantu base, heavily Arabic-influenced), and oriented toward the Indian Ocean rather than the African interior.</p>

<p>Swahili merchants traded gold, ivory, and slaves out, and silks, ceramics, and beads in. Chinese porcelain shards have been found buried in Kilwa; Kilwa coins have been found in Australia. When the Portuguese arrived in 1498 with Vasco da Gama, the Swahili cities were already plugged into a global maritime economy that the Portuguese could only disrupt, not really replace.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine being told that "Europe" had no real history before the Roman conquest — that everything before was just tribes. That's the kind of erasure pre-colonial Africa has suffered in many Western classrooms. The reality is that Africa was home to world-significant civilisations for the entire medieval period: Christian Aksum, Muslim Mali and Songhai, the stone-walled cities of the south, the Swahili merchant ports of the east.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What does Great Zimbabwe tell us about pre-colonial southern Africa?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was built by Phoenician colonists</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Local Shona-speaking peoples built sophisticated stone cities</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">There were no urban centres in the region until the colonial era</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Pre-colonial Africa was a continent of complex states, global trade, sophisticated craft, and major cities. From Christian Ethiopia to gold-rich Mali to Indian Ocean–facing Swahili ports to the stone capitals of Zimbabwe, Africa was woven into the medieval world economy. The colonial-era myth of an "empty" Africa is precisely that — a myth.
</div>

</div>`;

L["Polynesian Voyaging & Pacific Peoples"] = `<div class="lesson-body">

<h3>The Greatest Navigators in History</h3>
<p>Before any European had crossed the Atlantic, before any Chinese fleet had reached Australia, before the Vikings sailed to Newfoundland, an Austronesian-speaking maritime people from somewhere in present-day Taiwan or coastal China had already settled territory across an area of the Pacific Ocean larger than all of Asia, Europe, and Africa combined. They reached Madagascar to the west, Hawaii to the north, Easter Island to the east, and New Zealand to the south. They did this in canoes — sophisticated double-hulled outrigger vessels — using only stars, wave patterns, and the flight of birds for navigation.</p>

<p>This is among the most extraordinary achievements in human history, and it is almost entirely absent from most "world history" curricula. The Polynesians, and the wider Austronesian-speaking peoples of the Pacific and Indian Oceans, settled more of the Earth's surface, by area, than any civilisation before the modern age.</p>

<h3>The Austronesian Expansion</h3>
<p>Modern genetic, linguistic, and archaeological evidence suggests that all the peoples of the Pacific — Polynesians, Melanesians (in part), Micronesians, and the indigenous peoples of Madagascar, the Philippines, and Indonesia — descend from a single Austronesian-speaking population that originated in <strong>Taiwan</strong> roughly 5,000 years ago. From there they expanded south through the Philippines, west into Indonesia, and east into the Pacific over thousands of years.</p>

<p>The technology that made this possible was the <strong>outrigger canoe</strong> and the <strong>double-hulled voyaging canoe</strong> — vessels stable enough to ride open ocean swells, fast enough to make long-distance crossings, and capacious enough to carry families plus the plants (taro, breadfruit, coconut, sweet potato) and animals (pigs, chickens, dogs) needed to colonise an empty island.</p>

<h3>Settling the Pacific</h3>
<p>By around 1500 BCE, Austronesian voyagers — the so-called <strong>Lapita culture</strong>, named after a distinctive style of pottery — had reached as far east as Tonga and Samoa. They paused there for over a thousand years.</p>

<p>Then, around the early centuries CE, they began the long-distance push that filled the rest of the Pacific:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The Marquesas Islands</strong> — settled around 200 CE</li>
<li><strong>Hawaii</strong> — settled c. 400–800 CE, more than 2,000 miles from the nearest land</li>
<li><strong>Easter Island (Rapa Nui)</strong> — settled c. 800–1200 CE, one of the most isolated places on Earth</li>
<li><strong>New Zealand (Aotearoa)</strong> — settled c. 1280 CE by the Māori, the last major landmass on Earth to be permanently colonised by humans</li>
</ul>

<p>Across this enormous triangle — Hawaii, Easter Island, New Zealand — Polynesian languages and cultures remained mutually intelligible enough that an 18th-century Tahitian, <strong>Tupaia</strong>, could communicate with the New Zealand Māori (some 2,500 miles away) when he sailed with Captain Cook.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Polynesians achieved something equivalent to settling the entire Atlantic Ocean — Iceland, Greenland, the Azores, Madeira, the Canaries, Cape Verde, plus all of North and South America's islands — using only canoes and stars. And they did it long before Europe could imagine such a feat. The first Hawaiians had been farming the islands for centuries before Europe knew Hawaii existed.
</div>

<h3>Wayfinding</h3>
<p>How did they navigate? Without compasses, charts, or sextants, Polynesian navigators used a sophisticated mental toolkit: the rising and setting points of stars (memorising over 200 of them); the direction and shape of ocean swells reflecting off invisible distant islands; cloud patterns above land; the flight paths of land-nesting seabirds; the colour of water; even the scent of distant vegetation carried on the wind.</p>

<p>This <span class="vocab-pill">wayfinding</span> tradition was very nearly lost in the colonial era. It was rebuilt in the 1970s by a Micronesian master navigator named <strong>Mau Piailug</strong>, who taught Hawaiian sailors to sail the modern voyaging canoe <em>Hōkūle'a</em> from Hawaii to Tahiti and back without any modern instruments. The voyage proved that traditional methods worked — and helped revive an entire dimension of Pacific cultural identity.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which was the last major landmass on Earth to be permanently settled by humans?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Iceland</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Greenland</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">New Zealand</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Easter Island: A Puzzle in Stone</h3>
<p>The most isolated of all Polynesian settlements, <strong>Rapa Nui</strong> (Easter Island), lies 2,200 km from the nearest inhabited island. Its people, who arrived around 800–1200 CE, built nearly 1,000 enormous stone statues — the famous <strong>moai</strong> — averaging four metres tall, weighing up to 80 tonnes, carved from volcanic tuff and dragged across the island.</p>

<p>For decades, popular writers told a story of Rapa Nui as ecological self-destruction: the islanders cut down all the trees, lost their canoe-building wood, suffered famine, and warred among themselves. Recent scholarship complicates this. Polynesian rats (introduced by the settlers) probably did most of the deforestation by eating tree seeds. The islanders survived, adapted, and were still on the island when Europeans arrived in 1722. The collapse, when it came, was driven by introduced disease and 19th-century slave raids, not pre-contact resource exhaustion.</p>

<h3>Aotearoa: New Zealand and the Māori</h3>
<p>The Māori arrived in <strong>Aotearoa</strong> (New Zealand) around 1280 CE, in a series of voyages that oral tradition still preserves the names of. They encountered an enormous land — much bigger than any Polynesian island — full of unfamiliar species, including the <strong>moa</strong>: giant flightless birds up to 3.6 metres tall. The moa were hunted to extinction within two centuries (a sobering example of human ecological impact), and the Māori adapted to a colder, more temperate climate by inventing new technologies and developing the elaborate carved meeting house (<em>wharenui</em>) tradition.</p>

<p>Māori society was organised into <em>iwi</em> (tribes) and <em>hapū</em> (clans), with sophisticated oral traditions, intricate tattooing (<em>tā moko</em>), the haka (ceremonial war dance, still performed by New Zealand sports teams), and a complex system of mana (prestige/spiritual force) and tapu (sacred restriction). When Cook arrived in 1769, the Māori had been the sole inhabitants of New Zealand for nearly 500 years.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The voyaging canoe <strong>Hōkūle'a</strong>, built in Hawaii in 1975, has now sailed throughout the Pacific and even circumnavigated the world (2014–2017) — using only traditional Polynesian wayfinding techniques. Each voyage is a living demonstration that pre-modern Pacific peoples really did navigate the way the oral traditions said they did. The science settled the debate. The science was correct: the Polynesians were among the greatest navigators humanity has ever produced.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What were Polynesian wayfinders chiefly using to navigate?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Magnetic compasses</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Star paths, swells, birds, and cloud patterns</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">European maps acquired from early traders</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Pacific is the largest "settled space" in human history, and it was filled by an Austronesian-speaking civilisation using oceangoing canoes and instrument-free wayfinding. Polynesian peoples — the Hawaiians, Tahitians, Māori, Samoans, and dozens more — share a common origin and a common set of remarkable seafaring achievements that European navigators only matched centuries later, and that European chroniclers only began to take seriously much more recently.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 4: EARLY MODERN ERA
// ═══════════════════════════════════════════════════════

L["The Renaissance"] = `<div class="lesson-body">

<h3>A Rebirth — But of What?</h3>
<p>"Renaissance" means "rebirth" in French — and the people of 14th and 15th-century Italy who lived through it were quite clear about what they thought was being reborn: the lost glory of classical antiquity. After a thousand "middle" years (whence the term <em>medieval</em>), they believed, Europe was finally recovering the wisdom, art, and humanity of Greece and Rome. Whether or not the Middle Ages were really as dark as they painted them (they weren't), the cultural movement they launched produced one of history's great explosions of art, science, and thought.</p>

<p>The Renaissance is conventionally dated from around 1350 (the lifetime of <strong>Petrarch</strong>) to about 1600. It began in Italy, especially Florence, and spread north over the following two centuries. By its end, Europe had Leonardo, Michelangelo, Shakespeare, Cervantes, and Galileo. The medieval framework hadn't been abolished, but it had been challenged in nearly every direction at once.</p>

<h3>Why Italy?</h3>
<p>Several factors made Italy the cradle. It was the most urbanised part of Europe, with rich merchant city-states like <strong>Florence</strong>, <strong>Venice</strong>, <strong>Milan</strong>, and <strong>Genoa</strong>. It had the physical remains of Roman antiquity all around — ruins, statues, inscriptions — making "rebirth" feel literal. It had close trading contact with the Byzantine and Islamic worlds, which had preserved Greek manuscripts that the Latin West had lost. After 1453, Greek scholars fleeing the fall of Constantinople brought their libraries with them.</p>

<p>And it had wealthy patrons willing to fund art on a previously unseen scale. The <strong>Medici</strong> bankers of Florence — especially <strong>Cosimo</strong> (1389–1464) and <strong>Lorenzo "the Magnificent"</strong> (1449–1492) — used their fortune to subsidise sculptors, painters, philosophers, and architects. The popes, after returning to Rome from Avignon, did the same on an even grander scale, commissioning St. Peter's Basilica, the Sistine Chapel ceiling, and the Vatican's vast collections.</p>

<h3>Humanism — A New Way of Thinking</h3>
<p>The intellectual core of the Renaissance was <span class="vocab-pill">humanism</span> — a movement that emphasised the dignity, capability, and worth of the individual human being and turned to classical (especially Roman) sources for moral and educational guidance. Humanists studied Greek, Latin, history, rhetoric, and philosophy — the <em>studia humanitatis</em>, from which we get "humanities."</p>

<p>Humanism was not anti-religious — most humanists were sincere Christians — but it shifted attention from the next world to this one. Pico della Mirandola's <em>Oration on the Dignity of Man</em> (1486) declared that humans were free to make of themselves what they would. Erasmus of Rotterdam used humanist scholarship to produce a critical Greek New Testament that would help spark the Reformation. Niccolò Machiavelli's <em>The Prince</em> (1513) analysed politics on its own terms, without theological scaffolding — a frankness that scandalised contemporaries.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The medieval mind asked, "How does this fit into God's order?" The Renaissance mind asked, "What can a human being know, build, and achieve?" Both questions were valid. But moving the second one to the foreground changed everything that came after — including modern science, modern politics, and modern art.
</div>

<h3>The Visual Revolution</h3>
<p>Renaissance art looks different from medieval art because Renaissance artists were doing something different. They studied anatomy by dissecting cadavers (sometimes illegally). They mastered the geometric rules of <span class="vocab-pill">perspective</span>, allowing them to depict three-dimensional space on a flat surface. They painted with oil paints (a Flemish innovation) that allowed luminous colour and fine detail. They saw themselves not as anonymous craftsmen but as creative geniuses worthy of personal fame.</p>

<p>The early Florentine pioneers — <strong>Brunelleschi</strong> (who designed the dome of Florence Cathedral, an engineering marvel), <strong>Donatello</strong>, <strong>Masaccio</strong> — established the new style. The High Renaissance (c. 1490–1527) produced the artists most people know:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Leonardo da Vinci</strong> (1452–1519) — painter of the <em>Mona Lisa</em> and <em>The Last Supper</em>, but also engineer, anatomist, inventor, and obsessive notebook-keeper. The original "Renaissance man."</li>
<li><strong>Michelangelo Buonarroti</strong> (1475–1564) — sculptor of <em>David</em> and the <em>Pietà</em>, painter of the Sistine Chapel ceiling, and (reluctantly) architect of St. Peter's dome.</li>
<li><strong>Raphael</strong> (1483–1520) — master of harmonious composition, painter of the <em>School of Athens</em> in the Vatican.</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The dome of <strong>Florence Cathedral</strong>, completed by <strong>Filippo Brunelleschi</strong> in 1436, was for centuries the largest in the world. Brunelleschi figured out how to build it without a wooden centring frame (which would have needed an entire forest), using a herringbone brick pattern self-supporting at every layer. Modern engineers still aren't entirely sure how he did it. He kept his methods secret to prevent rivals from copying him.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Italian banking family was the greatest patron of Renaissance Florence?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Borgias</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Medici</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Visconti</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Northern Renaissance</h3>
<p>The Renaissance moved north of the Alps in the late 15th century, taking on a different character. Northern artists — <strong>Jan van Eyck</strong>, <strong>Albrecht Dürer</strong>, <strong>Hieronymus Bosch</strong>, <strong>Pieter Bruegel</strong> — combined Italian techniques with a meticulous, almost obsessive attention to surface detail. Northern humanism focused more on biblical scholarship and moral reform — directly feeding into the Reformation, which would erupt in 1517.</p>

<p>The <strong>printing press</strong>, invented by <strong>Johannes Gutenberg</strong> around 1450, was a Northern Renaissance technology that transformed everything. Books that had taken months to copy by hand could now be produced in hundreds. Literacy expanded. Knowledge spread. Religious dissent became impossible to suppress. By 1500, perhaps 20 million printed books circulated in Europe, where there had been almost none before Gutenberg.</p>

<h3>Science Begins Its Revolution</h3>
<p>The Renaissance also planted the seeds of the <strong>Scientific Revolution</strong>. <strong>Copernicus</strong> (1473–1543) proposed in 1543 that the Earth orbited the Sun rather than vice versa — a quiet bombshell whose full implications would only detonate in the next century. <strong>Andreas Vesalius</strong> revolutionised anatomy by basing medicine on direct observation rather than ancient authority. <strong>Galileo Galilei</strong> (1564–1642) — using a recently invented telescope — saw moons orbiting Jupiter and craters on the Moon, supporting Copernicus.</p>

<p>This was a slow, contested shift. Galileo was put under house arrest by the Inquisition. Most early scientists thought of themselves as natural philosophers within a Christian framework. But the seeds of modernity — empirical observation, mathematical description of nature, scepticism toward inherited authority — were planted in this period.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Why was the printing press (c. 1450) so transformative?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It made books impossible to copy by hand</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It massively expanded the spread of literacy and dissenting ideas</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It replaced all parchment with paper</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Renaissance wasn't a single thing — it was a long, complicated revaluation of human knowledge, art, religion, and possibility. By 1600, Europe had: a new visual style, a new technology of mass communication, a recovered classical canon, a humanist worldview, the seeds of modern science, and a religious crisis. Modernity didn't begin in 1500 — but you can see, with hindsight, that the modern world started taking shape there.
</div>

</div>`;

L["Pre-Columbian Americas"] = `<div class="lesson-body">

<h3>Two Continents, Many Civilisations</h3>
<p>When Christopher Columbus stumbled onto the Caribbean in 1492, he encountered a hemisphere that had been inhabited for at least 15,000 years and was home to perhaps <strong>50–100 million people</strong> — possibly more than the population of Europe at the time. The Americas were not "empty" or "untouched." They were full of cities, kingdoms, agricultural systems, religions, and trade networks that had developed completely independently of the Old World for thousands of years.</p>

<p>The collision that began in 1492 erased much of this. Within a century, perhaps 90% of the indigenous population had died — mostly from European diseases against which they had no immunity. Cities collapsed. Whole civilisations vanished. What we know about the pre-Columbian Americas comes from archaeology, surviving codices, oral tradition, and fragmentary written accounts. It is a story of loss, but also of extraordinary cultural achievement.</p>

<h3>The First Americans</h3>
<p>Humans first reached the Americas during the last Ice Age, somewhere between 20,000 and 15,000 years ago. The traditional theory has people walking across <strong>Beringia</strong> — the dry land that connected Siberia and Alaska when sea levels were lower. New evidence (some sites in Chile, Mexico, and the U.S. show even earlier dates) suggests there may have been multiple migration waves, possibly along the Pacific coast.</p>

<p>From these earliest Americans descended every indigenous people of the New World — Inuit and Cree, Iroquois and Cherokee, Maya and Aztec, Inca and Mapuche, Tupi and Yanomami, and hundreds of others. Within a few thousand years they had spread from Alaska to Tierra del Fuego.</p>

<h3>The Mesoamerican World: Olmecs to Maya</h3>
<p>The first complex society in Mesoamerica was the <strong>Olmec</strong> (c. 1500–400 BCE), in the lowlands of modern Veracruz and Tabasco. They are famous for their colossal carved stone heads (some over three metres tall), early hieroglyphic writing, and a calendar system that would influence everything that came after. Olmec religion, agriculture, and political organisation set the template for Mesoamerica.</p>

<p>The next great civilisation was the <strong>Maya</strong> (peaking c. 250–900 CE) in the rainforests of southern Mexico, Guatemala, Belize, and Honduras. The Maya built dozens of city-states — <strong>Tikal</strong>, <strong>Palenque</strong>, <strong>Calakmul</strong>, <strong>Copán</strong> — with stepped pyramids, ball courts, and observatories. They developed:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>The most sophisticated writing system in the pre-Columbian Americas — partly logographic, partly phonetic, only fully decoded in the late 20th century.</li>
<li>An astonishing astronomical and calendrical system, including a base-20 number system that used zero.</li>
<li>Mathematical and astronomical observations that allowed precise predictions of eclipses and the cycles of Venus.</li>
</ul>

<p>The classic Maya cities mysteriously collapsed around 800–950 CE — probably due to drought, deforestation, war, and political failure. But the Maya themselves did not disappear. Maya peoples still live in their ancestral homelands today, speaking their languages and maintaining traditions.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What writing system was the most fully developed in the pre-Columbian Americas?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Aztec hieroglyphs</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Maya script</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Inca quipu</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Aztecs (Mexica)</h3>
<p>The <strong>Aztecs</strong> — more accurately called the <strong>Mexica</strong> — were latecomers to the Mesoamerican stage. A migrant people from the north, they founded their capital <strong>Tenochtitlán</strong> on a swampy island in Lake Texcoco around 1325 CE. They built their city on engineered platforms (chinampas), with magnificent pyramids, causeways, an enormous market, and (according to Spanish witnesses) cleaner streets than any European city.</p>

<p>Through alliance and conquest, the Aztecs assembled a tribute empire of perhaps 5–6 million subjects. Their religion is famous (and infamous) for ritual human sacrifice, justified as feeding the sun god Huitzilopochtli. Sacrifice was, in fact, widespread across pre-Columbian Mesoamerica; Aztec scale was unusual.</p>

<p>When <strong>Hernán Cortés</strong> arrived in 1519, Tenochtitlán may have had 200,000 inhabitants — larger than any city in Europe except possibly Constantinople. Cortés destroyed it in 1521, with the help of indigenous allies who hated Aztec rule, smallpox that ravaged the defenders, and Spanish horses, steel, and gunpowder. Modern Mexico City is built on its ruins.</p>

<h3>The Inca: Empire of the Andes</h3>
<p>While Mesoamerica had multiple competing civilisations, South America's Andean coast had a single great empire by the 1400s: the <strong>Inca</strong>. From their capital at <strong>Cuzco</strong>, the Inca ruled — at their peak around 1500 — an empire stretching nearly 4,000 kilometres along the spine of the Andes, from modern Colombia to central Chile. It was the largest empire in the Americas and the largest the New World would see until the European-conquered states of the 19th century.</p>

<p>The Inca administrative achievement was extraordinary. Their empire had:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li>An imperial road network of perhaps <strong>40,000 kilometres</strong> traversing some of the most rugged terrain on Earth, with stone-paved sections and rope suspension bridges that astonished the Spanish.</li>
<li>The <strong>quipu</strong> — a system of knotted strings used to record numerical and possibly other information without writing.</li>
<li>An economy without money or markets in the European sense — based on labour tribute (<em>mit'a</em>), state storehouses, and redistribution.</li>
<li>Engineering feats like <strong>Machu Picchu</strong>, <strong>Cuzco</strong>, and the agricultural terraces of the Sacred Valley.</li>
</ul>

<p>The Inca empire fell to <strong>Francisco Pizarro</strong> in 1532–1533. Pizarro had only 168 men. He won by capturing the emperor <strong>Atahualpa</strong> at Cajamarca, exploiting an active civil war within the Inca elite, and benefiting from smallpox that had already killed the previous emperor and most of his court.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Inca road called the <strong>Qhapaq Ñan</strong> ran from Quito (Ecuador) to Mendoza (Argentina) through some of the world's highest mountains. Sections at 5,000 metres above sea level are still walkable. UNESCO listed it as a World Heritage site in 2014. It was built without iron tools, the wheel, or pack animals larger than the llama. As pure logistics, it is comparable to the Roman roads — built without their resources.
</div>

<h3>North American Civilisations</h3>
<p>North America too had complex, agricultural societies long before Europeans arrived. The <strong>Mississippian</strong> culture (c. 800–1600 CE) built large mound-cities; <strong>Cahokia</strong>, near modern St. Louis, had perhaps 20,000 inhabitants in 1100 CE — larger than London at the time. The <strong>Ancestral Puebloans</strong> ("Anasazi") built the elaborate stone-and-adobe complexes of <strong>Chaco Canyon</strong> and the cliff dwellings of <strong>Mesa Verde</strong>. The <strong>Iroquois Confederacy</strong> developed a sophisticated political union — sometimes credited as a partial inspiration for American federalism — that pre-dated the European arrival.</p>

<h3>The Columbian Exchange</h3>
<p>Once Old World and New World met in 1492, a vast biological and cultural exchange began. The Americas gave the world: <strong>maize, potatoes, tomatoes, chillies, chocolate, vanilla, tobacco, rubber, peanuts, sweet potatoes, cassava, sunflowers, and turkey</strong>. The Old World gave the Americas: <strong>wheat, sugar, coffee, horses, cattle, pigs, chickens, sheep, goats — and smallpox, measles, influenza, and many other lethal diseases</strong>.</p>

<p>The disease impact was apocalyptic. By 1600, perhaps <strong>90% of the pre-Columbian American population had died</strong>. This was the largest demographic catastrophe in human history. Whole language families went extinct. Whole civilisations were erased. The "empty wilderness" North American settlers later encountered was, in many places, recently emptied land — vacated by epidemics that had moved faster than the colonists themselves.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the chief cause of mass death among indigenous peoples after 1492?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">European weapons in direct combat</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Eurasian diseases against which they had no immunity</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Famine caused by the destruction of crops</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The pre-Columbian Americas were home to civilisations as old, complex, and accomplished as anything in Europe. They built the world's largest pre-industrial road network, developed the most sophisticated calendar of the medieval world, and farmed crops that would later feed half the planet. The encounter that began in 1492 was not a discovery of empty land — it was the meeting of two old, full worlds, with consequences that reshaped both forever.
</div>

</div>`;

L["Age of Exploration"] = `<div class="lesson-body">

<h3>The World Becomes One</h3>
<p>For most of human history, the Old World and the New World, Eurasia and the Pacific, knew almost nothing of each other. By 1600, this had ended. European mariners had circumnavigated the globe, reached Japan and the Indonesian archipelago, established colonies on three continents, and created the first truly global trade network. The "Age of Exploration" — roughly 1450 to 1600 — is one of the most consequential periods in human history. It linked the world together. It also unleashed colonisation, slavery, and ecological collision on an unprecedented scale.</p>

<p>What's worth remembering at the start: Europeans were not the only people exploring. Polynesian voyagers had reached every habitable Pacific island. Chinese fleets under <strong>Zheng He</strong> sailed to East Africa in the early 1400s. Arab and Indian traders dominated the Indian Ocean. What was different about European exploration was not its existence but its outcome: a sustained, profit-driven, state-backed expansion that ultimately created colonial empires spanning the globe.</p>

<h3>Why Europeans? Why Then?</h3>
<p>Several factors converged. <strong>Demand</strong>: Europeans wanted spices, silk, and gold from Asia, and the Ottoman conquest of Constantinople (1453) had complicated the overland routes. <strong>Technology</strong>: shipbuilders combined the manoeuvrable Mediterranean lateen sail with the sturdy square-rigged Atlantic hull, producing the <strong>caravel</strong> — a small, fast, ocean-going vessel. The magnetic compass (Chinese), the astrolabe (Islamic), better maps, and the printed sailing manuals of the period made long-distance navigation possible.</p>

<p><strong>Politics</strong> mattered too. The newly unified Iberian kingdoms — Portugal and Spain — saw exploration as a way to outflank Muslim trading powers, spread Catholicism, and find independent wealth. Both states had royal sponsorship, capable navigators, and the geographical good luck of facing the Atlantic.</p>

<h3>Portugal Goes South</h3>
<p>The pioneer was Portugal. <strong>Prince Henry the Navigator</strong> (1394–1460), although he never sailed himself, sponsored decades of expeditions probing the West African coast. Each voyage went a little further south. By 1488, <strong>Bartolomeu Dias</strong> rounded the Cape of Good Hope. In 1497–1498, <strong>Vasco da Gama</strong> made the breakthrough: he sailed around Africa, crossed the Indian Ocean, and reached <strong>Calicut</strong> on the Malabar coast of India.</p>

<p>This was the moment the European spice trade transformed. Within years, Portuguese fleets had seized strategic ports — <strong>Goa</strong>, <strong>Malacca</strong>, <strong>Hormuz</strong>, <strong>Macau</strong> — and were dictating prices in spice markets that had been controlled for centuries by Arab and Indian merchants. The Portuguese empire of the 16th century was a network of fortified trading posts, not vast territory; it was an empire of choke points.</p>

<h3>Columbus and the Spanish Atlantic</h3>
<p>Spain took a different gamble. The Genoese sailor <strong>Christopher Columbus</strong> believed (correctly) that the world was round, but (incorrectly) that it was small enough to sail west to Asia in a few weeks. After being turned down by Portugal, he persuaded Queen <strong>Isabella of Castile</strong> to sponsor him. In August 1492 he set out with three small ships. In October he made landfall in the Bahamas, convinced he had reached the East Indies. He died in 1506 still believing it.</p>

<p>The implications became clearer to others. The 1494 <strong>Treaty of Tordesillas</strong> — brokered by the Pope — divided the entire non-European world between Spain (everything west of a line through the Atlantic) and Portugal (everything east). It was an extraordinary act of cartographic arrogance, and one that shaped the next 300 years of colonial history.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine if, in the 1960s, the United States and the Soviet Union had signed a treaty dividing the entire surface of the Moon between them, with no input from any other country. The Treaty of Tordesillas was that level of presumption. And, for a century or two, it more or less worked — because Spain and Portugal had the only ocean-going fleets that mattered.
</div>

<h3>Magellan and the First Circumnavigation</h3>
<p>In 1519, Portuguese navigator <strong>Ferdinand Magellan</strong> — sailing for Spain — set out to reach the Spice Islands by sailing west around South America. The voyage was a nightmare: scurvy, mutiny, starvation, and the death of Magellan himself in a skirmish in the Philippines (1521). Of his 270 men and five ships, only 18 men in one ship made it back to Spain in 1522. They had circumnavigated the globe.</p>

<p>The completed voyage proved, for the first time, that the Americas were not Asia, that the Pacific was vast, and that the world's seas were all connected. Within a generation, European navigators were sailing routes that touched every continent except Antarctica.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who completed the first circumnavigation of the globe (mostly)?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Christopher Columbus</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Vasco da Gama</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Magellan's expedition (Magellan died en route)</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Conquistadors</h3>
<p>Where Portugal built trading posts, Spain built empires. <strong>Hernán Cortés</strong>, with about 500 men, conquered the Aztec Empire (1519–1521). <strong>Francisco Pizarro</strong>, with even fewer men, conquered the Inca (1532–1533). They were aided by indigenous allies who hated their oppressors, by smallpox that decimated indigenous armies, by horses and steel that the Americas had never seen, and by gunpowder weapons that, while not always decisive, terrified opponents.</p>

<p>The wealth that flowed back to Spain was staggering. The silver mines of <strong>Potosí</strong> in modern Bolivia produced what was, for a century, the largest single source of silver in the world. Spanish galleons crossed the Atlantic annually loaded with bullion. This silver helped finance European warfare and trade for two centuries — but also caused massive inflation in Europe (the so-called "<strong>Price Revolution</strong>").</p>

<h3>The Atlantic Slave Trade</h3>
<p>The Iberian colonies in the Americas needed labour. Indigenous workers were dying of disease at catastrophic rates. To replace them, Europeans turned to enslaved Africans — initially via Portuguese trading posts on the West African coast. The <strong>Atlantic slave trade</strong> would, over the next 350 years, forcibly transport perhaps <strong>12 million Africans</strong> across the Atlantic in conditions of unimaginable brutality. About 2 million did not survive the voyage.</p>

<p>This is the moral catastrophe at the heart of the Age of Exploration. The same European societies that produced the printing press, the Renaissance, and (later) the Enlightenment also built a system of chattel slavery on a scale never before seen in human history. Its effects on Africa, the Americas, and global politics are still being measured today.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
A single ship of the <strong>Manila Galleon</strong> trade — Spanish ships sailing between Acapulco (Mexico) and Manila (Philippines) — could carry enough silver to buy a year's worth of Chinese silk, porcelain, and spices. The trade ran from 1565 to 1815 — 250 years of annual round trips. It was the world's first sustained transpacific commerce, and it linked the New World silver of Potosí to the markets of Ming and Qing China.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly how many enslaved Africans were transported across the Atlantic during the slave trade?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">2 million</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">12 million</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">50 million</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Age of Exploration created the first global system — connected, in commerce and disease and culture, in a way the world had never been before. It enriched Europe, devastated the Americas, and laid the foundations of the Atlantic slave trade. The modern world begins, in many of its most important features, in the wake of these voyages.
</div>

</div>`;

L["The Ottoman Empire"] = `<div class="lesson-body">

<h3>The Empire That Bridged Three Continents</h3>
<p>For roughly six centuries — from the late 13th century to 1922 — the Ottoman Empire was a major power in three continents simultaneously: Europe, Asia, and Africa. At its peak in the 16th century it stretched from Algeria to the Caspian Sea, from the gates of Vienna to the deserts of Yemen. It governed Greeks, Bulgarians, Serbs, Hungarians, Arabs, Kurds, Armenians, Egyptians, Berbers, Bosnians, and dozens more peoples — under a Sunni Muslim Turkish sultan claiming to be the spiritual successor of the Prophet Muhammad.</p>

<p>For most of European history textbooks, the Ottomans appear as the threat at the door — the besiegers of Vienna, the conquerors of Constantinople, the sponsors of Barbary pirates. But viewed from inside, the Ottoman Empire was for a long time one of the most cosmopolitan, militarily formidable, and culturally sophisticated states in the world. Its slow decline shaped the modern Middle East. Its sudden collapse in 1922 created the borders we live with today.</p>

<h3>From Frontier Warriors to Empire</h3>
<p>The Ottomans began as one of many small Turkic principalities in northwest Anatolia after the Mongol disruption of the Seljuk Empire. Their founder, <strong>Osman I</strong> (r. c. 1299–1326), was a frontier warrior — a <em>ghazi</em> — who built up a small state along the Byzantine border. His son and grandson — <strong>Orhan</strong> and <strong>Murad I</strong> — pushed across the Dardanelles into Europe, conquering most of the Balkans within decades. By 1400, the Ottomans had nearly encircled Constantinople.</p>

<p>The empire's near-collapse came not from Europeans but from <strong>Tamerlane</strong>, who crushed the Ottoman army at <strong>Ankara</strong> in 1402 and captured Sultan Bayezid I. Tamerlane's death and the subsequent Ottoman recovery delayed the inevitable: in 1453, <strong>Mehmed II</strong> "the Conqueror," only 21 years old, finally took <strong>Constantinople</strong>. The 1,100-year-old Eastern Roman Empire was over. Mehmed adopted the Roman imperial title <em>Kayser-i Rum</em> — "Caesar of Rome."</p>

<h3>Suleiman the Magnificent and the Golden Age</h3>
<p>The Ottoman Empire reached its apex under <strong>Suleiman I</strong>, called "the Magnificent" by Europeans and "the Lawgiver" (<em>Kanuni</em>) by his own subjects. Sultan from 1520 to 1566, he extended Ottoman rule to Hungary (1526, after the disaster of Mohács), besieged Vienna (1529, unsuccessfully), conquered Iraq from the Safavids, and made the Mediterranean an Ottoman lake.</p>

<p>Inside the empire, Suleiman codified law, built a sophisticated administration, and patronised the arts. The architect <strong>Mimar Sinan</strong> designed mosques of staggering beauty — the <strong>Süleymaniye Mosque</strong> in Istanbul, the <strong>Selimiye Mosque</strong> in Edirne — that still stand among the great works of world architecture. Suleiman married a former concubine named <strong>Hürrem (Roxelana)</strong>, a Slavic woman whose political influence over him scandalised contemporaries.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine a rough European equivalent: an empire stretching from London to Moscow to Cairo, ruled by an emperor in Paris who employs Christians, Jews, and Muslims in his administration, has a personal slave-army of soldiers chosen as boys from across Europe, and whose army's siege of Berlin nearly succeeds. That's roughly the world Suleiman governed. Few European rulers could match the scale.
</div>

<h3>The Janissaries and the Devshirme</h3>
<p>The Ottoman military's elite were the <span class="vocab-pill">Janissaries</span> — a slave-soldier corps recruited through the <span class="vocab-pill">devshirme</span> system. Christian boys from the Balkans were taken as a tax in human form, converted to Islam, educated in the imperial palace, and trained as either elite infantry (the Janissaries) or imperial administrators. Some rose to become <strong>Grand Vizier</strong> — second only to the Sultan himself.</p>

<p>This created a peculiar Ottoman dynamic: the empire's most powerful officials were technically slaves of the sultan. Hereditary nobility was deliberately weak. The system worked brilliantly for two centuries before the Janissaries became a corrupt power bloc, marrying, having children, and eventually overthrowing sultans they disliked.</p>

<h3>The Millet System</h3>
<p>How did one Sunni Muslim sultan rule Orthodox Greeks, Catholic Croats, Sephardic Jews, Armenian Christians, Maronite Christians, and dozens of other groups? Through the <span class="vocab-pill">millet</span> system. Each major religious community was self-governing under its own religious leaders, who collected its own taxes, ran its own courts (in matters of family law, marriage, and inheritance), and answered to the sultan.</p>

<p>By modern standards the system was inegalitarian — non-Muslims paid a special tax (<em>jizya</em>) and faced legal disadvantages. But by 16th-century European standards it was remarkably tolerant. When the Catholic monarchs expelled Spain's Jews in 1492, Sultan Bayezid II welcomed them: their skills enriched the empire. Sephardic Jewish communities in Salonica and Istanbul flourished for the next four centuries.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the devshirme system?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A tax paid in gold by Christian provinces</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The recruitment of Christian boys to be converted and trained as elite soldiers/officials</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A system of merit-based exams for civil service</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Long Decline</h3>
<p>After Suleiman, Ottoman power slowly receded. The 1683 second siege of Vienna failed, after which the Habsburgs reconquered Hungary. Russia rose as a permanent threat in the Black Sea region. The Industrial Revolution gave European powers technological and economic advantages the Ottomans struggled to match. By the 19th century, European diplomats called the empire the "<strong>Sick Man of Europe</strong>" — though it kept refusing to die.</p>

<p>Reform attempts — the <strong>Tanzimat</strong> reforms of 1839–1876, the brief constitutional period of 1876–1878, the <strong>Young Turk</strong> revolution of 1908 — tried to modernise the empire on European lines. They had partial successes. But nationalist movements among Greeks, Serbs, Bulgarians, Armenians, and Arabs, plus repeated wars with Russia and Austria-Hungary, slowly stripped away territory.</p>

<h3>The Final Years and the Armenian Genocide</h3>
<p>The empire entered World War I on the side of Germany — a catastrophic decision. During the war, in 1915–1923, the Ottoman government and its successors committed the <strong>Armenian Genocide</strong>, killing approximately 1.5 million Armenian Christians in deportations, massacres, and concentration camps. It is one of the foundational atrocities of the 20th century, and Turkey to this day disputes the term "genocide" for political reasons.</p>

<p>Allied forces dismantled the empire after the war. From 1919 to 1923, Greek, French, British, and Italian troops occupied parts of Anatolia. A nationalist movement under <strong>Mustafa Kemal (Atatürk)</strong> drove them out, abolished the sultanate (1922), declared the Republic of Turkey (1923), and abolished the caliphate itself (1924). The Ottoman Empire ended after 624 years.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The borders of the modern Middle East were drawn by British and French diplomats during and after WWI, often by simply ruling lines on maps over former Ottoman provinces — the secret <strong>Sykes-Picot Agreement</strong> (1916) is the most notorious example. The instability of Iraq, Syria, Lebanon, Jordan, and the Palestinian territories all traces, in part, to the abrupt and externally-imposed dismantling of the Ottoman Empire.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who founded modern Turkey after the Ottoman collapse?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Sultan Mehmed VI</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Mustafa Kemal Atatürk</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Ismet Inönü</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Ottoman Empire was Europe's permanent neighbour for six centuries — sometimes its rival, sometimes its trading partner, always a major fact of life. Understanding it helps you understand the Balkans, the modern Middle East, the architecture of Istanbul, and the religious geography of Eastern Europe. Its collapse left an enormous void that the 20th century filled, badly, with new borders that still produce conflict.
</div>

</div>`;

L["The Mughal Empire"] = `<div class="lesson-body">

<h3>The Last Great Pre-Modern Empire of India</h3>
<p>For just over three centuries — from 1526 to 1857 — the Mughal Empire ruled most of the Indian subcontinent. At its peak in the late 17th century, it controlled a population of perhaps 150 million people and produced about 25% of the world's GDP. It built some of the most magnificent architecture in human history (the Taj Mahal, the Red Fort, the Jama Masjid). It synthesised Persian, Turkic, Hindu, and Indian Islamic cultures into something new. And then it slowly and dramatically collapsed, leaving the British East India Company to assemble the pieces.</p>

<p>The Mughal story is one of conquest and patronage, of brilliant rulers and disastrous ones, of religious tolerance and religious bigotry, of architectural genius and economic stagnation. It is foundational to understanding modern South Asia.</p>

<h3>Babur — The Founder</h3>
<p>The empire's founder was <strong>Babur</strong> (1483–1530), a Timurid prince descended from both Tamerlane and Genghis Khan. Driven from his ancestral kingdom in Central Asia by the Uzbeks, Babur captured Kabul in 1504 and from there launched a series of raids into northern India. In 1526, at the <strong>First Battle of Panipat</strong>, his small army — armed with field artillery and matchlock muskets, both new to Indian warfare — destroyed a much larger Indian force under the Sultan of Delhi.</p>

<p>Babur was a fascinating figure: a fierce warlord who also wrote one of the world's great autobiographies (the <em>Baburnama</em>), full of melancholy reflection on landscapes, fruits, friends, and the burden of kingship. He died young, only four years after taking Delhi. His son <strong>Humayun</strong> nearly lost everything — exiled to Persia for 15 years — before reconquering north India just before his own death in 1556.</p>

<h3>Akbar the Great</h3>
<p>The empire's true architect was Humayun's son <strong>Akbar</strong> (r. 1556–1605), who came to the throne at 13 and ruled for nearly fifty years. Akbar was illiterate (or at most barely literate), but he was politically brilliant. He expanded the empire to include most of north India and Bengal. He built a sophisticated bureaucracy on a Persian-Turkic model, ranking officials by a system called the <strong>mansabdari</strong>.</p>

<p>Most remarkably, Akbar pursued an explicit policy of religious tolerance. He abolished the <em>jizya</em> tax on non-Muslims. He included Hindus in his highest councils. He married Rajput princesses and made their relatives senior generals. He sponsored interfaith debates and created an eclectic syncretic religion called <strong>Din-i-Ilahi</strong> (which had only a handful of followers but signalled his philosophical openness). Akbar's vision was that of a multi-religious, multi-ethnic empire bound by loyalty to him personally — a vision modern India and Pakistan still wrestle with.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Akbar was, in his own time, what an Enlightenment monarch would later try to be in 18th-century Europe — a ruler genuinely interested in religious and philosophical questions, who tried to govern by reason and inclusion rather than orthodoxy. The difference is that Akbar did this in 1580, generations before the European Enlightenment was born.
</div>

<h3>Jahangir, Shah Jahan, and the Architectural Apex</h3>
<p>Akbar was succeeded by his son <strong>Jahangir</strong> (r. 1605–1627), best known today for his beautiful Persian-influenced courtly painting and his addictions to opium and alcohol. The real cultural pinnacle came under Jahangir's son <strong>Shah Jahan</strong> (r. 1628–1658). Shah Jahan built the <strong>Red Fort</strong> in Delhi, the <strong>Jama Masjid</strong> (one of the largest mosques in the world), and — most famously — the <strong>Taj Mahal</strong> at Agra (1632–1653) as a tomb for his beloved wife <strong>Mumtaz Mahal</strong>, who died in childbirth.</p>

<p>The Taj Mahal is a remarkable piece of architecture: white marble inlaid with semiprecious stones, mathematically proportioned, set in a Persian-style char-bagh (four-quartered) garden, sublimely balanced from any angle. It cost a fortune. The empire under Shah Jahan was already showing strain from such projects, but the visual legacy is unmatched.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Mughal capital city under Shah Jahan, <strong>Shahjahanabad</strong> (now Old Delhi), had a population of around 400,000 — comparable to Paris — and was famous for its bazaars, its Urdu poetry, and the <strong>Diwan-i-Khas</strong> hall in the Red Fort. Above the door of the latter, an inscription read: <em>"If there is paradise on earth, it is this, it is this, it is this."</em> Shahjahanabad was, briefly, that paradise.
</div>

<h3>Aurangzeb and the Beginning of Decline</h3>
<p><strong>Aurangzeb</strong> (r. 1658–1707) seized power by imprisoning his father Shah Jahan (who lived out his last years in the Agra Fort with a view of the Taj) and killing his brothers. Ruler for nearly 50 years, Aurangzeb expanded the empire to its greatest territorial extent — most of the Indian subcontinent, plus parts of modern Afghanistan.</p>

<p>But Aurangzeb's reign also began the empire's decline. He was a strict Sunni Muslim who reversed Akbar's policies of tolerance: he reimposed the <em>jizya</em> tax, demolished some Hindu temples, and tried (mostly unsuccessfully) to enforce Islamic orthodoxy. He spent the last 25 years of his reign on endless campaigns in the south, fighting the rising <strong>Maratha Confederacy</strong> — Hindu warrior-states that he never fully subdued. By the time he died, the imperial treasury was bankrupt, regional governors were drifting toward independence, and the empire's coalition of Hindu and Muslim elites was fraying.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Mughal emperor pursued the most ambitious policy of religious tolerance?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Aurangzeb</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Akbar</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Babur</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Great Decline (1707–1858)</h3>
<p>After Aurangzeb, the empire fragmented within a generation. Persian raiders under <strong>Nader Shah</strong> sacked Delhi in 1739, looting the Peacock Throne and the Koh-i-Noor diamond. Afghan invaders followed. The Marathas became the dominant power in much of India. The British <strong>East India Company</strong> — initially a private trading company — won decisive battles at <strong>Plassey</strong> (1757) and <strong>Buxar</strong> (1764), becoming the effective ruler of Bengal.</p>

<p>By 1800, the Mughal emperor in Delhi was a figurehead living off a British pension. By 1857, an enormous uprising — the <strong>Indian Rebellion</strong>, also called the First War of Indian Independence — briefly reinstalled the last emperor, <strong>Bahadur Shah Zafar</strong>, before being crushed by British forces. The British exiled him to Burma, where he died in 1862. His sons were murdered by a British officer. The dynasty descended from Babur, three centuries earlier, was extinguished.</p>

<h3>Mughal Cultural Legacy</h3>
<p>The empire's cultural legacy is immense and ongoing:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Urdu</strong> — a language that emerged from Mughal-era cantonments, mixing Persian and Arabic vocabulary with Hindustani grammar — remains a major literary language of South Asia.</li>
<li><strong>Mughal cuisine</strong> — biryani, kebab, samosa, naan — became (and still is) the dominant courtly cuisine of India and Pakistan.</li>
<li><strong>Mughal painting</strong> — extraordinarily detailed miniatures combining Persian techniques with Indian subjects — influenced art from Rajasthan to the Deccan and is still collected today.</li>
<li><strong>Mughal architecture</strong> — the marble inlay, the symmetrical garden, the bulbous dome — defined a style copied across South Asia and beyond.</li>
</ul>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who built the Taj Mahal?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Akbar</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Shah Jahan</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Aurangzeb</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Mughal Empire was a synthesis — Turkic-Mongol military aristocracy, Persian high culture, Indian Hindu population, Sunni and Shia Islam — held together by the genius of rulers like Akbar and the catastrophic policies of others like Aurangzeb. It produced wonders. It also collapsed in ways that opened the door to the British conquest of India. Modern India, Pakistan, and Bangladesh all live, culturally and politically, with its inheritance.
</div>

</div>`;

L["The Reformation"] = `<div class="lesson-body">

<h3>A Continent Shatters</h3>
<p>For roughly a thousand years, Western Europe had been religiously unified under the Roman Catholic Church. By the late 15th century that unity was thinning. Most ordinary Christians remained devout; many also believed the Church had become corrupt, worldly, and unrecognisably distant from the Gospel. In October 1517, a German monk named <strong>Martin Luther</strong> nailed a list of complaints to a church door in Wittenberg. Within a generation, half of Europe was Protestant. Within two generations, religious wars were tearing the continent apart. Christianity in the West has never been the same since.</p>

<p>The Reformation was not just about theology. It was about printing presses, patriotism, peasant grievance, princely ambition, and the limits of papal authority. To understand modern Europe — including its national borders, its political traditions, its languages, and its eventual secularism — you have to understand this rupture.</p>

<h3>The Pre-Reformation Crisis</h3>
<p>Late medieval Christianity had real problems. The papacy had moved to Avignon (1309–1377), then was split between rival popes during the Western Schism (1378–1417), undermining its claim to universal authority. The Renaissance papacy of the late 15th and early 16th centuries was openly worldly: <strong>Alexander VI</strong> was a Borgia who fathered children; <strong>Julius II</strong> personally led armies; <strong>Leo X</strong>, who would face Luther, lived a life of opulent patronage funded by, among other things, the sale of indulgences.</p>

<p><strong>Indulgences</strong> were the immediate trigger. An indulgence was, in theory, a remission of the penalty owed for forgiven sins. By the late 1500s they were being sold openly. A salesman named <strong>Johann Tetzel</strong> was working Germany on behalf of Pope Leo X to fund the rebuilding of St. Peter's Basilica. His pitch: <em>"As soon as the coin in the coffer rings, the soul from purgatory springs."</em></p>

<h3>Martin Luther</h3>
<p><strong>Martin Luther</strong> (1483–1546) was a German monk, theologian, and university professor at Wittenberg. A man of intense religious anxiety, he had spent years tormented by the question of how a sinner could be saved. His answer, drawn from his study of Paul's letters, was <span class="vocab-pill">justification by faith alone</span> — that humans are saved by trusting in God's grace, not by good works, sacraments, or indulgences purchased from the Church.</p>

<p>In October 1517, Luther wrote his <strong>95 Theses</strong> — a list of complaints about indulgences and clerical corruption — and (by tradition) nailed them to the door of Wittenberg's Castle Church. Whether or not he literally nailed them, he certainly distributed them. Thanks to the printing press, copies were circulating across Europe within weeks. By 1520 he was challenging the entire framework of Catholic authority.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
At the <strong>Diet of Worms</strong> (1521), Luther was ordered to recant his writings before the Holy Roman Emperor and an assembly of bishops. He refused. <em>"Here I stand. I can do no other,"</em> he reportedly said (the wording is debated). He was declared an outlaw, but Friedrich the Wise of Saxony hid him in Wartburg Castle, where he translated the New Testament into German in just eleven weeks. That translation would shape the German language and German national identity for centuries.
</div>

<h3>The Spread: Calvin, Zwingli, and the Anglicans</h3>
<p>Luther was not alone. The Swiss reformer <strong>Ulrich Zwingli</strong> began a parallel reform in Zurich in the 1520s. The French theologian <strong>John Calvin</strong> (1509–1564), based in Geneva, developed a more systematic Protestant theology — emphasising the sovereignty of God, predestination, and a disciplined, communally-governed church. Calvinism spread to Scotland (becoming Presbyterianism), the Netherlands, parts of France (the Huguenots), Hungary, and eventually the New England colonies.</p>

<p>England's Reformation was different. <strong>Henry VIII</strong> (r. 1509–1547) had been a fierce defender of Catholicism — the pope had even given him the title "Defender of the Faith." Then he wanted a divorce from Catherine of Aragon (who had failed to produce a male heir), the pope refused, and Henry simply broke from Rome. The <strong>Act of Supremacy</strong> (1534) made him head of the Church of England. The English Reformation would oscillate for 100 years between Catholic, conservative-Protestant, and radical-Protestant directions.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the immediate trigger for Luther's 95 Theses?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A papal command to convert the Jews</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The aggressive sale of indulgences in Germany</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A church council declaring infallibility</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Catholic Counter-Reformation</h3>
<p>The Catholic Church responded with the <strong>Counter-Reformation</strong> (or Catholic Reformation). The <strong>Council of Trent</strong> (1545–1563) reaffirmed traditional doctrine, reformed the worst abuses, and clarified what Catholics now formally believed. The <strong>Society of Jesus</strong> — the Jesuits — was founded by <strong>Ignatius of Loyola</strong> in 1540, becoming an elite, militarily-disciplined order that re-Catholicised Poland, Bavaria, and parts of France, while sending missionaries to China, India, Japan, and the Americas.</p>

<p>Catholic art reinvented itself in the dramatic <strong>Baroque</strong> style of <strong>Bernini</strong>, <strong>Caravaggio</strong>, and (later) <strong>Rubens</strong> — designed to inspire emotional, sensory religious experience and answer Protestant austerity with overwhelming Catholic splendour.</p>

<h3>The Wars of Religion</h3>
<p>For the next century and a half, religious differences set Europe on fire. The French Wars of Religion (1562–1598) saw Catholic and Huguenot forces slaughter each other; the <strong>St. Bartholomew's Day Massacre</strong> (1572) killed thousands of Huguenots in a few days. The Dutch Revolt (1568–1648) was, in part, a Calvinist revolt against Catholic Spanish rule. The English Civil War (1642–1651) had Calvinist Puritans on one side and Anglican royalists on the other.</p>

<p>The most catastrophic was the <strong>Thirty Years' War</strong> (1618–1648), fought mostly in Germany, which combined Catholic-Protestant conflict with imperial-princely power struggles. Whole regions were depopulated; in some areas of Germany, perhaps a third of the population died. The <strong>Peace of Westphalia</strong> (1648) finally ended the war and is sometimes seen as the founding moment of the modern state system: rulers got to determine the religion of their own territories, and external interference in the religion of other states was, in principle, off-limits.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Reformation was the medieval West's "social media moment" — except that the technology spreading the disagreement was the printing press, not Twitter, and the consequences played out over a century rather than a week. Religion in the late medieval West had been the underlying assumption everyone shared. By 1648 it had become the thing that defined which side you were on.
</div>

<h3>Lasting Consequences</h3>
<p>The Reformation reshaped Europe in ways that still echo. Vernacular languages (German, English, Dutch) gained literary prestige through Bible translations. Literacy spread, especially in Protestant areas where reading the Bible was an ordinary expectation. Education and work ethics in Protestant regions developed differently from Catholic ones (Max Weber, controversially, linked this to the rise of capitalism). The map of European Christianity took its modern shape: Catholic south and west, Protestant north, mixed in central Europe.</p>

<p>And eventually, after generations of religious war, Europeans began experimenting with the idea that perhaps the state shouldn't enforce religion at all. The <strong>Enlightenment</strong>'s argument for religious toleration is, in part, an exhausted reaction to the Reformation's wars.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What treaty ended the Thirty Years' War in 1648?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Treaty of Tordesillas</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Edict of Nantes</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Peace of Westphalia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Reformation didn't just split Christianity — it reshaped European politics, languages, education, and (eventually) the very idea of religious freedom. It produced the deadliest wars Europe had seen until the 20th century. And it laid the groundwork, paradoxically, for the secular Enlightenment that followed.
</div>

</div>`;

L["The Enlightenment"] = `<div class="lesson-body">

<h3>Reason as a Programme</h3>
<p>Sometime in the late 17th century, a generation of European thinkers began to argue that human reason — disciplined by mathematics, observation, and open debate — was capable of solving any problem worth solving. Not just problems of physics and astronomy, but problems of government, religion, economics, ethics, and human nature. The world, they thought, could be analysed, understood, and improved. This intellectual movement is what we now call the <strong>Enlightenment</strong> — sometimes the "Age of Reason."</p>

<p>The Enlightenment is the headwaters of modern liberal democracy, modern science, modern human rights, modern feminism, and modern secularism. It is also accused (often fairly) of intellectual arrogance, of providing cover for empire and slavery, and of having a too-neat picture of human rationality. Both its admirers and its critics agree on one thing: it changed how educated Europeans thought about almost everything.</p>

<h3>The Scientific Foundations</h3>
<p>The Enlightenment built on the <strong>Scientific Revolution</strong> of the 16th and 17th centuries. <strong>Galileo</strong> had argued that nature was written in mathematical language. <strong>Isaac Newton</strong> (1642–1727) had then provided the most spectacular demonstration of this in his <em>Principia Mathematica</em> (1687) — explaining the motion of cannonballs, ocean tides, and orbiting planets with the same simple equations. If gravity could be reduced to mathematics, what couldn't?</p>

<p>The lesson the Enlightenment drew was that nature obeyed knowable laws. Therefore, perhaps, society did too. The methodologies of physics — observation, hypothesis, experiment, mathematics — could be applied to human affairs. This was a revolutionary thought.</p>

<h3>The Philosophes</h3>
<p>The most famous Enlightenment thinkers — many but not all French — called themselves the <span class="vocab-pill">philosophes</span>. They were public intellectuals: writing pamphlets, novels, plays, and treatises aimed at educated lay readers, not just scholars. Their salons (often hosted by educated women) were the social engines of the movement.</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Voltaire</strong> (1694–1778) — the most famous of all. Witty, savage, cosmopolitan, an enemy of religious intolerance. His <em>Candide</em> (1759) is still read.</li>
<li><strong>Montesquieu</strong> (1689–1755) — argued in <em>The Spirit of the Laws</em> (1748) for the <strong>separation of powers</strong> between executive, legislative, and judicial branches. The American constitution would borrow heavily from him.</li>
<li><strong>Rousseau</strong> (1712–1778) — argued in <em>The Social Contract</em> (1762) that legitimate government must come from the "general will" of the people. Philosophically central to modern democracy.</li>
<li><strong>Diderot</strong> (1713–1784) — co-edited the colossal <em>Encyclopédie</em> (1751–1772), 28 volumes meant to compile the totality of human knowledge in accessible form. The <em>Encyclopédie</em> was the Enlightenment's defining publishing project.</li>
</ul>

<p>In Britain, <strong>John Locke</strong> (1632–1704) had earlier laid down core arguments: that government's legitimacy came from the consent of the governed, that humans had natural rights to "life, liberty, and property," and that knowledge came from experience rather than innate ideas. Locke would be repeatedly quoted by the American revolutionaries.</p>

<h3>Economics: Adam Smith</h3>
<p>The Scottish moral philosopher <strong>Adam Smith</strong> (1723–1790) gave the Enlightenment its economics. His <em>Wealth of Nations</em> (1776) — published, fittingly, in the year of American independence — argued that prosperity flowed from the division of labour, free markets, and individual self-interest, with the state limited mostly to enforcing contracts and protecting property. Smith was not the cartoon free-marketeer his later admirers turned him into; he worried about workers' welfare and elite collusion. But his framework defined modern economic thought.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Enlightenment was an attempt to rebuild every aspect of social life — religion, government, economics, education — on rational, examinable principles, the way Newton had rebuilt physics. The ambition was to design society the way you'd design a clock. Some of this worked brilliantly. Some of it produced unintended consequences that took centuries to unwind. But the ambition itself reshaped what "modern" meant.
</div>

<h3>Religion and the Enlightenment</h3>
<p>The Enlightenment was not necessarily atheist, but it was sceptical of established religion. Many philosophes were <span class="vocab-pill">deists</span> — believing in a creator God who set the universe in motion and left it to run on rational laws, but rejecting miracles, revealed scripture, and ecclesiastical authority. Voltaire's famous cry <em>"Écrasez l'infâme!"</em> ("crush the infamous thing") referred to religious fanaticism, not Christianity itself.</p>

<p>From this scepticism came one of the Enlightenment's most enduring contributions: the case for <strong>religious toleration</strong>. After a century of religious wars, Locke, Voltaire, and others argued that the state had no business policing private belief. This argument was eventually written into the U.S. Bill of Rights, the French Declaration of the Rights of Man, and most modern constitutions.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Whose ideas about the separation of powers most influenced the U.S. Constitution?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Voltaire</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Montesquieu</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Adam Smith</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Enlightened Despots</h3>
<p>Several 18th-century European rulers — <strong>Frederick the Great</strong> of Prussia (r. 1740–1786), <strong>Catherine the Great</strong> of Russia (r. 1762–1796), <strong>Joseph II</strong> of Austria (r. 1780–1790) — styled themselves "Enlightened" monarchs. They corresponded with philosophes, sponsored academies, codified laws, abolished torture, modernised education, and (sometimes) eased restrictions on religious minorities. They did not, however, give up absolute power. Frederick's famous slogan was: <em>"Argue as much as you like, only obey."</em></p>

<p>Enlightened despotism was a partial success. It modernised European states. It also showed the limits of trusting kings to reform themselves. By the 1780s, frustration with the gap between Enlightenment ideals and absolutist reality was building toward something more radical: revolution.</p>

<h3>The Limits and Contradictions</h3>
<p>The Enlightenment had bright spots and dark ones. Most philosophes were not feminists; <strong>Mary Wollstonecraft</strong>, who wrote <em>A Vindication of the Rights of Woman</em> (1792), was an exception. Most were European-centred; some, like <strong>Hume</strong> and <strong>Kant</strong>, made deeply racist statements about non-European peoples. Several wrote against slavery; many took its profits without question. The Enlightenment ideal of universal human reason did not, in practice, extend universally.</p>

<p>Critics — even sympathetic ones — point out that the philosophes' confidence in reason was sometimes its own form of dogma. The 19th and 20th centuries would offer their own correctives: Romanticism, Marxism, Freudian psychology, postmodernism. But none could escape the framework the Enlightenment had set: the assumption that human institutions are open to rational analysis and improvement.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The American <strong>Declaration of Independence</strong> (1776) is essentially Enlightenment philosophy turned into a national founding document: <em>"all men are created equal"</em> (Lockean equality), endowed with <em>"unalienable rights"</em> (natural rights), <em>"governments are instituted among Men, deriving their just powers from the consent of the governed"</em> (Lockean social contract), and may be overthrown when they violate this trust (Locke again). Almost every clause has an Enlightenment fingerprint.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who wrote A Vindication of the Rights of Woman in 1792?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Olympe de Gouges</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Mary Wollstonecraft</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Madame de Pompadour</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Enlightenment is the intellectual hinge between the early-modern and the modern world. Almost every modern political idea — democracy, human rights, separation of church and state, free markets, judicial fairness — has its roots here. So do many of modernity's blind spots and contradictions. To debate the Enlightenment today is, in many respects, to debate the foundations of modernity itself.
</div>

</div>`;

L["Age of Revolutions"] = `<div class="lesson-body">

<h3>The World Turned Upside Down</h3>
<p>Between roughly 1775 and 1825, a chain of revolutions reshaped the political landscape of the Atlantic world. The American colonies broke with Britain. France beheaded its king and reinvented itself, twice. Haiti — a French slave colony — became the first black republic in history. Spanish America fragmented into a dozen new countries. Even Britain, without revolution, was forced into reform by mass political pressure. By 1830 the political legitimacy of monarchy, hereditary aristocracy, and slavery had been challenged in every direction.</p>

<p>The Age of Revolutions matters because it set down most of the political vocabulary we still use: democracy, citizenship, the nation-state, human rights, abolition, "left" and "right" (which entered politics during the French Revolution, referring to seating in the National Assembly). It was a violent, contradictory, often bloody set of upheavals. It also produced some of history's most remarkable political documents.</p>

<h3>The American Revolution (1775–1783)</h3>
<p>The first of the Atlantic revolutions began over taxation. Britain, deeply in debt after the Seven Years' War (1756–1763), tried to make its American colonies pay a larger share. Colonists who already had local self-government and Enlightenment ideas about consent of the governed objected: <em>"No taxation without representation."</em></p>

<p>By 1775, protest had become war. In 1776, Thomas Jefferson drafted the <strong>Declaration of Independence</strong>, justifying revolt in language drawn directly from John Locke. After eight years of fighting — and decisive French military and naval intervention at Yorktown (1781) — Britain recognised the United States in 1783. By 1789 the new country had ratified a Constitution combining Montesquieu's separation of powers with a Bill of Rights protecting individual liberty.</p>

<p>The American Revolution was, in important ways, a moderate one. It kept slavery, kept property qualifications for voting, kept legal disabilities on women. But it set a precedent — that ordinary people could throw off a king — that no European monarch could unsee.</p>

<h3>The French Revolution (1789–1799)</h3>
<p>France's revolution was more radical and more chaotic. By 1789, France was bankrupt — partly from financing the American Revolution — and its tax system was rigged in favour of the aristocracy and the church. Louis XVI summoned the <strong>Estates-General</strong> (a medieval representative body) to find new revenue. The third estate — the commoners — refused to be sidelined and proclaimed themselves a <strong>National Assembly</strong>. On July 14, a Paris crowd stormed the <strong>Bastille</strong> prison; that date is still France's national holiday.</p>

<p>What followed was a roller-coaster of escalating radicalism:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>1789</strong> — The <em>Declaration of the Rights of Man and of the Citizen</em> proclaims liberty, equality, and resistance to oppression as universal principles.</li>
<li><strong>1791–1792</strong> — France becomes a constitutional monarchy, then a republic. Louis XVI is arrested and tried.</li>
<li><strong>1793</strong> — Louis XVI is guillotined. Revolutionary France goes to war with most of Europe. The radical <strong>Jacobins</strong> under <strong>Robespierre</strong> seize power.</li>
<li><strong>1793–1794</strong> — The <strong>Reign of Terror</strong>: roughly 17,000 official executions and many more deaths in civil conflict. Robespierre falls and is himself guillotined in July 1794.</li>
<li><strong>1799</strong> — A young general named <strong>Napoleon Bonaparte</strong> seizes power in a coup, ending the revolution and beginning his own.</li>
</ul>

<p>The French Revolution introduced ideas that European monarchies feared deeply: that "the people" could overthrow a centuries-old monarchy, redraw legal codes, abolish feudalism overnight, and execute their king. It exported these ideas, often at bayonet-point, across Europe.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
<strong>Olympe de Gouges</strong>, a French playwright and political activist, wrote her <em>Declaration of the Rights of Woman and of the Female Citizen</em> in 1791, asking why the universal rights claimed by the male revolutionaries didn't apply to women. She was guillotined in 1793 — a reminder that the Revolution's universalism had sharp limits in practice.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What document, issued by the French National Assembly in 1789, articulated universal political rights?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Magna Carta</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Declaration of the Rights of Man and of the Citizen</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Edict of Nantes</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Napoleon and the Revolution at Bayonet-Point</h3>
<p><strong>Napoleon Bonaparte</strong> (1769–1821) was a Corsican-born artillery officer who rose through the revolutionary army. By 1804 he had crowned himself <strong>Emperor of the French</strong>. For the next decade his armies dominated continental Europe, defeating Austrians, Prussians, Russians, and Spaniards in turn. His <strong>Napoleonic Code</strong> (1804) codified French law in a clear, secular, rational form that became the basis of legal systems across continental Europe and Latin America.</p>

<p>Napoleon's wars also exported the language of revolution: ending feudalism in conquered territories, emancipating Jews from ghettos, abolishing the Holy Roman Empire (1806), and stirring nationalism in places (Spain, Germany, Italy) that would later use that nationalism against him. He overreached in Russia in 1812, lost most of his army to the cold and Russian resistance, and was finally defeated by a coalition at <strong>Waterloo</strong> in 1815.</p>

<h3>The Haitian Revolution (1791–1804)</h3>
<p>The most radical of all the Atlantic revolutions occurred not in Europe or North America but on a French sugar colony called Saint-Domingue. About 90% of its population was enslaved, mostly working on plantations under brutal conditions. In 1791, an enormous slave uprising began. Over the next decade, under leaders like <strong>Toussaint Louverture</strong> and (after his betrayal and death in a French prison) <strong>Jean-Jacques Dessalines</strong>, the revolutionaries defeated French, Spanish, and British armies.</p>

<p>In 1804, they declared independence as <strong>Haiti</strong> — the first independent nation in Latin America, the first independent black republic in the world, and the only successful slave rebellion in modern history. The price was enormous. France imposed a crippling indemnity (132 million francs, which Haiti was still paying off in the 1940s). Western powers refused diplomatic recognition for decades. Haiti's poverty today is, in part, a direct legacy of the world's punishment of its successful revolution.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
For European elites in the 1790s, the prospect of slaves overthrowing their masters and founding their own country was as terrifying as the French Revolution itself. They responded by imposing two centuries of economic strangulation. The Haitian Revolution achieved the most radical of all the revolutionary goals — full emancipation by force — and was punished accordingly.
</div>

<h3>Latin American Independence (1810–1825)</h3>
<p>Napoleon's invasion of Spain in 1808 set off a chain of independence movements across Spanish America. In country after country, local elites — sometimes joined by mestizos, indigenous peoples, and enslaved Africans — fought to break with Madrid. The two great liberators were <strong>Simón Bolívar</strong> in northern South America (Venezuela, Colombia, Ecuador, Peru, Bolivia) and <strong>José de San Martín</strong> in the south (Argentina, Chile, Peru). By 1825, Spain had lost almost all of its mainland American empire.</p>

<p>The new Latin American republics often inherited only a thin layer of Enlightenment political ideals over deeply unequal social structures. They would spend much of the 19th century in caudillo politics, civil wars, and slow institutional development.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What made the Haitian Revolution unique among the Atlantic revolutions?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was nonviolent</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It was led by enslaved people who founded the world's first black republic</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was approved by the European powers</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Aftershocks of 1815</h3>
<p>The <strong>Congress of Vienna</strong> (1814–1815) tried to put the genie back in the bottle: restoring monarchies, redrawing borders, and balancing power among European great states. It worked, sort of, for a few decades. But the political ideas the revolutions had unleashed could not be unsaid. The 19th century would see further uprisings — <strong>1830</strong>, <strong>1848</strong> ("the Springtime of Nations") — and the gradual extension of democratic government, expanded suffrage, abolition of slavery, and the consolidation of nation-states across Europe and the Americas.</p>

<div class="key-point">
💡 <strong>Big idea:</strong> The Age of Revolutions did not finish what it started — slavery, monarchy, and inequality persisted in many places for generations afterward. But it changed the rules. By 1825, no European monarch could pretend that their authority rested solely on God's will. Every government, in theory, now had to answer to "the people" — even when, in practice, "the people" was still narrowly defined. The arguments of modern politics were now in motion.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 5: THE LONG NINETEENTH CENTURY
// ═══════════════════════════════════════════════════════

L["The Industrial Revolution"] = `<div class="lesson-body">

<h3>The Sharpest Break in Human History</h3>
<p>For thousands of years, almost everyone who has ever lived was a farmer. The work was done by human and animal muscle, fuelled by what plants captured from sunlight. Standards of living edged forward only slowly. Then, between roughly 1760 and 1900, something unprecedented happened: a small island in the North Atlantic began burning fossilised sunlight — coal — to power machines that could do the work of hundreds of human beings. Production multiplied. Cities exploded. Ordinary people began, for the first time, to live materially better than their grandparents had.</p>

<p>The <span class="vocab-pill">Industrial Revolution</span> is the sharpest break in human history. It transformed what humans could produce, where they lived, how they worked, what they ate, what they wore, how they travelled, how long they lived, and how they thought about the future. Almost everything modern about modern life — for good and for ill — traces back to this revolution.</p>

<h3>Why Britain? Why Then?</h3>
<p>The Industrial Revolution began in Britain in the second half of the 18th century. Why there? Historians have argued for two centuries, but a rough consensus exists. Britain had:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Cheap coal</strong>, lying close to the surface in places like Newcastle and Wales — and rivers and canals to move it.</li>
<li><strong>High wages</strong>, oddly enough — meaning it paid to invent labour-saving machines, where in low-wage economies (China, India) it didn't.</li>
<li><strong>A culture of practical tinkering</strong>, supported by patent law, scientific societies, and a politically secure mercantile class.</li>
<li><strong>Colonial markets</strong> — especially in India and the Americas — that absorbed huge volumes of British manufactured goods.</li>
<li><strong>Enclosure</strong> of common land, which pushed peasants off farms and into cities looking for work.</li>
</ul>

<p>Most importantly, Britain was the first society to combine these factors. Once it had begun, the rest of the industrialising world could imitate (and improve on) British innovations rather than rediscovering them.</p>

<h3>The Steam Engine and the Cotton Mill</h3>
<p>The defining technology was the <strong>steam engine</strong>. Early versions, by Thomas Newcomen (1712), were used to pump water out of coal mines. The breakthrough came when <strong>James Watt</strong> (1736–1819) made the engine far more efficient with his separate condenser (patented 1769). A Watt engine could power machines anywhere — factories no longer had to be located next to rivers for water power.</p>

<p>The first industry to mechanise on a large scale was <strong>cotton textiles</strong>. A cluster of British inventions — the <strong>spinning jenny</strong>, the <strong>water frame</strong>, the <strong>mule</strong> — multiplied a single worker's spinning output by orders of magnitude. By the early 1800s, mechanised cotton mills in Manchester and Lancashire were producing more cloth, more cheaply, than the entire pre-industrial world had managed. The cotton itself, raw, came from American slave plantations — an uncomfortable connection that should not be forgotten.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Before industrialisation, almost all human muscle power was deployed on producing food. After, machines did the work, and humans were freed up to produce everything else. It's a shift roughly comparable to the Neolithic Revolution thousands of years earlier — but compressed into a single century rather than millennia.
</div>

<h3>Railroads, Iron, and the Transformation of Distance</h3>
<p>The 1830s and 1840s saw the rise of <strong>railroads</strong>. The first commercial railway, the <strong>Liverpool & Manchester</strong> (1830), was an instant success. Within forty years, dense rail networks had been built across Britain, much of continental Europe, and most of the eastern United States. The transcontinental railroad linking the U.S. east and west coasts was completed in 1869.</p>

<p>Railroads collapsed the time between cities. They lowered shipping costs. They created national markets and national newspapers. They moved armies and shaped wars (the American Civil War was, among other things, the first war fought with railways and telegraphs). And they consumed staggering amounts of iron and steel, driving a second wave of industrialisation in heavy industry.</p>

<p>The <strong>Bessemer process</strong> (1856) made steel cheap. By the late 19th century, Pittsburgh, the Ruhr Valley, and Sheffield were producing the steel that built skyscrapers, dreadnoughts, and the new global infrastructure.</p>

<h3>Cities, Factories, and the Working Class</h3>
<p>People moved to where the factories were. <strong>Manchester</strong> grew from a town of 25,000 in 1750 to over 300,000 by 1850. London hit a million by 1801, the first city in the modern era to do so. New York and Chicago were not far behind.</p>

<p>Industrial cities were appalling. They were crowded, polluted, dirty, and dangerous. Working hours were long (12–14 hours, six days a week, was normal). Children worked alongside adults — sometimes from age six. Industrial accidents were common. Cholera, typhus, and tuberculosis tore through slums. Life expectancy in early industrial Manchester was sometimes 17 years for working-class infants.</p>

<p>And yet: wages, slowly, rose. Diet, slowly, improved. Adult life expectancy began to creep upward as sanitation reform took hold (Dr John Snow's 1854 cholera map of London is a famous early epidemiological achievement). The <strong>working class</strong>, as we now understand it, was forged in the cauldron of these cities.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
<strong>Friedrich Engels</strong>, son of a German factory owner, came to Manchester to learn his family's business. What he saw there — child labour, slum housing, brutal hours — shocked him into writing <em>The Condition of the Working Class in England</em> (1845). When he later collaborated with <strong>Karl Marx</strong> on the <em>Communist Manifesto</em> (1848), the analysis drew directly on Manchester. Industrial poverty was the matrix in which modern socialism was born.
</div>

<h3>Resistance, Reform, and Revolution</h3>
<p>The Industrial Revolution was not unopposed. <strong>Luddites</strong> in 1811–1812 smashed textile machines. <strong>Chartists</strong> in the 1830s and 1840s campaigned for working-class voting rights. Trade unions, illegal at first, slowly won the right to organise. Reform legislation — the <strong>Factory Acts</strong> (1833 onward) limiting child labour, the <strong>Ten Hours Act</strong> (1847), public health acts, education acts — gradually softened the worst conditions.</p>

<p>By 1848, revolutionary movements swept much of Europe partly in response to industrial misery. They mostly failed. But they introduced the political left — labour parties, socialists, eventually communists — that would shape the next century.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which industry was the first to mechanise on a large scale during the Industrial Revolution?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Iron and steel</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Cotton textiles</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Coal mining</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Second Industrial Revolution</h3>
<p>By the 1870s, a "Second" Industrial Revolution was underway. Centred in the United States and Germany rather than Britain, it focused on:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Electricity</strong> — Edison's incandescent bulb (1879), Tesla and Westinghouse's alternating current grid, the electric motor.</li>
<li><strong>Chemicals</strong> — synthetic dyes, fertilisers, explosives, and pharmaceuticals.</li>
<li><strong>Petroleum</strong> — initially for kerosene lamps, then for the new internal combustion engine.</li>
<li><strong>The telegraph and telephone</strong> — Morse (1837), Bell (1876).</li>
<li><strong>Mass production</strong> — culminating in Henry Ford's moving assembly line (1913), which reduced the time to build a Model T from 12 hours to 90 minutes.</li>
</ul>

<p>By 1900, the United States had overtaken Britain as the world's largest industrial economy.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Whose moving assembly line, around 1913, drastically reduced car production time?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Thomas Edison's</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Henry Ford's</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Andrew Carnegie's</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Industrial Revolution is the historical fact behind almost everything in modern life — wealth, cities, climate change, mass consumption, modern medicine, modern war, modern politics. Some of its consequences (longer lives, abundant food, mass literacy) are unambiguous goods. Others (industrial pollution, child labour, factory slums, fossil-fuel emissions) are unambiguous costs. Either way, the world after 1800 is fundamentally not the same kind of world as the world before it.
</div>

</div>`;

L["Imperialism & Colonialism"] = `<div class="lesson-body">

<h3>The World Carved Up</h3>
<p>By 1914, almost the entire surface of the Earth had been claimed, governed, or controlled by a handful of European powers, plus the United States and Japan. Africa had gone, in a single generation, from being mostly independent to being almost entirely European-ruled. India was the "jewel" of the British Empire. Indochina was French. The Dutch ran Indonesia. Most of the Pacific was European or American. The Ottoman, Persian, and Chinese empires were nominally independent but heavily penetrated by European economic and military power. This is the world of <span class="vocab-pill">imperialism</span>.</p>

<p>Imperialism in the long 19th century is the foundation of the modern global order — and of many of its deepest injustices. It built railways, hospitals, and universities. It also enslaved, exterminated, plundered, and racialised. To understand the modern world's economic inequalities, ethnic conflicts, refugee flows, and political resentments, you cannot avoid this period.</p>

<h3>The Old Empires and the New</h3>
<p>European imperialism was not new in 1800. Spain, Portugal, the Netherlands, Britain, and France had all built overseas empires since the 1500s. What was new in the 19th century was the <strong>scale</strong>, <strong>technological dominance</strong>, and <strong>ideological self-confidence</strong> of European expansion.</p>

<p>The decisive shift came with industrial technology. Steamboats let Europeans push up African rivers. Quinine, finally available cheaply, let them survive malaria. Repeating rifles and machine guns gave them battlefield dominance over almost any non-industrial opponent. Telegraphs let London control colonies in real time. Industrial economies needed raw materials (cotton, rubber, palm oil, copper, tin) and markets — which colonies could be made to provide.</p>

<h3>The British Empire and India</h3>
<p>The largest of all colonial empires was Britain's. By 1914, it covered roughly 25% of the world's land surface and ruled over 400 million people — a quarter of humanity. Its crown jewel was <strong>India</strong>, which the British <strong>East India Company</strong> had absorbed piece by piece from the mid-1700s onward, culminating in the Company's becoming the effective ruler of the entire subcontinent.</p>

<p>After the <strong>Indian Rebellion of 1857</strong> — a massive uprising of Indian soldiers (sepoys) and others against Company rule — Britain abolished the East India Company and made India a direct possession of the Crown. The British Raj (1858–1947) ruled India through a small core of British administrators, a much larger Indian Civil Service, and a vast army. Under it, India built railways and irrigation but suffered repeated devastating famines, deindustrialisation, and a population that grew poorer relative to the British, who extracted enormous wealth from the country.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The economic historian <strong>Utsa Patnaik</strong> has estimated that Britain extracted from India, in net economic transfers, roughly $45 trillion in modern terms over two centuries. Whatever your figure, the scale of colonial extraction is one of the main reasons Western Europe was rich and South Asia was poor by 1947 — and one of the main reasons the gap is closing only slowly even now.
</div>

<h3>The Scramble for Africa</h3>
<p>The most rapid imperial conquest in history was the <strong>Scramble for Africa</strong>. As late as 1880, Africa was about 90% under indigenous rule. By 1914, only Ethiopia and Liberia remained independent. The decisive moment was the <strong>Berlin Conference</strong> of 1884–1885, where European powers — without a single African representative present — agreed on the rules for dividing the continent.</p>

<p>The brutality varied. The worst was probably <strong>Belgian King Leopold II's Congo Free State</strong>, where rubber-extraction quotas were enforced by mass mutilation and murder; perhaps 10 million Congolese died between 1885 and 1908. The Germans committed the <strong>Herero and Nama Genocide</strong> in modern Namibia (1904–1908), often considered the first genocide of the 20th century. The British and French waged colonial wars across the continent, killing tens of thousands, displacing many more.</p>

<p>Africa's colonial borders — drawn in European boardrooms, ignoring linguistic and ethnic realities — would shape the conflicts of the post-colonial era. The borders are still mostly the ones Europeans drew.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Where and when did the European powers agree on rules for dividing Africa?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Congress of Vienna, 1815</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Berlin Conference, 1884–1885</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Treaty of Versailles, 1919</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The "Civilising Mission" and Scientific Racism</h3>
<p>European imperialism was justified, by its practitioners, as a "<strong>civilising mission</strong>" — the duty of "advanced" peoples to bring law, religion, and progress to "backward" ones. Rudyard Kipling's poem "<em>The White Man's Burden</em>" (1899) is the classic statement of this idea. It was bolstered by 19th-century pseudo-scientific theories of racial hierarchy that ranked humans into supposedly biological races — a body of ideas now called <span class="vocab-pill">scientific racism</span>.</p>

<p>None of this was true. But it was widely believed and shaped policy across the imperial world: in segregation laws, in the differential treatment of "natives," in the forced removal of indigenous children to boarding schools designed to extinguish their cultures (Australia's Stolen Generations, Canada's residential schools, the United States' Indian boarding schools). The legacies of these policies continue today.</p>

<h3>Resistance and Revolt</h3>
<p>Colonised peoples resisted constantly. The <strong>Indian Rebellion of 1857</strong>, the <strong>Maji Maji Rebellion</strong> in German East Africa (1905–1907), the <strong>Boxer Rebellion</strong> in China (1899–1901), the <strong>Mahdist War</strong> in Sudan (1881–1899), the <strong>Zulu defeat of the British at Isandlwana</strong> (1879), the <strong>Battle of Adwa</strong> where Ethiopia defeated Italy (1896) — and dozens of smaller uprisings — show that empire was always a contested affair, not an accomplished fact.</p>

<p>By the early 20th century, anti-colonial nationalism was beginning to mature. The Indian National Congress was founded in 1885. The African National Congress (ANC) in 1912. <strong>Sun Yat-sen</strong>'s republican movement in China and the Vietnamese nationalist Phan Bội Châu were laying the foundations of decolonisation. World War I would shake the empires further; World War II would break them.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Battle of Adwa</strong>, fought in Ethiopia on March 1, 1896, was perhaps the single most important indigenous victory against colonial conquest. Emperor <strong>Menelik II</strong>'s Ethiopian army of perhaps 100,000, equipped with modern rifles purchased in advance, decisively defeated an invading Italian army. Ethiopia kept its independence and became a global symbol of African dignity. Decades later, when Mussolini's Italy invaded Ethiopia in 1935, Adwa was still the rallying cry.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which African country defeated a European invader in 1896 and remained independent through the colonial era?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Egypt</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Ethiopia</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Liberia</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The 19th-century empires built much of the global infrastructure we take for granted (railways, ports, postal systems) — but they did so by force, on the backs of colonised peoples, and in service of European wealth. The modern global divide between rich and poor countries is not separate from this history. It is, in part, the result of it.
</div>

</div>`;

L["Ireland — Famine & Nationalism"] = `<div class="lesson-body">

<h3>An Island That Couldn't Be Ignored</h3>
<p>For most of European history, Ireland sat on the western edge of things — a small, often-conquered island whose troubles seemed peripheral to the great events of the day. The 19th century changed that. Between roughly 1845 and 1922, Ireland produced one of the most catastrophic famines in modern European history, lost a quarter of its population to death and emigration, generated a global Irish diaspora that reshaped American politics, and forged a nationalist movement that became the model for anti-colonial nationalism worldwide. The Irish question moved, in seventy years, from a footnote to a central problem of British politics — and it was solved only by partition, civil war, and the creation of the Irish Free State.</p>

<h3>Ireland Before the Famine</h3>
<p>By the early 19th century, Ireland had been under English (and then British) rule for nearly seven centuries. The 1801 <strong>Act of Union</strong> formally absorbed Ireland into the United Kingdom, dissolving its separate parliament. The political arrangement was deeply unequal. Most Irish were Catholic; political power was concentrated in the Protestant <strong>Ascendancy</strong> — a small landowning elite of (mostly absentee) British origin. Catholics had been barred from holding most public offices, owning land freely, or sitting in Parliament for over a century — disabilities only partly removed by <strong>Catholic Emancipation</strong> in 1829.</p>

<p>The Irish economy was dominated by tenant agriculture. Landlords, often living in London or Dublin, leased land to middlemen, who sub-leased to tenants, who sub-leased again. By the 1840s, perhaps a third of the population — particularly in the west — depended on a single crop for survival: the <strong>potato</strong>. Cheap, nutritious, and producing more food per acre than any cereal, the potato had let the Irish population grow from about 4 million in 1780 to roughly 8 million by 1841.</p>

<h3>The Great Famine (1845–1852)</h3>
<p>In autumn 1845, a previously unknown plant disease — late potato blight (<em>Phytophthora infestans</em>) — appeared in Irish potato fields. Where leaves had been green, they turned black overnight. When tenants dug up the tubers, they found rotten, foul-smelling mush. About a third of the 1845 crop was lost. In 1846, the blight returned and destroyed nearly the entire crop. It returned again in 1847 (the worst year, called "Black '47") and again in 1848.</p>

<p>The result was catastrophe. Roughly <strong>one million people died</strong> of starvation and famine-related disease (cholera, typhus, dysentery). Another <strong>one to two million emigrated</strong>, mostly to North America, in the most famous wave of the Irish diaspora. Ireland's population fell from 8.2 million in 1841 to about 6.5 million by 1851 — a 20% decline that has, in some areas, still not been reversed.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine if, today, a single crop disease in California killed off the wheat harvest, and over the next seven years, 1 in 8 Americans died and another 1 in 6 emigrated — leaving the country one-quarter smaller. That is roughly the demographic scale of what happened in Ireland between 1845 and 1852.
</div>

<h3>Was the Famine Genocide?</h3>
<p>The Famine has been the subject of bitter historical argument. The blight itself was a natural disaster. The catastrophic outcome was not. During the worst famine years, Ireland was a <em>net exporter</em> of food — beef, butter, and grain were shipped out to England under armed guard while peasants starved a few miles away. Government relief was slow, ideologically constrained (officials like Charles Trevelyan thought direct relief would create dependency), and largely shut down by 1847 in favour of having destitute Irish work on "public works" projects for inadequate wages.</p>

<p>Many historians stop short of using the word "genocide" — there was no deliberate plan to exterminate the Irish — but the British government's actions, from cutting relief to enforcing the export of food, range from gross negligence to something closer to indifference to mass death. Some historians (like Tim Pat Coogan) have argued forcefully that the criteria of the UN Genocide Convention are met. The argument continues.</p>

<h3>The Irish Diaspora</h3>
<p>The Famine sent Irish emigrants in unprecedented numbers to the cities of the United States, Canada, Britain, and Australia. By 1855, perhaps a quarter of Boston's population was Irish-born; New York and Chicago were not far behind. They arrived poor, often anti-clerical, mostly Catholic in a Protestant America, and met intense discrimination — "<strong>No Irish Need Apply</strong>" was a literal sign in shop windows.</p>

<p>By the 20th century, the Irish-American community had become a major political force. Irish-American money funded Irish nationalism back home; Irish-American sympathy shaped U.S. foreign policy; Irish-American politicians (eventually including a President — <strong>John F. Kennedy</strong>) reached the highest offices.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly how much did Ireland's population decline during and immediately after the Famine?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">About 5%</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">About 20%</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">About 50%</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Home Rule and Land Reform</h3>
<p>From the 1870s, Irish nationalism began to organise politically. The <strong>Irish Parliamentary Party</strong> under <strong>Charles Stewart Parnell</strong> sought "<strong>Home Rule</strong>" — devolved self-government within the United Kingdom — and pushed Britain hard. <strong>The Land War</strong> of the 1880s, led by Michael Davitt's Land League, used boycotts and rent strikes to force land reform. By the early 20th century, a series of British acts had transferred most Irish farmland from absentee landlords to peasant ownership.</p>

<p>Home Rule was repeatedly defeated, then passed in 1914 — but suspended for the duration of World War I. The delay was fatal. By the time the war ended, Irish nationalism had moved past Home Rule entirely.</p>

<h3>The Easter Rising and the Independence War</h3>
<p>On Easter Monday 1916, a small group of Irish revolutionaries seized strategic buildings in Dublin and proclaimed an Irish Republic. The <strong>Easter Rising</strong> was crushed within a week; about 500 people were killed. Britain made a strategic error in executing the leaders, who became national martyrs. By the next election (1918), the radical nationalist party <strong>Sinn Féin</strong> had swept Ireland, set up its own parliament (<em>Dáil Éireann</em>), and declared independence.</p>

<p>The <strong>Irish War of Independence</strong> (1919–1921) was a guerrilla campaign by the IRA against British forces and the notorious "Black and Tans." It ended in the <strong>Anglo-Irish Treaty</strong> of 1921, which created the <strong>Irish Free State</strong> covering 26 of Ireland's 32 counties, while the six predominantly Protestant counties of the northeast remained as <strong>Northern Ireland</strong> within the UK.</p>

<p>The treaty split the nationalist movement. A bitter <strong>Irish Civil War</strong> (1922–1923) followed between pro-treaty and anti-treaty factions. The pro-treaty side won. The new Irish state took its place in the world, but the partition of Ireland would be a source of conflict for the rest of the 20th century — culminating in the <strong>Troubles</strong> in Northern Ireland from the late 1960s to the <strong>Good Friday Agreement</strong> of 1998.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Easter Rising was, in its own time, militarily a failure. But the <strong>Proclamation of the Irish Republic</strong>, read on the steps of the Dublin General Post Office in 1916, became one of the foundational documents of modern Ireland. Its language echoes the American Declaration: <em>"We declare the right of the people of Ireland to the ownership of Ireland and to the unfettered control of Irish destinies, to be sovereign and indefeasible."</em>
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What did the 1921 Anglo-Irish Treaty create?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">An undivided Republic of Ireland</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Irish Free State (26 counties), with 6 counties remaining as Northern Ireland in the UK</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Home Rule within a United Kingdom of Britain and Ireland</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Ireland's 19th and early 20th centuries are a case study in how famine, migration, and nationalism can transform a small country. The Famine reshaped global demographics. The independence movement provided a template anti-colonial activists from India to Vietnam would study. And the partition that ended the Irish War of Independence created Northern Ireland — whose unresolved status would still be killing people in the late 20th century.
</div>

</div>`;

L["Abolition & Reform"] = `<div class="lesson-body">

<h3>The Slow End of an Old Evil</h3>
<p>Slavery is older than civilisation. Almost every pre-modern society had slaves. What changed in the 19th century is that, for the first time in human history, large parts of the world began to argue — and ultimately legislate — that slavery itself was wrong, in principle, and could not be allowed to continue. The end of legal slavery, the recognition of women's rights, the extension of the franchise to working men: these were not gifts handed down by enlightened rulers. They were achieved by long, dogged, often dangerous social movements.</p>

<p>This lesson covers those movements: <strong>abolition</strong>, the <strong>women's rights movement</strong>, and the broader 19th-century struggle to extend political rights to people previously excluded from them.</p>

<h3>The Atlantic Slave Trade: Scale and Brutality</h3>
<p>To grasp what abolition was up against, you have to grasp what slavery had become. The <strong>Atlantic slave trade</strong>, between roughly 1500 and 1860, forcibly transported about <strong>12 million Africans</strong> to the Americas. About 2 million did not survive the voyage. By 1800, slave-grown sugar, cotton, tobacco, and coffee made the Atlantic economy run. The U.S. South alone, by 1860, held about <strong>4 million enslaved people</strong> — making it the largest slave society in the modern world.</p>

<p>Slavery in the 19th century was also more racialised, more brutal, and more deeply entrenched in law than slavery had been at most points in history. Resistance was constant. Slaves rebelled, ran away, broke tools, slowed work, and built networks of solidarity. The <strong>Haitian Revolution</strong> (1791–1804), in which enslaved people defeated their French masters and founded a republic, terrified slaveholders everywhere.</p>

<h3>The Birth of Abolitionism</h3>
<p>The first organised abolitionist movement was British. <strong>Quakers</strong> had condemned slavery from the late 17th century. By the 1780s, a group of activists — <strong>Granville Sharp</strong>, <strong>Thomas Clarkson</strong>, and the parliamentary leader <strong>William Wilberforce</strong> — had built a public campaign with petitions, pamphlets, sugar boycotts, and the famous Wedgwood medallion of an enslaved man asking, <em>"Am I not a man and a brother?"</em></p>

<p>The campaign worked. Britain banned the Atlantic slave trade in <strong>1807</strong>. After Wilberforce's long retirement, the <strong>Slavery Abolition Act</strong> of 1833 ended slavery itself across most of the British Empire. (As a compromise, it paid £20 million to slaveholders, not the enslaved — a debt British taxpayers were still paying off until 2015. The enslaved received nothing.)</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
<strong>Olaudah Equiano</strong> (c. 1745–1797) was an Igbo man kidnapped and enslaved as a child, who eventually purchased his own freedom and wrote a bestselling autobiography (<em>The Interesting Narrative of the Life of Olaudah Equiano</em>, 1789) describing his experiences. The book was a powerful weapon in the British abolitionist campaign — one of the first widely-read first-person accounts of the Middle Passage.
</div>

<h3>American Abolition and the Civil War</h3>
<p>In the United States, abolition came harder and bloodier. The <strong>American Anti-Slavery Society</strong> (founded 1833) attracted figures like <strong>William Lloyd Garrison</strong> (publisher of <em>The Liberator</em>) and <strong>Frederick Douglass</strong> (a self-emancipated slave who became one of the country's greatest orators). The <strong>Underground Railroad</strong>, a network of safe houses guided in part by women like <strong>Harriet Tubman</strong>, helped thousands of enslaved people escape to free states or Canada.</p>

<p>But the Southern states were committed to slavery as a way of life and an economic foundation. By 1860, slavery was tearing the U.S. apart politically. The election of <strong>Abraham Lincoln</strong> on a platform of containing (not ending) slavery led 11 Southern states to secede and form the Confederacy. The <strong>American Civil War</strong> (1861–1865) followed.</p>

<p>What began as a war "to preserve the Union" became, by 1863, a war to end slavery. Lincoln's <strong>Emancipation Proclamation</strong> declared free all enslaved people in the Confederate states. About 200,000 Black soldiers fought for the Union army. After Confederate surrender in 1865, the <strong>Thirteenth Amendment</strong> abolished slavery throughout the United States. About 750,000 Americans had died in the war — proportionally, the bloodiest in U.S. history.</p>

<h3>Reconstruction and Backlash</h3>
<p>The decade after the Civil War — <strong>Reconstruction</strong> (1865–1877) — saw remarkable progress. Black men got the vote. Black politicians were elected to Congress. Schools, churches, and Black-owned businesses flourished. The 14th Amendment guaranteed equal protection of the laws.</p>

<p>And then it was undone. White Southern resistance — including <strong>Ku Klux Klan</strong> terror, voter suppression, and the political "<strong>Compromise of 1877</strong>" that withdrew federal troops from the South — restored white supremacy in legal form (the "<strong>Jim Crow</strong>" segregation regime) and economic form (sharecropping, debt peonage). It would take another century — the Civil Rights Movement of the 1950s and 60s — to dismantle Jim Crow. The struggle continues.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which constitutional amendment formally abolished slavery in the United States in 1865?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Thirteenth Amendment</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Fourteenth Amendment</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Fifteenth Amendment</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Slavery's Long Tail</h3>
<p>Slavery did not end neatly. The U.S. ended it in 1865; Cuba in 1886; Brazil — the largest American slave society — in 1888. Various forms of forced and bonded labour continued globally well into the 20th century, and modern slavery (in the form of trafficking, debt bondage, and forced labour) still exists today. The end of legal slavery in the 19th century was a moral milestone. It was not a final ending.</p>

<h3>The Women's Rights Movement</h3>
<p>Many of the same activists who fought against slavery also began to argue for women's rights. The watershed moment in the United States was the <strong>Seneca Falls Convention</strong> (1848), organised by <strong>Elizabeth Cady Stanton</strong> and <strong>Lucretia Mott</strong>, which produced a "Declaration of Sentiments" modelled on the Declaration of Independence: <em>"We hold these truths to be self-evident, that all men and women are created equal."</em></p>

<p>The 19th-century women's movement worked on multiple fronts: the right to own property after marriage; the right to higher education; the right to enter professions; the right to divorce; and (most slowly won) the right to vote. The British <strong>suffragettes</strong>, led by <strong>Emmeline Pankhurst</strong> and her daughters, used militant tactics — hunger strikes, window-smashing, arson, the suffragette Emily Davison's death under the king's horse at the 1913 Derby. New Zealand led the world in granting women the vote (1893). Britain followed in 1918 (women over 30) and 1928 (full equality). The U.S. ratified the Nineteenth Amendment in 1920.</p>

<h3>Workers' Rights and Mass Politics</h3>
<p>Alongside abolition and women's rights came the long struggle for workers' rights and broader male suffrage. In Britain, the <strong>Reform Acts</strong> of 1832, 1867, and 1884 progressively extended the male vote. In the U.S., property qualifications for white male voters mostly fell during the 1820s–30s. Trade unions, illegal in many places at the start of the century, became legal and powerful by the end. The eight-hour workday, paid sick leave, and pensions began to appear in legislation by the 1900s.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Where and when was the first major U.S. women's rights convention held?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Boston, 1865</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Seneca Falls, 1848</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Washington D.C., 1920</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The 19th century is when ideas first articulated in the Enlightenment — that humans are equal, that consent is the basis of legitimate authority, that no person should be the property of another — were finally fought into law. The fights took decades, cost lives, and were never finished. But the world after 1900 was, on the question of who counts as fully human, fundamentally different from the world before 1800.
</div>

</div>`;

L["Meiji Japan & Qing China"] = `<div class="lesson-body">

<h3>Two Responses to the Same Crisis</h3>
<p>By the mid-19th century, both China and Japan faced the same shock: industrial European powers, armed with steamships, repeating rifles, and aggressive trading demands, were forcing their way into East Asia. Within a few decades, the two countries' responses diverged so completely that they would end up on opposite sides of a war (1894–1895) — and one would be a great power, the other a humiliated, semi-colonised one.</p>

<p>Why? The answers tell us a great deal about how societies modernise — or fail to. Japan, in the <strong>Meiji Restoration</strong> (1868), embarked on the most rapid and successful modernisation any non-Western society has ever achieved. China, in the <strong>late Qing</strong> period, attempted reforms that consistently fell short, until the dynasty itself collapsed in 1911.</p>

<h3>Qing China at Its Height</h3>
<p>The <strong>Qing Dynasty</strong> (1644–1912), founded by Manchu invaders from beyond the Great Wall, ruled the largest, wealthiest, and most populous state on Earth for most of the 18th century. Under emperors like <strong>Kangxi</strong> (r. 1661–1722) and <strong>Qianlong</strong> (r. 1735–1796), the Qing expanded into Mongolia, Tibet, Xinjiang, and much of Central Asia. China's economy in 1800 was roughly a third of world GDP. Its cities were enormous; its scholarship was sophisticated; its silk, tea, and porcelain were sought across the world.</p>

<p>And then, in fifty years, things fell apart.</p>

<h3>The Opium Wars</h3>
<p>Britain wanted Chinese tea. China didn't want much in return — Qing officials told the British <em>"We possess all things"</em> — so trade was unbalanced and silver flowed out of British and into Chinese vaults. To rebalance the trade, Britain began (illegally) selling <strong>opium</strong>, grown in India, into China. Opium addiction spread across the Chinese coast.</p>

<p>When the Qing official <strong>Lin Zexu</strong> tried to suppress the trade in 1839 — confiscating and destroying 20,000 chests of British opium — Britain went to war. The <strong>First Opium War</strong> (1839–1842) ended in catastrophic Chinese defeat. The 1842 <strong>Treaty of Nanking</strong> opened five Chinese ports to British trade, ceded Hong Kong to Britain, and imposed a large indemnity. The <strong>Second Opium War</strong> (1856–1860) — fought by Britain and France this time, and ending with the burning of the Summer Palace in Beijing — extended these humiliations further.</p>

<p>The <strong>"Unequal Treaties"</strong> that followed gave Western powers extraterritorial rights, fixed Chinese tariffs at low levels, and created treaty ports run by foreigners. China was not formally colonised, but its sovereignty was deeply compromised.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Imagine if, in the 1830s, China had landed troops in London, forced the British government to legalise Chinese sales of opium across England, taken Cornwall as a colony, and dictated that Chinese citizens in England would not be subject to English law. The Opium Wars are usually described in mild language. The reality, from the Chinese point of view, is the world's largest and oldest civilisation being humiliated and partially looted by upstart island traders.
</div>

<h3>The Taiping Rebellion</h3>
<p>While the Qing were losing to foreigners, they were also being torn apart from within. The <strong>Taiping Rebellion</strong> (1850–1864), led by a failed scholar named <strong>Hong Xiuquan</strong> who claimed to be the younger brother of Jesus Christ, came close to overthrowing the Qing entirely. Hong's "Heavenly Kingdom" controlled the Yangtze valley and most of southern China for over a decade.</p>

<p>The Qing, with help from Western-trained generals like <strong>"Chinese" Gordon</strong>, eventually crushed the rebellion — but the cost was staggering. Estimates of the Taiping death toll range from <strong>20 to 70 million people</strong>, making it possibly the bloodiest civil war in human history. (For context: World War II killed about 60 million.) The Qing survived, but were exhausted and indebted. The 19th century also saw the <strong>Nian Rebellion</strong>, the <strong>Dungan Revolt</strong>, and the <strong>Boxer Rebellion</strong> (1899–1901) — each adding to the death toll and weakening central authority.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly how many people died in the Taiping Rebellion?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A few hundred thousand</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">5 million</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Estimates range from 20 to 70 million</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Self-Strengthening Movement</h3>
<p>Reformist Qing officials in the 1860s through 1890s tried to modernise — building shipyards, importing modern weapons, sending students abroad, founding translation bureaus. The <strong>Self-Strengthening Movement</strong> had real successes. But it was hampered by court factionalism, by the immensely conservative <strong>Empress Dowager Cixi</strong> (who effectively ruled 1861–1908), and by a deep cultural ambivalence about adopting too much from "barbarian" foreigners. When the modernised Chinese fleet met the Japanese at the <strong>Battle of the Yellow Sea</strong> in 1894, the Chinese ships were sunk.</p>

<p>The defeat in the <strong>First Sino-Japanese War</strong> (1894–1895) was a thunderclap. China lost Taiwan, paid an enormous indemnity, and was forced to recognise Korean independence (which Japan would soon swallow). The empire that for centuries had seen itself as the centre of the world (the "Middle Kingdom") had been beaten by an island state it had long regarded as a junior cousin.</p>

<h3>Meiji Japan: The Restoration</h3>
<p>Japan's response to the Western challenge was utterly different. After Commodore <strong>Matthew Perry</strong> sailed an American fleet of "<strong>black ships</strong>" into Tokyo Bay in 1853 and demanded the country open to trade, the ruling Tokugawa shogunate was unable to resist. A coalition of reform-minded samurai from southwestern Japan overthrew the shogunate in 1868 and "restored" power to the young Emperor <strong>Mutsuhito</strong> (whose reign was named <strong>Meiji</strong>, "enlightened rule").</p>

<p>What followed is the most rapid and thorough modernisation in history. Within a single generation, the Meiji government:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>Abolished feudal domains and the samurai class.</li>
<li>Created a centralised bureaucracy modelled on Prussia and France.</li>
<li>Built a national education system that achieved near-universal literacy by 1900.</li>
<li>Imported European law (mostly German), wrote a constitution (1889), and established a parliament.</li>
<li>Built railways, telegraphs, modern factories, and a modern banking system.</li>
<li>Created a conscript army modelled on Prussia and a navy modelled on Britain.</li>
</ul>

<p>The slogan was <em>"Fukoku kyōhei"</em> — "rich country, strong army." Hundreds of foreign experts were hired to teach. Hundreds of Japanese students were sent abroad. Within thirty years of Perry's arrival, Japan was an industrial power.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Iwakura Mission</strong> (1871–1873) sent 100 of Japan's leading officials on a 22-month tour of the United States and Europe — Britain, France, Germany, Russia, and several smaller powers. They returned with notebooks full of detailed analysis of Western institutions, technologies, and laws. Few governments in history have invested so deliberately in learning from rivals.
</div>

<h3>Imperial Japan</h3>
<p>The other side of Meiji modernisation was Japanese imperialism. By the 1890s, Japan had built the army and navy to compete with the European powers — and proceeded to do so. Japan won the First Sino-Japanese War (1894–1895), the <strong>Russo-Japanese War</strong> (1904–1905, the first major war in which an Asian power defeated a European one), annexed Korea (1910), and would eventually expand across China and Southeast Asia until 1945. Japan's modernisation was a triumph and a tragedy: it preserved Japanese independence and produced an industrial society, but it also produced an aggressive empire whose conduct in WWII (Nanjing, comfort women, Bataan) ranks among the worst war crimes of the 20th century.</p>

<h3>The End of the Qing</h3>
<p>By 1900, the Qing was dying. The disastrous <strong>Boxer Rebellion</strong> (1899–1901), in which Empress Dowager Cixi backed an anti-foreign uprising that was crushed by an eight-nation alliance, finally exhausted what was left of the dynasty's authority. Late reform attempts failed. In 1911, regional uprisings — culminating in the <strong>Wuchang Uprising</strong> — overthrew the dynasty. The last emperor, six-year-old <strong>Puyi</strong>, abdicated in February 1912. China became a republic.</p>

<p>The new Republic of China would, however, be weak and fractured for decades — caught between warlords, the new <strong>Nationalist</strong> party (Kuomintang), and the rising <strong>Chinese Communist Party</strong>. The story of how China remade itself in the 20th century belongs to the next era.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In which conflict did Japan become the first Asian power in modern times to defeat a European one?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The First Sino-Japanese War (1894–1895)</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Russo-Japanese War (1904–1905)</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">World War I</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Japan and China faced essentially the same crisis — Western industrial power knocking on the gates — and made completely different choices. Japan's choice to learn from the West, ruthlessly and systematically, made it a great power. China's failure to do the same, despite the heroic efforts of individual reformers, helped collapse a 2,000-year imperial tradition. The cost in both cases was enormous, but the difference between the two responses shaped East Asia for the entire 20th century.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 6: THE WORLD AT WAR
// ═══════════════════════════════════════════════════════

L["World War I"] = `<div class="lesson-body">

<h3>The War That Ended the Old World</h3>
<p>It is hard, a hundred years on, to convey how different Europe was on June 28, 1914 from what it became four years later. In June 1914, four hereditary empires — German, Austrian, Russian, Ottoman — still ruled most of Europe and much of the Middle East. Optimism about scientific progress was widespread. Some economists thought a major war between industrial powers was now economically impossible. Then, on a Sunday in Sarajevo, an Austrian archduke was shot, and within five weeks all of those empires were at war.</p>

<p>Four and a half years later, when the guns finally stopped, all four empires were gone. Roughly <strong>17 million people</strong> were dead. New countries were being drawn on maps. The European-led world order that had organised the previous century was finished. Communism had arrived in Russia. Fascism would soon arrive in Italy. The 20th century, as we know it, had begun — and it had begun in a slaughter no one had wanted on the scale that came.</p>

<h3>Why the War Began</h3>
<p>The deep causes had been building for decades. <strong>Nationalism</strong> — particularly in the Balkans, where Slavic peoples chafed under Austrian and Ottoman rule — was at fever pitch. <strong>Imperial rivalries</strong> between Britain and Germany over colonies, navies, and trade had soured relations. A web of <strong>alliances</strong> — the Triple Alliance (Germany, Austria-Hungary, Italy) and the Triple Entente (France, Russia, Britain) — meant any conflict between two powers could quickly become a continental war.</p>

<p>The trigger came on June 28, 1914, when <strong>Gavrilo Princip</strong>, a 19-year-old Bosnian Serb nationalist, shot Archduke <strong>Franz Ferdinand</strong>, heir to the Austrian throne, on a street in Sarajevo. Austria-Hungary, with German backing, issued an impossible ultimatum to Serbia. Serbia rejected one clause. Austria declared war. Russia mobilised in support of Serbia. Germany declared war on Russia, then France, then invaded Belgium. Britain declared war on Germany. By August 4, half a continent was fighting.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The pre-1914 European alliance system worked the way an automated trading algorithm fails: a small unexpected input causes cascade after cascade, and within hours the whole system is in collapse, with no human able to stop it. None of the great powers wanted the war they got. They had all built systems guaranteed to deliver one if anyone made a mistake.
</div>

<h3>The Western Front: Trench Warfare</h3>
<p>The Germans had a plan — the <strong>Schlieffen Plan</strong> — to defeat France quickly by sweeping through Belgium, then turn east to fight Russia. It failed. By September 1914, French and British forces had stopped the German advance at the <strong>Battle of the Marne</strong>. Both sides dug in. By the end of 1914, a system of <strong>trenches</strong> ran from the English Channel to the Swiss border — and that line moved almost not at all for the next four years.</p>

<p>The trench system was Europe's industrial revolution turned to mass killing. <strong>Machine guns</strong>, <strong>artillery</strong>, <strong>barbed wire</strong>, and (from 1915) <strong>poison gas</strong> made any frontal attack a slaughterhouse. Generals on both sides spent four years sending hundreds of thousands of men "over the top" into machine-gun fire, in the hope that if you killed enough of them, you'd eventually break through.</p>

<p>You didn't. The names became synonymous with futile carnage:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Verdun</strong> (1916) — French and German forces fought for ten months over a few square miles. Roughly 700,000 casualties. The line barely moved.</li>
<li><strong>The Somme</strong> (1916) — On the first day alone (July 1), the British army suffered ~57,000 casualties, including 19,240 dead. The total casualties for the five-month battle: about 1.2 million.</li>
<li><strong>Passchendaele</strong> (1917) — A British offensive in Flanders fought largely in mud, sometimes drowning wounded men. Casualties: ~500,000 for a few miles of ground.</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
On July 1, 1916 — the first day of the Battle of the Somme — the British army suffered <strong>57,470 casualties</strong>, of whom <strong>19,240 were killed</strong>. It remains the bloodiest single day in British military history. Most of the dead were volunteers from the "Pals Battalions," recruited from individual towns; entire town's worth of men were killed in a single morning. The First World War's effect on British public memory has never really faded.
</div>

<h3>Other Fronts</h3>
<p>The war was global. The Eastern Front (Germany/Austria vs Russia) was vast, mobile, and bloody. The Italian Front pitted Italians against Austrians in mountain warfare. Ottomans fought British, French, and Russian forces in the Middle East — including the Gallipoli campaign (1915), where the British failed to take the Dardanelles. Colonial troops from across the British and French empires — Indians, Senegalese, Algerians, Vietnamese, Australians, New Zealanders, Canadians, South Africans — fought and died on the Western Front.</p>

<p>At sea, Britain blockaded Germany; Germany used <strong>U-boats</strong> (submarines) to attack British shipping. The sinking of the British liner <strong>Lusitania</strong> in 1915 killed 1,200 civilians, including 128 Americans, and helped move U.S. opinion toward entering the war.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event triggered the start of WWI in 1914?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A German invasion of France</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The assassination of Archduke Franz Ferdinand in Sarajevo</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The sinking of the Lusitania</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Russia Collapses, America Enters</h3>
<p>By 1917, Russia could no longer fight. Its army had suffered millions of casualties, its supply system had broken down, and food was running out in cities. In March, the <strong>Tsar abdicated</strong> after street protests in Petrograd. In November, the <strong>Bolsheviks</strong> under <strong>Lenin</strong> seized power and signed a separate peace with Germany (Brest-Litovsk, 1918) on humiliating terms.</p>

<p>The same month Russia was leaving, the United States was entering. Provoked by German submarine warfare and the famous <strong>Zimmermann Telegram</strong> (in which Germany proposed an alliance with Mexico), the U.S. declared war in April 1917. American troops began arriving in France in 1918. They were fresh, numerous, and decisive: by autumn, the German army was in full retreat.</p>

<h3>Armistice and the Versailles Treaty</h3>
<p>Germany signed an <strong>armistice</strong> on <strong>November 11, 1918</strong> at 11:00 a.m. ("the eleventh hour of the eleventh day of the eleventh month"). The German front had not yet been broken inside Germany itself, allowing the future "<strong>stab in the back</strong>" myth — that Germany hadn't really been defeated militarily, only betrayed by Jews, socialists, and politicians.</p>

<p>The peace, settled at the <strong>Paris Peace Conference</strong> (1919), was harsh. The <strong>Treaty of Versailles</strong> imposed on Germany:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li>An enormous reparations bill (132 billion gold marks).</li>
<li>Massive territorial losses (Alsace-Lorraine to France, large areas to a reconstituted Poland).</li>
<li>The "war guilt clause" — Germany had to accept sole responsibility for the war.</li>
<li>Strict limits on its military.</li>
</ul>

<p>The economist <strong>John Maynard Keynes</strong>, who attended the conference, predicted in his book <em>The Economic Consequences of the Peace</em> (1919) that Versailles would impoverish Germany and breed exactly the kind of nationalist resentment that 20 years later would deliver Hitler to power. He was right.</p>

<h3>The Empires Fall</h3>
<p>WWI brought down four empires:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Russia</strong> — replaced by a Bolshevik (later Soviet) state.</li>
<li><strong>Germany</strong> — replaced by the unstable Weimar Republic.</li>
<li><strong>Austria-Hungary</strong> — broken up into Austria, Hungary, Czechoslovakia, Yugoslavia, parts of Poland, Romania, Italy.</li>
<li><strong>The Ottoman Empire</strong> — broken up into Turkey (under Atatürk), Iraq, Syria, Lebanon, Jordan, Palestine, and Saudi Arabia. The Sykes–Picot lines drawn during the war became, in slightly modified form, the modern borders of the Middle East.</li>
</ul>

<p>And along with the empires, the war broke the cultural confidence of the European 19th century. The poems of <strong>Wilfred Owen</strong> and <strong>Siegfried Sassoon</strong>, the memoirs of <strong>Erich Maria Remarque</strong> (<em>All Quiet on the Western Front</em>), the novels of <strong>Hemingway</strong> and <strong>Dos Passos</strong> — all carry the same disillusioned grief. The war had killed not just an entire generation of young men, but the assumption that European civilisation was steadily improving.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which four empires collapsed as a result of World War I?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">British, French, Belgian, Dutch</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">German, Russian, Austro-Hungarian, Ottoman</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Spanish, Portuguese, Italian, Greek</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> WWI didn't end with peace — it ended with a fragile armistice, a vindictive treaty, and a continent in shock. Almost every catastrophe of the 20th century — fascism, communism, WWII, the Holocaust, the Middle East's modern wars — has its origins in this conflict and its peace settlement. WWI is the gateway to modern history's most violent century.
</div>

</div>`;

L["The Russian Revolution"] = `<div class="lesson-body">

<h3>From Tsar to Soviet</h3>
<p>In just twelve months, between February and October 1917 (Old Style; March and November New Style), Russia overthrew a 304-year-old monarchy, tried democracy, abandoned democracy, and installed a Marxist-Leninist regime. It was the most consequential political revolution of the 20th century. Its effects shaped global politics for the next 75 years — through the Cold War, decolonisation, anti-fascist resistance, and dozens of communist movements worldwide.</p>

<p>The Russian Revolution is also a deeply contested story. It produced both real liberation (workers' rights, women's suffrage, mass literacy) and catastrophic repression (civil war, famine, the Gulag). Understanding it requires holding both truths at once.</p>

<h3>Imperial Russia on the Eve</h3>
<p>By 1900, Russia was a contradiction. It was the world's largest country by territory and one of its great powers militarily. It was also one of Europe's poorest, most autocratic, and most unstable. The <strong>Tsar</strong> ruled by divine right. There was a small parliament (the <strong>Duma</strong>, created after the 1905 revolution) but it had limited power. Industrial workers were concentrated in a few cities (St. Petersburg, Moscow); the peasantry — about 80% of the population — lived in poverty. Censorship was heavy; political dissent was met with prison or Siberian exile.</p>

<p><strong>Tsar Nicholas II</strong> (r. 1894–1917) was personally amiable, devoted to his family, and politically catastrophic. He believed in autocracy as a sacred trust. He distrusted his own ministers. He listened to the bizarre faith healer <strong>Grigori Rasputin</strong>, who had influence over the Empress because he seemed able to help their haemophiliac son Alexei. By 1916, with Russia bleeding millions of lives in WWI, the political class — including aristocrats — had concluded that the Tsar was leading the country to disaster.</p>

<h3>The February Revolution</h3>
<p>In late February 1917 (Old Style), bread riots in Petrograd (St. Petersburg) escalated. Workers struck. Soldiers refused to fire on demonstrators. Within days, the army garrison had switched sides. On March 2 (Old Style: February 23 — hence "February Revolution"), Nicholas II abdicated, ending the Romanov dynasty.</p>

<p>Power passed to a "<strong>Provisional Government</strong>" of liberal politicians, led eventually by the moderate socialist <strong>Alexander Kerensky</strong>. But the Provisional Government had a fatal weakness: it shared power with the <strong>Petrograd Soviet</strong>, a council of workers and soldiers' deputies that controlled the loyalty of the soldiers and railway workers. This "<strong>dual power</strong>" arrangement was unstable from the start.</p>

<p>The Provisional Government also kept Russia in WWI — a decision both popularly hated and economically ruinous. As 1917 dragged on, ordinary Russians demanded "Peace, Land, Bread." The Provisional Government couldn't deliver any of them.</p>

<h3>Lenin and the Bolsheviks</h3>
<p>In April 1917, the German government — hoping to destabilise Russia — sent <strong>Vladimir Lenin</strong>, the exiled leader of the radical socialist <strong>Bolsheviks</strong>, back to Petrograd in a sealed train. Lenin's strategy was simple: refuse cooperation with the Provisional Government, demand "all power to the Soviets," promise immediate peace and immediate land redistribution. He was, in many respects, the most ruthless and clear-headed political tactician of the 20th century.</p>

<p>His rallying slogans worked. By autumn the Bolsheviks had majorities in the Petrograd and Moscow Soviets. On the night of <strong>October 25, 1917</strong> (Old Style; November 7 New Style), Bolshevik forces seized key buildings in Petrograd. The Provisional Government fell with almost no resistance. Within days, Lenin had decreed the end of private land ownership and called for an immediate end to the war.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The "October Revolution" was not, despite later Soviet propaganda, a mass uprising. It was a tightly organised coup by a relatively small political party that had positioned itself perfectly for the moment when the Provisional Government became too weak to resist. Lenin's genius was knowing exactly when to strike — and being utterly ruthless about doing so.
</div>

<h3>The Russian Civil War (1918–1922)</h3>
<p>Bolshevik power was contested almost immediately. The "<strong>Reds</strong>" (Bolsheviks) faced a coalition of "<strong>Whites</strong>" (royalists, liberals, anti-Bolshevik socialists, separatists), backed by armed intervention from Britain, France, the United States, Japan, and Czechoslovakia. The civil war lasted four bloody years.</p>

<p>The Reds won. Several factors helped: they controlled the heart of Russia (Moscow, Petrograd, the railway hubs), while the Whites were scattered around the periphery. The Reds had unified command under <strong>Trotsky</strong>, who built the Red Army from scratch. The Whites were politically incoherent, often reactionary, and tarnished by association with foreign intervention. Bolshevik propaganda ("the workers' state under siege") effectively rallied support.</p>

<p>The cost was catastrophic. <strong>Roughly 7–10 million people died</strong> in the civil war, mostly from disease and famine. The Russian economy collapsed. The Bolsheviks crushed the Tambov peasant rebellion, the Kronstadt sailors' uprising, and any non-Bolshevik socialist parties. The promise of soviet democracy gave way to a one-party state under iron discipline.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who led the Bolsheviks during the October Revolution?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Joseph Stalin</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Vladimir Lenin</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Leon Trotsky</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Lenin's Death and Stalin's Rise</h3>
<p>Lenin suffered a series of strokes from 1922 and died in January 1924. He had grown alarmed by the rising power of <strong>Joseph Stalin</strong>, the Bolshevik general secretary, but never managed to remove him. After Lenin's death, Stalin outmanoeuvred his rivals — first Trotsky, then Bukharin and the others — and by 1929 was the unchallenged ruler of the Soviet Union.</p>

<p>Stalin's regime would be transformative and terrifying. The Soviet Union industrialised at brutal speed under five-year plans. Agriculture was forcibly <strong>collectivised</strong>, causing the <strong>Holodomor</strong> famine in Ukraine (1932–33; perhaps 4 million deaths). Political opponents — including most of Lenin's old comrades — were tried in show trials and executed. The <strong>Gulag</strong> system of forced labour camps held millions. The <strong>Great Terror</strong> of 1936–1938 killed perhaps 700,000 to over a million people.</p>

<p>And yet, by the late 1930s, the Soviet Union was the world's second-largest industrial economy. When Hitler attacked it in 1941, the USSR — at enormous cost — would defeat the Wehrmacht. Stalin's industrial base, built on the bones of Soviet citizens, made the victory possible.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Russian Revolution inspired communist movements worldwide — the Communist Party of China (founded 1921) is the most consequential. Mao Zedong's eventual victory in 1949 brought roughly a quarter of humanity under communist government. The Soviet model also inspired anti-colonial movements from Vietnam to Angola. By 1980, perhaps a third of the world's population lived under communist or self-described socialist governments.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the Holodomor?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A military victory in WWII</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A 1932–33 famine in Soviet Ukraine, caused largely by forced collectivisation</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A Bolshevik-led labour reform</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Russian Revolution created the first state explicitly built on Marxist principles. It generated real social progress (literacy, female emancipation, industrial growth) and astonishing repression (Gulag, terror, famine). It made the Cold War possible and shaped the 20th century's revolutions, anti-colonial movements, and ideological battles. Its legacy is contested in Russia and beyond to this day.
</div>

</div>`;

L["The Interwar Period"] = `<div class="lesson-body">

<h3>The Twenty-Year Truce</h3>
<p>The years between 1919 and 1939 are sometimes called the <strong>Interwar Period</strong> — a phrase that, in retrospect, sounds ominous. The peace that ended WWI was meant to be permanent. It lasted 20 years. In those two decades, democracies struggled, economies collapsed, dictatorships rose, racism became official policy in much of Europe, and another world war became — by 1939 — almost inevitable.</p>

<p>This era is one of the most studied in modern history because of its tragic symmetry: every choice that made WWII possible was made between 1919 and 1939, and many people at the time saw the catastrophe coming. They could not stop it.</p>

<h3>The Roaring Twenties (and Their Limits)</h3>
<p>The 1920s are remembered, especially in the U.S., as a decade of jazz, flappers, automobiles, and a stock-market boom. Some of this is real. The U.S., relatively undamaged by WWI, emerged as the world's largest economy. Mass consumerism took off — radios, cars, washing machines, cinema. Women in many democracies got the vote and (some) social independence. The decade gave us Louis Armstrong, Charlie Chaplin, modernist art, and the literary explosion of the Harlem Renaissance.</p>

<p>But this prosperity was partial. Most of Europe spent the 1920s reconstructing from war damage. Germany suffered <strong>hyperinflation</strong> in 1923, when wheelbarrows of marks couldn't buy bread. Russia was rebuilding after civil war. Colonial economies were squeezed. The 1920s' prosperity was, for many people, an illusion built on debt and unsustainable financial speculation.</p>

<h3>The Great Depression</h3>
<p>On <strong>October 29, 1929</strong> ("Black Tuesday"), the New York stock market crashed. Within weeks, panic spread through banks and businesses worldwide. By 1933, U.S. GDP had fallen by about 30%. <strong>Roughly 25% of Americans</strong> were unemployed. Germany's unemployment rate hit 30%. International trade collapsed. Tens of millions of people, on every continent, were thrown into poverty.</p>

<p>The <strong>Great Depression</strong> was the worst economic crisis in modern history. It also discredited two pillars of the existing order: free-market capitalism (which had visibly failed) and parliamentary democracy (which seemed unable to fix the failure). In country after country, voters turned to extreme parties promising radical solutions. The U.S. went left, electing <strong>Franklin Delano Roosevelt</strong> in 1932 with his "<strong>New Deal</strong>" of state-led recovery programmes. Most of continental Europe went hard right.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
If the Russian Revolution was the political earthquake of the early 20th century, the Great Depression was its economic earthquake. By 1933 the previously unthinkable was thinkable: that the entire capitalist liberal-democratic order might be dying, and something else — communism, fascism, or some combination — might be the future. People made political choices in 1933 that they wouldn't have made in 1929.
</div>

<h3>Mussolini and Italian Fascism</h3>
<p>The first major fascist movement to come to power was Italy's. <strong>Benito Mussolini</strong>, a former socialist journalist turned ultranationalist, founded the <strong>Fascist</strong> party in 1919. His <strong>Blackshirts</strong> — uniformed squads — broke up strikes and beat up socialists across northern Italy. In October 1922, Mussolini staged the "<strong>March on Rome</strong>" and the king (afraid of civil war) appointed him prime minister. By 1925 he had abolished other parties and made himself <em>Il Duce</em>, "the leader" — Italy's dictator.</p>

<p>Italian fascism mixed nationalism, militarism, anti-communism, corporatism (industries organised under state-controlled "syndicates"), and a cult of personality around Mussolini. It was not as ideologically extreme as German Nazism — it was anti-Semitic only late and somewhat reluctantly — but it provided the template that other fascists would follow.</p>

<h3>The Weimar Republic</h3>
<p>Germany's interwar government was the <strong>Weimar Republic</strong> (1919–1933) — a parliamentary democracy with a brilliant constitution but a terrible political climate. Saddled with Versailles, hyperinflation, and the "stab in the back" myth, Weimar was attacked from both far left (communists who attempted uprisings in 1919, 1921, 1923) and far right (Nazis, monarchists, paramilitaries).</p>

<p>The Weimar years were also a cultural explosion. Berlin became Europe's most adventurous city — birthplace of <strong>Bauhaus</strong> design, the films of <strong>Fritz Lang</strong> and <strong>F. W. Murnau</strong>, the music of <strong>Kurt Weill</strong>, the social science of the <strong>Frankfurt School</strong>. The world of <em>Cabaret</em> was real. So was its surrounding political violence.</p>

<h3>The Rise of Hitler</h3>
<p>The Nazi Party (NSDAP), founded in 1920 and led from 1921 by <strong>Adolf Hitler</strong>, was a fringe Bavarian movement until the Depression. Hitler's failed <strong>Beer Hall Putsch</strong> of 1923 had landed him in prison, where he wrote <em>Mein Kampf</em>, laying out his programme: undo Versailles, expel Jews from German life, conquer "living space" (<em>Lebensraum</em>) in eastern Europe, and unite all German speakers under one Reich.</p>

<p>The Depression brought him to power. Nazi vote share went from 2.6% in 1928 to 18.3% in 1930 to <strong>37.4% in July 1932</strong> — making them the largest party in the Reichstag. Conservative elites, hoping to use Hitler against the communist threat, persuaded President Hindenburg to appoint him Chancellor in <strong>January 1933</strong>. Within six months, Hitler had abolished other parties, neutered the constitution, and built a totalitarian state. By 1934 he was both Chancellor and President; by 1936 the German economy was militarising.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In what year was Hitler appointed Chancellor of Germany?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1923</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">1933</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1939</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Appeasement and the Drift to War</h3>
<p>Hitler immediately began undoing Versailles. He withdrew from the League of Nations (1933), rebuilt the German military (1935), reoccupied the demilitarised Rhineland (1936), annexed Austria (1938), and demanded the Sudetenland from Czechoslovakia (1938). At each step, Britain and France — exhausted, scarred by WWI memory, divided politically — preferred concessions to confrontation. This policy is called <strong>appeasement</strong>.</p>

<p>The peak of appeasement was the <strong>Munich Agreement</strong> of September 1938, in which British Prime Minister <strong>Neville Chamberlain</strong> agreed to let Germany take the Sudetenland, in exchange for Hitler's promise of "no more territorial demands." Chamberlain returned to London claiming he had brought "peace for our time." Six months later, Germany seized the rest of Czechoslovakia. Six months after that, it invaded Poland.</p>

<h3>Asia and the Far East</h3>
<p>The interwar crisis was global. Japan, increasingly militarist, invaded Manchuria in 1931 and full-scale invaded China in 1937, beginning what the Chinese call the <strong>War of Resistance Against Japan</strong>. The atrocities of the Japanese army — including the <strong>Nanjing Massacre</strong> (1937–1938), in which up to 300,000 Chinese civilians were killed — were among the worst of the war years. The League of Nations condemned the invasion. Japan walked out.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>Spanish Civil War</strong> (1936–1939) — covered in its own lesson — was, in many ways, the dress rehearsal for WWII. Hitler and Mussolini sent troops, planes, and weapons to support Franco's Nationalists. Stalin sent help to the Republic. Britain and France stayed out, hoping to localise the conflict. They saw Guernica bombed and democracy crushed, and decided to do nothing. Many historians point to Spain as the moment the democracies' moral collapse became undeniable.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What policy did Britain and France follow toward Hitler in the late 1930s?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Pre-emptive war</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Appeasement</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Isolationism</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The interwar years are a study in how peace can fail. Versailles created bitterness; the Depression crashed economies; democracies struggled to respond; dictatorships offered apparent strength; appeasement prolonged the inevitable. By 1939 there were people in every European capital who could see the war coming, and almost no one in power who could stop it.
</div>

</div>`;

L["The Spanish Civil War"] = `<div class="lesson-body">

<h3>The Conflict That Foreshadowed a World War</h3>
<p>For three years, between July 1936 and April 1939, Spain was the focus of European politics. The Spanish Civil War was, on its surface, a domestic struggle between a left-wing Republican government and a right-wing Nationalist coup led by General <strong>Francisco Franco</strong>. But it became something larger: a battlefield where fascism, communism, anarchism, liberal democracy, and Catholic conservatism all met in arms. Hitler and Mussolini supported one side. Stalin supported the other. International volunteers came from across Europe and the Americas. By the time it ended, Franco had won. Spain would live under his dictatorship for 36 more years, and the lessons of the war — for both better and worse — would shape WWII.</p>

<h3>The Spanish Republic</h3>
<p>Spain entered the 1930s as one of Western Europe's poorer and more unstable countries. It had been a monarchy until 1931, when peaceful elections deposed King Alfonso XIII and proclaimed the <strong>Second Spanish Republic</strong>. The new Republic was reformist and divided. Left-wing governments tried to redistribute land, secularise education, and expand workers' rights. Right-wing governments tried to roll those reforms back. Both faced violent opposition from the other.</p>

<p>Spain in 1936 had a deeply polarised political landscape: anarchists (especially in Catalonia), socialists, communists, liberal republicans, conservative Catholics, monarchists (themselves split between Carlists and Alfonsists), and the fascist <strong>Falange</strong>. After narrowly winning the February 1936 election, the leftist <strong>Popular Front</strong> government lost control over rising violence — political assassinations, church-burnings, military conspiracies — that summer.</p>

<h3>The July 1936 Uprising</h3>
<p>On July 17–18, 1936, a group of right-wing generals launched a coup against the Republic. They expected a quick victory. Instead, the coup partly succeeded and partly failed: rebels seized roughly half of Spain — the conservative interior, parts of the south, and the Spanish protectorate of Morocco — but workers and loyal soldiers held the major cities of Madrid and Barcelona. The coup became a civil war.</p>

<p>The two sides were:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>The Nationalists</strong> — led by Franco. A coalition of military officers, landowners, the Catholic Church, monarchists, and the fascist Falange. Their slogan was the defence of <em>"God, Country, and Family"</em> against "godless communism."</li>
<li><strong>The Republicans</strong> — the legitimate government. A messy coalition of liberal republicans, socialists, communists, anarchists, and Basque and Catalan nationalists. Their slogan was the defence of democracy against fascism.</li>
</ul>

<h3>Foreign Intervention</h3>
<p>The war became international almost immediately. <strong>Hitler</strong> sent the German <strong>Condor Legion</strong> — air force, tanks, advisors — to fight for Franco. <strong>Mussolini</strong> sent up to 80,000 Italian troops. Together, German and Italian aid was decisive in the early war: it transported Franco's army from Morocco to Spain (the Republic's navy had blocked the sea route until German planes airlifted them across) and gave the Nationalists overwhelming air superiority.</p>

<p><strong>Stalin</strong> sent aid to the Republic — tanks, planes, and the secret police of the NKVD — but his support was more limited and came with strings: payment in gold (Spain shipped most of its gold reserves to Moscow) and increasing communist control over the Republican war effort. The result was that the Republic, while resisting fascism, also saw Stalin's agents murder anarchists and Trotskyists in Barcelona, especially during the bloody street battles of May 1937 — events George Orwell witnessed and described in <em>Homage to Catalonia</em>.</p>

<p>Britain and France formally adopted "<strong>non-intervention</strong>" — agreeing to ban arms shipments to either side. In practice, this hurt the Republic far more than the Nationalists, since Germany and Italy ignored the embargo and the democracies enforced it on themselves. The Republic's only consistent friend was Mexico.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Spain in 1936–1939 was a kind of pilot programme for fascism vs democracy that the wider European world watched obsessively. Volunteers travelled to Spain to fight on principle, the way some today travel to Ukraine. The bombs that fell on Guernica in 1937 fell, three years later, on Coventry, Rotterdam, and Warsaw, often dropped by the same German planes and pilots, using techniques the Condor Legion had refined in Spain.
</div>

<h3>The International Brigades</h3>
<p>About 35,000 foreign volunteers travelled to Spain to fight for the Republic in the <strong>International Brigades</strong>. They came from over 50 countries — Americans, Britons, French, Germans (including many anti-Nazi exiles), Italians, Russians, Yugoslavs, Cubans. Many were communists organised through the Comintern; many were not. The Lincoln Battalion (Americans), the British Battalion, the Thälmann Battalion (Germans) became famous.</p>

<p>The Brigades' courage was real, but their military impact was limited; the Republic's defeat was not for lack of effort. Famous people who went or wrote about Spain include <strong>Ernest Hemingway</strong> (war correspondent, then novelist of <em>For Whom the Bell Tolls</em>), <strong>George Orwell</strong> (who fought for the POUM Marxists and wrote <em>Homage to Catalonia</em>), <strong>André Malraux</strong>, <strong>Robert Capa</strong> (the great war photographer), and <strong>W. H. Auden</strong>.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which fascist powers sent direct military aid to Franco's Nationalists?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Britain and France</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Nazi Germany and Fascist Italy</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Soviet Union and Mexico</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Guernica</h3>
<p>The most famous single event of the war was the bombing of <strong>Guernica</strong>, a small Basque market town, on April 26, 1937. Two waves of German Condor Legion and Italian planes attacked the town on a market day, killing somewhere between 200 and 1,600 civilians (the exact number is still debated). Guernica had no military significance. The bombing was an experiment in <strong>terror bombing</strong> of civilian populations — the first true demonstration of what total war from the air would mean.</p>

<p>Pablo Picasso, who had been commissioned to paint a mural for the Spanish pavilion at the 1937 Paris International Exhibition, abandoned his original subject and painted <strong>Guernica</strong> — a black-and-white canvas of screaming women, dying horses, broken bodies, electric light bulbs. It is one of the most famous paintings of the 20th century and one of the most powerful anti-war works ever made.</p>

<h3>The Republic's Defeat</h3>
<p>Despite holding out for three years against better-armed Nationalists, the Republic gradually lost ground. The fall of <strong>Barcelona</strong> in January 1939 was decisive. Franco entered Madrid on April 1, 1939 and declared the war over. Hundreds of thousands of Republicans fled into France, where many were interned in camps; tens of thousands more were imprisoned, executed, or sent to forced labour by Franco's regime.</p>

<p>Franco's <strong>White Terror</strong> after the war killed an estimated 100,000–200,000 people. Mass graves of executed Republicans are still being uncovered in Spain. Franco ruled until his death in 1975, after which Spain transitioned to democracy. Spain has been wrestling, ever since, with how to remember its civil war.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The British poet <strong>W. H. Auden</strong>'s "<em>Spain 1937</em>" captures the moment perfectly: <em>"To-morrow, perhaps, the future... To-day the struggle."</em> Auden, like many of his generation, saw Spain as the place where the future of Europe was being decided. He turned out to be right. The future Hitler and Stalin would carve up between them in 1939 looked very much like the future being rehearsed in Spain in 1937.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the significance of the bombing of Guernica?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was a strategically vital military target</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">It was an early demonstration of terror bombing of civilians</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">It was the final battle that ended the war</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Spanish Civil War was a moral and political laboratory. Fascism won; democracy stayed on the sidelines; communism was both ally and predator; ordinary people from across the world chose sides on principle. The war revealed what Hitler and Mussolini intended for Europe and what the democracies were unwilling to do about it. Three years later, Britain and France would discover the consequences of having let Spain fall.
</div>

</div>`;

L["World War II"] = `<div class="lesson-body">

<h3>The Deadliest Conflict in Human History</h3>
<p>Between September 1, 1939 and September 2, 1945, the Second World War killed approximately <strong>60–80 million people</strong> — more than any other event in human history. About 3% of the world's population died. Whole cities — Warsaw, Tokyo, Hiroshima, Dresden, Nanjing — were destroyed. Six million Jews and millions of others were murdered in the Holocaust. The war ended with the first (and so far only) use of atomic weapons against people. Almost no aspect of modern life — from the borders of states to the institutions of international order to the technology of computing and aviation — is untouched by it.</p>

<p>WWII was, in many respects, the war WWI failed to finish. The same powers, with the same grievances, fought again — except this time with industrial weapons capable of killing on an even larger scale. Understanding it is essential for understanding the second half of the 20th century and most of the present.</p>

<h3>The German Onslaught (1939–1941)</h3>
<p>The war began with Germany's invasion of <strong>Poland</strong> on September 1, 1939, two weeks after Hitler and Stalin had signed the secret <strong>Molotov–Ribbentrop Pact</strong> dividing Eastern Europe between them. Britain and France declared war on Germany; the Soviet Union invaded Poland from the east on September 17. Poland was overrun in five weeks.</p>

<p>What followed in 1940 was a series of stunning German victories. <strong>Blitzkrieg</strong> ("lightning war") combined fast armoured movement with close air support, smashing French and British forces in just six weeks (May–June 1940). France surrendered. The British Expeditionary Force barely escaped at <strong>Dunkirk</strong>. The <strong>Battle of Britain</strong> — fought entirely in the air — saved Britain from invasion in the summer and autumn of 1940. RAF pilots, including many Polish, Czech, and Commonwealth volunteers, defeated the Luftwaffe in the first major German setback of the war.</p>

<p>By June 1941, Germany controlled most of Europe — directly or through allied governments (Italy, Hungary, Romania, Bulgaria, Slovakia, Vichy France) and puppet regimes. Then, on June 22, 1941, Hitler launched <strong>Operation Barbarossa</strong>, the invasion of the Soviet Union — the largest land invasion in history.</p>

<h3>The Eastern Front</h3>
<p>The Eastern Front was the war's centre of gravity. Roughly <strong>three-quarters of all German military casualties</strong> occurred there. Soviet civilian and military deaths reached perhaps <strong>27 million</strong> — by far the heaviest national toll of any combatant.</p>

<p>The German invasion in 1941 came close to victory. The Wehrmacht reached the suburbs of Moscow before being stopped, by a combination of brutal Russian winter, fresh Siberian troops, and Stalin's refusal to leave the capital. The siege of <strong>Leningrad</strong> (1941–1944) killed perhaps a million Soviet civilians, mostly from starvation. The Battle of <strong>Stalingrad</strong> (Aug 1942 – Feb 1943) was the war's turning point: an entire German army was surrounded and destroyed in the ruins of the city. After Stalingrad, the Red Army drove west — and never lost the initiative again.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Most of what English-speaking audiences know about WWII focuses on Western Europe and the Pacific. The reality is that the war's largest battles and most of its dead were on the Eastern Front. To imagine WWII without including the Soviet Union is roughly like imagining WWI without including the Western Front. The scale is incomprehensible from any other perspective.
</div>

<h3>The Pacific War</h3>
<p>Japan's part of the war began earlier and ended later than Germany's. Japan had been at full-scale war with China since 1937. On <strong>December 7, 1941</strong>, Japan attacked the U.S. Pacific Fleet at <strong>Pearl Harbor</strong>, hoping to cripple American naval power before the U.S. could respond to Japanese expansion. The attack failed strategically — the U.S. carriers were at sea — and brought the U.S. into the war.</p>

<p>Japan rapidly conquered Southeast Asia: the Philippines, Malaya, Singapore, Indonesia, Burma. Then, at the <strong>Battle of Midway</strong> (June 1942), the U.S. Navy destroyed four Japanese aircraft carriers — the heart of the Imperial fleet. From there, the United States advanced island-by-island toward Japan. The campaign was brutal: <strong>Iwo Jima</strong>, <strong>Okinawa</strong>, the firebombing of Tokyo (which killed perhaps 100,000 civilians in a single night, March 9–10, 1945).</p>

<p>The war ended with the U.S. dropping atomic bombs on <strong>Hiroshima</strong> (August 6, 1945, ~140,000 dead by year's end) and <strong>Nagasaki</strong> (August 9, ~70,000 dead). Soviet forces declared war on Japan and overran Manchuria. Japan surrendered on August 15. The war ended on September 2 aboard the USS Missouri in Tokyo Bay.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event brought the United States into WWII?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The German invasion of Poland</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Japanese attack on Pearl Harbor</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The fall of France</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Holocaust</h3>
<p>Even amid the catastrophe of WWII, one set of crimes stands apart: the systematic, industrial murder of Europe's Jews. From 1941, the Nazi regime moved from prewar persecution and ghettoisation to mass extermination. <strong>Einsatzgruppen</strong> (death squads) shot perhaps 1.5 million Jews and others in the Soviet Union. Then, from 1942, six dedicated <strong>extermination camps</strong> in occupied Poland — Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek — used gas chambers to murder Jews on an unprecedented scale.</p>

<p>The death toll is estimated at <strong>6 million Jews</strong>, plus millions more victims: Soviet POWs, Roma and Sinti, Polish civilians, gay men, disabled people, communists, and other targeted groups. Total Nazi victims of mass murder reach perhaps 17 million in addition to combat deaths.</p>

<p>The Holocaust is treated more fully in our <strong>Genocides of the 20th Century</strong> lesson. What matters here is that it is inseparable from the war: WWII's geography (German conquest of eastern Europe, where most European Jews lived) and the cover that wartime secrecy provided made the Holocaust possible. As Allied armies liberated camps in 1945, they uncovered evidence that shocked the world and would shape postwar law (the Nuremberg trials, the UN Genocide Convention).</p>

<h3>D-Day, the Western Front, and Final Defeat</h3>
<p>The Western Allies opened the second front Stalin had long demanded on <strong>June 6, 1944</strong> — <strong>D-Day</strong> — when 156,000 American, British, Canadian, and other Allied troops landed in <strong>Normandy</strong>. By August, Paris was liberated. By March 1945, the Allies were across the Rhine. The Soviets entered <strong>Berlin</strong> in late April. <strong>Hitler killed himself</strong> in his Berlin bunker on April 30. Germany surrendered unconditionally on May 8 — <strong>Victory in Europe Day</strong>.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>D-Day</strong> landings on June 6, 1944 were the largest amphibious operation in military history. About 7,000 ships, 11,000 aircraft, and 156,000 troops crossed the English Channel in a single morning. The casualties on the day were heavy — about 4,400 Allied dead — but the operation succeeded in establishing a foothold in occupied France. Within eleven months, Nazi Germany was defeated.
</div>

<h3>The Postwar World</h3>
<p>WWII left two superpowers — the United States and the Soviet Union — and a continent of ruined cities. The pre-war great powers (Britain, France, Germany, Japan) were all either destroyed, occupied, or reduced to dependence on the U.S. The <strong>United Nations</strong> was founded in 1945 to prevent another world war. The <strong>Bretton Woods</strong> agreements created the IMF and World Bank to manage the postwar economy. The <strong>Marshall Plan</strong> (1948) poured American aid into rebuilding Western Europe.</p>

<p>The seeds of the <strong>Cold War</strong> were planted before the war ended. By 1948 the Soviet Union had imposed communist regimes across Eastern Europe and the U.S. and Britain were moving to contain Soviet expansion. The world order that had collapsed in 1914 had finally been replaced — by a bipolar U.S.–Soviet rivalry that would dominate the next 45 years.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which front saw the heaviest fighting and casualties of WWII in Europe?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Western Front</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Eastern Front</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Italian Front</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> WWII is the deadliest conflict in human history and the formative event of the modern world order. It defeated fascism, broke the European empires, made the United States and Soviet Union into superpowers, and produced the moral and legal frameworks (human rights, the UN, the Genocide Convention) that still shape global politics. Almost everything about the late 20th and early 21st centuries traces back, somehow, to its rubble.
</div>

</div>`;

L["Genocides of the 20th Century"] = `<div class="lesson-body">

<h3>The Word Itself</h3>
<p>The word <span class="vocab-pill">genocide</span> was coined in 1944 by a Polish-Jewish lawyer named <strong>Raphael Lemkin</strong>, combining the Greek <em>genos</em> (race, tribe) with the Latin <em>cide</em> (killing). Lemkin had spent the war years documenting what was happening to his own family and to the Jews of Europe, and he wanted a word for what existing terms ("massacre," "persecution") could not adequately describe: the deliberate destruction, in whole or in part, of an ethnic, religious, or national group.</p>

<p>The word is now codified in international law (the 1948 <strong>UN Genocide Convention</strong>). Lemkin himself lost 49 members of his family to the Nazis. He died poor in 1959 — having forced the world to give a name to what had killed his family, and to most of the people in this lesson.</p>

<h3>The Armenian Genocide (1915–1923)</h3>
<p>The 20th century's first major genocide was the destruction of the Armenian population of the Ottoman Empire. Armenians had lived in eastern Anatolia for over 2,500 years; by the early 20th century, they were a Christian minority of about 2 million in a Muslim-majority empire.</p>

<p>During WWI, with the empire collapsing, the <strong>Young Turk</strong> government decided that the Armenians — accused of sympathising with Russia — must be eliminated. From April 24, 1915 (still commemorated as Armenian Genocide Memorial Day) onward, Armenian leaders were arrested, men were drafted into labour battalions and worked to death, and <strong>women, children, and the elderly were marched into the Syrian desert</strong>, where they died of starvation, exposure, or massacre. About <strong>1.5 million Armenians</strong> were killed.</p>

<p>The genocide was witnessed by Western diplomats and missionaries, including U.S. Ambassador Henry Morgenthau. After the war, some perpetrators were briefly tried in Ottoman courts. Then the political winds changed. Modern Turkey has, until recently, officially denied that what happened was genocide — a denial that strains relations with Armenia and the Armenian diaspora to this day.</p>

<h3>The Holodomor (1932–1933)</h3>
<p>In 1932–1933, Soviet Ukraine experienced a famine that killed approximately <strong>4 million people</strong>. The famine was largely man-made: Stalin's policy of forced <strong>collectivisation</strong> required peasants to surrender grain to the state on impossible terms. Quotas for Ukraine were set higher than for other regions, even as harvests collapsed. Ukrainian villages that failed to meet quotas were "blacklisted" — denied access to all manufactured goods. Borders were sealed to keep peasants from leaving in search of food. Whole villages were starved into silence.</p>

<p>Whether the Holodomor (Ukrainian for "death by hunger") meets the legal definition of genocide is debated, partly because the famine spread beyond Ukraine into other Soviet regions. But its targeting of Ukrainian peasants — the social base of Ukrainian national identity — has led many historians and Ukraine itself to formally classify it as a genocide. Russia disputes this, and the question is now politically central to the Russian–Ukrainian conflict.</p>

<h3>The Holocaust (1941–1945)</h3>
<p>The most extensively documented genocide in history is the <strong>Holocaust</strong> — the Nazi regime's industrial-scale murder of Europe's Jews. Before the Holocaust, Europe had a Jewish population of about 9 million; afterward, about 3 million. Six million Jews — including 1.5 million children — were killed.</p>

<p>The killing began in 1941 with the <strong>Einsatzgruppen</strong>, mobile killing squads that followed the Wehrmacht into the Soviet Union and shot Jews, Roma, and others on the edges of mass graves. Roughly 1.5 million people died this way. From 1942, the Nazi regime moved to <strong>industrialised killing</strong>: six dedicated extermination camps — <strong>Auschwitz-Birkenau, Treblinka, Sobibor, Belzec, Chelmno, Majdanek</strong> — used gas chambers (carbon monoxide, then Zyklon B) to murder up to thousands of people a day.</p>

<p>The Holocaust also targeted Roma and Sinti (estimates: 250,000–500,000 dead), Soviet POWs (over 3 million dead in German captivity), Polish civilians, disabled people (the "<strong>T4</strong>" euthanasia programme), gay men, Jehovah's Witnesses, communists, and others. The <strong>concentration camp system</strong> at the heart of all of this would become the defining symbol of 20th-century state evil.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
At <strong>Auschwitz-Birkenau</strong>, the largest single Nazi camp, approximately 1.1 million people were killed — about 90% of them Jews. Most were murdered within hours of arriving on transports from across Europe. The camp's ruins are now a memorial museum visited by millions; the site is preserved deliberately as evidence. The <strong>Wannsee Conference</strong> of January 1942, where senior Nazis coordinated the "Final Solution," lasted only 90 minutes — a chillingly short bureaucratic meeting.
</div>

<h3>The Cambodian Genocide (1975–1979)</h3>
<p>In April 1975, the radical communist <strong>Khmer Rouge</strong> under <strong>Pol Pot</strong> seized power in Cambodia. They aimed to create an agrarian utopia by forcing the entire urban population into the countryside to work in collective farms. Cities were emptied at gunpoint. Money, education, religion, foreign languages, and modern medicine were abolished. Anyone associated with the previous government, the educated classes, or ethnic minorities (Vietnamese, Cham Muslims, Chinese) was a target.</p>

<p>In just under four years, the Khmer Rouge killed approximately <strong>1.7 to 2 million Cambodians</strong> — about a quarter of the country's population — through executions, forced labour, starvation, and disease. The notorious <strong>Tuol Sleng (S-21)</strong> torture centre in Phnom Penh is now a museum; mass burial sites at <strong>Choeung Ek</strong> and elsewhere are called the "<strong>Killing Fields</strong>."</p>

<p>The regime fell only when Vietnam invaded in late 1978, fed up with Khmer Rouge attacks across the border. International justice was slow: not until the 2000s were senior Khmer Rouge leaders tried, and Pol Pot himself died in 1998 without ever being convicted.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who coined the word "genocide" in 1944?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Hannah Arendt</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Raphael Lemkin</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Albert Camus</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Rwandan Genocide (1994)</h3>
<p>In just <strong>100 days</strong> between April and July 1994, between <strong>500,000 and 1 million ethnic <span class="vocab-pill">Tutsi</span></strong> and moderate Hutu were killed in Rwanda — about 70% of the Tutsi population. The killing rate was higher than the Holocaust's. The weapons were mostly machetes; the perpetrators were largely ordinary Hutu civilians, organised by Hutu Power militias (the <em>Interahamwe</em>) and incited by radio propaganda calling Tutsis "<em>cockroaches</em>" to be exterminated.</p>

<p>The international community failed catastrophically. UN peacekeepers were on the ground but had no mandate to intervene; they were withdrawn after Belgian peacekeepers were killed. The U.S. government, traumatised by the recent failure in Somalia, deliberately avoided using the word "genocide" because admitting it would have triggered legal obligations. The <strong>French government</strong> had backed the Hutu-led regime before and during the genocide. By the time the Tutsi-led Rwandan Patriotic Front (RPF) captured Kigali and stopped the killing, the international community had stood by while a country annihilated nearly a million of its own people.</p>

<h3>The Bosnian Genocide and Srebrenica (1992–1995)</h3>
<p>During the breakup of Yugoslavia, the <strong>Bosnian War</strong> (1992–1995) saw <strong>Bosnian Serb</strong> forces under <strong>Radovan Karadžić</strong> and <strong>Ratko Mladić</strong> conduct a campaign of <strong>ethnic cleansing</strong> against Bosnian Muslims (Bosniaks) and Bosnian Croats. Perhaps 100,000 people were killed across the war, most of them Bosniaks.</p>

<p>The single worst atrocity was at <strong>Srebrenica</strong> in July 1995. Bosnian Serb forces captured the UN-declared "safe area" and over five days <strong>massacred more than 8,000 Bosniak men and boys</strong>. The killings were filmed, documented, and witnessed by Dutch peacekeepers who were powerless to intervene. The <strong>International Criminal Tribunal for the former Yugoslavia</strong> (ICTY) and the International Court of Justice have since ruled Srebrenica a genocide. Mladić and Karadžić were eventually convicted.</p>

<h3>Justice, Memory, and Future Prevention</h3>
<p>The 20th century's genocides produced new institutions: the <strong>UN Genocide Convention</strong> (1948), the <strong>Nuremberg Trials</strong> (1945–1946) and Tokyo Trials (1946–1948), and (much later) the ICTY (1993), the International Criminal Tribunal for Rwanda (1994), and the <strong>International Criminal Court</strong> (founded 2002). These institutions are imperfect: many perpetrators escape justice; major powers refuse to ratify them. But the principle that mass murderers can be held accountable across borders is itself a major 20th-century innovation.</p>

<p>The phrase "<strong>Never Again</strong>" — coined to memorialise the Holocaust — has been violated repeatedly. Cambodia, Rwanda, Bosnia, the Yazidi genocide by ISIS, the ongoing crisis in Xinjiang and other contemporary atrocities all happened after "Never Again" became an official commitment. The lesson is uncomfortable: genocide is not an aberration but a recurring possibility, and preventing it requires more than slogans.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly what percentage of Rwanda's Tutsi population was killed in the 1994 genocide?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">10%</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">30%</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">About 70%</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The 20th century, despite its scientific and material progress, was the most violent in human history. Genocide — the deliberate destruction of human groups — was a recurring feature of it. The names (Armenia, Holocaust, Holodomor, Cambodia, Rwanda, Srebrenica) are not separate stories. They are the same story told many times. The legal and moral frameworks built in response to them are real but fragile, and their continued strength depends on the choices of every generation that comes after.
</div>

</div>`;

// ═══════════════════════════════════════════════════════
// ERA 7: THE CONTEMPORARY WORLD
// ═══════════════════════════════════════════════════════

L["The Cold War"] = `<div class="lesson-body">

<h3>A World Divided in Two</h3>
<p>For 45 years, between 1945 and 1991, world politics was organised around a single rivalry: the United States versus the Soviet Union. They never directly fought each other — that's the "cold" in <span class="vocab-pill">Cold War</span> — but they competed in every other way: militarily, ideologically, technologically, culturally, and through dozens of <strong>proxy wars</strong> in Korea, Vietnam, Angola, Afghanistan, Nicaragua, and beyond. The arms race they ran built nuclear arsenals capable of destroying civilisation many times over. The space race they ran put humans on the Moon. By the time the Soviet Union finally collapsed in 1991, the world they had shaped together looked nothing like the one of 1945.</p>

<p>Almost everything about the late 20th century — the size of the U.S. military, the geography of the European Union, the politics of decolonisation, even the structure of the modern internet — has Cold War fingerprints on it.</p>

<h3>The Origins (1945–1947)</h3>
<p>The wartime alliance between the U.S., Britain, and the USSR was always fragile — a marriage of convenience against Hitler. As soon as Germany surrendered, disagreements about postwar Europe surfaced. Stalin wanted a buffer of friendly states on the USSR's western border (his country had been invaded twice from there in 30 years). The U.S. and Britain wanted free elections and open economies. Both could not be satisfied.</p>

<p>By 1947, Eastern European countries — Poland, East Germany, Czechoslovakia, Hungary, Romania, Bulgaria — had been forced into communist governments under Soviet supervision. Winston Churchill, in March 1946, declared that an "<strong>iron curtain</strong>" had descended across Europe. President <strong>Harry Truman</strong> announced the <strong>Truman Doctrine</strong> in 1947 — the U.S. would support free peoples resisting communist subjugation. The <strong>Marshall Plan</strong> later that year poured American aid into Western Europe to rebuild it. The Cold War was on.</p>

<h3>Berlin: The Frontline City</h3>
<p>Berlin sat awkwardly in occupied Germany — divided into U.S., British, French, and Soviet zones, but located 100 miles inside the Soviet zone. It became the Cold War's most visible flashpoint. In June 1948, Stalin tried to force the Western Allies out by blockading the city's road and rail links. The Allies responded with the <strong>Berlin Airlift</strong> (1948–1949), flying in food and fuel for over a year until Stalin backed down. The airlift was perhaps the Cold War's first clear Western win.</p>

<p>In 1961, with East Germans fleeing west in growing numbers, the East German government built the <strong>Berlin Wall</strong>. For 28 years it physically divided the city — a 155-km concrete barrier guarded by minefields and machine-gun towers. Hundreds died trying to cross. The Wall became the era's defining symbol.</p>

<h3>Korea, Cuba, Vietnam</h3>
<p>The Cold War "stayed cold" between superpowers but burned hot elsewhere. The <strong>Korean War</strong> (1950–1953) began when Soviet-backed North Korea invaded U.S.-backed South Korea. UN forces (mostly American), then Chinese troops, intervened. The war ended in stalemate roughly along the original border. Roughly 3–4 million Koreans died. The peninsula remains divided today.</p>

<p>The closest the Cold War came to going hot was the <strong>Cuban Missile Crisis</strong> (October 1962). The Soviet Union, allied with Fidel Castro's Cuba, secretly began installing nuclear missiles 90 miles off the Florida coast. President <strong>John F. Kennedy</strong> imposed a naval blockade and demanded their removal. For thirteen days, the world held its breath. A back-channel deal was reached — the Soviets withdrew the Cuban missiles in exchange for the secret U.S. removal of missiles from Turkey — but the crisis showed how easily the war could turn nuclear.</p>

<p>The longest, most divisive Cold War proxy war was <strong>Vietnam</strong>. After French colonial defeat in 1954, the country was divided — communist North, U.S.-backed South. The U.S. gradually escalated involvement through the 1960s, peaking at over 500,000 troops by 1968. The war ended in 1975 with North Vietnamese victory, after the Tet Offensive (1968) had destroyed American confidence in winning. The U.S. lost about 58,000 troops. Vietnamese deaths reached perhaps 2–3 million. The war fractured American politics for a generation.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The Cold War wasn't fought directly because both sides understood that direct war would mean nuclear war, and nuclear war would mean civilisation. So they fought everywhere else, with everyone else. For people in Korea, Vietnam, Cambodia, Angola, Mozambique, Nicaragua, Afghanistan, El Salvador, and elsewhere, the "cold" war was very, very hot.
</div>

<h3>The Nuclear Arms Race</h3>
<p>By the 1980s, the U.S. and USSR each had over 20,000 nuclear warheads. The doctrine that kept them from using them was called <strong>Mutually Assured Destruction</strong> (<span class="vocab-pill">MAD</span>) — both sides knew that any first strike would be answered with a second strike that would annihilate the attacker. The world was, in effect, kept alive by the certainty of suicide.</p>

<p>This produced strange logic. Both sides built more weapons because building fewer might tempt a first strike. Both invested in early-warning systems. Both built secret bunkers for their leaders. Both came close, more than once, to accidental nuclear war: in 1983 alone, Soviet officer <strong>Stanislav Petrov</strong> ignored a satellite warning of incoming U.S. missiles (it was a false alarm); two months later, NATO's <strong>Able Archer</strong> exercise nearly convinced Soviet leaders that a first strike was imminent.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What does MAD (Mutually Assured Destruction) describe?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A medical condition affecting Cold War leaders</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The doctrine that any nuclear attack would trigger a devastating retaliation</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A treaty between the U.S. and USSR</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Détente and Re-Escalation</h3>
<p>The 1970s saw a partial thaw — <strong>détente</strong> — including arms control treaties (SALT I, 1972), the Helsinki Accords (1975), and Nixon's surprise opening to communist China (1972). The latter — an alliance between the world's largest capitalist economy and the world's largest communist country, against the Soviet Union — was one of the era's most consequential diplomatic moves.</p>

<p>Détente fell apart by the late 1970s. The Soviet invasion of <strong>Afghanistan</strong> in 1979 killed it; the U.S. responded by funding Afghan mujahideen — a campaign that, decades later, would produce some of its own blowback. President <strong>Ronald Reagan</strong> (r. 1981–1989) returned to confrontational rhetoric, calling the USSR an "evil empire" and dramatically expanding the U.S. military. The arms race re-accelerated.</p>

<h3>The Soviet Collapse</h3>
<p>By the mid-1980s, the Soviet Union was struggling. Its economy was stagnant. Its Afghan war was unwinnable. Its Eastern European empire was restless. The new Soviet leader, <strong>Mikhail Gorbachev</strong> (in office 1985–1991), introduced <span class="vocab-pill">glasnost</span> (openness) and <span class="vocab-pill">perestroika</span> (restructuring) — reforms meant to save the USSR by liberalising it. The reforms instead accelerated its collapse.</p>

<p>1989 brought a cascade of revolutions across Eastern Europe. Communist governments fell, in most cases peacefully — Poland (June), Hungary (October), East Germany (the <strong>Berlin Wall</strong> opened on November 9), Czechoslovakia ("the <strong>Velvet Revolution</strong>", November–December), Romania (December, with Ceaușescu executed). By 1991, the Soviet Union itself had dissolved into 15 independent republics. The Cold War was over.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
On the night of <strong>9 November 1989</strong>, an East German official mistakenly announced at a press conference that East Berliners could now travel freely to West Berlin. Crowds rushed the wall. Confused border guards, with no orders to stop them, opened the gates. Within hours, the Berlin Wall had fallen — not by demolition crew or government decree, but by the simple weight of people walking through. It is one of the great unscripted moments of modern history.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In what year did the Berlin Wall fall?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1985</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">1989</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1991</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Cold War shaped almost every dimension of 20th-century global politics, from decolonisation to economic policy to popular culture. Its end in 1989–1991 was greeted, briefly, as the "end of history" — capitalist liberal democracy as the only model standing. That triumphalism turned out to be premature, but the world we inherit really is the one the Cold War's outcome made possible.
</div>

</div>`;

L["The Space Race & Exploration"] = `<div class="lesson-body">

<h3>Off the Planet</h3>
<p>For all of human history before 1957, every human being who had ever lived had spent their entire existence on the surface of one planet. Then, on October 4, 1957, the Soviet Union launched a small metal sphere called <strong>Sputnik 1</strong> into orbit, and humanity moved — for the first time, in tiny numbers — into space. Within twelve years, two American astronauts had walked on the Moon. Within fifty years, robotic spacecraft had visited every planet in the solar system, including Pluto. It is one of the most extraordinary scientific and engineering achievements in human history — and most of it happened because of the Cold War.</p>

<h3>Why the Space Race Happened</h3>
<p>Both the U.S. and USSR ended WWII with German rocket scientists, captured V-2 rocket designs, and the awareness that intercontinental rockets could deliver nuclear warheads anywhere on Earth in 30 minutes. The technologies of nuclear missiles and space exploration are, fundamentally, the same — a rocket that can launch a satellite can launch a warhead. So the space race was both genuine science and Cold War theatre.</p>

<p>The shock of <strong>Sputnik</strong> in October 1957 — a Soviet satellite passing visibly over American cities every 90 minutes — galvanised the U.S. response. Congress quickly created <strong>NASA</strong> in 1958. Federal spending on science education exploded. President <strong>John F. Kennedy</strong> declared in 1961 that America would put a man on the Moon "before this decade is out." NASA's budget, in real terms, peaked at about 4% of the federal budget in the mid-1960s — comparable to U.S. military spending in some recent years.</p>

<h3>The Soviets Lead First</h3>
<p>For most of the early space race, the Soviets were ahead. Beyond Sputnik, they sent:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Laika</strong> — the first dog in orbit (1957). She did not survive — but she demonstrated that living things could survive launch.</li>
<li><strong>Yuri Gagarin</strong> — the first human in space (April 12, 1961). He completed one orbit in his Vostok 1 capsule and became one of the most famous men of the 20th century.</li>
<li><strong>Valentina Tereshkova</strong> — the first woman in space (1963). It would be 19 more years before the Soviets sent another woman; the Americans wouldn't send <strong>Sally Ride</strong> until 1983.</li>
<li><strong>Alexei Leonov</strong> — the first spacewalk (1965).</li>
</ul>

<p>The Soviet space programme was led by the brilliant and obsessively secretive engineer <strong>Sergei Korolev</strong>, whose identity was a state secret during his lifetime. When he died in 1966, Soviet space achievements stalled.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
For roughly seven years, the Soviet Union was beating the U.S. at almost every public space milestone. The Americans were spending more, but Soviets were getting there first. Then Korolev died, and the U.S. — with its vastly larger industrial and scientific base — pulled ahead decisively. Nobody outside the Kremlin knew, at the time, just how much the Soviet programme depended on a single man.
</div>

<h3>The Moon</h3>
<p>The U.S. <strong>Apollo programme</strong> was one of the largest engineering projects in human history. At its peak, NASA employed over 400,000 people. The <strong>Saturn V</strong> rocket — still the largest rocket ever flown to operational use — could lift 140 tonnes to low Earth orbit and carry men to the Moon.</p>

<p>The early Apollo missions were tragic. <strong>Apollo 1</strong> (1967) caught fire on the launch pad during a test, killing all three astronauts. The programme came back. <strong>Apollo 8</strong> orbited the Moon at Christmas 1968 — the first time humans had left Earth's gravity well — and broadcast a Christmas Eve reading of Genesis to a global audience.</p>

<p>Then, on <strong>July 20, 1969</strong>, <strong>Neil Armstrong</strong> and <strong>Buzz Aldrin</strong> landed the lunar module <em>Eagle</em> on the Sea of Tranquility while <strong>Michael Collins</strong> orbited above. Armstrong's first words from the Moon — <em>"That's one small step for [a] man, one giant leap for mankind"</em> — were heard by an estimated 600 million people, the largest live audience for any event up to that point.</p>

<p>Five more Apollo missions reached the Moon between 1969 and 1972. Twelve men in total walked on its surface. Then the Apollo programme was cancelled. No human being has been to the Moon since 1972. (NASA's <strong>Artemis</strong> programme, in the 2020s, aims to return.)</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who was the first human in space?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Neil Armstrong</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Yuri Gagarin</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">John Glenn</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Robotic Solar System</h3>
<p>While astronauts captured public imagination, robotic spacecraft did most of the actual exploration. The list of achievements is staggering:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Mariner 4</strong> (1965) — first close flyby of Mars, returning the first photographs of another planet's surface.</li>
<li><strong>Venera 7</strong> (1970) — first spacecraft to land on another planet (Venus). Lasted 23 minutes in the 470°C surface heat before being crushed by atmospheric pressure.</li>
<li><strong>Pioneer 10 & 11</strong> (1972, 1973) — first probes to fly past Jupiter and Saturn, and to leave the solar system.</li>
<li><strong>Voyager 1 & 2</strong> (1977) — visited Jupiter, Saturn, Uranus (Voyager 2 only), and Neptune (Voyager 2). Voyager 1 is now the most distant human-made object, in interstellar space.</li>
<li><strong>Hubble Space Telescope</strong> (launched 1990) — revolutionised astronomy, providing the deepest images of the universe ever obtained.</li>
<li><strong>Mars rovers</strong> — <strong>Spirit</strong>, <strong>Opportunity</strong>, <strong>Curiosity</strong>, <strong>Perseverance</strong> — have driven across the Martian surface for years at a time.</li>
<li><strong>New Horizons</strong> (2006–2015) flew past Pluto, the last of the classical planets to be visited.</li>
<li><strong>Cassini</strong> (1997–2017) spent 13 years studying Saturn and its moons.</li>
</ul>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The famous photograph "<strong>Earthrise</strong>", taken from Apollo 8 in December 1968, showed Earth as a blue-green crescent rising over the Moon's grey horizon. It is sometimes credited with helping launch the modern environmental movement. Seeing the planet from outside, alone in space, made the abstract idea of a single, fragile biosphere visceral.
</div>

<h3>The Modern Space Era</h3>
<p>After Apollo, the U.S. focused on lower-Earth-orbit projects: the <strong>Space Shuttle</strong> programme (1981–2011), the <strong>International Space Station</strong> (continuously crewed since 2000, the largest object ever placed in space), and increasingly close cooperation with Russia and other nations.</p>

<p>In the 2000s and 2010s, private companies entered space in serious ways. <strong>SpaceX</strong>, founded by Elon Musk in 2002, achieved the first commercial orbital launch (2008), the first reusable orbital rocket (2015), and now launches more rockets per year than any country in history. China has its own space programme — landing on the Moon (2013, 2019), building its own space station, and planning crewed Moon missions. India, Japan, the EU, and others all have substantial space activities. Space, once the exclusive theatre of two superpowers, has become global.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">How many human beings have walked on the surface of the Moon?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">3</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">12</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">100</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Space Race was Cold War theatre, but its scientific achievements are real and astonishing. In a single human lifetime, our species went from being earthbound to having visited every classical planet, walked on the Moon, sent probes beyond the heliosphere, and continuously inhabited an orbital station. Whatever happens next in space, the people of the late 20th century crossed a threshold that nothing in our previous 200,000 years of existence had crossed.
</div>

</div>`;

L["Decolonisation"] = `<div class="lesson-body">

<h3>The End of the Empires</h3>
<p>In 1945, perhaps a third of the world's population lived under European colonial rule. By 1980, almost none did. In just 35 years, more than 80 new countries appeared — most of them in Asia and Africa — and the global political map was redrawn on a scale unmatched in modern history. <span class="vocab-pill">Decolonisation</span> is one of the great events of the 20th century. It was sometimes peaceful, often violent, and almost always more complicated than either nationalists or ex-imperialists wanted to admit.</p>

<p>Why did the empires end so quickly? WWII had bankrupted them. Anti-colonial movements that had been building for decades reached maturity. The new United Nations made imperialism increasingly illegitimate. The Cold War made both superpowers willing — for different reasons — to support decolonisation. And empires, once they began to crack, tended to crack everywhere at once.</p>

<h3>India and Pakistan</h3>
<p>The first major decolonisation was Britain's withdrawal from <strong>India</strong>. By 1945, the Indian National Congress under <strong>Mahatma Gandhi</strong> and <strong>Jawaharlal Nehru</strong> had built a mass movement Britain could no longer suppress. The Muslim League under <strong>Muhammad Ali Jinnah</strong> demanded a separate Muslim state. Britain, exhausted, agreed to transfer power.</p>

<p>The 1947 <strong>Partition</strong> divided the subcontinent into <strong>India</strong> (majority Hindu) and <strong>Pakistan</strong> (majority Muslim, in two non-contiguous wings — what is now Pakistan in the west, and what would later become Bangladesh in the east). The transition was catastrophic. As perhaps <strong>15 million people</strong> migrated across the new borders, communal violence killed somewhere between <strong>1 and 2 million</strong>. The Partition is one of the largest and bloodiest forced migrations in modern history. India and Pakistan have fought four wars since.</p>

<p>Burma (Myanmar) and Sri Lanka achieved independence the next year. The 200-year British Raj was over.</p>

<h3>Asia: A Continent Decolonises</h3>
<p>Indonesia declared independence from the Netherlands in August 1945, two days after Japan's surrender. The Dutch tried to reconquer their colony; after four years of war, they admitted defeat in 1949. Vietnam declared independence the same week, but the French (and then the Americans) tried to hold on for three more decades — a story covered in the Cold War lesson.</p>

<p>The Philippines became independent from the U.S. in 1946. Malaya in 1957. By the early 1960s, almost every major Southeast Asian colony was an independent state. The decolonisation of Asia was largely complete in 25 years.</p>

<h3>The Wind of Change in Africa</h3>
<p>Africa's decolonisation came mostly in the late 1950s and the 1960s. <strong>Ghana</strong> (1957), under <strong>Kwame Nkrumah</strong>, became the first Sub-Saharan colony to gain independence. In 1960 alone — sometimes called the <strong>Year of Africa</strong> — seventeen African countries became independent. British Prime Minister Harold Macmillan, addressing the South African parliament in February 1960, captured the moment: "<em>The wind of change is blowing through this continent.</em>"</p>

<p>Some independence transitions were peaceful (most British and French West African colonies). Others were violent. The <strong>Algerian War of Independence</strong> (1954–1962) killed perhaps half a million Algerians and French and helped bring down France's Fourth Republic. The <strong>Mau Mau uprising</strong> in Kenya (1952–1960) was met with British concentration camps that killed tens of thousands. Portuguese colonies — <strong>Angola</strong>, <strong>Mozambique</strong>, <strong>Guinea-Bissau</strong> — fought protracted wars from the 1960s until the 1974 collapse of Portugal's own dictatorship made independence possible.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
A 35-year decolonisation is, in historical terms, very fast. Africa went from being mostly European-ruled in 1955 to being almost entirely independent by 1975. By comparison, the post-Roman political landscape of Europe took roughly 500 years to settle into its medieval shape. The pace of decolonisation tells you something about how artificial — and how fragile — the colonial empires actually were.
</div>

<h3>The Settler-Colonial Holdouts</h3>
<p>The most violent decolonisations were where European settler populations refused to give up power:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Algeria</strong> — about 10% of the population was European; many had been there for generations. The 1962 settlement saw most of them flee to France.</li>
<li><strong>Rhodesia</strong> (modern Zimbabwe) — the white minority government unilaterally declared independence in 1965 to preserve white rule. After a guerrilla war, majority rule came in 1980.</li>
<li><strong>South Africa</strong> — though formally independent since 1910, the Afrikaner-dominated government instituted <strong>apartheid</strong> in 1948 — a comprehensive legal regime of racial separation. The African National Congress (ANC), led for decades from prison by <strong>Nelson Mandela</strong>, fought against it through international pressure and internal protest. Apartheid finally ended in the early 1990s; Mandela was released in 1990, and South Africa held its first democratic elections in 1994.</li>
</ul>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In what year was the Indian subcontinent partitioned into India and Pakistan?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1945</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">1947</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1960</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Neocolonialism and the Postcolonial Predicament</h3>
<p>Independence on paper did not always mean independence in practice. Many former colonies inherited:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Borders drawn by colonial powers</strong> that ignored ethnic, linguistic, or religious realities — leading to civil wars in places like Nigeria, Sudan, and Rwanda.</li>
<li><strong>Economies designed to extract raw materials</strong> for European industries, with little local processing capacity.</li>
<li><strong>Political institutions</strong> imitated from Westminster or Paris but transplanted into societies very different from those that had built them.</li>
<li><strong>Heavy debt</strong> to former colonial powers and Western financial institutions.</li>
</ul>

<p>The Ghanaian intellectual and first president of his country, <strong>Kwame Nkrumah</strong>, called this <span class="vocab-pill">neocolonialism</span> — formal independence with continued economic dependence. Many post-colonial countries struggled with coups, dictatorships, civil wars, and Cold War proxy conflicts in their first decades. Some — Singapore, South Korea — eventually became wealthy. Others remain among the world's poorest. The decolonisation period created the basic geography of the modern Global South, with all its possibilities and burdens.</p>

<h3>The Non-Aligned Movement</h3>
<p>Many newly independent states tried to chart a course between the U.S. and Soviet blocs. The <strong>Bandung Conference</strong> (1955) in Indonesia brought together leaders from 29 Asian and African countries — Nehru of India, Sukarno of Indonesia, Nasser of Egypt, Zhou Enlai of China, and others — to discuss anti-colonialism, anti-imperialism, and economic cooperation. The <strong>Non-Aligned Movement</strong> that grew from it eventually included over 100 countries.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
South Africa's <strong>Truth and Reconciliation Commission</strong> (1995–1998), chaired by Archbishop <strong>Desmond Tutu</strong>, became a model for how post-conflict societies can deal with the past — by offering amnesty in exchange for full disclosure of crimes committed under apartheid. It didn't satisfy everyone, but it allowed South Africa to transition from apartheid to democracy without descending into civil war or revenge. Variations of the model have been tried in over 40 other countries.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which of these countries fought the longest, bloodiest war for independence from a European power in the post-WWII era?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Ghana from Britain</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Algeria from France</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">India from Britain</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Decolonisation is one of the great political transformations in human history — the dismantling, in one generation, of empires that had taken centuries to build. Its results are mixed: real independence and self-determination on one hand; civil wars, economic dependence, and lasting damage from colonial-era extractions on the other. Most of the world's current borders, current ethnic conflicts, and current development challenges are shaped, in some way, by this period.
</div>

</div>`;

L["The Middle East Since 1945"] = `<div class="lesson-body">

<h3>The Region the World Watches</h3>
<p>Few regions have produced more global news, more international interventions, and more political transformations in the postwar era than the <strong>Middle East</strong>. The fall of the Ottoman Empire in 1922 had left European powers (mostly Britain and France) drawing artificial borders across the Arab world. After WWII, those mandates dissolved; new states appeared; oil was discovered in massive quantities; Israel was created; the Cold War turned the region into a chessboard; and a series of revolutions, wars, and uprisings has continued to roil it ever since.</p>

<p>The Middle East matters globally for three reasons: it sits at the geographical hinge of Eurasia and Africa; it holds about half the world's proven oil reserves; and it is the birthplace of three world religions whose followers number in the billions. None of these are likely to change soon.</p>

<h3>The Birth of Israel and the Palestinian Tragedy</h3>
<p>The post-WWI British <strong>Mandate of Palestine</strong> contained a Jewish minority and an Arab majority. Zionist immigration grew steadily in the 1920s and 30s, accelerated dramatically after the Holocaust. Tensions were violent on all sides. After the UN's 1947 partition plan, Britain pulled out in May 1948 and the State of <strong>Israel</strong> declared independence.</p>

<p>The next day, neighbouring Arab armies attacked. Israel won the <strong>1948 Arab-Israeli War</strong>, established its borders well beyond the UN partition lines, and saw approximately <strong>700,000 Palestinians</strong> displaced — an event Palestinians call the <span class="vocab-pill">Nakba</span> ("catastrophe"). Most ended up in refugee camps in Jordan, Lebanon, Syria, the West Bank, and Gaza, where their descendants still live. The Palestinian-Israeli conflict has continued in some form ever since.</p>

<p>The <strong>Six-Day War</strong> (June 1967) saw Israel preemptively defeat Egypt, Jordan, and Syria, capturing the Sinai, the Golan Heights, the West Bank, East Jerusalem, and Gaza. Most of these territories remain in dispute today. The <strong>Yom Kippur War</strong> (October 1973) — when Egypt and Syria attacked on Yom Kippur — was a closer call but ended with Israel's territorial gains intact.</p>

<p>The <strong>Camp David Accords</strong> (1978) produced the first peace treaty between Israel and an Arab state (Egypt). The <strong>Oslo Accords</strong> (1993) created the <strong>Palestinian Authority</strong> and seemed, briefly, to point toward a two-state solution. Two intifadas (1987–1993, 2000–2005), the Hamas takeover of Gaza (2007), and ongoing violence have made that solution recede. As of writing, the conflict remains unresolved.</p>

<h3>The Arab World and Pan-Arabism</h3>
<p>In the 1950s and 60s, many Arab states embraced <strong>Pan-Arab nationalism</strong> — the idea of a unified Arab identity transcending the borders Europeans had drawn. Its great champion was <strong>Gamal Abdel Nasser</strong>, who came to power in Egypt in a 1952 military coup, nationalised the <strong>Suez Canal</strong> in 1956 (provoking a failed British-French-Israeli invasion that signalled the end of European imperialism in the region), and briefly merged Egypt with Syria as the United Arab Republic (1958–1961).</p>

<p>Nasserism's high tide was the early 1960s. Israel's crushing victory in the 1967 war was a hammer blow from which Pan-Arabism never quite recovered. Nasser died in 1970; his successor Anwar Sadat moved Egypt toward peace with Israel and away from the Soviet Union.</p>

<h3>Iran: From Mosaddegh to Khomeini</h3>
<p>Iran's modern history is a sequence of dramatic ruptures. In 1953, a U.S./British-sponsored coup overthrew the democratically elected Prime Minister <strong>Mohammad Mosaddegh</strong>, who had nationalised Iran's oil. The Western-backed <strong>Shah</strong>, <strong>Mohammad Reza Pahlavi</strong>, ruled for the next 26 years — modernising rapidly, but also using SAVAK secret police to crush opposition.</p>

<p>In 1978–1979, mass protests forced the Shah into exile. The exiled cleric <strong>Ayatollah Khomeini</strong> returned to lead the <strong>Iranian Revolution</strong> — establishing the world's first modern <strong>Islamic Republic</strong>. The revolution merged Shia clerical rule with elements of representative government and produced enduring antagonism with the U.S. (especially after the 1979–1981 hostage crisis at the U.S. embassy in Tehran).</p>

<p>The <strong>Iran–Iraq War</strong> (1980–1988) — launched by Saddam Hussein's Iraq, then bogged down for eight years — killed perhaps a million people and exhausted both states without resolving anything. Saddam, having survived, would invade Kuwait two years later, prompting the 1991 <strong>Gulf War</strong>.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What is the Nakba?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The Israeli term for the 1948 war</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Palestinian term for the 1948 displacement of about 700,000 Palestinians</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A peace agreement signed in 1979</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Oil, the Gulf, and the Geopolitics of Energy</h3>
<p>The discovery of vast oil reserves transformed the Persian Gulf states from peripheral territories into some of the wealthiest places on Earth. <strong>Saudi Arabia</strong>, the United Arab Emirates, Kuwait, and Qatar became major U.S. allies and global financial powers. The <strong>OPEC</strong> oil embargo of 1973 (in retaliation for U.S. support of Israel) caused a global energy crisis and showed the Gulf's leverage.</p>

<p>The Gulf monarchies have built astonishing modern cities (Dubai, Abu Dhabi, Doha) on oil wealth. They have also imported large foreign labour forces under conditions ranging from ordinary migration to systems described by human-rights groups as forced labour. They have backed religious schools (especially Saudi-funded Wahhabism) across the Muslim world. They have funded both peace efforts and armed groups, depending on the moment. The Gulf is, in 2024, an economic and political player few would have predicted in 1945.</p>

<h3>The 21st Century: Wars and Uprisings</h3>
<p>The 21st century has been turbulent. The U.S. invaded <strong>Afghanistan</strong> in 2001 (after 9/11) and <strong>Iraq</strong> in 2003 (on false pretexts about weapons of mass destruction). Both wars ran for two decades. The Iraq invasion destabilised the country; the resulting power vacuum eventually contributed to the rise of <strong>ISIS</strong> (the Islamic State) in 2014.</p>

<p>The <strong>Arab Spring</strong> began in late 2010 in Tunisia, when a young vendor named Mohamed Bouazizi set himself on fire to protest official corruption. Protests spread to Egypt (Mubarak forced out, Feb 2011), Libya (Gaddafi overthrown and killed by NATO-backed rebels), Yemen (long civil war), Bahrain (crushed by Saudi intervention), and Syria. The <strong>Syrian Civil War</strong> that began in 2011 has killed over 500,000 people, displaced 13 million, and drawn in the U.S., Russia, Iran, Turkey, Hezbollah, ISIS, and Israel. Most Arab Spring uprisings ended in either civil war or restored autocracy. Tunisia, where the Arab Spring began, alone retained at least nominal democratic gains.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The 2003 U.S.-led invasion of <strong>Iraq</strong> is one of the most consequential foreign policy decisions of the 21st century. It removed Saddam Hussein but produced years of insurgency and sectarian civil war. The U.S. spent over $2 trillion. Iraqi war-related deaths reached perhaps 500,000. The chaos created space for ISIS, fueled instability in neighbouring Syria, and damaged American credibility in the region for a generation. It is studied in policy schools as a case of how not to plan a regime change.
</div>

<h3>Israeli–Palestinian Conflict and the Abraham Accords</h3>
<p>The Israeli–Palestinian conflict has remained unresolved through every era since 1948. The Oslo peace process collapsed in the early 2000s. Israeli settlement expansion in the West Bank has continued. The 2020 <strong>Abraham Accords</strong> normalised Israel's relations with several Gulf states (UAE, Bahrain, Sudan, Morocco) — a dramatic shift, since previously most Arab states had refused recognition until a Palestinian state existed. October 2023's Hamas attacks on Israel and Israel's subsequent war in Gaza produced one of the deadliest phases of the conflict in its history. The future, as of writing, is deeply uncertain.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What sparked the 1979 Iranian Revolution?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A direct U.S. invasion</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Mass protests against the Western-backed Shah</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Soviet pressure on the Iranian government</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The modern Middle East is shaped by colonial-era borders, oil, the Cold War, the founding of Israel, and a recurring tension between secular nationalism and religious revival. Its conflicts — Arab-Israeli, Iran-Iraq, Syrian, Yemeni — have killed millions and drawn in every great power. Understanding them requires holding many overlapping histories at once: imperial, religious, ethnic, economic. Few simplifications survive contact with the actual region.
</div>

</div>`;

L["South Asia Since Partition"] = `<div class="lesson-body">

<h3>A Subcontinent Reshaped</h3>
<p>The <strong>1947 Partition</strong> of British India into India and Pakistan was the largest, fastest, and bloodiest single act of state-creation in modern history. Within months, an estimated <strong>15 million people</strong> had migrated across the new borders and somewhere between <strong>1 and 2 million</strong> had been killed in communal violence. The wounds it inflicted have never fully healed — and the political map it produced has continued to shape over a billion and a half people's lives ever since.</p>

<p>This lesson covers the post-1947 history of the subcontinent: the trajectories of India and Pakistan, the secession of Bangladesh, the long war over Kashmir, and the rise of South Asia as one of the most dynamic and contested regions in the modern world.</p>

<h3>Independent India</h3>
<p>India inherited from Britain a sprawling, multilingual, mostly Hindu but officially secular republic. Its first Prime Minister, <strong>Jawaharlal Nehru</strong> (in office 1947–1964), pursued a vision of secular democracy, planned economic development, and non-alignment in the Cold War. Under Nehru, India built dams, steel mills, the Indian Institutes of Technology (IITs), and a relatively stable parliamentary democracy — remarkable in a low-income country of that scale.</p>

<p>India's first decades had hard moments. The 1962 <strong>Sino-Indian War</strong>, fought along the disputed Himalayan border, was a humiliating defeat for India. Nehru's daughter <strong>Indira Gandhi</strong> (PM 1966–1977 and again 1980–1984) ran a more authoritarian and populist government, including the controversial 1975–1977 "<strong>Emergency</strong>" period when she suspended civil liberties. She was assassinated by her Sikh bodyguards in 1984 after ordering a military operation against Sikh separatists at the Golden Temple.</p>

<p>Since the 1991 economic liberalisation reforms (under Finance Minister <strong>Manmohan Singh</strong>), India has shifted from a state-led economy toward private markets. GDP growth accelerated. The middle class expanded. Information technology, especially through cities like <strong>Bangalore</strong>, became a major export. By the 2020s, India had passed the UK to become the world's fifth-largest economy and overtaken China as the world's most populous country.</p>

<h3>Pakistan and the Loss of Bangladesh</h3>
<p>Pakistan's path was more turbulent. Created as a "homeland for Muslims," its initial geography was bizarre — two non-contiguous wings (West and East Pakistan) separated by 1,500 km of Indian territory. They shared a religion but little else: different languages, ethnicities, and economies. East Pakistan (Bengali, more populous) was politically dominated by West Pakistan (Punjabi, militarily stronger).</p>

<p>The combination collapsed in 1971. After East Pakistan voted overwhelmingly for autonomy in 1970 elections, the Pakistani military launched <strong>Operation Searchlight</strong> — a brutal crackdown that killed somewhere between 300,000 and 3 million Bengalis. India intervened militarily after taking in 10 million refugees. After a 13-day war, East Pakistan became the independent country of <strong>Bangladesh</strong>. Pakistan lost more than half its population overnight.</p>

<p>Pakistan since 1971 has alternated between civilian and military rule — coups in 1977 (General Zia ul-Haq) and 1999 (General Musharraf), interspersed with elected governments led by the Bhutto-Zardari and Sharif families. It has fought multiple wars with India, developed nuclear weapons (1998), been a key Cold War ally of the U.S., harboured the Taliban after 2001, and navigated repeated economic crises. The state has remained, but its politics are perennially unstable.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The 1947 Partition created two states that were, in effect, deeply joined twins — sharing rivers, populations, history, even nuclear arsenals aimed at each other. Their politics have ever since been measured against each other. India defines itself partly by not being like Pakistan; Pakistan defines itself partly by not being absorbed by India. Few political relationships in the modern world are this entangled.
</div>

<h3>Kashmir: The Unresolved Wound</h3>
<p>The most enduring flashpoint between India and Pakistan is <strong>Kashmir</strong> — a Muslim-majority region whose Hindu maharaja chose, in October 1947, to accede to India when threatened by tribal invasion from Pakistan. India and Pakistan have fought four wars over Kashmir (1947–1948, 1965, 1971, and the 1999 Kargil conflict). It is divided by a heavily-militarised <strong>Line of Control</strong>. India's portion includes the Kashmir Valley, where decades of separatist insurgency have produced tens of thousands of deaths. In 2019, India revoked Kashmir's autonomous status. The conflict continues.</p>

<h3>Bangladesh's Trajectory</h3>
<p>Independent Bangladesh began in poverty and disaster — its 1971 war was followed by a devastating cyclone and famine. Its founding leader <strong>Sheikh Mujibur Rahman</strong> was assassinated in 1975. Successive military and civilian governments alternated for decades.</p>

<p>What's striking, though, is the developmental trajectory. Through a combination of microcredit (Muhammad Yunus's <strong>Grameen Bank</strong>, founded 1983), an enormous garment-manufacturing export sector, and significant gains in girls' education and infant mortality, Bangladesh has become — quietly — one of the world's most successful low-income development stories. Its GDP per capita now exceeds Pakistan's, despite a similar starting position. Its remittance flows from the Gulf and Europe sustain millions of families. It remains vulnerable to climate change and political turbulence, but the post-independence trajectory has surprised most observers.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In which year did East Pakistan become Bangladesh?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1947</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">1971</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1999</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Sri Lanka, Nepal, and the Smaller States</h3>
<p>South Asia includes more than just the giants. <strong>Sri Lanka</strong>'s 26-year civil war (1983–2009) between the Sinhalese-majority government and the separatist Tamil Tigers killed tens of thousands; the war ended in a brutal government victory accompanied by major war crimes. <strong>Nepal</strong> abolished its monarchy in 2008 after a decade-long Maoist insurgency. <strong>Bhutan</strong> remains a constitutional monarchy famous for measuring "Gross National Happiness." The <strong>Maldives</strong> — a chain of low-lying coral atolls — is a frontline state for climate change.</p>

<h3>Hindu Nationalism and Modi's India</h3>
<p>India's most consequential political shift since independence has been the rise of <strong>Hindu nationalism</strong>. Long a minority political tradition, it became dominant under the <strong>BJP</strong> (Bharatiya Janata Party) and Prime Minister <strong>Narendra Modi</strong> (in office since 2014). The BJP frames India primarily as a Hindu civilisation, a sharp departure from Nehru's secular republic. The 2019 revocation of Kashmir's autonomy, citizenship laws disadvantaging Muslims, and the 2024 inauguration of a temple at the disputed Ayodhya site all reflect this turn.</p>

<p>Indian democracy continues — Modi's BJP did not win an outright majority in the 2024 election — but in a different ideological key. The relationship between India's roughly 200 million Muslims and the BJP-led state has become a major question for the country's future.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
South Asia's combined population is over <strong>2 billion people</strong> — about 25% of all human beings on Earth. India alone now has more people than the entire continent of Africa, more than China, and more than every European Union member state combined. The political and economic decisions made in this region are not regional concerns; they are global ones.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What region has been the focus of multiple India–Pakistan wars?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Punjab</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Kashmir</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Sindh</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> South Asia is now home to roughly a quarter of humanity. Its post-1947 history has produced two nuclear-armed rivals (India and Pakistan), one of modernity's most successful low-income development cases (Bangladesh), one of its longest civil wars (Sri Lanka), and now — in India's rise — the world's most populous nation and a major emerging power. Whatever happens in the 21st century, the subcontinent's choices will shape it.
</div>

</div>`;

L["Modern Latin America"] = `<div class="lesson-body">

<h3>One Region, Many Stories</h3>
<p>"<strong>Latin America</strong>" — the Spanish- and Portuguese-speaking countries of the Americas, plus Haiti — covers an area larger than Russia and contains over 650 million people. It is the most Catholic region on Earth, the most urbanised part of the developing world, and one of the most economically unequal. Its modern history is a story of independence won early (most countries by 1830), then a long 19th century of caudillo politics and elite rule, then a 20th century of revolutions, military dictatorships, and uneven democratisation.</p>

<p>This lesson focuses on the long 20th century — from the Mexican Revolution to the present — and the political patterns that have defined it.</p>

<h3>The Mexican Revolution</h3>
<p>Modern Latin America began with one of the great social revolutions of the 20th century. <strong>Mexico</strong>'s long-serving dictator <strong>Porfirio Díaz</strong> had ruled the country from 1876 with brutal efficiency, modernising the economy but concentrating land and wealth in the hands of a tiny elite and foreign investors. In 1910, an opposition candidate named <strong>Francisco Madero</strong> challenged Díaz in elections, was jailed, and called for armed uprising.</p>

<p>The <strong>Mexican Revolution</strong> (1910–1920) was a complicated, violent, and protracted affair involving competing rebel factions: Madero (liberal democrat), <strong>Emiliano Zapata</strong> (peasant land reform in the south), <strong>Pancho Villa</strong> (charismatic warlord in the north), <strong>Venustiano Carranza</strong> (constitutionalist), and <strong>Álvaro Obregón</strong>. About 1 million Mexicans died.</p>

<p>The revolution produced the 1917 Constitution — one of the most progressive in the world for its time, recognising labour rights, agrarian reform, and limits on the Catholic Church — and the eventual hegemonic <strong>Institutional Revolutionary Party</strong> (PRI), which would govern Mexico until 2000. Mexico's post-revolutionary trajectory — neither fully democratic nor fully authoritarian — became a template for other Latin American states.</p>

<h3>Populism and the Mid-Century</h3>
<p>The Great Depression hit Latin America hard, and the political response in many countries was a particular form of <span class="vocab-pill">populism</span>: charismatic leaders mobilising urban workers and the poor against landowning elites and foreign capital. The most famous was Argentina's <strong>Juan Perón</strong> (President 1946–1955, 1973–1974), whose movement — <em>Peronism</em> — combined nationalism, labour rights, and personal cult around himself and his wife <strong>Eva (Evita) Perón</strong>. Brazil's <strong>Getúlio Vargas</strong> (in power 1930–1945, 1951–1954) was a similar figure.</p>

<p>Latin American populism is an enduring tradition. Today's left-wing leaders (Lula in Brazil, AMLO in Mexico, the late Chávez in Venezuela) and right-wing ones (Bolsonaro, Bukele) all draw on the same political style: a charismatic leader promising to defend "the people" against corrupt elites.</p>

<h3>The Cuban Revolution</h3>
<p>In 1959, a small guerrilla force led by <strong>Fidel Castro</strong> and the Argentine doctor <strong>Ernesto "Che" Guevara</strong> overthrew the U.S.-backed dictator <strong>Fulgencio Batista</strong> in <strong>Cuba</strong>. Castro proceeded to nationalise foreign businesses, redistribute land, and (after the U.S. tried to overthrow him at the <strong>Bay of Pigs</strong> in 1961) align with the Soviet Union. The 1962 <strong>Cuban Missile Crisis</strong> followed.</p>

<p>The Cuban Revolution inspired left-wing movements across Latin America for decades. It also provoked the U.S. into sustained, often violent intervention against any movement it perceived as left-wing. The combination of Cuban-inspired insurgencies and U.S.-backed counterinsurgency would shape much of the region's Cold War history.</p>

<h3>The Era of Military Dictatorships</h3>
<p>Through the 1960s, 1970s, and into the 1980s, much of South America was ruled by military dictatorships. The pattern was familiar: an elected (often left-leaning) government would face economic difficulty and U.S. opposition; the military would intervene "to save the nation"; left-wing dissidents would be tortured, "<em>disappeared</em>," and killed; the regime would eventually exhaust itself or face mass protests; and democracy would gradually return.</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>Brazil</strong> — military rule 1964–1985, with thousands tortured and ~400 disappeared.</li>
<li><strong>Argentina</strong> — the "Dirty War" 1976–1983 disappeared an estimated 30,000 people. The mothers of the disappeared, the <strong>Madres de Plaza de Mayo</strong>, marched weekly demanding to know what had happened to their children — and still do.</li>
<li><strong>Chile</strong> — a U.S.-backed coup on September 11, 1973 overthrew the democratically elected socialist Salvador Allende. <strong>Augusto Pinochet</strong>'s regime tortured and killed thousands; ruled until 1990.</li>
<li><strong>Uruguay</strong> — military rule 1973–1985.</li>
<li><strong>Paraguay</strong> — Stroessner's dictatorship lasted 1954–1989.</li>
</ul>

<p>The U.S. supported many of these regimes through "<strong>Operation Condor</strong>" — a coordinated transnational programme of cooperation among South American military regimes to track and kill dissidents.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
On <strong>September 11, 1973</strong>, U.S.-backed forces overthrew Chile's elected president Salvador Allende. Allende died in the presidential palace as it was bombed by his own air force. The dictatorship that followed under <strong>Augusto Pinochet</strong> killed at least 3,000 people and tortured tens of thousands. The Chilean coup is one of the most extensively documented examples of U.S. covert intervention in Latin America — declassified U.S. documents now show CIA involvement in detail.
</div>

<h3>Central America's Wars</h3>
<p>The 1980s saw devastating civil wars in <strong>El Salvador</strong>, <strong>Nicaragua</strong>, and <strong>Guatemala</strong>. The U.S. funded right-wing forces in El Salvador and Nicaragua against leftist insurgencies. In Guatemala, a 36-year civil war (1960–1996) killed perhaps 200,000 people; UN-sponsored truth commissions have classified the worst phases as <strong>genocide</strong> against the Mayan population. Central America's instability produced large-scale migration to the United States that continues today.</p>

<h3>Democratic Revival and the "Pink Tide"</h3>
<p>The 1980s and 1990s saw a wave of democratisation across Latin America. By 2000, almost every country had returned to elected government. The early 2000s "<strong>pink tide</strong>" brought left-wing leaders to power: <strong>Hugo Chávez</strong> in Venezuela (1999), <strong>Lula da Silva</strong> in Brazil (2003), <strong>Evo Morales</strong> in Bolivia (2006, the first indigenous president), <strong>Rafael Correa</strong> in Ecuador, the Kirchners in Argentina. Many of these governments dramatically reduced poverty rates during the 2000s commodity boom.</p>

<p>The pink tide receded in the 2010s. Venezuela's economy collapsed under Maduro. Brazilian voters elected the right-wing populist <strong>Jair Bolsonaro</strong> in 2018. But political pendulums kept swinging: Mexico elected leftist <strong>AMLO</strong> in 2018; Brazil returned Lula to power in 2022; Chile elected the young leftist <strong>Gabriel Boric</strong> in 2021. Latin American democracy is real but volatile.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was Argentina's "Dirty War"?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A war between Argentina and Brazil</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">A military dictatorship's campaign of disappearances against dissidents (1976–1983)</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A trade war over oil exports</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>The Drug Wars and Persistent Inequality</h3>
<p>Two issues haunt modern Latin America: <strong>drug-trafficking violence</strong> (especially in Mexico, Colombia, and parts of Central America) and <strong>extreme inequality</strong>. The U.S. "war on drugs" has, paradoxically, fuelled rather than diminished cartel violence; Mexico's death toll from drug-related violence since 2006 is over 350,000. Inequality remains the highest of any major world region, despite economic growth.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Which Latin American country had a Marxist-led revolution in 1959?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Mexico</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Cuba</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Brazil</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Latin America's 20th and 21st centuries have been a long contest between democratic aspirations, populist mobilisation, foreign intervention, military rule, and the persistent legacy of colonial inequality. The region today is more democratic than at any point in its history — and still grappling with the consequences of that contest.
</div>

</div>`;

L["Civil Rights Movements"] = `<div class="lesson-body">

<h3>The Long Struggle for Equal Citizenship</h3>
<p>The 20th century closed many of history's deepest legal injustices: legal racial segregation in the U.S., apartheid in South Africa, exclusion of women from political life across most of the world, criminalisation of homosexuality, denial of basic disability rights. None of those changes came automatically. They were won by sustained, often dangerous social movements that combined moral argument, mass protest, legal strategy, and — in some places — armed resistance. The civil rights movements of the 20th century are among the most successful organised efforts to expand human dignity in history.</p>

<p>This lesson focuses on three: the African-American civil rights movement, the South African anti-apartheid movement, and the broader extensions of civil rights to women, disabled people, and LGBTQ+ people.</p>

<h3>African-American Civil Rights: The Long Road from Slavery</h3>
<p>The end of slavery in 1865 did not end racial subjugation in the United States. After the brief flowering of <strong>Reconstruction</strong> (1865–1877), Southern states imposed <strong>Jim Crow</strong> — a legal regime of racial segregation in schools, transport, housing, voting, and almost every other public sphere. The Supreme Court legitimised it in <em>Plessy v. Ferguson</em> (1896), which held that "<strong>separate but equal</strong>" facilities were constitutional. They were never equal.</p>

<p>The early 20th century saw the rise of organisations dedicated to challenging Jim Crow. The <strong>NAACP</strong> (founded 1909) brought legal cases. <strong>Marcus Garvey</strong>'s Universal Negro Improvement Association in the 1920s emphasised black pride and self-help. <strong>A. Philip Randolph</strong> organised African-American railway workers. The <strong>Great Migration</strong> (1916–1970) saw 6 million African Americans move from the rural South to the urban North and West, transforming American demographics.</p>

<h3>The Movement, 1954–1965</h3>
<p>The classic phase of the U.S. civil rights movement opened with the Supreme Court's unanimous decision in <strong>Brown v. Board of Education</strong> (1954), which overturned <em>Plessy</em> and declared segregated public schools unconstitutional. Within a year, <strong>Rosa Parks</strong>'s arrest in Montgomery, Alabama for refusing to give up her bus seat (December 1955) sparked the <strong>Montgomery Bus Boycott</strong>, which made a young pastor named <strong>Dr. Martin Luther King Jr.</strong> nationally famous.</p>

<p>What followed was a decade of mass nonviolent action:</p>
<ul style="margin: 12px 0; padding-left: 24px;">
<li><strong>1957</strong> — Federal troops escorted the Little Rock Nine into a previously all-white school in Arkansas.</li>
<li><strong>1960</strong> — Greensboro, NC sit-ins by Black college students at segregated lunch counters.</li>
<li><strong>1961</strong> — Freedom Riders integrate interstate bus travel through the South, often beaten by mobs.</li>
<li><strong>1963</strong> — King's "I Have a Dream" speech at the March on Washington (August). Birmingham campaign earlier that year met by police dogs and fire hoses.</li>
<li><strong>1964</strong> — Civil Rights Act outlaws racial segregation in public accommodations.</li>
<li><strong>1965</strong> — Selma to Montgomery marches, including "Bloody Sunday." Voting Rights Act passed.</li>
</ul>

<p>The movement included many wings: King's Southern Christian Leadership Conference, the more militant Student Nonviolent Coordinating Committee (SNCC), the Black nationalist <strong>Malcolm X</strong> and the Nation of Islam, and (after 1966) the Black Panther Party. King was assassinated in 1968. By then the legal architecture of Jim Crow was largely dismantled — though structural racism in housing, policing, education, and wealth remained.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The classical civil rights movement of 1954–1965 had a strategic clarity that few other social movements have matched. Its leaders deliberately chose to confront unjust laws nonviolently, in front of cameras, knowing that the violent reaction would shock the nation's conscience. The strategy worked. The footage of police dogs attacking children in Birmingham, of Bloody Sunday on the Edmund Pettus Bridge, did the political work that decades of legal arguments alone could not.
</div>

<h3>The Anti-Apartheid Movement</h3>
<p>South Africa's <strong>apartheid</strong> regime (1948–1994) was the world's most comprehensive legal system of racial segregation. The white minority — about 12% of the population — controlled all political power, the economy, and most land. Black South Africans were assigned to artificial "homelands," required to carry pass books, denied access to white-only beaches, schools, hospitals, and jobs.</p>

<p>The <strong>African National Congress</strong> (ANC), founded in 1912, led the resistance. Initially nonviolent, the ANC turned to armed struggle after the <strong>Sharpeville Massacre</strong> (1960), when police killed 69 unarmed Black protesters. Many leaders, including <strong>Nelson Mandela</strong>, went underground; Mandela was arrested in 1962 and sentenced at the <strong>Rivonia Trial</strong> in 1964 to life imprisonment, where he stayed for 27 years.</p>

<p>The 1976 <strong>Soweto Uprising</strong> — when Black students protested being forced to learn in Afrikaans, and were met with police bullets — galvanised international attention. International economic sanctions in the 1980s, the global divestment movement, and internal South African resistance gradually wore the regime down. President <strong>F.W. de Klerk</strong> began negotiations in 1990, freed Mandela, legalised the ANC, and ultimately oversaw South Africa's first non-racial elections in 1994. Mandela became president; he and de Klerk shared the Nobel Peace Prize.</p>

<p>The post-apartheid <strong>Truth and Reconciliation Commission</strong>, chaired by Archbishop <strong>Desmond Tutu</strong>, became a model for transitional justice worldwide.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">How many years did Nelson Mandela spend in prison?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">10</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">15</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">27</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Second-Wave Feminism</h3>
<p>The first wave of the women's movement, in the 19th and early 20th centuries, focused on the vote and basic legal recognition. The <strong>second wave</strong>, beginning in the 1960s, took on workplace discrimination, reproductive rights, domestic violence, and broader cultural sexism. <strong>Betty Friedan</strong>'s <em>The Feminine Mystique</em> (1963) and <strong>Simone de Beauvoir</strong>'s <em>The Second Sex</em> (1949) provided the intellectual foundation. The 1973 U.S. Supreme Court decision <strong>Roe v. Wade</strong> recognised a right to abortion (overturned in 2022). Equal-pay laws spread. Women entered professional and political life in numbers never seen before.</p>

<p>Feminism kept evolving — third-wave feminism in the 1990s emphasised intersectionality (race, class, sexuality), and the #MeToo movement of 2017 onward took on sexual harassment in workplaces. Battles over abortion, equal pay, and women's representation in politics remain very much alive.</p>

<h3>Disability Rights</h3>
<p>For most of history, disabled people were institutionalised, marginalised, or killed. The <strong>disability rights movement</strong> emerged in the 1970s, drawing direct inspiration from civil rights. The U.S. <strong>Rehabilitation Act</strong> of 1973 was the first major federal law banning disability discrimination. The <strong>Americans with Disabilities Act</strong> (ADA) of 1990 — passed after a famous "<strong>Capitol Crawl</strong>" by activists who climbed the Capitol steps without their wheelchairs to dramatise the inaccessibility of public buildings — required public spaces and employment to be accessible.</p>

<p>The slogan was "<strong>Nothing about us without us</strong>" — disabled people demanding to be participants, not passive recipients of charity. The UN Convention on the Rights of Persons with Disabilities (2006) extended these principles globally.</p>

<h3>LGBTQ+ Rights</h3>
<p>For most of the 20th century, homosexuality was criminalised in most of the world. Gay men in Nazi Germany were sent to concentration camps. In post-WWII America, gay and lesbian people lost jobs and were imprisoned. The modern LGBTQ+ rights movement is usually dated from the <strong>Stonewall Riots</strong> in New York in June 1969, when patrons of the Stonewall Inn — a Greenwich Village gay bar — fought back against a routine police raid. The riots galvanised an organised movement.</p>

<p>The 1980s AIDS crisis forced both terrible suffering and political mobilisation. <strong>ACT UP</strong> and similar groups demanded faster research and access to treatment. By the 2000s, gay rights had moved into the legal mainstream of many democracies. The Netherlands legalised same-sex marriage in 2001; the U.S. Supreme Court did so nationally in <em>Obergefell v. Hodges</em> (2015). As of 2024, same-sex marriage is legal in over 30 countries — though it remains illegal, even punishable by death, in dozens of others.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The first <strong>Pride parade</strong>, on June 28, 1970, marked the first anniversary of Stonewall. A few thousand people marched up Sixth Avenue in New York. Today, Pride events take place in hundreds of cities globally, drawing millions of participants — including, increasingly and controversially, in places where homosexuality is still illegal. The transformation from criminal underground to mainstream civic celebration is one of the most rapid social shifts of the modern era.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">The 1969 Stonewall Riots in New York are often considered the start of which movement?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The disability rights movement</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The modern LGBTQ+ rights movement</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Second-wave feminism</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The civil rights movements of the 20th century changed the legal definition of who counts as a full citizen — extending it, slowly and painfully, to women, ethnic and racial minorities, disabled people, and LGBTQ+ people. None of these expansions was inevitable. All required organised effort, often across generations. None is fully complete. But the world after these movements is unrecognisably different from the world before them.
</div>

</div>`;

L["The Yugoslav Wars"] = `<div class="lesson-body">

<h3>The Country That Was</h3>
<p>For 45 years after WWII, <strong>Yugoslavia</strong> — a federation of six republics in southeastern Europe (Slovenia, Croatia, Bosnia-Herzegovina, Serbia, Montenegro, Macedonia) and two autonomous regions (Vojvodina and Kosovo) — was held together by the personal authority of its communist leader <strong>Josip Broz Tito</strong>. Tito had led the Yugoslav Partisans against Nazi occupation, broken with Stalin in 1948, and steered Yugoslavia into a non-aligned position between the Cold War superpowers. He died in 1980. The country he had built outlived him by little more than a decade. Its violent breakup in the 1990s was Europe's deadliest conflict since WWII.</p>

<h3>The Roots of the Conflict</h3>
<p>Yugoslavia's fragility was older than Tito. The Balkans had been a meeting point of empires — Ottoman, Habsburg, Russian — and a patchwork of religions: Catholic Croats and Slovenes, Orthodox Serbs and Macedonians, Muslim Bosniaks and Albanians. WWII had been catastrophic locally, with intense violence between the Croatian fascist <strong>Ustaše</strong>, Serbian nationalist <strong>Chetniks</strong>, and communist Partisans. The Ustaše-run Independent State of Croatia ran concentration camps where hundreds of thousands of Serbs, Jews, and Roma were killed. Memory of those crimes never fully faded.</p>

<p>Tito's Yugoslavia tried to suppress these memories under "Brotherhood and Unity" — official multinational federalism. It mostly worked while Tito was alive. After his death in 1980, the system began to fray. Economic stagnation hit hard in the 1980s. Yugoslav debt mounted. The 1989 collapse of communism elsewhere in Eastern Europe took the ideological glue out of the federation. And in Serbia, a new leader was rising who would frame himself as the defender of Serbs in every Yugoslav republic.</p>

<h3>Slobodan Milošević</h3>
<p><strong>Slobodan Milošević</strong>, who became president of Serbia in 1989, used Serbian nationalism — especially complaints about the treatment of Serbs in the autonomous province of <strong>Kosovo</strong> — to build his power. His rhetoric, his media control, and his willingness to use force or threat of force made other Yugoslav republics fear that Yugoslavia was becoming a Serbian-dominated state.</p>

<p>In 1991, <strong>Slovenia</strong> and <strong>Croatia</strong> declared independence. Slovenia, ethnically homogeneous and far from Serb-populated areas, fought a brief Ten-Day War and was let go. Croatia, with a substantial Serb minority concentrated near the Bosnian border, was not. The Yugoslav People's Army and Serb paramilitaries supported a breakaway "Republic of Serbian Krajina" inside Croatia. The <strong>Croatian War of Independence</strong> (1991–1995) saw heavy combat, the destruction of Vukovar (a Croatian town besieged for 87 days), and the displacement of hundreds of thousands.</p>

<h3>Bosnia: The Worst of It</h3>
<p>The most devastating war was in <strong>Bosnia-Herzegovina</strong>, which declared independence in early 1992. Bosnia's population was about 44% Bosniak (Muslim), 31% Serb, 17% Croat — woven together so deeply that "ethnic" lines often ran through families. There was no clean way to separate the populations. The Bosnian Serb leadership, backed by Milošević, didn't try. They tried, instead, to seize Serb-claimed territory and clear it of non-Serbs.</p>

<p><strong>Ethnic cleansing</strong> entered the global vocabulary during the Bosnian war. Bosnian Serb forces, under General <strong>Ratko Mladić</strong> and political leader <strong>Radovan Karadžić</strong>, expelled Bosniaks and Croats from areas they captured, ran concentration camps where prisoners were tortured and killed, and used systematic mass rape as a weapon. The capital <strong>Sarajevo</strong> — a multi-ethnic city famous for its Olympic Games — was besieged for nearly four years (1992–1996). Snipers killed civilians at random. Roughly 11,000 Sarajevans died.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Bosnia in 1992 was Europe's most multi-ethnic, multi-confessional society — Catholics, Orthodox Christians, Muslims, Jews living interleaved, often in the same buildings. Ethnic cleansing in such a place wasn't a separation; it was a tearing apart. Whole communities that had spent generations together were forced to designate one another as enemies. The trauma was generational. Bosnia is still recovering.
</div>

<h3>Srebrenica</h3>
<p>The single worst atrocity of the war was the <strong>Srebrenica massacre</strong> in July 1995. Bosnian Serb forces under General Mladić captured the UN-declared "safe area" of Srebrenica, separated the men and boys from the women, bused them away in groups, and shot them. Over <strong>8,000 Bosniak men and boys were killed</strong> in five days. Dutch UN peacekeepers, hopelessly outnumbered and without effective rules of engagement, stood by.</p>

<p>The <strong>International Criminal Tribunal for the former Yugoslavia</strong> (ICTY) and the International Court of Justice have both ruled Srebrenica a <strong>genocide</strong>. Mladić and Karadžić were eventually convicted, though it took until 2017.</p>

<h3>NATO Intervention and the Dayton Accords</h3>
<p>After Srebrenica, NATO finally intervened on Bosnia's side, conducting an air campaign that broke Bosnian Serb military power. The <strong>Dayton Accords</strong> in November 1995 ended the Bosnian war by partitioning the country into two entities: a Bosniak-Croat Federation and a Republika Srpska, held together (loosely) under a complex shared constitution. Bosnia today still operates under Dayton — a peace agreement designed to stop the war that has, perhaps, frozen the country in a permanent post-war condition.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What ended the Bosnian War in 1995?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">A UN ceasefire arranged by Russia</button>
    <body class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Tito's return to power</body>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Dayton Peace Accords following NATO intervention</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Kosovo</h3>
<p>The wars weren't quite over. <strong>Kosovo</strong> — overwhelmingly ethnic Albanian, but historically and religiously central to Serbia — had been stripped of its autonomy by Milošević in 1989. By the late 1990s, the Kosovo Liberation Army was waging a guerrilla campaign for independence, and Serb forces were expelling ethnic Albanians on a mass scale. After Milošević refused negotiations, NATO conducted a 78-day bombing campaign in spring 1999 — controversial because it was launched without UN Security Council authorisation, but ultimately forcing Serbian withdrawal. Kosovo declared independence in 2008. About half the world's countries recognise it; Russia, China, Serbia, and several others do not.</p>

<p>Milošević was indicted by the ICTY for war crimes and genocide. He was extradited in 2001, tried in The Hague, and died in his cell in 2006 before a verdict could be reached. The president of a major European state had been put on trial for crimes against humanity — the most consequential prosecution since Nuremberg.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The Yugoslav wars produced the <strong>ICTY</strong> — the first international criminal tribunal since Nuremberg. By the time it closed in 2017, it had indicted 161 people, convicted 90, and pioneered legal precedents on genocide, command responsibility, and rape as a war crime. Its work directly shaped the founding of the permanent <strong>International Criminal Court</strong> (ICC) in 2002. Imperfect, slow, and politically contested as it was, the ICTY established that even heads of state could be tried for atrocities.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What was the worst single atrocity of the Bosnian War?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The siege of Sarajevo</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Srebrenica massacre, in which over 8,000 Bosniak men and boys were killed</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The bombing of Belgrade</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Yugoslav wars showed Europe that the post-1945 promise of "never again" had limits. They produced ethnic cleansing and genocide on European soil within living memory of the Holocaust. They reshaped southeastern Europe, killed perhaps 140,000 people, and displaced millions. They also produced new forms of international justice. Yugoslavia itself does not exist anymore. What replaced it is still, in some places, sorting itself out.
</div>

</div>`;

L["Globalisation"] = `<div class="lesson-body">

<h3>The World Connects</h3>
<p>The word <span class="vocab-pill">globalisation</span> entered popular use in the 1980s and 1990s, but the phenomenon — closer integration of economies, peoples, and cultures across borders — has been building for centuries. The Age of Exploration, colonialism, the Industrial Revolution, two world wars, and the Cold War all pushed it forward. What changed in the late 20th century was the speed, scale, and scope: containerised shipping, jet travel, satellite communications, the internet, and the post-Cold-War political opening combined to create a world economy more deeply integrated than any in history.</p>

<p>Globalisation has lifted hundreds of millions out of poverty, made consumer goods cheaper, accelerated the exchange of ideas, and created problems — from climate change to financial contagion to populist backlash — that no single state can solve alone. The 21st century is the century in which globalisation became the central organising fact of economic and political life worldwide.</p>

<h3>The Postwar Architecture</h3>
<p>The institutions that govern modern globalisation were largely built after WWII. The 1944 <strong>Bretton Woods Conference</strong> created:</p>

<ul style="margin: 12px 0; padding-left: 24px;">
<li>The <strong>International Monetary Fund</strong> (IMF) — to stabilise currencies and lend to countries in financial trouble.</li>
<li>The <strong>World Bank</strong> — to fund reconstruction and development projects.</li>
<li>A system of fixed exchange rates anchored to the U.S. dollar (which was, in turn, convertible to gold).</li>
</ul>

<p>The <strong>General Agreement on Tariffs and Trade</strong> (GATT, 1947) progressively reduced tariffs and trade barriers. The <strong>European Coal and Steel Community</strong> (1951) — which would evolve into the EU — bound former enemies France and Germany into integrated industries. The <strong>United Nations</strong> (1945) established the framework of cooperation we still mostly operate in.</p>

<p>The Bretton Woods fixed-exchange-rate system collapsed in 1971 when the U.S. abandoned the gold standard. Currencies began to float; financial markets became dramatically more important. The 1973 oil shock and the stagflation of the 1970s put the postwar economic order under strain. By the early 1980s, the response in many Western countries was a turn to <strong>neoliberalism</strong> — deregulation, privatisation, free trade, capital mobility. Reagan and Thatcher were the political faces of this shift.</p>

<h3>The Post-Cold-War Acceleration</h3>
<p>The collapse of communism in 1989–1991 and the simultaneous opening of China's economy under <strong>Deng Xiaoping</strong>'s reforms (begun 1978) brought roughly two billion people into the global market in a decade. The <strong>World Trade Organization</strong> (WTO) was founded in 1995. <strong>NAFTA</strong> created a North American free-trade zone in 1994. China joined the WTO in 2001. Manufacturing moved en masse from high-wage to lower-wage countries. Container shipping costs collapsed.</p>

<p>The result, between roughly 1990 and 2010, was the most dramatic period of poverty reduction in human history. The number of people in extreme poverty (less than $2.15/day in 2017 dollars) fell from about 1.9 billion in 1990 to about 700 million by 2015. Most of this was driven by China's spectacular growth, but India, Vietnam, Indonesia, Brazil, and other emerging economies also lifted hundreds of millions out of poverty.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
Between 1990 and 2010, more people escaped extreme poverty than in any comparable period in human history. The world today has many problems, but the average human being is, by most material measures, the wealthiest, healthiest, longest-lived, and best-educated person who has ever existed. Most of that progress is bound up with what we call globalisation — for all its costs.
</div>

<h3>The Costs and the Backlash</h3>
<p>Globalisation's gains were not equally distributed. In wealthy countries, manufacturing workers — especially in the U.S. "<strong>Rust Belt</strong>" and similar regions in Britain and France — saw factories close and communities decline. Wages for non-college-educated workers stagnated for decades. Inequality within countries rose sharply, even as inequality between countries fell.</p>

<p>The <strong>2008 Global Financial Crisis</strong> exposed how deeply integrated and fragile the financial system had become. A housing bubble in the U.S., sliced and traded as opaque mortgage-backed securities through global banks, brought the world economy to the brink of collapse. Massive government bailouts saved the banks; ordinary people lost homes, jobs, and pensions. Trust in the postwar order took a serious blow. Economic recovery was slow, especially in southern Europe; some say it never fully arrived.</p>

<p>The political consequences were profound. The 2010s saw a global wave of <strong>populist backlash</strong> against globalisation: Brexit (2016), Trump's election (2016), the rise of Modi (2014), Bolsonaro (2018), Erdoğan (2003 onward), Orbán (2010 onward), Le Pen, the AfD. The political messages varied, but a common thread was distrust of trade deals, international institutions, and migration. Globalisation, suddenly, no longer seemed inevitable.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">In what year did China join the World Trade Organization?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">1989</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">2001</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">2010</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>China's Rise</h3>
<p>The most consequential single fact of the modern era is the rise of <strong>China</strong>. From a poor agrarian country in 1980, China became the world's second-largest economy by 2010, and by some measures the largest by the late 2010s. It built the largest manufacturing base in human history, the world's most extensive high-speed rail network, and a middle class of perhaps 400 million people.</p>

<p>This rise has shifted the gravity of the global economy from the North Atlantic toward East Asia. It has also, by the 2010s and 2020s, produced a new geopolitical rivalry between the U.S. and China — over trade, technology, Taiwan, the South China Sea, and the future architecture of the international system. The 21st century, increasingly, is being shaped by U.S.-China competition the way the 20th was shaped by U.S.-Soviet competition.</p>

<h3>Climate Change: The Global Problem</h3>
<p>Industrial civilisation has, since 1850, raised global atmospheric CO₂ levels from around 280 to over 420 parts per million — and global temperatures by roughly 1.2°C. The cause is well understood: the burning of fossil fuels (coal, oil, natural gas) for energy. The consequences — sea-level rise, more extreme weather, ecosystem disruption, and risks to food security — are accelerating.</p>

<p>The international response has been slow and insufficient. The <strong>UN Framework Convention on Climate Change</strong> (1992), the <strong>Kyoto Protocol</strong> (1997), and the <strong>Paris Agreement</strong> (2015) have produced incremental commitments but not the speed of decarbonisation that scientists say is needed. Renewable energy (especially solar and wind) has become cheaper than fossil-fuel power in many markets — a hopeful sign — but global emissions are still rising. Climate change is the test case for whether globalised humanity can govern itself.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>iPhone</strong> is a globalisation parable. Designed in California, the chips are made in Taiwan, the screens in Korea, the rare earth metals are mined in China and Africa, the assembly is done in factories in Zhengzhou (China) and increasingly in India and Vietnam, and the finished product is sold worldwide. A single iPhone touches dozens of countries before reaching a consumer's hand. This level of integration would have been unimaginable in 1980.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">What event in 2008 exposed the fragility of the globalised financial system?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The 9/11 attacks</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">The Global Financial Crisis</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">The COVID-19 pandemic</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> Globalisation has reshaped human life since 1945 — connecting markets, cultures, and people more tightly than ever before. It has produced the largest reduction in poverty in history and the largest geopolitical shift since the Industrial Revolution. It has also produced inequality within countries, financial fragility, and the existential challenge of climate change. Whether globalisation continues to deepen or partially fractures into rival blocs is one of the defining open questions of the 21st century.
</div>

</div>`;

L["The Digital Age"] = `<div class="lesson-body">

<h3>The Newest Revolution</h3>
<p>In 1970, fewer than 200,000 people on Earth used what we'd now call computers. By 2024, over 5 billion people are connected to the internet through devices that fit in their pockets. In a single human lifetime, computing went from room-sized military hardware to ambient technology that mediates almost every aspect of daily life — work, friendship, money, sex, news, voting, war. The <strong>Digital Age</strong> is the most rapid, sweeping technological transformation in human history.</p>

<p>It is also one of the most ethically and politically unsettled. We are still figuring out what social media does to democracy, what AI will do to work, what surveillance capabilities will do to privacy, and what cyber warfare will do to international order. The first draft of digital civilisation has been written largely without us understanding what we were doing. The next chapters are still being argued out.</p>

<h3>From Mainframes to Personal Computers</h3>
<p>The first electronic computers — <strong>ENIAC</strong> (1946) at the University of Pennsylvania, <strong>Colossus</strong> (1944) at Bletchley Park — were built for war. Through the 1950s and 60s, computers were enormous, expensive, and used mostly by governments and large corporations. The breakthrough that made personal computing possible was the <strong>integrated circuit</strong> (microchip), invented at Texas Instruments and Fairchild Semiconductor in the late 1950s. <strong>Moore's Law</strong> — Intel co-founder Gordon Moore's 1965 observation that chip transistor density doubled roughly every two years — has held for 60 years and made every successive computer cheaper, faster, and smaller.</p>

<p>By 1977, <strong>Apple</strong> (founded by Steve Jobs and Steve Wozniak), <strong>Tandy</strong>, and others were selling assembled personal computers. <strong>IBM</strong> launched its PC in 1981. <strong>Microsoft</strong>'s MS-DOS — and later Windows — became the dominant operating system. By the 1990s, personal computers were standard in offices and increasingly in middle-class homes worldwide.</p>

<h3>The Internet</h3>
<p>The <strong>internet</strong> grew out of a U.S. Defense Department project called <strong>ARPANET</strong>, designed in the 1960s to be a decentralised computer network that would survive a nuclear strike. Through the 1970s and 80s, it expanded to universities and research labs. The decisive step was the invention of the <strong>World Wide Web</strong> by <strong>Tim Berners-Lee</strong> at CERN in 1989–1991: a system of linked documents accessible through a "browser." The first widely-used graphical browser, <strong>Mosaic</strong>, came out in 1993.</p>

<p>The 1990s "<strong>dot-com boom</strong>" saw enormous speculative investment in early internet companies — many of which went bust in the 2000–2001 crash. But the technology itself proved transformative. By 2000, perhaps 400 million people were online; by 2010, 2 billion; by 2024, over 5 billion. The internet absorbed (and disrupted) the news business, the music business, the film business, retail, advertising, and dating.</p>

<div class="analogy-box">
<strong>🔭 Think of it like this:</strong>
The internet's growth pattern is like the printing press's, except much faster. Gutenberg's press took roughly a century to remake European intellectual life. The internet did similar work in 25 years. We're still living through the social and political consequences of that compression — the same disruptions of authority, mass-political mobilisation, and information chaos that accompanied the printing press. We just haven't had time to settle out yet.
</div>

<h3>The Smartphone</h3>
<p>The next major shift was the <strong>smartphone</strong>. Apple's <strong>iPhone</strong>, released in 2007, combined a mobile phone, internet device, camera, and computer into a pocket-sized package. Its operating system (and Google's competing <strong>Android</strong>, released 2008) created software ecosystems through which billions of "apps" could reach the world.</p>

<p>By the late 2010s, smartphones had transformed economic life across much of the developing world — leapfrogging the desktop entirely. Mobile money systems like Kenya's <strong>M-Pesa</strong> (launched 2007) gave hundreds of millions of people their first access to financial services. Social media platforms — Facebook (2004), YouTube (2005), Twitter (2006), Instagram (2010), TikTok (2016) — became the dominant communication channels of public life.</p>

<h3>Social Media's Promise and Peril</h3>
<p>Early social media was greeted as a force for democracy and connection. The 2011 <strong>Arab Spring</strong> protests were widely (perhaps too credulously) called "Twitter revolutions." The hashtag movements of the 2010s — <strong>#MeToo</strong>, <strong>#BlackLivesMatter</strong>, <strong>#FridaysForFuture</strong> — used social media to organise mass political action without traditional institutions.</p>

<p>The darker side became visible by the late 2010s. Facebook's role in the 2016 U.S. election (the Cambridge Analytica scandal, Russian disinformation), Twitter's role in spreading conspiracy theories, YouTube's algorithmic radicalisation pipeline, and Facebook's role in the genocide of the Rohingya in Myanmar all suggested that social-media platforms were not neutral utilities but active shapers of political reality. Critics — from <strong>Shoshana Zuboff</strong> (<em>The Age of Surveillance Capitalism</em>) to many former tech employees — have argued that the business model itself, based on attention-maximising algorithms, is structurally toxic to civic life.</p>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Who invented the World Wide Web?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Bill Gates</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Steve Jobs</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Tim Berners-Lee</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<h3>Surveillance, Privacy, and the State</h3>
<p>The same technologies that connect people also enable surveillance at scales unimaginable a generation ago. Mass-data leaks by <strong>Edward Snowden</strong> in 2013 revealed the extent of U.S. NSA surveillance of global internet traffic. China has built the world's most comprehensive state-surveillance system, including a "<strong>social credit</strong>" framework and AI-driven tracking of the Uighur population in <strong>Xinjiang</strong>. Across democratic and authoritarian states alike, the question of who can monitor whom — and to what end — is one of the open political questions of the era.</p>

<h3>Artificial Intelligence</h3>
<p>The most recent inflection point is artificial intelligence. After decades of slow progress, deep-learning techniques pioneered in the 2010s — combined with massive computing resources and vast training datasets — have produced AI systems with rapidly expanding capabilities. <strong>Image recognition</strong>, <strong>machine translation</strong>, <strong>self-driving</strong>, and (most recently) <strong>large language models</strong> like ChatGPT (2022) and successors have moved from research labs into widespread use.</p>

<p>What this means for human society is genuinely uncertain. Optimists see AI as a productivity revolution comparable to electricity. Pessimists see it as an existential risk, or at minimum a disruption to white-collar work that will dwarf the deindustrialisation of manufacturing. The economic, ethical, and political questions are being argued in real time. The reader of this lesson will see the answers play out — much faster than any previous generation has seen a technology transform their world.</p>

<h3>Cyber War and the Internet's Fragmentation</h3>
<p>The internet was originally designed as a single global network. By the 2020s, it is breaking into spheres. China, Russia, and Iran each maintain heavily filtered "<strong>splinternets</strong>" largely separate from the global web. Cyber attacks — by states (Russia's interference in elections, China's industrial espionage, North Korea's bank thefts) and by criminals (ransomware) — are now a constant, expensive feature of digital life. War in cyberspace was once theoretical; the war in Ukraine has shown what hybrid cyber-physical warfare looks like in practice.</p>

<div class="example-box">
<strong>🔗 Real-world example:</strong>
The <strong>iPhone</strong>, released June 29, 2007, was — by most reasonable measures — the most successful consumer product in history. Apple has sold over <strong>2.5 billion</strong> iPhones since launch. The device put a powerful computer in the pockets of perhaps a third of humanity, transformed photography, journalism, dating, and political organisation, and made Apple, briefly, the world's most valuable company. The product cycle from prototype to global phenomenon was about 18 months.
</div>

<div class="mini-quiz" data-answered="false">
  <div class="mini-quiz-header">✅ Quick Check</div>
  <div class="mini-quiz-question">Roughly how many people on Earth use the internet today?</div>
  <div class="mini-quiz-options">
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Around 1 billion</button>
    <button class="mini-quiz-opt" data-correct="false" onclick="checkMiniQuiz(this)">Around 2 billion</button>
    <button class="mini-quiz-opt" data-correct="true" onclick="checkMiniQuiz(this)">Over 5 billion</button>
  </div>
  <div class="mini-quiz-feedback"></div>
</div>

<div class="key-point">
💡 <strong>Big idea:</strong> The Digital Age is the latest in a sequence of human transformations — the agricultural, the industrial, and now the informational. It has connected people across continents, automated huge portions of work, redrawn the public sphere, created new forms of political mobilisation, enabled mass surveillance, and put extraordinary tools in ordinary hands. It is happening fast and is, at the time of writing, far from over. The history of the 21st century is, in large part, the history of how human beings learn to live with the technologies they have made.
</div>

</div>`;
