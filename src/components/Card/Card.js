import React from 'react';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Card.css';

const CreditCard = () => {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCVC] = useState('');
    const [focus, setFocus] = useState('');

    return (
        <div>
            <Cards number={number} name={name} xpiry={expiry} cvc={cvc} focused={focus} className='CreditCard'/>
            {/* <form>
                <input type="tel" name='number' placeholder='Card Number' value={number} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)} />
                <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)} />
                <input type="text" name='expiry' placeholder='mm/yy' value={expiry} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)} />
                <input type="tel" name='cvc' placeholder='CVC' value={cvc} onChange={(e) => setCVC(e.target.value)} onFocus={(e) => setFocus(e.target.name)} />
            </form> */}
        </div>
    );
};

export default CreditCard;