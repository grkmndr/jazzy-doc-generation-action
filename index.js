const core = require("@actions/core")
const github = require("@actions/github")
const shell = require("shelljs")

const context = github.context

// User defined input
const jazzyVersion = core.getInput("version")
const configFilePath = core.getInput("config")
const jazzyArgs = core.getInput("args")
const token = core.getInput("personal_access_token")

const remote = `https://${token}@github.com/${context.repo.owner}/${context.repo.repo}.git`

const generateJazzyInstallCommand = () => {
  let gemInstall = "sudo gem install jazzy"

  if (jazzyVersion) {
    gemInstall += ` -v ${jazzyVersion}`
  }

  return gemInstall
}

const generateJazzyArguments = () => {
  if (configFilePath) {
    return `jazzy --config ${configFilePath}`
  }

  if (jazzyArgs) {
    return `jazzy ${jazzyArgs}`
  }

  return "jazzy"
}

const generateAndDeploy = () => {
  shell.exec(generateJazzyInstallCommand())
  shell.exec(generateJazzyArguments())
  
  shell.cd(process.env.GITHUB_WORKSPACE)
}

try {
  generateAndDeploy()
} catch (error) {
  core.setFailed(error.message)
}