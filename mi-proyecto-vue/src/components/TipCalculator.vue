<template>
    <div class="tip-container">
      <h1>Calculadora de Propina</h1>
  
      <!-- Input para el total de la cuenta -->
      <div class="input-group">
        <label for="bill">Cuenta Total:</label>
        <input 
          type="number" 
          id="bill" 
          v-model="bill" 
          placeholder="Ingrese el monto de la cuenta" 
          min="0"
        />
      </div>
  
      <!-- Input para el porcentaje de propina -->
      <div class="input-group">
        <label for="tip">Porcentaje de Propina (%):</label>
        <input 
          type="number" 
          id="tip" 
          v-model="tipPercentage" 
          placeholder="Ingrese el porcentaje" 
          min="0"
          max="100"
        />
      </div>
  
      <!-- Input para dividir entre personas -->
      <div class="input-group">
        <label for="people">Número de Personas:</label>
        <input 
          type="number" 
          id="people" 
          v-model="numPeople" 
          placeholder="Ingrese la cantidad de personas" 
          min="1"
          @input="generatePeople"
        />
      </div>
  
      <!-- Botón de cálculo -->
      <button @click="calculateSplit">Calcular</button>
  
      <!-- Mostrar Totales -->
      <div class="totals">
        <p><strong>Total + Propina:</strong> ${{ totalAmount }}</p>
        <p><strong>Restante:</strong> ${{ remainingAmount }}</p>
      </div>
  
      <!-- Lista de personas con checkbox de pago -->
      <div class="people-list">
        <div v-for="(person, index) in people" :key="index" class="person-card">
          <div class="person-header">Persona {{ index + 1 }}</div>
          <div class="amount">${{ person.amount }}</div>
          <div class="paid">
            <input type="checkbox" v-model="person.paid" @change="updateRemaining" />
            <label>Pagado</label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bill: null, // Total de la cuenta
        tipPercentage: null, // Porcentaje de propina
        numPeople: 1, // Número de personas
        people: [], // Lista de personas con montos
        remainingAmount: 0 // Cantidad restante
      };
    },
    computed: {
      tipAmount() {
        if (!this.bill || !this.tipPercentage) return "0.00";
        return ((this.bill * this.tipPercentage) / 100).toFixed(2);
      },
      totalAmount() {
        if (!this.bill || !this.tipPercentage) return "0.00";
        return (parseFloat(this.bill) + parseFloat(this.tipAmount)).toFixed(2);
      }
    },
    methods: {
      // Genera la lista de personas cada vez que cambia el número
      generatePeople() {
        this.people = Array.from({ length: this.numPeople }, () => ({
          amount: "0.00",
          paid: false
        }));
      },
      // Calcula cuánto debe pagar cada persona
      calculateSplit() {
        if (!this.bill || !this.tipPercentage || this.numPeople < 1) return;
        const totalPerPerson = (this.totalAmount / this.numPeople).toFixed(2);
        this.people.forEach(person => {
          person.amount = totalPerPerson;
          person.paid = false;
        });
        this.remainingAmount = this.totalAmount;
      },
      // Resta lo que ha pagado cada persona al monto total restante
      updateRemaining() {
        const paidTotal = this.people
          .filter(person => person.paid)
          .reduce((sum, person) => sum + parseFloat(person.amount), 0);
        this.remainingAmount = (this.totalAmount - paidTotal).toFixed(2);
      }
    }
  };
  </script>
  
  <style scoped>
.tip-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
  text-align: center;
  background: #FFF3E6; /* Beige pastel */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #6D597A;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #AFCBFF;
  border-radius: 5px;
  font-size: 16px;
  background-color: #E8F0FE;
  color: #6D597A;
}

button {
  background-color: #AFCBFF;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #90A7C1;
}

.totals {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}
</style>