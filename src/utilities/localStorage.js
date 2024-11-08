
import toast from "react-hot-toast";


const storeData=()=>{
    const coffee=localStorage.getItem('coffee');
    if(coffee)
    {
        return JSON.parse(coffee);
    }else{
        return [];
    }
}

const addToLocalStorege=(coffee)=>{
    
    const store=storeData();
    const isExit=store.find(item=>item.id==coffee.id)
    if(isExit)
    {
        return toast.error('already added')
    }
    // console.log(store);
    store.push(coffee);
    localStorage.setItem('coffee',JSON.stringify(store));
    toast.success('Successfully added!')
}

const removeFavorite=id=>{
    const store=storeData();
    const remaining=store.filter(item=>item.id!=id);
    localStorage.setItem('coffee',JSON.stringify(remaining));
    toast.success('Successfully removed!')

}


export {addToLocalStorege,storeData,removeFavorite};