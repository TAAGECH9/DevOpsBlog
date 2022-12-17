/**
 * List prompt example
 */

import inquirer from 'inquirer';
import { configs } from './categories.js';


inquirer
  .prompt([
{
      type: 'checkbox',
      message: 'Select toppings',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' = The Meats = '),
        ...configs
      ],
      validate(answer:any) {
        if (answer.length < 1) {
          return 'You must choose at least one configuration';
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
