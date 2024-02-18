import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {
    const [qrcode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleQRGenrator() {
        setQrCode(input);
    }

  return (
    <div>
      <h1>QR Code </h1>
      <input onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter your value here' />
      <button onClick={handleQRGenrator} >Generator</button>
      <div>
        <QRCode 
            id='qe-code-value'
            value=''
        />
      </div>
    </div>
  )
}
