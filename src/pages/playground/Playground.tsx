import CustomButton from '../../components/button/Button';

const Playground = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CustomButton
        label="primary"
        onClick={handleButtonClick}
        color="primary"
        variant="filled"
      />
      <CustomButton
        label="secondary"
        onClick={handleButtonClick}
        color="secondary"
        variant="filled"
        radius={12}
      />

      <CustomButton
        label="Primary"
        onClick={() => alert('Clicked!')}
        color="dark"
        variant="filled"
        radius={12}
      />
    </div>
  );
};

export default Playground;
