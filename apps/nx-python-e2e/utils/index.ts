import { check as portCheck } from 'tcp-port-used';
import chalk from 'chalk';
import kill from 'kill-port';

const KILL_PORT_DELAY = 5000;
const E2E_LOG_PREFIX = `${chalk.reset.inverse.bold.keyword('orange')(' E2E ')}`;

function e2eConsoleLogger(message: string, body?: string) {
  process.stdout.write('\n');
  process.stdout.write(`${E2E_LOG_PREFIX} ${message}\n`);
  if (body) {
    process.stdout.write(`${body}\n`);
  }
  process.stdout.write('\n');
}

export function logInfo(title: string, body?: string) {
  const message = `${chalk.reset.inverse.bold.white(
    ' INFO '
  )} ${chalk.bold.white(title)}`;
  return e2eConsoleLogger(message, body);
}

export function logError(title: string, body?: string) {
  const message = `${chalk.reset.inverse.bold.red(' ERROR ')} ${chalk.bold.red(
    title
  )}`;
  return e2eConsoleLogger(message, body);
}

export function logSuccess(title: string, body?: string) {
  const message = `${chalk.reset.inverse.bold.green(
    ' SUCCESS '
  )} ${chalk.bold.green(title)}`;
  return e2eConsoleLogger(message, body);
}

export async function killPort(port: number): Promise<boolean> {
  if (await portCheck(port)) {
    try {
      logInfo(`Attempting to close port ${port}`);
      await kill(port);
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), KILL_PORT_DELAY)
      );
      if (await portCheck(port)) {
        logError(`Port ${port} still open`);
      } else {
        logSuccess(`Port ${port} successfully closed`);
        return true;
      }
    } catch {
      logError(`Port ${port} closing failed`);
    }
    return false;
  } else {
    return true;
  }
}

export async function killPorts(port?: number): Promise<boolean> {
  return port
    ? await killPort(port)
    : (await killPort(3333)) && (await killPort(4200));
}
