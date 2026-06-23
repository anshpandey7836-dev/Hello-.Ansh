// ==================== AUTO TRANSLATION SYSTEM ====================
// Uses LibreTranslate API (FREE) - No API key needed!

let currentLanguage = 'en';
let originalTexts = {};
let isTranslating = false;

// ==================== INITIALIZE ====================
function initializeTexts() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    let nodeIndex = 0;

    while (node = walker.nextNode()) {
        const text = node.textContent.trim();
        
        if (text && text.length > 0 && 
            node.parentElement.tagName !== 'SCRIPT' && 
            node.parentElement.tagName !== 'STYLE') {
            
            originalTexts[nodeIndex] = {
                text: text,
                node: node,
                index: nodeIndex
            };
            
            nodeIndex++;
        }
    }

    console.log('✅ Initialized ' + Object.keys(originalTexts).length + ' text elements');
}

// ==================== SWITCH LANGUAGE ====================
function switchLanguage(lang) {
    if (isTranslating) return;
    
    currentLanguage = lang;
    localStorage.setItem('websiteLanguage', lang);

    const engBtn = document.getElementById('langEng');
    const hinBtn = document.getElementById('langHin');
    const spaBtn = document.getElementById('langSpa');

    if (engBtn) engBtn.classList.toggle('active', lang === 'en');
    if (hinBtn) hinBtn.classList.toggle('active', lang === 'hi');
    if (spaBtn) spaBtn.classList.toggle('active', lang === 'es');

    if (lang === 'en') {
        restoreEnglish();
    } else {
        translateToLanguage(lang);
    }
}

// ==================== RESTORE ENGLISH ====================
function restoreEnglish() {
    for (let key in originalTexts) {
        const item = originalTexts[key];
        if (item.node && item.node.parentElement) {
            item.node.textContent = item.text;
        }
    }
    console.log('✅ Restored to English');
    hideLoadingIndicator();
}

// ==================== TRANSLATE TO HINDI ====================
async function translateToLanguage(targetLang) {
    if (isTranslating) return;
    
    isTranslating = true;
    showLoadingIndicator();

    try {
        const textsToTranslate = [];
        const nodeIndices = [];

        for (let key in originalTexts) {
            textsToTranslate.push(originalTexts[key].text);
            nodeIndices.push(key);
        }

        if (textsToTranslate.length === 0) {
            hideLoadingIndicator();
            isTranslating = false;
            return;
        }

        console.log('📤 Translating ' + textsToTranslate.length + ' texts to ' + targetLang + '...');

        const translatedTexts = await translateTextsLibreTranslate(textsToTranslate, targetLang);

        for (let i = 0; i < nodeIndices.length; i++) {
            const key = nodeIndices[i];
            const item = originalTexts[key];
            
            if (item.node && item.node.parentElement && translatedTexts[i]) {
                item.node.textContent = translatedTexts[i];
            }
        }

        console.log('✅ Translation complete!');
        hideLoadingIndicator();
    } catch (error) {
        console.error('Translation error:', error);
        alert('Translation failed. Please try again.\n\nError: ' + error.message);
        restoreEnglish();
    }

    isTranslating = false;
}

// ==================== LIBTRANSLATE API (COMPLETELY FREE) ====================
async function translateTextsLibreTranslate(texts, targetLang = 'hi') {
    const translatedTexts = [];
    const batchSize = 5;
    
    for (let i = 0; i < texts.length; i += batchSize) {
        const batch = texts.slice(i, i + batchSize);
        
        try {
            for (let text of batch) {
                // Skip very short texts or numbers
                if (text.length < 2 || /^\d+$/.test(text)) {
                    translatedTexts.push(text);
                    continue;
                }

                const response = await fetch('https://libretranslate.de/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        q: text,
                        source: 'en',
                        target: targetLang,
                        format: 'text'
                    })
                });

                const data = await response.json();

                if (data && data.translatedText) {
                    translatedTexts.push(data.translatedText);
                } else {
                    translatedTexts.push(text);
                }
            }
        } catch (error) {
            console.error('Batch translation error:', error);
            for (let j = 0; j < batch.length; j++) {
                translatedTexts.push(batch[j]);
            }
        }

        // Delay between batches
        if (i + batchSize < texts.length) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    return translatedTexts;
}

// ==================== ALTERNATIVE: GOOGLE TRANSLATE API (PAID) ====================
// Uncomment to use Google Translate instead (requires API key from Google Cloud Console)
/*
async function translateTextsGoogle(texts) {
    const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Get from Google Cloud
    const translatedTexts = [];

    try {
        const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    q: texts,
                    target: 'hi',
                    source: 'en'
                })
            }
        );

        const data = await response.json();

        if (data && data.data && data.data.translations) {
            for (let translation of data.data.translations) {
                translatedTexts.push(translation.translatedText);
            }
        }

        return translatedTexts;
    } catch (error) {
        console.error('Google Translate API error:', error);
        throw error;
    }
}
*/

// ==================== UI HELPERS ====================
function showLoadingIndicator() {
    const indicator = document.getElementById('loadingIndicator');
    if (indicator) {
        indicator.classList.add('show');
    }
}

function hideLoadingIndicator() {
    const indicator = document.getElementById('loadingIndicator');
    if (indicator) {
        indicator.classList.remove('show');
    }
}

// ==================== INITIALIZE ON PAGE LOAD ====================
window.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting Auto Translation System...');
    
    initializeTexts();

    const savedLanguage = localStorage.getItem('websiteLanguage') || 'en';
    currentLanguage = savedLanguage;

    const engBtn = document.getElementById('langEng');
    const hinBtn = document.getElementById('langHin');
    const spaBtn = document.getElementById('langSpa');

    if (savedLanguage === 'en') {
        if (engBtn) engBtn.classList.add('active');
        if (hinBtn) hinBtn.classList.remove('active');
        if (spaBtn) spaBtn.classList.remove('active');
    } else if (savedLanguage === 'hi') {
        if (engBtn) engBtn.classList.remove('active');
        if (hinBtn) hinBtn.classList.add('active');
        if (spaBtn) spaBtn.classList.remove('active');
        translateToLanguage('hi');
    } else if (savedLanguage === 'es') {
        if (engBtn) engBtn.classList.remove('active');
        if (hinBtn) hinBtn.classList.remove('active');
        if (spaBtn) spaBtn.classList.add('active');
        translateToLanguage('es');
    } else {
        if (engBtn) engBtn.classList.add('active');
        if (hinBtn) hinBtn.classList.remove('active');
        if (spaBtn) spaBtn.classList.remove('active');
    }
});

// ==================== SAVE PREFERENCE ====================
window.addEventListener('beforeunload', () => {
    localStorage.setItem('websiteLanguage', currentLanguage);
});
 // LOADING — guaranteed hide in 600ms
    var _done = false;
    function hideLoader() {
      if (_done) return; _done = true;
      var ls = document.getElementById('loadingScreen');
      ls.style.opacity = '0'; ls.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
      startAll();
    }
    setTimeout(hideLoader, 600);

    function toggleMobileMenu() {
      document.getElementById('navbar').classList.toggle('mobile-open');
      document.body.classList.toggle('menu-open');
    }
    document.querySelectorAll('.nav-links a').forEach(function(a){
      a.addEventListener('click',function(){
        document.getElementById('navbar').classList.remove('mobile-open');
        document.body.classList.remove('menu-open');
      });
    });
    window.addEventListener('resize',function(){
      if(window.innerWidth>768){document.getElementById('navbar').classList.remove('mobile-open');document.body.classList.remove('menu-open');}
    });

    function startAll() {

      // EmailJS Init
      if(typeof emailjs!=='undefined') emailjs.init('UXVRqxQBPCYb6_99V');

      // Typewriter
      var el=document.getElementById('typeTarget');
      if (!el) return;

      const texts = ["I'm Ansh", "Frontend Developer", "Web Developer"];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const current = texts[textIndex % texts.length];
        if (!isDeleting) {
          el.textContent = current.slice(0, charIndex + 1);
          charIndex++;
          if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
          }
        } else {
          el.textContent = current.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
            setTimeout(type, 400);
            return;
          }
        }
        setTimeout(type, isDeleting ? 60 : 110);
      }
      setTimeout(type, 500);

      // Parallax
      document.addEventListener('mousemove',function(e){var bg=document.querySelector('.moving-bg');if(!bg)return;bg.style.transform='translate('+((window.innerWidth/2-e.clientX)/80)+'px,'+((window.innerHeight/2-e.clientY)/80)+'px) scale(1.1)';});

      // 3D cards
      document.querySelectorAll('.project-card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.transform='rotateX('+((e.clientY-r.top-r.height/2)/18)+'deg) rotateY('+((r.width/2-(e.clientX-r.left))/18)+'deg) scale(1.03)';});c.addEventListener('mouseleave',function(){c.style.transform='';});});

      // ===== EMAIL — FIXED =====
      var form = document.getElementById('my-form');
      if(form){
        form.addEventListener('submit', function(e){
          e.preventDefault();
          var n   = form.querySelector('[name="form_name"]').value.trim();
          var em  = form.querySelector('[name="user_email"]').value.trim();
          var msg = form.querySelector('[name="message"]').value.trim();
          var btn = form.querySelector('.send-btn');

          if(!n) return alert('Enter your name.');
          if(!/^[^@]+@gmail\.com$/i.test(em)) return alert('Use a Gmail address.');
          if(msg.length < 10) return alert('Message too short.');

          var o = btn.textContent;
          btn.textContent = 'Sending...';
          btn.disabled = true;

          emailjs.sendForm('service_q2zzt24', 'template_05r8o8q', form)
            .then(function(){
              // Success Toast
              var toast = document.createElement('div');
              toast.style.cssText = 'position:fixed;top:30px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#00c851,#007E33);color:#fff;padding:16px 32px;border-radius:50px;font-family:Poppins,sans-serif;font-size:15px;font-weight:600;z-index:99999;box-shadow:0 10px 30px rgba(0,200,81,0.5);transition:opacity 0.5s;';
              toast.innerHTML = '✅ Message Successfully Sent! 🎉';
              document.body.appendChild(toast);
              setTimeout(function(){
                toast.style.opacity = '0';
                setTimeout(function(){ toast.remove(); }, 500);
              }, 4000);
              form.reset();
            })
            .catch(function(){
              alert('⚠️ Failed. Try WhatsApp: +91 83830 41157');
            })
            .finally(function(){
              btn.textContent = o;
              btn.disabled = false;
            });
        });
      }

      // Reveals + spy
      function check(){
        document.querySelectorAll('.reveal').forEach(function(el){if(el.getBoundingClientRect().top<window.innerHeight-60)el.classList.add('active');});
        document.querySelectorAll('.progress-fill').forEach(function(b){if(b.getBoundingClientRect().top<window.innerHeight){var w=b.getAttribute('data-width');if(w)b.style.width=w+'%';}});
        var cur='home';document.querySelectorAll('section[id]').forEach(function(s){if(s.getBoundingClientRect().top<=window.innerHeight*0.45)cur=s.id;});
        document.querySelectorAll('.nav-links a[data-section]').forEach(function(l){l.classList.toggle('active',l.getAttribute('data-section')===cur);});
      }
      check();
      window.addEventListener('scroll',check,{passive:true});
    }

// Back to Top show/hide
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

// Auto scroll for iframes
document.querySelectorAll('.auto-scroll-frame').forEach(function(iframe) {
  iframe.addEventListener('load', function() {
    try {
      var win = iframe.contentWindow;
      var doc = iframe.contentDocument || win.document;
      var maxScroll = doc.body.scrollHeight - doc.documentElement.clientHeight;
      var current = 0;
      var direction = 1;
      var speed = 0.8;

      setInterval(function() {
        current += speed * direction;
        if (current >= maxScroll) {
          current = maxScroll;
          direction = 0;
          setTimeout(function() { direction = -1; }, 1500);
        }
        if (current <= 0) {
          current = 0;
          direction = 0;
          setTimeout(function() { direction = 1; }, 1000);
        }
        win.scrollTo(0, current);
      }, 16);
    } catch(e) {}
  });
});