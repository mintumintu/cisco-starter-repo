import React from 'react'
import ExhibitComponent from './ExhibitComponent'
import { useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');


function ExhibitContainer() {
  const [ipaddr, setIpaddr] = useState("Fetching");
  const [latency,setLatency]= useState("Fetching");

  // Fetching ip address from ipify api
    fetch('https://api.ipify.org?format=json').then((response)=>response.json()).then((data)=>{
      setIpaddr(String(data.ip))
      console.log(data.ip)});

  //Connecting web socket and getting values
  client.onmessage = (message) => {
    setLatency(new Date().getTime() - message.data)
};

  return (
    <>
    <ExhibitComponent heading="IP" body={ipaddr} />
    <ExhibitComponent heading="Latency(MB)" body={latency}/>
    </>
  )
}

export default ExhibitContainer
