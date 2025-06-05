document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("formStatus").classList.remove("hidden");
            form.reset();
        }
    });
});
