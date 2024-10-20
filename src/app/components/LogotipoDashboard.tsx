import React from 'react';

const LogotipoDashboard: React.FC = () => {
    return (
        <aside className="flex justify-center items-center pb-5">
            <img
                src="/imgs/logo.png"
                alt="Logotipo Dashboard"
                width="60"
                className="block"
            />
        </aside>
    );
};

export default LogotipoDashboard;
