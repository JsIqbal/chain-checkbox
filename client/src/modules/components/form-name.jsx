const FormName = ({ register, errors, nameValue }) => {

    return (
        <div className="form-outline mb-4">
            <label className="form-label float-start" htmlFor="name">
                Name:
            </label>
            <input
                {...register("name")}
                type="text"
                id="name"
                className="form-control"
                placeholder={nameValue ? nameValue : ""}
            />
            {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
            )}
        </div>
    );
};

export default FormName;
