import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const DownloadCV = () => {
  const handleDownload = () => {

    const filename = 'Krystle Murphy CV - Software Engineer.pdf';

    const cvPath = './Krystle Murphy CV - Software Engineer.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className="btn rounded" onClick={handleDownload}><div className='row p-3'><FontAwesomeIcon icon={faFilePdf} size='3x'/></div>Krystle Murphy's CV 
      </button>
    </div>
  );
};

export default DownloadCV;

