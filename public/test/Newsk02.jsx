import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newx02 = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userIP, setUserIP] = useState('');
    const [systemId, setSystemId] = useState('998');
    const [page, setPage] = useState('roulette:9dxyqtvp0rjqvu6r');
    const [htmlContent, setHtmlContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedLogin = localStorage.getItem('login');
        const storedPassword = localStorage.getItem('password');
        const storedUserIP = localStorage.getItem('userIP');

        if (storedLogin) setLogin(storedLogin);
        if (storedPassword) setPassword(storedPassword);
        if (storedUserIP) setUserIP(storedUserIP);
    }, []);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.post('https://admin.alphabet7.com/public/api/launch-game', {
                    login,
                    password,
                    userIP,
                    systemId,
                    page
                });
                if (response.data.html) {
                    setHtmlContent(response.data.html);
                    setError('');
                } else if (response.data.error) {
                    setError(response.data.error);
                }
            } catch (error) {
                setError('Failed to fetch content');
                console.error(error);
            }
        };

        if (login && password && userIP && systemId && page) {
            fetchContent();
        }
    }, [login, password, userIP, systemId, page]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Newx02;
