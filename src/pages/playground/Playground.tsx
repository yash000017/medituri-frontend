import CustomButton from '../../components/button/Button';

const ExampleComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <CustomButton
        label="Primary Button"
        onClick={handleButtonClick}
        color="primary"
        size="md"
        variant="filled"
      />
      <CustomButton
        label="Secondary Button"
        onClick={handleButtonClick}
        color="warning"
        size="sm"
        variant="filled"
        radius={12}
      />

      <CustomButton
        label="Primary Button"
        onClick={() => alert('Clicked!')}
        color="success"
        size="sm"
        variant="filled"
        radius={12}
      />
    </div>
  );
};

export default ExampleComponent;
