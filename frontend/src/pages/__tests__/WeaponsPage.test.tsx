import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import WeaponPage from '../WeaponsPage/WeaponsPage';

describe('WeaponPage component', () => {
    it('Renders the weapon page', () => {
        render(
            <BrowserRouter>
                <WeaponPage></WeaponPage>
            </BrowserRouter>,
        );

        const renderedWeaponPage = screen.getByText('Weapon Shop');
        const renderedWeaponList = screen.getByTestId('weapons-list-test-id');

        expect(renderedWeaponPage).toBeInTheDocument();
        expect(renderedWeaponList).toBeInTheDocument();
    });
});
