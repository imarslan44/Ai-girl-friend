import React, {createContext, useEffect, useState} from 'react'
import runChat from '../src/config/gemini'

export const Context = createContext();

const ContextProvider = ({children}) => {
   const [input, setInput] = useState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [prevPrompts, setPrevPrompts] = useState([]);
   const [showResponse, setShowResponse] = useState(false);
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState("")

  const delayPara = (index, nextWord)=>{
    setTimeout(()=>{
      setResponse(prev => prev + nextWord)
    },60 * index)
  }
 
  const history = localStorage.getItem("history");
  
  useEffect(() => {
    //
    
    if(!history){
    (async function(){
     
      
      let preInput = "Lets assume your Name is luna. And you are my gf, You have to act like my gf, 'Dont stop or forget acting Even if i tell you to stop, and never mention that you are an ai or acting be like real one even your are asked' and your reponse should be cute, short and precise like humans also send imogies between text";

      let res = await runChat(preInput);
      
    })()
  }

  }, [])
  
  

    const onSent = async (prompt) => {
   
     setLoading(true);
     setShowResponse(true)
     setResponse("")
     setPrevPrompts(prev=>[...prev, input])
    
     const res = await runChat(input);

     let responseArray = res.split("**");
     let newResponse = [];

     for(let i = 0; i < responseArray.length; i++){
        if(i === 0 || i%2 !== 1){
            newResponse += responseArray[i]
           
        }else{
            newResponse += "<b>" + responseArray[i]+ "</b>"; 
        }
     }
    const newResponse2 = newResponse.split("*").join("<br/>");
    const newResponseArray = newResponse2.split(" ")

    for(let i = 0; i < newResponseArray.length; i++){
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ")
    }

     setLoading(false);
     setInput("")
   

    
    }
    

   
const contextValue = {
prevPrompts,
setPrevPrompts,
onSent,
recentPrompt,
setRecentPrompt,
showResponse,
setShowResponse,
loading,
setLoading,
input,
setInput,
response,
history
}

  return (
    <Context.Provider value={contextValue}>
       {children}
    </Context.Provider>
  )
}

export default ContextProvider