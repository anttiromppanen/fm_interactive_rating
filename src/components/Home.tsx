import { useState } from "react";
import Form from "./Form/Form";
import FormSubmitted from "./FormSubmitted/FormSubmitted";

function Home() {
  const [inputSelected, setInputSelected] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="bg-gradient-to-t from-[#171E28] to-[#1F2531] py-6 px-6 w-full max-w-md rounded-3xl">
      {
        formSubmitted
          ? <FormSubmitted inputValue={inputSelected} />
          : <Form 
            inputSelected={inputSelected} 
            setInputSelected={setInputSelected} 
            setFormSubmitted={setFormSubmitted}
          />
      }
    </div>
  )
}

export default Home;