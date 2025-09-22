import React from 'react';

function FileUpload({ setResumeText }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeText(event.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="card">
      <h2>上傳履歷</h2>
      <input type="file" accept=".txt,.pdf,.docx" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;