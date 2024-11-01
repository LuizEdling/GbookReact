import React, {useState, useEffect } from "react";
import '../Teste/Teste.css';

export default function Teste(){
  const [message, setMessage] = useState("");

  useEffect (() => {
    fetch("http://localhost:8000/teste")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}