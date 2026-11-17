import Example from '../components/Example';
import HooksExample from '../components/HooksExample';
import PizzaForms from '../components/PizzaForm';
import Testform from '../components/Testform';

const Demo = () => {
  return (
    <div>
      <h2>Tänne on tulossa HOOKS demo</h2>
      <Example />
      <h3>Hooks Example wsk sivuilta</h3>
      <HooksExample />
      <h3>Test Form</h3>
      <Testform />
      <PizzaForms />
    </div>
  );
};

export default Demo;
