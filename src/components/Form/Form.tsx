import FullRoundedContainer from '../FullRoundedContainer';
import RadioRatingSelect from '../RadioRatingSelect';
import starIcon from "../../assets/images/icon-star.svg";

type Props = {
  inputSelected: string,
  setInputSelected: (value: string) => void,
  setFormSubmitted: (value: boolean) => void;
}

function Form({ inputSelected, setInputSelected, setFormSubmitted }: Props) {

  const handleClick = () => inputSelected && setFormSubmitted(true);

  return (
    <div>
      <FullRoundedContainer>
        <img src={starIcon} alt="Star icon" />
      </FullRoundedContainer>
      <div>
        <h1 className="text-userWhite text-2xl my-4 sm:text-3xl sm:mt-10 sm:mb-4">How did we do?</h1>
        <p className="text-userMediumGrey text-[15px] sm:text-lg">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering. 
        </p>
      </div>
      <div className="mt-6 flex justify-between">
        <RadioRatingSelect
          value="1" 
          inputSelected={inputSelected} 
          setInputSelected={setInputSelected}
        />
        <RadioRatingSelect 
          value="2" 
          inputSelected={inputSelected} 
          setInputSelected={setInputSelected}
        />
        <RadioRatingSelect 
          value="3" 
          inputSelected={inputSelected} 
          setInputSelected={setInputSelected}
        />
        <RadioRatingSelect 
          value="4" 
          inputSelected={inputSelected} 
          setInputSelected={setInputSelected}
        />
        <RadioRatingSelect 
          value="5" 
          inputSelected={inputSelected} 
          setInputSelected={setInputSelected}
        />
      </div>
      <div className="mt-6">
        <button 
          type="submit" 
          disabled={inputSelected === ""}
          onClick={handleClick}
          className="bg-userOrange text-userWhite w-full py-3 rounded-3xl text-sm tracking-widest sm:text-[17px] disabled:opacity-75"
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Form;