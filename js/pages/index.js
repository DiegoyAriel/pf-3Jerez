document.getElementById("magic").addEventListener("click", function(e) {
    prevent(e);
    Swal.fire({
        title: "Thank you!",
        text: "You chose Madame La Purr!",
        icon: "info"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pages/magic.html";
        }
    });
});

document.getElementById("writting").addEventListener("click", function(e) {
    prevent(e);
    Swal.fire({
        title: "Thank you!",
        text: "You chose Cathspiare!",
        icon: "info"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pages/writting.html";
        }
    });
});

document.getElementById("advice").addEventListener("click", function(e) {
    prevent(e);
    Swal.fire({
        title: "Thank you!",
        text: "You chose Ariel, our Owner!",
        icon: "info"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pages/orientation.html";
        }
    });
});

document.getElementById("orientation").addEventListener("click", function(e) {
    prevent(e);
    Swal.fire({
        title: "Thank you!",
        text: "You chose Miau La Casan!",
        icon: "info"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./pages/advices.html";
        }
    });
});

function prevent(e) {
    e.preventDefault();
}