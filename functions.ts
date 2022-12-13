import axios from "axios"
import { DataForm } from "./types";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
}


export const sendDataHandler = async (data: DataForm) => {
  try {

    await axios.post("https://laravel.layouti.com/api/frontend/hireUs", data)

  } catch (error) {

    console.log(error);
  }
}