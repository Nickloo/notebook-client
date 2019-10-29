import { Container, Header, Aside, Main, Menu, MenuItem, Button, Card, Row, Col, Input, MessageBox, Message, Form, FormItem, Loading,  Table, TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.config.productionTip = false
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.use(Button)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Loading)
Vue.use(Table)
Vue.use(TableColumn)
// Vue.use(MessageBox)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = MessageBox.message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message