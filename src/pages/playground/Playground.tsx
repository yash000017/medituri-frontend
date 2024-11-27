import CustomButton from '../../components/button/Button';

const ExampleComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
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
        color="secondary"
        size="sm"
        variant="outline"
        radius={12}
      />
      <CustomButton
        label="Disabled Button"
        disabled
        color="dark"
        size="lg"
        variant="light"
      />
    </div>
  );
};

export default ExampleComponent;
