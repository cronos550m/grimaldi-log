import React, {useState, useEffect} from "react";

export default function Admin(){
  const [user,setUser]=useState("");
  const [pass,setPass]=useState("");
  const [auth,setAuth]=useState(false);
  const [data,setData]=useState(null);

  useEffect(()=>{
    if(auth){
      fetch("http://localhost:4000/api/data").then(r=>r.json()).then(setData)
    }
  },[auth]);

  function login(e){
    e.preventDefault();
    // credentials from user
    if(user==="Grimadmin123456" && pass==="Admingrimaldi654321"){
      setAuth(true);
    } else {
      alert("Invalid credentials");
    }
  }

  function save(){
    fetch("http://localhost:4000/api/data", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(()=>alert("Saved on server"));
  }

  if(!auth){
    return (<div style={{padding:30}}><h2>Admin Login</h2><form onSubmit={login}><input placeholder="User" value={user} onChange={e=>setUser(e.target.value)}/><br/><input placeholder="Pass" value={pass} onChange={e=>setPass(e.target.value)} type="password"/><br/><button type="submit">Login</button></form></div>)
  }

  if(!data) return <div style={{padding:30}}>Loading...</div>

  return (<div style={{padding:20}}>
    <h2>Admin Editor</h2>
    <label>Primary Color</label><input value={data.palette.primary} onChange={e=>setData({...data,palette:{...data.palette,primary:e.target.value}})}/><br/>
    <label>Accent Color</label><input value={data.palette.accent} onChange={e=>setData({...data,palette:{...data.palette,accent:e.target.value}})}/><br/>
    <label>Hero Title (ES)</label><input value={data.content.title.es} onChange={e=>setData({...data,content:{...data.content, title:{...data.content.title, es:e.target.value}}})}/><br/>
    <label>Hero Title (EN)</label><input value={data.content.title.en} onChange={e=>setData({...data,content:{...data.content, title:{...data.content.title, en:e.target.value}}})}/><br/>
    <button onClick={save}>Save to server</button>
  </div>)
}