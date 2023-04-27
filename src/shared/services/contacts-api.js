import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://6446f536ee791e1e290cc398.mockapi.io/api/contacts"
})

export const getAllContacts = async()=> {
    const {data} = await contactsInstance.get("");
    return data;
}

export const postContacts = async(data) => {
    const {data: result} = await contactsInstance.post("/", data);
    console.log(result);
    return result;
}

export const deleteContact = async(id)=> {
    const {data} = await contactsInstance.delete(`/${id}`)
    return data;
}