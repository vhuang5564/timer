let arg = process.argv.slice(2);

for (let i = 0; i < arg.length; i++) {
  setTimeout(() => {
    process.stdout.write('.');
  }, arg[i] * 1000);
}

