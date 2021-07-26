    <template>
  <div>
      <table>
        <thead>
          <tr>
            <th> No. </th>
            <th> Description </th>
            <th> Date </th>
            <th> Amount </th>
            <th> Balance </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td> {{ index+1 }} </td>
            <td> {{ order.description }} </td>
            <td> {{ order.date }}</td>
            <td> {{ order.amount }}</td>
            <td> {{ order.balance }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import OrderStore from '@/store/Order.js'
export default {
  data() {
    return{
      orders: [],
      form: {
        date: '',
        description: '',
        amount: '',
      },
      balance:''
    } 
  },
  created() {
    this.fetchOrder()
  },
  methods:{
    fetchOrder(){
      OrderStore.dispatch('fetchData')
      this.orders = OrderStore.getters.orders
    },
  },
}
</script>

<style>
</style>