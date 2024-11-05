// Terminal.js
import React, { useState } from 'react';
import '../style/Terminal.scss';
import SkillsChart from './SkillsChart';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [showPrompt, setShowPrompt] = useState(true);

    const skillsData = [
        { name: 'JavaScript', level: 8 },
        { name: 'React', level: 7 },
        { name: 'Node.js', level: 6 },
        { name: 'D3.js', level: 5 },
        { name: 'MongoDB', level: 6 },
    ];

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            const userCommand = <div className="user-command">Utilisateur > {input}</div>;
            const response = processCommand(input);
            setOutput([...output, userCommand, response]);
            setInput('');
        }
    };

    const processCommand = (command) => {
        switch (command.toLowerCase()) {
            case '/skills':
                return (
                    <div className="command-response">
                        <p>Compétences :</p>
                        <SkillsChart skills={skillsData} />
                    </div>
                );
            case '/about':
                return <div className="command-response">Hey je m’appelle Lucas...</div>;
            case '/projects':
                return <div className="command-response">Mes projets : Portfolio...</div>;
            case '/contact':
                return (
                    <div className="command-response">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/lucas-manot-4a0312225/" target="_blank" rel="noopener noreferrer">- LinkedIn</a></li>
                            <li><a href="mailto:lucas.manot@gmail.com">- lucas.manot@gmail.com</a></li>
                            <li><a href="https://github.com/Cat-Cake">- GitHub</a></li>
                        </ul>
                    </div>
                );
            case '/clear':
                return window.location.reload();
            default:
                return <div className="error-response">Commande non reconnue. Tapez "/help" pour la liste des commandes.</div>;
        }
    };

    return (
        <div className="desktop">
            <div className="terminal">
                <div className="terminal-title-bar">Terminal - Portfolio</div>
                <div className="output">
                    <div className="welcome">
                        Bienvenue sur mon portfolio. Tapez '/skills' pour voir mes compétences.
                    </div>
                    {output.map((line, index) => (
                        <div key={index} className="response">
                            {line}
                        </div>
                    ))}
                </div>
                {showPrompt && (
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleInput}
                        placeholder="Tapez une commande"
                    />
                )}
            </div>
            <div className="taskbar">© 2024 - Mon Portfolio | Simulateur de bureau</div>
        </div>
    );
};

export default Terminal;
