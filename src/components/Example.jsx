import {useState, useEffect, useRef} from 'react';

const Example = () => {
  //let traditionalCount = 0;
  const [count, setCount] = useState(0);

  console.log('Component rendered');

  // Tämä ei triggeröi uudelleen renderöintiä
  // const addWithoutState = () => {
  //   traditionalCount++;
  //   console.log(traditionalCount);
  // };

  const addWithState = () => {
    setCount(count + 1);
    console.log(count);
  };

  // 1. Ilman riippuvuustaulukkkoa
  // useEffect(fn)

  // 2. Komponentin mount vaiheessa
  // useEffect(fn, [])

  // 3. Mount vaiheess sekä count - arvon muuttuesssa
  // useEffect(fn, [count])

  useEffect(() => {
    console.log('UseEffect triggered');
  }, [count]);

  // Käytetään useRef
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addWithState}>Add one</button>
      <h3>UseRef demo</h3>
      <input type="text" name="name" id="name" ref={inputRef} />
      <br />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
};

export default Example;
