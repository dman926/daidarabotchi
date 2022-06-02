import { CommandType } from '..';

// eslint-disable-next-line import/prefer-default-export
export function getCorePythonExecuteCommand(
  cmd: string,
  command: CommandType,
  params: string[]
): string {
  let mutateCommand = '';

  // Create the command to execute
  if (command === 'serve') mutateCommand = '';
  else if (command === 'build') mutateCommand = '-m py_compile';
  else if (command === 'lint') mutateCommand = '-m flake8';
  else if (command === 'test') mutateCommand = '-m unittest discover -s ./ -p';
  else mutateCommand = command;

  return `${cmd} ${mutateCommand} ${params.join(' ')}`;
}
