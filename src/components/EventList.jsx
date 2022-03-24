import React from 'react'
import EventItem from './EventItem'

export default function EventList({events, remove, date}) {
  let arr = []

  for (let key in localStorage) {
    let item = localStorage.getItem(key)
    let parsedItem = JSON.parse(item)
    arr.push(parsedItem)
  }

  arr.splice(-6, 6)

  console.log(arr)


  return (  
    arr.map((e) => (
      <EventItem date={date} remove={remove} e={e} key={Math.random().toString(16).slice(2)}/>
  ))
  )
}
