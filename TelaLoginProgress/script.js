let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");
const form = document.querySelector("form");

form.addEventListener('click', function(e) {
    if(!e.target.matches('[data-action]')) {
        return;
    } 

    const actions = {
        next() {
            if(!isValidInputs())
                return;

            currentStep++;
        },
        prev() {
            currentStep--;
        }
    }

    const action = e.target.dataset.action;
    actions[action]();

    updateActiveStep();
    updateProgressStep();
});

const updateActiveStep = () => {
    formSteps.forEach(step => step.classList.remove('active'));
    formSteps[currentStep].classList.add('active');
}

const progressSteps = document.querySelectorAll(".step-progress [data-step]");
const updateProgressStep = () => {
    progressSteps.forEach((step, id) => {
        
        step.classList.remove('active');
        step.classList.remove('done');
        if(id < currentStep + 1) {
            step.classList.add('active');
        }

        if(id < currentStep)
            step.classList.add('done')
    });
}


function isValidInputs() {
    const currentFormStep = formSteps[currentStep];

    const formFields = [...currentFormStep.querySelectorAll('input'), ...currentFormStep.querySelectorAll('textarea')];

    return formFields.every((input) => input.reportValidity());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Preencher os name's dos elementos do HTML
    const datas = new FormData(form);
    alert(`TCHAU OBRIGADU !!! ${datas.get('name')}`);
});