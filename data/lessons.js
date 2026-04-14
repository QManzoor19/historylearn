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
