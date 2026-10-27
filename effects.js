(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=function(i){return document.getElementById(i)};
var pb=document.createElement('div');pb.className='progress';document.body.prepend(pb);
var hd=document.querySelector('header');
function sc(){var h=document.documentElement,m=h.scrollHeight-innerHeight;pb.style.width=(m>0?scrollY/m*100:0)+'%';hd.classList.toggle('small',scrollY>30)}
addEventListener('scroll',sc,{passive:true});sc();
if(!rm&&'IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;io.unobserve(t);setTimeout(function(){t.classList.add('in');setTimeout(function(){t.classList.remove('reveal','in')},900)},t._d||0)})},{threshold:.12});
document.querySelectorAll('.card,.steps li,.facts li,.lead,h2,.formbox,.cta,.photo,.trust').forEach(function(el,i){el.classList.add('reveal');el._d=(i%4)*90;io.observe(el)})}
if(!rm&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.card').forEach(function(c){
c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateX('+(-y*6)+'deg) rotateY('+(x*6)+'deg) translateY(-3px)'});
c.addEventListener('mouseleave',function(){c.style.transform=''})});
var rt=$('rot');if(rt){var w=['siti web','assistenza informatica','reti e Wi-Fi','corsi di intelligenza artificiale','cybersecurity di base'],wi=0,ci=0,del=false;
if(rm)rt.textContent=w[0];else(function tick(){var s=w[wi],d=del?30:70;ci+=del?-1:1;rt.textContent=s.slice(0,ci);if(!del&&ci===s.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%w.length;d=300}setTimeout(tick,d)})()}
var cv=$('bg');if(cv&&!rm){var x=cv.getContext('2d'),W,H,P=[],m={x:-999,y:-999};
function rs(){var r=cv.parentNode.getBoundingClientRect();W=cv.width=r.width;H=cv.height=r.height;var n=Math.min(70,Math.floor(W*H/16000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,c:Math.random()<.2?'63,182,168':'201,164,92'})}
rs();addEventListener('resize',rs);
cv.parentNode.addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
cv.parentNode.addEventListener('mouseleave',function(){m.x=m.y=-999});
(function draw(){x.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
x.fillStyle='rgba('+p.c+',.8)';x.beginPath();x.arc(p.x,p.y,2,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){x.strokeStyle='rgba(201,164,92,'+.18*(1-d/120)+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
var dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<160){x.strokeStyle='rgba(63,182,168,'+.5*(1-dm/160)+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}}
requestAnimationFrame(draw)})()}
var nw=document.querySelector('.net-wrap');if(nw&&!rm)addEventListener('scroll',function(){nw.style.transform='translateY('+Math.min(scrollY*.12,60)+'px)'},{passive:true});
})();
