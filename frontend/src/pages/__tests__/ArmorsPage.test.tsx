import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import ArmorsPage from '../ArmorsPage/ArmorsPage';

describe('ArmorPage component', () => {
    it('Renders the armor page', () => {
        render(
            <BrowserRouter>
                <ArmorsPage></ArmorsPage>
            </BrowserRouter>,
        );

        const renderedArmorPage = screen.getByText('Armor Shop');
        const renderedArmorList = screen.getByTestId('armors-list-test-id');

        expect(renderedArmorPage).toBeInTheDocument();
        expect(renderedArmorList).toBeInTheDocument();
    });
});
