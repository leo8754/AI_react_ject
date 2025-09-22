import React from 'react';

function ResumePreview({ text }) {
  return (
    <div className="card">
      <h2>履歷預覽</h2>
      <pre>{text || '尚未上傳履歷'}</pre>
    </div>
  );
}

export default ResumePreview;