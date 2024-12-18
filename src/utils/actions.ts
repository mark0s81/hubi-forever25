'use server'

import { Action } from "@/types/Action"

export const confirmMyAge = async(prevState: Action, formData: FormData) => {
  const birth = Date.parse(formData.get('birth') as string);
  if(birth){
    const age = calculateAge(birth);
    return { status: 'ok', message: `Età confermata: ${age} anni`}
  } 
  else return { status: 'ko', message: 'Date of birth not valid!' }
}

function calculateAge(birth: number){
  const ageDifMs = Date.now() - birth;
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}