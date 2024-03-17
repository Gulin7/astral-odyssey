import React from 'react';
import {Player} from '../../models/Player';

export type PlayerFormType = {
    id: React.RefObject<HTMLInputElement>;
    username: React.RefObject<HTMLInputElement>;
    nickname: React.RefObject<HTMLInputElement>;
    pictureUrl: React.RefObject<HTMLInputElement>;
    givenPlayer?: Player;
};
