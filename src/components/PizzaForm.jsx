import {useState} from 'react';

const PizzaForms = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    mytxt: '',
    pizzaBottom: '',
    tomato: true,
    cheese: false,
    jalapeno: false,
    drink: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log('Arvot INPUT kentistä:', name, value);
    setInputs((values) => ({...values, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit} style={{width: '400px', margin: 'auto'}}>
        <label htmlFor="etunimi">
          Etunimi:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            id="etunimi"
            onChange={handleChange}
          />
        </label>
        <hr />
        <label htmlFor="tekstikentta">
          Anna lisätietoja:
          <textarea
            name="mytxt"
            value={inputs.mytxt}
            id="tekstikentta"
            onChange={handleChange}
          ></textarea>
        </label>
        <hr />
        <p>Select pizzabottom</p>
        <select
          name="pizzaBottom"
          value={inputs.pizzaBottom}
          onChange={handleChange}
        >
          <option value="wheat">Wheat</option>
          <option value="rye">Rye</option>
          <option value="gluten-free">GlutenFree</option>
        </select>
        <hr />
        <label>
          Tomato
          <input
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
            onChange={handleChange}
          />
        </label>
        <label>
          Cheese Pleeze
          <input
            type="checkbox"
            name="cheese"
            checked={inputs.cheese}
            onChange={handleChange}
          />
        </label>
        <label>
          Jalapeno
          <input
            type="checkbox"
            name="jalapeno"
            checked={inputs.jalapeno}
            onChange={handleChange}
          />
        </label>
        <hr />
        <p>Select your drink</p>
        <label>
          Fanta
          <input
            type="radio"
            name="drink"
            value="fanta"
            onChange={handleChange}
          />
        </label>
        <label>
          Coca-cola
          <input type="radio" name="drink" onChange={handleChange} />
        </label>
        <label>
          Sprite
          <input
            type="radio"
            name="drink"
            value="sprite"
            // checked={inputs.drink === 'sprite'}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send Data</button>
      </form>
    </>
  );
};

export default PizzaForms;
