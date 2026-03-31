const arabicLetters = window.baseLetters.map(item => ({ ...item, words: window.wordBank[item.arabic] || [] }));

const letterMap = {
  'ء': { name: 'হামযা', base: 'ʼ' }, 'أ': { name: 'হামযা', base: 'ʼ' }, 'إ': { name: 'হামযা', base: 'ʼ' }, 'ا': { name: 'আলিফ', base: 'আ' }, 'آ': { name: 'আলিফ মাদ', base: 'আ' }, 'ب': { name: 'বা', base: 'ব' }, 'ت': { name: 'তা', base: 'ত' }, 'ث': { name: 'থা', base: 'থ' }, 'ج': { name: 'জীম', base: 'জ' }, 'ح': { name: 'হা', base: 'হ' }, 'خ': { name: 'খা', base: 'খ' }, 'د': { name: 'দাল', base: 'দ' }, 'ذ': { name: 'যাল', base: 'ধ' }, 'ر': { name: 'রা', base: 'র' }, 'ز': { name: 'যায়', base: 'য' }, 'س': { name: 'সীন', base: 'স' }, 'ش': { name: 'শীন', base: 'শ' }, 'ص': { name: 'সাদ', base: 'স' }, 'ض': { name: 'দাদ', base: 'দ' }, 'ط': { name: 'তা', base: 'ত' }, 'ظ': { name: 'যা', base: 'য' }, 'ع': { name: 'আইন', base: 'ʿ' }, 'غ': { name: 'গইন', base: 'গ' }, 'ف': { name: 'ফা', base: 'ফ' }, 'ق': { name: 'ক্বাফ', base: 'ক্ব' }, 'ك': { name: 'কাফ', base: 'ক' }, 'ل': { name: 'লাম', base: 'ল' }, 'م': { name: 'মীম', base: 'ম' }, 'ن': { name: 'নূন', base: 'ন' }, 'ه': { name: 'হা', base: 'হ' }, 'و': { name: 'ওয়াও', base: 'ওয়' }, 'ي': { name: 'ইয়া', base: 'ইয়' }
};

let viewedCount = 0;
let shuffledLetters = [];


function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createCard(letter, index) {
  const card = document.createElement('div');
  card.className = 'card-container';
  card.style.animationDelay = `${index * 50}ms`;
  card.innerHTML = `
    <div class="card">
      <div class="card-face card-front">${letter.arabic}</div>
      <div class="card-face card-back">
        <div class="card-back-content">
          <div class="info-row"><span class="info-label">নাম:</span><span class="info-value">${letter.name}</span></div>
          <div class="info-row"><span class="info-label">উচ্চারণ:</span><span class="info-value">${letter.pronunciation}</span></div>
          <div class="info-row"><span class="info-label">উদাহরণ:</span><span class="info-value">${letter.example}</span></div>
          <div class="info-row"><span class="info-label">বাংলা কাছাকাছি:</span><span class="info-value">${letter.bengali}</span></div>
        </div>
        <div class="button-row">
          <button class="mini-btn harakat-btn" onclick="event.stopPropagation(); openHarakatModal('${letter.arabic}')">হারাকাত</button>
          <button class="mini-btn shobdo-btn" onclick="event.stopPropagation(); openShobdoModal('${letter.arabic}')">১০টি শব্দ</button>
          <button class="mini-btn quran-btn" onclick="event.stopPropagation(); openQuranWordModal('${letter.arabic}')">কুরআনের শব্দ</button>
        </div>
        <div class="hint">ক্লিক করে উল্টান</div>
      </div>
    </div>
  `;
  card.addEventListener('click', () => flipCard(card));
  return card;
}

function flipCard(card) {
  if (card.classList.contains('flipped')) card.classList.remove('flipped');
  else {
    card.classList.add('flipped');
    if (!card.dataset.viewed) {
      card.dataset.viewed = 'true';
      viewedCount++;
      updateProgress();
    }
  }
}

function updateProgress() {
  document.getElementById('viewed').textContent = viewedCount;
  document.getElementById('total').textContent = arabicLetters.length;
}

function getHarakatData(arabic) {
  return arabicLetters.find(l => l.arabic === arabic) || null;
}

function openHarakatModal(arabic) {
  const data = getHarakatData(arabic);
  if (!data) return;
  document.getElementById('modal-letter').textContent = data.arabic;
  document.getElementById('modal-letter-name').textContent = data.name;
  document.getElementById('harakat-list').innerHTML = `
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">জবর</div><div class="harakat-arabic">${data.fatha}</div></div><div class="harakat-right"><div class="harakat-sound">${data.fathaBn}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">জের</div><div class="harakat-arabic">${data.kasra}</div></div><div class="harakat-right"><div class="harakat-sound">${data.kasraBn}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">পেশ</div><div class="harakat-arabic">${data.damma}</div></div><div class="harakat-right"><div class="harakat-sound">${data.dammaBn}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">সুকুন</div><div class="harakat-arabic">${data.sukun}</div></div><div class="harakat-right"><div class="harakat-sound">${data.sukunSound}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">তাশদীদ</div><div class="harakat-arabic">${data.tashdid}</div></div><div class="harakat-right"><div class="harakat-sound">${data.tashdidSound}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">দুই জবর (তানউইন)</div><div class="harakat-arabic">${data.tanwinFath}</div></div><div class="harakat-right"><div class="harakat-sound">${data.tanwinFathBn}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">দুই জের (তানউইন)</div><div class="harakat-arabic">${data.tanwinKasr}</div></div><div class="harakat-right"><div class="harakat-sound">${data.tanwinKasrBn}</div></div></div>
    <div class="harakat-item"><div class="harakat-left"><div class="harakat-name">দুই পেশ (তানউইন)</div><div class="harakat-arabic">${data.tanwinDamm}</div></div><div class="harakat-right"><div class="harakat-sound">${data.tanwinDammBn}</div></div></div>
  `;
  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeHarakatModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = '';
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function openShobdoModal(arabic) {
  const data = arabicLetters.find(l => l.arabic === arabic);
  if (!data) return;
  document.getElementById('shobdo-modal-letter').textContent = data.arabic;
  document.getElementById('shobdo-modal-letter-name').textContent = data.name;
  document.getElementById('shobdo-list').innerHTML = data.words.map(word => `
    <div class="shobdo-item">
      <span class="shobdo-arabic">${word[0]}</span>
      <span class="shobdo-bengali">${word[1]} (${word[2]})</span>
      <button class="shobdo-btn-view" onclick="openWordBreakdown('${escapeAttr(word[0])}', '${escapeAttr(word[1])}')">👉</button>
    </div>
  `).join('');
  document.getElementById('shobdoModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeShobdoModal() {
  document.getElementById('shobdoModal').classList.remove('active');
  document.body.style.overflow = '';
}

function openQuranWordModal(arabic) {
  const data = arabicLetters.find(l => l.arabic === arabic);
  if (!data) return;
  const items = (window.quranWordBank && window.quranWordBank[arabic]) || [];
  document.getElementById('quran-modal-letter').textContent = data.arabic;
  document.getElementById('quran-modal-letter-name').textContent = data.name;
  document.getElementById('quran-word-list').innerHTML = items.length
    ? items.map(item => `
      <div class="quran-word-item">
        <span class="shobdo-arabic">${item.arabic}</span>
        <span class="shobdo-bengali">${item.pronunciation}${item.pronunciationBreakdown ? ` — ${item.pronunciationBreakdown}` : ''}${item.meaning ? ` (${item.meaning})` : ''}</span>
        <span class="quran-word-line">${item.ayahArabic || 'এই শব্দের জন্য আয়াত এখনো যোগ করা হয়নি।'}</span>
        <span class="quran-word-line">${item.ayahBreakdown ? 'উচ্চারণ ভেঙে: ' + item.ayahBreakdown : ''}</span>
        <span class="quran-word-line">${item.ayahMeaning || ''}</span>
        <span class="quran-word-meta">${item.ayahReference || ''}</span>
      </div>
    `).join('')
    : '<div class="quran-word-item"><span class="shobdo-bengali">এই অক্ষরের জন্য এখনো কুরআনের শব্দ যোগ করা হয়নি।</span></div>';
  document.getElementById('quranWordModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuranWordModal() {
  document.getElementById('quranWordModal').classList.remove('active');
  document.body.style.overflow = '';
}

function parseArabicWord(word) {
  const diacritics = new Set(['َ','ِ','ُ','ْ','ّ','ً','ٌ','ٍ']);
  const letters = [];
  let current = null;
  for (const char of word) {
    if (diacritics.has(char)) {
      if (!current) continue;
      if (char === 'ّ') current.tashdid = true;
      else current.harakat.push(char);
    } else {
      if (current) letters.push(current);
      current = { letter: char, harakat: [], tashdid: false };
    }
  }
  if (current) letters.push(current);
  return letters;
}

function getSound(letterData) {
  const info = letterMap[letterData.letter] || { base: letterData.letter, name: letterData.letter };
  const base = info.base;
  const hasFatha = letterData.harakat.includes('َ');
  const hasKasra = letterData.harakat.includes('ِ');
  const hasDamma = letterData.harakat.includes('ُ');
  const hasSukun = letterData.harakat.includes('ْ');
  const hasTanwinFath = letterData.harakat.includes('ً');
  const hasTanwinKasr = letterData.harakat.includes('ٍ');
  const hasTanwinDamm = letterData.harakat.includes('ٌ');
  if (letterData.letter === 'آ') return 'আ';
  let sound = base;
  if (hasFatha) sound = base + 'া';
  else if (hasKasra) sound = base + 'ি';
  else if (hasDamma) sound = base + 'ু';
  else if (hasSukun) sound = base + '্';
  else if (hasTanwinFath) sound = base + 'ান';
  else if (hasTanwinKasr) sound = base + 'িন';
  else if (hasTanwinDamm) sound = base + 'ুন';
  sound = sound.replace('ওয়ি', 'উই').replace('ওয়ু', 'উ').replace('ইয়ি', 'ই').replace('ইয়ু', 'ইউ').replace('ʿা', 'আʼ').replace('ʿি', 'ইʼ').replace('ʿু', 'উʼ').replace('ʿ্', 'ʿ').replace('ʼা', 'আʼ').replace('ʼি', 'ইʼ').replace('ʼু', 'উʼ').replace('ʼ্', 'ʼ');
  if (letterData.tashdid) sound = sound + sound;
  return sound;
}

function openWordBreakdown(arabicWord, bengaliWord) {
  document.getElementById('wb-arabic').textContent = arabicWord;
  document.getElementById('wb-bengali').textContent = bengaliWord;
  const parsed = parseArabicWord(arabicWord);
  let content = '';
  let fullBengali = '';
  const lessons = [];
  const seen = new Set();
  parsed.forEach((item, idx) => {
    const letterInfo = letterMap[item.letter] || { name: item.letter, base: item.letter };
    const sound = getSound(item);
    fullBengali += sound;
    let harakatInfo = 'কোনো হারাকাত নেই';
    let tip = 'ব্যঞ্জনের মূল ধ্বনি';
    if (item.tashdid) {
      const key = 'তাশদীদ ّ → ধ্বনি দ্বিগুণ করে';
      if (!seen.has(key)) { seen.add(key); lessons.push(key); }
    }
    if (item.harakat.includes('َ')) harakatInfo = 'জবর';
    else if (item.harakat.includes('ِ')) harakatInfo = 'জের';
    else if (item.harakat.includes('ُ')) harakatInfo = 'পেশ';
    else if (item.harakat.includes('ْ')) harakatInfo = 'সুকুন';
    else if (item.harakat.includes('ً')) harakatInfo = 'দুই জবর';
    else if (item.harakat.includes('ٍ')) harakatInfo = 'দুই জের';
    else if (item.harakat.includes('ٌ')) harakatInfo = 'দুই পেশ';
    if (item.letter === 'ع') tip = 'আইন → গলার ভেতরের ধাক্কা';
    if (item.letter === 'ء' || item.letter === 'أ' || item.letter === 'إ') tip = 'হামযা → গলার থামা/কাটা';
    content += `
      <div class="word-letter-item">
        <div class="word-letter-header">
          <span class="word-letter-num">${idx + 1}</span>
          <span class="word-letter-arabic">${item.letter}${item.harakat.join('')}${item.tashdid ? 'ّ' : ''} (${letterInfo.name})</span>
        </div>
        <div class="word-letter-content">
          <div>${letterInfo.name} + ${harakatInfo}${item.tashdid ? ' + তাশদীদ' : ''}</div>
          <div class="word-letter-formula">👉 <span class="letter">${item.letter}${item.harakat.join('')}${item.tashdid ? 'ّ' : ''}</span> = <span class="word-letter-result">${sound}</span></div>
          <span class="word-letter-tip">✔️ ${tip}</span>
        </div>
      </div>
    `;
  });
  const summaryArabic = parsed.map(p => p.letter + p.harakat.join('') + (p.tashdid ? 'ّ' : '')).join(' + ');
  document.getElementById('wb-content').innerHTML = `
    <div class="word-breakdown-section">${content}</div>
    <div class="word-breakdown-summary">
      <div class="word-summary-label">সব মিলিয়ে:</div>
      <div class="word-summary-arabic">${summaryArabic}</div>
      <div class="word-summary-bengali">👉 ${fullBengali}</div>
    </div>
    <div class="word-breakdown-lessons">
      <div class="word-lessons-title">কী শিখলে?</div>
      ${[...new Set(lessons)].map(l => `<div class="word-lesson-item">${l}</div>`).join('') || '<div class="word-lesson-item">শব্দ ভেঙে অক্ষর + হারাকাত মিলিয়ে পড়তে হবে</div>'}
    </div>
  `;
  document.getElementById('wordBreakdownModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWordBreakdownModal() {
  document.getElementById('wordBreakdownModal').classList.remove('active');
  document.body.style.overflow = '';
}

function openFullTable() {
  const harakatTbody = document.getElementById('harakatTableBody');
  harakatTbody.innerHTML = '';
  arabicLetters.forEach(letter => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><div class="letter-cell"><span class="arabic-char">${letter.arabic}</span><span class="bengali-name">${letter.name}</span></div></td>
      <td class="sound-cell"><span class="arabic">${letter.fatha}</span><span class="bengali">${letter.fathaBn}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.kasra}</span><span class="bengali">${letter.kasraBn}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.damma}</span><span class="bengali">${letter.dammaBn}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.sukun}</span><span class="bengali">${letter.sukunSound}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.tashdid}</span><span class="bengali">${letter.tashdidSound}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.tanwinFath}</span><span class="bengali">${letter.tanwinFathBn}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.tanwinKasr}</span><span class="bengali">${letter.tanwinKasrBn}</span></td>
      <td class="sound-cell"><span class="arabic">${letter.tanwinDamm}</span><span class="bengali">${letter.tanwinDammBn}</span></td>
    `;
    harakatTbody.appendChild(row);
  });

  const shobdoTbody = document.getElementById('shobdoTableBody');
  shobdoTbody.innerHTML = '';
  arabicLetters.forEach(letter => {
    const wordsList = letter.words.map(w => `${w[0]} (${w[1]}) - ${w[2]}`).join(' | ');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><div class="letter-cell"><span class="arabic-char">${letter.arabic}</span><span class="bengali-name">${letter.name}</span></div></td>
      <td style="text-align:left; font-size:.85rem; color:#16213E;">${wordsList}</td>
    `;
    shobdoTbody.appendChild(row);
  });
  document.getElementById('fullTableModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFullTable() {
  document.getElementById('fullTableModal').classList.remove('active');
  document.body.style.overflow = '';
}

function resetAll() {
  viewedCount = 0;
  updateProgress();
  shuffledLetters = shuffle(arabicLetters);
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  shuffledLetters.forEach((letter, index) => grid.appendChild(createCard(letter, index)));
}

document.getElementById('modal').addEventListener('click', function(e) { if (e.target === this) closeHarakatModal(); });
document.getElementById('shobdoModal').addEventListener('click', function(e) { if (e.target === this) closeShobdoModal(); });
document.getElementById('quranWordModal').addEventListener('click', function(e) { if (e.target === this) closeQuranWordModal(); });
document.getElementById('wordBreakdownModal').addEventListener('click', function(e) { if (e.target === this) closeWordBreakdownModal(); });
document.getElementById('fullTableModal').addEventListener('click', function(e) { if (e.target === this) closeFullTable(); });
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeHarakatModal(); closeShobdoModal(); closeQuranWordModal(); closeWordBreakdownModal(); closeFullTable(); }
});

resetAll();
