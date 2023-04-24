let savedTechArray=[]
let mellomrom=" "
let techExpInProfile=""
function getSavedTech(){
    techExpInProfile=""
    savedTechArray=[]
        
   
   model.data.techXpRelations.filter(el=>el.accountId==model.data.currentUser.id).map(el=>el.technologyId).forEach((el)=>
   { for (let i = 0; i < model.data.techXp.length; i++) {
    console.log(i)
       // console.log(el)
       if (el==model.data.techXp[i].id) {
           console.log(model.data.techXp[i].name)
       savedTechArray.push(model.data.techXp[i].name) 
       techExpInProfile+=/*html*/`
       <li>${model.data.techXp[i].name} </li>
       
       `
       
       }
      
   }
      
       // editStudentProfileInputs.codeExpList.push(model.data.techXp[indexOf(el.technologyId)])})
       
   // }
  
  

})

   
}
function openDataUrlInNewTabProfile(linken){
    const dataUrl =linken
    const htmlContent = /*html*/`
      <html>
        <head>
          <title>Data URL Viewer</title>
          <style>
          body, html {
            margin: 0;
            padding: 0;
          }
          object, iframe {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            margin: 0;
            padding: 0;
          }
        </style>
        </head>
        <body>
          <object data="${dataUrl}" type="application/pdf">
            // <embed src="${dataUrl}" type="application/pdf" />
          </object>
        </body>
      </html>
    `;
  
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close();
}
function Edit(){
    model.app.page="editStudentProfile"
    updateView()
}
function openDataUrlInNewTabgithub(linken){
    const dataUrl = linken;

  // Open a new tab with the data URL
  window.open(dataUrl, "_blank");
}
