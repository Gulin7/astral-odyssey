import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import PotionPage from '../PotionsPage/PotionsPage';

describe('PotionPage component', () => {
    it('Renders the potion page', () => {
        render(
            <BrowserRouter>
                <PotionPage></PotionPage>
            </BrowserRouter>,
        );

        const renderedPotionPage = screen.getByText('Potion Shop');
        const renderedPotionList = screen.getByTestId('potions-list-test-id');

        expect(renderedPotionPage).toBeInTheDocument();
        expect(renderedPotionList).toBeInTheDocument();
    });
});
