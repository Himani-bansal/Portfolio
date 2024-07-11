import React from 'react';

const DownloadButton = () => {
  // Function to handle the download action
  const downloadResume = () => {
    const fileUrl = 'https://drive.google.com/file/d/1TP-Az-A7xQs2UDyP80KZ4LfyRug1a71l/view';
    const fileName = 'Himani-Bansal-Resume.pdf'; // Set the desired file name

    // Create an anchor element
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Programmatically trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(a);
  };

  return (
    <p className='mb-0' onClick={downloadResume} >Download Resume</p>
  );
};

export default DownloadButton;
