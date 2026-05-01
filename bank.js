
// ── STATE ──
const state = {
  user: '', cifNum: '', balance: 1000000,
  depTotal: 0, witTotal: 0, txnSeq: 1,
  selAccNum: 'SB •••• 4291', selAccType: 'Savings Account',
  captcha: 'A7X2K'
};

// ── HELPERS ──
const fmt = n => '₹' + n.toLocaleString('en-IN');
const nowTime = () => new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true});
const nowDate = () => new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
const genRef = () => 'SBI' + String(Date.now()).slice(-9);
const $ = id => document.getElementById(id);

// ── CAPTCHA ──
function genCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c = '';
  for(let i=0;i<5;i++) c += chars[Math.floor(Math.random()*chars.length)];
  return c;
}
function refreshCaptcha() {
  state.captcha = genCaptcha();
  $('captchaCode').textContent = state.captcha;
}

// ── PAGE NAV ──
function goTo(id) {
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); });
  $(id).classList.add('active');
  window.scrollTo(0,0);
}

// ── TOGGLE PASSWORD ──
function togglePwd(inputId, el) {
  const inp = $(inputId);
  inp.type = inp.type === 'password' ? 'text' : 'password';
  el.textContent = inp.type === 'password' ? '👁' : '🙈';
}

// ── LOGIN ──
function doLogin() {
  const user = $('inUser').value.trim();
  const pass = $('inPass').value.trim();
  const cap  = $('inCaptcha').value.trim().toUpperCase();
  if (!user) { showToast('error','Missing Username','Please enter your username or CIF number.'); return; }
  if (!pass) { showToast('error','Missing Password','Please enter your login password.'); return; }
  if (!cap)  { showToast('error','Captcha Required','Please enter the captcha code shown.'); return; }
  if (cap !== state.captcha) { showToast('error','Wrong Captcha','The captcha you entered is incorrect.'); refreshCaptcha(); $('inCaptcha').value=''; return; }

  state.user = user.replace(/[^a-zA-Z0-9 ]/g,'').trim();
  state.cifNum = 'SBI••' + String(Date.now()).slice(-6);

  const btn = $('btnLogin');
  const txt = $('loginTxt');
  btn.disabled = true;
  txt.innerHTML = '<span class="spin"></span>';
  setTimeout(() => {
    btn.disabled = false;
    txt.textContent = 'Continue to Banking';
    $('ugcName').textContent = state.user.toUpperCase();
    $('ugcCIF').textContent = 'CIF: ' + state.cifNum;
    goTo('pgAccount');
    showToast('success','OTP Verified','Identity confirmed. Select your account.');
  }, 1600);
}

function demoLogin() {
  $('inUser').value = 'Ansh Kumar';
  $('inPass').value = 'Demo@1234';
  $('inCaptcha').value = state.captcha;
  setTimeout(doLogin, 200);
}

// ── ACCOUNT SELECT ──
function pickAcc(el, num, type) {
  document.querySelectorAll('.acc-item').forEach(a => a.classList.remove('selected'));
  el.classList.add('selected');
  state.selAccNum = num;
  state.selAccType = type;
}

function proceedDash() {
  $('dashAccLabel').textContent = state.selAccType;
  $('dashAccNum').textContent = state.selAccNum;
  $('bcHolder').textContent = state.user.toUpperCase();
  $('bcLastLogin').textContent = nowTime();
  updateBalDisplay(null);
  goTo('pgDash');
  showToast('success','Login Successful', `Welcome, ${state.user}! Session is active.`);
}

// ── LOGOUT ──
function doLogout() {
  showToast('info','Logged Out','Your session has ended securely.');
  setTimeout(() => {
    $('inUser').value = '';
    $('inPass').value = '';
    $('inCaptcha').value = '';
    refreshCaptcha();
    goTo('pgLogin');
  }, 1200);
}

// ── BALANCE DISPLAY ──
function updateBalDisplay(anim) {
  const el = $('bcAmt');
  el.textContent = fmt(state.balance);
  $('depBalPill').textContent = fmt(state.balance);
  $('witBalPill').textContent = fmt(state.balance);
  $('statDep').textContent = fmt(state.depTotal);
  $('statWit').textContent = fmt(state.witTotal);
  if (anim === 'up') { el.classList.add('bump'); setTimeout(()=>el.classList.remove('bump'),700); }
  if (anim === 'dn') { el.classList.add('dip');  setTimeout(()=>el.classList.remove('dip'),700); }
}

// ── SHEET ──
function openSheet(type) {
  if (type === 'deposit')  { $('depInput').value='';  $('sheetDeposit').classList.add('open');  setTimeout(()=>$('depInput').focus(),250); }
  else                     { $('witInput').value='';  $('sheetWithdraw').classList.add('open'); setTimeout(()=>$('witInput').focus(),250); }
}
function closeSheet(id) { $(id).classList.remove('open'); }

document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => { if(e.target===bg) bg.classList.remove('open'); });
});

function setAmt(inputId, val) { $(inputId).value = val; $(inputId).focus(); }

// ── DEPOSIT ──
function confirmDeposit() {
  const val = parseInt($('depInput').value);
  if (!val || val <= 0) { showToast('error','Invalid Amount','Enter an amount greater than ₹0.'); return; }
  if (val > 1000000)    { showToast('error','Limit Exceeded','Max ₹10,00,000 per transaction.'); return; }
  state.balance  += val;
  state.depTotal += val;
  updateBalDisplay('up');
  addTxn(`Cash Deposit — ${state.selAccType}`, 'credit', val);
  closeSheet('sheetDeposit');
  showToast('success','Deposit Successful', `${fmt(val)} credited to your account.`);
}

// ── WITHDRAW ──
function confirmWithdraw() {
  const val = parseInt($('witInput').value);
  if (!val || val <= 0)  { showToast('error','Invalid Amount','Enter an amount greater than ₹0.'); return; }
  if (val > state.balance) {
    addTxn('Withdrawal Declined — Insufficient Balance', 'fail', val);
    closeSheet('sheetWithdraw');
    showToast('error','Transaction Declined', `Available balance: ${fmt(state.balance)}`);
    return;
  }
  state.balance  -= val;
  state.witTotal += val;
  updateBalDisplay('dn');
  addTxn(`Cash Withdrawal — ATM/Branch`, 'debit', val);
  closeSheet('sheetWithdraw');
  showToast('success','Withdrawal Successful', `${fmt(val)} debited from your account.`);
}

// ── ADD TRANSACTION ──
function addTxn(desc, type, amount) {
  state.txnSeq++;
  $('txnCount').textContent = state.txnSeq + ' records';
  const list = $('txnList');
  const iconMap = { credit:'↓', debit:'↑', fail:'✕' };
  const clsMap  = { credit:'dot-credit cr', debit:'dot-debit dr', fail:'dot-fail fl' };
  const parts   = clsMap[type].split(' ');
  const sign    = type==='credit' ? '+' : (type==='debit' ? '-' : '');
  const row = document.createElement('div');
  row.className = 'txn-item';
  row.style.animation = 'pgIn 0.35s ease both';
  row.innerHTML = `
    <div class="txn-dot-wrap ${parts[0]}"><span class="txn-dot-icon">${iconMap[type]}</span></div>
    <div class="txn-mid">
      <div class="txn-desc">${desc}</div>
      <div class="txn-ref">Ref: ${genRef()}</div>
    </div>
    <div class="txn-right">
      <div class="txn-amt ${parts[1]}">${sign}${fmt(amount)}</div>
      <div class="txn-time">${nowTime()}</div>
    </div>`;
  list.insertBefore(row, list.firstChild);
}

// ── TOAST ──
function showToast(type, title, msg) {
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  const stack = $('toastStack');
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span class="toast-ico">${icons[type]}</span><div class="toast-text"><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div>`;
  stack.appendChild(t);
  setTimeout(() => { t.style.animation='toastFade 0.3s ease forwards'; setTimeout(()=>t.remove(),300); }, 3500);
}

// Enter key support
['inPass','inCaptcha'].forEach(id => $(id).addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); }));
$('depInput').addEventListener('keydown', e => { if(e.key==='Enter') confirmDeposit(); if(e.key==='Escape') closeSheet('sheetDeposit'); });
$('witInput').addEventListener('keydown', e => { if(e.key==='Enter') confirmWithdraw(); if(e.key==='Escape') closeSheet('sheetWithdraw'); });
