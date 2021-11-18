

const time = process.argv.slice(2);

time.forEach(ele => {
    if (typeof Number(ele) === 'number' && Number(ele) >= 0) {
        setTimeout(() => {
            process.stdout.write('\x07');
          }, Number(ele) * 1000); 
    }
});