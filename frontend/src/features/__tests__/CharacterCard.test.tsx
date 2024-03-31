import {describe, expect, it, vi} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import Character from '../../../../models/Character';
import CharacterCard from '../CharacterCard/CharacterCard';

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

describe('CharacterCard component', () => {
    const givenCharacter = new Character(
        1,
        'testName',
        'testClass',
        'testRace',
        1,
    );
    const mockRemoveCharacter = vi.fn();
    it('Renders the character card', () => {
        render(
            <BrowserRouter>
                <CharacterCard
                    givenCharacter={givenCharacter}
                    removeCharacter={mockRemoveCharacter}
                ></CharacterCard>
            </BrowserRouter>,
        );

        const renderedCharacterCard = screen.getByTestId(
            'character-card-test-id',
        );
        const renderedRemoveButton = screen.getByText('Remove character');
        const renderedName = screen.getByText('Name: testName');
        const renderedClass = screen.getByText('Class: testClass');
        const renderedRace = screen.getByText('Race: testRace');
        const renderedId = screen.getByText('ID: 1');
        const renderedPlayerId = screen.getByText('Player ID: 1');

        expect(renderedCharacterCard).toBeInTheDocument();
        expect(renderedName).toBeInTheDocument();
        expect(renderedClass).toBeInTheDocument();
        expect(renderedRace).toBeInTheDocument();
        expect(renderedId).toBeInTheDocument();
        expect(renderedPlayerId).toBeInTheDocument();
        expect(renderedRemoveButton).toBeInTheDocument();
    });
    it('Calls removeCharacter function when remove button is clicked', () => {
        render(
            <BrowserRouter>
                <CharacterCard
                    givenCharacter={givenCharacter}
                    removeCharacter={mockRemoveCharacter}
                ></CharacterCard>
            </BrowserRouter>,
        );

        const removeButton = screen.getByText('Remove character');
        removeButton.click();

        expect(mockRemoveCharacter).toHaveBeenCalledWith(1);
    });
});
