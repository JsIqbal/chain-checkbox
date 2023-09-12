import useFormSubmit from "../../hooks/useFormSubmit";
import DropDown from "./dropdown";

import Terms from "./form-terms";
import FormName from "./form-name";
import DeleteUserButton from "./delete-user-button";
import { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";

const FormContainer = () => {
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [editing, setEditing] = useState(false);

    const {
        onSubmit,
        isSubmitting,
        errors,
        register,
        options,
        loadingSectors,
        selectedValues,
        setSelectedValues,
    } = useFormSubmit();

    const { userData, setUserData, loadingData, updateUserData } =
        useUserData();

    useEffect(() => {
        if (!userId) setUserData(null);
    }, [userId, setUserData]);

    if (loadingSectors) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container-sm mt-5 h-100">
            <div className="card shadow">
                {userId && (
                    <div className="card-header bg-white py-3 col d-flex justify-content-between align-items-center">
                        {<DeleteUserButton setUserId={setUserId} />}
                        {!editing ? (
                            <svg
                                onClick={() => setEditing(true)}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-pencil"
                                viewBox="0 0 16 16"
                            >
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        ) : (
                            <button
                                className="btn btn-primary float-end mt-4"
                                type="submit"
                                disabled={loadingData}
                                onClick={() => updateUserData(selectedValues)}
                            >
                                {loadingData ? "Updating" : "Update Profile"}
                            </button>
                        )}
                    </div>
                )}
                <div className="card-body p-5">
                    <p className="text-center fs-5 text-success mb-5">
                        {userId
                            ? "Your profile is stored"
                            : "Please enter your name and pick the Sectors you are currently involved in."}
                    </p>

                    <form onSubmit={onSubmit} disabled={!editing}>
                        <FormName
                            register={register}
                            errors={errors}
                            nameValue={userData?.name}
                        />

                        <div
                            className="form-outline mb-4"
                            onClick={() => setEditing(true)}
                        >
                            <label className="form-label" htmlFor="sectors">
                                Sectors:
                            </label>

                            <DropDown
                                options={options}
                                setSelectedValues={setSelectedValues}
                                selectedValues={userData?.sectors}
                            />
                        </div>

                        {!userId && (
                            <Terms
                                register={register}
                                errors={errors}
                                checked={true}
                            />
                        )}

                        {!userId && (
                            <button
                                className="btn btn-success float-mid mt-4"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Saving..." : "Save"}
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
