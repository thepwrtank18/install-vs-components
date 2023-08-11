const core = require('@actions/core');
const exec = require('@actions/exec');

let trialCount = 0;

const installComponents = () => {
    try {
        const componentArray = core.getInput("components").split(",");
        const argumentArray = ["modify", "--installPath", "C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise", "--quiet", "--norestart", "--nocache"];
      
        componentArray.forEach(element => {
          console.log(`Adding ${element} to array...`);
          argumentArray.push("--add", element);
        });
      
        console.log("Launching installer. This will take a while, and there's no output.");
        exec.exec("\"C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\vs_installer.exe\"", argumentArray);
        core.setOutput("success", true);
      } catch (error) {
        if (trialCount < 5) {
            console.log("An error occurred. Attempting retry...");
            trialCount++;
            installComponents();
        }
        else {
            core.setFailed(error.message);
        }
      }     
}

installComponents();
