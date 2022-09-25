const Button = ({onClickHandler,children,className}) => {
  return (<button 
    className={` bg-mainColor shadow-lg px-5 py-1 text-text-light rounded-lg font-semibold ${className}`} 
    onClick={onClickHandler}>
      {children}
      </button>)
}

export default Button;