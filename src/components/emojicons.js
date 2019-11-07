
import React from 'react'

 export default  (subject)=>{
    switch(subject.toLowerCase()) {  
    case 'math': 
    return <span className="emojicons"  role="img" aria-label="emojicon"> 🤓 </span>;          
    case 'science' ||'biology':           
    return <span className="emojicons"  role="img" aria-label="emojicon"> 🧪 </span>; 
    case 'biology':           
    return <span className="emojicons"  role="img" aria-label="emojicon">   🧬 </span>;           
    case 'english':            
    return <span  className="emojicons"  role="img" aria-label="emojicon"> 📕 </span>; 
    case 'social studies':            
    return <span className="emojicons"  role="img" aria-label="emojicon"> 🌍 </span>; 
    case 'film':            
    return <span className="emojicons"  role="img" aria-label="emojicon"> 🎬 </span>; 
    case 'writing':            
    return <span className="emojicons"  role="img" aria-label="emojicon"> 📝  </span>; 
    case 'music':            
    return <span style={{fontSize:"2.5rem"}} role="img" aria-label="emojicon">  🎼 </span>;           
    default:           
     return null;}    
    }

    