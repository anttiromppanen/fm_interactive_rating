import formSubmittedImage from "../../assets/images/illustration-thank-you.svg";

type Props = {
  inputValue: string,
}

function FormSubmitted({ inputValue }: Props) {
  return (
    <div className="flex flex-col items-center">
      <img src={formSubmittedImage} alt="Form submitted" />
      <div className="p-3 my-8 rounded-3xl bg-userDarkBlue">
        <p className="text-userOrange">You selected {inputValue} out of 5</p>
      </div>
      <div className="text-center">
        <h1 className="text-2xl text-userWhite">Thank you!</h1>
        <p className="my-4 text-userMediumGrey">We appreciate you taking the time to give a rating. If you ever need more support, don&lsquo;t hesitate to get in touch</p>
      </div>
    </div>
  )
}

export default FormSubmitted