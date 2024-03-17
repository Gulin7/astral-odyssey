import {Player} from '../../models/Player';

export type PlayerCardPropsType = {
    givenPlayer: Player;
    removePlayer: (PlayerId: number) => void;
};
