import { Link } from 'react-router-dom';
import './Snack.css';

const Snack = ({ name, url }) => {
  return (
    <div className='Snack'>
      <h1 className='Snack-title'>{name}</h1>
      <img className='Snack-image' src={url} alt={name} />
      <Link exact to='/'>
        <button>GO BACK</button>
      </Link>
    </div>
  );
};

export default Snack;
