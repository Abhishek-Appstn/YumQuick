import AsyncStorage from '@react-native-async-storage/async-storage'
import {configureStore} from '@reduxjs/toolkit'
import { YumReducer } from './Reducer';
import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore';


const persistConfig={
    key:'YumQuick',
    storage:AsyncStorage
};
const PersistedReducer = persistReducer(persistConfig,YumReducer)

const Store=configureStore({
reducer:PersistedReducer,
middleware:getdefaultMiddleware=>{
    getdefaultMiddleware({
        immutableCheck:false,
        serializableCheck:false
    })
}
})

let persister=persistStore(Store)

export{Store,persister}