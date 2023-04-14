import axios from "axios";

const contactsInstance = axios.create({
    baseURL: "https://6435b1eb537112453fdd6499.mockapi.io/api/contacts"
})

export const getAllContacts = async()=> {
    const {data} = await contactsInstance.get("");
    return data;
}

export const postContacts = async(data) => {
    const {data: result} = await contactsInstance.post("/", data);
    return result;
}

export const deleteContact = async(id)=> {
    const {data} = await contactsInstance.delete(`/${id}`)
    return data;
}