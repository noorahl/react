import Example from '../components/Example';
import HooksExample from '../components/HooksExample';

const Demo = () => {
  return (
    <div>
      <h2>Tänne on tulossa HOOKS demo</h2>
      <button className="bg-blue-300 hover:text-amber-300 hover:bg-amber-950">
        nappi
      </button>
      <Example />
      <h3>Hooks Example wsk sivuilta</h3>
      <HooksExample />
    </div>
  );
};

export default Demo;
