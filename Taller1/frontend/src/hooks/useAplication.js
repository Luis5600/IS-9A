import { useDispatch, useSelector } from "react-redux";
import {  onAddNewEncuesta } from "../store";
import calendarApi from "../api/calendarApi";


export const useAplication = () => {


    const dispatch = useDispatch();
    const { encuesta } = useSelector( state => state.encuesta );

    const startSavingEncuesta = async(event) => {
      try {
        await calendarApi.post('/crearEncuesta', event);
        dispatch( onAddNewEncuesta({...event}));
      } catch (error) {
        console.log(error);
      }
    }

  return {
    encuesta,
    startSavingEncuesta
  }
}
