const Button = ({onClickHandler,children,className}) => {
  return (<button 
    className={` bg-blue-600 border-blue-400 border-4 px-5 py-1 text-white rounded-lg font-semibold ${className}`} 
    onClick={onClickHandler}>
      {children}
      </button>)
}

export default Button;