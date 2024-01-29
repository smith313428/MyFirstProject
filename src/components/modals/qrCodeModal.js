import React, { useEffect } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import QRCode from "react-qr-code";

const QRCodeModal = ({ modalOpen, value, toggleModal, closeModal}) => {
  useEffect(()=>{
  },[])
  return (
    <>
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        backdrop="static"
        className="confirm-cancel-modal"
      >
        <ModalHeader toggle={toggleModal}>
          QR Code
        </ModalHeader>
        <ModalBody>
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
            <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value?.qrCode}
            viewBox={`0 0 256 256`}
            />
          </div>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>

      </Modal>
    </>
  )
}

export default QRCodeModal