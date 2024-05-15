import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h3>Todo List🌳</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
