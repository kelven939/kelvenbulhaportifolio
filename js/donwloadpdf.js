window.onload = function() {
    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
      var doc = new jsPDF();
      doc.html(document.body, {
        callback: function(pdf) {
          pdf.save('portfolio.pdf');
        }
      });
    });
  };  