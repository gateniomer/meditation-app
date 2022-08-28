const Button = ({onClickHandler,children}) => {
  return (<button 
    className="block bg-blue-600 border-blue-400 border-4 px-2 py-1 text-white rounded-lg mx-auto font-semibold" 
    onClick={onClickHandler}>
      {children}
      </button>)
}

export default Button;