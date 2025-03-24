import Button from './components/button';
import styles from './styles/App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log('i run all time');
  // const iRunOnlyOnce = () => {
  //   console.log('i run only once');
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log('I run only once.');
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' changes.");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Continue'} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
