import Button from './Button';

const App = () => {
    return (
        <div>
            <div>
                <Button success rounded outline>Click Me</Button>
            </div>
            <div>
                <Button danger outline>Buy Now!</Button>
            </div>
            <div>
                <Button warning>See Deal!</Button>
            </div>
            <div>
                <Button secondary>Hide Ads!</Button>
            </div>
            <div>
                <Button primary rounded outline>Something!</Button>
            </div>
        </div>
    )
};

export default App;