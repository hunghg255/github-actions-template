// import { mkdirP } from '@actions/io'
import { getInput, setFailed } from '@actions/core'

function main() {
  try {
    const github_token: string = getInput('github_token', { required: false }).trim()
    const from_branch = getInput('from_branch', { required: false })
    const to_branch = getInput('to_branch', { required: true })

    console.log(`github_token: ${github_token}`);
    console.log(`from_branch: ${from_branch}`);
    console.log(`to_branch: ${to_branch}`);

  } catch (error: any) {
    setFailed(error.message)
  }
}

main()
