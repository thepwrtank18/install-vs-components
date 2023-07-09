const core = require('@actions/core');
const exec = require('@actions/exec');

try {

  const componentArray = core.getInput("components").split(",");
  let argumentArray = [];

  argumentArray.push("modify", "--installPath", "C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise");

  componentArray.forEach(element => {
    console.log(`Adding ${element} to array...`);
    argumentArray.push("--add", element);
  });

  argumentArray.push("--quiet", "--norestart", "--nocache", "--wait");

  console.log("Launching installer. This will take a while, and there's no output.");
  exec.exec("C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\vs_installer.exe", argumentArray);
  core.setOutput("success", true);
} catch (error) {
  core.setFailed(error.message);
}
