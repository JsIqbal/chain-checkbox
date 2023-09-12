const Terms = ({ register, errors, checked }) => {
    return (
        <>
            <div className="form-check d-flex justify-content-start">
                <input
                    {...register("agree")}
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="agree"
                />
                <label className="form-check-label" htmlFor="agree">
                    {" "}
                    &nbsp; Agree to terms
                </label>
            </div>
            {errors.agree && (
                <p className="text-danger"> {errors.agree.message} </p>
            )}
        </>
    );
};

export default Terms;
