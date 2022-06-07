const {exec} = require('child_process');
// importing the exec function from the child-process module 
// this helpd in interacting with the shell
const fs = require('fs');

const path = require('path');

const outputPath = path.join(__dirname , "outputs");

/*
if(!fs.existsSync(outputPath)){
    // checking if the outpuPath exists or not 
    // if it does not exists then, we create a new directory 

    fs.mkdirSync(outputPath , {recursive : true})
}
*/


const executePython = (filePath) => {
    // example command to compile and create an output file 
    // g++ e3a9eb17-0587-4f63-b510-1ac9aaf231e5 && ./a.out

    // returning a promise object
        // example path :-
        // /home/atharva007/Desktop/Web Development/FULL-STACK/Projects/Online-C++-IDE-reactjs-nodejs/backend/codes/e3a9eb17-0587-4f63-b510-1ac9aaf231e5.cpp

        const jobID = path.basename(filePath).split(".")[0];
        // get the basename of the cpp file 
        // which is 
        // e3a9eb17-0587-4f63-b510-1ac9aaf231e5.cpp
        // and then split it by '.'
        const outPath = path.join(outputPath , `${jobID}.out`);

        console.log('filepath : ' , filePath);
        console.log('jobID : ' ,jobID);
        console.log('outpath : ' , outPath);
        console.log('outputpath : ' , outputPath);
        
        return new Promise((resolve , reject) => {
            exec(`python3 python/codes/${jobID}.py`, 
            // g++ ${filePath} -o ${outPath} && cd ${outputPath} && ./${jobID}
            // g++ codes/${jobID} -o outputs/${jobID} && ./outputs/${jobID}
                (error , stdout , stderr) => {
                    // the error is the error which occured while compilation 
                    // the stdout is the output of the cpp file 
                    // the stderr is the error output w us hich will be sent to
                    
                    error && reject({error , stderr});
                    stderr && reject(stderr);
                    resolve(stdout);
                    // the reject simply exists out of the function 
                    // if successful, send the output ( stdout )
                }
            )
            // exec() takes in a command 
            // we first compile the cpp file  
            // then we create an output file in the outputPath which we have created 
            // then, we enter into the outputPath ( or the output folder )
            // and execute the output file which we had created just now 

            // the outPath => is the filePath of the output file ( this contains the outputPath + jobID.out file )
            // the outputPath => is the path of the directory/folder where the output file is located ( which is the outputs folder )
            // the jobID => is the name of the output file 
            // the filePath => is the filePath of the current CPP file which we are executing ( excluding the '.cpp' extension )

        })
}

module.exports = {
    executePython
};