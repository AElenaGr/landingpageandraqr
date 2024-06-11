import React from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon } from "react-share";

function CompaQr() {
  return (
    <div className="compartir-container">
      <div className="compartir-header">
        <p>COMPARTIR</p>
      </div>
      <div className="compartir-icons">
        <FacebookShareButton
          url={"https://www.pinterest.es/"}
          quote={"no sé que es quote"}
          hashtag={"#generadorqrpatrimonio"}
          description={'dataUrl'}
          className="Demo__some-network__share-button compartir-icon"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <br />
        <TwitterShareButton
          title={"Generar códigos QR"}
          url={"https://www.pinterest.es/"}
          hashtags={["qrpatrimonio", "hashtag2"]}
          className="compartir-icon"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton
          subject='Generador códigos QR'
          body='cristinab.tandem@gmail.com'
          separator='--'
          className="compartir-icon"
        >
          <EmailIcon size={32} round/>
        </EmailShareButton>
      </div>
    </div>
  );
}

export default CompaQr;
