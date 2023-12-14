import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { Menu } from '../../../components/menu/menu';
import { Container } from '../../../components/container/container';
import { Favorite } from '../../../components/favorite/favorite';

export default createBoard({
    name: 'App',
    Board: () => <div className="App">
        <Menu />
        <Container />
        <Favorite />
    </div>,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 1228
    }
});
