import {describe, expect, it, vi} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import {Player} from '../../../../models/Player';
import PlayerCard from '../PlayerCard/PlayerCard';

const {mockedUeNavigate} = vi.hoisted(() => {
    return {
        mockedUeNavigate: vi.fn(),
    };
});

vi.mock('react-router-dom', async () => {
    const router =
        await vi.importActual<typeof import('react-router-dom')>(
            'react-router-dom',
        );
    return {
        ...router,
        useNavigate: () => mockedUeNavigate,
    };
});

describe('PlayerCard component', () => {
    const mockPlayer = new Player(1, 'testUsername', 'testNickname', 'testUrl');
    const mockRemovePlayer = vi.fn();
    it('Renders the player card', () => {
        render(
            <BrowserRouter>
                <PlayerCard
                    givenPlayer={mockPlayer}
                    removePlayer={mockRemovePlayer}
                ></PlayerCard>
            </BrowserRouter>,
        );

        const renderedPlayerCard = screen.getByTestId('player-card-test-id');
        const renderedRemoveButton = screen.getByText('Remove player');
        const renderedUsername = screen.getByText('UserName: testUsername');
        const renderedNickname = screen.getByText('NickName: testNickname');
        const renderedId = screen.getByText('Id: 1');
        const renderedSkin = screen.getByTestId('player-image-test-id');

        expect(renderedPlayerCard).toBeInTheDocument();
        expect(renderedUsername).toBeInTheDocument();
        expect(renderedNickname).toBeInTheDocument();
        expect(renderedId).toBeInTheDocument();
        expect(renderedRemoveButton).toBeInTheDocument();
        expect(renderedSkin).toBeInTheDocument();
    });

    it('Calls removePlayer when remove button is clicked', () => {
        render(
            <BrowserRouter>
                <PlayerCard
                    givenPlayer={mockPlayer}
                    removePlayer={mockRemovePlayer}
                ></PlayerCard>
            </BrowserRouter>,
        );

        const renderedRemoveButton = screen.getByText('Remove player');
        renderedRemoveButton.click();

        expect(mockRemovePlayer).toHaveBeenCalled();
    });
});
