let input = prompt();
countofbackspace = input.split("#").length - 1;
input = input.replace(/#/g, '');
input = input.substring(countofbackspace)