const sectorsData = [
    {
        label: "Manufacturing",
        options: [
            {
                value: "Construction materials",
                label: "Construction materials",
            },
            {
                value: "Electronics and Optics",
                label: "Electronics and Optics",
            },
            {
                value: "Food and Beverage",
                label: "Food and Beverage",
                subOptions: [
                    {
                        value: "Bakery & confectionery products",
                        label: "Bakery & confectionery products",
                    },
                    { value: "Beverages", label: "Beverages" },
                    {
                        value: "Fish & fish products",
                        label: "Fish & fish products",
                    },
                    {
                        value: "Meat & meat products",
                        label: "Meat & meat products",
                    },
                    {
                        value: "Milk & dairy products",
                        label: "Milk & dairy products",
                    },
                    { value: "Other", label: "Other" },
                    {
                        value: "Sweets & snack food",
                        label: "Sweets & snack food",
                    },
                ],
            },
            { value: "Furniture", label: "Furniture" },
            { value: "Machinery", label: "Machinery" },
            { value: "Metalworking", label: "Metalworking" },
            { value: "Plastic and Rubber", label: "Plastic and Rubber" },
            { value: "Printing", label: "Printing" },
            { value: "Textile and Clothing", label: "Textile and Clothing" },
            { value: "Wood", label: "Wood" },
            { value: "Other", label: "Other" },
        ],
    },
    {
        label: "Service",
        options: [
            { value: "Business services", label: "Business services" },
            { value: "Engineering", label: "Engineering" },
            {
                value: "Information Technology and Telecommunications",
                label: "Information Technology and Telecommunications",
                subOptions: [
                    {
                        value: "Data processing, Web portals, E-marketing",
                        label: "Data processing, Web portals, E-marketing",
                    },
                    {
                        value: "Programming, Consultancy",
                        label: "Programming, Consultancy",
                    },
                    {
                        value: "Software, Hardware",
                        label: "Software, Hardware",
                    },
                    {
                        value: "Telecommunications",
                        label: "Telecommunications",
                    },
                ],
            },
            { value: "Tourism", label: "Tourism" },
            { value: "Translation services", label: "Translation services" },
            {
                value: "Transport and Logistics",
                label: "Transport and Logistics",
                subOptions: [
                    { value: "Air", label: "Air" },
                    { value: "Rail", label: "Rail" },
                    { value: "Road", label: "Road" },
                    { value: "Water", label: "Water" },
                ],
            },
        ],
    },
];

module.exports = sectorsData;
