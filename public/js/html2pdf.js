function downloadPDF(i) { 

  const content = document.getElementById(`content-pdf-${i}`); 
   const options = {
    margin : [10,10,10,10], 
    filename:"Romaneio.pdf", 
    html2canvas:{scale:2}, 
    jsPDF: {unit:"mm",format:"a4",orientation:"portrait"}
   } 
   html2pdf().set(options).from(content).save();
}