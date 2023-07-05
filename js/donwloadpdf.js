const downloadButton = document.querySelector('#downloadButton');
downloadButton.addEventListener('click', () => {

    const pdfgenarar = document.querySelector('.pdfgenarar');

    const options = {
        margin: [10, 10, 10, 10],
        filename: "protfolio.pdf",
        html2canvas: { scale: 2 },
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"},
    };
    html2pdf().set(options).from(pdfgenarar).save();
});