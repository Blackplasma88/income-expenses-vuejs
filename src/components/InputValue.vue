<template>
<div>
    <h1>Income Expenses</h1>

    <div>
        <div>
            <label for="date">Date : </label>
            <input type="text" v-model="form.date">
        </div>
        <br>
        <div>
            <label for="description">Description :</label>
            <input type="text" v-model="form.description">
        </div>
        <br>
        <div>
            <label for="amount">Amount :</label>
            <input type="text" v-model="form.amount">
        </div>
        <br>
        <div>
            <button @click="income(1)"> Income </button>
            <button @click="income(-1)"> Expense </button>
            <button @click="addOrder">OK</button>
        </div>
        <br><br>
    </div>
</div>
</template>

<script>
import OrderStore from '@/store/Order'
export default {
    data() {
        return {
            type: 1,
            form: {
                date: '',
                description: '',
                amount:'',
            },
            balance: 10000
        }
    },
    methods: {
        clearForm() {
            this.form = {
                date: '',
                description: '',
                amount:'',
            }
        },
        addOrder() {
            if(this.type === -1){
                this.form.amount = (-1)*this.form.amount;
            }
            this.form.amount = Number(this.form.amount)
            this.balance = this.balance + this.form.amount
            let payload = {
                date: this.form.date,
                description: this.form.description,
                amount: this.form.amount,
                balance: this.balance
            }
            console.log(payload)
            OrderStore.dispatch("addOrder", payload)
            this.clearForm()
        },
        income(type){
            this.type = type;
            console.log(type);
        }
    }
}
</script>

<style>
</style>