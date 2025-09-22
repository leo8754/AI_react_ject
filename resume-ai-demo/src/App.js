import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResumePreview from './components/ResumePreview';
import DiagnosisResult from './components/DiagnosisResult';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [result, setResult] = useState(null);

  const handleDiagnosis = () => {
    if (!resumeText) {
      alert('請先上傳履歷！');
      return;
    }
    // 模擬 AI 健診邏輯
    const score = Math.floor(Math.random() * 41) + 60; // 60-100
    const suggestions = [
      '增加更多專案經驗',
      '補充技能關鍵字',
      '加強自我介紹',
      '刪減過多的描述，突出重點'
    ];
    setResult({
      score,
      suggestions: suggestions.sort(() => 0.5 - Math.random()).slice(0, 2)
    });
  };

  return (
    <div className="container">
      <h1>AI 履歷健診平台 (Demo)</h1>
      <FileUpload setResumeText={setResumeText} />
      <ResumePreview text={resumeText} />
      <button onClick={handleDiagnosis}>執行健診</button>
      {result && <DiagnosisResult result={result} />}
    </div>
  );
}

export default App;