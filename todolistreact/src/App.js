import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className='Window'>
      <div className='NavBar'>
        <h1>Lista</h1>
      </div>

      <div className='Main'>
        <div className='List'>
          <Form>
            <Form.Control type="text" placeholder="Podaj nazwe zadania: "/>
            <Button variant="dark" type="submit">Dodaj</Button>
          </Form>

          <div className='ItemsInList'>
            <div className='Items'>
              <h1>ez</h1> 
            </div>
          </div>
        </div>
      </div>

      <div className='Foter'>
        <h1>Liczba zadań w liście: 0, Wykonano 0%</h1>
      </div>
    </div>
  );
}

export default App;
