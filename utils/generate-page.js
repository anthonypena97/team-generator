const generatePage = (manager, engineers, interns) => {

    // console.log(manager);
    // console.log(engineers);
    // console.log(interns);

    return`<!DOCTYPE html>
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
                                  <p class="card-text">EMAIL: <a href="mailto:toto@email.com">toto@email.com</a></p>
                                  <p class="card-text">ID: 779432</p>
                                  <p class="card-text">OFFICE: 483290483</p>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                      <div class="col red">
                            <div class="card">
    
                                <div class="card-header">
                                    <h5 class="card-title">Sandra</h5>
                                    <h6 class="card-title role"> <span class="material-icons">laptop</span> Engineer</h6>
                                </div>
    
                                <div class="card-body">
                                  <p class="card-text">EMAIL: <a href="mailto:sandra@email.com">sandra@email.com</a></p>
                                  <p class="card-text">ID: 789794832</p>
                                  <p class="card-text">GitHub: <a href="https://www.github.com/sandraGitHub.com">sandraGitHub</a></p>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                      <div class="col red">
                            <div class="card">
    
                                <div class="card-header">
                                    <h5 class="card-title">Alex</h5>
                                    <h6 class="card-title role"> <span class="material-icons">school</span> Intern</h6>
                                </div>
    
                                <div class="card-body">
                                  <p class="card-text">EMAIL: <a href="mailto:alex@email.com">alex@email.com</a></p>
                                  <p class="card-text">ID: 8908394</p>
                                  <p class="card-text">SCHOOL: The Univerisy</p>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
      </div>
    </body>
    
    </html>
    `;

};

module.exports = generatePage;