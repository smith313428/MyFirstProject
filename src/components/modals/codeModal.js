import React, { useState,useEffect } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Col,
} from 'reactstrap'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
const CodeModal = ({ modalOpen, selectedItem, toggleModal,onChangeValue,onSave, closeModal }) => {
  useEffect(()=>{
    
  },[])

  const renderFooter = () => {
    return (
      <>
        <Button style={{ width: 100 }}  color='primary' onClick={onSave}>
          Save
        </Button>
        <Button style={{ width: 100 }} color='danger' onClick={closeModal}>
          Cancel
        </Button>
      </>
    )
}

  return (
    <>
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        backdrop="static"
        className="confirm-cancel-modal"
      >
        <ModalHeader toggle={toggleModal}>
          Query Code
        </ModalHeader>
        <ModalBody>
          {/* <Row className="booking-information" style={{justifyContent:'center'}}> */}
            <Editor
              value={selectedItem?.query}
              onValueChange={(code)=>{onChangeValue(code,'query')}}  
              highlight={code => highlight(code, languages.js)}
              // readonly={true}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
              }}
            />
          {/* </Row> */}
        </ModalBody>
        <ModalFooter>
          {renderFooter()}
        </ModalFooter>

      </Modal>
    </>
  )
}

export default CodeModal