export default {
    name: "footer",
    type: "document",
    title: "Footer",
    fields: [
        {
            name: "navigationLinks",
            type: "array",
            title: "Navigation Links",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "name", type: "string", title: "Title" },
                        { name: "url", type: "string", title: "URL" }
                    ]
                }
            ]
        },
        {
            name: "contact",
            type: "object",
            title: "Contact Details",
            fields: [
                { name: "phone", type: "string", title: "Phone" },
                { name: "email", type: "string", title: "Email" },
                { name: "address", type: "string", title: "Address" }
            ]
        },
        {
            name: "socialLinks",
            type: "array",
            title: "Social Links",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "name", type: "string", title: "Platform Name" },
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon Upload",
                            options: { hotspot: true }
                        },
                        { name: "url", type: "string", title: "URL" }
                    ]
                }
            ]
        },
        
        {
            name: "copyright",
            type: "string",
            title: "Copyright Text"
        }
    ]
};
