import React, { useEffect } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap'
import QRCode from "react-qr-code";

const QRCodeModal = ({ modalOpen, deleteItem, toggleModal, closeModal}) => {
  useEffect(()=>{
  },[])
  return (
    <>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Warning
        </ModalHeader>
        <ModalBody>
              Are you sure to delete this state?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteItem}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default QRCodeModal