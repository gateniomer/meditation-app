const Button = ({onClickHandler,children}) => {
  return (<button 
    className="block bg-slate-400 px-2 py-1 text-white rounded-lg mx-auto" 
    onClick={onClickHandler}>
      {children}
      </button>)
}

export default Button;