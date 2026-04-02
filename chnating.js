// Cached DOM elements
const curValEl = document.getElementById('curVal');
const totalValEl = document.getElementById('totalVal');
const body = document.body;

// LocalStorage keys
const STORAGE_KEYS = {
  curVal: 'chantingCurVal',
  totalVal: 'chantingTotalVal',
  nightMode: 'chantingNightMode'
};

// Load from localStorage and initialize
function loadState() {
  const curVal = localStorage.getItem(STORAGE_KEYS.curVal) || '0';
  const totalVal = localStorage.getItem(STORAGE_KEYS.totalVal) || '0';
  const isNightMode = localStorage.getItem(STORAGE_KEYS.nightMode) === 'true';
  
  curValEl.textContent = curVal;
  totalValEl.textContent = totalVal;
  
  if (isNightMode) {
    body.classList.add('night-mode');
    document.querySelector('.mode-toggle').textContent = '☀️'; // Update toggle icon if desired
  }
}

// Save to localStorage
function saveCurVal(val) {
  localStorage.setItem(STORAGE_KEYS.curVal, val);
  curValEl.textContent = val;
}

function saveTotalVal(val) {
  localStorage.setItem(STORAGE_KEYS.totalVal, val);
  totalValEl.textContent = val;
}

function saveNightMode(isNight) {
  localStorage.setItem(STORAGE_KEYS.nightMode, isNight);
  if (isNight) {
    body.classList.add('night-mode');
  } else {
    body.classList.remove('night-mode');
  }
}

// Event listeners (defer until DOM ready, but since script at end, safe)
document.addEventListener('DOMContentLoaded', loadState);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadState);
} else {
  loadState();
}

// Counter functions
function plus() {
  let curVal = Number(curValEl.textContent);
  curVal += 1;
  
  if (curVal > 107) {
    curVal = 0;
    let totalVal = Number(totalValEl.textContent);
    totalVal += 1;
    saveTotalVal(totalVal.toString());
    alert('🪷 Hare Krishna! 1 माला पूर्ण! 🙏');
  }
  
  saveCurVal(curVal.toString());
}

function minus() {
  let curVal = Number(curValEl.textContent);
  if (curVal > 0) {
    curVal -= 1;
    saveCurVal(curVal.toString());
  }
}

function reset() {
  saveCurVal('0');
}

function totalplus() {
  let totalVal = Number(totalValEl.textContent);
  totalVal += 1;
  saveTotalVal(totalVal.toString());
}

function totalminus() {
  let totalVal = Number(totalValEl.textContent);
  if (totalVal > 0) {
    totalVal -= 1;
    saveTotalVal(totalVal.toString());
  }
}

function totalreset() {
  saveTotalVal('0');
}

function toggleMode() {
  const isNightMode = body.classList.contains('night-mode');
  saveNightMode(!isNightMode);
  const toggleBtn = document.querySelector('.mode-toggle');
  toggleBtn.textContent = body.classList.contains('night-mode') ? '☀️' : '🌙';
}
