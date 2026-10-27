(function(){
// ===== CONFIGURAZIONE =====
var TO_EMAIL=["Antonio.disandro2005","gmail.com"].join("@"); // destinatario delle richieste
// ==========================
var $=function(i){return document.getElementById(i)};
var mb=$("menuBtn"),mn=$("menu");
mb.onclick=function(){var o=mn.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
$("y").textContent=new Date().getFullYear();
var f=$("form");if(!f)return;
var q=new URLSearchParams(location.search).get("servizio");if(q)$("servizio").value=q;
var st=$("status");
function setErr(id,m){$("e-"+id).textContent=m||"";$(id).classList.toggle("invalid",!!m);return !m}
function validate(){
var v=function(i){return $(i).value.trim()},ok=true;
ok=setErr("nome",v("nome").length<2?"Inserisci nome e cognome.":"")&&ok;
ok=setErr("email",/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))?"":"Inserisci un indirizzo email valido.")&&ok;
ok=setErr("servizio",v("servizio")?"":"Seleziona un servizio.")&&ok;
ok=setErr("messaggio",v("messaggio").length<10?"Descrivi brevemente la richiesta (almeno 10 caratteri).":"")&&ok;
var p=$("privacy-ok").checked;$("e-privacy").textContent=p?"":"Il consenso è necessario per inviare la richiesta.";
return ok&&p}
function show(t,m){st.className="status "+t;st.textContent=m}
f.addEventListener("submit",function(e){
e.preventDefault();st.className="status";
if(f.elements["_honey"].value)return;
if(!validate()){var b=f.querySelector(".invalid");if(b)b.focus();return}
var btn=$("send");btn.disabled=true;btn.textContent="Invio in corso…";
var d={nome:$("nome").value.trim(),email:$("email").value.trim(),servizio:$("servizio").value,messaggio:$("messaggio").value.trim(),budget:$("budget").value.trim()||"Non indicato",modalita:$("modalita").value,_subject:"Nuova richiesta dal sito: "+$("servizio").value,_replyto:$("email").value.trim(),_template:"table",_captcha:"true"};
fetch("https://formsubmit.co/ajax/"+encodeURIComponent(TO_EMAIL),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)})
.then(function(r){return r.json().then(function(j){if(!r.ok||String(j&&j.success)==="false")throw 0;})})
.then(function(){f.reset();show("ok","Richiesta inviata. Ti risponderò all’indirizzo email indicato appena possibile.")})
.catch(function(){show("ko","Invio non riuscito. I dati inseriti sono ancora qui: riprova tra poco oppure ");
var a=document.createElement("a");a.textContent="invia dal tuo programma di posta";a.style.cssText="color:inherit;text-decoration:underline";
a.href="mailto:"+TO_EMAIL+"?subject="+encodeURIComponent("Richiesta dal sito: "+$("servizio").value)+"&body="+encodeURIComponent("Nome: "+d.nome+"\nEmail: "+d.email+"\nModalità: "+d.modalita+"\nBudget: "+d.budget+"\n\n"+d.messaggio);
st.appendChild(a);st.appendChild(document.createTextNode("."))})
.finally(function(){btn.disabled=false;btn.textContent="Invia richiesta"})});
})();
