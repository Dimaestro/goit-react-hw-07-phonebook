import axios from "axios";

axios.defaults.baseURL = 'https://647a0bbda455e257fa643d29.mockapi.io';

export async function fetchContacts() {
  const responce = await axios.get('/contacts');
  console.log(responce);
  return responce;
}

export async function postContact(contact) {
  const responce = await axios.post('/contacts', {...contact})
  console.log(responce);
  return responce.data;
}

export async function deleteContact(id) {
  const responce = await axios.delete(`/contacts/${id}`)
  console.log(responce);
  return responce.data;
}