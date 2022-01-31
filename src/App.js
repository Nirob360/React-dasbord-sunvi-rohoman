import styled from 'styled-components';
import './App.css';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = function App() {
    return (
        <Container>
            <Sidebar />
            <MainContent />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100vh;
    background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
    border-radius: 2rem;

    @media screen and (min-width: 320px) and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export default App;
