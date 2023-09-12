import useDeleteUser from "../actions/user-actions";



const DeleteUserButton = ({ setUserId }) => {
    const { deleteUser, loading } = useDeleteUser(setUserId);
    return (
        <button className="btn btn-danger" onClick={deleteUser}>
            {loading ? "Deleting" : "Delete profile"}
        </button>
    );
};

export default DeleteUserButton;
