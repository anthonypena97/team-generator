const generateEngineers = (engineers) => {

    // console.log("engingineers,", engineers)
    engineersHTML = []

    for (let i = 0; i < engineers.length; i++) {

        let eachEngineer =
            `
        <div class="row">
             <div class="col red">
                <div class="card">
        
                    <div class="card-header">
                        <h5 class="card-title">${engineers[i].name}</h5>
                        <h6 class="card-title role"> <span class="material-icons">laptop</span> Engineer</h6>
                    </div>
        
                    <div class="card-body">
                      <p class="card-text">EMAIL: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></p>
                      <p class="card-text">ID: ${engineers[i].id}</p>
                      <p class="card-text">GitHub: <a href="https://www.github.com/${engineers[i].github}">${engineers[i].github}</a></p>
                    </div>
        
                </div>
            </div>
        </div>
        `

        engineersHTML.push(eachEngineer);

    }

    return engineersHTML.join('');

};

const generateInterns = (interns) => {

    internsHTML = [];

    for (let i = 0; i < interns.length; i++) {

        let eachIntern =
            `
         <div class="row">
            <div class="col red">
                  <div class="card">
        
                      <div class="card-header">
                          <h5 class="card-title">${interns[i].name}</h5>
                          <h6 class="card-title role"> <span class="material-icons">school</span> Intern</h6>
                      </div>
        
                      <div class="card-body">
                        <p class="card-text">EMAIL: <a href="mailto:${interns[i].email}">${interns[i].email}</a></p>
                        <p class="card-text">ID: ${interns[i].id}</p>
                        <p class="card-text">SCHOOL: ${interns[i].school}</p>
                      </div>
        
                </div>
             </div>
        </div>
        `

        internsHTML.push(eachIntern)
    };

    return internsHTML.join('');

};

const generatePage = (manager, engineers, interns) => {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
        <link rel="stylesheet" href="./assets/style.css"><title>TEAM ROSTER</title>
    </head>
    <body>
      <div class="team">
          <H1>TEAM</H1>
      </div>
    
      <div class="employee-section">
        <div class="employee-container">
                <div class="container">
    
                    <div class="row">
                      <div class="col red">
                            <div class="card">
    
                                <div class="card-header">
                                    <h5 class="card-title">${manager.name}</h5>
                                    <h6 class="card-title role"><span class="material-icons">self_improvement</span>Manager</h6>
                                </div>
    
                                <div class="card-body">
                                  <p class="card-text">EMAIL: <a href="mailto:${manager.email}">${manager.email}</a></p>
                                  <p class="card-text">ID: ${manager.id}</p>
                                  <p class="card-text">OFFICE: ${manager.office}</p>
                                </div>
    
                            </div>
                        </div>
                    </div>

                    ${generateEngineers(engineers)}

                    ${generateInterns(interns)}
    
                </div>
            </div>
      </div>
    </body>
    
    </html>`;

};

module.exports = generatePage;