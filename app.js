const fileInput=document.querySelector('.input_main')
const downloadBtn= document.querySelector('button')

downloadBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    downloadBtn.innerText="Downloading File...";
    fetchFile(fileInput.value);
})

function fetchFile(url){
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file =>{
      // URL creatcObjURL creates a url of passed object
        let tempUrl=URL.createObjectURL(file);
        let aTag=document.createElement('a');
        aTag.href=tempUrl; // passing temUrl as href value of <a> tag
        // passing file last name and extension as download value of <a> tag
        aTag.download =url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag)// adding <a> tag inside body
        aTag.click();// clicking <a> tag so the file download 
        aTag.remove() // removing <a> tag once file downloaded
        URL.revokeObjectURL(tempUrl); // removing tempURL form the document
        downloadBtn.innerText="Download File...";



    }).catch(()=>{
        // catch method will call if any error comes during downloading
        downloadBtn.innerText="Download File...";
        alert('Faild to download file!');
    });
}

fileInput.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        e.preventDefault();
        console.log('enter hoice');
        fileInput.click();
    }
})






