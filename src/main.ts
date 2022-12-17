/**
 * List prompt example
 */

import inquirer from 'inquirer';
import * as questionary from './prompts/questions.js'


inquirer
  .prompt([
    questionary.GeneralPrompt,
    questionary.VmPrompt,
    questionary.WindowsSecPrompt,
    questionary.IsPaasInScope,
    questionary.PaasConfigs
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
