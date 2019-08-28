const { exec } = require('shelljs');
const parseUpgradedPackages = require('./parseUpgradedPackages');

const getPromiseFromCommand = command =>
  new Promise((resolve, reject) => {
    exec(command, { silent: true }, (code, output) => {
      if (code !== 0) {
        reject(output);
      } else if (command.includes('lerna')) {
        resolve(parseUpgradedPackages(output));
      } else {
        resolve(
          parseUpgradedPackages(
            output
              .split('\n')
              .map(line => `psammead: ${line}`)
              .join('\n'),
          ),
        );
      }
    });
  });

module.exports = packages => {
  const packageList = packages.join(', ');
  const commands = [
    `npx npm-check-updates '${packageList}' --packageFile package.json -u -a --jsonUpgraded`,
    `npx lerna exec --parallel --no-bail -- npx npm-check-updates '${packageList}' -u -a --jsonUpgraded`,
  ];

  // eslint-disable-next-line no-console
  console.log(`* Running "${commands.join(' && ')}"`);

  const commandPromises = commands.map(getPromiseFromCommand);

  return Promise.all(commandPromises).then(outputs => {
    return Promise.resolve([].concat(...outputs));
  });
};
