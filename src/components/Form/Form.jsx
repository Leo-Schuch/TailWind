import Input from "../Input/Input";

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={safeSubmit} className='h-full flex flex-col items-center justify-center -mt-20 gap-10 mx-5'>
      <Input type='text' required placeholder="Insira seu usuário" />
      <Input type='email' required placeholder="Insira seu email" />
      <button type="submit" className="px-6 py-2 w-full max-w-sm bg-newsletter-100 dark:bg-dark-200 rounded-full text-gray-100 dark: text-gray-20 uppercase outline-none">Seguir</button>
    </form>
  );
};

export default Form;
