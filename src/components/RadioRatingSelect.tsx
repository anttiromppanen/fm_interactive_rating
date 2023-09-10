type Props = {
  value: string,
  inputSelected: string,
  setInputSelected: (value: string) => void,
}

function RadioRatingSelect({ value, inputSelected, setInputSelected }: Props) {
  return (
    <label htmlFor={value}>
      <input 
        type="radio" 
        name="radioValue" 
        id={value}
        className="peer sr-only checked:bg-userLightGrey hover:bg-userOrange"
        checked={inputSelected === value}
        onClick={() => value === inputSelected && setInputSelected("")}
        onChange={() => setInputSelected(value)}
      />
      <div
        className="w-12 h-12 rounded-full bg-userDarkBlue flex justify-center items-center peer-checked:bg-userMediumGrey peer-checked:[&>p]:text-userWhite hover:bg-userOrange hover:text-userWhite group">
        <p className="text-userLightGrey select-none group-hover:text-userWhite">
          {value}
        </p>
      </div>
    </label>
  )
}

export default RadioRatingSelect