import React from 'react'

export default function Teammembers(props) {
  const { info } = props

  if(!info) {
      return(<h3>Finding teammembers&apos;s details...</h3>)
  }
  return (
      <div style={{margin: '10px 0px', display: 'flex'}} className='member-container'>

          <div style={{'width': '30%'}}>{info.username} &nbsp; &nbsp;</div>
          <div style={{'width': '30%'}}>{info.email} &nbsp; &nbsp;</div>
          <div style={{'width': '30%'}}>{info.role}</div>
      </div>
  )
}