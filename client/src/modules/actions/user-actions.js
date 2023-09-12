import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const useDeleteUser = (setUserId) => {
    const [loading, setLoading] = useState(false);

    const deleteUser = async () => {
        try {
            await axios.delete("http://localhost:3001/api", {
                data: {
                    _id: localStorage.getItem("userId"),
                },
            });
            localStorage.removeItem("userId")
            setUserId(null)
            toast.success("Successfully deleted profile")
            setLoading(false);
            setTimeout(() => {window.location.reload()}, 1000)
        } catch (error) {
            console.error("Error fetching sectors:", error);
            toast.error("Error deleting profile");
            setLoading(false);
        }
        
    };

    return { loading, deleteUser };
};

export default useDeleteUser;
