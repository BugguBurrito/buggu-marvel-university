const marvelDatabase = [
  // ==========================================
  // BATCH 1: THE INFINITY SAGA (PHASE 1-3)
  // ==========================================
  {
    id: 1, universe: "mcu", title: "Iron Man", year: 2008,
    tag: "🐐 THE BEGINNING", type: "legend", mine: true, rating: 9.5,
    note: "This is where everything begins. I REALLY want you to tell me what you think about Tony.",
    fact: "Robert Downey Jr. improvised the famous 'I am Iron Man' line at the end of the film.",
    symbol: "◉"
  },
  {
    id: 2, universe: "mcu", title: "The Incredible Hulk", year: 2008,
    tag: "😐 WE MOVE", type: "meh", mine: false, rating: 5.5,
    note: "Not my favourite, but we're committed to the timeline mission.",
    fact: "This is the MCU's only solo Hulk film because Universal Pictures retained the character's standalone distribution rights.",
    symbol: "◆"
  },
  {
    id: 3, universe: "mcu", title: "Iron Man 2", year: 2010,
    tag: "❤️ WATCH WITH ME", type: "mine", mine: true, rating: 7.0,
    note: "There are things in here you'll appreciate later. Plus, Black Widow's legendary entrance.",
    fact: "Kevin Feige retroactively confirmed that the little boy in the Iron Man mask at the Stark Expo was a young Peter Parker.",
    symbol: "✦"
  },
  {
    id: 4, universe: "mcu", title: "Thor", year: 2011,
    tag: "👀 PAY ATTENTION", type: "important", mine: false, rating: 7.5,
    note: "Meet the God of Thunder and his absolute menace of a brother, Loki.",
    fact: "Tom Hiddleston originally bulked up and auditioned for the role of Thor before being cast as Loki.",
    symbol: "⌁"
  },
  {
    id: 5, universe: "mcu", title: "Captain America: The First Avenger", year: 2011,
    tag: "💖 PLEASE WATCH", type: "mine", mine: true, rating: 8.5,
    note: "This one has a special place in my Marvel brain. Cap sets the standard for the entire universe.",
    fact: "Chris Evans initially declined the role of Captain America multiple times out of severe anxiety regarding the multi-picture contract.",
    symbol: "✚"
  },
  {
    id: 6, universe: "mcu", title: "The Avengers", year: 2012,
    tag: "🔥 YOU MADE IT", type: "legend", mine: true, rating: 9.5,
    note: "Okay. NOW it starts getting serious. The 360-degree hero shot is pure cinema history.",
    fact: "The famous post-credits shawarma restaurant scene was actually filmed the day after the movie's world premiere.",
    symbol: "A"
  },
  {
    id: 7, universe: "mcu", title: "Iron Man 3", year: 2013,
    tag: "😂 JUST WATCH IT", type: "fun", mine: false, rating: 7.0,
    note: "A PTSD story disguised as an action movie. Don't Google the villain beforehand.",
    fact: "Robert Downey Jr. broke his ankle performing a stunt, forcing production to shut down for over a month.",
    symbol: "◉"
  },
  {
    id: 8, universe: "mcu", title: "Thor: The Dark World", year: 2013,
    tag: "💀 GOOD LUCK", type: "meh", mine: false, rating: 5.0,
    note: "We have to suffer through this one together. Just push through it.",
    fact: "Natalie Portman was unavailable for the final post-credits kiss reshoot, so Chris Hemsworth's wife, Elsa Pataky, stood in wearing a wig.",
    symbol: "⌁"
  },
  {
    id: 9, universe: "mcu", title: "Captain America: The Winter Soldier", year: 2014,
    tag: "🐐 ABSOLUTE LEGEND", type: "legend", mine: true, rating: 9.8,
    note: "One of the films I am MOST excited for you to see. It completely shifts the MCU into a political espionage thriller.",
    fact: "The filmmakers cited 1970s political thrillers as their main inspiration, which directly led to the casting of Robert Redford.",
    symbol: "✚"
  },
  {
    id: 10, universe: "mcu", title: "Guardians of the Galaxy", year: 2014,
    tag: "❤️ YOU NEED TO SEE THIS", type: "mine", mine: true, rating: 9.5,
    note: "Please report your favourite Guardian immediately. The soundtrack is undefeated.",
    fact: "Vin Diesel recorded the line 'I am Groot' over 1,000 times in several different languages.",
    symbol: "🚀"
  },
  {
    id: 11, universe: "mcu", title: "Avengers: Age of Ultron", year: 2015,
    tag: "👀 BIG STAKES", type: "important", mine: false, rating: 7.8,
    note: "Things are about to get MUCH bigger. Pay very close attention to Wanda.",
    fact: "James Spader used his natural voice for Ultron on set, which genuinely unnerved the rest of the cast during filming.",
    symbol: "A"
  },
  {
    id: 12, universe: "mcu", title: "Ant-Man", year: 2015,
    tag: "🐜 FUN ONE", type: "fun", mine: false, rating: 7.5,
    note: "Tiny man. Big responsibilities. It's basically a highly entertaining heist movie.",
    fact: "Paul Rudd bought a massive ant farm to observe how ants work together while preparing for the role.",
    symbol: "🐜"
  },
  {
    id: 13, universe: "mcu", title: "Captain America: Civil War", year: 2016,
    tag: "💔 EMOTIONAL DAMAGE", type: "legend", mine: true, rating: 9.5,
    note: "Choose your side carefully. This movie breaks the entire universe.",
    fact: "This movie introduced Tom Holland's Spider-Man to the MCU after Sony and Marvel struck a historic, unprecedented rights-sharing deal.",
    symbol: "⚔️"
  },
  {
    id: 14, universe: "mcu", title: "Doctor Strange", year: 2016,
    tag: "✨ VISUAL TRIP", type: "fun", mine: false, rating: 8.0,
    note: "The magic system gets introduced here. The kaleidoscope visuals are insane.",
    fact: "Actual astrophysicists were consulted to help design the multiverse and quantum realm visual effects.",
    symbol: "🪄"
  },
  {
    id: 15, universe: "mcu", title: "Guardians of the Galaxy Vol. 2", year: 2017,
    tag: "😭 BRING TISSUES", type: "important", mine: true, rating: 8.5,
    note: "Underneath the comedy, this is a beautiful, heavy movie about found family and trauma.",
    fact: "Ego's planet design is incredibly complex, containing over a trillion polygons in its digital rendering.",
    symbol: "🚀"
  },
  {
    id: 16, universe: "mcu", title: "Spider-Man: Homecoming", year: 2017,
    tag: "🕸️ OUR BOY", type: "fun", mine: true, rating: 8.8,
    note: "Tom Holland perfectly captures the actual 'friendly neighborhood high schooler' vibe.",
    fact: "Tom Holland went undercover as a student at a Bronx science high school to prepare for playing Peter Parker.",
    symbol: "🕸"
  },
  {
    id: 17, universe: "mcu", title: "Thor: Ragnarok", year: 2017,
    tag: "😂 HILARIOUS", type: "fun", mine: false, rating: 8.5,
    note: "They finally let Thor be funny, and it completely saved the character. An absolute blast.",
    fact: "Director Taika Waititi encouraged heavy improvisation, resulting in about 80% of the film's dialogue being improvised on set.",
    symbol: "⌁"
  },
  {
    id: 18, universe: "mcu", title: "Black Panther", year: 2018,
    tag: "👑 ROYALTY", type: "legend", mine: false, rating: 9.0,
    note: "Wakanda Forever. Killmonger is one of the most compelling villains we've ever seen.",
    fact: "It became the first superhero film in history to be nominated for Best Picture at the Academy Awards.",
    symbol: "🐾"
  },
  {
    id: 19, universe: "mcu", title: "Avengers: Infinity War", year: 2018,
    tag: "💀 THE SNAP", type: "legend", mine: true, rating: 10.0,
    note: "The beginning of the end. Make sure we have snacks and tissues, this is a heavy one.",
    fact: "Tom Holland wasn't allowed to read the full script because of his terrible track record of spoiling plot points in interviews.",
    symbol: "A"
  },
  {
    id: 20, universe: "mcu", title: "Ant-Man and the Wasp", year: 2018,
    tag: "🐜 PALATE CLEANSER", type: "fun", mine: false, rating: 7.5,
    note: "A nice, low-stakes breather after the absolute trauma of Infinity War.",
    fact: "Evangeline Lilly became the first female superhero to be a title character in an MCU film.",
    symbol: "🐜"
  },
  {
    id: 21, universe: "mcu", title: "Captain Marvel", year: 2019,
    tag: "✨ NOSTALGIA", type: "fun", mine: false, rating: 7.0,
    note: "90s vibes, Blockbuster Video, and a very good cat named Goose.",
    fact: "Samuel L. Jackson was digitally de-aged by 25 years for the entire runtime of the movie.",
    symbol: "⭐"
  },
  {
    id: 22, universe: "mcu", title: "Avengers: Endgame", year: 2019,
    tag: "😭 MASTERPIECE", type: "legend", mine: true, rating: 10.0,
    note: "The culmination of 10 years of movies. We are absolutely watching this together.",
    fact: "The film briefly overtook Avatar to become the highest-grossing film of all time before an Avatar re-release shifted the title back.",
    symbol: "A"
  },
  {
    id: 23, universe: "mcu", title: "Spider-Man: Far From Home", year: 2019,
    tag: "✈️ VACATION", type: "fun", mine: false, rating: 8.0,
    note: "The official epilogue to the Infinity Saga. Peter just wants a break.",
    fact: "Jake Gyllenhaal loved the Mysterio suit so much he insisted on wearing it practically as often as possible rather than relying on CGI.",
    symbol: "🕸"
  },

  // ==========================================
  // CANONICAL MARVEL ONE-SHOTS
  // ==========================================
  {
    id: 31, universe: "mcu", title: "The Consultant", year: 2011,
    tag: "📁 LORE", type: "important", mine: false, rating: 6.5,
    note: "A quick short explaining how SHIELD kept Abomination in prison.",
    fact: "This short was created primarily to fix a confusing plot hole regarding Tony Stark's cameo at the end of The Incredible Hulk.",
    symbol: "S"
  },
  {
    id: 32, universe: "mcu", title: "A Funny Thing Happened on the Way to Thor's Hammer", year: 2011,
    tag: "⛽ GAS STATION", type: "fun", mine: false, rating: 7.0,
    note: "Never underestimate Agent Coulson.",
    fact: "The short proved Agent Coulson wasn't just a bureaucrat by showing him smoothly neutralize a gas station robbery.",
    symbol: "S"
  },
  {
    id: 33, universe: "mcu", title: "Item 47", year: 2012,
    tag: "🔫 AFTERMATH", type: "fun", mine: false, rating: 6.5,
    note: "What happens when regular people find alien tech in New York.",
    fact: "The Chitauri gun prop used by the couple in this short was a leftover asset directly from the set of The Avengers.",
    symbol: "S"
  },
  {
    id: 34, universe: "mcu", title: "Agent Carter", year: 2013,
    tag: "🕵️‍♀️ BADASS", type: "legend", mine: true, rating: 8.0,
    note: "Peggy Carter doing what she does best.",
    fact: "The positive fan reception of this exact short film directly led to Marvel greenlighting the Agent Carter TV series.",
    symbol: "S"
  },
  {
    id: 35, universe: "mcu", title: "All Hail the King", year: 2014,
    tag: "👑 RETCON", type: "important", mine: false, rating: 7.5,
    note: "A crucial epilogue to Iron Man 3. It sets up Shang-Chi way in advance.",
    fact: "This short quietly retconned the twist in Iron Man 3 by revealing that the real Ten Rings organization actually existed.",
    symbol: "S"
},

  // ==========================================
  // BATCH 2: THE MULTIVERSE SAGA (PHASE 4-6)
  // ==========================================
  
  // Phase 4
  {
    id: 101, universe: "mcu", title: "Black Widow", year: 2021, 
    tag: "🕷️ LONG OVERDUE", type: "important", mine: false, rating: 7.0, 
    note: "Natasha finally gets her solo story. Florence Pugh as Yelena is the absolute highlight here.", 
    fact: "Scarlett Johansson finally received her solo movie 11 years after making her debut in Iron Man 2.", 
    symbol: "🕷"
  },
  {
    id: 102, universe: "mcu", title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, 
    tag: "👊 TOP TIER ACTION", type: "fun", mine: true, rating: 8.8, 
    note: "The hand-to-hand combat in this is arguably the best in the entire MCU. The bus fight is a masterpiece.", 
    fact: "Simu Liu actually performed the vast majority of his own stunts, including the incredibly complex bus fight choreography.", 
    symbol: "⭕"
  },
  {
    id: 103, universe: "mcu", title: "Eternals", year: 2021, 
    tag: "🌌 MYTHOLOGY", type: "meh", mine: false, rating: 6.5, 
    note: "It feels very different from the rest of the MCU. It’s gorgeous, but the pacing is a bit slow.", 
    fact: "Director Chloé Zhao opted to shoot extensively on practical, real-world locations rather than relying on Marvel's standard green screens.", 
    symbol: "✨"
  },
  {
    id: 104, universe: "mcu", title: "Spider-Man: No Way Home", year: 2021, 
    tag: "🤯 MIND BLOWN", type: "legend", mine: true, rating: 9.5, 
    note: "I physically cheered in the theater for this one. Avoid spoilers at all costs if you haven't seen it.", 
    fact: "Willem Dafoe agreed to return as the Green Goblin on the strict condition that he be allowed to perform his own physical stunts.", 
    symbol: "🕸"
  },
  {
    id: 105, universe: "mcu", title: "Doctor Strange in the Multiverse of Madness", year: 2022, 
    tag: "🧟‍♂️ HORROR VIBES", type: "fun", mine: false, rating: 7.5, 
    note: "Director Sam Raimi brought his evil-dead horror roots to Marvel. Wanda is genuinely terrifying here.", 
    fact: "John Krasinski's cameo as Mr. Fantastic was a direct nod to years of intense internet fan-casting campaigns.", 
    symbol: "🪄"
  },
  {
    id: 106, universe: "mcu", title: "Thor: Love and Thunder", year: 2022, 
    tag: "🎸 CHAOTIC", type: "meh", mine: false, rating: 6.0, 
    note: "Very silly, maybe a bit too much. But Christian Bale goes incredibly hard as the villain.", 
    fact: "The recurring joke of the screaming goats was directly inspired by a viral meme of a goat screaming over a Taylor Swift song.", 
    symbol: "⌁"
  },
  {
    id: 107, universe: "mcu", title: "Black Panther: Wakanda Forever", year: 2022, 
    tag: "🌊 HEAVY TRIBUTE", type: "important", mine: true, rating: 8.5, 
    note: "A beautifully handled, emotional tribute to Chadwick Boseman. Namor is an incredible antagonist.", 
    fact: "Rihanna recorded original music for the film's soundtrack—it was her first solo release in several years.", 
    symbol: "🐾"
  },

  // Special Presentations
  {
    id: 108, universe: "mcu", title: "Werewolf by Night", year: 2022, 
    tag: "🐺 CLASSIC MONSTER", type: "fun", mine: false, rating: 8.0, 
    note: "A black-and-white homage to classic 1930s monster movies. It is totally unique and absolutely brilliant.", 
    fact: "The original comic was created only after the strict 1950s Comics Code Authority finally relaxed its rules prohibiting werewolf stories.", 
    symbol: "🌕"
  },
  {
    id: 109, universe: "mcu", title: "The Guardians of the Galaxy Holiday Special", year: 2022, 
    tag: "🎄 WHOLESOME", type: "fun", mine: false, rating: 7.5, 
    note: "Pure, unfiltered joy. Drax and Mantis trying to kidnap Kevin Bacon for Christmas.", 
    fact: "It was filmed concurrently during the production of Guardians of the Galaxy Vol. 3, utilizing the exact same massive sets.", 
    symbol: "🚀"
  },

  // Phase 5
  {
    id: 110, universe: "mcu", title: "Ant-Man and the Wasp: Quantumania", year: 2023, 
    tag: "🔬 WEIRD WORLD", type: "meh", mine: false, rating: 5.5, 
    note: "A massive CGI trip. It introduces the main Multiverse villain, but it's a bit overwhelming visually.", 
    fact: "The film heavily utilized 'The Volume'—the same groundbreaking immersive LED screen technology used for The Mandalorian.", 
    symbol: "🐜"
  },
  {
    id: 111, universe: "mcu", title: "Guardians of the Galaxy Vol. 3", year: 2023, 
    tag: "😭 PERFECT CLOSURE", type: "legend", mine: true, rating: 9.5, 
    note: "The perfect ending for this team. Rocket's backstory will absolutely break your heart.", 
    fact: "The movie set an official world record for the most prosthetic makeup appliances ever created for a single film.", 
    symbol: "🚀"
  },
  {
    id: 112, universe: "mcu", title: "The Marvels", year: 2023, 
    tag: "✨ BREEZY FUN", type: "fun", mine: false, rating: 6.5, 
    note: "A genuinely fun, chaotic team-up. Iman Vellani (Ms. Marvel) completely steals the show.", 
    fact: "At exactly 1 hour and 45 minutes long, it currently holds the record for the shortest runtime of any feature film in the MCU.", 
    symbol: "⭐"
  },
  {
    id: 113, universe: "mcu", title: "Deadpool & Wolverine", year: 2024, 
    tag: "⚔️ ABSOLUTE MADNESS", type: "legend", mine: true, rating: 9.0, 
    note: "They actually brought him back. It is incredibly violent, incredibly funny, and completely insane.", 
    fact: "Hugh Jackman had retired from the role, but while driving he realized he desperately wanted to do a Deadpool team-up and immediately called Ryan Reynolds.", 
    symbol: "⚔️"
  },
  {
    id: 114, universe: "mcu", title: "Captain America: Brave New World", year: 2025, 
    tag: "🛡️ NEW ERA", type: "important", mine: false, rating: 7.5, 
    note: "Sam Wilson finally takes up the shield on the big screen.", 
    fact: "This film marks Harrison Ford's debut in the MCU, stepping in to play Thaddeus 'Thunderbolt' Ross following the passing of William Hurt.", 
    symbol: "🦅"
  },
  {
    id: 115, universe: "mcu", title: "Thunderbolts*", year: 2025, 
    tag: "⚡ ANTI-HEROES", type: "fun", mine: false, rating: 8.0, 
    note: "Marvel's version of the Suicide Squad. Yelena and Bucky interacting is going to be gold.", 
    fact: "Kevin Feige specifically noted that the asterisk in the title is intentional and its meaning will be revealed during the film.", 
    symbol: "⚡"
  },

  // Phase 6 / Upcoming
  {
    id: 116, universe: "mcu", title: "The Fantastic Four: First Steps", year: 2025, 
    tag: "🪐 RETRO SCI-FI", type: "important", mine: true, rating: 8.5, 
    note: "Marvel's First Family is finally here.", 
    fact: "Rather than taking place in the modern MCU timeline, this film is set in a retro-futuristic, alternate-universe 1960s.", 
    symbol: "4️⃣"
  },
  {
    id: 117, universe: "mcu", title: "Avengers: Doomsday", year: 2026, 
    tag: "🚨 UPCOMING", type: "important", mine: true, rating: 0, 
    note: "The Russo brothers are back. This is one of the big ones we're waiting for.", 
    fact: "Marvel currently lists Avengers: Doomsday for December 18, 2026.", 
    symbol: "A"
}
];
