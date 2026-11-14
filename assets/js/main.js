document.documentElement.classList.add('js');
const ABI_CONFIG={endpoint:'mailto:mlkayisire@gmail.com'};
(function(){
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#primary-nav');
 const video=document.querySelector('.hero-media video'); if(video&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){video.pause();video.removeAttribute('autoplay');}
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});}
 const params=new URLSearchParams(location.search), role=params.get('role'); const choice=document.querySelector('#choice'); if(choice&&role){const map={mentor:'Mentor',mentee:'Mentee',organization:'Organization',partner:'Organization'}; if(map[role])choice.value=map[role];}
 document.querySelectorAll('[data-role]').forEach(link=>link.addEventListener('click',()=>{const map={mentor:'Mentor',mentee:'Mentee',organization:'Organization',partner:'Organization'};if(choice&&map[link.dataset.role])choice.value=map[link.dataset.role];}));
 const form=document.querySelector('#contact-form'); const status=document.querySelector('#form-status'); if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form), name=data.get('name'), email=data.get('email'), choiceValue=data.get('choice'), message=data.get('message');const subject=encodeURIComponent('ABI enquiry: '+choiceValue);const body=encodeURIComponent(`Name: ${name}\nI am a: ${choiceValue}\nEmail: ${email||'Not provided'}\n\nMessage:\n${message}`);window.location.href=`${ABI_CONFIG.endpoint}?subject=${subject}&body=${body}`;if(status)status.hidden=false;});}
})();


