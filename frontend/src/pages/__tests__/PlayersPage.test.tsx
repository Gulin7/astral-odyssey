import {describe, expect, it, vi} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import {Player} from '../../../../models/Player';
import {PlayersContextProvider} from '../../contexts/PlayersContext';
import PlayersPage from '../PlayersPage/PlayersPage';

describe('PlayerPage component', () => {
    it('Renders the Player page', () => {
        render(
            <PlayersContextProvider
                playerContext={{
                    players: [
                        new Player(
                            1,
                            'testUsername',
                            'testNickname',
                            'testUrl',
                        ),
                    ],
                    addPlayer: vi.fn(),
                    removePlayer: vi.fn(),
                }}
            >
                <BrowserRouter>
                    <PlayersPage></PlayersPage>
                </BrowserRouter>
                ,
            </PlayersContextProvider>,
        );

        const renderedPlayerList = screen.getByTestId('players-list-test-id');
        expect(renderedPlayerList).toBeInTheDocument();
    });
});
