import IndexStore from './indexStore'
import AppStore from './appStore'
import UserStore from './userStore'
import HomeStore from './homeStore'


const indexStore = new IndexStore()
const appStore = new AppStore()
const userStore = new UserStore()
const homeStore = new HomeStore()

const stores = {
	indexStore,
	appStore,
	userStore,
	homeStore

}


export default stores