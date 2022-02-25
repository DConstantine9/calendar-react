import React, { useState } from 'react'

export default function EventHandler() {
  let [value, setValue] = useState("");
  let [plan, setPlan] = useState([]);

  let addPlan = () => {
    setPlan([...plan, value])
    console.log(value)
    console.log(plan)
  }

  return (
    <div className='eventhandler'>
      <h3>events</h3>
      <input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addPlan}>add</button>

      <div className='eventhandler__content'>
        {plan.map((e) => (
          <div key={Date.now()}>
            {e}
          </div>
        ))}
      </div>
    </div>
  )
}

