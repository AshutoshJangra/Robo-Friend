import React from 'react' ;


const Card = ({name , email}) => {
    return(
         <div className="bg-moon-gray h6 dib tc pa2 br3 grow ba ma2 w5 b--solid"> 
             <img src={`https://robohash.org/${email}200x200`} alt="" />
             <h2 className="f4">{name}</h2>
             <h3 className="f5">{email}</h3>
         </div>
    );
}

export default Card;

