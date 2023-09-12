import { useEffect, useRef, useState } from "react";

const DropDown = ({ options, setSelectedValues, selectedValues }) => {
    const selectRef = useRef();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(selectedValues || []);

    const handleSelected = (value) => {
        if (value) {
            const data = selected.some((obj) => obj._id === value._id);

            if (data) {
                const filterData = selected.filter(
                    (item) => item._id != value._id
                );

                setSelected(filterData);
                setSelectedValues(filterData);
            } else {
                setSelected([value, ...selected]);
                setSelectedValues([value, ...selected]);
            }
        }
    };

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (selectedValues) setSelected(selectedValues);
    }, [selectedValues]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef}>
            <div
                type="text"
                className="form-control"
                onClick={() => setOpen(true)}
                style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
            >
                {selected?.length < 1 && <span>Select Option</span>}

                {selected.map((item) => (
                    <span
                        key={item._id}
                        style={{
                            background: "#E6E6E6",
                            padding: "2px 4px",
                            display: "flex",
                            textAlign: "center",
                        }}
                    >
                        {item.label}

                        <button
                            type="button"
                            onClick={() => {
                                handleSelected(item);
                            }}
                            style={{
                                border: "none",
                                outline: "none",
                                background: "#E6E6E6",
                                fontSize: "14px",
                                fontWeight: "600",
                                padding: "0",
                                marginLeft: "4px",
                            }}
                        >
                            X
                        </button>
                    </span>
                ))}
            </div>

            {open && (
                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            padding: "10px",
                            boxShadow: "2px 2px 3px",
                            marginTop: "10px",
                            maxHeight: "200px",
                            overflow: "hidden",
                            overflowY: "auto",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            zIndex: "99999",
                            background: "#fff",
                        }}
                    >
                        {options.map((option) => (
                            <div key={option._id}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                    }}
                                >
                                    <input
                                        name="select"
                                        type="checkbox"
                                        value={option.label}
                                        onChange={() => handleSelected(option)}
                                        checked={selected.some(
                                            (obj) => obj._id === option._id
                                        )}
                                    />
                                    <label>{option.label}</label>
                                </div>

                                {option.options.length > 0 &&
                                    selected.some(
                                        (obj) => obj._id === option._id
                                    ) &&
                                    option.options.map((item) => (
                                        <div
                                            key={item._id}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                }}
                                            >
                                                <input
                                                    name="select"
                                                    type="checkbox"
                                                    value={item.label}
                                                    onChange={() =>
                                                        handleSelected(item)
                                                    }
                                                    checked={selected.some(
                                                        (obj) =>
                                                            obj._id === item._id
                                                    )}
                                                />
                                                <label>{item.label}</label>
                                            </div>

                                            {item.subOptions.length > 0 &&
                                                selected.some(
                                                    (obj) =>
                                                        obj._id === item._id
                                                ) &&
                                                item.subOptions.map(
                                                    (subOption) => (
                                                        <div
                                                            key={subOption._id}
                                                            style={{
                                                                marginLeft:
                                                                    "10px",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    gap: "8px",
                                                                }}
                                                            >
                                                                <input
                                                                    name="select"
                                                                    type="checkbox"
                                                                    value={
                                                                        subOption.label
                                                                    }
                                                                    onChange={() =>
                                                                        handleSelected(
                                                                            subOption
                                                                        )
                                                                    }
                                                                    checked={selected.some(
                                                                        (obj) =>
                                                                            obj._id ===
                                                                            subOption._id
                                                                    )}
                                                                />
                                                                <label>
                                                                    {
                                                                        subOption.label
                                                                    }
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;
