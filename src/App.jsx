<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Скопируй App.jsx</title>
<style>
  body { margin: 0; background: #0d0a06; color: #f0e6d0; font-family: sans-serif; padding: 1rem; }
  h2 { color: #D4A017; margin-bottom: 0.5rem; }
  p { color: #7a6a4a; font-size: 0.9rem; margin-bottom: 1rem; }
  button {
    display: block; width: 100%; padding: 1rem;
    background: linear-gradient(135deg, #D4A017, #a07010);
    border: none; border-radius: 2rem;
    color: #0d0a06; font-weight: bold; font-size: 1.1rem;
    cursor: pointer; margin-bottom: 1rem;
  }
  textarea {
    width: 100%; height: 300px;
    background: #1a1208; border: 1px solid #3a2a10;
    color: #f0e6d0; font-size: 0.7rem;
    padding: 0.5rem; border-radius: 8px;
    box-sizing: border-box;
  }
  .ok { color: #4a9c4e; text-align: center; font-size: 1.1rem; margin-top: 0.5rem; display: none; }
</style>
</head>
<body>
<h2>🍺 Шаг 4 — Последний файл</h2>
<p>1. Нажми кнопку ниже — весь код скопируется<br/>
2. Иди на GitHub, создай файл <b>src/App.jsx</b><br/>
3. Вставь в большое поле и сохрани</p>
<button onclick="copyCode()">📋 Скопировать весь код App.jsx</button>
<div class="ok" id="ok">✅ Скопировано! Теперь вставляй на GitHub</div>
<p style="margin-top:1rem; font-size:0.8rem;">Или вручную выдели весь текст ниже:</p>
<textarea id="code" readonly></textarea>
<script>
const code = `import { useState, useEffect, useRef } from "react";

const T = {
  ru: {
    siteName: "ХмельБар", tagline: "Рецепты • Настойки • Сочетания",
    hero: "Искусство домашнего\\nпивоварения", heroSub: "Рецепты, настойки и идеальные сочетания — от сообщества",
    navCatalog: "Каталог", navAI: "AI Сомелье", navChat: "Чат", navAdd: "+ Рецепт", navProfile: "Кабинет",
    login: "Войти", logout: "Выйти", loginTitle: "Вход в ХмельБар", registerTitle: "Регистрация",
    loginBtn: "Войти →", registerBtn: "Зарегистрироваться →",
    emailLabel: "Email", passwordLabel: "Пароль", nameLabel: "Имя", countryLabel: "Страна",
    loginTab: "Войти", registerTab: "Создать аккаунт", testHint: "Тест: alex@beer.ru / 123456",
    cancel: "Отмена", close: "Закрыть",
    allFilter: "Все", beerFilter: "🍺 Пиво", tinctureFilter: "🌿 Настойки", snackFilter: "🍽 Закуски",
    chatTitle: "Общий чат", chatSub: "Общайся с пивоварами со всего мира",
    chatPlaceholder: "Напиши сообщение...", chatSend: "Отправить",
    chatLoginPrompt: "Войди в аккаунт, чтобы писать в чат", chatLoginBtn: "Войти и написать",
    aiTitle: "AI Сомелье", aiSub: "Спроси что к чему подходит",
    aiPlaceholder: "Задай вопрос сомелье...", aiAsk: "Спросить ✨", aiThinking: "Думаю...",
    aiLabel: "🤖 Ответ сомелье",
    addTitle: "Поделиться рецептом", addSub: "Твой рецепт увидят все",
    titleLabel: "Название рецепта", typeLabel: "Тип", descLabel: "Описание",
    ingrLabel: "Ингредиенты (через запятую)", timeLabel: "Время", strengthLabel: "Крепость",
    publishBtn: "Опубликовать рецепт 🍺",
    profileSince: "Участник с", myRecipes: "Мои рецепты",
    noRecipes: "Ты ещё не добавил рецептов.", addFirst: "Добавить первый →",
    recipesCount: "Рецептов", likesCount: "Лайков",
    pairings: "Идеальные сочетания", ingredients: "Ингредиенты",
    askAIAbout: "Спросить AI о сочетаниях ✨", addedMsg: "Рецепт опубликован! 🎉",
    fillAll: "Заполни все поля", shortPass: "Пароль минимум 6 символов",
    emailTaken: "Email уже зарегистрирован", wrongCreds: "Неверный email или пароль",
    beer: "Пиво", tincture: "Настойка", snack: "Закуска",
    timeShort: "Время", strengthShort: "Крепость", onlineNow: "онлайн",
    suggestQ: ["Что подать к тёмному портеру?","Как улучшить пшеничное пиво?","Закуска к вишнёвой настойке","Рецепт медовухи для новичка"],
  },
  en: {
    siteName: "HopBar", tagline: "Recipes • Tinctures • Pairings",
    hero: "The Art of Home\\nBrewing", heroSub: "Recipes, tinctures and perfect pairings — from our community",
    navCatalog: "Catalog", navAI: "AI Sommelier", navChat: "Chat", navAdd: "+ Recipe", navProfile: "Profile",
    login: "Sign in", logout: "Sign out", loginTitle: "Sign in to HopBar", registerTitle: "Create account",
    loginBtn: "Sign in →", registerBtn: "Create account →",
    emailLabel: "Email", passwordLabel: "Password", nameLabel: "Name", countryLabel: "Country",
    loginTab: "Sign in", registerTab: "Create account", testHint: "Test: alex@beer.ru / 123456",
    cancel: "Cancel", close: "Close",
    allFilter: "All", beerFilter: "🍺 Beer", tinctureFilter: "🌿 Tinctures", snackFilter: "🍽 Snacks",
    chatTitle: "Community Chat", chatSub: "Talk with brewers worldwide",
    chatPlaceholder: "Write a message...", chatSend: "Send",
    chatLoginPrompt: "Sign in to join the chat", chatLoginBtn: "Sign in to chat",
    aiTitle: "AI Sommelier", aiSub: "Ask what pairs with what",
    aiPlaceholder: "Ask the sommelier...", aiAsk: "Ask ✨", aiThinking: "Thinking...",
    aiLabel: "🤖 Sommelier says",
    addTitle: "Share a Recipe", addSub: "Your recipe will be visible to all",
    titleLabel: "Recipe name", typeLabel: "Type", descLabel: "Description",
    ingrLabel: "Ingredients (comma separated)", timeLabel: "Time", strengthLabel: "Strength",
    publishBtn: "Publish recipe 🍺",
    profileSince: "Member since", myRecipes: "My Recipes",
    noRecipes: "You haven't added any recipes yet.", addFirst: "Add your first →",
    recipesCount: "Recipes", likesCount: "Likes",
    pairings: "Perfect Pairings", ingredients: "Ingredients",
    askAIAbout: "Ask AI about pairings ✨", addedMsg: "Recipe published! 🎉",
    fillAll: "Please fill all fields", shortPass: "Password must be at least 6 characters",
    emailTaken: "Email already registered", wrongCreds: "Wrong email or password",
    beer: "Beer", tincture: "Tincture", snack: "Snack",
    timeShort: "Time", strengthShort: "Strength", onlineNow: "online",
    suggestQ: ["What to serve with dark porter?","How to improve wheat beer?","Snack for cherry tincture","Mead recipe for beginners"],
  }
};

const COUNTRIES = [
  {code:"ru",flag:"🇷🇺",name:"Россия / Russia"},{code:"ua",flag:"🇺🇦",name:"Украина / Ukraine"},
  {code:"by",flag:"🇧🇾",name:"Беларусь / Belarus"},{code:"kz",flag:"🇰🇿",name:"Казахстан / Kazakhstan"},
  {code:"de",flag:"🇩🇪",name:"Германия / Germany"},{code:"us",flag:"🇺🇸",name:"США / USA"},
  {code:"gb",flag:"🇬🇧",name:"Великобритания / UK"},{code:"pl",flag:"🇵🇱",name:"Польша / Poland"},
  {code:"cz",flag:"🇨🇿",name:"Чехия / Czech Rep."},{code:"other",flag:"🌍",name:"Другая / Other"},
];

const RECIPES = [
  {id:1,type:"beer",title:"Тёмный мёд",subtitle:"Медовый портер",desc:"Густой тёмный портер с нотками карамели и мёда.",emoji:"🍺",tags:["Портер","Мёд"],pairings:["Копчёные рёбра","Горгонзола","Шоколад"],time:"14 дней",strength:"6.2%",author:"Мастер Алексей",avatar:"🧔",country:"ru",ingredients:["Тёмный солод 3кг","Мёд 500г","Хмель Magnum 30г","Дрожжи S-04"],likes:24,likedBy:[]},
  {id:2,type:"beer",title:"Пшеничное лето",subtitle:"Hefeweizen",desc:"Лёгкое пшеничное с ароматом банана и гвоздики.",emoji:"🌾",tags:["Пшеничное","Лёгкое"],pairings:["Мидии","Греческий салат","Лимонный тарт"],time:"10 дней",strength:"5.0%",author:"Варщик Игорь",avatar:"👨‍🍳",country:"de",ingredients:["Пшеничный солод 2кг","Ячменный солод 1кг","Хмель Hallertau 20г","Дрожжи WB-06"],likes:18,likedBy:[]},
  {id:3,type:"tincture",title:"Кедровый лес",subtitle:"Настойка на кедре",desc:"Смолистая настойка с ароматом хвои и ванили.",emoji:"🌲",tags:["Хвойная","Зимняя"],pairings:["Вяленое мясо","Твёрдый сыр","Грибы"],time:"21 день",strength:"45%",author:"Таёжник Сергей",avatar:"🧑‍🌾",country:"ru",ingredients:["Водка 0.5л","Кедровые орешки 100г","Ваниль 1 стручок","Корица 1 палочка"],likes:31,likedBy:[]},
  {id:4,type:"snack",title:"Луковые кольца",subtitle:"В пивном кляре",desc:"Золотистые кольца — идеальная закуска к бокалу.",emoji:"🧅",tags:["Хрустящее","Классика"],pairings:["Светлый лагер","Пшеничное","Айоли"],time:"20 мин",strength:null,author:"Повар Наташа",avatar:"👩‍🍳",country:"by",ingredients:["Лук 3шт","Мука 200г","Пиво 300мл","Паприка, соль"],likes:42,likedBy:[]},
];

const CHAT_INIT = [
  {id:1,author:"Мастер Алексей",avatar:"🧔",country:"ru",text:"Всем привет! Сегодня поставил новый портер 🍺",time:"14:22",likes:3,likedBy:[]},
  {id:2,author:"Варщик Игорь",avatar:"👨‍🍳",country:"de",text:"Алексей, поделись рецептом!",time:"14:25",likes:1,likedBy:[]},
  {id:3,author:"Таёжник Сергей",avatar:"🧑‍🌾",country:"ru",text:"Кедровую настойку выдержал 30 дней — отлично! 🌲",time:"14:31",likes:5,likedBy:[]},
  {id:4,author:"Повар Наташа",avatar:"👩‍🍳",country:"by",text:"К настойке идеально — маринованные грибочки!",time:"14:45",likes:4,likedBy:[]},
];

const typeColor = t => t==="beer"?"#D4A017":t==="tincture"?"#4a9c4e":"#c0732a";
const getFlag = code => COUNTRIES.find(c=>c.code===code)?.flag||"🌍";

export default function App() {
  const [lang,setLang]=useState("ru");
  const t=T[lang];
  const [tab,setTab]=useState("catalog");
  const [filter,setFilter]=useState("all");
  const [selected,setSelected]=useState(null);
  const [user,setUser]=useState(null);
  const [showAuth,setShowAuth]=useState(false);
  const [authMode,setAuthMode]=useState("login");
  const [recipes,setRecipes]=useState(RECIPES);
  const [chatMsgs,setChatMsgs]=useState(CHAT_INIT);
  const [chatInput,setChatInput]=useState("");
  const [users,setUsers]=useState([{id:1,name:"Мастер Алексей",email:"alex@beer.ru",password:"123456",avatar:"🧔",country:"ru",joined:"Январь 2024"}]);
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [country,setCountry]=useState("ru"); const [authError,setAuthError]=useState("");
  const [newTitle,setNewTitle]=useState(""); const [newType,setNewType]=useState("beer");
  const [newDesc,setNewDesc]=useState(""); const [newIngr,setNewIngr]=useState("");
  const [newStrength,setNewStrength]=useState(""); const [newTime,setNewTime]=useState("");
  const [addedMsg,setAddedMsg]=useState("");
  const [aiQuery,setAiQuery]=useState(""); const [aiResponse,setAiResponse]=useState(""); const [aiLoading,setAiLoading]=useState(false);
  const chatEndRef=useRef(null);
  const filtered=filter==="all"?recipes:recipes.filter(r=>r.type===filter);
  useEffect(()=>{chatEndRef.current?.scrollIntoView({behavior:"smooth"});},[chatMsgs]);
  const now=()=>new Date().toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit"});

  const handleAuth=()=>{
    setAuthError("");
    if(authMode==="register"){
      if(!name.trim()||!email.trim()||!password.trim()){setAuthError(t.fillAll);return;}
      if(password.length<6){setAuthError(t.shortPass);return;}
      if(users.find(u=>u.email===email)){setAuthError(t.emailTaken);return;}
      const u={id:users.length+1,name,email,password,avatar:"👤",country,joined:"2026"};
      setUsers([...users,u]);setUser(u);setShowAuth(false);setName("");setEmail("");setPassword("");
    } else {
      const found=users.find(u=>u.email===email&&u.password===password);
      if(!found){setAuthError(t.wrongCreds);return;}
      setUser(found);setShowAuth(false);setEmail("");setPassword("");
    }
  };

  const sendChat=()=>{
    if(!chatInput.trim()||!user)return;
    setChatMsgs([...chatMsgs,{id:Date.now(),author:user.name,avatar:user.avatar,country:user.country,text:chatInput.trim(),time:now(),likes:0,likedBy:[]}]);
    setChatInput("");
  };

  const likeChatMsg=id=>{
    if(!user){setShowAuth(true);return;}
    setChatMsgs(chatMsgs.map(m=>{
      if(m.id!==id)return m;
      const liked=m.likedBy.includes(user.id);
      return {...m,likes:liked?m.likes-1:m.likes+1,likedBy:liked?m.likedBy.filter(x=>x!==user.id):[...m.likedBy,user.id]};
    }));
  };

  const likeRecipe=(id,e)=>{
    e.stopPropagation();
    if(!user){setShowAuth(true);return;}
    setRecipes(recipes.map(r=>{
      if(r.id!==id)return r;
      const liked=r.likedBy.includes(user.id);
      return {...r,likes:liked?r.likes-1:r.likes+1,likedBy:liked?r.likedBy.filter(x=>x!==user.id):[...r.likedBy,user.id]};
    }));
  };

  const handleAddRecipe=()=>{
    if(!newTitle.trim()||!newDesc.trim())return;
    setRecipes([{id:Date.now(),type:newType,title:newTitle,
      subtitle:newType==="beer"?"Авторский рецепт":newType==="tincture"?"Настойка":"Закуска",
      desc:newDesc,emoji:newType==="beer"?"🍺":newType==="tincture"?"🌿":"🍽",
      tags:[t[newType]],pairings:["Уточняется"],time:newTime||"—",strength:newStrength||null,
      author:user.name,avatar:user.avatar,country:user.country,
      ingredients:newIngr.split(",").map(s=>s.trim()).filter(Boolean),likes:0,likedBy:[],
    },...recipes]);
    setNewTitle("");setNewDesc("");setNewIngr("");setNewStrength("");setNewTime("");
    setAddedMsg(t.addedMsg);setTimeout(()=>setAddedMsg(""),3000);setTab("catalog");
  };

  const askAI=async()=>{
    if(!aiQuery.trim())return;
    setAiLoading(true);setAiResponse("");
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,
          system:"You are an expert sommelier and master brewer. Help find perfect pairings for beer and tinctures. Be enthusiastic. Respond in "+( lang==="ru"?"Russian":"English")+".",
          messages:[{role:"user",content:aiQuery}]}),
      });
      const data=await res.json();
      setAiResponse(data.content?.[0]?.text||"...");
    }catch{setAiResponse("Ошибка соединения.");}
    setAiLoading(false);
  };

  const inp=(v,s,tp,p)=><input type={tp||"text"} value={v} onChange={e=>s(e.target.value)} placeholder={p} style={{width:"100%",background:"rgba(240,230,208,0.05)",border:"1px solid rgba(240,230,208,0.12)",borderRadius:"8px",padding:"0.65rem 0.9rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}/>;
  const lbl=(text)=><label style={{display:"block",fontSize:"0.72rem",color:"#9a8a6a",marginBottom:"0.3rem",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"sans-serif"}}>{text}</label>;
  const fld=(l,v,s,p,tp)=><div style={{marginBottom:"1rem"}}>{lbl(l)}{inp(v,s,tp,p)}</div>;

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#0d0a06,#1a1108,#0a120a)",fontFamily:"Georgia,serif",color:"#f0e6d0",overflowX:"hidden"}}>
      <header style={{position:"sticky",top:0,zIndex:50,padding:"0 1.25rem",borderBottom:"1px solid rgba(212,160,23,0.15)",background:"rgba(10,8,4,0.94)",backdropFilter:"blur(14px)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.5rem"}}>
        <div style={{padding:"0.8rem 0"}}>
          <div style={{fontSize:"1.4rem",fontWeight:"bold",fontStyle:"italic",background:"linear-gradient(90deg,#D4A017,#f0c040)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>🍺 {t.siteName}</div>
          <div style={{fontSize:"0.65rem",color:"#5a4a2a",letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"sans-serif"}}>{t.tagline}</div>
        </div>
        <div style={{display:"flex",gap:"0.35rem",alignItems:"center",flexWrap:"wrap"}}>
          {[["catalog",t.navCatalog],["ai",t.navAI],["chat",t.navChat],["add",t.navAdd],["profile",t.navProfile]].map(([id,label])=>(
            <button key={id} onClick={()=>{if(id==="add"&&!user){setShowAuth(true);return;}setTab(id);}} style={{padding:"0.4rem 0.85rem",borderRadius:"2rem",fontFamily:"inherit",fontSize:"0.78rem",cursor:"pointer",border:tab===id?"1px solid #D4A017":"1px solid rgba(212,160,23,0.12)",background:tab===id?"rgba(212,160,23,0.14)":"transparent",color:tab===id?"#D4A017":"#7a6a4a"}}>
              {label}{id==="chat"&&<span style={{marginLeft:"0.3rem",background:"rgba(74,156,78,0.3)",color:"#6ab870",fontSize:"0.65rem",padding:"0.1rem 0.35rem",borderRadius:"1rem"}}>{chatMsgs.length}</span>}
            </button>
          ))}
          <button onClick={()=>setLang(l=>l==="ru"?"en":"ru")} style={{padding:"0.35rem 0.7rem",borderRadius:"2rem",fontFamily:"sans-serif",fontSize:"0.75rem",cursor:"pointer",border:"1px solid rgba(240,230,208,0.15)",background:"rgba(240,230,208,0.05)",color:"#9a8a6a"}}>{lang==="ru"?"EN 🌐":"RU 🌐"}</button>
          {user?(
            <div style={{display:"flex",alignItems:"center",gap:"0.4rem",padding:"0.3rem 0.7rem",background:"rgba(212,160,23,0.1)",borderRadius:"2rem",border:"1px solid rgba(212,160,23,0.18)"}}>
              <span>{user.avatar}</span><span style={{fontSize:"0.7rem"}}>{getFlag(user.country)}</span>
              <span style={{fontSize:"0.78rem",color:"#D4A017"}}>{user.name.split(" ")[0]}</span>
              <button onClick={()=>setUser(null)} style={{background:"none",border:"none",color:"#3a3020",cursor:"pointer",fontSize:"0.75rem"}}>✕</button>
            </div>
          ):(
            <button onClick={()=>setShowAuth(true)} style={{padding:"0.4rem 1rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.78rem",cursor:"pointer",fontFamily:"inherit"}}>{t.login}</button>
          )}
        </div>
      </header>

      <main style={{maxWidth:"1100px",margin:"0 auto",padding:"1.75rem 1.25rem"}}>
        {tab==="catalog"&&(
          <div>
            <div style={{textAlign:"center",marginBottom:"2rem"}}>
              <h1 style={{fontSize:"clamp(1.7rem,5vw,3.2rem)",fontWeight:"bold",lineHeight:1.1,marginBottom:"0.6rem",background:"linear-gradient(180deg,#f0e6d0,#D4A017)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",whiteSpace:"pre-line"}}>{t.hero}</h1>
              <p style={{color:"#7a6a4a",fontSize:"0.9rem"}}>{t.heroSub}</p>
            </div>
            {addedMsg&&<div style={{background:"rgba(74,156,78,0.12)",border:"1px solid rgba(74,156,78,0.35)",borderRadius:"10px",padding:"0.65rem 1rem",marginBottom:"1.25rem",color:"#6ab870",textAlign:"center"}}>{addedMsg}</div>}
            <div style={{display:"flex",gap:"0.5rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
              {[["all",t.allFilter],["beer",t.beerFilter],["tincture",t.tinctureFilter],["snack",t.snackFilter]].map(([f,l])=>(
                <button key={f} onClick={()=>setFilter(f)} style={{padding:"0.4rem 1.1rem",borderRadius:"2rem",cursor:"pointer",fontFamily:"inherit",fontSize:"0.82rem",border:filter===f?"1px solid #D4A017":"1px solid rgba(240,230,208,0.1)",background:filter===f?"rgba(212,160,23,0.16)":"rgba(240,230,208,0.03)",color:filter===f?"#D4A017":"#7a6a4a"}}>{l}</button>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:"1.1rem"}}>
              {filtered.map(r=>(
                <div key={r.id} onClick={()=>setSelected(r)} style={{background:"rgba(240,230,208,0.04)",border:"1px solid rgba(240,230,208,0.08)",borderRadius:"14px",padding:"1.2rem",cursor:"pointer",transition:"all 0.22s",position:"relative",overflow:"hidden"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=typeColor(r.type)+"55";e.currentTarget.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(240,230,208,0.08)";e.currentTarget.style.transform="none";}}>
                  <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,"+typeColor(r.type)+",transparent)"}}/>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
                      <span style={{fontSize:"0.65rem",textTransform:"uppercase",color:typeColor(r.type),fontFamily:"sans-serif"}}>{t[r.type]}</span>
                      <span>{getFlag(r.country)}</span>
                    </div>
                    <span style={{fontSize:"1.5rem"}}>{r.emoji}</span>
                  </div>
                  <h3 style={{fontSize:"1.1rem",marginBottom:"0.2rem"}}>{r.title}</h3>
                  <p style={{fontSize:"0.76rem",color:typeColor(r.type),fontStyle:"italic",marginBottom:"0.55rem"}}>{r.subtitle}</p>
                  <p style={{fontSize:"0.82rem",color:"#7a6a4a",lineHeight:1.5,marginBottom:"0.9rem"}}>{r.desc}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.35rem"}}>
                      <span>{r.avatar}</span><span style={{fontSize:"0.72rem",color:"#4a4030"}}>{r.author}</span>
                    </div>
                    <button onClick={e=>likeRecipe(r.id,e)} style={{background:r.likedBy?.includes(user?.id)?"rgba(212,160,23,0.2)":"rgba(212,160,23,0.07)",border:"1px solid rgba(212,160,23,0.2)",borderRadius:"2rem",padding:"0.22rem 0.65rem",color:"#D4A017",fontSize:"0.78rem",cursor:"pointer",fontFamily:"inherit"}}>
                      {r.likedBy?.includes(user?.id)?"♥":"♡"} {r.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==="chat"&&(
          <div style={{maxWidth:"700px",margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
              <h2 style={{fontSize:"1.7rem",color:"#D4A017",marginBottom:"0.3rem"}}>💬 {t.chatTitle}</h2>
              <p style={{color:"#7a6a4a",fontSize:"0.88rem"}}>{t.chatSub}</p>
            </div>
            <div style={{background:"rgba(240,230,208,0.03)",border:"1px solid rgba(240,230,208,0.08)",borderRadius:"16px",overflow:"hidden"}}>
              <div style={{padding:"0.6rem 1rem",borderBottom:"1px solid rgba(240,230,208,0.07)",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                <div style={{width:"7px",height:"7px",borderRadius:"50%",background:"#4a9c4e",boxShadow:"0 0 6px #4a9c4e"}}/>
                <span style={{fontSize:"0.75rem",color:"#4a9c4e",fontFamily:"sans-serif"}}>{users.length} {t.onlineNow}</span>
                <div style={{marginLeft:"auto",display:"flex",gap:"0.25rem"}}>{users.map(u=><span key={u.id}>{u.avatar}</span>)}</div>
              </div>
              <div style={{height:"350px",overflowY:"auto",padding:"1rem",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
                {chatMsgs.map(m=>(
                  <div key={m.id} style={{display:"flex",gap:"0.65rem"}}>
                    <div style={{fontSize:"1.5rem",flexShrink:0}}>{m.avatar}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",alignItems:"center",gap:"0.4rem",marginBottom:"0.25rem",flexWrap:"wrap"}}>
                        <span style={{fontSize:"0.82rem",fontWeight:"bold",color:"#D4A017"}}>{m.author}</span>
                        <span>{getFlag(m.country)}</span>
                        <span style={{fontSize:"0.7rem",color:"#3a3020",fontFamily:"sans-serif"}}>{m.time}</span>
                      </div>
                      <div style={{fontSize:"0.88rem",color:"#c0b090",background:"rgba(240,230,208,0.04)",borderRadius:"0 10px 10px 10px",padding:"0.5rem 0.75rem",display:"inline-block"}}>{m.text}</div>
                      <button onClick={()=>likeChatMsg(m.id)} style={{display:"block",marginTop:"0.25rem",background:"none",border:"none",color:m.likedBy?.includes(user?.id)?"#D4A017":"#3a3020",fontSize:"0.75rem",cursor:"pointer",fontFamily:"inherit"}}>
                        {m.likedBy?.includes(user?.id)?"♥":"♡"} {m.likes}
                      </button>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef}/>
              </div>
              <div style={{padding:"0.75rem 1rem",borderTop:"1px solid rgba(240,230,208,0.07)"}}>
                {user?(
                  <div style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
                    <span style={{fontSize:"1.2rem"}}>{user.avatar}</span>
                    <input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder={t.chatPlaceholder} style={{flex:1,background:"rgba(240,230,208,0.05)",border:"1px solid rgba(240,230,208,0.12)",borderRadius:"2rem",padding:"0.55rem 1rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",outline:"none"}}/>
                    <button onClick={sendChat} style={{padding:"0.55rem 1.1rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.82rem",cursor:"pointer",fontFamily:"inherit"}}>{t.chatSend}</button>
                  </div>
                ):(
                  <div style={{textAlign:"center",padding:"0.5rem"}}>
                    <p style={{color:"#5a4a30",fontSize:"0.85rem",marginBottom:"0.6rem"}}>{t.chatLoginPrompt}</p>
                    <button onClick={()=>setShowAuth(true)} style={{padding:"0.5rem 1.5rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.85rem",cursor:"pointer",fontFamily:"inherit"}}>{t.chatLoginBtn}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {tab==="ai"&&(
          <div style={{maxWidth:"620px",margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:"1.75rem"}}>
              <div style={{fontSize:"2.2rem",marginBottom:"0.35rem"}}>🤖🍺</div>
              <h2 style={{fontSize:"1.7rem",color:"#D4A017",marginBottom:"0.3rem"}}>{t.aiTitle}</h2>
              <p style={{color:"#7a6a4a",fontSize:"0.88rem"}}>{t.aiSub}</p>
            </div>
            <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1.1rem"}}>
              {t.suggestQ.map(q=><button key={q} onClick={()=>setAiQuery(q)} style={{padding:"0.32rem 0.85rem",borderRadius:"2rem",fontSize:"0.76rem",border:"1px solid rgba(212,160,23,0.22)",background:"rgba(212,160,23,0.05)",color:"#b08030",cursor:"pointer",fontFamily:"inherit"}}>{q}</button>)}
            </div>
            <div style={{background:"rgba(240,230,208,0.04)",border:"1px solid rgba(212,160,23,0.15)",borderRadius:"14px",padding:"1.1rem"}}>
              <textarea value={aiQuery} onChange={e=>setAiQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),askAI())} placeholder={t.aiPlaceholder} rows={3} style={{width:"100%",background:"transparent",border:"1px solid rgba(240,230,208,0.1)",borderRadius:"8px",padding:"0.65rem 0.9rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",resize:"none",outline:"none",boxSizing:"border-box"}}/>
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:"0.55rem"}}>
                <button onClick={askAI} disabled={aiLoading||!aiQuery.trim()} style={{padding:"0.5rem 1.4rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",cursor:"pointer",fontSize:"0.85rem",fontFamily:"inherit",opacity:aiLoading?0.6:1}}>{aiLoading?t.aiThinking:t.aiAsk}</button>
              </div>
            </div>
            {aiLoading&&<div style={{textAlign:"center",marginTop:"1.25rem"}}><div style={{fontSize:"1.6rem",display:"inline-block",animation:"spin 1s linear infinite"}}>🍺</div></div>}
            {aiResponse&&<div style={{marginTop:"1.1rem",background:"rgba(74,156,78,0.06)",border:"1px solid rgba(74,156,78,0.22)",borderRadius:"14px",padding:"1.1rem"}}><div style={{fontSize:"0.68rem",color:"#4a9c4e",marginBottom:"0.5rem",textTransform:"uppercase",fontFamily:"sans-serif"}}>{t.aiLabel}</div><div style={{lineHeight:1.7,color:"#d0c4a0",fontSize:"0.9rem",whiteSpace:"pre-wrap"}}>{aiResponse}</div></div>}
          </div>
        )}

        {tab==="add"&&user&&(
          <div style={{maxWidth:"520px",margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
              <h2 style={{fontSize:"1.7rem",color:"#D4A017",marginBottom:"0.3rem"}}>{t.addTitle}</h2>
              <p style={{color:"#7a6a4a",fontSize:"0.88rem"}}>{t.addSub}</p>
            </div>
            <div style={{background:"rgba(240,230,208,0.04)",border:"1px solid rgba(240,230,208,0.08)",borderRadius:"16px",padding:"1.5rem"}}>
              {fld(t.titleLabel,newTitle,setNewTitle,"Имбирный эль")}
              <div style={{marginBottom:"1rem"}}>
                {lbl(t.typeLabel)}
                <div style={{display:"flex",gap:"0.4rem"}}>
                  {[["beer","🍺 "+t.beer],["tincture","🌿 "+t.tincture],["snack","🍽 "+t.snack]].map(([v,l])=>(
                    <button key={v} onClick={()=>setNewType(v)} style={{flex:1,padding:"0.45rem",borderRadius:"8px",fontFamily:"inherit",fontSize:"0.78rem",cursor:"pointer",border:newType===v?"1px solid "+typeColor(v):"1px solid rgba(240,230,208,0.1)",background:newType===v?"rgba(212,160,23,0.12)":"transparent",color:newType===v?typeColor(v):"#7a6a4a"}}>{l}</button>
                  ))}
                </div>
              </div>
              <div style={{marginBottom:"1rem"}}>{lbl(t.descLabel)}<textarea value={newDesc} onChange={e=>setNewDesc(e.target.value)} placeholder="Вкус и аромат..." rows={3} style={{width:"100%",background:"rgba(240,230,208,0.05)",border:"1px solid rgba(240,230,208,0.12)",borderRadius:"8px",padding:"0.65rem 0.9rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",resize:"none",outline:"none",boxSizing:"border-box"}}/></div>
              <div style={{marginBottom:"1rem"}}>{lbl(t.ingrLabel)}<textarea value={newIngr} onChange={e=>setNewIngr(e.target.value)} placeholder="Солод 2кг, хмель..." rows={2} style={{width:"100%",background:"rgba(240,230,208,0.05)",border:"1px solid rgba(240,230,208,0.12)",borderRadius:"8px",padding:"0.65rem 0.9rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",resize:"none",outline:"none",boxSizing:"border-box"}}/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"1.25rem"}}>
                {fld(t.timeLabel,newTime,setNewTime,"14 дней")}
                {fld(t.strengthLabel,newStrength,setNewStrength,"5.5%")}
              </div>
              <button onClick={handleAddRecipe} disabled={!newTitle.trim()||!newDesc.trim()} style={{width:"100%",padding:"0.75rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.92rem",cursor:"pointer",fontFamily:"inherit",opacity:(!newTitle.trim()||!newDesc.trim())?0.4:1}}>{t.publishBtn}</button>
            </div>
          </div>
        )}

        {tab==="profile"&&(
          <div style={{maxWidth:"520px",margin:"0 auto"}}>
            {user?(
              <div>
                <div style={{textAlign:"center",marginBottom:"1.75rem"}}>
                  <div style={{fontSize:"3.5rem"}}>{user.avatar}</div>
                  <div style={{fontSize:"1.5rem"}}>{getFlag(user.country)}</div>
                  <h2 style={{fontSize:"1.6rem",marginBottom:"0.2rem"}}>{user.name}</h2>
                  <p style={{color:"#5a4a30",fontSize:"0.82rem"}}>{t.profileSince} {user.joined}</p>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem",marginBottom:"1.5rem"}}>
                  {[["📝",recipes.filter(r=>r.author===user.name).length,t.recipesCount],["♥",recipes.filter(r=>r.author===user.name).reduce((s,r)=>s+r.likes,0),t.likesCount]].map(([e,v,l])=>(
                    <div key={l} style={{textAlign:"center",background:"rgba(240,230,208,0.04)",border:"1px solid rgba(240,230,208,0.08)",borderRadius:"12px",padding:"1rem"}}>
                      <div style={{fontSize:"1.4rem"}}>{e}</div>
                      <div style={{fontSize:"1.4rem",fontWeight:"bold",color:"#D4A017"}}>{v}</div>
                      <div style={{fontSize:"0.72rem",color:"#4a4030",fontFamily:"sans-serif"}}>{l}</div>
                    </div>
                  ))}
                </div>
                <div style={{background:"rgba(240,230,208,0.04)",border:"1px solid rgba(240,230,208,0.08)",borderRadius:"14px",padding:"1.1rem",marginBottom:"0.9rem"}}>
                  <h3 style={{color:"#D4A017",marginBottom:"0.9rem",fontSize:"0.8rem",textTransform:"uppercase",fontFamily:"sans-serif"}}>{t.myRecipes}</h3>
                  {recipes.filter(r=>r.author===user.name).length===0?(
                    <p style={{color:"#4a4030",fontSize:"0.85rem",textAlign:"center",padding:"0.75rem"}}>{t.noRecipes} <span style={{color:"#D4A017",cursor:"pointer"}} onClick={()=>setTab("add")}>{t.addFirst}</span></p>
                  ):recipes.filter(r=>r.author===user.name).map(r=>(
                    <div key={r.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 0",borderBottom:"1px solid rgba(240,230,208,0.06)"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}><span>{r.emoji}</span><div><div style={{fontSize:"0.88rem"}}>{r.title}</div><div style={{fontSize:"0.7rem",color:typeColor(r.type)}}>{t[r.type]}</div></div></div>
                      <span style={{fontSize:"0.78rem",color:"#D4A017"}}>♥ {r.likes}</span>
                    </div>
                  ))}
                </div>
                <button onClick={()=>setUser(null)} style={{width:"100%",padding:"0.6rem",borderRadius:"2rem",background:"transparent",border:"1px solid rgba(240,230,208,0.1)",color:"#4a4030",cursor:"pointer",fontFamily:"inherit"}}>{t.logout}</button>
              </div>
            ):(
              <div style={{textAlign:"center",paddingTop:"2rem"}}>
                <div style={{fontSize:"3rem"}}>🔐</div>
                <h2 style={{fontSize:"1.5rem",margin:"0.9rem 0 0.4rem"}}>{t.loginTitle}</h2>
                <p style={{color:"#7a6a4a",marginBottom:"1.25rem",fontSize:"0.88rem"}}>{t.chatLoginPrompt}</p>
                <button onClick={()=>setShowAuth(true)} style={{padding:"0.65rem 2rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.92rem",cursor:"pointer",fontFamily:"inherit"}}>{t.login}</button>
              </div>
            )}
          </div>
        )}
      </main>

      {selected&&(
        <div onClick={()=>setSelected(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.87)",backdropFilter:"blur(8px)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
          <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(135deg,#1a1408,#0d1a0a)",border:"1px solid "+typeColor(selected.type)+"30",borderRadius:"18px",padding:"1.6rem",maxWidth:"460px",width:"100%",maxHeight:"90vh",overflowY:"auto"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1.1rem"}}>
              <div>
                <div style={{display:"flex",gap:"0.4rem",marginBottom:"0.2rem"}}>
                  <span style={{fontSize:"0.65rem",color:typeColor(selected.type),textTransform:"uppercase",fontFamily:"sans-serif"}}>{t[selected.type]}</span>
                  <span>{getFlag(selected.country)}</span>
                </div>
                <h2 style={{fontSize:"1.5rem",marginBottom:"0.15rem"}}>{selected.title}</h2>
                <p style={{color:typeColor(selected.type),fontStyle:"italic",fontSize:"0.88rem"}}>{selected.subtitle}</p>
              </div>
              <span style={{fontSize:"2.3rem"}}>{selected.emoji}</span>
            </div>
            <p style={{color:"#b0a080",lineHeight:1.6,marginBottom:"1.1rem",fontSize:"0.88rem"}}>{selected.desc}</p>
            <h4 style={{color:"#D4A017",marginBottom:"0.5rem",fontSize:"0.75rem",textTransform:"uppercase",fontFamily:"sans-serif"}}>{t.ingredients}</h4>
            {selected.ingredients.map(i=><div key={i} style={{padding:"0.3rem 0",borderBottom:"1px solid rgba(240,230,208,0.05)",color:"#b0a080",fontSize:"0.85rem"}}>• {i}</div>)}
            <h4 style={{color:"#4a9c4e",margin:"1rem 0 0.5rem",fontSize:"0.75rem",textTransform:"uppercase",fontFamily:"sans-serif"}}>{t.pairings}</h4>
            <div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap",marginBottom:"1.1rem"}}>
              {selected.pairings.map(p=><span key={p} style={{padding:"0.28rem 0.75rem",borderRadius:"2rem",background:"rgba(74,156,78,0.1)",border:"1px solid rgba(74,156,78,0.22)",color:"#6ab870",fontSize:"0.78rem"}}>{p}</span>)}
            </div>
            <button onClick={()=>{setSelected(null);setAiQuery((lang==="ru"?"Что подходит к ":"What pairs with ")+"\""+selected.title+"\"?");setTab("ai");}} style={{width:"100%",padding:"0.55rem",borderRadius:"2rem",background:"rgba(212,160,23,0.08)",border:"1px solid rgba(212,160,23,0.22)",color:"#D4A017",cursor:"pointer",fontFamily:"inherit",fontSize:"0.85rem",marginBottom:"0.4rem"}}>{t.askAIAbout}</button>
            <button onClick={()=>setSelected(null)} style={{width:"100%",padding:"0.4rem",background:"transparent",border:"none",color:"#3a3020",cursor:"pointer",fontFamily:"inherit"}}>{t.close}</button>
          </div>
        </div>
      )}

      {showAuth&&(
        <div onClick={()=>setShowAuth(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(10px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
          <div onClick={e=>e.stopPropagation()} style={{background:"linear-gradient(135deg,#1a1408,#0a120a)",border:"1px solid rgba(212,160,23,0.22)",borderRadius:"20px",padding:"1.75rem",maxWidth:"380px",width:"100%"}}>
            <div style={{textAlign:"center",marginBottom:"1.25rem"}}>
              <div style={{fontSize:"1.8rem"}}>{authMode==="login"?"🔓":"✨"}</div>
              <h2 style={{fontSize:"1.4rem",color:"#D4A017"}}>{authMode==="login"?t.loginTitle:t.registerTitle}</h2>
            </div>
            <div style={{display:"flex",gap:"0.4rem",marginBottom:"1.25rem"}}>
              {[["login",t.loginTab],["register",t.registerTab]].map(([m,l])=>(
                <button key={m} onClick={()=>{setAuthMode(m);setAuthError("");}} style={{flex:1,padding:"0.45rem",borderRadius:"2rem",fontFamily:"inherit",fontSize:"0.8rem",cursor:"pointer",border:authMode===m?"1px solid #D4A017":"1px solid rgba(240,230,208,0.1)",background:authMode===m?"rgba(212,160,23,0.13)":"transparent",color:authMode===m?"#D4A017":"#7a6a4a"}}>{l}</button>
              ))}
            </div>
            {authMode==="register"&&<div style={{marginBottom:"0.9rem"}}>{lbl(t.nameLabel)}{inp(name,setName,"text","Ivan Petrov")}</div>}
            <div style={{marginBottom:"0.9rem"}}>{lbl(t.emailLabel)}{inp(email,setEmail,"email","your@email.com")}</div>
            <div style={{marginBottom:"0.9rem"}}>{lbl(t.passwordLabel)}{inp(password,setPassword,"password","••••••")}</div>
            {authMode==="register"&&(
              <div style={{marginBottom:"0.9rem"}}>
                {lbl(t.countryLabel)}
                <select value={country} onChange={e=>setCountry(e.target.value)} style={{width:"100%",background:"#1a1208",border:"1px solid rgba(240,230,208,0.12)",borderRadius:"8px",padding:"0.62rem 0.9rem",color:"#f0e6d0",fontSize:"0.88rem",fontFamily:"inherit",outline:"none",boxSizing:"border-box"}}>
                  {COUNTRIES.map(c=><option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
                </select>
              </div>
            )}
            {authError&&<div style={{color:"#e06060",fontSize:"0.8rem",marginBottom:"0.65rem",textAlign:"center"}}>{authError}</div>}
            <button onClick={handleAuth} style={{width:"100%",padding:"0.7rem",borderRadius:"2rem",background:"linear-gradient(135deg,#D4A017,#a07010)",border:"none",color:"#0d0a06",fontWeight:"bold",fontSize:"0.9rem",cursor:"pointer",fontFamily:"inherit"}}>{authMode==="login"?t.loginBtn:t.registerBtn}</button>
            {authMode==="login"&&<p style={{textAlign:"center",marginTop:"0.6rem",fontSize:"0.7rem",color:"#3a3020"}}>{t.testHint}</p>}
            <button onClick={()=>setShowAuth(false)} style={{width:"100%",padding:"0.4rem",background:"transparent",border:"none",color:"#3a3020",cursor:"pointer",fontFamily:"inherit",marginTop:"0.4rem"}}>{t.cancel}</button>
          </div>
        </div>
      )}
      <style>{"@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*{box-sizing:border-box;margin:0;padding:0;}::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background:#3a2a10;border-radius:3px;}select option{background:#1a1208;}"}</style>
    </div>
  );
}`;
document.getElementById('code').value = code;
function copyCode() {
  navigator.clipboard.writeText(code).then(() => {
    document.getElementById('ok').style.display = 'block';
    setTimeout(() => document.getElementById('ok').style.display = 'none', 3000);
  }).catch(() => {
    document.getElementById('code').select();
    document.execCommand('copy');
    document.getElementById('ok').style.display = 'block';
  });
}
</script>
</body>
</html>
