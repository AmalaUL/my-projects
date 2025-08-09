//create heading 
const heading = document.createElement('h2');
heading.textContent = 'Password Strength Checker'

//create input field
const passwordInput = document.createElement('input');
passwordInput.placeholder = 'type password...';
passwordInput.style.marginRight = '20px';
passwordInput.style.height = '40px';
passwordInput.style.width = '150px';
passwordInput.id = 'passwordInputBox';

//add div to show the result
const result = document.createElement('div');
result.style.marginTop = '10px';

//add div for progress bar
const progressBar = document.createElement('div');
progressBar.style.width = '0px'
progressBar.style.height = '10px';
progressBar.style.marginTop = '10px';
progressBar.style.border = '1px solid #ccc';
progressBar.style.backgroundColor = '#eee';
progressBar.style.transition = 'width 0.3s ease';


const unmetDiv = document.createElement('div');
unmetDiv.style.marginTop = '10px';


//add them to DOM
document.body.appendChild(heading);
document.body.appendChild(passwordInput);
document.body.appendChild(result);
document.body.appendChild(progressBar);
document.body.appendChild(unmetDiv);

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const debouncedFunction = debounce(passwordChecker, 500)

passwordInput.addEventListener('input', debouncedFunction);


function passwordChecker() {
    const passwordValue = document.getElementById('passwordInputBox').value;

    let unmet = [];

    let passed = 0;
    if (!(passwordValue.length >= 8)) {
        unmet.push('Password must be atleast 8 characters')
    } else {
        passed++;
    }
    if (!(/[A-Z]/.test(passwordValue))) {
        unmet.push('Password must contain atleast 1 capital letter')
    } else {
        passed++;
    }
    if (!(/[0-9]/.test(passwordValue))) {
        unmet.push('Password must contain atleast 1 number')
    } else {
        passed++;
    }
    if (!(/[^a-zA-Z0-9]/.test(passwordValue))) {
        unmet.push('Password must contain atleast 1 special character')
    } else {
        passed++;
    }

    progressBar.style.width = (passed * 25) + '%';

    if (passed === 1 || passed === 2) {
        progressBar.style.backgroundColor = 'red';
        result.innerHTML = 'Password Strength is Weak'
        result.style.color = 'red';
    } else if (passed === 3) {
        progressBar.style.backgroundColor = 'orange';
        result.innerHTML = 'Password Strength is Medium'
        result.style.color = 'orange';
    } else if (passed === 4) {
        progressBar.style.backgroundColor = 'green'
        result.innerHTML = 'Password Strength is Strong'
        result.style.color = 'green';
        unmetDiv.innerHTML = ''; // hide if strong
    } else {
        result.innerHTML = 'Password Strength is Very Weak';
        result.style.color = 'red';
    }

    unmetDiv.innerHTML = unmet.join('<br>');
    unmetDiv.style.color = 'red';

}
