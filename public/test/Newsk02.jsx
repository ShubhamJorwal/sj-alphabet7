import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newx02 = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userIP, setUserIP] = useState('');
    const [systemId, setSystemId] = useState('983');
    const [page, setPage] = useState('selectGame:baccarat'); // Example game page code
    const [currency, setCurrency] = useState('INR'); // Default currency
    const [country, setCountry] = useState('India'); // Default country
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
                    page,
                    currency,
                    country
                });
                if (response.data.html) {
                    const html = response.data.html;
                    // Extract script content
                    const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                    const scripts = html.match(scriptRegex) || [];
                    const cleanHtml = html.replace(scriptRegex, '');

                    setHtmlContent(cleanHtml);

                    // Execute scripts
                    scripts.forEach(scriptTag => {
                        const scriptContent = scriptTag.replace(/<script\b[^>]*>/i, '').replace(/<\/script>/i, '');
                        const scriptElement = document.createElement('script');
                        scriptElement.innerHTML = scriptContent;
                        document.body.appendChild(scriptElement);
                    });

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
    }, [login, password, userIP, systemId, page, currency, country]);

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Newx02;
