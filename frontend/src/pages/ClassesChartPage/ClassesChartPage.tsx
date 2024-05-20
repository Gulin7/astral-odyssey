import {PieChart} from '@mui/x-charts/PieChart';
import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {CharactersContext} from '../../contexts/CharactersContext';
import MainLayout from '../../layouts/mainLayout/MainLayout';

function ClassesChartPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    document.title = 'Astral Odyssey | Classes Chart';

    const charactersContext = useContext(CharactersContext)!;

    let charactersArray = charactersContext.characters;

    const classData = charactersArray.reduce(
        (acc, character) => {
            const charClass = character.getCharClass();
            if (!acc[charClass]) {
                acc[charClass] = 1;
            } else {
                acc[charClass]++;
            }
            return acc;
        },
        {} as Record<string, number>,
    );

    const size = {
        width: 500,
        height: 400,
    };

    return (
        <MainLayout>
            <div className='main-page-container'>
                <h2 className='main-title'>Classes Chart</h2>
                <div className='main-description'>
                    This is the Classes Chart page where you can see all the
                    classes and their statistics.
                </div>
                <PieChart
                    className='chart'
                    series={[
                        {
                            arcLabel: (item) => `${item.label} (${item.value})`,
                            data: Object.entries(classData).map(
                                ([label, value]) => ({id: label, label, value}),
                            ),
                        },
                    ]}
                    {...size}
                ></PieChart>
            </div>
        </MainLayout>
    );
}

export default ClassesChartPage;
