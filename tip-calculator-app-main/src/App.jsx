import { useEffect, useRef, useState } from 'react';
import logo from './assets/images/logo.svg';

function Input({ value, onChange, step = 0.1, min = 0, isInvalid = false }) {
  return (
    <input className={`input ${isInvalid ? 'invalid' : ''}`} type="number" step={step} min={min} value={value} onChange={onChange} />
  );
}

function TipSelection({ handleSelect, value }) {

  const tipRef = useRef();
  const [selectedValue, setSelectedValue] = useState(0)

  useEffect(() => {
    if (value === 0) {
      tipRef.current.value = null;
      setSelectedValue(0);
    }
  }, [value]);

  const onClick = (value) => {
    let _value = value === selectedValue ? 0 : value;
    handleSelect(_value);
    setSelectedValue(_value);
  }

  return (
    <ul className='tip__percent'>
      {
        [5, 10, 15, 25, 50].map(item => (
          <li className={selectedValue === item ? 'selected__tip' : ''} key={item} onClick={() => onClick(item)}><span>{item}%</span></li>
        ))
      }
      <li className='tip__percent__custom'>
        <input className='input' placeholder='Custom' type="number" ref={tipRef}
          onClick={(e) => { setSelectedValue(0); handleSelect(+e.target.value) }}
          onChange={(e) => handleSelect(+e.target.value)} />
      </li>
    </ul>
  )
}

function App() {
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);


  // reset all values
  const resetValues = () => {
    setTip(0);
    setPeople(0);
    setBill(0);
    setTotal(0);
    setTipAmount(0);
  }

  useEffect(() => {
    const calculateTip = (_bill, _tip, _people) => {
      let subTotal = _bill / people;
      let _tipAmount = (_tip / 100) * subTotal;
      setTipAmount(_tipAmount.toFixed(2));
      setTotal((_tipAmount + subTotal).toFixed(2));
    }

    if (bill !== 0 && people !== 0) {
      calculateTip(bill, tip, people);
    }

  }, [bill, tip, people]);

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <div className="left">
          <div className="bill">
            <h4>Bill</h4>
            <Input value={bill} onChange={e => setBill(e.target.value)} />
          </div>
          <div className="tip">
            <h4>Select Tip %</h4>
            <TipSelection value={tip} handleSelect={setTip} />
          </div>
          <div className="people">
            <h4>Number of People</h4>
            <Input isInvalid={bill > 0 && people === 0} value={people} onChange={e => setPeople(+e.target.value)} step={1} />
            {(bill > 0 && people === 0) && <h4 className='people__invalid'>Can't be zero</h4>}
          </div>
        </div>
        <div className="result">
          <div className='result__amount'>
            <h5>Tip Amount <span>/ person</span></h5>
            <span>${tipAmount}</span>
          </div>
          <div className='result__amount'>
            <h5>Total <span>/ person</span></h5>
            <span>${total}</span>
          </div>
          <button onClick={resetValues}>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
