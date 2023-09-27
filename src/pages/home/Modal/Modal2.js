import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import "./Modal.scss";

const Modal = ({showModal, setShowModal, setOverflow, VideoIndex, setIndex, setDisplay}) => {
  const modalRef = useRef();
  const videoSet = [
    {source: './img/rb8jtakrisiz0xtsffwi.mp4'},
    {source: "./img/yja2ld5fnolhsixj3xxw.mp4"},
    {source: "./img/bsncmkwya3nectkensun.mp4"},
    {source: "./img/plfa6gdjihpdvr10rchl.mp4"},
    {source: "./img/vmvv3czyk2ifedefkau7.mp4"}
  ]
    
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setIndex(50);
      setDisplay(50);
    }
    setIndex(50);
    setDisplay(50);
    setOverflow("none");
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div onClick={closeModal} ref={modalRef} className='modal'>
          <div style={animation}>

    <video name="media" autoPlay controls className="Video">
      <source src={videoSet[VideoIndex].source} type="video/mp4" />
    </video>

              <Button
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                style={{cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "32px",
                height: "32px",
                padding: 0,
                zIndex: 10}}
              />
          
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
