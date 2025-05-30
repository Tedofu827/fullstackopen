const Header = ({ header }) => {
  return <h2 key={header.id}>{header.name}</h2>;
};

export default Header;
