(function() {
  function stripArabicMarksLocal(text) {
    return (text || '').replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
  }

  function firstArabicBaseLetterLocal(word) {
    const clean = stripArabicMarksLocal(word);
    const match = clean.match(/[\u0621-\u064A]/);
    return match ? match[0] : '';
  }

  const quranWordsUI = [
  {
    "rank": 1,
    "arabic": "مِن",
    "pronunciation": "min",
    "pronunciationBreakdown": "min",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 3226",
    "meta": {
      "pos": "preposition",
      "frequency": 3226
    },
    "ayahArabic": "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
    "ayahReference": "সূরা আন-নাস ১১৪:৪",
    "ayahBreakdown": "মিন / শাররিল / ওয়াসওয়াসিল / খান্নাস",
    "ayahMeaning": "কুমন্ত্রণা-দাতা, আত্মগোপনকারী শয়তানের অনিষ্ট থেকে।"
  },
  {
    "rank": 2,
    "arabic": "ٱللَّه",
    "pronunciation": "allāh",
    "pronunciationBreakdown": "alla-h",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 2699",
    "meta": {
      "pos": "proper noun",
      "frequency": 2699
    },
    "ayahArabic": "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
    "ayahReference": "সূরা আল-ইখলাস ১১২:১",
    "ayahBreakdown": "কুল / হুওয়া / আল্লাহু / আহাদ",
    "ayahMeaning": "বলুন, তিনি আল্লাহ, এক।"
  },
  {
    "rank": 3,
    "arabic": "فِي",
    "pronunciation": "fī",
    "pronunciationBreakdown": "fi-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 1701",
    "meta": {
      "pos": "preposition",
      "frequency": 1701
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকাল / কিতাবু / লা / রাইবা / ফীহি",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই।"
  },
  {
    "rank": 4,
    "arabic": "إِنّ",
    "pronunciation": "ʔinn",
    "pronunciationBreakdown": "’inn",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: accusative particle • Frequency: 1682",
    "meta": {
      "pos": "accusative particle",
      "frequency": 1682
    },
    "ayahArabic": "إِنَّ ٱللَّهَ غَفُورٌ رَّحِيمٌ",
    "ayahReference": "সূরা আল-বাকারাহ ২:১৭৩",
    "ayahBreakdown": "ইন্না / আল্লাহা / গাফূরুন / রহীম",
    "ayahMeaning": "নিশ্চয়ই আল্লাহ অতি ক্ষমাশীল, পরম দয়ালু।"
  },
  {
    "rank": 5,
    "arabic": "عَلَىٰ",
    "pronunciation": "ʕalā",
    "pronunciationBreakdown": "‘ala-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 1445",
    "meta": {
      "pos": "preposition",
      "frequency": 1445
    },
    "ayahArabic": "أُولَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ",
    "ayahReference": "সূরা আল-বাকারাহ ২:৫",
    "ayahBreakdown": "উলাইকা / আলা / হুদাম / মিন / রাব্বিহিম",
    "ayahMeaning": "তারাই তাদের প্রতিপালকের পক্ষ থেকে হেদায়াতের উপর রয়েছে।"
  },
  {
    "rank": 6,
    "arabic": "ٱلَّذِي",
    "pronunciation": "allaḏī",
    "pronunciationBreakdown": "allaḏi-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: relative pronoun • Frequency: 1442",
    "meta": {
      "pos": "relative pronoun",
      "frequency": 1442
    },
    "ayahArabic": "ٱلْحَمْدُ لِلَّهِ ٱلَّذِيٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ",
    "ayahReference": "সূরা আল-কাহফ ১৮:১",
    "ayahBreakdown": "আলহামদু / লিল্লাহিল্লাযি / আনযালা / আলা / আবদিহিল / কিতাব",
    "ayahMeaning": "সব প্রশংসা আল্লাহর, যিনি তাঁর বান্দার উপর কিতাব নাযিল করেছেন।"
  },
  {
    "rank": 7,
    "arabic": "لَا",
    "pronunciation": "lā",
    "pronunciationBreakdown": "la-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: negative particle • Frequency: 1364",
    "meta": {
      "pos": "negative particle",
      "frequency": 1364
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকাল / কিতাবু / লা / রাইবা / ফীহি",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই।"
  },
  {
    "rank": 8,
    "arabic": "مَا",
    "pronunciation": "mā",
    "pronunciationBreakdown": "ma-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: relative pronoun • Frequency: 1266",
    "meta": {
      "pos": "relative pronoun",
      "frequency": 1266
    },
    "ayahArabic": "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৫৬",
    "ayahBreakdown": "ওয়া / মা / খালাকতুল / জিন্না / ওয়াল / ইনসা / ইল্লা / লিয়া'বুদূন",
    "ayahMeaning": "আমি জিন ও মানুষকে শুধু আমার ইবাদত করার জন্যই সৃষ্টি করেছি।"
  },
  {
    "rank": 9,
    "arabic": "رَبّ",
    "pronunciation": "rabb",
    "pronunciationBreakdown": "rabb",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 975",
    "meta": {
      "pos": "noun",
      "frequency": 975
    },
    "ayahArabic": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
    "ayahReference": "সূরা আল-ফাতিহা ১:২",
    "ayahBreakdown": "আলহামদু / লিল্লাহি / রাব্বিল / আলামীন",
    "ayahMeaning": "সব প্রশংসা আল্লাহর, যিনি সকল জগতের প্রতিপালক।"
  },
  {
    "rank": 10,
    "arabic": "إِلَىٰ",
    "pronunciation": "ʔilā",
    "pronunciationBreakdown": "’ila-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 742",
    "meta": {
      "pos": "preposition",
      "frequency": 742
    },
    "ayahArabic": "إِنَّا لِلَّٰهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:১৫৬",
    "ayahBreakdown": "ইন্না / লিল্লাহি / ওয়া / ইন্না / ইলাইহি / রাজিঊন",
    "ayahMeaning": "নিশ্চয়ই আমরা আল্লাহর জন্য এবং নিশ্চিতভাবেই আমরা তাঁর দিকেই প্রত্যাবর্তনকারী।"
  },
  {
    "rank": 11,
    "arabic": "مَا",
    "pronunciation": "mā",
    "pronunciationBreakdown": "ma-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: negative particle • Frequency: 704",
    "meta": {
      "pos": "negative particle",
      "frequency": 704
    },
    "ayahArabic": "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৫৬",
    "ayahBreakdown": "ওয়া / মা / খালাকতুল / জিন্না / ওয়াল / ইনসা / ইল্লা / লিয়া'বুদূন",
    "ayahMeaning": "আমি জিন ও মানুষকে শুধু আমার ইবাদত করার জন্যই সৃষ্টি করেছি।"
  },
  {
    "rank": 12,
    "arabic": "مَن",
    "pronunciation": "man",
    "pronunciationBreakdown": "man",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: relative pronoun • Frequency: 606",
    "meta": {
      "pos": "relative pronoun",
      "frequency": 606
    },
    "ayahArabic": "وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ",
    "ayahReference": "সূরা আত-তালাক ৬৫:৩",
    "ayahBreakdown": "ওয়া / মান / ইয়াতাওয়াক্কাল / আলা / আল্লাহি / ফাহুওয়া / হসবুহু",
    "ayahMeaning": "যে আল্লাহর উপর ভরসা করে, আল্লাহ তার জন্য যথেষ্ট।"
  },
  {
    "rank": 13,
    "arabic": "إِن",
    "pronunciation": "ʔin",
    "pronunciationBreakdown": "'in",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: conditional particle • Frequency: 578",
    "meta": {
      "pos": "conditional particle",
      "frequency": 578
    },
    "ayahArabic": "وَإِن كَادُوا لَيَفْتِنُونَكَ عَنِ ٱلَّذِيٓ أَمْرْنَٰكَ بِهِ",
    "ayahReference": "সূরা আল-কাহফ ১৮:৭৬",
    "ayahBreakdown": "ওয়া / ইন / কাদূ / লাইফাতিনূনাকা / আনিল্লাযি / আমরনাকা / বিহি",
    "ayahMeaning": "তারা তোমাকে তাই থেকে সরাতে চেয়েছিল যা আমি তোমাকে আদেশ করেছি।"
  },

  {
    "rank": 14,
    "arabic": "أَن",
    "pronunciation": "ʔan",
    "pronunciationBreakdown": "'an",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: subordinating conjunction • Frequency: 578",
    "meta": {
      "pos": "subordinating conjunction",
      "frequency": 578
    },
    "ayahArabic": "وَمَا مِنَّا إِلَّا لَهُ مَقَامٌ مَّعْلُومٌ",
    "ayahReference": "সূরা মারিয়াম ১৯:৬৪",
    "ayahBreakdown": "ওয়া / মা / মিন্না / ইল্লা / লাহু / মাকামুন / মা'লুম",
    "ayahMeaning": "আমাদের মধ্যে প্রত্যেকেরই একটি নির্ধারিত স্থান আছে।"
  },

  {
    "rank": 15,
    "arabic": "إِلَّا",
    "pronunciation": "ʔillā",
    "pronunciationBreakdown": "'illa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: restriction particle • Frequency: 558",
    "meta": {
      "pos": "restriction particle",
      "frequency": 558
    },
    "ayahArabic": "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৫৬",
    "ayahBreakdown": "ওয়া / মা / খালাকতুল / জিন্না / ওয়াল / ইনসা / ইল্লা / লিয়া'বুদূন",
    "ayahMeaning": "আমি জিন ও মানুষকে শুধু আমার ইবাদত করার জন্যই সৃষ্টি করেছি।"
  },

  {
    "rank": 16,
    "arabic": "ذَٰلِك",
    "pronunciation": "ḏālik",
    "pronunciationBreakdown": "ḏa-lik",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: demonstrative pronoun • Frequency: 520",
    "meta": {
      "pos": "demonstrative pronoun",
      "frequency": 520
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকাল / কিতাবু / লা / রাইবা / ফীহি",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই।"
  },
  {
    "rank": 17,
    "arabic": "عَن",
    "pronunciation": "ʕan",
    "pronunciationBreakdown": "'an",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 465",
    "meta": {
      "pos": "preposition",
      "frequency": 465
    },
    "ayahArabic": "عَسَى ٱللَّهُ أَن يَجْعَلَ بَيْنَكُمْ وَبَيْنَ ٱلَّذِينَ عَادَيْتُم مِّنْهُم مَّمَرَّةً",
    "ayahReference": "সূরা আল-মুতাহহারাহ ৬০:৭",
    "ayahBreakdown": "আসা / আল্লাহু / আন / ইয়াজ'আলা / বাইনাকুম / ওয়া / বাইনা / আল্লাযীনা / আাদাইতুম / মিনহুম / মামারাতান",
    "ayahMeaning": "আল্লাহ হয়তো তোমাদের এবং তোমাদের শত্রুদের মধ্যে একটি সম্পর্ক স্থাপন করবেন।"
  },

  {
    "rank": 18,
    "arabic": "أَرْض",
    "pronunciation": "ʔarḍ",
    "pronunciationBreakdown": "'arḍ",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 461",
    "meta": {
      "pos": "noun",
      "frequency": 461
    },
    "ayahArabic": "وَإِلَى ٱلْأَرْضِ كَيْفَ سُرِّقُوا۟",
    "ayahReference": "সূরা আল-বাকারাহ ২:২২",
    "ayahBreakdown": "ওয়া / ইলা / আল-আরদি / কাইফা / সুররিকূ",
    "ayahMeaning": "এবং পৃথিবীতে কীভাবে তারা চুরি করে।"
  },

  {
    "rank": 19,
    "arabic": "قَد",
    "pronunciation": "qad",
    "pronunciationBreakdown": "qad",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: particle of certainty • Frequency: 406",
    "meta": {
      "pos": "particle of certainty",
      "frequency": 406
    },
    "ayahArabic": "قَدْ نَرَىٰ تَحَوُّلَ وَجْهِهِ فَهُوَ لَا يَكَادُ يَرَىٰ",
    "ayahReference": "সূরা আল-মুদ্দাসসির ৭৪:২২",
    "ayahBreakdown": "ক্বদ / নারা / তাহাওউলা / ওয়াজহিহি / ফাহুওয়া / লা / ইয়াকাদু / ইয়ারা",
    "ayahMeaning": "তার মুখের রঙ পরিবর্তন হতে দেখা যায়, কিন্তু সে কিছুই দেখতে পায় না।"
  },
  {
    "rank": 20,
    "arabic": "إِذَا",
    "pronunciation": "ʔiḏā",
    "pronunciationBreakdown": "'iḏa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 405",
    "meta": {
      "pos": "time adverb",
      "frequency": 405
    },
    "ayahArabic": "وَإِذَا قِيلَ لَهُمُ ٱرْكَعُوا۟ لَا يَرْكَعُونَ",
    "ayahReference": "সূরা আল-মুরসালাত ৭৭:৪৮",
    "ayahBreakdown": "ওয়া / ইযা / কীলা / লাহুমু / ইরকা'ঊ / লা / ইয়ারকা'ঊন",
    "ayahMeaning": "যখন তাদের বলা হয় রুকু করো, তখন তারা রুকু করে না।"
  },

  {
    "rank": 21,
    "arabic": "قَوْم",
    "pronunciation": "qawm",
    "pronunciationBreakdown": "qawm",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 383",
    "meta": {
      "pos": "noun",
      "frequency": 383
    },
    "ayahArabic": "قَوْمِ ٱصْبِرُوا۟ عَلَىٰ رِسَالَٰتِ رَبِّكُمْ",
    "ayahReference": "সূরা আল-কাহফ ১৮:২৮",
    "ayahBreakdown": "কাওমি / ইসবিরূ / আলা / রিসালাতি / রব্বিকুম",
    "ayahMeaning": "হে আমার সম্প্রদায়, তোমরা তোমাদের প্রতিপালকের বার্তা সহ্য করো।"
  },
  {
    "rank": 22,
    "arabic": "ءَايَة",
    "pronunciation": "ʔāya",
    "pronunciationBreakdown": "'a-ya",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 382",
    "meta": {
      "pos": "noun",
      "frequency": 382
    },
    "ayahArabic": "وَإِن كُنتُمْ فِى رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍ مِّن مِّثْلِهِۦ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৩",
    "ayahBreakdown": "ওয়া / ইন / কুনতুম / ফী / রাইবিন / মিম্মা / নাজ্জাল্না / আলা / আবদিনা / ফা/আতূ / বিসূরাতিন / মিম / মিসলিহি",
    "ayahMeaning": "তোমরা যদি আমার বান্দার প্রতি যা নাযিল করেছি তাতে সন্দেহে থাকো, তাহলে তার মতো একটি সূরা নিয়ে এসো।"
  },

  {
    "rank": 23,
    "arabic": "أَنّ",
    "pronunciation": "ʔann",
    "pronunciationBreakdown": "'ann",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: accusative particle • Frequency: 362",
    "meta": {
      "pos": "accusative particle",
      "frequency": 362
    },
    "ayahArabic": "وَأَنَّ رَبَّكُمْ هُوَ ٱلْغَفُورُ ٱلرَّحِيمُ",
    "ayahReference": "সূরা আল-কাহফ ১৮:৫৮",
    "ayahBreakdown": "ওয়া / আন্না / রব্বাকুম / হুওয়া / আল-গাফূরু / আর-রহীম",
    "ayahMeaning": "এবং নিশ্চয়ই তোমাদের প্রতিপালক তিনিই অতি ক্ষমাশীল, পরম দয়ালু।"
  },

  {
    "rank": 24,
    "arabic": "كُلّ",
    "pronunciation": "kull",
    "pronunciationBreakdown": "kull",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 358",
    "meta": {
      "pos": "noun",
      "frequency": 358
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ।"
  },
  {
    "rank": 25,
    "arabic": "لَم",
    "pronunciation": "lam",
    "pronunciationBreakdown": "lam",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: negative particle • Frequency: 353",
    "meta": {
      "pos": "negative particle",
      "frequency": 353
    },
    "ayahArabic": "وَلَمْ نَكُن لَّهُ كُرُهَاۭ بَنُونَ",
    "ayahReference": "সূরা মারিয়াম ১৯:৮",
    "ayahBreakdown": "ওয়া / লাম / নাকুন / লাহু / কুরহান / বানূন",
    "ayahMeaning": "এবং তাঁর কোনো সন্তান নেই।"
  },
  {
    "rank": 26,
    "arabic": "ثُمّ",
    "pronunciation": "ṯumm",
    "pronunciationBreakdown": "ṯumm",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: coordinating conjunction • Frequency: 338",
    "meta": {
      "pos": "coordinating conjunction",
      "frequency": 338
    },
    "ayahArabic": "ثُمَّ إِنَّ رَبَّكُمُ ٱلْكَفَّارَ",
    "ayahReference": "সূরা আশ-শামস ৯১:১৪",
    "ayahBreakdown": "সুম্মা / ইন্না / রব্বাকুমু / আল-কাফফার",
    "ayahMeaning": "তোমাদের প্রতিপালক নিশ্চয়ই কাফেরদের শাস্তি দেবেন।"
  },
  {
    "rank": 27,
    "arabic": "رَسُول",
    "pronunciation": "rasūl",
    "pronunciationBreakdown": "rasu-l",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 332",
    "meta": {
      "pos": "noun",
      "frequency": 332
    },
    "ayahArabic": "وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ ٱلرُّسُلُ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৩৭",
    "ayahBreakdown": "ওয়া / মা / মুহাম্মদুন / ইল্লা / রাসূলুন / ক্বদ / খালাত / মিন / কাবলিহি / আর-রুসুল",
    "ayahMeaning": "মুহাম্মদ শুধু একজন রাসূল, তাঁর আগেও অনেক রাসূল গত হয়েছেন।"
  },
  {
    "rank": 28,
    "arabic": "لَا",
    "pronunciation": "lā",
    "pronunciationBreakdown": "la-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: prohibition particle • Frequency: 327",
    "meta": {
      "pos": "prohibition particle",
      "frequency": 327
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকাল / কিতাবু / লা / রাইবা / ফীহি",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই।"
  },
  {
    "rank": 29,
    "arabic": "يَوْم",
    "pronunciation": "yawm",
    "pronunciationBreakdown": "yawm",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 325",
    "meta": {
      "pos": "noun",
      "frequency": 325
    },
    "ayahArabic": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
    "ayahReference": "সূরা আল-ফাতিহা ১:২",
    "ayahBreakdown": "আলহামদু / লিল্লাহি / রাব্বি / আল-'আলামীন",
    "ayahMeaning": "সব প্রশংসা আল্লাহর, যিনি সকল জগতের প্রতিপালক।"
  },
  {
    "rank": 30,
    "arabic": "عَذَاب",
    "pronunciation": "ʕaḏāb",
    "pronunciationBreakdown": "'aḏa-b",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 322",
    "meta": {
      "pos": "noun",
      "frequency": 322
    },
    "ayahArabic": "وَلَعَذَابُ ٱلْأَخِرَةِ أَكْبَرُ لَوْ كَانُوا۟ يَعْلَمُونَ",
    "ayahReference": "সূরা আল-কাহফ ১৮:২৮",
    "ayahBreakdown": "ওয়া / লা'আযাবু / আল-আখিরাতি / আকবারু / লাও / কানূ / ইয়া'লামূন",
    "ayahMeaning": "পরকালের শাস্তি তো অনেক বড়ো, যদি তারা জানত।"
  },

  {
    "rank": 31,
    "arabic": "هَٰذَا",
    "pronunciation": "hāḏā",
    "pronunciationBreakdown": "ha-ḏa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: demonstrative pronoun • Frequency: 317",
    "meta": {
      "pos": "demonstrative pronoun",
      "frequency": 317
    },
    "ayahArabic": "هَٰذَا بَلَٰغٌ لِّلنَّاسِ",
    "ayahReference": "সূরা ইবরাহীম ১৪:৫২",
    "ayahBreakdown": "হাযা / বালাগুন / লিন্নাস",
    "ayahMeaning": "এটি মানুষের জন্য এক পৌঁছে দেওয়া বার্তা।"
  },
  {
    "rank": 32,
    "arabic": "سَمَاء",
    "pronunciation": "samāʔ",
    "pronunciationBreakdown": "sama-'",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 310",
    "meta": {
      "pos": "noun",
      "frequency": 310
    },
    "ayahArabic": "وَجَعَلَ ٱلْقَمَرَ فِيهِنَّ نُورًا وَجَعَلَ ٱلسُّرَاجَ مُّنِيرًا",
    "ayahReference": "সূরা নূহ ৭১:১৬",
    "ayahBreakdown": "ওয়া / জা'আলা / আল-কামার / ফীহিন্না / নূরান / ওয়া / জা'আলা / আস-সুরাজা / মুনীরান",
    "ayahMeaning": "তিনি চাঁদকে তাতে আলো দিয়েছেন এবং সূর্যকে উজ্জ্বল করেছেন।"
  },

  {
    "rank": 33,
    "arabic": "نَفْس",
    "pronunciation": "nafs",
    "pronunciationBreakdown": "nafs",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 295",
    "meta": {
      "pos": "noun",
      "frequency": 295
    },
    "ayahArabic": "كُلُّ نَفْسٍ بِمَا كَسَبَتْ رَهِينَةٌ",
    "ayahReference": "সূরা আল-মুদ্দাসসির ৭৪:৩৮",
    "ayahBreakdown": "কুল্লু / নাফসিন / বিমা / কাসাবাত / রাহীনাতুন",
    "ayahMeaning": "প্রতিটি প্রাণ তার কৃত কর্মের জন্য আটক।"
  },
  {
    "rank": 34,
    "arabic": "شَيْء",
    "pronunciation": "šayʔ",
    "pronunciationBreakdown": "šay'",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 283",
    "meta": {
      "pos": "noun",
      "frequency": 283
    },
    "ayahArabic": "إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    "ayahReference": "সূরা আত-তালাক ৬৫:১২",
    "ayahBreakdown": "ইন্না / আল্লাহা / আলা / কুল্লি / শাইয়িন / কাদীর",
    "ayahMeaning": "নিশ্চয়ই আল্লাহ সব কিছুর উপর সক্ষম।"
  },

  {
    "rank": 35,
    "arabic": "أَو",
    "pronunciation": "ʔaw",
    "pronunciationBreakdown": "'aw",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: coordinating conjunction • Frequency: 280",
    "meta": {
      "pos": "coordinating conjunction",
      "frequency": 280
    },
    "ayahArabic": "وَقُل رَّبِّ أَدْخِلْنِى مُدْخَلَ صِدْقٍ وَأَخْرِجْنِى مُخْرَجَ صِدْقٍ",
    "ayahReference": "সূরা আল-ইসরা ১৭:৮০",
    "ayahBreakdown": "ওয়া / কুল / রাব্বি / আদখিলনী / মুদখালা / সিদ্কিন / ওয়া / আখরিজনী / মুখরাজা / সিদ্কিন",
    "ayahMeaning": "বলো, হে আমার প্রতিপালক, আমাকে সত্যের সাথে প্রবেশ করাও এবং সত্যের সাথে বের করো।"
  },

  {
    "rank": 36,
    "arabic": "كِتَٰب",
    "pronunciation": "kitāb",
    "pronunciationBreakdown": "kita-b",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 260",
    "meta": {
      "pos": "noun",
      "frequency": 260
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকাল / কিতাবু / লা / রাইবা / ফীহি",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই।"
  },
  {
    "rank": 37,
    "arabic": "بَيْن",
    "pronunciation": "bayn",
    "pronunciationBreakdown": "bayn",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: location adverb • Frequency: 243",
    "meta": {
      "pos": "location adverb",
      "frequency": 243
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ।"
  },
  {
    "rank": 38,
    "arabic": "حَقّ",
    "pronunciation": "ḥaqq",
    "pronunciationBreakdown": "ḥaqq",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 242",
    "meta": {
      "pos": "noun",
      "frequency": 242
    },
    "ayahArabic": "وَلَٰكِنْ أَكْثَرُهُمْ لَا يَعْلَمُونَ حَقًّا مِّن رَّبِّهِمْ",
    "ayahReference": "সূরা আল-মু'মিনূন ২৩:৭০",
    "ayahBreakdown": "ওয়া / লাকিন / আকছারুহুম / লা / ইয়া'লামূন / হাক্কান / মিন / রব্বিহিম",
    "ayahMeaning": "কিন্তু তাদের অধিকাংশ জানে না তাদের প্রতিপালকের কাছ থেকে আসা সত্য।"
  },
  {
    "rank": 39,
    "arabic": "نَاس",
    "pronunciation": "nās",
    "pronunciationBreakdown": "na-s",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 241",
    "meta": {
      "pos": "noun",
      "frequency": 241
    },
    "ayahArabic": "يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২১",
    "ayahBreakdown": "ইয়া / আইয়ুহান / নাসু / ই'বুদূ / রাব্বাকুম",
    "ayahMeaning": "হে মানুষ, তোমরা তোমাদের প্রতিপালকের ইবাদত করো।"
  },
  {
    "rank": 40,
    "arabic": "إِذ",
    "pronunciation": "ʔiḏ",
    "pronunciationBreakdown": "'iḏ",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 239",
    "meta": {
      "pos": "time adverb",
      "frequency": 239
    },
    "ayahArabic": "إِذْ قَالَ لَهُۥ رَبُّهُۥ سَلِّمْ",
    "ayahReference": "সূরা আশ-শামস ৯১:১৩",
    "ayahBreakdown": "ইয / ক্বালা / লাহূ / রব্বুহূ / সাল্লিম",
    "ayahMeaning": "যখন তাঁর প্রতিপালক তাঁকে বললেন, তুমি শান্তিতে থাকো।"
  },

  {
    "rank": 41,
    "arabic": "أُولَٰٓئِك",
    "pronunciation": "ʔulāʔika",
    "pronunciationBreakdown": "'ula-'ika",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: demonstrative pronoun • Frequency: 204",
    "meta": {
      "pos": "demonstrative pronoun",
      "frequency": 204
    },
    "ayahArabic": "أُولَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُولَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:৫",
    "ayahBreakdown": "উলাইকা / আলা / হুদাম / মিন / রাব্বিহিম / ওয়া / উলাইকা / হুমু / আল-মুফলিহূন",
    "ayahMeaning": "তারাই তাদের প্রতিপালকের পক্ষ থেকে হেদায়াতের উপর রয়েছে এবং তারাই সফলকাম।"
  },

  {
    "rank": 42,
    "arabic": "قَبْل",
    "pronunciation": "qabl",
    "pronunciationBreakdown": "qabl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 197",
    "meta": {
      "pos": "noun",
      "frequency": 197
    },
    "ayahArabic": "وَأَنزَلْنَا إِلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ مِن رَّبِّهِمْ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৩",
    "ayahBreakdown": "ওয়া / আনযাল্না / ইলাইকা / আল-কিতাবা / বিল-হাক্কি / মিন / রব্বিহিম",
    "ayahMeaning": "এবং আমি তোমার কাছে কিতাব নাযিল করেছি তোমার প্রতিপালকের কাছ থেকে সত্য সহ।"
  },
  {
    "rank": 43,
    "arabic": "مُؤْمِن",
    "pronunciation": "muʔmin",
    "pronunciationBreakdown": "mu'min",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 195",
    "meta": {
      "pos": "noun",
      "frequency": 195
    },
    "ayahArabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟",
    "ayahReference": "সূরা আল-আ'রাফ ৭:২০০",
    "ayahBreakdown": "ইয়া / আইয়ুহা / আল্লাযীনা / আমানু / ইসবিরূ / ওয়া / সাবিরূ / ওয়া / রাবিতূ",
    "ayahMeaning": "হে ঈমানদারগণ, তোমরা ধৈর্য ধরো এবং সবর করো এবং সীমান্তে অবস্থান করো।"
  },

  {
    "rank": 44,
    "arabic": "لَو",
    "pronunciation": "law",
    "pronunciationBreakdown": "law",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: conditional particle • Frequency: 184",
    "meta": {
      "pos": "conditional particle",
      "frequency": 184
    },
    "ayahArabic": "وَلَوْ أَنَّ قُرْءَانًا سُيِّرَتْ بِهِ ٱلْجِبَالُ أَوْ قُطِّعَتْ بِهِ ٱلْأَرْضُ",
    "ayahReference": "সূরা আর-রা'দ ১৩:৩১",
    "ayahBreakdown": "ওয়া / লাও / আন্না / কুর'আনান / সুয়্যিরাত / বিহি / আল-জিবালু / আও / কুত্তি'আত / বিহি / আল-আরদু",
    "ayahMeaning": "যদি এই কুরআন দ্বারা পাহাড়গুলো চলিত বা পৃথিবী বিদীর্ণ করা হতো।"
  },
  {
    "rank": 45,
    "arabic": "مَن",
    "pronunciation": "man",
    "pronunciationBreakdown": "man",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: conditional particle • Frequency: 184",
    "meta": {
      "pos": "conditional particle",
      "frequency": 184
    },
    "ayahArabic": "مَّن يَهْدِ ٱللَّهُ فَهُوَ ٱلْمُهْتَدِى وَمَن يُضْلِلْ فَأُو۟لَٰٓئِكَ هُمُ ٱلْبَٰغِينَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৭৮",
    "ayahBreakdown": "মান / ইয়াহদি / আল্লাহু / ফাহুওয়া / আল-মুহতাদি / ওয়া / মান / ইয়ুদলিল / ফাউলাইকা / হুমু / আল-বাগীন",
    "ayahMeaning": "আল্লাহ যাকে হেদায়াত দেন সে-ই সঠিক পথ পায়, আর যাকে পথভ্রষ্ট করেন তারাই অন্যায়কারী।"
  },
  {
    "rank": 46,
    "arabic": "سَبِيل",
    "pronunciation": "sabīl",
    "pronunciationBreakdown": "sabi-l",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 176",
    "meta": {
      "pos": "noun",
      "frequency": 176
    },
    "ayahArabic": "وَأَنِ ٱقْتَدُوا۟ بِسُبُلِ رَبِّكُمْ وَأَنُوبُوٓا۟ إِلَيْهِ",
    "ayahReference": "সূরা আয-যুমার ৩৯:৫৪",
    "ayahBreakdown": "ওয়া / আনি / ইকতাদূ / বিসুবুলি / রব্বিকুম / ওয়া / আনূবূ / ইলাইহি",
    "ayahMeaning": "এবং তোমরা তোমাদের প্রতিপালকের পথ অনুসরণ করো এবং তাঁর কাছে প্রত্যাবর্তন করো।"
  },
  {
    "rank": 47,
    "arabic": "أَمْر",
    "pronunciation": "ʔamr",
    "pronunciationBreakdown": "'amr",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 166",
    "meta": {
      "pos": "noun",
      "frequency": 166
    },
    "ayahArabic": "فَإِذَا عَزَمَ ٱلْأَمْرُ فَلَوْ صَدَّقْتُمُ ٱللَّهَ لَكَانَ خَيْرًا لَّكُمْ",
    "ayahReference": "সূরা মুহাম্মদ ৪৭:২০",
    "ayahBreakdown": "ফা / ইযা / আ'যামা / আল-আমরু / ফা / লাও / সাদ্দাকতুমু / আল্লাহা / লাকান / খাইরান / লাকুম",
    "ayahMeaning": "যখন বিষয়টি চূড়ান্ত হয়ে যায়, তখন যদি তোমরা আল্লাহকে সত্যায়িত করতে তাহলে তোমাদের জন্য উত্তম হতো।"
  },

  {
    "rank": 48,
    "arabic": "عِند",
    "pronunciation": "ʕind",
    "pronunciationBreakdown": "'ind",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: location adverb • Frequency: 160",
    "meta": {
      "pos": "location adverb",
      "frequency": 160
    },
    "ayahArabic": "وَمَا عِندَ ٱللَّهِ بَاقٍ وَلَوْ كَانَ لَهُم مَّا فِى ٱلْأَرْضِ جَمِيعًا",
    "ayahReference": "সূরা আল-নাহল ১৬:৯৬",
    "ayahBreakdown": "ওয়া / মা / আইন্দা / আল্লাহি / বাকিন / ওয়া / লাও / কানা / লাহুম / মা / ফী / আল-আরদি / জামী'আন",
    "ayahMeaning": "আল্লাহর কাছে যা আছে তা চিরস্থায়ী এবং যদি তাদের পৃথিবীর সব কিছুও থাকত।"
  },

  {
    "rank": 49,
    "arabic": "مَع",
    "pronunciation": "maʕ",
    "pronunciationBreakdown": "ma'",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: location adverb • Frequency: 159",
    "meta": {
      "pos": "location adverb",
      "frequency": 159
    },
    "ayahArabic": "وَٱصْبِرْ نَفْسَكَ مَعَ ٱلَّذِينَ يَدْعُونَ رَبَّهُم بِٱلْغَدَوٰةِ وَٱلْعَشِىِّ",
    "ayahReference": "সূরা আল-কাহফ ১৮:২৮",
    "ayahBreakdown": "ওয়া / ইসবির / নাফসাকা / মা'আ / আল্লাযীনা / ইয়াদ'ঊনা / রব্বাহুম / বিল-গাদওয়াতি / ওয়া / আল-'আশিয়্যি",
    "ayahMeaning": "এবং নিজেকে ধৈর্য ধরতে শেখাও তাদের সাথে যারা সকালে ও সন্ধ্যায় তাদের প্রতিপালককে ডাকে।"
  },

  {
    "rank": 50,
    "arabic": "بَعْض",
    "pronunciation": "baʕḍ",
    "pronunciationBreakdown": "ba'ḍ",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 157",
    "meta": {
      "pos": "noun",
      "frequency": 157
    },
    "ayahArabic": "وَلَوْ يَرَى ٱلَّذِينَ ظَلَمُوا۟ إِذْ يَرَوْنَ ٱلْعَذَابَ أَنَّ ٱلْقُوَّةَ لِلَّهِ جَمِيعًا",
    "ayahReference": "সূরা আল-বাকারাহ ২:১৬৫",
    "ayahBreakdown": "ওয়া / লাও / ইয়ারা / আল্লাযীনা / জালিমূ / ইয / ইয়ারাওনা / আল-'আযাবা / আন্না / আল-কুওতা / লিল্লাহি / জামী'আন",
    "ayahMeaning": "যারা জুলুম করেছে যদি দেখত শাস্তি, তারা বুঝত যে সব শক্তি আল্লাহর।"
  },

  {
    "rank": 51,
    "arabic": "لَمَّا",
    "pronunciation": "lammā",
    "pronunciationBreakdown": "lamma-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 156",
    "meta": {
      "pos": "time adverb",
      "frequency": 156
    },
    "ayahArabic": "وَلَمَّا سَقِيَ لَهُمْ أَبُوهُمْ وَقَالَ ٱكْفُرُوا۟ بِهِ",
    "ayahReference": "সূরা ইউসুফ ১২:৮",
    "ayahBreakdown": "ওয়া / লাম্মা / সাকিয়া / লাহুম / আবূহুম / ওয়া / ক্বালা / ইকফুরূ / বিহি",
    "ayahMeaning": "যখন তাদের জন্য পানি পান করানো হলো এবং তিনি বললেন তাঁকে অস্বীকার করো।"
  },
  {
    "rank": 52,
    "arabic": "أَيُّهَا",
    "pronunciation": "ʔayyuhā",
    "pronunciationBreakdown": "'ayyuha-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 153",
    "meta": {
      "pos": "noun",
      "frequency": 153
    },
    "ayahArabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَذَرُوا۟ مَا بَقِيَ مِنَ ٱلرِّبَاٰ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৭৮",
    "ayahBreakdown": "ইয়া / আইয়ুহা / আল্লাযীনা / আমানু / ইত্তাকূ / আল্লাহা / ওয়া / ধারূ / মা / বাকিয়া / মিনা / আর-রিবা",
    "ayahMeaning": "হে ঈমানদারগণ, তোমরা আল্লাহকে ভয় করো এবং সুদের যা বাকি আছে তা পরিত্যাগ করো।"
  },

  {
    "rank": 53,
    "arabic": "خَيْر",
    "pronunciation": "ḵayr",
    "pronunciationBreakdown": "ḵayr",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 148",
    "meta": {
      "pos": "noun",
      "frequency": 148
    },
    "ayahArabic": "وَأَنزَلَ مَعَهُمُ ٱلْكِتَٰبَ بِٱلْحَقِّ لِيَحْكُمَ بَيْنَ ٱلنَّاسِ فِيمَا ٱخْتَلَفُوا۟ فِيهِ ۗ وَمَا ٱخْتَلَفَ فِيهِ إِلَّا ٱلَّذِينَ أُوتُوهُ مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَٰتُ بَغْيًا بَيْنَهُمْ ۖ فَهَدَى ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ لِمَا ٱخْتَلَفُوا۟ فِيهِ مِنَ ٱلْحَقِّ بِإِذْنِهِۦ ۗ وَٱللَّهُ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২১৩",
    "ayahBreakdown": "ওয়া / আনযালা / মা'আহুমু / আল-কিতাবা / বিল-হাক্কি / লিয়াহকুমা / বাইনা / আন-নাসি / ফীমা / ইখতালাফূ / ফীহি / ওয়া / মা / ইখতালাফা / ফীহি / ইল্লা / আল্লাযীনা / ঊতূহু / মিন / বা'দি / মা / জাআতহুমু / আল-বাইয়িনাতু / বাগইয়া / বাইনাহুম / ফাহাদা / আল্লাহু / আল্লাযীনা / আমানু / লিমা / ইখতালাফূ / ফীহি / মিন / আল-হাক্কি / বিইজনিহি / ওয়া / আল্লাহু / ইয়াহদি / মান / ইয়াশাউ / ইলা / সিরাতিন / মুসতাকীম",
    "ayahMeaning": "তিনি তাদের সাথে কিতাব নাযিল করেছেন সত্য সহকারে, যাতে মানুষের মধ্যে যে বিষয়ে মতভেদ হয়েছে তা সে সিদ্ধান্ত দেয়। আর যাদের কাছে কিতাব দেওয়া হয়েছিল, স্পষ্ট প্রমাণ আসার পরও তারা নিজেদের মধ্যে বিদ্বেষে মতভেদ করেছে। আল্লাহ তাঁর অনুমতিতে ঈমানদারদের সেই সত্যের হেদায়াত দিয়েছেন যা নিয়ে তারা মতভেদ করেছিল। আল্লাহ যাকে চান সরল পথ দেখান।"
  },
  {
    "rank": 54,
    "arabic": "إِلَٰه",
    "pronunciation": "ʔilāh",
    "pronunciationBreakdown": "'ila-h",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 147",
    "meta": {
      "pos": "noun",
      "frequency": 147
    },
    "ayahArabic": "لَوْ كَانَ فِيهِمَآ ءَالِهَةٌ إِلَّا ٱللَّهُ لَفَسَدَتَا",
    "ayahReference": "সূরা আল-আম্বিয়া ২১:২২",
    "ayahBreakdown": "লাও / কানা / ফীহিমা / আলাহাতুন / ইল্লা / আল্লাহু / লাফাসাদাতা",
    "ayahMeaning": "যদি উভয় জগতে আল্লাহ ছাড়া অন্য কোনো ইলাহ থাকত, তাহলে উভয়ই বিশৃঙ্খল হয়ে যেত।"
  },

  {
    "rank": 55,
    "arabic": "نَار",
    "pronunciation": "nār",
    "pronunciationBreakdown": "na-r",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 145",
    "meta": {
      "pos": "noun",
      "frequency": 145
    },
    "ayahArabic": "وَمَا تَوَلَّىٰ مِنْهُمْ إِلَّا كَثِيرًا ۖ فَأَعْرِضْ عَنْهُمْ وَانْتَظِرْ إِنَّهُم مُّنتَظِرُونَ",
    "ayahReference": "সূরা হূদ ১১:২০",
    "ayahBreakdown": "ওয়া / মা / তাওয়াল্লা / মিনহুম / ইল্লা / কাসীরা / ফা / আ'রিদ / আনহুম / ওয়া / ইনতাজির / ইন্নাহুম / মুনতাজিরূন",
    "ayahMeaning": "তাদের মধ্যে অনেকেই মুখ ফিরিয়ে নিয়েছে। অতএব তুমি তাদের থেকে মুখ ফিরাও এবং অপেক্ষা করো, নিশ্চয়ই তারাও অপেক্ষমাণ।"
  },
  {
    "rank": 56,
    "arabic": "غَيْر",
    "pronunciation": "ḡayr",
    "pronunciationBreakdown": "ḡayr",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 144",
    "meta": {
      "pos": "noun",
      "frequency": 144
    },
    "ayahArabic": "إِنَّ رَبَّكُمُ ٱللَّهَ ٱلَّذِى خَلَقَكُمْ وَمَنْ أَسْلَفَ غَيْرِ ٱلْمُسْتَقْرِضِينَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৫",
    "ayahBreakdown": "ইন্না / রব্বাকুমু / আল্লাহু / আল্লাযী / খালাকাকুম / ওয়া / মান / আসলাফা / গাইরি / আল-মুসতাকরিমীন",
    "ayahMeaning": "তোমাদের প্রতিপালক আল্লাহ, যিনি তোমাদের এবং তোমাদের পূর্ববর্তীদের সৃষ্টি করেছেন, গুনাহগারদের ছাড়া।"
  },
  {
    "rank": 57,
    "arabic": "أَم",
    "pronunciation": "ʔam",
    "pronunciationBreakdown": "'am",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: coordinating conjunction • Frequency: 137",
    "meta": {
      "pos": "coordinating conjunction",
      "frequency": 137
    },
    "ayahArabic": "أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۚ قُلْ إِنِ ٱفْتَرَيْتُهُ فَلَا تَمْلِكُونَ لِى مِنَ ٱللَّهِ شَيْئًا",
    "ayahReference": "সূরা হূদ ১১:৩",
    "ayahBreakdown": "আম / ইয়াকূলূনা / আফতারাহু / কুল / ইনি / আফতারাইতুহু / ফালা / তামলিকূনা / লি / মিনা / আল্লাহি / শাইআন",
    "ayahMeaning": "তারা কি বলে যে এটা তিনি নিজে রচনা করেছেন? বলো, আমি যদি এটা রচনা করে থাকি, তাহলে তোমরা আল্লাহর কাছ থেকে আমার কোনো উপকার করতে পারবে না।"
  },

  {
    "rank": 58,
    "arabic": "مُوسَىٰ",
    "pronunciation": "mūsā",
    "pronunciationBreakdown": "mu-sa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 136",
    "meta": {
      "pos": "proper noun",
      "frequency": 136
    },
    "ayahArabic": "وَأَنزَلْنَا إِلَىٰ مُوسَىٰ أَنِ ٱعْمَلْ سَحَرًا",
    "ayahReference": "সূরা ইউনুস ১০:৮১",
    "ayahBreakdown": "ওয়া / আনযাল্না / ইলা / মূসা / আনি / আ'মাল / সাহারান",
    "ayahMeaning": "আমি মূসার কাছে নাযিল করেছি যে তুমি জাদু দিয়ে কাজ করো।"
  },
  {
    "rank": 59,
    "arabic": "دُون",
    "pronunciation": "dūn",
    "pronunciationBreakdown": "du-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 135",
    "meta": {
      "pos": "noun",
      "frequency": 135
    },
    "ayahArabic": "وَهُمْ يَنظُرُونَ عَمَّا كَانُوا۟ يَفْتَرُونَ",
    "ayahReference": "সূরা আল-কাহফ ১৮:৫৩",
    "ayahBreakdown": "ওয়া / হুম / ইয়ানজুরূনা / আম্মা / কানূ / ইয়াফতারূন",
    "ayahMeaning": "আর তারা দেখছে যা তারা মিথ্যা বলত।"
  },
  {
    "rank": 60,
    "arabic": "آخِر",
    "pronunciation": "ʔāḵir",
    "pronunciationBreakdown": "'a-ḵir",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 133",
    "meta": {
      "pos": "noun",
      "frequency": 133
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },

  {
    "rank": 61,
    "arabic": "بَعْد",
    "pronunciation": "baʕd",
    "pronunciationBreakdown": "ba'd",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 133",
    "meta": {
      "pos": "noun",
      "frequency": 133
    },
    "ayahArabic": "أَفَلَمْ يَدَّبَّرُوا۟ ٱلْقَوْلَ أَمْ جَآءَهُمْ مَّا لَمْ يَأْتِ ءَابَاءَهُمُ ٱلْأَوَّلِينَ",
    "ayahReference": "সূরা আল-মু'মিনূন ২৩:৬৮",
    "ayahBreakdown": "আফালাম / ইয়াদ্দাব্বারূ / আল-কাওলা / আম / জাআহুম / মা / লাম / ইয়াতি / আবাআহুমু / আল-আওওয়ালীন",
    "ayahMeaning": "তারা কি এই বাণী চিন্তা করে দেখেনি, নাকি তাদের কাছে এমন কিছু এসেছে যা তাদের পূর্বপুরুষদের কাছে আসেনি?"
  },

  {
    "rank": 62,
    "arabic": "قَلْب",
    "pronunciation": "qalb",
    "pronunciationBreakdown": "qalb",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 132",
    "meta": {
      "pos": "noun",
      "frequency": 132
    },
    "ayahArabic": "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَآ",
    "ayahReference": "সূরা আল-হজ ২২:৪৬",
    "ayahBreakdown": "আফালাম / ইয়াসীরূ / ফী / আল-আরদি / ফাতাকূনা / লাহুম / কুলূবুন / ইয়া'কিলূনা / বিহা",
    "ayahMeaning": "তারা কি পৃথিবীতে ভ্রমণ করেনি, যাতে তাদের অন্তর হয় যা দিয়ে তারা বুঝতে পারে?"
  },
  {
    "rank": 63,
    "arabic": "عَبْد",
    "pronunciation": "ʕabd",
    "pronunciationBreakdown": "'abd",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 131",
    "meta": {
      "pos": "noun",
      "frequency": 131
    },
    "ayahArabic": "وَقَالُوا۟ لَوْلَا نُزِّلَ هَٰذَا ٱلْقُرْءَانُ عَلَىٰ رَجُلٍ مِّنَ ٱلْقَرْيَتَيْنِ عَظِيمٍ",
    "ayahReference": "সূরা আয-যুমার ৩৯:২৪",
    "ayahBreakdown": "ওয়া / ক্বালূ / লাওলা / নুযিলা / হাযা / আল-কুর'আনু / আলা / রাজুলিন / মিনা / আল-কারইয়াতাইন / আ'জীম",
    "ayahMeaning": "তারা বলে, এই কুরআন কেন দুই গ্রামের একজন মহান ব্যক্তির উপর নাযিল হয়নি?"
  },

  {
    "rank": 64,
    "arabic": "أَهْل",
    "pronunciation": "ʔahl",
    "pronunciationBreakdown": "'ahl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 127",
    "meta": {
      "pos": "noun",
      "frequency": 127
    },
    "ayahArabic": "إِنَّهُۥ لَقَوْلٌ فَصْلٌ وَمَا هُوَ بِٱلْهَزْلِ",
    "ayahReference": "সূরা আত-ত্বারিক ৮৬:১৩",
    "ayahBreakdown": "ইন্নাহূ / লাকাওলুন / ফাসলুন / ওয়া / মা / হুওয়া / বিল-হাযলি",
    "ayahMeaning": "নিশ্চয়ই এটি সত্য বাণী এবং এটি কোনো মজাকুর বিষয় নয়।"
  },

  {
    "rank": 65,
    "arabic": "لَعَلّ",
    "pronunciation": "laʕall",
    "pronunciationBreakdown": "la'all",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: accusative particle • Frequency: 123",
    "meta": {
      "pos": "accusative particle",
      "frequency": 123
    },
    "ayahArabic": "لَعَلَّكَ بَاخِعٌ نَّفْسَكَ أَلَّا يَكُونُوا۟ مُؤْمِنِينَ",
    "ayahReference": "সূরা আশ-শামস ৯১:৮",
    "ayahBreakdown": "লা'আল্লাকা / বাখি'উন / নাফসাকা / আল্লা / ইয়াকূনূ / মু'মিনীন",
    "ayahMeaning": "হয়তো তুমি নিজেকে ধ্বংস করবে এজন্য যে তারা ঈমান আনবে না।"
  },

  {
    "rank": 66,
    "arabic": "بَل",
    "pronunciation": "bal",
    "pronunciationBreakdown": "bal",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: retraction particle • Frequency: 122",
    "meta": {
      "pos": "retraction particle",
      "frequency": 122
    },
    "ayahArabic": "بَلْ قَالُوا۟ إِنَّا وَجَدْنَآ ءَابَآءَنَا عَلَىٰ أُمَّةٍ وَإِنَّا عَلَىٰ ءَاثَٰرِهِم مُّقْتَدُونَ",
    "ayahReference": "সূরা আয-যুমার ৩৯:২৩",
    "ayahBreakdown": "বাল / ক্বালূ / ইন্না / ওয়া / জাদ্না / আবাআনা / আলা / উম্মাতিন / ওয়া / ইন্না / আলা / আছারিহিম / মুকতাদূন",
    "ayahMeaning": "বরং তারা বলে, আমরা আমাদের পূর্বপুরুষদের এক পথে পেয়েছি এবং আমরা তাদের অনুসরণ করি।"
  },
  {
    "rank": 67,
    "arabic": "يَد",
    "pronunciation": "yad",
    "pronunciationBreakdown": "yad",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 120",
    "meta": {
      "pos": "noun",
      "frequency": 120
    },
    "ayahArabic": "إِن تَكْفُرُوا۟ فَإِنَّ ٱللَّهَ غَنِيٌّ عَنكُمْ وَلَا يَرْضَىٰ لِكُفْرِكُمْ",
    "ayahReference": "সূরা আয-যুমার ৩৯:৭",
    "ayahBreakdown": "ইন / তাকফুরূ / ফা / ইন্না / আল্লাহা / গানিয়্যুন / আনকুম / ওয়া / লা / ইয়ারদা / লিকুফরিকুম",
    "ayahMeaning": "তোমরা কুফরি করলে আল্লাহ তোমাদের থেকে বেশিভাগ মুক্ত, এবং তোমাদের কুফরি তিনি পছন্দ করেন না।"
  },
  {
    "rank": 68,
    "arabic": "كَٰفِرُون",
    "pronunciation": "kāfirūn",
    "pronunciationBreakdown": "ka-firu-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 119",
    "meta": {
      "pos": "noun",
      "frequency": 119
    },
    "ayahArabic": "إِنَّ شَجَرَةَ ٱلزَّقُّومِ طَعَامُ ٱلْأَثِيمِ ۝ كَٰفِرُونَ",
    "ayahReference": "সূরা আল-দুখখান ৪৪:৪৩",
    "ayahBreakdown": "ইন্না / শাজারাতা / আল-যাক্কূমি / তা'আমু / আল-আছীমি / কাফিরূন",
    "ayahMeaning": "নিশ্চয়ই যাক্কূম গাছ হবে পাপীদের খাদ্য, কাফিরদের।"
  },
  {
    "rank": 69,
    "arabic": "إِن",
    "pronunciation": "ʔin",
    "pronunciationBreakdown": "'in",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: negative particle • Frequency: 114",
    "meta": {
      "pos": "negative particle",
      "frequency": 114
    },
    "ayahArabic": "إِنَّهُۥ لَفِى سُورَةِ ٱلْأَوَّلَىٰ",
    "ayahReference": "সূরা আল-জিন ৭২:১",
    "ayahBreakdown": "ইন্নাহূ / লাফী / সূরাতি / আল-আওওয়ালা",
    "ayahMeaning": "নিশ্চয়ই এটি প্রথম সূরায় আছে।"
  },

  {
    "rank": 70,
    "arabic": "رَحْمَة",
    "pronunciation": "raḥma",
    "pronunciationBreakdown": "raḥma",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 114",
    "meta": {
      "pos": "noun",
      "frequency": 114
    },
    "ayahArabic": "وَٱصْبِرْ عَلَىٰ مَا أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنْ عَزْمِ ٱلْأُمُورِ",
    "ayahReference": "সূরা লুকমান ৩১:১৭",
    "ayahBreakdown": "ওয়া / ইসবির / আলা / মা / আসাবাকা / ইন্না / যালিকা / মিন / আ'জমি / আল-উমূরি",
    "ayahMeaning": "তোমার উপর যা আসে তাতে ধৈর্য ধরো, নিশ্চয়ই এটি সাহসিকতার কাজ।"
  },
  {
    "rank": 71,
    "arabic": "رَحِيم",
    "pronunciation": "raḥīm",
    "pronunciationBreakdown": "raḥi-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 112",
    "meta": {
      "pos": "adjective",
      "frequency": 112
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২-৩",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীনা / আল্লাযীনা / ইয়ু'মিনূনা / বিল-গাইবি / ওয়া / ইয়ুকীমূনা / আস-সালাতা / ওয়া / মিম্মা / রাজাক্নাহুম / ইয়ুনফিকূন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ, যারা অদৃশ্য বিশ্বাস করে এবং সালাত কায়েম করে এবং আমি তাদের যে রিজিক দিয়েছি তা থেকে ব্যয় করে।"
  },
  {
    "rank": 72,
    "arabic": "أَجْر",
    "pronunciation": "ʔajr",
    "pronunciationBreakdown": "'ajr",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 105",
    "meta": {
      "pos": "noun",
      "frequency": 105
    },
    "ayahArabic": "إِنَّ ٱللَّهَ يَأْمُرُ بِٱلْعَدْلِ وَٱلْإِحْسَٰنِ وَإِيتَآئِ ذِى ٱلْقُرْبَىٰ",
    "ayahReference": "সূরা আন-নাহল ১৬:৯০",
    "ayahBreakdown": "ইন্না / আল্লাহা / ইয়া'মুরু / বিল-'আদলি / ওয়া / আল-ইহসানি / ওয়া / ইয়ীতাই / যি / আল-কুরবা",
    "ayahMeaning": "নিশ্চয়ই আল্লাহ ন্যায় ও সৎকাজ এবং আত্মীয়কে দান করার আদেশ দেন।"
  },

  {
    "rank": 73,
    "arabic": "ظَالِم",
    "pronunciation": "ẓālim",
    "pronunciationBreakdown": "ẓa-lim",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 105",
    "meta": {
      "pos": "noun",
      "frequency": 105
    },
    "ayahArabic": "فَٱصْبِرْ إِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ",
    "ayahReference": "সূরা হূদ ১১:১১৫",
    "ayahBreakdown": "ফাইসবির / ইন্না / আল্লাহা / লা / ইয়ুদী'ঊ / আজরা / আল-মুহসিনীন",
    "ayahMeaning": "অতএব ধৈর্য ধরো, নিশ্চয়ই আল্লাহ সৎকারীদের পুরস্কার নষ্ট করেন না।"
  },
  {
    "rank": 74,
    "arabic": "عِلْم",
    "pronunciation": "ʕilm",
    "pronunciationBreakdown": "'ilm",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 105",
    "meta": {
      "pos": "noun",
      "frequency": 105
    },
    "ayahArabic": "وَٱتَّقُوا۟ ٱللَّهَ وَيُعَلِّمُكُمُ ٱللَّهُ ۗ وَٱللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৮২",
    "ayahBreakdown": "ওয়া / ইত্তাকূ / আল্লাহা / ওয়া / ইয়ু'আল্লিমুকুমু / আল্লাহু / ওয়া / আল্লাহু / বিকুল্লি / শাইইন / 'আলীম",
    "ayahMeaning": "এবং আল্লাহকে ভয় করো এবং আল্লাহ তোমাদের শেখাবেন। আল্লাহ সব কিছু জানেন।"
  },

  {
    "rank": 75,
    "arabic": "عَظِيم",
    "pronunciation": "ʕaẓīm",
    "pronunciationBreakdown": "'aẓi-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 104",
    "meta": {
      "pos": "adjective",
      "frequency": 104
    },
    "ayahArabic": "وَهُوَ ٱلْقَاهِرُ فَوْقَ عِبَادِهِ ۚ وَهُوَ ٱلْحَكِيمُ ٱلْخَبِيرُ",
    "ayahReference": "সূরা আল-আন'আম ৬:১৮",
    "ayahBreakdown": "ওয়া / হুওয়া / আল-কাহিরু / ফাওকা / 'ইবাদিহি / ওয়া / হুওয়া / আল-হাকীমু / আল-খাবীরু",
    "ayahMeaning": "তিনি তাঁর বান্দাদের উপর প্রভুত্বশালী এবং তিনি প্রজ্ঞাময়, সর্বজ্ঞ।"
  },

  {
    "rank": 76,
    "arabic": "لَن",
    "pronunciation": "lan",
    "pronunciationBreakdown": "lan",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: negative particle • Frequency: 104",
    "meta": {
      "pos": "negative particle",
      "frequency": 104
    },
    "ayahArabic": "قُل لَّن تُحِبُّونَ مَنْ أَسْرَفُوا۟ فِى دَعْوَٰهُمْ شُغُلًا بِهِمْ",
    "ayahReference": "সূরা আল-কাহফ ১৮:৭৭",
    "ayahBreakdown": "কুল / লান / তুহিব্বূনা / মান / আসরাফূ / ফী / দা'ওয়াহুম / শুগুলান / বিহিম",
    "ayahMeaning": "বলো, তোমরা যাদের প্রতি তারা অতিরিক্ত ডাকছে তাদের ভালোবাসবে না।"
  },
  {
    "rank": 77,
    "arabic": "إِلَّا",
    "pronunciation": "ʔillā",
    "pronunciationBreakdown": "'illa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: exceptive particle • Frequency: 102",
    "meta": {
      "pos": "exceptive particle",
      "frequency": 102
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ।"
  },

  {
    "rank": 78,
    "arabic": "عَلِيم",
    "pronunciation": "ʕalīm",
    "pronunciationBreakdown": "'ali-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 101",
    "meta": {
      "pos": "adjective",
      "frequency": 101
    },
    "ayahArabic": "وَٱتَّقُوا۟ ٱللَّهَ وَيُعَلِّمُكُمُ ٱللَّهُ ۗ وَٱللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৮২",
    "ayahBreakdown": "ওয়া / ইত্তাকূ / আল্লাহা / ওয়া / ইয়ু'আল্লিমুকুমু / আল্লাহু / ওয়া / আল্লাহু / বিকুল্লি / শাইইন / 'আলীম",
    "ayahMeaning": "এবং আল্লাহকে ভয় করো এবং আল্লাহ তোমাদের শেখাবেন। আল্লাহ সব কিছু জানেন।"
  },

  {
    "rank": 79,
    "arabic": "جَنَّة",
    "pronunciation": "janna",
    "pronunciationBreakdown": "janna",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 96",
    "meta": {
      "pos": "noun",
      "frequency": 96
    },
    "ayahArabic": "وَمَا جَنَّتُ وَنَارٌ إِلَّا حَدِيثٌ",
    "ayahReference": "সূরা আল-কাহফ ১৮:১৮",
    "ayahBreakdown": "ওয়া / মা / জান্নাতু / ওয়া / নারুন / ইল্লা / হাদীস",
    "ayahMeaning": "জান্নাত ও জাহান্নাম কিছুই নয় শুধু একটি কাহিনী।"
  },
  {
    "rank": 80,
    "arabic": "حَتَّىٰ",
    "pronunciation": "ḥattā",
    "pronunciationBreakdown": "ḥatta-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: preposition • Frequency: 95",
    "meta": {
      "pos": "preposition",
      "frequency": 95
    },
    "ayahArabic": "وَقَالَ لَهُمْ نَبِيُّهُمْ إِنَّ ٱللَّهَ قَدْ بَعَثَ لَكُمْ طَالُوتَ مَلِكًا",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৪৬",
    "ayahBreakdown": "ওয়া / ক্বালা / লাহুম / নাবিয়্যুহু / ইন্না / আল্লাহা / ক্বদ / বা'আসা / লাকুম / তালূত / মালিকান",
    "ayahMeaning": "তাদের নবী তাদের বললেন, আল্লাহ তোমাদের জন্য তালূতকে রাজা হিসেবে পাঠিয়েছেন।"
  },
  {
    "rank": 81,
    "arabic": "هَل",
    "pronunciation": "hal",
    "pronunciationBreakdown": "hal",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: interrogative particle • Frequency: 93",
    "meta": {
      "pos": "interrogative particle",
      "frequency": 93
    },
    "ayahArabic": "هَلْ أَتَىٰ عَلَى ٱلْإِنسَٰنِ حِينٌ مِّنَ ٱلدَّهْرِ إِلَّا إِذْ هُوَ فِى مَخْلَقٍ مِّن تُرَابٍ",
    "ayahReference": "সূরা ফাতির ৩৫:৩৯",
    "ayahBreakdown": "হাল / আতা / আলা / আল-ইনসানি / হীনুন / মিনা / আদ-দাহরি / ইল্লা / ইয / হুওয়া / ফী / খলকিন / মিন / তুরাবিন",
    "ayahMeaning": "মানুষের উপর কি কোনো সময় এসেছে যখন সে মাটির সৃষ্টিতে ছিল?"
  },
  {
    "rank": 82,
    "arabic": "دِين",
    "pronunciation": "dīn",
    "pronunciationBreakdown": "di-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 92",
    "meta": {
      "pos": "noun",
      "frequency": 92
    },
    "ayahArabic": "وَمَآ أَرْسَلْنَا مِنْ قَبْلِكَ إِلَّا رِجَالًا نُّوحِىٓ إِلَيْهِمْ فَسْـَٔلُوٓا۟ أَهْلَ ٱلذِّكْرِ إِنْ أَنتُمْ لَا تَعْلَمُونَ",
    "ayahReference": "সূরা আন-নাহল ১৬:৪৩",
    "ayahBreakdown": "ওয়া / মা / আরসাল্না / মিন / কাবলিকা / ইল্লা / রিজালান / নুহী / ইলাইহিম / ফাস'আলূ / আহলা / আজ-যিকরি / ইন / আনতুম / লা / তা'লামূন",
    "ayahMeaning": "তোমার আগে আমি কেবল তাদের কাছে ওহী পাঠিয়েছি যাদের আমি বাছাই করেছি। তোমরা না জানলে জ্ঞানীদের জিজ্ঞেস করো।"
  },
  {
    "rank": 83,
    "arabic": "قَوْل",
    "pronunciation": "qawl",
    "pronunciationBreakdown": "qawl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 92",
    "meta": {
      "pos": "noun",
      "frequency": 92
    },
    "ayahArabic": "إِنَّ ٱللَّهَ لَا يَسْتَحْيِىٓ أَن يَضْرِبَ مَثَلًا مَّا بَعُوضَةً فَمَا فَوْقَهَا",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৬",
    "ayahBreakdown": "ইন্না / আল্লাহা / লা / ইয়াসতাহয়ী / আন / ইয়দরিবা / মাছালান / মা / বা'ঊদাতান / ফা / মা / ফাওকাহা",
    "ayahMeaning": "নিশ্চয়ই আল্লাহ একটি মশার মতো উদাহরণ দেওয়ায় লজ্জিত হন না, তার চেয়ে বড়ো কিছুও।"
  },
  {
    "rank": 84,
    "arabic": "مَا",
    "pronunciation": "mā",
    "pronunciationBreakdown": "ma-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: interrogative particle • Frequency: 92",
    "meta": {
      "pos": "interrogative particle",
      "frequency": 92
    },
    "ayahArabic": "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৫৬",
    "ayahBreakdown": "ওয়া / মা / খালাকতুল / জিন্না / ওয়াল / ইনসা / ইল্লা / লিয়া'বুদূন",
    "ayahMeaning": "আমি জিন ও মানুষকে শুধু আমার ইবাদত করার জন্যই সৃষ্টি করেছি।"
  },
  {
    "rank": 85,
    "arabic": "ذُو",
    "pronunciation": "ḏū",
    "pronunciationBreakdown": "ḏu-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 90",
    "meta": {
      "pos": "noun",
      "frequency": 90
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 86,
    "arabic": "مَلَك",
    "pronunciation": "malak",
    "pronunciationBreakdown": "malak",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 88",
    "meta": {
      "pos": "noun",
      "frequency": 88
    },
    "ayahArabic": "وَمَا مِنَّا إِلَّا لَهُ مَقَامٌ مَّعْلُومٌ",
    "ayahReference": "সূরা মারিয়াম ১৯:৬৪",
    "ayahBreakdown": "ওয়া / মা / মিন্না / ইল্লা / লাহু / মাকামুন / মা'লুম",
    "ayahMeaning": "আমাদের মধ্যে প্রত্যেকেরই একটি নির্ধারিত স্থান আছে।"
  },
  {
    "rank": 87,
    "arabic": "مَثَل",
    "pronunciation": "maṯal",
    "pronunciationBreakdown": "maṯal",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 87",
    "meta": {
      "pos": "noun",
      "frequency": 87
    },
    "ayahArabic": "وَإِن كُنتُمْ فِى رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍ مِّن مِّثْلِهِۦ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৩",
    "ayahBreakdown": "ওয়া / ইন / কুনতুম / ফী / রাইবিন / মিম্মা / নাজ্জাল্না / আলা / আবদিনা / ফা / আতূ / বিসূরাতিন / মিম / মিসলিহি",
    "ayahMeaning": "তোমরা যদি আমার বান্দার প্রতি যা নাযিল করেছি তাতে সন্দেহে থাকো, তাহলে তার মতো একটি সূরা নিয়ে এসো।"
  },
  {
    "rank": 88,
    "arabic": "مَال",
    "pronunciation": "māl",
    "pronunciationBreakdown": "ma-l",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 86",
    "meta": {
      "pos": "noun",
      "frequency": 86
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 89,
    "arabic": "وَلِىّ",
    "pronunciation": "walīy",
    "pronunciationBreakdown": "wali-y",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 86",
    "meta": {
      "pos": "noun",
      "frequency": 86
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ।"
  },
  {
    "rank": 90,
    "arabic": "هُدًى",
    "pronunciation": "hudan",
    "pronunciationBreakdown": "hudan",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 85",
    "meta": {
      "pos": "noun",
      "frequency": 85
    },
    "ayahArabic": "هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "হুদান / লিল / মুত্তাকীন",
    "ayahMeaning": "মুত্তাকীদের জন্য পথনির্দেশ।"
  },
  {
    "rank": 91,
    "arabic": "حَكِيم",
    "pronunciation": "ḥakīm",
    "pronunciationBreakdown": "ḥaki-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 84",
    "meta": {
      "pos": "adjective",
      "frequency": 84
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 92,
    "arabic": "فَضْل",
    "pronunciation": "faḍl",
    "pronunciationBreakdown": "faḍl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 84",
    "meta": {
      "pos": "noun",
      "frequency": 84
    },
    "ayahArabic": "وَمَا تُنفِقُوا۟ مِن خَيْرٍ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৭২",
    "ayahBreakdown": "ওয়া / মা / তুনফিকূ / মিন / খাইরিন / ফালি / আনফুসিকুম / ওয়া / মা / তুনফিকূনা / ইল্লা / ইবতিগাআ / ওয়াজহি / আল্লাহি",
    "ayahMeaning": "তোমরা যে সৎকাজ করবে তা তোমাদের নিজেদের জন্য। তোমরা শুধু আল্লাহর সন্তুষ্টি চেয়ে ব্যয় করো।"
  },
  {
    "rank": 93,
    "arabic": "صَلَوٰة",
    "pronunciation": "ṣalawā",
    "pronunciationBreakdown": "ṣalawa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 83",
    "meta": {
      "pos": "noun",
      "frequency": 83
    },
    "ayahArabic": "إِنَّ ٱلْمُسْلِمِينَ وَٱلْمُسْلِمَٰتِ وَٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَٰتِ",
    "ayahReference": "সূরা আল-আহযাব ৩৩:৩৫",
    "ayahBreakdown": "ইন্না / আল-মুসলিমীন / ওয়া / আল-মুসলিমাতি / ওয়া / আল-মু'মিনীন / ওয়া / আল-মু'মিনাতি",
    "ayahMeaning": "নিশ্চয়ই মুসলিম পুরুষ, মুসলিম নারী, মুমিন পুরুষ এবং মুমিন নারী।"
  },
  {
    "rank": 94,
    "arabic": "لَيْل",
    "pronunciation": "layl",
    "pronunciationBreakdown": "layl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 82",
    "meta": {
      "pos": "noun",
      "frequency": 82
    },
    "ayahArabic": "وَآيَةٌ لَّهُمُ ٱلَّيْلُ نَسْلَخُ مِنْهُ ٱلنَّهَارَ فَإِذَا هُم مُّظْلِمُونَ",
    "ayahReference": "সূরা ইয়াসীন ৩৬:৩৭",
    "ayahBreakdown": "ওয়া / আয়াতুন / লাহুমু / আল-লাইলু / নাসলাখু / মিনহু / আন-নাহারা / ফাইযা / হুম / মুজলিমূন",
    "ayahMeaning": "তাদের জন্য রাত্রি একটি নিদর্শন, আমি তা থেকে দিনকে খুলে দিই, অতএব তারা অন্ধকারাচ্ছন্ন হয়ে যায়।"
  },
  {
    "rank": 95,
    "arabic": "بُنَىّ",
    "pronunciation": "bunāā",
    "pronunciationBreakdown": "buna-a-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 80",
    "meta": {
      "pos": "noun",
      "frequency": 80
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 96,
    "arabic": "شَيْطَٰن",
    "pronunciation": "šayṭān",
    "pronunciationBreakdown": "šayṭa-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 80",
    "meta": {
      "pos": "proper noun",
      "frequency": 80
    },
    "ayahArabic": "وَلَقَدْ أَرْسَلْنَا رُسُلًا مِّن قَبْلِكَ وَجَعَلْنَا لَهُمْ أَزْوَٰجًا وَذُرِّيَّةً",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৯০",
    "ayahBreakdown": "ওয়া / লাক্বদ / আরসাল্না / রুসুলান / মিন / কাবলিকা / ওয়া / জা'আল্না / লাহুম / আজওয়াজান / ওয়া / জুররিয়্যাতান",
    "ayahMeaning": "তোমার আগে আমি অনেক রাসূল পাঠিয়েছি এবং তাদের স্ত্রী ও সন্তান-সন্ততি দিয়েছি।"
  },
  {
    "rank": 97,
    "arabic": "كَيْف",
    "pronunciation": "kayf",
    "pronunciationBreakdown": "kayf",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: interrogative particle • Frequency: 80",
    "meta": {
      "pos": "interrogative particle",
      "frequency": 80
    },
    "ayahArabic": "وَكَيْفَ تَكْفُرُونَ وَأَنتُمْ تُتْلَىٰ عَلَيْكُمْ ءَايَٰتُ ٱللَّهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৪",
    "ayahBreakdown": "ওয়া / কাইফা / তাকফুরূনা / ওয়া / আনতুম / তুতলা / আলাইকুম / আয়াতু / আল্লাহি",
    "ayahMeaning": "তোমরা কুফরি করবে কীভাবে, অথচ তোমাদের উপর আল্লাহর আয়াত তেলাওয়াত করা হয়?"
  },
  {
    "rank": 98,
    "arabic": "يَوْم",
    "pronunciation": "yawm",
    "pronunciationBreakdown": "yawm",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 80",
    "meta": {
      "pos": "time adverb",
      "frequency": 80
    },
    "ayahArabic": "وَكَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ",
    "ayahReference": "সূরা আর-রূম ৩০:৪৭",
    "ayahBreakdown": "ওয়া / কানা / হাক্কান / আলাইনা / নাসরু / আল-মু'মিনীন",
    "ayahMeaning": "আর মুমিনদের সাহায্য করা আমার উপর কর্তব্য ছিল।"
  },
  {
    "rank": 99,
    "arabic": "مَا",
    "pronunciation": "mā",
    "pronunciationBreakdown": "ma-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: subordinating conjunction • Frequency: 79",
    "meta": {
      "pos": "subordinating conjunction",
      "frequency": 79
    },
    "ayahArabic": "وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৫৬",
    "ayahBreakdown": "ওয়া / মা / খালাকতুল / জিন্না / ওয়াল / ইনসা / ইল্লা / লিয়া'বুদূন",
    "ayahMeaning": "আমি জিন ও মানুষকে শুধু আমার ইবাদত করার জন্যই সৃষ্টি করেছি।"
  },
  {
    "rank": 100,
    "arabic": "أَصْحَٰب",
    "pronunciation": "ʔaṣḥāb",
    "pronunciationBreakdown": "'aṣḥa-b",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 78",
    "meta": {
      "pos": "noun",
      "frequency": 78
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },

  {
    "rank": 101,
    "arabic": "أَكْثَر",
    "pronunciation": "ʔakṯar",
    "pronunciationBreakdown": "'akṯar",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 78",
    "meta": {
      "pos": "noun",
      "frequency": 78
    },
    "ayahArabic": "وَلَكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৮৭",
    "ayahBreakdown": "ওয়া / লাকিন্না / আকছারাহুম / লা / ইয়া'লামূন",
    "ayahMeaning": "কিন্তু তাদের অধিকাংশ জানে না।"
  },

  {
    "rank": 102,
    "arabic": "جَهَنَّم",
    "pronunciation": "jahannam",
    "pronunciationBreakdown": "jahannam",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 77",
    "meta": {
      "pos": "proper noun",
      "frequency": 77
    },
    "ayahArabic": "إِنَّ شَجَرَةَ ٱلزَّقُّومِ طَعَامُ ٱلْأَثِيمِ",
    "ayahReference": "সূরা আল-দুখখান ৪৪:৪৩",
    "ayahBreakdown": "ইন্না / শাজারাতা / আল-যাক্কূমি / তা'আমু / আল-আছীমি",
    "ayahMeaning": "নিশ্চয়ই যাক্কূম গাছ হবে পাপীদের খাদ্য।"
  },
  {
    "rank": 103,
    "arabic": "حَيَوٰة",
    "pronunciation": "ḥayawā",
    "pronunciationBreakdown": "ḥayawa-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 76",
    "meta": {
      "pos": "noun",
      "frequency": 76
    },
    "ayahArabic": "مَن يَعْمَلْ سُوٓءًا يُجْزَ بِهِۦ وَلَا يَجِدْ لَهُۥ مِن دُونِ ٱللَّهِ وَلِيًّا وَلَا نَصِيرًا",
    "ayahReference": "সূরা আল-নিসা ৪:১২৩",
    "ayahBreakdown": "মান / ইয়া'মাল / সূইআন / ইয়ুজা / বিহি / ওয়া / লা / ইয়াজিদ / লাহু / মিন / দূনি / আল্লাহি / ওয়ালিয়্যান / ওয়া / লা / নাসীরান",
    "ayahMeaning": "যে মন্দ কাজ করবে তাকে তার প্রতিফল দেওয়া হবে এবং সে আল্লাহ ছাড়া কোনো অভিভাবক বা সাহায্যকারী পাবে না।"
  },
  {
    "rank": 104,
    "arabic": "ذِكْر",
    "pronunciation": "ḏikr",
    "pronunciationBreakdown": "ḏikr",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 76",
    "meta": {
      "pos": "noun",
      "frequency": 76
    },
    "ayahArabic": "وَأَنزَلْنَا إِلَيْكَ ٱلذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ لَهُمْ",
    "ayahReference": "সূরা আন-নাহল ১৬:৪৪",
    "ayahBreakdown": "ওয়া / আনযাল্না / ইলাইকা / আজ-যিকরা / লিতুবয়্যিনা / লিন-নাসি / মা / নুযিলা / লাহুম",
    "ayahMeaning": "এবং আমি তোমার কাছে স্মরণ পাঠিয়েছি, যাতে তুমি মানুষের জন্য স্পষ্ট করে দাও যা তাদের জন্য নাযিল করা হয়েছে।"
  },
  {
    "rank": 105,
    "arabic": "زَوْج",
    "pronunciation": "zawj",
    "pronunciationBreakdown": "zawj",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 76",
    "meta": {
      "pos": "noun",
      "frequency": 76
    },
    "ayahArabic": "وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ",
    "ayahReference": "সূরা আয-যারিয়াত ৫১:৪৯",
    "ayahBreakdown": "ওয়া / মিন / কুল্লি / শাইইন / খালাক্না / যাওজাইন / লা'আল্লাকুম / তাজাক্কারূন",
    "ayahMeaning": "আমি প্রতিটি বস্তুর জোড়া সৃষ্টি করেছি, যাতে তোমরা স্মরণ করো।"
  },
  {
    "rank": 106,
    "arabic": "أَخ",
    "pronunciation": "ʔaḵ",
    "pronunciationBreakdown": "'aḵ",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 75",
    "meta": {
      "pos": "noun",
      "frequency": 75
    },
    "ayahArabic": "إِنَّ رَبَّكُمُ ٱللَّهَ ٱلَّذِى خَلَقَكُمْ وَمَنْ أَسْلَفَ غَيْرِ ٱلْمُسْتَقْرِضِينَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৫",
    "ayahBreakdown": "ইন্না / রব্বাকুমু / আল্লাহু / আল্লাযী / খালাকাকুম / ওয়া / মান / আসলাফা / গাইরি / আল-মুসতাকরিমীন",
    "ayahMeaning": "তোমাদের প্রতিপালক আল্লাহ, যিনি তোমাদের এবং তোমাদের পূর্ববর্তীদের সৃষ্টি করেছেন, গুনাহগারদের ছাড়া।"
  },

  {
    "rank": 107,
    "arabic": "مِثْل",
    "pronunciation": "miṯl",
    "pronunciationBreakdown": "miṯl",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 75",
    "meta": {
      "pos": "noun",
      "frequency": 75
    },
    "ayahArabic": "مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًا فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمْ",
    "ayahReference": "সূরা আল-বাকারাহ ২:১৭",
    "ayahBreakdown": "মাছালুহুম / কামাছালি / আল্লাযী / ইসতাওকাদা / নারান / ফালাম্মা / আদাআত / মা / হাওলাহু / যহাবা / আল্লাহু / বিনূরিহিম",
    "ayahMeaning": "তাদের দৃষ্টান্ত সেই ব্যক্তির মতো যে আগুন প্রজ্বলিত করেছে, অতঃপর যখন সে তার চারপাশে আলো দিয়েছে, আল্লাহ তাদের আলো নিয়ে নিয়েছেন।"
  },
  {
    "rank": 108,
    "arabic": "نَبِىّ",
    "pronunciation": "nabīy",
    "pronunciationBreakdown": "nabi-y",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 75",
    "meta": {
      "pos": "noun",
      "frequency": 75
    },
    "ayahArabic": "وَقَالُوا۟ لَوْلَا نُزِّلَ هَٰذَا ٱلْقُرْءَانُ عَلَىٰ رَجُلٍ مِّنَ ٱلْقَرْيَتَيْنِ عَظِيمٍ",
    "ayahReference": "সূরা আয-যুমার ৩৯:২৪",
    "ayahBreakdown": "ওয়া / ক্বালূ / লাওলা / নুযিলা / হাযা / আল-কুর'আনু / আলা / রাজুলিন / মিনা / আল-কারইয়াতাইন / আ'জীম",
    "ayahMeaning": "তারা বলে, এই কুরআন কেন দুই গ্রামের একজন মহান ব্যক্তির উপর নাযিল হয়নি?"
  },
  {
    "rank": 109,
    "arabic": "أَحَد",
    "pronunciation": "ʔaḥad",
    "pronunciationBreakdown": "'aḥad",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 74",
    "meta": {
      "pos": "noun",
      "frequency": 74
    },
    "ayahArabic": "قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ",
    "ayahReference": "সূরা আল-ইখলাস ১১২:১-২",
    "ayahBreakdown": "কুল / হুওয়া / আল্লাহু / আহাদ / আল্লাহু / আস-সমাদ",
    "ayahMeaning": "বলুন, তিনি আল্লাহ, এক। আল্লাহ অমুখাপেক্ষী।"
  },

  {
    "rank": 110,
    "arabic": "خَٰلِد",
    "pronunciation": "ḵālid",
    "pronunciationBreakdown": "ḵa-lid",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 74",
    "meta": {
      "pos": "noun",
      "frequency": 74
    },
    "ayahArabic": "إِنَّهُۥ لَفِى سُورَةِ ٱلْأَوَّلَىٰ",
    "ayahReference": "সূরা আল-জিন ৭২:১",
    "ayahBreakdown": "ইন্নাহূ / লাফী / সূরাতি / আল-আওওয়ালা",
    "ayahMeaning": "নিশ্চয়ই এটি প্রথম সূরায় আছে।"
  },
  {
    "rank": 111,
    "arabic": "دُنْيَا",
    "pronunciation": "dunyā",
    "pronunciationBreakdown": "dunya-",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 74",
    "meta": {
      "pos": "adjective",
      "frequency": 74
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 112,
    "arabic": "فِرْعَوْن",
    "pronunciation": "firʕawn",
    "pronunciationBreakdown": "fir'awn",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 74",
    "meta": {
      "pos": "proper noun",
      "frequency": 74
    },
    "ayahArabic": "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا قَالَ يَٰقَوْمِ ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُۥ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৮৫",
    "ayahBreakdown": "ওয়া / ইলা / মাদয়ান / আখাহুম / শু'আইবান / ক্বালা / ইয়া / কাওমি / আ'বুদূ / আল্লাহা / মা / লাকুম / মিন / ইলাহিন / গাইরুহু",
    "ayahMeaning": "মাদয়ানবাসীদের কাছে তাদের ভাই শু'আয়বকে পাঠিয়েছি, সে বলল, হে আমার সম্প্রদায়, আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই।"
  },

  {
    "rank": 113,
    "arabic": "عَٰلَمِين",
    "pronunciation": "ʕālamīn",
    "pronunciationBreakdown": "'a-lami-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 73",
    "meta": {
      "pos": "noun",
      "frequency": 73
    },
    "ayahArabic": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
    "ayahReference": "সূরা আল-ফাতিহা ১:২",
    "ayahBreakdown": "আলহামদু / লিল্লাহি / রাব্বি / আল-'আলামীন",
    "ayahMeaning": "সব প্রশংসা আল্লাহর, যিনি সকল জগতের প্রতিপালক।"
  },

  {
    "rank": 114,
    "arabic": "أَلِيم",
    "pronunciation": "ʔalīm",
    "pronunciationBreakdown": "'ali-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: adjective • Frequency: 72",
    "meta": {
      "pos": "adjective",
      "frequency": 72
    },
    "ayahArabic": "إِنَّ رَبَّكُمُ ٱللَّهَ ٱلَّذِى خَلَقَكُمْ وَمَنْ أَسْلَفَ غَيْرِ ٱلْمُسْتَقْرِضِينَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৫",
    "ayahBreakdown": "ইন্না / রব্বাকুমু / আল্লাহু / আল্লাযী / খালাকাকুম / ওয়া / মান / আসলাফা / গাইরি / আল-মুসতাকরিমীন",
    "ayahMeaning": "তোমাদের প্রতিপালক আল্লাহ, যিনি তোমাদের এবং তোমাদের পূর্ববর্তীদের সৃষ্টি করেছেন, গুনাহগারদের ছাড়া।"
  },

  {
    "rank": 115,
    "arabic": "مُبِين",
    "pronunciation": "mubīn",
    "pronunciationBreakdown": "mubi-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 72",
    "meta": {
      "pos": "noun",
      "frequency": 72
    },
    "ayahArabic": "وَمَا تُنفِقُوا۟ مِن خَيْرٍ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৭২",
    "ayahBreakdown": "ওয়া / মা / তুনফিকূ / মিন / খাইরিন / ফালি / আনফুসিকুম / ওয়া / মা / তুনফিকূনা / ইল্লা / ইবতিগাআ / ওয়াজহি / আল্লাহি",
    "ayahMeaning": "তোমরা যে সৎকাজ করবে তা তোমাদের নিজেদের জন্য। তোমরা শুধু আল্লাহর সন্তুষ্টি চেয়ে ব্যয় করো।"
  },
  {
    "rank": 116,
    "arabic": "إِنسَٰن",
    "pronunciation": "ʔinsān",
    "pronunciationBreakdown": "'insa-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 71",
    "meta": {
      "pos": "noun",
      "frequency": 71
    },
    "ayahArabic": "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَكُم مِّن تُرَابٍ ثُمَّ إِذَآ أَنتُمْ إِنسَٰنٌ تَنتَشِرُونَ",
    "ayahReference": "সূরা আর-রূম ৩০:২০",
    "ayahBreakdown": "ওয়া / মিন / আয়াতিহি / আন / খালাকাকুম / মিন / তুরাবিন / ছুম্মা / ইযা / আনতুম / ইনসানুন / তানতাশিরূন",
    "ayahMeaning": "তাঁর নিদর্শনের মধ্যে এটাও যে তিনি তোমাদের মাটি থেকে সৃষ্টি করেছেন, তারপর তোমরা মানুষ হয়ে ছড়িয়ে পড়েছো।"
  },

  {
    "rank": 117,
    "arabic": "عَمَل",
    "pronunciation": "ʕamal",
    "pronunciationBreakdown": "'amal",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 71",
    "meta": {
      "pos": "noun",
      "frequency": 71
    },
    "ayahArabic": "مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًا فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمْ",
    "ayahReference": "সূরা আল-বাকারাহ ২:১৭",
    "ayahBreakdown": "মাছালুহুম / কামাছালি / আল্লাযী / ইসতাওকাদা / নারান / ফালাম্মা / আদাআত / মা / হাওলাহু / যহাবা / আল্লাহু / বিনূরিহিম",
    "ayahMeaning": "তাদের দৃষ্টান্ত সেই ব্যক্তির মতো যে আগুন প্রজ্বলিত করেছে, অতঃপর যখন সে তার চারপাশে আলো দিয়েছে, আল্লাহ তাদের আলো নিয়ে নিয়েছেন।"
  },

  {
    "rank": 118,
    "arabic": "وَجْه",
    "pronunciation": "wajh",
    "pronunciationBreakdown": "wajh",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 71",
    "meta": {
      "pos": "noun",
      "frequency": 71
    },
    "ayahArabic": "وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৭২",
    "ayahBreakdown": "ওয়া / মা / তুনফিকূনা / ইল্লা / ইবতিগাআ / ওয়াজহি / আল্লাহি",
    "ayahMeaning": "তোমরা শুধু আল্লাহর সন্তুষ্টি চেয়ে ব্যয় করো।"
  },
  {
    "rank": 119,
    "arabic": "قِيَٰمَة",
    "pronunciation": "qiyāma",
    "pronunciationBreakdown": "qiya-ma",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 70",
    "meta": {
      "pos": "noun",
      "frequency": 70
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },
  {
    "rank": 120,
    "arabic": "يَوْمَئِذ",
    "pronunciation": "yawmaʔiḏ",
    "pronunciationBreakdown": "yawma'iḏ",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 70",
    "meta": {
      "pos": "time adverb",
      "frequency": 70
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },

  {
    "rank": 121,
    "arabic": "إِبْرَاهِيم",
    "pronunciation": "ʔibrāhīm",
    "pronunciationBreakdown": "'ibra-hi-m",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 69",
    "meta": {
      "pos": "proper noun",
      "frequency": 69
    },
    "ayahArabic": "إِنَّ إِبْرَٰهِيمَ كَانَ أُمَّةً قَانِتًا لِّلَّهِ حَنِيفًا وَلَمْ يَكُ مِنَ ٱلْمُشْرِكِينَ",
    "ayahReference": "সূরা আন-নাহল ১৬:১২০",
    "ayahBreakdown": "ইন্না / ইব্রাহীমা / কানা / উম্মাতান / কানিতান / লিল্লাহি / হানিফান / ওয়া / লাম / ইয়াকু / মিনা / আল-মুশরিকীন",
    "ayahMeaning": "নিশ্চয়ই ইব্রাহীম ছিল একজন আদর্শ ব্যক্তি, আল্লাহর প্রতি অনুগত, একনিষ্ঠ এবং মুশরিকদের মধ্যে থেকে নয়।"
  },

  {
    "rank": 122,
    "arabic": "قُرْءَان",
    "pronunciation": "qurʔān",
    "pronunciationBreakdown": "qur'a-n",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: proper noun • Frequency: 68",
    "meta": {
      "pos": "proper noun",
      "frequency": 68
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },

  {
    "rank": 123,
    "arabic": "بَعْد",
    "pronunciation": "baʕd",
    "pronunciationBreakdown": "ba'd",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: time adverb • Frequency: 66",
    "meta": {
      "pos": "time adverb",
      "frequency": 66
    },
    "ayahArabic": "ذَٰلِكَ بِأَنَّ رَبَّكَ لَهُ ٱلْخَلْقُ وَٱلْأَمْرُ ثُمَّ إِلَيْهِ تُرْجَعُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:৫৪",
    "ayahBreakdown": "যালিকা / বিআন্না / রব্বাকা / লাহু / আল-খলকু / ওয়া / আল-আমরু / ছুম্মা / ইলাইহি / তুরজা'ূন",
    "ayahMeaning": "এটি এজন্য যে তোমার প্রতিপালকেরই সৃষ্টি এবং আদেশ, তারপর তাঁর কাছেই তোমাদের ফিরিয়ে নেওয়া হবে।"
  },

  {
    "rank": 124,
    "arabic": "بَيْت",
    "pronunciation": "bayt",
    "pronunciationBreakdown": "bayt",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: noun • Frequency: 65",
    "meta": {
      "pos": "noun",
      "frequency": 65
    },
    "ayahArabic": "إِنَّ هَٰذَا لَهُوَ ٱلْبَيْتُ ٱلْعَتِيدُ ٱلَّذِى خَلَقَهُ",
    "ayahReference": "সূরা আল-হাজ্জ ২২:২৬",
    "ayahBreakdown": "ইন্না / হাযা / লাহুওয়া / আল-বাইতু / আল-'তীদু / আল্লাযী / খালাকাহু",
    "ayahMeaning": "নিশ্চয়ই এটিই সেই প্রতিষ্ঠিত গৃহ যা তিনি সৃষ্টি করেছেন।"
  },
  {
    "rank": 125,
    "arabic": "لَٰكِن",
    "pronunciation": "lākin",
    "pronunciationBreakdown": "la-kin",
    "meaning": "",
    "line": "Part of the top 125 frequent Qur'an words • POS: amendment particle • Frequency: 65",
    "meta": {
      "pos": "amendment particle",
      "frequency": 65
    },
    "ayahArabic": "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৮৭",
    "ayahBreakdown": "ওয়া / লাকিন্না / আকছারাহুম / লা / ইয়া'লামূন",
    "ayahMeaning": "কিন্তু তাদের অধিকাংশ জানে না।"
  },
  {
    "rank": 126,
    "arabic": "طَاعَة",
    "pronunciation": "ṭāʿa",
    "pronunciationBreakdown": "ța-'a",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 25
    },
    "ayahArabic": "وَمَا أَنتُم بِمُعْجِزِينَ فِى ٱلْأَرْضِ وَلَا فِى ٱلسَّمَآءِ وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىّ وَلَا نَصِيرٍ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৩১",
    "ayahBreakdown": "ওয়া / মা / আনতুম / বিমু'জিযীনা / ফী / আল-আরদি / ওয়া / লা / ফী / আস-সামাই / ওয়া / মা / লাকুম / মিন / দূনি / আল্লাহি / মিন / ওয়ালিয়্যিন / ওয়া / লা / নাসীরিন",
    "ayahMeaning": "তোমরা পৃথিবীতেও আকাশেও আল্লাহকে অপারগ করতে পারবে না এবং আল্লাহ ছাড়া তোমাদের কোনো অভিভাবক বা সাহায্যকারী নেই।"
  },
  {
    "rank": 127,
    "arabic": "طَرِيق",
    "pronunciation": "ṭarīq",
    "pronunciationBreakdown": "ța-rīq",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 20
    },
    "ayahArabic": "وَأَنِ ٱقْتَدُوا۟ بِسُبُلِ رَبِّكُمْ وَأَنُوبُوٓا۟ إِلَيْهِ",
    "ayahReference": "সূরা আয-যুমার ৩৯:৫৪",
    "ayahBreakdown": "ওয়া / আনি / ইকতাদূ / বিসুবুলি / রব্বিকুম / ওয়া / আনূবূ / ইলাইহি",
    "ayahMeaning": "এবং তোমরা তোমাদের প্রতিপালকের পথ অনুসরণ করো এবং তাঁর কাছে প্রত্যাবর্তন করো।"
  },
  {
    "rank": 128,
    "arabic": "طَيِّب",
    "pronunciation": "ṭayyib",
    "pronunciationBreakdown": "ța-yyib",
    "meaning": "",
    "line": "Qur'an word • POS: adjective • Frequency: common",
    "meta": {
      "pos": "adjective",
      "frequency": 18
    },
    "ayahArabic": "هُوَ ٱلَّذِى يُرِيكُمُ ٱلْبَرْقَ خَوْفًا وَطَمَعًا وَيُنشِئُ ٱلسَّحَابَ ٱلثِّقَالَ",
    "ayahReference": "সূরা আর-রূম ৩০:২৪",
    "ayahBreakdown": "হুওয়া / আল্লাযী / ইয়ূরীকুমু / আল-বারকা / খওফান / ওয়া / তাম'আন / ওয়া / ইয়ুনশি'ঊ / আস-সাহাবা / আস-সিককালা",
    "ayahMeaning": "তিনিই তোমাদের বিজলী দেখান ভয় ও আশা হিসেবে এবং তিনি ভারী মেঘ সৃষ্টি করেন।"
  },
  {
    "rank": 129,
    "arabic": "ضَلَال",
    "pronunciation": "ḍalāl",
    "pronunciationBreakdown": "ḍa-lāl",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 22
    },
    "ayahArabic": "إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكْرَ وَخَشِىَ ٱلرَّحْمَٰنَ بِٱلْغَيْبِ ۖ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ",
    "ayahReference": "সূরা ইয়াসীন ৩৬:১১",
    "ayahBreakdown": "ইন্নামা / তুনযিরু / মানি / ইত্তাবা'আ / আজ-যিকরা / ওয়া / খাশিয়া / আর-রহমানা / বিল-গাইবি / ফাবাশশিরহু / বিমাগফিরাতিন / ওয়া / আজরিন / কারীমিন",
    "ayahMeaning": "তুমি শুধু তাদের সতর্ক করো যারা স্মরণ অনুসরণ করে এবং অদৃশ্যে রহমানকে ভয় করে। অতএব তাকে ক্ষমা ও সম্মানজনক পুরস্কারের সুসংবাদ দাও।"
  },
  {
    "rank": 130,
    "arabic": "ضَرَبَ",
    "pronunciation": "ḍaraba",
    "pronunciationBreakdown": "ḍa-raba",
    "meaning": "",
    "line": "Qur'an word • POS: verb • Frequency: common",
    "meta": {
      "pos": "verb",
      "frequency": 19
    },
    "ayahArabic": "وَٱضْرِبْ لَهُم مَّثَلًا أَنَّ ٱلْحَيَوٰةَ ٱلدُّنْيَا لَا غَمَرٌ",
    "ayahReference": "সূরা আল-কাহফ ১৮:৪৫",
    "ayahBreakdown": "ওয়া / আদরিব / লাহুম / মাছালান / আন্না / আল-হাইয়াতা / আদ-দুনইয়া / লা / ঘাইরু / ঘামরাতিন",
    "ayahMeaning": "এবং তাদের জন্য একটি উদাহরণ বর্ণনা করো যে দুনিয়ার জীবন কেবল ক্ষণস্থায়ী।"
  },
  {
    "rank": 131,
    "arabic": "ضِيق",
    "pronunciation": "ḍīq",
    "pronunciationBreakdown": "ḍīq",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 15
    },
    "ayahArabic": "مَن يَتَّقِ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    "ayahReference": "সূরা আত-তালাক ৬৫:২-৩",
    "ayahBreakdown": "মান / ইয়াতাক্কি / ইয়াজ'আল / লাহু / মাখরাজান / ওয়া / ইয়ারযুকহু / মিন / হাইসু / লা / ইয়াহতাসিবু",
    "ayahMeaning": "যে তাকওয়া অবলম্বন করে, আল্লাহ তার জন্য একটি উপায় বের করে দেন এবং তাকে অপ্রত্যাশিত উপায়ে রিজিক দেন।"
  },
  {
    "rank": 132,
    "arabic": "تَقْوَى",
    "pronunciation": "taqwā",
    "pronunciationBreakdown": "ta-qwā",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 30
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২-৩",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন / আল্লাযীনা / ইয়ু'মিনূনা / বিল-গাইবি / ওয়া / ইয়ুকীমূনা / আস-সালাতা / ওয়া / মিম্মা / রাজাক্নাহুম / ইয়ুনফিকূন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ, যারা অদৃশ্য বিশ্বাস করে এবং সালাত কায়েম করে এবং আমি তাদের যে রিজিক দিয়েছি তা থেকে ব্যয় করে।"
  },
  {
    "rank": 133,
    "arabic": "تَفْكِير",
    "pronunciation": "tafkiyr",
    "pronunciationBreakdown": "ta-fkīr",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 12
    },
    "ayahArabic": "أَفَلَمْ يَسِيرُوا۟ فِى ٱلْأَرْضِ فَتَكُونَ لَهُمْ قُلُوبٌ يَعْقِلُونَ بِهَآ أَوْ ءَاذَانٌ يَسْمَعُونَ بِهَا ۖ فَإِنَّهَا لَا تَعْمَى ٱلْأَبْصَٰرُ وَلَٰكِن تَعْمَى ٱلْقُلُوبُ ٱلَّتِى فِى ٱلصُّدُورِ",
    "ayahReference": "সূরা আল-হজ ২২:৪৬",
    "ayahBreakdown": "আফালাম / ইয়াসীরূ / ফী / আল-আরদি / ফাতাকূনা / লাহুম / কুলূবুন / ইয়া'কিলূনা / বিহা / আও / আযানুন / ইয়াসমা'ঊনা / বিহা / ফাইন্নাহা / লা / তা'মা / আল-আবসারু / লাকিন / তা'মা / আল-কুলুবু / আল্লাযী / ফী / আস-সুদূর",
    "ayahMeaning": "তারা কি পৃথিবীতে ভ্রমণ করেনি, যাতে তাদের অন্তর হয় যা দিয়ে তারা বুঝতে পারে, অথবা কর্ণ যা দিয়ে তারা শুনতে পারে? নিশ্চয়ই চোখ অন্ধ হয় না, কিন্তু বুকের অন্তর অন্ধ হয়।"
  },
  {
    "rank": 134,
    "arabic": "تَمْر",
    "pronunciation": "tamr",
    "pronunciationBreakdown": "tamr",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 10
    },
    "ayahArabic": "فَلْيَعْبُدُوا۟ رَبَّ هَٰذِهِ ٱلْبَلْدَةِ ٱلَّذِى حَرَّمَهَا وَتَلَهُۥ فِيهَا",
    "ayahReference": "সূরা আন-নামল ২৭:৯১",
    "ayahBreakdown": "ফাল'য়া'বুদূ / রব্বা / হাযিহি / আল-বলদতি / আল্লাযী / হাররামাহা / ওয়া / তালাহূ / ফীহা",
    "ayahMeaning": "অতএব তারা এই শহরের প্রতিপালকের ইবাদত করুক, যে একে হারাম করেছে এবং এতে সব কিছুর মালিক।"
  },
  {
    "rank": 135,
    "arabic": "أَبَدًا",
    "pronunciation": "abadan",
    "pronunciationBreakdown": "a-ba-dan",
    "meaning": "",
    "line": "Qur'an word • POS: adverb • Frequency: common",
    "meta": {
      "pos": "adverb",
      "frequency": 25
    },
    "ayahArabic": "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَآءٍ مَّعِينٍۭ",
    "ayahReference": "সূরা আল-মুলক ৬৭:৩০",
    "ayahBreakdown": "কুল / আরাইতুম / ইন / আসবাহা / মাআউকুম / গাওরান / ফামান / ইয়াতীকুম / বিমাইন / মা'ইন",
    "ayahMeaning": "বলো, তোমরা কি দেখেছো যদি তোমাদের পানি নিচে চলে যায়, তাহলে কে তোমাদের কাছে স্বচ্ছ পানি নিয়ে আসবে?"
  },
  {
    "rank": 136,
    "arabic": "أَمْرٌ",
    "pronunciation": "amrun",
    "pronunciationBreakdown": "am-run",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 35
    },
    "ayahArabic": "وَمَآ أَمْرُنَآ إِلَّا وَٰحِدَةٌ كَلَمْحٍۭ بِٱلْبَصَرِ",
    "ayahReference": "সূরা আল-কামার ৫৪:৫০",
    "ayahBreakdown": "ওয়া / মা / আমরুনা / ইল্লা / ওয়াহিদাতুন / কালামহিন / বিল-বাসারি",
    "ayahMeaning": "আমার আদেশ কেবল একটি, যা চোখের পলকে হয়ে যায়।"
  },
  {
    "rank": 137,
    "arabic": "أَمْس",
    "pronunciation": "ams",
    "pronunciationBreakdown": "ams",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 8
    },
    "ayahArabic": "وَسَخَّرَ لَكُمُ ٱلشَّمْسَ وَٱلْقَمَرَ دَآئِبَيْنِ وَسَخَّرَ لَكُمُ ٱلَّيْلَ وَٱلنَّهَارَ",
    "ayahReference": "সূরা ইবরাহীম ১৪:৩৩",
    "ayahBreakdown": "ওয়া / সাখখারা / লাকুমু / আশ-শামসা / ওয়াল / কামরা / দাইবাইন / ওয়া / সাখখারা / লাকুমু / আল-লাইলা / ওয়ান-নাহারা",
    "ayahMeaning": "তিনি তোমাদের জন্য সূর্য ও চাঁদকে কাজে লাগিয়েছেন নিরন্তর এবং তোমাদের জন্য রাত ও দিনকে কাজে লাগিয়েছেন।"
  },
  {
    "rank": 138,
    "arabic": "عِيسَى",
    "pronunciation": "ʿīsā",
    "pronunciationBreakdown": "‘ī-sā",
    "meaning": "",
    "line": "Qur'an word • POS: proper noun • Frequency: common",
    "meta": {
      "pos": "proper noun",
      "frequency": 25
    },
    "ayahArabic": "إِنَّمَا يُرِيدُ ٱللَّهُ لِيُذْهِبَ عَنكُمُ ٱلرِّجْسَ أَهْلَ ٱلْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا",
    "ayahReference": "সূরা আল-আহযাব ৩৩:৩৩",
    "ayahBreakdown": "ইন্নামা / ইয়ুরীদু / আল্লাহু / লিয়ুয'হিবা / আ'আনকুমু / আর-রিজসা / আহলা / আল-বাইতি / ওয়া / ইয়ুতাহহিরাকুম / তাতহীরান",
    "ayahMeaning": "আল্লাহ তোমাদের থেকে অপবিত্রতা দূর করতে এবং তোমদের সম্পূর্ণ পবিত্র করতে চান, হে বাড়ির লোকেরা।"
  },
  {
    "rank": 139,
    "arabic": "يَقِين",
    "pronunciation": "yaqīn",
    "pronunciationBreakdown": "ya-qīn",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 20
    },
    "ayahArabic": "إِنِّى تُوَفِّيقِى عَلَى ٱللَّهِ وَعَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ تُوبُ",
    "ayahReference": "সূরা হূদ ১১:৮৮",
    "ayahBreakdown": "ইন্নি / তাওফীকী / আলা / আল্লাহি / ওয়া / আলাইহি / তাওয়াক্কালতু / ওয়া / ইলাইহি / তূবু",
    "ayahMeaning": "নিশ্চয়ই আমার সাফল্য আল্লাহর উপর নির্ভর করে এবং আমি তাঁর উপর ভরসা করি এবং তাঁর কাছে প্রত্যাবর্তন করি।"
  },
  {
    "rank": 140,
    "arabic": "يَدٌ",
    "pronunciation": "yaddun",
    "pronunciationBreakdown": "ya-dun",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 18
    },
    "ayahArabic": "وَيَسْـَٔلُونَكَ عَنِ ٱلرُّوحِ ۖ قُلِ ٱلرُّوحُ مِنْ أَمْرِ رَبِّى وَمَآ أُوتِيتُم مِّنَ ٱلْعِلْمِ إِلَّا قَلِيلًا",
    "ayahReference": "সূরা আল-ইসরা ১৭:৮৫",
    "ayahBreakdown": "ওয়া / ইয়াসআলূনাকা / আনি / আর-রূহি / কুলি / আর-রূহু / মিন / আমরি / রব্বী / ওয়া / মা / ঊতীতুম / মিনা / আল-'ইলমি / ইল্লা / কলীলান",
    "ayahMeaning": "তারা তোমাকে রূহ সম্পর্কে জিজ্ঞেস করে। বলো, রূহ আমার প্রতিপালকের আদেশ থেকে এবং তোমাদেরকে যে জ্ঞান দেওয়া হয়েছে তা সামান্য।"
  },
  {
    "rank": 141,
    "arabic": "آلَآء",
    "pronunciation": "ālā",
    "pronunciationBreakdown": "ā-lā",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 15
    },
    "ayahArabic": "فَلْيَعْبُدُوا۟ رَبَّ هَٰذِهِ ٱلْبَلْدَةِ ٱلَّذِى حَرَّمَهَا وَتَلَهُۥ فِيهَا",
    "ayahReference": "সূরা আন-নামল ২৭:৯১",
    "ayahBreakdown": "ফাল'য়া'বুদূ / রব্বা / হাযিহি / আল-বলদতি / আল্লাযী / হাররামাহা / ওয়া / তালাহূ / ফীহা",
    "ayahMeaning": "অতএব তারা এই শহরের প্রতিপালকের ইবাদত করুক, যে একে হারাম করেছে এবং এতে সব কিছুর মালিক।"
  },
  {
    "rank": 142,
    "arabic": "آيَة",
    "pronunciation": "āya",
    "pronunciationBreakdown": "ā-ya",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 20
    },
    "ayahArabic": "تِلْكَ آيَاتُ ٱللَّهِ نَتْلُوهَا عَلَيْكَ بِٱلْحَقِّ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "তিল্কা / আয়াতু / আল্লাহি / নাতলূহা / আলাইকা / বিল-হাক্কি",
    "ayahMeaning": "এগুলো আল্লাহর আয়াত যা আমি তোমাকে সত্য সহ তেলাওয়াত করছি।"
  },
  {
    "rank": 143,
    "arabic": "ابْن",
    "pronunciation": "ibn",
    "pronunciationBreakdown": "ibn",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 22
    },
    "ayahArabic": "وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ ٱللَّهَ رَمَىٰ",
    "ayahReference": "সূরা আল-আনফাল ৮:১৭",
    "ayahBreakdown": "ওয়া / মা / রামাইতা / ইয / রামাইতা / ওয়া / লাকিন্না / আল্লাহা / রামা",
    "ayahMeaning": "তুমি যখন নিক্ষেপ করেছ তখন তুমি নিক্ষেপ করনি, বরং আল্লাহ নিক্ষেপ করেছেন।"
  },
  {
    "rank": 144,
    "arabic": "ابْتِغَآء",
    "pronunciation": "ibtighā",
    "pronunciationBreakdown": "ib-ti-ghā",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 12
    },
    "ayahArabic": "وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৭২",
    "ayahBreakdown": "ওয়া / মা / তুনফিকূনা / ইল্লা / ইবতিগাআ / ওয়াজহি / আল্লাহি",
    "ayahMeaning": "তোমরা শুধু আল্লাহর সন্তুষ্টি চেয়ে ব্যয় করো।"
  },
  {
    "rank": 145,
    "arabic": "اِسْم",
    "pronunciation": "ism",
    "pronunciationBreakdown": "is-m",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 15
    },
    "ayahArabic": "إِنِّى جَاعِلٌ فِى ٱلْأَرْضِ خَلِيفَةً",
    "ayahReference": "সূরা আল-বাকারাহ ২:৩০",
    "ayahBreakdown": "ইন্নি / জাই'আলুন / ফী / আল-আরদি / খলীফাতান",
    "ayahMeaning": "আমি পৃথিবীতে এক প্রতিনিধি সৃষ্টি করব।"
  },
  {
    "rank": 146,
    "arabic": "اِيمَان",
    "pronunciation": "īmān",
    "pronunciationBreakdown": "ī-mān",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 30
    },
    "ayahArabic": "وَمَا جَعَلَ عَلَيْكُمْ فِى ٱلدِّينِ مِنْ حَرَجٍ مِّلَّةَ أَبِيكُمْ إِبْرَٰهِيمَ",
    "ayahReference": "সূরা আল-হজ ২২:৭৮",
    "ayahBreakdown": "ওয়া / মা / জা'আলা / আ'লাইকুম / ফী / আদ-দীনি / মিন / হারাজিন / মিল্লাতা / আবীকুম / ইব্রাহীম",
    "ayahMeaning": "তিনি তোমাদের উপর দ্বীনে কোনো কষ্ট দেননি, তোমাদের পিতা ইব্রাহীমের মিল্লত।"
  },
  {
    "rank": 147,
    "arabic": "اَوَّل",
    "pronunciation": "awwal",
    "pronunciationBreakdown": "aw-wal",
    "meaning": "",
    "line": "Qur'an word • POS: adjective • Frequency: common",
    "meta": {
      "pos": "adjective",
      "frequency": 18
    },
    "ayahArabic": "هُوَ ٱلْأَوَّلُ وَٱلْءَاخِرُ وَٱلظَّٰهِرُ وَٱلْبَاطِنُ",
    "ayahReference": "সূরা আল-হাদিদ ৫৭:৩",
    "ayahBreakdown": "হুওয়া / আল-আওওয়ালু / ওয়াল / আখিরু / ওয়াজ-জাহিরু / ওয়াল / বাতিনু",
    "ayahMeaning": "তিনিই প্রথম এবং শেষ, প্রকাশ্য এবং অপ্রকাশ্য।"
  },
  {
    "rank": 148,
    "arabic": "اَجْر",
    "pronunciation": "ajr",
    "pronunciationBreakdown": "ajr",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 20
    },
    "ayahArabic": "إِنَّ ٱللَّهَ لَا يَسْتَحْيِىٓ أَن يَضْرِبَ مَثَلًا",
    "ayahReference": "সূরা আল-বাকারাহ ২:২৬",
    "ayahBreakdown": "ইন্না / আল্লাহা / লা / ইয়াসতাহয়ী / আন / ইয়দরিবা / মাছালান",
    "ayahMeaning": "নিশ্চয়ই আল্লাহ একটি উদাহরণ দেওয়ায় লজ্জিত হন না।"
  },
  {
    "rank": 149,
    "arabic": "اَرْض",
    "pronunciation": "arḍ",
    "pronunciationBreakdown": "arḍ",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 45
    },
    "ayahArabic": "وَٱلْأَرْضِ مَدَدْنَٰهَا وَأَلْقَيْنَا فِيهَا رَوَٰسِىَ وَأَنۢبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ بَهِيجٍ",
    "ayahReference": "সূরা ক্বাফ ৫০:৭",
    "ayahBreakdown": "ওয়াল / আরদি / মাদাদনাহা / ওয়া / আলকাইনা / ফীহা / রাওয়াসিয়া / ওয়া / আনবাতনা / ফীহা / মিন / কুল্লি / যাওজিন / বাহীজ",
    "ayahMeaning": "পৃথিবীকে আমি বিছিয়ে দিয়েছি এবং তাতে পাহাড় স্থাপন করেছি এবং তাতে সুন্দর প্রতিটি জোড়া উদ্ভিদ উৎপন্ন করেছি।"
  },
  {
    "rank": 150,
    "arabic": "اِسْتِغْفَار",
    "pronunciation": "istighfār",
    "pronunciationBreakdown": "is-tigh-fār",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 10
    },
    "ayahArabic": "وَٱسْتَغْفِرُوا۟ رَبَّكُمْ ثُمَّ تُوبُوٓا۟ إِلَيْهِ",
    "ayahReference": "সূরা হূদ ১১:৩",
    "ayahBreakdown": "ওয়াসতাগফিরূ / রব্বাকুম / ছুম্মা / তূবূ / ইলাইহি",
    "ayahMeaning": "এবং তোমরা তোমাদের প্রতিপালকের কাছে ক্ষমা প্রার্থনা করো, তারপর তাঁর কাছে তওবা করো।"
  },
  {
    "rank": 151,
    "arabic": "اِقَام",
    "pronunciation": "iqām",
    "pronunciationBreakdown": "iqām",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 15
    },
    "ayahArabic": "وَمَآ أَرْسَلْنَا مِنْ قَبْلِكَ إِلَّا رِجَالًا نُّوحِىٓ إِلَيْهِمْ",
    "ayahReference": "সূরা আন-নাহল ১৬:৪৩",
    "ayahBreakdown": "ওয়া / মা / আরসাল্না / মিন / কাবলিকা / ইল্লা / রিজালান / নুহী / ইলাইহিম",
    "ayahMeaning": "তোমার আগে আমি কেবল তাদের কাছে ওহী পাঠিয়েছি যাদের আমি বাছাই করেছি।"
  },
  {
    "rank": 152,
    "arabic": "اِيمَان",
    "pronunciation": "īmān",
    "pronunciationBreakdown": "ī-mān",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 28
    },
    "ayahArabic": "وَمَنْ أَسْلَمَ وَجْهَهُۥٓ إِلَى ٱللَّهِ وَهُوَ مُحْسِنٌ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ",
    "ayahReference": "সূরা লুকমান ৩১:২২",
    "ayahBreakdown": "ওয়া / মান / আসলামা / ওয়াজহাহূ / ইলা / আল্লাহি / ওয়া / হুওয়া / মুহসিনুন / ফাকাদি / ইসতামসাকা / বিল-'উরওয়াতি / আল-উসকা",
    "ayahMeaning": "যে আল্লাহর দিকে মুখ করে এবং সৎকারী হয়, সে দৃঢ় হাতলে আঁকড়ে ধরেছে।"
  },
  {
    "rank": 153,
    "arabic": "رِضْوَان",
    "pronunciation": "riḍwān",
    "pronunciationBreakdown": "riḍ-wān",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 12
    },
    "ayahArabic": "وَرِضْوَانٌ مِّنَ ٱللَّهِ أَكْبَرُ",
    "ayahReference": "সূরা আত-তাওবাহ ৯:৭২",
    "ayahBreakdown": "ওয়া / রিদওয়ানুন / মিনা / আল্লাহি / আকবারু",
    "ayahMeaning": "আল্লাহর পক্ষ থেকে সন্তুষ্টি তার চেয়ে বড়ো।"
  },
  {
    "rank": 154,
    "arabic": "سُنَن",
    "pronunciation": "sunan",
    "pronunciationBreakdown": "su-nan",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 10
    },
    "ayahArabic": "أَمْ لَكُمْ سُنَّةٌ فِى مَا كَذَّبْتُمْ فِيهِ",
    "ayahReference": "সূরা আল-জাসিয়াহ ৪৫:২৫",
    "ayahBreakdown": "আম / লাকুম / সুন্নাতুন / ফী / মা / কাযযাবতুম / ফীহি",
    "ayahMeaning": "তোমাদের কি সেই বিষয়ে কোনো প্রথা আছে যা তোমরা মিথ্যা বলেছো?"
  },
  {
    "rank": 155,
    "arabic": "صِرَاط",
    "pronunciation": "ṣirāṭ",
    "pronunciationBreakdown": "ṣi-rāṭ",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 25
    },
    "ayahArabic": "ٱهْدِنَا ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ صِرَٰطَ تَنْعَمُونَ",
    "ayahReference": "সূরা আল-ফাতিহা ১:৬-৭",
    "ayahBreakdown": "ইহদিনা / আস-সিরাতা / আল-মুসতাকীমা / সিরাতা / তান'আমূন",
    "ayahMeaning": "আমাদের সরল পথ দেখাও, তাদের পথ যাদের তুমি অনু благословил করেছো।"
  },
  {
    "rank": 156,
    "arabic": "غُرْف",
    "pronunciation": "ghurf",
    "pronunciationBreakdown": "ghurf",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 8
    },
    "ayahArabic": "وَلِمَنْ خَافَ مَقَامَ رَبِّهِۦ جَنَّتَانِ",
    "ayahReference": "সূরা আর-রহমান ৫৫:৪৬",
    "ayahBreakdown": "ওয়া / লিমান / খাফা / মাকামা / রব্বিহি / জান্নাতানি",
    "ayahMeaning": "যে তার প্রতিপালকের সামনে দাঁড়ানোর ভয় করে, তার জন্য দুটি জান্নাত।"
  },
  {
    "rank": 157,
    "arabic": "فِرَاش",
    "pronunciation": "firāsh",
    "pronunciationBreakdown": "fi-rāsh",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 6
    },
    "ayahArabic": "وَٱلَّذِينَ يَقُولُونَ رَبَّنَا ٱخْرِجْنَا مِنَ ٱلْقَرْيَةِ ٱلَّتِى ظَلَمَ أَهْلُهَا",
    "ayahReference": "সূরা আন-নিসা ৪:৭৫",
    "ayahBreakdown": "ওয়া / আল্লাযীনা / ইয়াকূলূনা / রব্বনা / আখরিজনা / মিনা / আল-কারইয়াতি / আল্লাযী / জালামা / আহলুহা",
    "ayahMeaning": "যারা বলে, হে আমাদের প্রতিপালক, আমাদের সেই শহর থেকে বের করো যার অধিবাসীরা জুলুম করেছে।"
  },
  {
    "rank": 158,
    "arabic": "قِبْل",
    "pronunciation": "qibl",
    "pronunciationBreakdown": "qibl",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 15
    },
    "ayahArabic": "فَأَيْنَ تَذْهَبُونَ إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَٰلَمِينَ",
    "ayahReference": "সূরা আত-তাকউইর ৮১:২৭",
    "ayahBreakdown": "ফাআয়না / তাযহাবূন / ইন / হুওয়া / ইল্লা / যিক্রুন / লিল-'আলামীন",
    "ayahMeaning": "তোমরা কোথায় যাচ্ছো? এটি শুধু সমগ্র জগতের জন্য একটি স্মরণ।"
  },
  {
    "rank": 159,
    "arabic": "كِتَٰب",
    "pronunciation": "kitāb",
    "pronunciationBreakdown": "ki-tāb",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 35
    },
    "ayahArabic": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ فِيهِ ۗ هُدًى لِّلْمُتَّقِينَ",
    "ayahReference": "সূরা আল-বাকারাহ ২:২",
    "ayahBreakdown": "যালিকা / আল-কিতাবু / লা / রাইবা / ফীহি / হুদান / লিল-মুত্তাকীন",
    "ayahMeaning": "এ সেই কিতাব, যাতে কোনো সন্দেহ নেই। মুত্তাকীদের জন্য পথনির্দেশ।"
  },
  {
    "rank": 160,
    "arabic": "لِهْو",
    "pronunciation": "lihw",
    "pronunciationBreakdown": "li-hw",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 8
    },
    "ayahArabic": "وَمَا خَلَقْنَا ٱلسَّمَآءَ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا بَٰطِلًا ۚ ذَٰلِكَ ظَنُّ ٱلَّذِينَ كَفَرُوا۟",
    "ayahReference": "সূরা সা'দ ৩৮:২৭",
    "ayahBreakdown": "ওয়া / মা / খালাক্না / আস-সামাআ / ওয়াল / আরদা / ওয়া / মা / বাইনাহুমা / বাতিলান / যালিকা / জন্নু / আল্লাযীনা / কাফারূ",
    "ayahMeaning": "আমি আকাশ ও পৃথিবী এবং তার মধ্যবর্তী সব কিছু অযথা সৃষ্টি করিনি। এটি কাফেরদের ধারণা।"
  },
  {
    "rank": 161,
    "arabic": "مَرْيَم",
    "pronunciation": "maryam",
    "pronunciationBreakdown": "mar-yam",
    "meaning": "",
    "line": "Qur'an word • POS: proper noun • Frequency: common",
    "meta": {
      "pos": "proper noun",
      "frequency": 20
    },
    "ayahArabic": "وَمَرْيَمَ ٱبْنَتَ عِمْرَٰنَ ٱلَّتِى أَحْصَنَتْ فَرْجَهَا",
    "ayahReference": "সূরা আল-আহযাব ৩৩:৩৫",
    "ayahBreakdown": "ওয়া / মারয়ামা / ইবনতা / 'ইমরান / আল্লাতি / আহসানত / ফারজাহা",
    "ayahMeaning": "এবং মারয়াম ইমরানের কন্যা, যে তার লজ্জাস্থান পবিত্র রেখেছিল।"
  },
  {
    "rank": 162,
    "arabic": "نَصِيب",
    "pronunciation": "naṣīb",
    "pronunciationBreakdown": "na-ṣīb",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 12
    },
    "ayahArabic": "وَمَا ٱلْحَيَوٰةُ ٱلدُّنْيَا إِلَّا مَتَٰعُ ٱلْغُرُورِ",
    "ayahReference": "সূরা আল-হাদিদ ৫৭:২০",
    "ayahBreakdown": "ওয়া / মাল / হাইয়াতু / আদ-দুনইয়া / ইল্লা / মাতাআ / আল-গুরূরি",
    "ayahMeaning": "দুনিয়ার জীবন কেবল ক্ষণস্থায়ী ভোগ, আর আল্লাহর সঙ্গে আছে চিরন্তন পুরস্কার।"
  },
  {
    "rank": 163,
    "arabic": "هَٰذَا",
    "pronunciation": "hādhā",
    "pronunciationBreakdown": "hā-dhā",
    "meaning": "",
    "line": "Qur'an word • POS: demonstrative pronoun • Frequency: very common",
    "meta": {
      "pos": "demonstrative pronoun",
      "frequency": 40
    },
    "ayahArabic": "هَٰذَا بَلَٰغٌ لِّلنَّاسِ وَلِيُنذَرُوا۟ بِهِۦ وَلِيَعْلَمَ أَنَّمَا هُوَ إِلَٰهٌ وَٰحِدٌ",
    "ayahReference": "সূরা ইবরাহীম ১৪:৫২",
    "ayahBreakdown": "হাযা / বালাগুন / লিন্নাস / ওয়া / লিয়ুনযারূ / বিহি / ওয়া / লিয়া'লামা / আন্নামা / হুওয়া / ইলাহুন / ওয়াহিদুন",
    "ayahMeaning": "এটি মানুষের জন্য এক পৌঁছে দেওয়া বার্তা, যাতে তারা সতর্ক হয় এবং জানে যে তিনিই একমাত্র ইলাহ।"
  },
  {
    "rank": 164,
    "arabic": "وَلَد",
    "pronunciation": "walad",
    "pronunciationBreakdown": "wa-lad",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 18
    },
    "ayahArabic": "وَجَعَلُوا۟ لَهُۥٓ أَوْلَٰدًا وَأَنثَىٰ",
    "ayahReference": "সূরা আল-আ'রাফ ৭:১৯০",
    "ayahBreakdown": "ওয়া / জা'আলূ / লাহূ / আওলাদান / ওয়া / আনসা",
    "ayahMeaning": "তারা তাঁর জন্য সন্তান ও কন্যা সৃষ্টি করেছে।"
  },
  {
    "rank": 165,
    "arabic": "يَوْم",
    "pronunciation": "yawm",
    "pronunciationBreakdown": "yawm",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 35
    },
    "ayahArabic": "وَكُلُّ مَا رَبُّكَ بِهِ عَزِيزٌ",
    "ayahReference": "সূরা হূদ ১১:৩৩",
    "ayahBreakdown": "ওয়া / কুল্লু / মা / রব্বুকা / বিহি / 'আযীযুন",
    "ayahMeaning": "তোমার প্রতিপালকের কাছে যা কিছু আছে তা সম্মানজনক।"
  },
  {
    "rank": 166,
    "arabic": "ءَامِين",
    "pronunciation": "āmīn",
    "pronunciationBreakdown": "ā-mīn",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: common",
    "meta": {
      "pos": "noun",
      "frequency": 8
    },
    "ayahArabic": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً",
    "ayahReference": "সূরা আলে ইমরান ৩:৮",
    "ayahBreakdown": "রব্বনা / লা / তুযিগ / কুলূবানা / বা'দা / ইয / হাদাইতানা / ওয়া / হাব / লানা / মিন / লাদুংকা / রহমাতান",
    "ayahMeaning": "হে আমাদের প্রতিপালক, আমাদের অন্তর বিচ্যুত করো না তুমি আমাদের হেদায়াত দেওয়ার পর, এবং তোমার কাছ থেকে আমাদের রহমত দাও।"
  },
  {
    "rank": 167,
    "arabic": "ءَايَة",
    "pronunciation": "āya",
    "pronunciationBreakdown": "ā-ya",
    "meaning": "",
    "line": "Qur'an word • POS: noun • Frequency: very common",
    "meta": {
      "pos": "noun",
      "frequency": 40
    },
    "ayahArabic": "وَءَايَةٌ لَّهُمُ ٱلَّيْلُ نَسْلَخُ مِنْهُ ٱلنَّهَارَ فَإِذَا هُم مُّظْلِمُونَ",
    "ayahReference": "সূরা ইয়াসীন ৩৬:৩৭",
    "ayahBreakdown": "ওয়া / আয়াতুন / লাহুমু / আল-লাইলু / নাসলাখু / মিনহু / আন-নাহারা / ফাইযা / হুম / মুজলিমূন",
    "ayahMeaning": "তাদের জন্য রাত একটি নিদর্শন, আমি তা থেকে দিনকে খুলে দিই, অতএব তারা অন্ধকারাচ্ছন্ন হয়ে যায়।"
  }
];

  const quranWordBank = {};
  quranWordsUI.forEach(item => {
    const key = firstArabicBaseLetterLocal(item.arabic);
    if (!quranWordBank[key]) quranWordBank[key] = [];
    quranWordBank[key].push(item);
  });

  window.quranWordsUI = quranWordsUI;
  window.quranWordBank = quranWordBank;
})();
