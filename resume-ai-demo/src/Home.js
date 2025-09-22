import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from './components/background.jpg'; // <-- 引入圖片

function Home() {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regUsername || !regPassword) {
      alert('請填寫帳號與密碼');
      return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (users.some(u => u.username === regUsername)) {
      alert('帳號已存在');
      return;
    }

    users.push({ username: regUsername, password: regPassword });
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    alert('註冊成功！請登入');
    setShowRegister(false);
    setRegUsername('');
    setRegPassword('');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${bgImg})`, // <-- 使用 import 的圖片
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '1px 1px 2px black',
    padding: '0 10px',
  };

  const boxStyle = {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '30px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
    textAlign: 'center'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1em',
    marginBottom: '10px',
    cursor: 'pointer'
  };

  const inputStyle = {
    display: 'block',
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    fontSize: '1em',
    boxSizing: 'border-box'
  };

  return (
    <div style={containerStyle}>
      <h1>AI 履歷健診平台</h1>
      <p>請先登入以使用平台功能</p>
      <div style={boxStyle}>
        <button style={buttonStyle} onClick={() => navigate('/login')}>登入</button>
        <button style={buttonStyle} onClick={() => setShowRegister(true)}>註冊</button>
      </div>

      {showRegister && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '10px'
        }}>
          <div style={boxStyle}>
            <h2>註冊帳號</h2>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                value={regUsername}
                onChange={e => setRegUsername(e.target.value)}
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={regPassword}
                onChange={e => setRegPassword(e.target.value)}
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>註冊</button>
              <button type="button" style={buttonStyle} onClick={() => setShowRegister(false)}>取消</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
