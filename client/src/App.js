import SwapPage from './pages/SwapPage.js';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="flex justify-center mt-10">
        <SwapPage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
