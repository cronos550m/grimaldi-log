import React, {useEffect, useState} from "react";
import Logo from "./assets/logo.png";

export default function App(){
  const [data, setData] = useState(null);
  const [lang, setLang] = useState("es");

  useEffect(()=>{
    fetch("http://localhost:4000/api/data")
      .then(r=>r.json())
      .then(setData)
      .catch(()=>{
        // fallback to local defaults
        setData(null)
      });
  },[]);

  if(!data){
    // simple fallback UI
    return <div style={{padding:30}}>Loading data from server... Make sure backend is running at http://localhost:4000<br/><br/>If you haven't placed images, add files in /src/assets and restart.</div>
  }

  const t = (obj)=> obj ? obj[lang] || Object.values(obj)[0] : "";

  return (
    <div className="app" style={{"--primary":data.palette.primary,"--accent":data.palette.accent}}>
      <header className="header">
        <div className="container header-inner">
          <div className="left">
            <img src={Logo} alt="Grimaldi Log" className="logo" />
            <nav className="nav">
              <a href="#home">{lang==="es"?"Inicio":"Home"}</a>
              <a href="#services">{lang==="es"?"Servicios":"Services"}</a>
              <a href="#fleet">{lang==="es"?"Flota":"Fleet"}</a>
              <a href="#contact">{lang==="es"?"Contacto":"Contact"}</a>
            </nav>
          </div>
          <div className="right">
            <button onClick={()=>setLang(lang==="es"?"en":"es")}>{lang==="es"?"EN":"ES"}</button>
          </div>
        </div>
      </header>

      <main style={{paddingTop:100}}>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1 style={{color:'var(--primary)'}}>{t(data.content.title)}</h1>
              <p>{t(data.content.subtitle)}</p>
            </div>
            <div className="hero-image">
              <img src={"/src/assets/port.jpg"} alt="port" style={{width:'100%',borderRadius:8}} />
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 style={{color:'var(--primary)'}}>{lang==="es"?"Servicios":"Services"}</h2>
            <div className="cards">
              {data.content.services.map((s,i)=>(
                <div className="card" key={i}>
                  <h3>{t(s.title)}</h3>
                  <p>{t(s.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet" className="about">
          <div className="container">
            <h2 style={{color:'var(--primary)'}}>{lang==="es"?"Flota":"Fleet"}</h2>
            <div className="about-image"><img src={"/src/assets/fleet.jpg"} alt="fleet" style={{width:'100%',borderRadius:8}}/></div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 style={{color:'var(--primary)'}}>{lang==="es"?"Opiniones de Clientes":"What Our Clients Say"}</h2>
            <div className="test-cards">
              {data.testimonials.map((tst,i)=>(
                <div className="test-card" key={i}><p>{lang==='es'?tst.text_es:tst.text_en}</p><strong>{tst.name}</strong><div className="company">{tst.company}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 style={{color:'var(--primary)'}}>{lang==="es"?"Contacto":"Contact"}</h2>
            <div className="contact-map"><img src={"/src/assets/map.jpg"} alt="map" style={{width:'100%',borderRadius:8}}/></div>
          </div>
        </section>
      </main>
    </div>
  )
}