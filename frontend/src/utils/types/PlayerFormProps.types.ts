import React from 'react';
import {Player} from '../../../../models/Player';

export type PlayerFormType = {
    idInput: React.RefObject<HTMLInputElement>;
    usernameInput: React.RefObject<HTMLInputElement>;
    nicknameInput: React.RefObject<HTMLInputElement>;
    urlInput: React.RefObject<HTMLInputElement>;
    givenPlayer?: Player;
};
