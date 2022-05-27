// code to generate a cpp file 
const fs = require('fs');
const path = require('path')
const {v4 : uuid}  = require('uuid');
// the function v4 of the uuid module is named as uuid 

const dirCodes = path.join(__dirname , 'codes');
// getting the path of the codes folder

// if the file does not exists 
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes , {recursive : true})
    // create a directory names codes
}

// giving a unique ID for each and every CPP file 




const generateFile = async (format , code ) => {
    // makign this an async function
    // format is the extension / language

    const jobID = uuid();
    const fileName = `${jobID}.${format}`
    
    // combining the fileName and the dirCodes 
    const filePath = path.join(dirCodes , fileName);

    await fs.writeFileSync(filePath , code);
    // writing the content in the FIle 
    // we give the filePath instead of the file name in the writeFileSync function

    // returning the filePath 
    return filePath;
}

module.exports  = {generateFile};
// exporting the function generate File 