import React,{useEffect,useState} from "react";
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Row, 
  Form
} from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { SketchPicker,SliderPicker } from 'react-color';
import { HexColorPicker } from "react-colorful";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const AddNewModal = ({ modalOpen,selectedItem, toggleModal,onSubmit,closeModal,onChangeValue ,changeColor,color}) => {
  
  const handleSubmit = (e)=>{
    e.stopPropagation();
    e.preventDefault();
    onSubmit();
  }

  useEffect(()=>{
    
  },[])
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      // wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
          {selectedItem?._id?"Edit Query":"Create Query"}
      </ModalHeader>
      <Form 
        onSubmit={handleSubmit}
      >
      <ModalBody>
        <Label className="mt-4">
          Time1
        </Label>
        <Input required onChange={(e)=>{onChangeValue(e.target.value,'time1')}} value={selectedItem?.time1}/>
        
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={closeModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary"  type="submit">
          <IntlMessages id="pages.submit" />
        </Button>{" "}
      </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddNewModal;
