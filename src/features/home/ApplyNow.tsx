import React, { useEffect, useRef, useState } from "react";
import "./apply-now.scss";
import { applyNowModel } from "./apply-now-model";
import { observer } from "@legendapp/state/react";
import CloseIcon from "@mui/icons-material/Close";
import { Spinner } from "../../components/loaders/spinner";
import { observe } from "@legendapp/state";

export const ApplyNow = observer(() => {
  const modalStatus = applyNowModel.status$.get();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const closeModal = () => {
      applyNowModel.actions.toggleModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const firstName = formRef.current["firstName"].value;
    const lastName = formRef.current["lastName"].value;
    const phone = formRef.current["phone"].value;
    const countryCode = "+91";

    let formData = { firstName, phone, lastName, countryCode };
    applyNowModel.actions.submitApplication(formData);
  };

  useEffect(() => {
    const submitApiStatus$ = applyNowModel.obsSubmit.apiStatus;
    const formSubmitDisposer = observe(submitApiStatus$, () => {
        let apiStatus = submitApiStatus$.peek();
        if(apiStatus === "pending") {
            setIsLoading(true);
        }
        else if(apiStatus === "success" || apiStatus === "error"){
            setIsLoading(false);
        }

        if(apiStatus === "error"){
          setErrorMessage(applyNowModel.obsSubmit?.errorMessage?.peek?.())
        }
    })

    return () => {
        formSubmitDisposer();
    }
  }, [])

  if (!modalStatus) return null;

  return (
    <div className="modal-right">
      <div className="modal-body">
        <h4>Our Team will get in touch with you!</h4>
        <CloseIcon className="close" onClick={closeModal} />
        <form className="form" ref={formRef} onSubmit={onSubmit}>
          <input
            className="input"
            type="text"
            name="firstName"
            placeholder="Full Name"
            required
          />
          <input 
            className="input"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <div className="fr-aic g-10">
            <input type="button" className="prefix input" value="+91" disabled />
            <input
              type="number"
              pattern="^\d{10}$"
              title="enter a valid 10 digit number"
              name="phone"
              className="input phone"
              required
              placeholder="Phone"
            />
          </div>
          {errorMessage && <span className="error-message">{errorMessage}</span>}
          <button className="btn fr-aic g-10" disabled={isLoading}>
            <span>Get a callback</span>
            {isLoading && <Spinner />}
          </button>
        </form>
      </div>
    </div>
  );
});
