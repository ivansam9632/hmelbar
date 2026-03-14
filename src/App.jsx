import { useState } from "react";

const recipes = [
  {id:1,type:"beer",title:"Тёмный мёд",desc:"Густой портер с нотками карамели и мёда.",emoji:"🍺",author:"Алексей 🇷🇺",likes:24},
  {id:2,type:"beer",title:"Пшеничное лето",desc:"Лёгкое пшеничное с ароматом банана.",emoji:"🌾",author:"Игорь 🇩🇪",likes:18},
  {id:3,type:"tincture",title:"Кедровый лес",desc:"Смолистая настойка с ароматом хвои.",emoji:"🌲",author:"Сергей 🇷🇺",likes:31},
  {id:4,type:"snack",title:"Луковые кольца",desc:"Хрустящие кольца в пивном кляре.",emoji:"🧅",author:"Наташа 🇧🇾",likes:42},
];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [likes, setLikes] = useState({});

  const filtered = filter === "all" ? recipes : recipes.filter(r => r.type === filter);

  return (
    <div style={{minHeight:"100vh",background:"#0d0a06",color:"#f0e6d0",fontFamily:"Georgia,serif",padding:"1rem"}}>
      <div style={{maxWidth:"900px",margin:"0 auto"}}>
        <div style={{textAlign:"center",padding:"2rem 0"}}>
          <h1 style={{fontSize:"2.5rem",background:"linear-gradient(90deg,#D4A017,#f0c040)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            🍺 ХмельБар
          </h1>
          <p style={{color:"#7a6a4a"}}>Рецепты пива, настоек и закусок</p>
        </div>

        <div style={{display:"flex",gap:"0.5rem",justifyContent:"center",marginBottom:"2rem",flexWrap:"wrap"}}>
          {[["all","Все"],["beer","🍺 Пиво"],["tincture","🌿 Настойки"],["snack","🍽 Закуски"]].map(([f,l]) => (
            <button key={f} onClick={() => setFilter(f)} style={{padding:"0.5rem 1.2rem",borderRadius:"2rem",border:filter===f?"1px solid #D4A017":"1px solid #3a2a10",background:filter===f?"rgba(212,160,23,0.2)":"transparent",color:filter===f?"#D4A017":"#7a6a4a",cursor:"pointer",fontFamily:"inherit"}}>
              {l}
            </button>
          ))}
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"1rem"}}>
          {filtered.map(r => (
            <div key={r.id} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"1.25rem"}}>
              <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>{r.emoji}</div>
              <h3 style={{marginBottom:"0.4rem",color:"#f0e6d0"}}>{r.title}</h3>
              <p style={{fontSize:"0.85rem",color:"#7a6a4a",marginBottom:"1rem"}}>{r.desc}</p>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"0.75rem",color:"#4a4030"}}>{r.author}</span>
                <button onClick={() => setLikes(l => ({...l,[r.id]:(l[r.id]||r.likes)+1}))} style={{background:"rgba(212,160,23,0.1)",border:"1px solid rgba(212,160,23,0.3)",borderRadius:"2rem",padding:"0.2rem 0.7rem",color:"#D4A017",cursor:"pointer",fontFamily:"inherit"}}>
                  ♥ {likes[r.id] || r.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
