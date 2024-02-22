type Button = {
  onClick: () => void;
};

const Plus: React.FC<Button> = ({ onClick }) => {
  return (
    <button style={{ margin: "5px" }} onClick={onClick}>
      +
    </button>
  );
};

const Minus: React.FC<Button> = ({ onClick }) => {
  return (
    <button style={{ margin: "5px" }} onClick={onClick}>
      -
    </button>
  );
};

export { Plus, Minus };
