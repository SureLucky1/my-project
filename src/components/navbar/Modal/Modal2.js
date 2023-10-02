import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { MdClose } from 'react-icons/md';
import "./Modal.scss";
import context from "../../../index";
const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef();
const [currencyShow, setCurrencyShow] = useState(false);
const [languageShow, setLanguageShow] = useState(true);
const { langValue, setlangValue, Dollar, setDollar } = useContext(context);
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


    }

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

<div className='choice'>
  <h5 className='title'><b>Select your preferences</b></h5>
  <div className='info'>
    <div className='selection'>
      <h4 style={{color: languageShow === true && 'rgb(38, 201, 38)', borderBottom: languageShow ? '2px solid rgb(38, 201, 38)' : 'none'}} onClick={()=>{setLanguageShow(true); setCurrencyShow(false)}}><b>Language</b></h4>
      <h4 style={{color: currencyShow === true && 'rgb(38, 201, 38)', borderBottom: currencyShow ? '2px solid rgb(38, 201, 38)' : 'none'}} onClick={()=>{setCurrencyShow(true); setLanguageShow(false)}}><b>Currency</b></h4>
    </div>
    <div className='innerChoice'>
      <div className={languageShow ? 'languagesChoice.show' : 'languagesChoice'}>
        <h5 onClick={() =>{setlangValue("English"); setShowModal(false);}}>English</h5>
        <h5 onClick={() =>{setlangValue("Deutsch"); setShowModal(false);}}>Deutsch</h5>
        <h5 onClick={() =>{setlangValue("Espanol"); setShowModal(false);}}>Espanol</h5>
        <h5 onClick={() =>{setlangValue("Francais"); setShowModal(false);}}>Francais</h5>
        <h5 onClick={() =>{setlangValue("Portugues"); setShowModal(false);}}>Portugues</h5>
        <h5 onClick={() =>{setlangValue("Italiano"); setShowModal(false);}}>Italiano</h5>
        <h5 onClick={() =>{setlangValue("Nederlands"); setShowModal(false);}}>Nederlands</h5>
      </div>
      <div className={currencyShow ? 'currency.show' : 'currency'}>
        <div onClick={() =>{setDollar('US$ USD'); setShowModal(false);}}>
        <h6><b>United States Dollar</b></h6>
        <span>USD - US$</span>
        </div>
        <div onClick={() =>{setDollar("€ EUR"); setShowModal(false);}}>
        <h6><b>Euro</b></h6>
        <span>EUR - €</span>
</div>
<div onClick={() =>{setDollar("£ GBP"); setShowModal(false);}}>
        <h6><b>British Pound</b></h6>
        <span>GBP - £</span>
        </div>

        <div onClick={() =>{setDollar("A$ AUD"); setShowModal(false);}}>
        <h6><b>Australian Dollar</b></h6>
        <span>AUD - A$</span>
        </div>
        <div onClick={() =>{setDollar("CA$ CAD"); setShowModal(false);}}>
        <h6><b>Canadian Dollar</b></h6>
        <span>CAD - CA$</span>
        </div>
        <div onClick={() =>{setDollar("₪ ILS"); setShowModal(false);}}>
        <h6><b>Israell Shekel</b></h6>
        <span>ILS - ₪</span>
        </div>
        <div onClick={() =>{setDollar("R$ BRL"); setShowModal(false);}}>
        <h6><b>Brazilian Real</b></h6>
        <span>BRL - R$</span>
        </div>
        <div onClick={() =>{setDollar("HK$ HKD"); setShowModal(false);}}>
        <h6><b>Hong Kong Dollar</b></h6>
        <span>HKD - HK$</span>
        </div>
        <div onClick={() =>{setDollar("SEK"); setShowModal(false);}}>
        <h6><b>Swedish Krona</b></h6>
        <span>SEK - SEK</span>
        </div>
        <div onClick={() =>{setDollar("NZ$ NZD"); setShowModal(false);}}>
        <h6><b>New Zealand Dollar</b></h6>
        <span>NZD - NZ$</span>
        </div>
        <div onClick={() =>{setDollar("SGD"); setShowModal(false);}}>
        <h6><b>Singapore Dollar</b></h6>
        <span>SGD - SGD</span>
        </div>
        <div onClick={() =>{setDollar("CHF"); setShowModal(false);}}>
        <h6><b>Swiss Franc</b></h6>
        <span>CHF - CHF</span>
        </div>
        <div onClick={() =>{setDollar("ZAR"); setShowModal(false);}}>
        <h6><b>South African Rand</b></h6>
        <span>ZAR - ZAR</span>
        </div>
        <div onClick={() =>{setDollar("CN¥ CNY"); setShowModal(false);}}>
        <h6><b>Chinese Renminbi Yuan</b></h6>
        <span>CNY - CNY</span>
        </div>
        <div onClick={() =>{setDollar("₹ INR"); setShowModal(false);}}>
        <h6><b>Indian Rupee</b></h6>
        <span>INR - ₹</span>
        </div>
        <div onClick={() =>{setDollar("MYR"); setShowModal(false);}}>
        <h6><b>Malaysian Ringgit</b></h6>
        <span>MYR - MYR</span>
        </div>
        <div onClick={() =>{setDollar("PKR"); setShowModal(false);}}>
        <h6><b>Mexican Peso</b></h6>
        <span>MXN - MX$</span>
        </div>
        <div onClick={() =>{setDollar("₱ PHP"); setShowModal(false);}}>
        <h6><b>Pakistani Rupee</b></h6>
        <span>PKR - PKR</span>
        </div>
        <div onClick={() =>{setDollar("NT$ TWD"); setShowModal(false);}}>
        <h6><b>Philippine Peso</b></h6>
        <span>PHP - ₱</span>
        </div>
        <div onClick={() =>{setlangValue("English"); setShowModal(false);}}>
        <h6><b>New Taiwan Dollar</b></h6>
        <span>TWD - NT$</span>
        </div>
        <div onClick={() =>{setDollar("THB"); setShowModal(false);}}>
        <h6><b>Thai Baht</b></h6>
        <span>THB - THB</span>
        </div>
        <div onClick={() =>{setDollar("TRY"); setShowModal(false);}}>
        <h6><b>Turkish New Lira</b></h6>
        <span>TRY - TRY</span>
        </div>
        <div onClick={() =>{setDollar("AED"); setShowModal(false);}}>
        <h6><b>United Arab Emirates Dirham</b></h6>
        <span>AED - AED</span>
        </div>
      </div>
    </div>
  </div>
</div>

              <MdClose
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
                style={{cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "32px",
                height: "32px",
                backgroundColor:"white",
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
