

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
      <input type='text' className="newsletter-input" required placeholder="Insira seu usuário" />
      <input type='email' className="newsletter-input" required placeholder="Insira seu email" />
      <button type="submit" className="newsletter-button">Seguir</button>
    </form>
  );
};

export default Form;
