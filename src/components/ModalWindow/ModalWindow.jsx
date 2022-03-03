import React from 'react'
import "./ModalWindow.css"

export default function ModalWindow({children, visible, setVisible}) {
  let rootClasses = ["modal"]
  if (visible) {
    rootClasses.push("active")
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)} >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
