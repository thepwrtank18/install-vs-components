const core = require('@actions/core');
const exec = require('@actions/exec');

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
  core.setFailed(error.message);
}
