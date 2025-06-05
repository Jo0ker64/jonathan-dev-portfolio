window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
formbutton("create", {
    action: "https://formspree.io/f/xpwrwngd",
    title: "Contacte-moi",
    fields: [
        {
            type: "email",
            label: "Email",
            name: "email",
            required: true,
            placeholder: "ton@email.com"
        },
        {
            type: "textarea",
            label: "Message",
            name: "message",
            placeholder: "Ce que tu veux me dire..."
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "#6a0dad", // jokerPurple
            color: "#fff"
        },
        button: {
            backgroundColor: "#6a0dad", // jokerPurple
            color: "#fff"
        }
    }
});