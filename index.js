const express = require('express');
//importing the generateFiles 
const {generateFile} = require('./c++/generateFile')
const {executeCPP} = require('./c++/executeCPP');
const cors = require('cors');
const { executePython } = require('./python/executePython');
const {generatePythonFile}  = require('./python/generatePythonFile');
const path = require('path');


const app = express();

app.use(cors());
// parsing the request into the body
app.use(express.urlencoded({extended : true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')))


app.get('/' , (req , res) => {
    // for the home page 
    // we use th '/'

    // sending a get request 
    return res.json({hello : 'world!'})

})

// posting a request 
app.post('/run' , async (req , res) => {

    /*
    const language = req.body.language;
    const code = req.body.code;
    */
    const {language , code} = req.body;
    // extracting the langugage and the code from the request body

    
    
    if(code === ""){
        // if there is no code in the request body 
        return res.status(400).json({success :false , error : 'Empty code body!'})
    }


    if(language=='cpp'){
        try{
            // need to generate a c++ file with the content from the request 
        // we need to run the file and send the response
        const filePath = await generateFile(language , code);
        // we use the async function for the post request 
        // because, the generateFIle function is an async function which 
        // awaits for creating the codes directory first 
        // only after it is created, the generateFile will be able to perform further operations 
        // and afer that only, we will be able to use the filePath output on the index.js 
    
        
        const output = await executeCPP(filePath);
    
        
        return res.json({filePath, output })
        // dispalying the body of the request 
        // sending the body of the request as a response
        }catch(err){
            res.status(500).json({err});
            // returning an error if there is an error
        }

    }else if(language=='py'){
        console.log('this is python code')

        try{
            // need to generate a c++ file with the content from the request 
        // we need to run the file and send the response
        const filePath = await generatePythonFile(language , code);
        // we use the async function for the post request 
        // because, the generateFIle function is an async function which 
        // awaits for creating the codes directory first 
        // only after it is created, the generateFile will be able to perform further operations 
        // and afer that only, we will be able to use the filePath output on the index.js 
    
        
        const output = await executePython(filePath);
    
        
        return res.json({filePath, output })
        // dispalying the body of the request 
        // sending the body of the request as a response
        }catch(err){
            res.status(500).json({err});
            // returning an error if there is an error
        }

    }
})

const PORT = process.env.PORT || 5000
const LOCAL_ADDRESS = process.env.LOCAL_ADDRESS || "0.0.0.0"

if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname + '/public')))
}



app.listen(PORT , () => {
    console.log('Listening on port : ' , PORT)
})
// the app is listening on the port 5000 
