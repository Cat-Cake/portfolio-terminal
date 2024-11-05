import React, { useState } from 'react';
import '../style/Terminal.scss';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);
    const [showPrompt, setShowPrompt] = useState(true);

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
            case '/help':
                return (
                    <div className="command-response">
                        <p>Liste des commandes :</p>
                        <ul>
                            <li>- <span className="command">/about</span> : Affiche des informations sur moi.</li>
                            <li>- <span className="command">/projects</span> : Montre mes projets récents.</li>
                            <li>- <span className="command">/skills</span> : Détaille mes compétences.</li>
                            <li>- <span className="command">/contact</span> : Informations de contact.</li>
                            <li>- <span className="command">/clear</span> : Efface l'écran du terminal.</li>
                        </ul>
                    </div>
                );
            case '/about':
                return <div className="command-response">Je suis [Ton Nom], un développeur passionné...</div>;
            case '/projects':
                return <div className="command-response">Mes projets : Portfolio, Application de gestion, ...</div>;
            case '/skills':
                return <div className="command-response">Compétences : JavaScript, React, Node.js, etc.</div>;
            case '/contact':
                return (
                    <div className="command-response">
                        <p>Comment me contacter :</p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/lucas-manot-4a0312225/" target="_blank" rel="noopener noreferrer">- LinkedIn</a></li>
                            <li><a href="mailto:lucas.manot@gmail.com" target="_blank">- lucas.manot@gmail.com</a></li>
                            <li><a href="https://github.com/Cat-Cake" target="_blank">- GitHub</a></li>
                        </ul>
                    </div>
                );
            case '/clear':
                return window.location.reload();
            default:
                return <div className="error-response">Commande non reconnue. Tapez <span className="command">"/help"</span> pour la liste des commandes.</div>;
        }
    };

    return (
        <div className="terminal">
            <div className="output">
                <div className="welcome">
                    Bienvenue sur mon portfolio. Pour en savoir plus sur les commandes, tapez '/help'.
                </div>
                {output.map((line, index) => (
                    <div key={index} className="response">
                        {line} {/* line est un élément React valide */}
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
    );
};

export default Terminal;