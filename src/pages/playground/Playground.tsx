import CustomButton from '../../components/button/Button';

const ExampleComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CustomButton
        label="primary"
        onClick={handleButtonClick}
        color="primary"
        size="md"
        variant="filled"
      />
      <CustomButton
        label="secondary"
        onClick={handleButtonClick}
        color="secondary"
        size="lg"
        variant="filled"
        radius={12}
      />

      <CustomButton
        label="Primary"
        onClick={() => alert('Clicked!')}
        color="dark"
        size="sm"
        variant="filled"
        radius={12}
      />
    </div>
  );
};

export default ExampleComponent;
