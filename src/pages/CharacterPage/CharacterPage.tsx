import Character from '../../models/character';
import './CharacterPage.css';

const character1 = new Character(1, 'Dantes', 'warrior', '', 'orc');
const character2 = new Character(2, 'Yuno', 'wizzard', '', 'elf');
const character3 = new Character(3, 'Lucci', 'assasin', '', 'human');

const characters = [character1, character2, character3];

const CharacterPage = () => {
    document.title = 'Astral Odyssey | Characters';

    return <div className=''></div>;
};

export default CharacterPage;
