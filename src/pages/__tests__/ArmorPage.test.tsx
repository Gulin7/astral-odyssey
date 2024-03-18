import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import ArmorPage from '../ArmorPage/ArmorPage';

describe('ArmorPage component', () => {
    it('Renders the armor page', () => {
        render(
            <BrowserRouter>
                <ArmorPage></ArmorPage>
            </BrowserRouter>,
        );

        const renderedArmorPage = screen.getByText('Armor Shop');
        const renderedArmorList = screen.getByTestId('armors-list-test-id');

        expect(renderedArmorPage).toBeInTheDocument();
        expect(renderedArmorList).toBeInTheDocument();
    });
});
