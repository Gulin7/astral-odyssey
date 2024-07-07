import axios from 'axios';
import {useContext, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {UserContext} from '../../contexts/UserContext';
import {SignupForm} from '../../features/Auth/SignupForm/SignupForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {User} from '../../models/User';

import './SignupPage.css';

function handleOnClick(
    usernameInput: React.RefObject<HTMLInputElement>,
    emailInput: React.RefObject<HTMLInputElement>,
    passwordInput: React.RefObject<HTMLInputElement>,
    confirmedPasswordInput: React.RefObject<HTMLInputElement>,
): {
    username: string;
    email: string;
    password: string;
    confirmedPassword: string;
} {
    if (
        !usernameInput.current ||
        !emailInput.current ||
        !passwordInput.current ||
        !confirmedPasswordInput.current
    ) {
        throw new Error('Null references');
    }

    if (
        !usernameInput.current!.value ||
        !emailInput.current!.value ||
        !passwordInput.current!.value ||
        !confirmedPasswordInput.current!.value
    ) {
        throw new Error('All fields are required');
    }

    const userUsername: string = usernameInput.current!.value;
    const userEmail: string = emailInput.current!.value;
    const userPassword: string = passwordInput.current!.value;
    const confirmedPassword: string = confirmedPasswordInput.current!.value;

    const inputFields = {
        username: userUsername,
        email: userEmail,
        password: userPassword,
        confirmedPassword: confirmedPassword,
        role: 3,
    };

    return inputFields;
}

const SignupPage = () => {
    document.title = 'Astral Odyssey | Signup';
    const navigate = useNavigate();
    const userContext = useContext(UserContext)!;

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // console.log(isLoggedIn);

    useEffect(() => {
        if (isLoggedIn === 'yes') {
            navigate('/');
        }
    }, [navigate]);

    const usernameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const confirmedPasswordInput = useRef<HTMLInputElement>(null);

    const handleOnClickWrapper = () => {
        try {
            const inputFields = handleOnClick(
                usernameInput,
                emailInput,
                passwordInput,
                confirmedPasswordInput,
            );
            try {
                const URL = 'http://localhost:5000/api/users/signup';
                // const URL = 'http://3.79.63.224:5000/api/users/signup';

                axios.post(URL, inputFields).then((response) => {
                    // console.log(response.data);
                    const user = new User(
                        response.data._id,
                        response.data.username,
                        response.data.email,
                        response.data.role,
                    );
                    userContext.setUser(user);
                    localStorage.setItem('isLoggedIn', 'yes');
                    localStorage.setItem(
                        'token',
                        JSON.stringify(response.data.token),
                    );
                });
            } catch (error) {
                console.error(error);
            }
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const layoutTitle: string = 'Astral Odyssey | Signup';

    return (
        <MainLayout title={layoutTitle}>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='main-title'>{layoutTitle}</div>
                    <SignupForm
                        usernameInput={usernameInput}
                        emailInput={emailInput}
                        passwordInput={passwordInput}
                        confirmedPasswordInput={confirmedPasswordInput}
                    />
                    <div className='buttons'>
                        <Button
                            type='submit'
                            buttonText='Signup'
                            onClick={handleOnClickWrapper}
                            data-testid='signup-button-id'
                            className='button-dark'
                        />
                        <Button
                            type='submit'
                            buttonText='Login'
                            onClick={() => navigate('/login')}
                            data-testid='login-button-id'
                            className='button-dark'
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SignupPage;
