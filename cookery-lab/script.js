"use strict";
// Every item: [unit, English term, Turkish term, English definition, Turkish explanation,
// fill-in example, real-life situation, teaching note, icon].
const RAW_FACTS=[
[1,"dishwasher","bulaşık makinesi","A machine that washes dirty dishes, pots and pans.","Bulaşıkları, tencereleri ve tavaları yıkayan makine.","We put the dirty plates into the ___ after lunch.","A restaurant needs a machine to clean dishes after guests finish eating.","Dishwasher kelimesi bağlama göre bulaşık makinesi veya bulaşık yıkayan görevli anlamına gelebilir.","▣"],
[1,"oven","fırın","An enclosed appliance that uses heat to cook or bake food.","Yiyecekleri kapalı bir bölmede ısıtarak pişiren cihaz.","The bread is baking in the ___.","A chef needs an enclosed heated appliance to bake a tray of food.","Oven bir fırındır. Açık ocak anlamındaki stove ile aynı şey değildir.","▤"],
[1,"cook","pişirmek; aşçı","To prepare food by applying heat; also a person who prepares food.","Fiil olarak yiyeceği ısıtarak pişirmek; isim olarak aşçı.","We need to ___ the vegetables before serving them.","Someone is heating raw food so it becomes ready to eat.","Cook hem fiil (pişirmek) hem de isim (aşçı) olabilir.","♨"],
[1,"appliances","elektrikli mutfak cihazları","Machines or devices designed to perform particular household or kitchen functions.","Belirli bir işi yapmak için tasarlanmış mutfak makineleri ve cihazları.","Our kitchen has several useful ___ for food preparation.","A supply company sells ovens, dishwashers and similar kitchen machines.","Tekil appliance, çoğul appliances. Fırın ve bulaşık makinesi buna örnektir.","◈"],

[2,"fry cook","kızartma aşçısı","A cook who prepares foods by frying them in oil or a pan.","Yiyecekleri tavada veya yağda kızartarak hazırlayan aşçı.","The ___ is frying eggs for breakfast.","The eggs keep sticking to the frying pan, so this cook checks the pan.","Defterde yumurtaların tavaya yapışmasıyla ilgili doğru görev fry cook olarak işaretlenmiş.","◉"],
[2,"vegetable cook","sebze aşçısı","A cook who prepares and cooks vegetables.","Sebzeleri hazırlayan ve pişiren aşçı.","Ask the ___ whether we should steam the carrots.","The kitchen needs to decide whether carrots should be steamed or boiled.","Steam = buharda pişirmek; boil = kaynatmak/haşlamak.","♧"],
[2,"first cook","birinci aşçı; kıdemli aşçı","A senior cook who can oversee food preparation and assist with leading the kitchen.","Mutfakta yemek hazırlama süreçlerinde sorumluluk üstlenebilen kıdemli aşçı.","The ___ is coordinating the cooks during service.","A senior kitchen cook is organizing the team's preparation work.","Defterde dessert menu cümlesinde first cook işaretli. Ancak tatlıları hazırlayan uzman genellikle pastry chef'tir.","★"],
[2,"broiler cook","ızgara/broiler aşçısı","A cook who prepares food under strong direct heat from a broiler.","Broiler veya üstten yüksek ısıyla pişirme yapan aşçı.","The ___ cannot work because the broiler is broken.","The special high-heat cooking oven is broken, and one cook cannot prepare broiled dishes.","Broil = yiyeceği özellikle üstten gelen yüksek, doğrudan ısıyla pişirmek.","♨"],
[2,"chef","şef; baş aşçı","A professional cook, often responsible for organizing kitchen cooking.","Profesyonel aşçı; mutfak işlerini yöneten şef anlamında da kullanılır.","The ___ checks the food before it is served.","A professional kitchen leader is supervising several cooks.","Chef genel veya yönetici aşçıyı ifade edebilir; belirli uzmanlıklar için pastry chef gibi adlar kullanılır.","✦"],
[2,"pastry chef","pastacı şef; tatlı şefi","A chef who specializes in desserts, pastries and baked sweets.","Tatlılar, hamur işleri ve pastalar konusunda uzman aşçı.","The ___ is preparing the dessert menu.","The team needs a specialist to make cakes and other desserts.","Pastry chef = tatlı ve hamur işi uzmanı; first cook ile karıştırma.","◔"],
[2,"baker","fırıncı","A person who makes bread and other baked goods.","Ekmek ve unlu mamuller pişiren kişi.","The ___ makes fresh bread every morning.","The restaurant needs someone to bake fresh loaves of bread.","Baker çoğunlukla ekmek ve unlu mamuller üzerinde çalışır; fry cook tavada kızartır.","▧"],
[2,"cook's helper","aşçı yardımcısı","A worker who assists cooks with preparation and basic kitchen tasks.","Malzeme hazırlama gibi işlerde aşçıya destek olan mutfak görevlisi.","The ___ helps wash and prepare the vegetables.","The main cook needs someone to assist with basic preparation tasks.","Helper = yardımcı. Cook's helper, vegetable cook ile aynı uzmanlık unvanı değildir.","✚"],

[3,"busser","masa toplayan görevli","A restaurant worker who clears and resets tables.","Restoranda kullanılan tabakları toplayıp masaları tekrar hazırlayan görevli.","The ___ clears the table after the customers leave.","A guest has finished eating, and someone removes the used dishes from the table.","Busser masaları toplar; waitstaff genellikle sipariş alır ve servis yapar.","▥"],
[3,"manager","müdür; yönetici","A person who supervises and manages the restaurant.","Restoran çalışanlarını ve işleyişini yöneten kişi.","The ___ supervises the whole restaurant.","Someone is responsible for the staff, daily operations and organization of the restaurant.","Manager yönetir; host müşterileri karşılar.","◎"],
[3,"front of house","müşteriye açık restoran alanı","The customer-facing public area and service side of a restaurant.","Restoranın müşterilerin gördüğü, yemek yediği ve karşılandığı ön bölümü.","The dining room is part of the ___.","A new employee works in the dining area and customer-facing part of the restaurant.","Front of house fiziksel müşteri alanını ve müşteriyle çalışan ekibi anlatabilir; kitchen genellikle back of house'tur.","⌂"],
[3,"waitstaff","servis personeli; garsonlar","The restaurant employees who take orders and serve food and drinks.","Müşterilerden sipariş alan ve yiyecek-içecek servisi yapan personel.","The ___ take orders and serve dinner.","A group of employees comes to the tables to take orders and bring meals.","Waitstaff topluluk adıdır; tek çalışan için waiter veya waitress gibi sözcükler de kullanılır.","☷"],
[3,"bartender","barmen; bar görevlisi","A person who prepares and serves drinks behind a bar.","Barda içecek hazırlayan ve sunan görevli.","The ___ prepares drinks for the customers.","Someone is mixing beverages and serving them at the bar.","Bartender içecek hazırlar; busser masa toplar.","◈"],
[3,"host","karşılama görevlisi","A person who greets guests and shows them where to sit.","Restorana gelen müşterileri karşılayan ve masalarına yönlendiren kişi.","The ___ welcomes the guests at the door.","A new group walks into the restaurant and needs someone to show them to a table.","Host cinsiyetten bağımsız kullanılabilir; bazı yerlerde hostess de denir.","♙"],

[4,"bench knife","hamur kesici; tezgâh kazıyıcı","A wide, flat, rectangular tool for dividing dough and scraping a work surface.","Hamuru bölmek ve tezgâhı kazımak için kullanılan geniş, dikdörtgen metal araç.","Use the ___ to divide the dough into portions.","The baker wants a broad rectangular blade to scrape flour and divide dough.","Bench knife çoğu zaman bench scraper olarak da adlandırılır. İnce uçlu paring knife değildir.","▰"],
[4,"paring knife","soyma; küçük sebze bıçağı","A small knife with a short pointed blade for peeling and trimming produce.","Sebze ve meyve soyma veya küçük kesimler için kullanılan kısa, sivri uçlu bıçak.","Use a ___ to peel the apple carefully.","A cook needs a short pointed blade to trim a small vegetable.","Paring knife küçük, hassas işler içindir; geniş bench knife ile karıştırma.","⌁"],
[4,"knife","bıçak","A cutting tool with a sharp blade and a handle.","Sapı ve keskin ağzı bulunan kesme aracı.","Be careful: the ___ has a sharp blade.","A cook asks for a general cutting tool with a sharp edge.","Knife genel bıçak adıdır; paring knife ve butcher knife belirli türleridir.","╱"],
[4,"butcher knife","kasap bıçağı","A large, heavy knife designed for cutting and preparing meat.","Et kesmek ve parçalamak için tasarlanmış büyük, ağır bıçak.","The butcher uses a ___ to cut the meat.","The kitchen needs a heavy blade for large cuts of meat.","Butcher = kasap; butcher knife et işlemek için kullanılır.","◥"],
[4,"utensil","mutfak gereci; araç","A tool or implement used for a specific task, especially in cooking.","Özellikle mutfakta belirli bir görevi yapmak için kullanılan araç.","A whisk is a useful kitchen ___.","Someone is asking for the general word for a spoon, whisk or similar kitchen tool.","Utensil, tek bir bıçak türü değil; çeşitli mutfak araçlarının genel adıdır.","✳"],

[5,"measuring cup","ölçü kabı","A marked cup or container used to measure an amount of an ingredient.","Malzemeleri ölçmek için kullanılan işaretli kap.","Use a ___ to measure the flour for the recipe.","A recipe needs exactly one cup of an ingredient, and the cook uses a graduated cup.","Measuring cup özellikle miktar ölçer; scoop daha çok alma ve porsiyonlama aracıdır.","▣"],
[5,"spoon","kaşık","A utensil with a small bowl-shaped head and a handle.","Bir ucunda çukur, yuvarlak kısmı bulunan saplı araç.","Stir the soup with a ___.","A customer needs a simple curved-bowl utensil to eat soup.","Spoon kaşıktır; whisk gibi tel halkalardan oluşmaz.","♧"],
[5,"tongs","maşa","A two-armed tool used to grip, lift and move food.","Yiyeceği kavrayıp kaldırmaya yarayan iki kollu araç.","Use the ___ to pick up the hot food.","The cook must grip and lift food without touching it directly.","Tongs İngilizcede genellikle çoğul biçimde kullanılır; 'a pair of tongs' denir.","⋈"],
[5,"grater","rende","A tool with rough sharp holes or edges for shredding food into small pieces.","Yiyecekleri küçük parçalara veya ince şeritlere ayırmaya yarayan rende.","Use a ___ to shred the cheese.","The chef wants to turn a block of cheese into thin shreds.","Grater rendelemek içindir; cutting board kesme yüzeyidir.","▦"],
[5,"cutting board","kesme tahtası","A flat board that protects a surface while food is being chopped or sliced.","Yiyecek keserken altına konan, tezgâhı koruyan düz tahta.","Put the vegetables on a ___ before chopping.","A cook needs a flat surface to protect the counter while slicing carrots.","Cutting board doğrama yüzeyidir; grater malzemeyi rendelendirir.","▭"],
[5,"whisk","tel çırpıcı","A utensil with wire loops used to beat, mix or stir ingredients.","Tel halkalarıyla malzeme çırpmaya ve karıştırmaya yarayan mutfak gereci.","Beat the eggs with a ___ until smooth.","The chef needs a tool with wire loops to mix eggs quickly.","Whisk özellikle çırpma işinde kullanılır; spoon basitçe karıştırmak için de kullanılır.","✳"],
[5,"scoop","kepçe tipi alma/ölçü aracı","A curved or bowl-shaped tool used to lift, portion or measure ingredients.","Malzeme almak, porsiyonlamak veya ölçmek için kullanılan çukur araç.","Use a ___ to portion the ice cream.","Someone needs to take equal rounded portions of an ingredient.","Scoop porsiyon alabilir; measuring cup çizgi/işaretlerle hacim ölçmeye odaklanır.","◕"]
];

const UNITS=[
{id:1,title:"Kitchen Appliances",subtitle:"Mutfak makineleri",icon:"▤",color:"violet"},
{id:2,title:"Kitchen Staff",subtitle:"Mutfak personeli",icon:"♨",color:"amber"},
{id:3,title:"Restaurant Staff",subtitle:"Restoran çalışanları",icon:"♙",color:"teal"},
{id:4,title:"Knives & Utensils",subtitle:"Bıçaklar ve gereçler",icon:"⌁",color:"pink"},
{id:5,title:"Kitchen Tools",subtitle:"Mutfak araçları",icon:"✳",color:"blue"}
];
const FACTS=RAW_FACTS.map(function(row,index){return {id:"f"+(index+1),unit:row[0],term:row[1],tr:row[2],def:row[3],trDef:row[4],example:row[5],situation:row[6],note:row[7],icon:row[8]};});
function makeOptions(fact,variant){
  var pool=FACTS.filter(function(other){return other.unit===fact.unit&&other.id!==fact.id;});
  var start=(parseInt(fact.id.slice(1),10)*3+variant*2)%pool.length;
  var distractors=[pool[start%pool.length],pool[(start+1)%pool.length],pool[(start+2)%pool.length]];
  var correctAt=(parseInt(fact.id.slice(1),10)+variant*3)%4;
  var choices=[];var di=0;
  for(var i=0;i<4;i++) choices.push((i===correctAt?fact:distractors[di++])[variant===4?"tr":"term"]);
  return {choices:choices,answer:correctAt};
}
const QUESTION_TYPES=["İNGİLİZCE TANIM","TÜRKÇE → İNGİLİZCE","BOŞLUK DOLDURMA","DURUM SORUSU","İNGİLİZCE → TÜRKÇE"];
const QUESTIONS=FACTS.flatMap(function(fact){
  var prompts=[
    "Which word matches the definition?\n“"+fact.def+"”",
    "“"+fact.tr+"” ifadesinin İngilizce karşılığı hangisidir?",
    "Complete the sentence:\n“"+fact.example+"”",
    "Read the situation:\n“"+fact.situation+"”\nWhich English term is correct?",
    "“"+fact.term+"” kelimesinin Türkçe karşılığı hangisidir?"
  ];
  var hints=[
    "Tanımı okuyup en uygun İngilizce terimi seç.",
    "Türkçe anlamı düşün ve İngilizce seçeneği işaretle.",
    "Üç çizginin yerine hangi kelime veya ifade gelmeli?",
    "Gerçek hayattaki duruma uygun kelimeyi seç.",
    "Bu kez kelimenin Türkçe anlamını bul."
  ];
  return prompts.map(function(prompt,v){var opt=makeOptions(fact,v);return {id:fact.id+"q"+v,factId:fact.id,unit:fact.unit,type:QUESTION_TYPES[v],prompt:prompt,hint:hints[v],choices:opt.choices,answer:opt.answer,term:fact.term,tr:fact.tr,def:fact.def,trDef:fact.trDef,note:fact.note};});
});
const STORAGE_KEY="cookery-lab-study-v1";
function loadProgress(){
  var initial={known:[],wrong:[],answered:0,correct:0};
  try{var p=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");if(p&&typeof p==="object")return {known:Array.isArray(p.known)?p.known:[],wrong:Array.isArray(p.wrong)?p.wrong:[],answered:Number(p.answered)||0,correct:Number(p.correct)||0};}catch(e){}
  return initial;
}
var progress=loadProgress();
var session=null;
var activeView="home";
var timerHandle=null;
var flipped=new Set();
const $=function(id){return document.getElementById(id);};
const escapeHtml=function(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});};
function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));}catch(e){}}
function shuffleArray(array){var a=array.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var temp=a[i];a[i]=a[j];a[j]=temp;}return a;}
function renderStats(){
  $("header-learned").textContent=progress.known.length;
  $("metric-questions").textContent=QUESTIONS.length;
  $("metric-answered").textContent=progress.answered;
  $("metric-accuracy").textContent="%"+(progress.answered?Math.round(progress.correct/progress.answered*100):0);
  $("metric-missed").textContent=progress.wrong.length;
}
function renderHome(){
  $("unit-grid").innerHTML=UNITS.map(function(u){
    var words=FACTS.filter(function(f){return f.unit===u.id;}).length;
    var questions=QUESTIONS.filter(function(q){return q.unit===u.id;}).length;
    return '<button type="button" class="unit-card" data-unit="'+u.id+'"><div class="unit-card-top"><span class="unit-num">UNIT '+String(u.id).padStart(2,"0")+'</span><span style="color:#6de0c6;font-size:11px">✦</span></div><span class="unit-icon">'+u.icon+'</span><h3>'+escapeHtml(u.title)+'</h3><p>'+escapeHtml(u.subtitle)+'</p><div class="unit-card-bottom"><span>'+words+' KELİME · '+questions+' SORU</span><span>↗</span></div></button>';
  }).join("");
}
function showView(view){
  activeView=view;
  ["home","study","quiz"].forEach(function(v){$("view-"+v).hidden=v!==view;});
  document.querySelectorAll("[data-nav]").forEach(function(el){el.classList.toggle("active",el.dataset.nav===view&&el.classList.contains("nav-btn"));});
  if(view==="study")renderStudy();
  if(view==="quiz"&&!session){showSetup();}
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderStudy(){
  var term=$("study-search").value.trim().toLocaleLowerCase("tr");
  var unit=$("study-unit").value;
  var matches=FACTS.filter(function(f){return (unit==="all"||String(f.unit)===unit)&&[f.term,f.tr,f.def,f.trDef].join(" ").toLocaleLowerCase("tr").includes(term);});
  $("study-count").textContent=matches.length+" / "+FACTS.length+" kart";
  $("study-empty").hidden=matches.length!==0;
  $("flashcard-grid").innerHTML=matches.map(function(f){
    var isFlipped=flipped.has(f.id),isKnown=progress.known.includes(f.id);
    return '<article class="flashcard'+(isFlipped?' flipped':'')+'"><div class="flashcard-top"><span>UNIT '+String(f.unit).padStart(2,"0")+'</span>'+(isKnown?'<span class="known-pill">✓ ÖĞRENİLDİ</span>':"<span>"+escapeHtml(f.icon)+"</span>")+'</div><button type="button" class="flashcard-main" data-flip="'+f.id+'" aria-label="'+escapeHtml(f.term)+' kartını çevir"><div class="card-term">'+escapeHtml(isFlipped?f.tr:f.term)+'</div><p class="card-description">'+escapeHtml(isFlipped?f.trDef:f.def)+'</p></button><div class="flashcard-footer"><span>'+escapeHtml(isFlipped?"TÜRKÇE AÇIKLAMA":"Görmek için dokun ↻")+'</span><button type="button" class="mark-known'+(isKnown?' is-known':'')+'" data-known="'+f.id+'">'+(isKnown?"✓ Biliyorum":"☆ Öğrendim")+'</button></div></article>';
  }).join("");
}
function showSetup(){
  clearTimer();
  session=null;
  $("quiz-setup").hidden=false;
  $("active-quiz").hidden=true;
  $("quiz-results").hidden=true;
  $("setup-warning").hidden=true;
}
function makeQueue(){
  var unit=$("quiz-unit").value,mode=$("quiz-mode").value;
  var questions=QUESTIONS.filter(function(q){return (unit==="all"||String(q.unit)===unit)&&(mode==="all"||progress.wrong.includes(q.id));});
  var num=$("quiz-count").value;
  if($("quiz-shuffle").checked)questions=shuffleArray(questions);
  if(num!=="all")questions=questions.slice(0,Number(num));
  return questions;
}
function startTest(queue){
  if(!queue.length){$("setup-warning").hidden=false;$("setup-warning").textContent="Bu seçime uygun soru bulunamadı. Başka bir ünite veya tüm sorular modunu seç.";return;}
  clearTimer();
  session={queue:queue,pos:0,correct:0,wrong:0,selected:null,answers:[],timer:parseInt($("quiz-timer").value,10)||0};
  $("quiz-setup").hidden=true;$("active-quiz").hidden=false;$("quiz-results").hidden=true;
  $("setup-warning").hidden=true;
  renderQuestion();
  window.scrollTo({top:0,behavior:"smooth"});
}
function currentQuestion(){return session&&session.queue[session.pos];}
function clearTimer(){if(timerHandle!==null){clearInterval(timerHandle);timerHandle=null;}}
function startQuestionTimer(){
  clearTimer();
  var limit=session.timer; var t=$("quiz-timer-display");
  t.hidden=!limit;if(!limit)return;
  var remaining=limit;
  $("timer-seconds").textContent=remaining;
  t.classList.remove("urgent");
  timerHandle=setInterval(function(){
    if(!session||session.selected!==null){clearTimer();return;}
    remaining-=1;$("timer-seconds").textContent=Math.max(remaining,0);
    t.classList.toggle("urgent",remaining<=5);
    if(remaining<=0){clearTimer();answerQuestion(-1);}
  },1000);
}
function renderQuestion(){
  var q=currentQuestion();if(!q)return;
  session.selected=null;
  var at=session.pos,tot=session.queue.length;
  $("quiz-progress-text").textContent="Soru "+(at+1)+" / "+tot;
  $("quiz-progress-bar").style.width=(at/tot*100)+"%";
  $("question-unit").textContent="UNIT "+String(q.unit).padStart(2,"0");
  $("question-type").textContent=q.type;
  $("question-prompt").textContent=q.prompt;
  $("question-hint").textContent=q.hint;
  $("answer-options").innerHTML=q.choices.map(function(o,i){return '<button type="button" class="answer-option" data-answer="'+i+'"><span class="option-letter">'+String.fromCharCode(65+i)+'</span><span>'+escapeHtml(o)+'</span></button>';}).join("");
  $("answer-feedback").hidden=true;
  $("answer-feedback").classList.remove("is-wrong");
  $("next-question").hidden=true;
  $("next-question").textContent=at===tot-1?"Sonuçları gör →":"Sonraki soru →";
  $("live-score").textContent="✓ "+session.correct+" doğru · ✕ "+session.wrong+" yanlış";
  startQuestionTimer();
}
function answerQuestion(choice){
  if(!session||session.selected!==null)return;
  var q=currentQuestion(),good=(choice===q.answer);
  session.selected=choice;clearTimer();
  if(good){session.correct++;progress.correct++;progress.wrong=progress.wrong.filter(function(id){return id!==q.id;});}
  else{session.wrong++;if(!progress.wrong.includes(q.id))progress.wrong.push(q.id);}
  progress.answered++;
  session.answers.push({q:q,choice:choice,correct:good});
  saveProgress();renderStats();
  Array.from($("answer-options").children).forEach(function(el,i){
    el.disabled=true;
    if(i===q.answer)el.classList.add("correct");
    else if(i===choice)el.classList.add("incorrect");
    else el.classList.add("dimmed");
  });
  var fb=$("answer-feedback");
  fb.hidden=false;fb.classList.toggle("is-wrong",!good);
  var title=good?"✓ Doğru cevap!":choice===-1?"⌛ Süre doldu!":"✕ Yanlış cevap, öğrenelim.";
  fb.innerHTML='<div class="feedback-title">'+title+'</div><div class="feedback-detail">Doğru cevap: <strong>'+escapeHtml(q.choices[q.answer])+'</strong> · '+escapeHtml(q.term)+' = '+escapeHtml(q.tr)+'<br>'+escapeHtml(q.trDef)+'<br><em>'+escapeHtml(q.note)+'</em></div>';
  $("live-score").textContent="✓ "+session.correct+" doğru · ✕ "+session.wrong+" yanlış";
  $("next-question").hidden=false;
}
function nextQuestion(){
  if(!session||session.selected===null)return;
  if(session.pos>=session.queue.length-1){renderResults();return;}
  session.pos++;renderQuestion();window.scrollTo({top:0,behavior:"smooth"});
}
function renderResults(){
  clearTimer();
  $("active-quiz").hidden=true;$("quiz-results").hidden=false;
  var total=session.answers.length,percent=Math.round(session.correct/total*100);
  $("result-percent").textContent=percent+"%";
  $("result-correct").textContent=session.correct;
  $("result-wrong").textContent=session.wrong;
  $("result-total").textContent=total;
  $("result-percent").parentElement.style.setProperty("--result-angle",(percent*3.6)+"deg");
  var wrong=session.answers.filter(function(a){return !a.correct;});
  $("retry-wrong").disabled=wrong.length===0;
  $("review-count").textContent=wrong.length+" yanlış · "+total+" soru";
  var ordered=wrong.concat(session.answers.filter(function(a){return a.correct;}));
  $("review-list").innerHTML=ordered.map(function(a){
    return '<div class="review-item"><span class="review-status '+(a.correct?"good":"bad")+'">'+(a.correct?"✓":"✕")+'</span><div><h4>'+escapeHtml(a.q.prompt).replace(/\n/g," ")+'</h4><p>Doğru: <strong>'+escapeHtml(a.q.choices[a.q.answer])+'</strong> · Senin cevabın: '+escapeHtml(a.choice===-1?"Süre doldu / boş":a.q.choices[a.choice])+'<br>'+escapeHtml(a.q.trDef)+'</p></div></div>';
  }).join("");
  window.scrollTo({top:0,behavior:"smooth"});
}
function startMissedFromResult(){
  if(!session)return;
  var ids=session.answers.filter(function(a){return !a.correct;}).map(function(a){return a.q.id;});
  if(!ids.length)return;
  var selected=QUESTIONS.filter(function(q){return ids.includes(q.id);});
  startTest(shuffleArray(selected));
}
document.addEventListener("click",function(e){
  var nav=e.target.closest("[data-nav]");
  if(nav){e.preventDefault();showView(nav.dataset.nav);return;}
  var unit=e.target.closest("[data-unit]");
  if(unit){$("quiz-unit").value=unit.dataset.unit;showSetup();showView("quiz");return;}
  var flip=e.target.closest("[data-flip]");
  if(flip){if(flipped.has(flip.dataset.flip))flipped.delete(flip.dataset.flip);else flipped.add(flip.dataset.flip);renderStudy();return;}
  var known=e.target.closest("[data-known]");
  if(known){
    if(progress.known.includes(known.dataset.known))progress.known=progress.known.filter(function(id){return id!==known.dataset.known;});
    else progress.known.push(known.dataset.known);
    saveProgress();renderStats();renderStudy();return;
  }
  var ans=e.target.closest("[data-answer]");
  if(ans&&activeView==="quiz"){answerQuestion(Number(ans.dataset.answer));}
});
$("hero-start").addEventListener("click",function(){showView("quiz");});
$("hero-study").addEventListener("click",function(){showView("study");});
$("study-search").addEventListener("input",renderStudy);
$("study-unit").addEventListener("change",renderStudy);
$("start-test").addEventListener("click",function(){startTest(makeQueue());});
$("next-question").addEventListener("click",nextQuestion);
$("new-test").addEventListener("click",showSetup);
$("retry-wrong").addEventListener("click",startMissedFromResult);
$("exit-quiz").addEventListener("click",function(){clearTimer();showSetup();});
document.addEventListener("keydown",function(e){
  if(activeView!=="quiz"||!session||$("active-quiz").hidden)return;
  if(/^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(document.activeElement.tagName)&&document.activeElement!==document.body)return;
  if(session.selected===null&&/^[1-4]$/.test(e.key)){answerQuestion(Number(e.key)-1);}
  else if(session.selected!==null&&e.key==="Enter"){e.preventDefault();nextQuestion();}
});
window.addEventListener("pagehide",clearTimer);
renderHome();renderStats();renderStudy();showView("home");
console.info("Cookery Lab loaded:",FACTS.length,"words;",QUESTIONS.length,"questions.");