document.addEventListener('DOMContentLoaded', function () {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function () {
            const os = this.getAttribute('data-os');
            switch (os) {
                case 'windows':
                    if (confirm("Are you sure to download window")) {
                        window.location.href = 'window.html';
                        break;
                    } else {
                        alert("Ok, Cancelling the downlod.")
                        window.location.href = 'So2.html';
                    } break;
                case 'ubuntu':
                    if (confirm("Are you sure to download ubntu")) {
                        window.location.href = "Ubntu.html";
                        break;
                    } else {
                        alert("Ok, Cancelling the downlod.")
                        window.location.href = 'So2.html';
                    }
                    break;
                case 'mac':
                    if (confirm("Are you sure to download Mac")) {
                        window.location.href = 'Mac.html';
                        break;
                    } else {
                        alert("Ok, Cancelling the downlod.")
                        window.location.href = 'So2.html';
                    } break;
                default:
                    alert('Invalid OS');
            }
       });
});
});
