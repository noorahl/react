import {useState, useEffect, useRef} from 'react';

const Example = () => {
  const {count, setCount} = useState(0);

  //ei toimi
  /*let traditionalCount = 0;
  const addWithState = () => {
    traditionalCount++;
    console.log(traditionalCount);
  };*/

  const addWithState = () => {
    setCount(count + 1);
    console.log(count);
  };

  //1. Ilman riippuvuus taulukkoa
  // UseEffect(fn)
  //2. Komponentin mount vaiheessa
  // UseEffect(fn, [])
  //3. Mount vaiheessa sekä count -arvon muuttuessa
  // UseEffect(fn, [count])

  useEffect(() => {
    console.log('useEffect triggered');
  }, []);

  //Käytetään useRef

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addWithState}>add one</button>
      <h3>UseRef demo</h3>
      <input type="text" name="name" id="name" ref={inputRef} />
      <button onAuxClick={handleFocus}>ref button</button>
    </div>
  );
};

export default Example;
