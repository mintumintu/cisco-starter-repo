import React from 'react'
import ExhibitComponent from './ExhibitComponent'
import { useState } from 'react';


function ExhibitContainer() {
  const [ipaddr, setIpaddr] = useState("Fetching");
  const [latency,setLatency]= useState("Fetching");

  // Fetching ip address from ipify api
    fetch('https://api.ipify.org?format=json').then((response)=>response.json()).then((data)=>{
      setIpaddr(String(data.ip))
      console.log(data.ip)});

  //Connecting web socket and getting values
  return (
    <>
    <ExhibitComponent heading="IP" body={ipaddr} />
    <ExhibitComponent heading="Latency(MB)" body={latency}/>
    </>
  )
}

export default ExhibitContainer
