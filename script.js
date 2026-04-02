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
      if(typeof emailjs!=='undefined') emailjs.init('izZ19ZnZcnQO23vhR');
    //   // Typewriter
      var el=document.getElementById('typeTarget');
      if (!el) return;

  const texts = ["I'm Ansh", "Frontend Developer", "Web Developer", ];
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
        setTimeout(type, 1500); // ruko thoda
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
      if(el){var txt="",i=0;el.textContent='';setTimeout(function t(){if(i<txt.length){el.textContent+=txt[i++];setTimeout(t,110);}},600);}
      // Parallax
      document.addEventListener('mousemove',function(e){var bg=document.querySelector('.moving-bg');if(!bg)return;bg.style.transform='translate('+((window.innerWidth/2-e.clientX)/80)+'px,'+((window.innerHeight/2-e.clientY)/80)+'px) scale(1.1)';});
      // 3D cards
      document.querySelectorAll('.project-card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.transform='rotateX('+((e.clientY-r.top-r.height/2)/18)+'deg) rotateY('+((r.width/2-(e.clientX-r.left))/18)+'deg) scale(1.03)';});c.addEventListener('mouseleave',function(){c.style.transform='';});});
      // Email
      var form=document.getElementById('my-form');
      if(form){form.addEventListener('submit',function(e){e.preventDefault();var n=form.querySelector('[name="from_name"]').value.trim(),em=form.querySelector('[name="user_email"]').value.trim(),msg=form.querySelector('[name="message"]').value.trim(),btn=form.querySelector('.send-btn');if(!n)return alert('Enter your name.');if(!/^[^@]+@gmail\.com$/i.test(em))return alert('Use a Gmail address.');if(msg.length<10)return alert('Message too short.');var o=btn.textContent;btn.textContent='Sending...';btn.disabled=true;emailjs.sendForm('service_q2zzt24','template_05r8o8q',form).then(function(){alert('✅ Sent!');form.reset();}).catch(function(){alert('⚠️ Failed. Try WhatsApp.');}).finally(function(){btn.textContent=o;btn.disabled=false;});});}
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
//  var _ldDone = false;
// function hideLoader() {
//   if (_ldDone) return;
//   _ldDone = true;
//   var ls = document.getElementById('loadingScreen');
//   if (ls) { ls.style.opacity = '0'; ls.style.visibility = 'hidden'; ls.style.pointerEvents = 'none'; }
//   document.body.style.overflow = 'auto';
// }
// setTimeout(hideLoader, 600);
// window.addEventListener('load', hideLoader);
// Back to Top show/hide
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});
// ===== TYPEWRITER LOOP =====
// function initTypewriter() {
//   const el = document.querySelector('.highlight');
//   if (!el) return;

//   const texts = ["I'm Ansh", "Frontend Developer", "Web Designer", "I'm Ansh"];
//   let textIndex = 0;
//   let charIndex = 0;
//   let isDeleting = false;

//   function type() {
//     const current = texts[textIndex % texts.length];

//     if (!isDeleting) {
//       el.textContent = current.slice(0, charIndex + 1);
//       charIndex++;
//       if (charIndex === current.length) {
//         isDeleting = true;
//         setTimeout(type, 1500); // ruko thoda
//         return;
//       }
//     } else {
//       el.textContent = current.slice(0, charIndex - 1);
//       charIndex--;
//       if (charIndex === 0) {
//         isDeleting = false;
//         textIndex++;
//         setTimeout(type, 400);
//         return;
//       }
//     }

//     setTimeout(type, isDeleting ? 60 : 110);
//   }

//   setTimeout(type, 500);
// }