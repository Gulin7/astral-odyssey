import axios from 'axios';
import {useContext, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {UserContext} from '../../contexts/UserContext';
import {LoginForm} from '../../features/Auth/LoginForm/LoginForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {User} from '../../models/User';

import './LoginPage.css';

function handleOnClick(
    usernameInput: React.RefObject<HTMLInputElement>,
    passwordInput: React.RefObject<HTMLInputElement>,
): {username: string; password: string} {
    if (!usernameInput.current || !passwordInput.current) {
        throw new Error('Null references');
    }

    if (!usernameInput.current!.value || !passwordInput.current!.value) {
        throw new Error('All fields are required');
    }

    const userUsername: string = usernameInput.current!.value;
    const userPassword: string = passwordInput.current!.value;

    const inputFields = {
        username: userUsername,
        password: userPassword,
    };

    return inputFields;
}

const LoginPage = () => {
    document.title = 'Astral Odyssey | Login';

    const navigate = useNavigate();

    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const userContext = useContext(UserContext)!;

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // Call your login function here
            handleOnClickWrapper();
        }
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
    });

    const handleOnClickWrapper = () => {
        try {
            const inputFields = handleOnClick(usernameInput, passwordInput);
            try {
                const URL = 'http://localhost:5000/api/users/login';
                // const URL = `http://3.79.63.224:5000/api/users/login`;

                axios.post(URL, inputFields).then((response) => {
                    console.log(response.data);
                    const currentUser = new User(
                        response.data._id,
                        response.data.username,
                        response.data.email,
                        response.data.role,
                    );
                    userContext.setUser(currentUser);
                    localStorage.setItem(
                        'token',
                        JSON.stringify(response.data.token),
                    );
                    navigate('/');
                });
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const layoutTitle: string = 'Astral Odyssey | Login';

    return (
        <MainLayout title={layoutTitle}>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='main-title'>{layoutTitle}</div>
                    <LoginForm
                        usernameInput={usernameInput}
                        passwordInput={passwordInput}
                    />

                    <div className='buttons'>
                        <Button
                            type='submit'
                            buttonText='Login'
                            onClick={handleOnClickWrapper}
                            data-testid='Login-button-id'
                            className='button-dark'
                        />
                        <Button
                            type='submit'
                            buttonText='Signup'
                            onClick={() => navigate('/signup')}
                            data-testid='signup-button-id'
                            className='button-dark'
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
