import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleQRGenrator() {
        setQrCode(input);
        setInput('')
    }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input disabled = {input && input.trim() !== '' ? false : true} onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter your value here' />
      <button onClick={handleQRGenrator} >Generator</button>
      <div>
        <QRCode 
            id='qe-code-value'
            value='qrCode'
            size={400}
            bgColor='#fff'
        />
      </div>
    </div>
  )
}
