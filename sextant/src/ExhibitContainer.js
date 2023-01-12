import React from 'react'
import ExhibitComponent from './ExhibitComponent'
import { Component } from 'react';
import { useState } from 'react';


function ExhibitContainer() {
  const [ipaddr, setIpaddr] = useState("127.0.0.1");

  // componentDidMount(){
    fetch('https://api.ipify.org?format=json').then((response)=>response.json()).then((data)=>{
      setIpaddr(String(data.ip))
      console.log(data.ip)});
  // }
  return (
    <>
    <ExhibitComponent heading="IP" body={ipaddr} />
    {/* <ExhibitComponent heading="IP" body="127.0.0.1"/> */}
    </>
  )
}

export default ExhibitContainer
