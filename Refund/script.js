const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const form = document.querySelector("form");
const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span")
const expenseTotal = document.querySelector("aside header h2");

amount.oninput = function() {
    let valorApenasNumeros = amount.value.replace(/\D/g, "");

    let valorEmCentavos = Number(valorApenasNumeros) / 100;

    amount.value = formatCurrencyBRL(valorEmCentavos);
}

function formatCurrencyBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

form.onsubmit = (e) => {
    e.preventDefault();
    
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        categoryId: category.value,
        categoryName: category.options[category.selectedIndex].text,
        amount: amount.value,
        createdAt: new Date()
    };

    expenseAdd(newExpense);
}

function expenseAdd(newExpense) {
    try {
        const expenseItem = `
            <li class="expense">
              <img src="./img/${newExpense.categoryId}.svg" alt="Ícone de tipo da despesa" />

              <div class="expense-info">
                <strong>${newExpense.expense}</strong>
                <span>${newExpense.categoryName}</span>
              </div>

              <span class="expense-amount"><small>R$</small>${newExpense.amount.replace("R$", "")}</span>

              <img src="./img/remove.svg" alt="remover" class="remove-icon" />
            </li>
        `;

        expenseList.innerHTML += expenseItem;

        updateTotal();

        formClear();
    }
    catch(error) {
        console.log(error);
    }
}

function updateTotal() {
    try {
        const items = expenseList.children;
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

        let total = 0;

        for (let i=0; i < items.length; i++) {
            const itemAmout = items[i].querySelector(".expense-amount");

            let value = itemAmout.textContent.replace(/[^\d,]/g, "").replace(",", ".");
            value = parseFloat(value);
            
            if (!isNaN(value))
                total += Number(value);
        }

        expenseTotal.innerHTML = `<small>R$</small>${formatCurrencyBRL(total).replace("R$", "")}`;

    }
    catch(error){
        console.log(error);
    }
}

expenseList.addEventListener("click", function(event) {

    if (event.target.classList.contains("remove-icon")) {
        
        // obter li pai do elemento filho
        const item = event.target.closest(".expense");
        item.remove();
    }

    updateTotal();
});

function formClear() {
   document.querySelector("#formulario").reset();

   expense.focus();
}