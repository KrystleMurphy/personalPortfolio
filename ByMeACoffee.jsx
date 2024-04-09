
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

function ByMeACoffee() {
  return (
    <div className="row col-8 justify-content-center align-items-center text-center">
      {/* Add the Buy Me a Coffee button */}
      <div className="bmc-container justify-content-center align-items-center text-center d-flex">
        <a
          className="bmc-button rounded"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/krystlemurphy"
          className="p-3 rounded text-black text-decoration-none"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span>Buy me a coffee, or <FontAwesomeIcon icon={faMartiniGlassCitrus} size='2x'/>cocktail if you're feeling fancy!</span>
        </a>
      </div>
    </div>
  );
}

export default ByMeACoffee;
