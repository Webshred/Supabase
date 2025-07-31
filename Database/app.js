const SUPABASE_URL = 'https://vpjpkswheenjhykhwqto.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwanBrc3doZWVuamh5a2h3cXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODAxNjIsImV4cCI6MjA2OTM1NjE2Mn0.7R_hujwzq0u1_QFnva2KIhbZ2mlZiQw2NawEuaOQrJM';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const form = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newExpense = {
        Name: document.getElementById('name').value,
        RollNum: document.getElementById('rollnum').value,
        Batch: document.getElementById('batch').value,
        Date: document.getElementById('date').value
    };

    const { error } = await supabase.from('Expense').insert([newExpense]);
    if (error) {
        alert('Error adding expense: ' + error.message);
        return;
    }

    form.reset();
    loadExpenses();
});

async function loadExpenses() {
    const { data, error } = await supabase.from('Expense').select('*').order('id', { ascending: true });
    if (error) {
        console.error(error);
        return;
    }

    expenseList.innerHTML = '';
    data.forEach(exp => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td contenteditable="true" onblur="updateExpense(${exp.id}, 'Name', this.innerText)">${exp.Name}</td>
          <td contenteditable="true" onblur="updateExpense(${exp.id}, 'RollNum', this.innerText)">${exp.RollNum}</td>
          <td contenteditable="true" onblur="updateExpense(${exp.id}, 'Batch', this.innerText)">${exp.Batch}</td>
          <td contenteditable="true" onblur="updateExpense(${exp.id}, 'Date', this.innerText)">${exp.Date}</td>
          
        `;

        expenseList.appendChild(row);
    });
}

loadExpenses();