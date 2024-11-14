import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const moveButton = () => {
        const randomTop = Math.floor(Math.random() * 90) + 5; // Entre 5% et 95%
        const randomLeft = Math.floor(Math.random() * 90) + 5; // Entre 5% et 95%
        setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <div className="App">
                <h1>Try to click the button!</h1>
                <div className="card">
                    <button
                        style={{
                            position: 'absolute',
                            top: position.top,
                            left: position.left,
                            transform: 'translate(-50%, -50%)', // Centrer le bouton
                        }}
                        onMouseEnter={moveButton}
                    >
                        Can't touch this!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
