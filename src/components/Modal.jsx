import React, { useRef } from 'react'

const Modal = () => {
  const dialog = useRef()

  const openModal = ()=> {
    dialog.current.showModal()
  }
  return (
    <dialog ref={dialog}>
        <form>
            <h3>Modal</h3>
        </form>
    </dialog>
  )
}

export default Modal