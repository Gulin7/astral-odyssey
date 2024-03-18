import {describe, expect, it, vi} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import {CharactersContextProvider} from '../../contexts/CharactersContext';
import Character from '../../models/Character';
import CharactersPage from '../CharactersPage/CharactersPage';

describe('CharacterPage component', () => {
    it('Renders the character page', () => {
        render(
            <CharactersContextProvider
                characterContext={{
                    characters: [
                        new Character(
                            1,
                            'testName',
                            'testClass',
                            'testRace',
                            1,
                        ),
                    ],
                    addCharacter: vi.fn(),
                    removeCharacter: vi.fn(),
                }}
            >
                <BrowserRouter>
                    <CharactersPage></CharactersPage>
                </BrowserRouter>
                ,
            </CharactersContextProvider>,
        );

        const renderedCharacterList = screen.getByTestId(
            'characters-list-test-id',
        );
        expect(renderedCharacterList).toBeInTheDocument();
        expect(renderedCharacterList.childNodes.length).toBe(1);
    });
});
